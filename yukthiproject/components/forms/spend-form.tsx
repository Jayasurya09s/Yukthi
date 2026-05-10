"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Plus, Trash2, AlertCircle, CheckCircle } from "lucide-react";

import { auditSchema } from "@/lib/validations/audit-schema";

import ToolSelector from "./tool-selector";

import { z } from "zod";

const formSchema = auditSchema;

type FormValues = z.infer<typeof formSchema>;

export default function SpendForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      teamSize: 1,

      primaryUseCase: "coding",

      tools: [
        {
          vendor: "cursor",
          planId: "pro",
          monthlySpend: 20,
          seats: 1,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const auditResponse = await fetch(
        "/api/audit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      const auditData = await auditResponse.json();

      if (!auditData.success) {
        throw new Error("Audit failed");
      }

      const summaryResponse = await fetch(
        "/api/summary",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(auditData.result),
        }
      );

      const summaryData =
        await summaryResponse.json();

      localStorage.setItem(
        "audit-result",
        JSON.stringify({
          audit: auditData.audit,
          result: auditData.result,
          summary: summaryData.summary,
        })
      );

      setSuccess(true);
      
      // Delay navigation for success feedback
      setTimeout(() => {
        router.push("/results");
      }, 1000);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to generate audit. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-24" data-section="audit-form">
      <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-8 backdrop-blur-xl md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            AI Spend Audit
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Analyze Your AI Stack
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Enter your current AI tooling setup and discover optimization opportunities with precision pricing analysis.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 space-y-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-sm font-semibold text-zinc-100">
                Team Size
              </label>

              <input
                type="number"
                min="1"
                {...register("teamSize", {
                  valueAsNumber: true,
                })}
                className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                placeholder="Number of team members"
              />
              {errors.teamSize && (
                <span className="mt-2 text-sm text-red-400">{errors.teamSize.message}</span>
              )}
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-zinc-100">
                Primary Use Case
              </label>

              <select
                {...register("primaryUseCase")}
                className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-white outline-none transition focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
              >
                <option value="coding">Coding & Development</option>
                <option value="writing">Writing & Content</option>
                <option value="research">Research & Analysis</option>
                <option value="data">Data & Analytics</option>
                <option value="mixed">Mixed Usage</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-white/20 hover:from-white/8"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-zinc-100">
                      AI Tool
                    </label>

                    <ToolSelector
                      value={watch(
                        `tools.${index}.vendor`
                      )}
                      onChange={(value) =>
                        setValue(
                          `tools.${index}.vendor`,
                          value as any
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-zinc-100">
                      Plan Type
                    </label>

                    <input
                      {...register(
                        `tools.${index}.planId`
                      )}
                      placeholder="e.g., pro, team"
                      className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-zinc-100">
                      Monthly Cost
                    </label>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      {...register(
                        `tools.${index}.monthlySpend`,
                        {
                          valueAsNumber: true,
                        }
                      )}
                      placeholder="$0.00"
                      className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-zinc-100">
                      Team Seats
                    </label>

                    <div className="flex gap-3">
                      <input
                        type="number"
                        min="1"
                        {...register(
                          `tools.${index}.seats`,
                          {
                            valueAsNumber: true,
                          }
                        )}
                        placeholder="1"
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                      />

                      {fields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition duration-300 hover:border-red-500/40 hover:bg-red-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                          aria-label="Remove tool"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              append({
                vendor: "chatgpt",
                planId: "plus",
                monthlySpend: 20,
                seats: 1,
              })
            }
            className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Plus className="h-5 w-5 transition-transform group-hover:rotate-90" />
            Add Another Tool
          </button>

          {error && (
            <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <AlertCircle className="h-5 w-5 mt-0.5 shrink-0 text-red-400" />
              <span className="text-sm text-red-200">{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
              <CheckCircle className="h-5 w-5 mt-0.5 shrink-0 text-green-400" />
              <span className="text-sm text-green-200">Audit generated successfully! Redirecting...</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full rounded-xl bg-linear-to-r from-blue-500 to-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/20 disabled:from-zinc-600 disabled:to-zinc-700 disabled:cursor-not-allowed disabled:shadow-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="relative flex items-center justify-center">
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Your Stack...
                </>
              ) : (
                <>
                  Generate Audit Report
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
