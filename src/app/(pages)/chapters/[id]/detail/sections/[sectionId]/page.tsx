import QuestionsTable from "@/components/table/questions/page";
import { fetchChapterByID } from "@/services/chapters";
import { use } from "react";

interface EditSectionProps {
  params: {
    id: string;
    sectionId: number;
  }
}

export default async function DetailSection({ params } : EditSectionProps) {
  const { id, sectionId } = await params 

  const [ chapter, error ] = use(fetchChapterByID(id))

  if (chapter == null || error != null) {
    return (
      <div>
        <h1>Chapter not found</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl text-ltcbrown font-bold">Chapter : { chapter.title }</h1>
          <p>Level : { sectionId }</p>
          <p>
            { chapter.description }
          </p>
        </div>
        <div className="w-1/2 justify-end flex">
          <a href={`/chapters/${id}/detail/sections/add`} className="bg-blue-500 hover:bg-blue-700 duration-300 ease-in-out text-white px-4 py-2 rounded-md flex items-center self-center">
            Add Section
          </a>
        </div>
      </div>      
      <div>
        { error ? 
          <div>
            <h1>{(error as Error).message}</h1>
          </div> :
          <QuestionsTable id={id}/>
        }
      </div>
    </div>
  )
}

