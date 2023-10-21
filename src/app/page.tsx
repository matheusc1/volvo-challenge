"use client"
import CarCard from "@/components/CarCard"
import MobilePagination from "@/components/MobilePagination"
import { useCars } from "@/hooks/useCars"
import { useState } from "react"

export default function Home() {
  const { cars } = useCars()
  const [selected, setSelected] = useState(0)
  const [clicked, setClicked] = useState(Number)

  function onClickMobile(index: number) {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if (clicked < index) cardList?.scrollTo({ left: scrollPosition + cardSize })
    else if (clicked == index) cardList?.scrollTo({ left: scrollPosition })
    else cardList?.scrollTo({ left: scrollPosition - cardSize })
  
    setSelected(index)
    setClicked(index)
  }
  
  return (
    <>
      <section
        id="card-list"
        className="ml-4 flex justify-start flex-row items-center gap-6 w-100 mt-8 overflow-hidden max-w-sm p-2
        sm:justify-start sm:max-w-7xl sm:ml-0"
      >
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </section>

      <MobilePagination selected={selected} onClick={onClickMobile} total={cars.length} />
    </>
  )
}
