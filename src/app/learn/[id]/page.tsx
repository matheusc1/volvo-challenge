"use client"
import { useCars } from "@/hooks/useCars"
import ChevronCircled from "../../../../public/images/chevron-circled.svg"
import Image from "next/image"
import Link from "next/link"


export default function LearnLayout({ params }: { params: { id: string } }) {
  const { cars } = useCars()
  const car = cars.find(car => params.id === car.id)

  return (
    <div className="max-w-sm min-h-full w-100 h-100 flex flex-col sm:max-w-full">
      <Link className="flex items-center p-4 gap-4" href={"/"}>
        <Image
          src={ChevronCircled}
          alt="left arrow"
          className="rotate-180 hover:scale-105 transform transition-transform"
          priority
        />
        <span>Back</span>
      </Link>

      <section className="flex-col flex items-center justify-center mt-5">
        <h1 className="text-2xl font-bold">{car?.modelName}</h1>

        <div className="sm:flex-row flex flex-col justify-center gap-28 items-center mt-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-sm font-semibold text-zinc-500 uppercase">{car?.bodyType}</span>
            <span className="font-extralight text-zinc-700">{car?.modelType}</span>
            <Image
              className="rounded-md"
              src={car?.imageUrl ?? ""} 
              alt={car?.modelName ?? "Erro ao carregar a imagem"}
              width={384}
              height={288}
              priority
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-lg">Description:</span>
            <p className="w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem, optio molestiae nesciunt eaque, aliquam quaerat nam voluptates minus culpa itaque laudantium nihil. Iure laudantium numquam, nam temporibus impedit eum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab, ex cum doloribus esse necessitatibus nesciunt sapiente quisquam voluptate voluptatibus atque reprehenderit repellendus provident itaque accusamus, alias veniam perspiciatis sed.
            </p>
          </div>
        </div>
        
      </section>
    </div>
  )
}
