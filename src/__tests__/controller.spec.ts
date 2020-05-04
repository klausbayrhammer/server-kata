import 'jest'
import {createNewBike} from '../dao'
import {createBike} from "../controller"
import {Bike, Color, FrameSize} from "../bike.interface"

jest.mock('../dao')

it('forwards creation of new bikes to the bikeDao', () => {
    const bike: Bike = {
        color: Color.RED,
        frameSize: FrameSize.XXL
    }
    createBike(bike)
    expect(createNewBike).toBeCalledWith(bike)
})
