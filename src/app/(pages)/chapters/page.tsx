import FlashError from "@/components/flash/error";
import ChapterTable from "@/components/table/chapter";

export default function Chapters() {
  const error = null 

  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Chapters</h1>
        </div>
        <div className="w-1/2 flex justify-end">
          <a href="/chapters/add" className="bg-blue-500 hover:bg-blue-700 duration-300 ease-in-out text-white px-4 py-2 rounded-md">
            Add Chapter
          </a>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5">
        { error ? (
          <FlashError message={(error as Error).toString()} />
        ) : (
          <ChapterTable/>
        )}
      </div>
    </section>
  )
}