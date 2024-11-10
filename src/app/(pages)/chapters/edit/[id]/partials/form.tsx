'use client';

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
      <div className="mb-3 w-full">
        <label htmlFor="" className="block text-ltcbrown font-semibold">
          Judul
        </label>
        <input 
          type="text" 
          className="border border-ltcbrown p-2 w-full rounded-lg" 
          {...register("title", { required: "Title is required"})}
          />
      </div>
      <div className="mb-3 w-full">
        <label htmlFor="" className="block text-ltcbrown font-semibold">
          Deskripsi
        </label>
        <textarea 
          className="border border-ltcbrown p-2 w-full rounded-lg resize-none"
          rows={8}
          cols={10}
          {...register("description", { required: "Description is required"})}
        >
        </textarea>
      </div>
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
          Tambah
        </button>
      </div>
    </form>   
  )
}