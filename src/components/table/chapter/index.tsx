import { fetchAllChapters } from "@/services/chapters";
import { use } from "react";
import DeleteButton from "./partials/delbutton";

export default function ChapterTable() {
  const [chapters, error] = use(fetchAllChapters())

  if (chapters == null || error != null) {
    return (
      <div>
        <h1>Error fetching data</h1>
      </div>
    )
  }

  return (
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
                    Image 
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Action 
                </th>
            </tr>
        </thead>
        <tbody>
        { chapters.map((chapter, index) => (
          <tr className="border-b bg-ltccrem group" key={index}>
              <th scope="row" className="px-6 py-4 font-medium text-ltcbrown whitespace-nowrap ">
                  { index + 1 }
              </th>
              <td className="px-6 py-4 text-center"> 
                { chapter.title }
              </td>
              <td className="px-6 py-4 ">
                <span className="block overflow-hidden text-ellipsis text-center">
                  { chapter.description }
                </span>
              </td>
              <td className="px-6 py-4 ">
                <span className="block overflow-hidden text-ellipsis">
                  { chapter.imageLink }
                </span>
              </td>
              <td className="px-6 py-4 text-center flex text-white font-semibold justify-center items-center">
                  <a href={`/chapters/edit/${chapter.id}`} className="bg-green-600 hover:bg-green-900 duration-300 ease-in-out mx-1 px-4 py-2 rounded-md">
                    Edit Chapter
                  </a>
                  <DeleteButton id={chapter.id}/>
              </td>
          </tr>
        ))}
        </tbody>
    </table>
  )
}