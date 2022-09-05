import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div
    class="bg-[url('/assets/images/navbar.png')] bg-no-repeat bg-cover"
  >
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 text-[#6D6D6D]">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="" class="flex items-center">
          <img
            src="assets/icons/logo.png"
            class="mr-3 h-10"
            alt="Caviar Logo"
          />
          <p
            class="self-center text-xs font-semibold whitespace-nowrap text-[#F1BC6C]"
          >
            <span> CAVIAR </span><br />HONEY
          </p>
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="bg-[#F1BC6C] w-8 h-8 rounded-full"
              src="https://cdn4.iconfinder.com/data/icons/apiary-line/100/l-12-512.png"
              alt="user photo"
            />
          </button>

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 text-white"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
          >
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#F1BC6C] md:p-0 md:w-auto dark:text-gray-400 dark:hover: dark:focus: dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                ALL PRODUCTS
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
              </button>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F1BC6C] md:p-0 dark:text-gray-400 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                >SALE</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F1BC6C] md:p-0 dark:text-gray-400 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                >OUR STORY</a
              >
            </li>

            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#F1BC6C] md:p-0 dark:text-gray-400 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                >CONTACT</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div> `,
  styles: [''],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
