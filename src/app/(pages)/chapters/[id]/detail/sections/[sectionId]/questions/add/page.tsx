import AddForm from "./partials/form";

export default function AddQuestion() {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-ltcbrown font-bold">Add Question</h1>
      </div>
      <div className="relative overflow-x-auto mt-5">
        <AddForm chapterId={""}/>
      </div>
    </div>
  )
}