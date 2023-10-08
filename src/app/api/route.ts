import { NextResponse } from 'next/server'
import data from '../../../public/api/cars.json'
 
export async function GET(request: Request) {
  return NextResponse.json(data)
}