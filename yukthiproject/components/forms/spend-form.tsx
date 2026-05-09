"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Plus, Trash2 } from "lucide-react";

import { auditSchema } from "@/lib/validations/audit-schema";

import ToolSelector from "./tool-selector";

import { z } from "zod";

const formSchema = auditSchema;

type FormValues = z.infer<typeof formSchema>;

export default function SpendForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
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

      router.push("/results");
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
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            AI Spend Audit
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Analyze Your AI Stack
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Enter your current AI tooling setup and discover optimization opportunities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 space-y-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Team Size
              </label>

              <input
                type="number"
                {...register("teamSize", {
                  valueAsNumber: true,
                })}
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Primary Use Case
              </label>

              <select
                {...register("primaryUseCase")}
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-500"
              >
                <option value="coding">Coding</option>
                <option value="writing">Writing</option>
                <option value="research">Research</option>
                <option value="data">Data</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="rounded-3xl border border-white/10 bg-black/20 p-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Tool
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
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Plan
                    </label>

                    <input
                      {...register(
                        `tools.${index}.planId`
                      )}
                      placeholder="pro / team"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Monthly Spend
                    </label>

                    <input
                      type="number"
                      {...register(
                        `tools.${index}.monthlySpend`,
                        {
                          valueAsNumber: true,
                        }
                      )}
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Seats
                    </label>

                    <div className="flex gap-3">
                      <input
                        type="number"
                        {...register(
                          `tools.${index}.seats`,
                          {
                            valueAsNumber: true,
                          }
                        )}
                        className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-500"
                      />

                      {fields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition hover:bg-red-500/20"
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
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
          >
            <Plus className="h-4 w-4" />
            Add Another Tool
          </button>

          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-white py-4 text-lg font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Analyzing AI Spend..."
              : "Generate Audit"}
          </button>
        </form>
      </div>
    </section>
  );
}
