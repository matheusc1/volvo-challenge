"use client"
import PaginationArrow from "./PaginationArrow"

export default function Pagination() {  
  function onClickNavigate(left: boolean) {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if(left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else cardList?.scrollTo({ left: scrollPosition + cardSize })
  }
  
  return (
    <PaginationArrow
      onClickLeft={() => onClickNavigate(true)}
      onClickRight={() => onClickNavigate(false)} 
    />
  )
}
