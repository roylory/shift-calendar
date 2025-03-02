import { useLocalStorage } from "usehooks-ts"

interface ContentEditableProps {
  ampm: "am" | "pm"
  day: number
  month: number
  year: number
}

function ContentEditable({ ampm, day, month, year }: ContentEditableProps) {
  const [text, setText] = useLocalStorage(`calendar-${year}-${month}-${day}-${ampm}`, "")
  return (
    <div
      contentEditable
      spellCheck="false"
      autoCorrect="false"
      className="w-full h-full p-0 text-center resize-none flex justify-center items-center leading-none text-[10px] md:text-xs lg:text-sm overflow-hidden text-ellipsis font-stretch-condensed"
      onBlur={(e) => setText(e.currentTarget.innerHTML)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          document.execCommand("insertLineBreak")
          e.preventDefault()
        }
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default ContentEditable
