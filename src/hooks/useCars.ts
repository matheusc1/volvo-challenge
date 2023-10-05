import axios from "axios";
import { useEffect, useState } from "react";
import { Car } from "../types/car.interface";
import getDataFromFile from "../../public/api/cars";

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    setCars(getDataFromFile())
  }, [])

  return {
    cars
  }
}