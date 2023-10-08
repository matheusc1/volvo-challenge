"use client"
import CarCard from "@/components/CarCard"
import { useCars } from "@/hooks/useCars"
import ChevronCircled from "../../public/images/chevron-circled.svg"
import Image from "next/image"

export default function Home() {
  const { cars } = useCars()
  return (
    <div className="flex flex-col items-center justify-between max-w-100 w-100 min-h-screen overflow-hidden">
      <section className="flex items-center justify-start gap-6 w-100 mt-8">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </section>

      <div className="flex justify-end pb-32 w-full gap-1 mr-14">
        <Image
          src={ChevronCircled}
          alt="left arrow"
          className="cursor-pointer rotate-180"
          priority
        />
        <Image
          src={ChevronCircled}
          alt="right arrow"
          className="cursor-pointer"
          priority
        />
      </div>
    </div>
  )
}
