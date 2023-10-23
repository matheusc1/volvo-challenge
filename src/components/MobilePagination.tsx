interface MobilePaginationProps {
  total: number
  onClick: (i: number) => void
  selected: number
}

export default function MobilePagination({ total, onClick, selected }: MobilePaginationProps) {
  return (
    <div className="sm:hidden flex w-100 items-center justify-center gap-1.5 mt-12">
      {Array.from({ length: total })
        .map((element, i) => 
        <button
          className={`w-4 h-4 rounded-full ${i === selected ? "bg-neutral-800" : "bg-neutral-300" }`}
          key={i}
          onClick={() => onClick(i)}
        ></button>
      )}
    </div>
  )
}