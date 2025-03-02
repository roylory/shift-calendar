import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

function Calendar() {
  const today = new Date()
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const currentMonthString = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(currentYear, currentMonth))

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1)
      setCurrentMonth(11)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1)
      setCurrentMonth(0)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center pb-4">
        <button
          onClick={goToPreviousMonth}
          className="cursor-pointer print:hidden hover:bg-gray-200 rounded-full p-1"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl text-center m-4">{currentMonthString} {currentYear}</h2>
        <button onClick={goToNextMonth} className="cursor-pointer print:hidden hover:bg-gray-200 rounded-full p-1">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-around">
          <div className="text-center">Sun</div>
          <div className="text-center">Mon</div>
          <div className="text-center">Tue</div>
          <div className="text-center">Wed</div>
          <div className="text-center">Thu</div>
          <div className="text-center">Fri</div>
          <div className="text-center">Sat</div>
        </div>
        <div className="flex flex-wrap w-full">
          {Array.from({ length: new Date(currentYear, currentMonth, 1).getDay() }).map((_, index) => (
            <div key={index} className="w-1/7 h-16"></div>
          ))}
          {Array.from({ length: new Date(currentYear, currentMonth + 1, 0).getDate() }).map((_, index) => (
            <div key={index} className="w-1/7 h-16 flex items-center justify-center">{index + 1}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Calendar
