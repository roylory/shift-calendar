import ContentEditable from "./ContentEditable"

function CalendarCell({ day, month, year }: { day: number, month: number, year: number }) {
  return (
    <div className="flex flex-col p-0.5 relative">
      <span className="absolute left-2 top-1 text-sm text-gray-800">{day}</span>
      <div className="h-15 bg-amber-200">
        <ContentEditable ampm="am" day={day} month={month} year={year} />
      </div>
      <div className="h-15 bg-blue-100">
        <ContentEditable ampm="pm" day={day} month={month} year={year} />
      </div>
    </div>
  )
}

export default CalendarCell
