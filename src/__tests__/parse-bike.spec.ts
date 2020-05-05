import "jest"

import parseBike from "../parse-bike"
import {Bike, Color, FrameSize} from "../bike.interface"

it("parses a complete bike correctly", () => {
    const bike: Bike = {
        color: Color.RED,
        frameSize: FrameSize.XXL
    }

    const parsedBike = parseBike(JSON.stringify(bike))

    expect(parsedBike).toEqual(bike)
})

it("throws an error if the bike, does not have the mandatory color", () => {
    const bike: Partial<Bike> = {
        frameSize: FrameSize.XXL
    }

    expect(() => parseBike(JSON.stringify(bike))).toThrow()
})

it("throws an error if the bike, does not have the mandatory frameSize", () => {
    const bike: Partial<Bike> = {
        color: Color.RED
    }

    expect(() => parseBike(JSON.stringify(bike))).toThrow()
})
