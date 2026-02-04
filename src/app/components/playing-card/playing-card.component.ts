import { MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Component, input, Input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {

  @Input() monster = new Monster();
  monsterTypeIcon: string = '../../../assets/img/electrik.jpg';
  backgroundColor: string = "rgb(255, 255, 104)";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monster']) {
      if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
        this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
      }
    }
  }
}
