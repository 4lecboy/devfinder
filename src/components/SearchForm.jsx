

export function SearchForm() {
  return (
    <form className="flex gap-2 items-center bg-slate-800 p-3 rounded-lg">
        <input type="text" placeholder="Search GitHub username..." className="flex-1 bg-transparent outline-none placeholder-slate-500" />
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium">Search</button>
    </form>
  )
}
