import { MdSupervisorAccount } from "react-icons/md"

const MyGroups = () => {
  return (
    <ul className="max-w-[300px] px-1 flex-grow font-serif h-full text-emerald-900 text-sm">
        <li className="mb-2 p-1 w-full border-b border-emerald-800 border-opacity-[.1] flex items-center justify-between">
        <span className="flex items-center cursor-pointer">
            <MdSupervisorAccount className="text-2xl mr-1"/>
            <span>Software Sec.B</span>
        </span>
        <button className="rounded-[.3rem] hover:bg-emerald-700 hover:text-gray-300 transition-all ease-linear duration-300 px-2">delete</button>
        </li>
    </ul>
  )
}

export default MyGroups