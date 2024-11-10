"use client"

import { Icon } from "@iconify/react"
import navs from '@/constants/navs.json'
import Link from 'next/link'
import { usePathname } from "next/navigation"

export default function SideBar() {
  const path = usePathname()

  return (
      <nav
        className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[220px] overflow-y-auto text-center bg-ltcbrown"
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <img src="/logo.png" alt="" className='w-[30px]' />
            <h1 className="font-bold text-ltccrem text-xl ml-3">Litecartes CMS</h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
            ></i>
          </div>
        </div>
        <hr className="my-2 bg-gray-600 h-[1px]"/>
        { navs.map((nav, index) => (
          <Link 
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-ltccrem hover:text-ltcbrown ${nav.link == path ? 'text-ltcbrown' : 'text-ltccrem'} group sidebar ${nav.link == path ? 'bg-ltccrem' : ''}`}
            key={index}
            href={nav.link}
          >
            <Icon icon={nav.icon} className='w-[24px] h-[24px]'/>
            <span className={`text-[15px] ml-4 font-bold `}>{ nav.name }</span>
          </Link>
        ))}
        <hr className="my-4 bg-gray-600 h-[1px]"/>
      </nav>
  )
}