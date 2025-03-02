function CalendarCell({ day }: { day: number }) {
  return (
    <div className="flex flex-col p-0.5">
      <div className="h-15 bg-amber-200">
        <span className="text-sm pl-1">{day}</span>
      </div>
      <div className="h-15 bg-blue-100"></div>
    </div>
  )
}

export default CalendarCell
