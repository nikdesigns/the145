<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <form class="space-y-8">
      <div class="space-y-8">
        <div>
          <!-- <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Repair Search
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div> -->

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
                      :placeholder="
                        searchNumber
                          ? 'Type part number for ex. 59500000-1'
                          : 'Type part description ex. Dual DME Indicator'
                      "
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
                      bg-brand-navy-500
                      hover:bg-brand-navy-300
                      focus:outline-none focus:ring-transparent
                    "
                  >
                    <span><SearchIcon class="h-6" /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <fieldset class="space-y-5">
            <legend class="sr-only">Notifications</legend>
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input
                  @click="searchNumber = !searchNumber"
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="
                    focus:outline-none focus:ring-transparent
                    h-4
                    w-4
                    text-brand-navy-300
                    border-gray-300
                    rounded
                  "
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="comments" class="font-medium text-gray-700"
                  >Search by Part Description</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </form>
    <div class="py-10">
      <div class="max-w-7xl py-3">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/cli-109n.png"
              alt="Tuple"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/DAS.png"
              alt="Mirage"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/cli-107.png"
              alt="StaticKit"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/summit_new_small.jpg"
              alt="Transistor"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/cli-102.png"
              alt="Transistor"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/cli-106.png"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
      <div class="max-w-7xl py-3">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/emc_aerospace.jpg"
              alt="Tuple"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/Next_mro-11.jpg"
              alt="Mirage"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/silver_wings_logo.jpg"
              alt="StaticKit"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/NBA_175x100_tagline.jpg"
              alt="Transistor"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/cli-103.png"
              alt="Workcation"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-auto border border-gray-100"
              src="https://www.the145.com/images/clientsnew/airqai.jpg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>

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
</template>

<script>
import { ref } from "vue";
import { SortAscendingIcon, SearchIcon } from "@heroicons/vue/solid";

export default {
  components: {
    SortAscendingIcon,
    SearchIcon,
  },
  setup() {
    const searchNumber = ref(true);
    return {
      searchNumber,
    };
  },
};
</script>
