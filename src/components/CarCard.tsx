import { Car } from "@/types/car.interface"
import Image from "next/image"
import Link from "next/link"
import ChevronSmall from "../../public/images/chevron-small.svg"

interface CardProps {
  car: Car
}

export default function CarCard({ car }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-center min-w-[18.75rem]">
      <p className="font-mono text-sm font-semibold text-zinc-400 uppercase">{car.bodyType}</p>
      <div className="flex flex-row gap-1.5 mb-3 items-center justify-center">
        <span className="font-bold text-sm text-zinc-950">{car.modelName}</span>
        <span className="font-extralight text-zinc-400">{car.modelType}</span>
      </div>
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        width={384}
        height={288}
        priority
      />
      <div className="w-full flex justify-center gap-5 mt-4">
        <Link
          className="flex items-center justify-center uppercase tracking-wider text-blue-600 font-semibold text-xs gap-1 hover:underline"
          href="https://www.volvocars.com/"
        >
          <span>Learn</span>
          <Image
            src={ChevronSmall}
            alt="right arrow" 
            width={12} 
            height={12}
            style={{ width: 12, height: 12 }}
          />
        </Link>
        <Link
          className="flex items-center justify-center uppercase tracking-wider text-blue-600 font-semibold text-xs gap-1 hover:underline"
          href="https://www.volvocars.com/"
        >
          <span>Shop</span>
          <Image
            src={ChevronSmall}
            alt="right arrow"
            width={12}
            height={12} 
            style={{ width: 12, height: 12 }}
          />
        </Link>
      </div>
    </div>
  )
}