import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/core/services/items.service';
import { Item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-inventory',
  template: `<div
    class="relative mb-96 md:mb-[45rem] lg:mb-[55rem]"
    id="products"
  >
    <div
      class="text-white border-t-2 border-[#FCC71A] w-min overflow-hidden mx-auto md:ml-32 mt-36"
      data-aos="fade-down"
    >
      <h1 class="border-r-2 border-l-2 border-[#FCC71A] font-thin">
        <span class="uppercase text-5xl"> Inventory </span>
      </h1>
      <img src="assets/images/home/inventory/text_drip.png" alt="" />
    </div>
    <div class="slick-wrapper w-3/4 mx-auto relative">
      <ngx-slick-carousel
        class="carousel"
        #slickModal="slick-carousel"
        [config]="slideConfig"
      >
        <div ngxSlickItem class="slide" *ngFor="let item of items">
          <div class="relative">
            <div
              class="h-[500px] sm:h-[600px] md:min-h-[700px] max-w-full rounded-3xl"
              id="uni-splash"
            >
              <div class="absolute -top-10 left-12 z-10">
                <img src="/assets/images/home/inventory/10_oz_jar.png" alt="" />
              </div>
              <div
                id="multi-bg"
                class="h-full w-full flex justify-center items-center -z-20 absolute bottom-0 bg-white rounded-3xl"
              >
                <div class="w-3/4 mx-auto text-black mt-40">
                  <div class="flex justify-between">
                    <div class="max-w-[35ch]">
                      <h1 class="text-2xl font-bold">{{ item.name }}</h1>

                      <div class="flex mt-2 -ml-0.5">{{ item.quantity }}oz</div>
                    </div>
                  </div>

                  <details class="relative mt-4 group">
                    <summary class="block">
                      <div>
                        <div class="prose max-w-none group-open:hidden">
                          <p>
                            {{ item.description }}
                          </p>
                        </div>
                      </div>
                    </summary>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ngx-slick-carousel>
    </div>
  </div> `,
  styles: [
    `
      .slick-slide {
        margin: 2.5rem 10px;
      }

      .slick-list {
        margin: -2.5rem -10px;
      }

      #multi-bg {
        background-image: url('/assets/images/product-card/rect_2.png'),
          url('/assets/images/product-card/rect_1.png');
        background-size: 100% 76%, 100% 79%;
        background-repeat: no-repeat;
        background-position: bottom;
      }
      #uni-splash {
        background: url('/assets/images/product-card/splash.png') top no-repeat;
        background-size: 100% 41%;
      }
    `,
  ],
})
export class InventoryComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe((res) => {
      if (res.status === 'success') {
        this.items = res.data!['items'];
      }
    });
  }
  title = 'inventory';
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
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
}
