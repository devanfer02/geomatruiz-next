import { use } from "react";
import DeleteButton from "./partials/delbutton";
import { fetchSectionsByChapterID } from "@/services/sections";

interface SectionTableParam {
  id: string;
}

export default function SectionTable({id}: SectionTableParam) {
  
  const [sections, error] = use(fetchSectionsByChapterID(id))

  if (sections == null || error != null) {
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
                    Level 
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        { sections.map((section, index) => (
          
          <tr className="border-b bg-ltccrem group duration-300 ease-in-out hover:text-white hover:bg-ltcbrown" key={index}>
              <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                  { index + 1 }
              </td>
              <td className="px-6 py-4 text-center"> 
                { section.level }
              </td>
              <td className="px-6 py-4 text-center flex text-white font-semibold justify-center items-center">
                  <a href={`/chapters/${id}/detail/sections/${section.level}`} className="bg-blue-500 mx-1 px-4 py-2 rounded-md">
                    Show
                  </a>
                  <a href={`/chapters/${id}/detail/sections/edit/${section.level}`} className="bg-green-600 hover:bg-green-900 duration-300 ease-in-out mx-1 px-4 py-2 rounded-md">
                    Edit
                  </a>
                  
              </td>
          </tr>
        ))}
        </tbody>
    </table>
  )
}