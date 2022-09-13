import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-floral',
  template: `<div class="relative">
    <div class="flex flex-col lg:mx-48 mx-10">
      <h1 class="sm:text-6xl text-5xl font-medium title-font mb-4">
        MULTI-FLORAL
      </h1>
      <p class="lg:w-1/2 leading-relaxed text-base">
        Our Multi Floral Honey is sourced from a region rich in herbal flowers
        and vegetation. The unique taste of Jamaican honey makes it one of the
        most desired honeys in many overseas markets. This ‘taste’ is attributed
        to the variety of tropical flora and the climatic conditions which
        enhance both the taste and colour of our honey.
      </p>
    </div>

    <div class="-mb-36 relative z-30 max-h-full">
      <div
        class="relative bg-[url('/assets/images/home/floral/multifloral.png')] bg-cover bg-no-repeat min-h-[1200px] pt-72"
      >
        <div class="flex flex-wrap justify-center  ">
          <div class="flex flex-col w-min h-min mt-32">
            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/trumpet_vine.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>

            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/moringa.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>
          </div>
          <div class="md:flex flex-col w-min h-min hidden">
            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/passion_flower.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>

            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/ixoras.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>
          </div>
          <div class="md:flex flex-col w-min h-min mt-32 flex-wrap hidden">
            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/coral_honeysuckle.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>

            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/jamaican_caper.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>
          </div>
          <div class="w-min h-min mt-80 hidden lg:block">
            <div class="max-w-1/3 -mt-28">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/logwood.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>
          </div>
          <div class="w-min h-min mt-24 hidden lg:block">
            <div class="max-w-1/3">
              <svg
                class="svg-graphic"
                width="230"
                height="230"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <defs>
                  <clipPath id="hexagonal-mask">
                    <polygon
                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                    />
                  </clipPath>
                </defs>
                <image
                  clip-path="url(#hexagonal-mask)"
                  height="100%"
                  width="100%"
                  xlink:href="/assets/images/home/floral/lantanas.jpg"
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `,
  styles: [``],
})
export class MultiFloralComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
