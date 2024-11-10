import AddForm from "./partials/form";

export default function AddChapter() {
  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Add Chapter</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5">
        <AddForm />
      </div>
    </section>
  )
}