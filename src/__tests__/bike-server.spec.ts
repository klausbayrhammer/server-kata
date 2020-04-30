import 'jest'
import fetch from 'node-fetch'
import {start as serverStart, stop as serverStop} from '../bike-server'
import {getAllBikes} from '../bike-controller'

jest.mock('../bike-controller')

beforeAll(() => serverStart())

afterAll(() => serverStop())

it('returns bikes from the bike-controller when /bikes/ is called', async () => {
    (getAllBikes as jest.Mock).mockReturnValue(['bike'])

    const response = await fetch('http://localhost:3000/bikes/');

    expect(response.status).toEqual(200)
    expect(await response.json()).toEqual(['bike'])
})
