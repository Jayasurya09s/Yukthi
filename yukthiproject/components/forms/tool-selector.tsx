"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tools = [
  {
    label: "ChatGPT",
    value: "chatgpt",
  },
  {
    label: "Cursor",
    value: "cursor",
  },
  {
    label: "Claude",
    value: "claude",
  },
  {
    label: "GitHub Copilot",
    value: "copilot",
  },
  {
    label: "Gemini",
    value: "gemini",
  },
];

interface ToolSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ToolSelector({
  value,
  onChange,
}: ToolSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-12 border-white/10 bg-white/5 text-white">
        <SelectValue placeholder="Select AI Tool" />
      </SelectTrigger>

      <SelectContent>
        {tools.map((tool) => (
          <SelectItem
            key={tool.value}
            value={tool.value}
          >
            {tool.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}