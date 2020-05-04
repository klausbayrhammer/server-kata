import 'jest'
import {createNewBike, getAllBikes} from "../dao"
import {Bike, Color, FrameSize} from "../bike.interface"

it('can retrieve a new bike, after creating it', function () {
    const bike: Bike = {
        color: Color.RED,
        frameSize: FrameSize.XXL
    }

    createNewBike(bike)

    expect(getAllBikes()).toContain(bike)
})
