import {Bike} from "./bike.interface"
import * as dao from "./dao"

export function createBike(bike: Bike): void {
    dao.createNewBike(bike)
}

export function getAllBikes(): Bike[] {
    return dao.getAllBikes()
}
