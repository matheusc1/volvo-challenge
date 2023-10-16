"use client"
import CarCard from "@/components/CarCard"
import { useCars } from "@/hooks/useCars"
import PaginationArrow from "@/components/PaginationArrow"

export default function Home() {
  const { cars } = useCars()

  function onClickNavigate(left: boolean) {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if(left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }

  return (
    <div className="flex flex-col items-center justify-between max-h-full max-w-full w-100">
      <section id="card-list" className="flex flex-row items-center justify-start max-w-7xl gap-6 w-100 mt-8 overflow-hidden">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </section>

      <PaginationArrow 
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)} 
      />
    </div>
  )
}
