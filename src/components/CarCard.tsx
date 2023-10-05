import { Car } from "@/types/car.interface"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  car: Car
}

export default function CarCard({ car }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-center min-w-[18.75rem]">
      <p className="font-mono text-sm font-semibold text-zinc-400 uppercase">{car.bodyType}</p>
      <div className="flex flex-row gap-1.5">
        <span className="font-bold text-zinc-950">{car.modelName}</span>
        <span className="font-extralight text-zinc-400">{car.modelType}</span>
      </div>
      <Image src={car.imageUrl} alt={car.modelName} width="300" height="250" />
      <div className="w-full flex items-center justify-center gap-5 mt-4">
        <Link className="flex uppercase text-blue-500 font-semibold text-xs gap-1" href="https://www.volvocars.com/">
          <span>Learn</span>
          <Image src={"../../images/chevron-small.svg"} alt="right arrow" width={12} height={12} />
        </Link>
        <Link className="flex uppercase text-blue-500 font-semibold text-xs gap-1" href="https://www.volvocars.com/">
          <span>Shop</span>
          <Image src={"../../images/chevron-small.svg"} alt="right arrow" width={12} height={12} />
        </Link>
      </div>
    </div>
  )
}