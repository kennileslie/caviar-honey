import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  template: `<div
    class="absolute w-full -top-32 sm:-top-40 md:-top-80 lg:-top-96 xl:-top-[500px] "
  >
    <div class="absolute z-10 left-0 w-1/2 h-full">
      <div class="relative flex">
        <img src="assets/images/home/transition/comb_left.png" alt="" />
        <img
          src="assets/images/home/transition/jar_left.png"
          alt=""
          class="absolute -z-10"
        />
      </div>
    </div>

    <div class=" absolute left-1/2 transform -translate-x-1/2 z-20 w-3/4">
      <div class="relative">
        <img src="assets/images/home/transition/comb_center.png" alt="" />
        <div
          class="absolute top-[55%] w-1/2 left-1/2 transform -translate-x-1/2 -z-40"
        >
          <img src="assets/images/home/transition/drip.png" alt="" />
        </div>
      </div>
    </div>

    <div class="absolute right-0 z-10 w-1/2">
      <div class="relative flex">
        <img
          src="assets/images/home/transition/comb_right.png"
          alt=""
          class="absolute -z-10"
        />
        <img src="assets/images/home/transition/jar_right.png" alt="" />
        <img
          src="assets/images/home/transition/sunflower.png"
          alt=""
          class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full -z-10"
        />
      </div>
    </div>
  </div> `,
  styles: [
    `
      div {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .radial {
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(255, 168, 0, 0.39) 0%,
          rgba(217, 217, 217, 0) 100%
        );
        position: absolute;
        height: 1558px;
      }
    `,
  ],
})
export class TransitionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
