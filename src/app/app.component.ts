import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent],

})
export class AppComponent {
  monsters!: Monster[];
  count: number = 0;
  search = '';

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  });

  constructor() {
    effect(() => {
      console.log(this.selectedMonster());
    })

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Draco";
    monster1.hp = 40;
    monster1.figureCaption = "N°001";
    monster1.attackDescription = "";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Amphinobi";
    monster2.image = "../../assets/img/amphinobi.jpg";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N°002";
    monster2.attackDescription = "";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Oho";
    monster3.image = "../../assets/img/oho.jpg";
    monster3.type = MonsterType.FIRE;
    monster3.hp = 120;
    monster3.figureCaption = "N°003";
    monster3.attackDescription = "";
    this.monsters.push(monster3);
  }

  increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() +1) % this.monsters.length);
  }

}
