import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name: string = "Monster";
    image: string = "../../assets/img/dracogif.gif";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "N°001 Monster";
    attackName: string = "Surf";
    attackStrength: number = 60;
    attackDescription: string = "Vague deferlante de grande ampleur. Amplitude aléatoire. Augmente avec l'expérience";
    
}