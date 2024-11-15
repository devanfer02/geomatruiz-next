"use client"

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  requireMsg: string;
  register: UseFormRegister<T>;
}

export default function Textarea<T extends FieldValues>({ label, name, type = "text", requireMsg, register }: TextareaProps<T>) {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={label} className="block text-ltcbrown font-semibold">
        { label }
      </label>
      <textarea 
          className="border border-ltcbrown p-2 w-full rounded-lg resize-none"
          rows={8}
          cols={10}
          {...register(name, { required: requireMsg})}
        >
        </textarea>
    </div>
  )
}