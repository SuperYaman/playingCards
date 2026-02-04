export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterProperties {
    imageUrl : string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT] : {
        imageUrl: "../../assets/img/grass.jpg",
        color: 'rgba(135, 255, 124)'
    },
    [MonsterType.ELECTRIC] : {
        imageUrl: "../../assets/img/electrik.jpg",
        color: 'rgba(244, 228, 18)'
    },
    [MonsterType.FIRE] : {
        imageUrl: "../../assets/img/fire.jpg",
        color: 'rgba(237, 69, 42)'
    },
    [MonsterType.WATER] : {
        imageUrl: "../../assets/img/water.jpg",
        color: 'rgba(36, 139, 205)'
    }
}