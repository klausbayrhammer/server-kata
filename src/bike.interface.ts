export class Bike {
    constructor(public color: Color, public frameSize: FrameSize) {}
}

export enum Color {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE"
}

export enum FrameSize {
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
    XXL = "XXL"
}
