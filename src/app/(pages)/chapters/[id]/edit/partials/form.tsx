'use client';

import Input from "@/components/input";
import Textarea from "@/components/input/textarea";
import axios from "axios";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

interface EditFormParam {
  chapter: Chapter
}

export default function EditForm({chapter} : EditFormParam ) {
  const { register, handleSubmit } = useForm<ChapterRequest>({
    defaultValues: chapter
  })

  const onSubmit = async (data: ChapterRequest) => {
    try {
      const res = await axios.put(`/api/chapters/${chapter.id}`, data)
  
      if (res.status != 200) {
        alert("ERR: " + res.data.message)
        return
      }
      console.log("OKE")
      
    } catch (err) {
      console.log(err)
    }
    
    redirect("/chapters")
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Input<ChapterRequest> label="Judul" name="title" type="text" register={register} requireMsg="Title is required"/>
      <Textarea<ChapterRequest> label="Deskripsi" name="description" type="text" register={register} requireMsg="Description is required"/>
      <Input<ChapterRequest> label="Urutan" name="order" type="number" register={register} requireMsg="Order is required"/>
      <div className="mb-3 w-full">
        <label htmlFor="" className="block text-ltcbrown font-semibold">
          Image 
        </label>
        <input type="text" className="border border-ltcbrown p-2 w-full rounded-lg" />
      </div>
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