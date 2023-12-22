interface Colour {
    bz: string,
    density: string,
    speed: string,
    kp1hour: string,
    kp4hour: string,
    kp: string,
};

interface Calculated {
    lat: number,
    long: number,
    value: number,
    colour: string,
};

interface Highest {
    date: string,
    colour: string,
    lat: number,
    long: number,
    value: number,
};

interface Ace {
    date: string,
    bz: string,
    density: string,
    speed: string,
    kp1hour: string,
    kp4hour: string,
    kp: string,
    colour: Colour,
};

export default interface Probability {
    date: string,
    ace: Ace,
    calculated: Calculated,
    colour: string,
    lat: string,
    long: string,
    value: number,
    highest: Highest,
};