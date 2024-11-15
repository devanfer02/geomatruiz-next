'use client';

import Input from "@/components/input";
import Textarea from "@/components/input/textarea";
import axios from "axios";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

interface AddFormParams {
  chapterId: string;
}

export default function AddForm({chapterId}: AddFormParams) {
  const { register, handleSubmit } = useForm<QuestionRequest>()
  

  const onSubmit = async (data: QuestionRequest) => {
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
      <Input<QuestionRequest> label="Title" name="title" type="text" register={register} requireMsg="Title is required" />
      <Textarea<QuestionRequest> label="Description" name="description" type="text" register={register} requireMsg="Description is required" />
      <Input<QuestionRequest> label="Question" name="question" type="text" register={register} requireMsg="Question is required" />
      <label htmlFor="" className="text-ltcbrown font-semibold">Options</label>
      <div className="border border-ltcbrown p-5 rounded-lg mb-3">
        {[1, 2, 3].map(num => (
        <div className="mb-3 " key={num}>
          <Input<QuestionRequest> label={`Option ${num}`} name="optVal1" type="text" register={register} requireMsg="Option 1 is required"/>
        </div>
        ))}
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