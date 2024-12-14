// WARNING: if you modify the asset data structure in any way, report your changes to the AssetSchema as well. It's used for JSON validation when the user loads a file.
// Be mindful of what you modify so users don't get an invalid error when loading an asset that could previously work.

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
    numericalTrack: {
        isChecked: boolean;
        maxNumber: number;
    };
    textTrack: {
        isChecked: boolean;
        text: string;
    };
    additionalFields: Field[];
    upgrades: Field[];
}
