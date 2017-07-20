import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from 'app/classes/hero';
import { HeroService } from 'app/shared/services/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    heroes: Hero[];

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }

    save(): void {
      this.heroService.update(this.hero)
      .then(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }
}