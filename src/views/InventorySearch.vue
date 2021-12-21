<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div class="flex-1 min-w-0">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a
                href="#"
                class="text-sm font-medium text-gray-500 hover:text-gray-700"
                >The145</a
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                href="#"
                class="
                  ml-4
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-gray-700
                "
                >Directory</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <h1
        class="
          mt-2
          text-2xl
          font-bold
          leading-7
          text-gray-900
          sm:text-3xl sm:truncate
        "
      >
        Inventory Search
      </h1>
    </div>
    <form class="space-y-8">
      <div class="space-y-8">
        <div>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <div>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <div
                    class="
                      relative
                      flex
                      items-stretch
                      flex-grow
                      focus-within:z-10
                      h-12
                    "
                  >
                    <div
                      class="
                        absolute
                        inset-y-0
                        left-0
                        pl-3
                        flex
                        items-center
                        pointer-events-none
                      "
                    >
                      <SearchIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      class="
                        focus:outline-none
                        focus:ring-transparent
                        focus:ring-0
                        focus:border-gray-300
                        block
                        w-full
                        rounded-none rounded-l-md
                        pl-10
                        sm:text-sm
                        border-gray-300
                      "
                      placeholder=" Search..."
                    />
                  </div>
                  <button
                    type="button"
                    class="
                      -ml-px
                      relative
                      inline-flex
                      items-center
                      space-x-2
                      px-4
                      py-2
                      border border-gray-300
                      text-sm
                      font-medium
                      rounded-r-md
                      text-white
                      bg-brand-navy-300
                      hover:bg-brand-navy-500
                      focus:outline-none focus:ring-transparent
                    "
                  >
                    <span><SearchIcon class="h-6" /></span>
                  </button>
                </div>
                <p class="mt-4 pl-2 text-sm text-gray-800">
                  <span class="flex">
                    Powered by
                    <img
                      class="h-8 float-right pl-2"
                      src="https://www.godirecttrade.com/media/logo/stores/1/GDT-logo.png"
                  /></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="py-10">
      <div class="max-w-7xl pt-5">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div
            class="col-span-2 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/assets/images/clients/FacilityAds_4038_1474401938.gif"
              alt="Tuple"
            />
          </div>
          <div
            class="col-span-2 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/assets/images/clients/FacilityAds_119_1635426926.gif"
              alt="Mirage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <go-direct-trade-banner></go-direct-trade-banner>
</template>

<script>
import { ref } from "vue";
import GoDirectTradeBanner from "../global/GoDirectTradeBanner.vue";
import {
  SortAscendingIcon,
  SearchIcon,
  ChevronRightIcon,
} from "@heroicons/vue/solid";

export default {
  components: {
    SortAscendingIcon,
    SearchIcon,
    ChevronRightIcon,
    GoDirectTradeBanner,
  },
  setup() {
    const searchNumber = ref(true);
    return {
      searchNumber,
    };
  },
};
</script>
