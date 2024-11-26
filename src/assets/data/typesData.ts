import { TypesIndexes } from 'src/types/Asset';

export const assetTypesMap = new Map([
    [
        TypesIndexes.COMMAND_VEHICLE,
        {
            id: TypesIndexes.COMMAND_VEHICLE,
            name: 'Command Vehicle',
            hue: {
                dark: 'hsl(210, 11%, 71%)',
                mid: 'hsl(210, 10%, 80%)',
                light: 'hsl(210, 11%, 89%)',
            },
        },
    ],
    [
        TypesIndexes.MODULE,
        {
            id: TypesIndexes.MODULE,
            name: 'Module',
            hue: {
                dark: 'hsl(280, 20%, 56%)',
                mid: 'hsl(280, 20%, 70%)',
                light: 'hsl(280, 19%, 84%)',
            },
        },
    ],
    [
        TypesIndexes.SUPPORT_VEHICLE,
        {
            id: TypesIndexes.SUPPORT_VEHICLE,
            name: 'Support Vehicle',
            hue: {
                dark: 'hsl(229, 25%, 54%)',
                mid: 'hsl(229, 25%, 68%)',
                light: 'hsl(229, 24%, 83%)',
            },
        },
    ],

    [
        TypesIndexes.PATH,
        {
            id: TypesIndexes.PATH,
            name: 'Path',
            hue: {
                dark: 'hsl(203, 39%, 56%)',
                mid: 'hsl(203, 38%, 69%)',
                light: 'hsl(204, 39%, 83%)',
            },
        },
    ],
    [
        TypesIndexes.COMPANION,
        {
            id: TypesIndexes.COMPANION,
            name: 'Companion',
            hue: {
                dark: 'hsl(180, 25%, 51%)',
                mid: 'hsl(180, 26%, 66%)',
                light: 'hsl(180, 26%, 82%)',
            },
        },
    ],
    [
        TypesIndexes.DEED,
        {
            id: TypesIndexes.DEED,
            name: 'Deed',
            hue: {
                dark: 'hsl(120, 23%, 52%)',
                mid: 'hsl(120, 23%, 67%)',
                light: 'hsl(120, 23%, 82%)',
            },
        },
    ],
    [
        TypesIndexes.CUSTOM,
        {
            id: TypesIndexes.CUSTOM,
            name: 'Custom',
            hue: {
                dark: 'hsl(355, 23%, 52%)',
                mid: 'hsl(355, 23%, 67%)',
                light: 'hsl(355, 23%, 82%)',
            },
        },
    ],
]);
