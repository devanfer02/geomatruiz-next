import FlashError from "@/components/flash/error";

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
        <table className="w-full text-sm text-left rtl:text-right text-ltc-brown">
            <thead className="text-xs uppercase text-ltccrem bg-ltcbrown">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        No 
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Title 
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Image Link 
                    </th>
                </tr>
            </thead>
            <tbody>
              {/* { questions.map((question, index) => (
                <tr className="border-b bg-ltccrem">
                    <th scope="row" className="px-6 py-4 font-medium text-ltcbrown whitespace-nowrap ">
                        { index + 1 }
                    </th>
                    <td className="px-6 py-4 text-center">
                        { question.category_id }
                    </td>
                    <td className="px-6 py-4 text-center"> 
                      { question.task_uid }
                    </td>
                    <td className="px-6 py-4 text-center"> 
                      { question.title }
                    </td>
                    <td className="px-6 py-4 ">
                      <span className="block w-[100px] overflow-hidden text-ellipsis">
                        { question.literacy.substring(0, 100) }
                      </span>
                    </td>
                    <td className="px-6 py-4">
                        { question.question }
                    </td>
                    <td className="px-6 py-4 text-center">
                        { question.answer }
                    </td>
                    <td className="px-6 py-4 text-center flex text-white font-semibold justify-center items-center">
                        <a href={`/questions/edit/${question.uid}`} className="bg-green-600 hover:bg-green-900 duration-300 ease-in-out mx-1 px-4 py-2 rounded-md">
                          Edit Question
                        </a>
                        <button 
                          type="button" 
                          className="bg-red-600 hover:bg-red-900 duration-300 ease-in-out mx-1 px-4 py-2 rounded-md"
                        >
                          Delete Question
                        </button>
                    </td>
                </tr>
              ))} */}
            </tbody>
        </table>
        )}
      </div>
    </section>
  )
}