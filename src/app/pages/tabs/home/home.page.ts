import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {
  bannerConfig: SwiperOptions;
  banners: any[] = [];
  store_types: any[] = [];

  constructor() {}

  ngOnInit() {
    this.banners = [
      { banner: 'assets/imgs/1.jpg' },
      { banner: 'assets/imgs/2.jpg' },
      { banner: 'assets/imgs/3.jpg' },
      { banner: 'assets/imgs/4.jpg' },
    ];

    this.store_types=[
      {id:1,name:'Restaurant',icon:'shop2.jpg'},
      {id:1,name:'Restaurant',icon:'grocery.jpg'},
      {id:1,name:'Restaurant',icon:'med2.jpg'},
      {id:1,name:'Restaurant',icon:'shop2.jpg'},
      {id:1,name:'Restaurant',icon:'shop2.jpg'},
      {id:1,name:'Restaurant',icon:'shop2.jpg'},
      {id:1,name:'Restaurant',icon:'shop2.jpg'},
    ]
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
    };
  }
}
