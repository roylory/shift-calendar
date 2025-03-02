import ContentEditable from "./ContentEditable"

function CalendarCell({ day }: { day: number }) {
  return (
    <div className="flex flex-col p-0.5 relative">
      <span className="absolute left-2 top-1 text-sm">{day}</span>
      <div className="h-15 bg-amber-200">
        <ContentEditable />
      </div>
      <div className="h-15 bg-blue-100">
        <ContentEditable />
      </div>
    </div>
  )
}

export default CalendarCell
