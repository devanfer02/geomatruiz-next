import { fetchSectionByID } from "@/services/sections";
import EditForm from "./partials/form"

type AddSectionProps =  {
  params: { 
    id: string 
    sectionId: number;
  }
}

export default async function EditSection({params}: AddSectionProps) {
  const { id, sectionId } = await params 

  const [ section, err ] = await fetchSectionByID(sectionId)

  if (section == null) {
    return (
      <div>
        <h1>Section not found</h1>
      </div>
    )
  }

  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Edit Section Chapter</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5">
        <EditForm chapterId={id} level={sectionId} section={section}/>
      </div>
    </section>
  )
}