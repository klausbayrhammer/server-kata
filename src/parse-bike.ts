import {Bike} from "./bike.interface"

export default function parseBike(bikeInput: string): Bike {
    const {color, frameSize} = JSON.parse(bikeInput)
    if(!color) {
        throw new Error('Property color missing')
    }
    if(!frameSize) {
        throw new Error('Property framesize missing')
    }
    return {
        color,
        frameSize
    }
}
