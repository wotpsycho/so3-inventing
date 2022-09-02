import Category from './Category'
export class Inventor {
    readonly name:string
    readonly code:string
    readonly ratings:Readonly<{[x in Category]?:number}>
    readonly time:number
    readonly cost:number
    constructor(name:string,code:string,ratings:{[x in Category]?:number},time:number,cost:number) {
        this.name = name
        this.code = code
        this.ratings = ratings
        this.time = time;
        this.cost = cost;
    }
};

export class PCInventor extends Inventor {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name:string,code:string,ratings:{[x in Category]:number},time:number,cost:number) {
        super(name,code,ratings,time,cost);
    }
}

export class NPCInventor extends Inventor {
    readonly recruitUnlock:string
    readonly recruitLocation:string
    readonly recruitItem:string
    readonly category:Category
    constructor(name:string,code:string,category:Category,rating:number,time:number,cost:number,recruitUnlock:string,recruitLocation:string,recruitItem:string) {
        super(name,code,{[category]:rating},time,cost);
        this.category = category
        this.recruitUnlock = recruitUnlock
        this.recruitLocation = recruitLocation
        this.recruitItem = recruitItem
    }
};

export const PCInventors:ReadonlyArray<PCInventor> = [
    new PCInventor("Fayt","Fa",{
        [Category.COOK]: 16,
        [Category.ALCH]: 14,
        [Category.CRFT]: 20,
        [Category.CMPD]: 30,
        [Category.SMTH]: 29,
        [Category.WRIT]: 34,
        [Category.ENG] : 25,
        [Category.SYTH]: 12,
    }, 0, 0), 
    new PCInventor("Cliff","Cl",{
        [Category.COOK]: 9,
        [Category.ALCH]: 5,
        [Category.CRFT]: 2,
        [Category.CMPD]: 10,
        [Category.SMTH]: 31,
        [Category.WRIT]: 7,
        [Category.ENG] : 36,
        [Category.SYTH]: 14,
    }, 5, 0), 
    new PCInventor("Nel","Ne",{
        [Category.COOK]: 30,
        [Category.ALCH]: 20,
        [Category.CRFT]: 15,
        [Category.CMPD]: 10,
        [Category.SMTH]: 25,
        [Category.WRIT]: 14,
        [Category.ENG] : 5,
        [Category.SYTH]: 10,
    }, -5, 0), 
    new PCInventor("Roger","Ro",{
        [Category.COOK]: 2,
        [Category.ALCH]: 6,
        [Category.CRFT]: 35,
        [Category.CMPD]: 6,
        [Category.SMTH]: 23,
        [Category.WRIT]: 4,
        [Category.ENG] : 20,
        [Category.SYTH]: 10,
    }, 5, 0), 
    new PCInventor("Maria","Ma",{
        [Category.COOK]: 19,
        [Category.ALCH]: 22,
        [Category.CRFT]: 10,
        [Category.CMPD]: 25,
        [Category.SMTH]: 4,
        [Category.WRIT]: 22,
        [Category.ENG] : 20,
        [Category.SYTH]: 15,
    }, 0, -10), 
    new PCInventor("Albel","Al",{
        [Category.COOK]: 16,
        [Category.ALCH]: 15,
        [Category.CRFT]: 12,
        [Category.CMPD]: 16,
        [Category.SMTH]: 30,
        [Category.WRIT]: 4,
        [Category.ENG] : 16,
        [Category.SYTH]: 15,
    }, 0, 5), 
    new PCInventor("Sophia","So",{
        [Category.COOK]: 43,
        [Category.ALCH]: 36,
        [Category.CRFT]: 33,
        [Category.CMPD]: 15,
        [Category.SMTH]: 6,
        [Category.WRIT]: 15,
        [Category.ENG] : 3,
        [Category.SYTH]: 25,
    }, 0, -5), 
    new PCInventor("Peppita","Pe",{
        [Category.COOK]: 6,
        [Category.ALCH]: 12,
        [Category.CRFT]: 40,
        [Category.CMPD]: 11,
        [Category.SMTH]: 5,
        [Category.WRIT]: 6,
        [Category.ENG] : 15,
        [Category.SYTH]: 20,
    }, -10, 10), 
    new PCInventor("Adray","Ad",{
        [Category.COOK]: 20,
        [Category.ALCH]: 4,
        [Category.CRFT]: 3,
        [Category.CMPD]: 5,
        [Category.SMTH]: 27,
        [Category.WRIT]: 11,
        [Category.ENG] : 7,
        [Category.SYTH]: 15,
    }, -25, 30), 
    new PCInventor("Mirage","Mi",{
        [Category.COOK]: 26,
        [Category.ALCH]: 18,
        [Category.CRFT]: 30,
        [Category.CMPD]: 27,
        [Category.SMTH]: 17,
        [Category.WRIT]: 16,
        [Category.ENG] : 31,
        [Category.SYTH]: 22,
    }, -5, -5), 
];

const times:string[] = [
    "Initial Group",
    "Upon entering Aquios",
    "After returning to Arias after the Bequerel Mines",
    "After returning from the Shrine of Kaddan",
    "After reaching Airyglyph coming from Ancient Ruins of Mosel",
    "After defeating Crosell",
    "Entering the Eternal Sphere",
    "Returning to Aquios after FD Space",
    "Returning from the Shrine of Kaddan for the second time",
    "Recruit Meryl, Vanilla, and Dejison"
]

export const NPCInventors:ReadonlyArray<NPCInventor> = [
    new NPCInventor("Damda Mooda","Da",Category.COOK,9,0,10,times[0],"West Aquios","Winking Sage Cider"),
    new NPCInventor("Milenya","Ml",Category.CMPD,19,0,-20,times[0],"Arias Temple","3,200 Fol"),
    new NPCInventor("Mayu","My",Category.COOK,19,0,-30,times[0],"Kirlsa Training Facility 3F","Adorable Kitty Doll"),
    new NPCInventor("Eliza","El",Category.ALCH,4,-30,0,times[1],"East Aquios","10,000 Fol"),
    new NPCInventor("Grats","Gr",Category.SMTH,25,0,0,times[1],"Bequerel Mine (Abandoned Area)","13,500 Fol"),
    new NPCInventor("Stanice","St",Category.CRFT,20,-30,-20,times[1],"Surferio Village Chief's Home","Limited-Edition Doll"),
    new NPCInventor("Gossam","Go",Category.CMPD,9,0,20,times[2],"North Peterny","Potion of Youth (Fake)"),
    new NPCInventor("Mackwell","Mk",Category.ALCH,31,40,0,times[2],"Castle Aquaria Library","Book of Prophecies 1"),
    new NPCInventor("Rigel","Ri",Category.COOK,57,40,0,times[2],"Kirlsa Grocer","Golden Curry"),
    new NPCInventor("Misty Lear","Ms",Category.ALCH,50,0,0,times[3],"Mountains of Barr","Spirit Stone"),
    new NPCInventor("Lias","Li",Category.SMTH,36,0,20,times[3],"Airyglyph Tavern","20,000 Fol"),
    new NPCInventor("Dejison","De",Category.ENG,6,-20,40,times[3],"South Airyglyph (Alley)","Ultimate Bomb"),
    new NPCInventor("The Killer Chef","Ki",Category.COOK,98,-30,0,times[4],"Central Surferio","Keen Kitchen Knife"),
    new NPCInventor("Cornelius","Co",Category.WRIT,15,-40,0,times[4],"Airyglyph Armorer","Sunrise Dictionary"),
    new NPCInventor("Balbados","Ba",Category.CRFT,37,-40,50,times[4],"Southwest Mosel Dunes","Antique Jewelry"),
    new NPCInventor("Mishell","Mh",Category.WRIT,35,0,10,times[5],"Central Aquios","85,000 Fol"),
    new NPCInventor("Gusto","Gu",Category.SMTH,60,-20,0,times[5],"South Peterny","60,000 Fol"),
    new NPCInventor("Vanilla","Va",Category.ENG,32,0,30,times[5],"Urssa Cave Temple Workshop","30,000 Fol"),
    new NPCInventor("Ansala","An",Category.ALCH,99,-20,0,times[6],"Castle Aquaria Guest Room","Philosopher's Stone"),
    new NPCInventor("Puffy","Pu",Category.CMPD,57,-40,0,times[6],"Maze of Tribulations, B5F","Experimental Remedy"),
    new NPCInventor("Aqua & Evia","Aq",Category.CRFT,49,0,10,times[6],"Peterny Temple","20,000 Fol"),
    new NPCInventor("Meryl","Me",Category.ENG,46,30,0,times[7],"East Peterny","Dremela's Tool Set"),
    new NPCInventor("Count Noppen","No",Category.WRIT,44,0,40,times[7],"Airyglyph Castle 2F","150,000 Fol"),
    new NPCInventor("Boyd","Bo",Category.SMTH,95,50,0,times[7],"Arias General Store","Bent Mystic Blade"),
    new NPCInventor("Chilico","Ch",Category.CRFT,60,60,-10,times[8],"Surferio Shop","82,000 Fol"),
    new NPCInventor("Osman the Sage","Os",Category.WRIT,75,40,0,times[8],"Airyglyph Abandoned Temple","Strange Book"),
    new NPCInventor("Louise the Diviner","Lo",Category.CMPD,98,40,0,times[8],"Surferio Private Home","90,000 Fol"),
    new NPCInventor("Izak","Iz",Category.ENG,65,-50,0,times[9],"Surferio, near Chief's House","Blueprints, AI Program"),
]

export const AllInventors:ReadonlyArray<Inventor> = [...PCInventors,...NPCInventors];
export const InventorsByCode:Readonly<{[x:string]:Inventor}> = Object.fromEntries(AllInventors.map(inventor => [inventor.code,inventor]));
export const InventorsByCategory:Readonly<{[x in Category]?: Inventor[]}> = Object.fromEntries(
    Object.values(Category).map(category => [category, AllInventors.filter(inventor => inventor.ratings[category])])
);