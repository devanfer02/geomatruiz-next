'use client';

import Input from "@/components/input";
import axios from "axios";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

interface EditFormParams {
  chapterId: string;
  level: number;
  section: Section
}

export default function EditForm({chapterId, level, section}: EditFormParams) {
  const { register, handleSubmit } = useForm<SectionRequest>({
    defaultValues: section
  })

  const onSubmit = async (data: SectionRequest) => {
    try {
      const res = await axios.put(`/api/chapters/${chapterId}/sections/${level}`, data)
  
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
      <Input<SectionRequest> label="Level" name="level" type="text" register={register} requireMsg="Level is required" />
      <div className="mb-3 w-full">
        <button 
          className="bg-ltcbrown px-4 py-2 rounded-lg text-white border border-ltcbrown hover:bg-white hover:text-ltcbrown duration-200 
          ease-in-out"
          >
          Update
        </button>
      </div>
    </form>   
  )
}