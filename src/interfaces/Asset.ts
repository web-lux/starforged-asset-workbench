type Field = {
    id: number;
    isChecked: boolean;
    text: string;
    isDisplayed?: boolean;
};

export default interface Asset {
    title: string;
    type: string;
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
