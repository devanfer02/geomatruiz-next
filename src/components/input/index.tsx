"use client"

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  requireMsg: string;
  register: UseFormRegister<T>;
}

export default function Input<T extends FieldValues>({ label, name, type = "text", requireMsg, register }: InputProps<T>) {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={label} className="block text-ltcbrown font-semibold">
        { label }
      </label>
      <input 
        type={type}
        className="border border-ltcbrown p-2 w-full rounded-lg" 
        {...register(name, { required: requireMsg})}
        />
    </div>
  )
}