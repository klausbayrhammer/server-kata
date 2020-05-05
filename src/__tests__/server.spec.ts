import "jest"
import fetch from "node-fetch"
import {start as serverStart, stop as serverStop} from "../server"
import {getAllBikes, createBike} from "../controller"
import parseBike from "../parse-bike"
import {Bike, Color, FrameSize} from "../bike.interface"

jest.mock("../parse-bike")
jest.mock("../controller")

beforeAll(() => serverStart())

afterAll(() => serverStop())

describe("get all bikes", () => {
    it("returns bikes from the bike-controller when /bikes/ is called", async () => {
        (getAllBikes as jest.Mock).mockReturnValue(["bike"])

        const response = await fetch("http://localhost:3000/bikes/")

        expect(response.status).toEqual(200)
        expect(await response.json()).toEqual(["bike"])
    })
})

describe("create new bike", () => {

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("creates a new bike successfully", async () => {
        const bike = new Bike(Color.RED, FrameSize.XXL);

        (parseBike as jest.Mock).mockReturnValue(bike)

        const response = await fetch("http://localhost:3000/bike/", { method: "POST", body: JSON.stringify(bike)})

        expect(response.status).toEqual(200)
        expect(parseBike).toBeCalledWith(JSON.stringify(bike))
        expect(createBike).toBeCalledWith(bike)
    })

    it("returns HTTP 400 if a bike cannot be parsed", async () => {
        (parseBike as jest.Mock).mockImplementation(() => {throw new Error()})

        const response = await fetch("http://localhost:3000/bike/", { method: "POST"})

        expect(response.status).toEqual(400)
    })

    it("returns HTTP 500 if a bike cannot be stored", async () => {
        (createBike as jest.Mock).mockImplementation(() => {throw new Error()})

        const response = await fetch("http://localhost:3000/bike/", { method: "POST"})

        expect(response.status).toEqual(500)
    })
})
