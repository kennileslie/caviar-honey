import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<div class="relative">
    <div
      class="bg-gradient-to-r from-[#0000002d] via-[#0000000c] to-[#0000008c] absolute top-0 w-full h-full z-10"
    ></div>
    <div class="relative flex justify-center min-h-[1700px]" id="plains">
      <div class="container my-60 flex flex-wrap text-white absolute z-10 px-5">
        <div class="md:w-2/5 sm:text-3xl text-white">
          <div class="flex flex-wrap font-light">
            <p class="text-center text-xl">
              FROM <br />
              THE <br />PLAINS
            </p>
            <span class="text-8xl font-thin">OF</span>
          </div>
          <div>
            <span class="text-4xl lg:text-6xl">CLARENDON</span><br />
            <span class="text-5xl lg:text-7xl font-extrabold">JAMAICA</span>
          </div>
        </div>

        <div class="md:w-3/5 md:pl-6">
          <div class="leading-relaxed text-lg">
            <p>
              The parish of Clarendon is known as the honey parish. The species
              of bees common in Jamaica today were originally brought by the
              Spanish. With Jamaica's wild and planted fruit, Jamaican bees
              create an incredible honey that picks up the flavour of whatever
              blossom the bees have fed on.
            </p>
          </div>
          <div class="flex md:mt-4 mt-6">
            <a class="text-white inline-flex items-center ml-4"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> `,
  styles: [
    `
      #plains {
        background: url('/assets/images/home/plains.png') no-repeat center/cover;
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
