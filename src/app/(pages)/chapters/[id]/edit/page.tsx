import { use } from 'react';
import EditForm from './partials/form'
import { fetchChapterByID } from '@/services/chapters';

interface EditChapterParam {
  params: {
    id: string;
  }
}

export default async function EditChapter({ params }: EditChapterParam) {
  const { id } = await params 

  const [chapter, error] = await fetchChapterByID(id)

  if (chapter == null ) {
    return (
      <div>
        <h1>Chapter not found</h1>
      </div>
    )
  }

  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Edit Chapter</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5">
        <EditForm chapter={chapter}/>
      </div>
    </section>
  )
}
