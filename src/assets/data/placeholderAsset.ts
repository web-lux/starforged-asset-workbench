import Asset, { TypesIndexes } from 'src/types/Asset';
import { assetTypesMap } from 'src/assets/data/typesData';

export const placeholderAsset: Asset = {
    title: 'Title',
    type: {
        id: TypesIndexes.MODULE,
        name: assetTypesMap.get(TypesIndexes.MODULE).name,
        hue: assetTypesMap.get(TypesIndexes.MODULE).hue,
    },
    description: 'Optional description',
    image: {
        path: 'https://i.imgur.com/ZcnuoVg.png',
        size: 100,
    },
    numericalTrack: {
        isChecked: false,
        maxNumber: 1,
    },
    textTrack: {
        isChecked: false,
        text: 'Lorem, Ipsum',
    },
    additionalFields: [
        {
            id: 0,
            isChecked: false,
            text: `FIELD`,
        },
        {
            id: 1,
            isChecked: false,
            text: `FIELD`,
        },
    ],
    upgrades: [
        {
            id: 0,
            isChecked: true,
            text: `Your vehicle’s finely-tuned engines speed your travels.  When you --Undertake an Expedition-- (+edge) and score a strong hit, take +1 momentum; on a strong hit with a 6 on your action die, take +2 momentum instead of +1.`,
            isDisplayed: true,
        },
        {
            id: 1,
            isChecked: false,
            text: `When you --Enter the Fray--, choose one (before rolling). 
* Maneuver: Add +1 and take +1 momentum on a strong hit. 
* Boost: Take +2 momentum on a hit.`,
            isDisplayed: true,
        },
        {
            id: 2,
            isChecked: false,
            text: `When you make a desperate move to pursue a foe, escape a threat, or get in range, you may push your engines to their limit. If you do (decide after rolling), reroll any dice and count a weak hit as a strong hit. Then, --Withstand Damage-- (-2).`,
            isDisplayed: true,
        },
    ],
};
