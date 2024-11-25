type Field = {
    id: number;
    isChecked: boolean;
    text: string;
    isDisplayed?: boolean;
};

interface Hue {
    dark: string;
    mid: string;
    light: string;
}

export interface Type {
    id: number;
    name: string;
    hue: Hue;
}

export enum TypesIndexes {
    CUSTOM = 0,
    DEED = 1,
    COMPANION = 2,
    PATH = 3,
    SUPPORT_VEHICLE = 4,
    MODULE = 5,
    COMMAND_VEHICLE = 6,
}

export default interface Asset {
    title: string;
    type: {
        id: TypesIndexes;
        name: string;
        hue: Hue;
    };
    description: string;
    image: {
        path: string;
        size: number;
    };
    track: {
        isChecked: boolean;
        maxNumber: number;
    };
    additionalFields: Field[];
    upgrades: Field[];
}
