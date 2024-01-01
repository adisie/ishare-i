import { NavLink } from "react-router-dom"

const GroupsNav = () => {
  return (
    <div className="bg-gray-300">
      {/* header */}
      <header className="h-[32px] flex items-center justify-end">
        <ul className="flex items-center max-w-[265px] px-1 flex-grow border-b-2 border-opacity-[.3] font-serif text-emerald-900 text-sm border-emerald-700 mx-1">
          <li>
            <NavLink>All</NavLink>
          </li>
          <li className="mx-3">
            <NavLink>Mine</NavLink>
          </li>
          <li>
            <NavLink>Online</NavLink>
          </li>
        </ul>
      </header>
      {/* group list */}
      <div className="flex items-center justify-end">
        <ul className="max-w-[265px] px-1 flex-grow font-serif text-emerald-900 text-sm">
          <li>
            <span>Group Name</span>
          </li>
          <li>
            <span>Group Name</span>
          </li>
          <li>
            <span>Group Name</span>
          </li>
          <li>
            <span>Group Name</span>
          </li>
          <li>
            <span>Group Name</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GroupsNav