import Category from './Category'

export interface Booster {
    category:Category,
    name:string,
    location:string,
}

export const Boosters:Readonly<{[x in Category]?:Booster}> = {
    [Category.COOK]: {
        category: Category.COOK,
        name: "Keen Kitchen Knife",
        location: "Gemity Shop",
    },
    [Category.ALCH]: {
        category: Category.ALCH,
        name: "Alchemist's Stone",
        location: "Mosel Dunes",
    },
    [Category.CRFT]: {
        category: Category.CRFT,
        name: "Cherubic Bust",
        location: "Palmira Plains",
    },
    [Category.CMPD]: {
        category: Category.CMPD,
        name: "Multi-Flask",
        location: "Arias (Chest)",
    },
    [Category.SMTH]: {
        category: Category.SMTH,
        name: "Smithy Hammer",
        location: "Arkives (Chest)",
    },
    [Category.WRIT]: {
        category: Category.WRIT,
        name: "Enchanted Pen",
        location: "Shrine of Kaddan",
    },
    [Category.ENG]: {
        category: Category.ENG,
        name: "NC Program Disk",
        location: "Moonbase (Chest)",
    },
};