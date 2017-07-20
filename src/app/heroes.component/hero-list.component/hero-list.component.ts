import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from 'app/classes/hero';

@Component({
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html',
    styleUrls: ['hero-list.component.less']
})
export class HeroListComponent {
     @Input() heroes: Hero;
     selectedHero: Hero;

     @Output() onSelectedHero: EventEmitter<Hero> = new EventEmitter<Hero>();

     onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.onSelectedHero.emit(hero);
     }
}