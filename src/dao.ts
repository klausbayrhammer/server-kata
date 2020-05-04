import {Bike} from "./bike.interface"

const bikes: Bike[] = []

export function getAllBikes(): Bike[] {
    return bikes
}


export function createNewBike(bike: Bike): void {
    bikes.push(bike)
}
