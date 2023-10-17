import ChevronCircled from "../../public/images/chevron-circled.svg"
import Image from "next/image"

interface PaginationArrowsProps {
  onClickLeft: () => void
  onClickRight: () => void
}

export default function PaginationArrow({ onClickLeft, onClickRight }: PaginationArrowsProps) {
  return (
    <div className="hidden sm:flex justify-end pb-32 max-w-7xl w-full gap-1 items-center mt-10 ">
      <button onClick={onClickLeft}>
        <Image
          src={ChevronCircled}
          alt="left arrow"
          className="cursor-pointer rotate-180 hover:scale-105 transform transition-transform"
          priority
        />
      </button>

      <button onClick={onClickRight}>
        <Image
          src={ChevronCircled}
          alt="right arrow"
          className="cursor-pointer hover:scale-105 transform transition-transform"
          priority
        />
      </button>
    </div>
  )
}

