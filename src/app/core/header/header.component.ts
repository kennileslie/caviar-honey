import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  template: `<header
    class="header block bg-transparent fixed py-2 transition-all w-full z-50"
  >
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 text-[#6D6D6D]">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a routerLink="/home" class="flex items-center">
          <img
            src="assets/icons/logo.png"
            class="mr-3 w-12"
            alt="Caviar Logo"
          />
          <p
            class="self-center font-semibold whitespace-nowrap text-[#F1BC6C] text-xs"
          >
            <span class="text-[#D7D7D7] font-bold"> CAVIAR </span><br /><span
              class="tracking-wider"
            >
              HONEY
            </span>
          </p>
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            routerLink="login"
            class="w-8 h-8 rounded-full overflow-hidden"
          >
            <object
              type="image/svg+xml"
              data="assets/icons/apiarist.svg"
              class="w-full h-full object-cover relative -z-10"
            ></object>
          </button>

          <div class="md:hidden">
            <button mat-icon-button [matMenuTriggerFor]="beforeMenu">
              <mat-icon class="text-white">menu</mat-icon>
              <mat-menu #beforeMenu="matMenu" xPosition="before">
                <button mat-menu-item routerLink="home">HOME</button>
                <button mat-menu-item>PRODUCTS</button>
                <button mat-menu-item>OUR STORY</button>
                <button mat-menu-item routerLink="contact">CONTACT</button>
              </mat-menu>
            </button>
          </div>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 text-white"
        >
          <ul
            class="flex flex-col items-center p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:border-0"
          >
            <li>
              <a
                class="block py-2 pr-4 pl-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F1BC6C] md:p-0 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                routerLink="home"
                >HOME</a
              >
            </li>

            <li>
              <button
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#F1BC6C] md:p-0 md:w-auto"
                routerLink="/home"
                (click)="onClick('products')"
              >
                <span
                  class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                >
                  PRODUCTS
                </span>
                <span>
                  <svg
                    class="ml-1 w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>

            <li>
              <a
                class="block py-2 pr-4 pl-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F1BC6C] md:p-0 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                >OUR STORY</a
              >
            </li>

            <li>
              <a
                routerLink="contact"
                class="block py-2 pr-4 pl-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F1BC6C] md:p-0 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                >CONTACT</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header> `,
  styles: [
    `
      .sticky-nav {
        background: #1e1e1e !important;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }

      .header-change {
        background: #1d1d1d;
        display: block;
        position: relative;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  panelOpenState = false;
  constructor(
    private router: Router,
    private viewPortScroller: ViewportScroller
  ) {}
  ngOnInit() {
    this.routerCheck();
  }

  routerCheck() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url == '/home') {
          let navMenu = document.querySelector('.header');
          navMenu?.classList.remove('header-change');
          window.onscroll = () => {
            let body = document.querySelector('body') as HTMLBodyElement;
            if (window.pageYOffset > 50 && true) {
              navMenu?.classList.add('sticky-nav');
            } else {
              navMenu?.classList.remove('sticky-nav');
              body.style.margin = '0';
            }
          };
        } else {
          let navMenu = document.querySelector('header');
          navMenu?.classList.add('header-change');
        }
      });
  }

  public onClick(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
