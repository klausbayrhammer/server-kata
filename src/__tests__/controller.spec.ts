import "jest"
import * as dao from "../dao"
import {createBike, getAllBikes} from "../controller"
import {Bike, Color, FrameSize} from "../bike.interface"

jest.mock("../dao")

it("forwards creation of new bikes to the bikeDao", () => {
    const bike = new Bike(Color.RED, FrameSize.XXL)
    createBike(bike)
    expect(dao.createNewBike).toBeCalledWith(bike)
})

it("returns all bikes for getAllBikes", function () {
    (dao.getAllBikes as jest.Mock).mockReturnValue("bikes")
    expect(getAllBikes()).toEqual("bikes")
})
