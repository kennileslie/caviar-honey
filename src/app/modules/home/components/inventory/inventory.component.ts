import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'ngSlick';

  items = [342, 453, 846, 855];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<div class="slick-prev" ></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //   },
      // },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // addSlide() {
  //   this.slides.push(488);
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // images = [
  //   {img:'assets/'}
  // ]
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
