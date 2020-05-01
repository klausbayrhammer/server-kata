import 'jest'
import fetch from 'node-fetch'
import {start as serverStart, stop as serverStop} from '../bike-server'
import {Bike, Color, FrameSize} from "../bike.interface";

beforeAll(() => serverStart())

afterAll(() => serverStop())

it('returns a bike if it has been added before', async () => {
    const bike: Bike = {
        color: Color.RED,
        frameSize: FrameSize.XXL
    }
    await fetch('http://localhost:3000/bike/', { method: 'POST', body: JSON.stringify(bike)})

    const allBikes = await(await fetch('http://localhost:3000/bikes/')).json()

    expect(allBikes).toContain(bike)
})
