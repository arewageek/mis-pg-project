export const PriButton = ({ text }) => {
  return (
    <div className="w-full p-3">
        <button className="rounded-lg text-sm font-bold text-gray-200 bg-gray-800 px-5 py-3 hover:bg-gray-700 hover:text-gray-50 transition">
            { text }
        </button>
    </div>
  )
}
