"use client"
import CarCard from "@/components/CarCard"
import MobilePagination from "@/components/MobilePagination"
import Filter from '@/components/Filter'
import { useCars } from "@/hooks/useCars"
import { useState } from "react"

export default function Suv() {
  const { cars } = useCars()
  const sedan = cars.filter(car => car.bodyType === "sedan")
  const [selected, setSelected] = useState(0)

  function onClickMobile(index: number) {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;

    cardList?.scrollTo({ left: index * cardSize })
  
    setSelected(index)
  }

  return (
    <div className="flex flex-col items-center justify-between max-h-full max-w-full w-100">
      <Filter />

      <section
        id="card-list"
        className="px-3 flex justify-start flex-row items-center gap-6 w-100 mt-8 overflow-hidden max-w-sm 
        sm:justify-start sm:max-w-7xl sm:ml-0 sm:px-1"
      >
        {sedan.map(car => <CarCard key={car.id} car={car} />)}
      </section>

      <MobilePagination selected={selected} onClick={onClickMobile} total={sedan.length} />
    </div>
  )
}