import "jest"
import fetch from "node-fetch"
import {start as serverStart, stop as serverStop} from "../server"
import {Bike, Color, FrameSize} from "../bike.interface"

beforeAll(() => serverStart())

afterAll(() => serverStop())

it("returns a bike if it has been added before", async () => {
    const bike = new Bike(Color.RED, FrameSize.XXL)
    
    const responseCreatingBikes = await fetch("http://localhost:3000/bike/", { method: "POST", body: JSON.stringify(bike)})

    expect(responseCreatingBikes.status).toEqual(200)

    const allBikes = await(await fetch("http://localhost:3000/bikes/")).json()

    expect(allBikes).toEqual([bike])
})
