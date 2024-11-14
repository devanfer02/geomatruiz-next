"use client"

import axios from "axios";
import { redirect } from "next/navigation";

interface DeleteButtonParams {
  id: string 
}

export default function DeleteButton({ id }: DeleteButtonParams) {

  const deleteChapter = async (id: string) => {
    try {
      const res = await axios.delete(`/api/chapters/${id}`)
    
      if (res.status != 200) {
        alert("ERR: " + res.data.message)
        return
      }
  
    } catch (err) {
      console.log(err)
    }
    
    redirect("/chapters")
  }


  return (
    <button 
      type="button" 
      onClick={() => deleteChapter(id)}
      className="bg-red-600 hover:bg-red-900 duration-300 ease-in-out mx-1 px-4 py-2 rounded-md"
    >
      Delete
    </button>
  )
}