'use client';

import axios from "axios";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

interface AddFormParams {
  chapterId: string;
}

export default function AddForm({chapterId}: AddFormParams) {
  const { register, handleSubmit } = useForm<SectionRequest>()

  const onSubmit = async (data: SectionRequest) => {
    try {
      const res = await axios.post(`/api/chapters/${chapterId}/sections`, data)
  
      if (res.status != 200) {
        alert("ERR: " + res.data.message)
        return
      }
      console.log("OKE")
      
    } catch (err) {
      console.log(err)
    }
    
    redirect(`/chapters/${chapterId}/detail`)
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 w-full">
        <label htmlFor="" className="block text-ltcbrown font-semibold">
          Level
        </label>
        <input 
          type="text" 
          className="border border-ltcbrown p-2 w-full rounded-lg" 
          {...register("level", { required: "Title is required"})}
          />
      </div>
      <div className="mb-3 w-full">
        <button 
          className="bg-ltcbrown px-4 py-2 rounded-lg text-white border border-ltcbrown hover:bg-white hover:text-ltcbrown duration-200 
          ease-in-out"
          >
          Tambah
        </button>
      </div>
    </form>   
  )
}