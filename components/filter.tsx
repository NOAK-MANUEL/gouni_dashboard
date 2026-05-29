"use client"

export default function Filter() {
  return (
<div className="
bg-white
border
border-gray-200
rounded-2xl
p-4
flex
flex-wrap
items-end
gap-4
shadow-sm
mb-6
">
  <div className="flex flex-col gap-1">
    <label className="
    text-[11px]
    uppercase
    tracking-wide
    text-gray-400
    font-medium
    ">
      Faculty
    </label>

    <select
      className="
      bg-gray-100
      border
      border-gray-300
      rounded-lg
      px-3
      py-2
      text-sm
      min-w-[180px]
      outline-none
      focus:border-blue-600
      "
    >
      <option>All Faculties</option>
    </select>
  </div>

  <div className="flex flex-col gap-1">
    <label className="
    text-[11px]
    uppercase
    tracking-wide
    text-gray-400
    font-medium
    ">
      Programme
    </label>

    <select
      className="
      bg-gray-100
      border
      border-gray-300
      rounded-lg
      px-3
      py-2
      text-sm
      min-w-[180px]
      outline-none
      focus:border-blue-600
      "
    >
      <option>All Programmes</option>
    </select>
  </div>

  <button
    className="
    border
    border-gray-300
    px-4
    py-2
    rounded-lg
    text-sm
    hover:bg-gray-100
    transition
    "
  >
    Reset Filters
  </button>
</div>  )
}
