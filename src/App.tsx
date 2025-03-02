import Calendar from "./Calendar"
import { PrinterIcon } from "@heroicons/react/20/solid"

function App() {
  return (
    <div className="container mx-auto p-1 md:p-4">
      <Calendar />
      <button onClick={() => window.print()} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-400 print:hidden flex items-center justify-center gap-2 cursor-pointer mx-auto">
        <PrinterIcon className="w-6 h-6" />
        Print
      </button>
    </div>
  )
}

export default App
