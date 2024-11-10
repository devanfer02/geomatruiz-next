export default function AddChapter() {
  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">Add Chapter</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5">
        <form action="">
          <div className="mb-3 w-full">
            <label htmlFor="" className="block text-ltcbrown font-semibold">
              Judul
            </label>
            <input type="text" className="border border-ltcbrown p-2 w-full rounded-lg" />
          </div>
          <div className="mb-3 w-full">
            <label htmlFor="" className="block text-ltcbrown font-semibold">
              Deskripsi
            </label>
            <textarea className="border border-ltcbrown p-2 w-full rounded-lg">
            </textarea>
          </div>
          <div className="mb-3 w-full">
            <label htmlFor="" className="block text-ltcbrown font-semibold">
              Judul
            </label>
            <input type="text" className="border border-ltcbrown p-2 w-full rounded-lg" />
          </div>
          <div className="mb-3 w-full">
            <button className="bg-ltcbrown px-4 py-2 rounded-lg text-white border border-ltcbrown hover:bg-white hover:text-ltcbrown duration-200 ease-in-out">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}