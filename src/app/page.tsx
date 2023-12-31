"use client"
import CarCard from "@/components/CarCard"
import MobilePagination from "@/components/MobilePagination"
import Filter from '@/components/Filter'
import PaginationArrow from "@/components/PaginationArrow"
import { useCars } from "@/hooks/useCars"
import { useState } from "react"

export default function Home() {
  const { cars } = useCars()
  const [selected, setSelected] = useState(0)

  function onClickNavigate(left: boolean) {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if(left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }

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
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </section>

      <PaginationArrow
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)} 
      />

      <MobilePagination selected={selected} onClick={onClickMobile} total={cars.length} />
    </div>
  )
}
