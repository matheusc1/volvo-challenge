"use client"
import CarCard from "@/components/CarCard"
import { useCars } from "@/hooks/useCars"

export default function Home() {
  const { cars } = useCars()
  console.log(cars)
  return (
    <div className="flex flex-col items-center justify-center max-w-100 w-100 h-100 overflow-hidden">
      <section className="flex items-center justify-start gap-6 w-100 mt-8">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </section>
    </div>
  )
}
