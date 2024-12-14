const fieldSchema = {
    properties: {
        id: { type: 'int32' },
        isChecked: { type: 'boolean' },
        text: { type: 'string' },
    },
    optionalProperties: {
        isDisplayed: { type: 'boolean' },
    },
};

const hueSchema = {
    properties: {
        dark: { type: 'string' },
        mid: { type: 'string' },
        light: { type: 'string' },
    },
};

const typeSchema = {
    properties: {
        id: { type: 'int32' },
        name: { type: 'string' },
        hue: hueSchema,
    },
};

const imageSchema = {
    properties: {
        path: { type: 'string' },
        size: { type: 'int32' },
    },
};

const numericalTrackSchema = {
    properties: {
        isChecked: { type: 'boolean' },
        maxNumber: { type: 'int32' },
    },
};

const textTrackSchema = {
    properties: {
        isChecked: { type: 'boolean' },
        text: { type: 'string' },
    },
};

export const assetSchema = {
    properties: {
        title: { type: 'string' },
        type: typeSchema,
        description: { type: 'string' },
        image: imageSchema,
        numericalTrack: numericalTrackSchema,
        textTrack: textTrackSchema,
        additionalFields: { elements: fieldSchema },
        upgrades: { elements: fieldSchema },
    },
};
