"use client"
import { useCars } from "@/hooks/useCars"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Filter() {
  const pathname = usePathname()

  const { cars } = useCars()
  const suv = cars.filter(car => car.bodyType === "suv")
  const estate = cars.filter(car => car.bodyType === "estate")
  const sedan = cars.filter(car => car.bodyType === "sedan")

  return (
    <ul className="flex gap-6 mt-8">
      <li>
        <Link
          className={`hover:underline hover:decoration-2 underline-offset-4 ${pathname === "/" ?
          "underline decoration-sky-700 decoration-2" : "text-zinc-400"}`}
          href={"/"}
        >
          Todos ({cars.length})
        </Link>
      </li>

      <li>
        <Link
          className={`hover:underline hover:decoration-2 underline-offset-4 ${pathname === "/suv" ?
          "underline decoration-sky-700 decoration-2" : "text-zinc-400"}`}
          href={"/suv"}
        >
          SUV ({suv.length})
        </Link>
      </li>

      <li>
        <Link
          className={`hover:underline hover:decoration-2 underline-offset-4 ${pathname === "/estate" ?
          "underline decoration-sky-700 decoration-2" : "text-zinc-400"}`}
          href={"/estate"}
        >
          Estate ({estate.length})
        </Link>
      </li>

      <li>
        <Link
          className={`hover:underline hover:decoration-2 underline-offset-4 ${pathname === "/sedan" ?
          "underline decoration-sky-700 decoration-2" : "text-zinc-400"}`}
          href={"/sedan"}
        >
          Sedan ({sedan.length})
        </Link>
      </li>
    </ul>
    
  )
}