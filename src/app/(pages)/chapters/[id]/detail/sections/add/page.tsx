import AddForm from "./partials/form";

type AddSectionProps =  {
  params: { id: string }
}

export default async function AddSection({params}: AddSectionProps) {
  const { id } = await params 

  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Add Section to Chapter</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5">
        <AddForm chapterId={id}/>
      </div>
    </section>
  )
}