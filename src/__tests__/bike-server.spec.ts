import 'jest'
import fetch from 'node-fetch'
import {start as serverStart, stop as serverStop} from '../bike-server'

beforeAll(() => serverStart())

afterAll(() => serverStop())

it('returns HTTP 200 GET on /bikes/ is called', async () => {
    expect((await fetch('http://localhost:3000/bikes/')).status).toEqual(200)
})
