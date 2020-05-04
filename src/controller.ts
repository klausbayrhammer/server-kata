import {Bike} from "./bike.interface"
import {createNewBike} from "./dao"

export function createBike(bike: Bike): void {
    createNewBike(bike)
}


export function getAllBikes(): Bike[] {
    throw new Error('not implemented')
}
