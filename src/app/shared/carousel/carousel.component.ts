import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Animals } from '../model/animals.model';
import { AnimalService } from 'src/app/service/animal.service';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  animals?: Animals[];

  constructor(public animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.get('10').subscribe((data: any) => {
      this.animals = data;
      console.log(this.animals);
    });
  }
}
