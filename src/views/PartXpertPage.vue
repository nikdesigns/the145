<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div class="relative pb-5 border-b border-gray-200 sm:pb-0">
      <div class="md:flex md:items-center md:justify-between">
        <div class="mt-3 flex md:-mt-1 md:absolute md:top-3 md:right-0">
          <button
            type="button"
            class="
              ml-3
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-white
              bg-brand-navy-300
              hover:bg-brand-navy-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-brand-navy-300
            "
          >
            Reserve more parts
          </button>
        </div>
      </div>
      <div class="mt-4">
        <div class="sm:hidden">
          <label for="current-tab" class="sr-only">Select a tab</label>
          <select
            id="current-tab"
            name="current-tab"
            class="
              block
              w-full
              pl-3
              pr-10
              py-2
              text-base
              border-gray-300
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
              rounded-md
            "
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.name">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="-mb-px flex space-x-8">
            <a
              v-for="tab in tabs"
              @click="setSelectedComponent(tab)"
              :key="tab.name"
              :class="[
                tab.name === selectedComponent
                  ? 'border-brand-navy-300 text-brand-navy-300'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
              ]"
            >
              {{ tab.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>

    <all-parts v-if="selectedComponent === 'All Parts'"></all-parts>

    <base-numbers v-if="selectedComponent === 'Base Numbers'"></base-numbers>

    <part-xpert-faq v-if="selectedComponent === 'PX FAQs'"></part-xpert-faq>

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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PartXpertFaq from "@/components/PartXpertFaq";
import AllParts from "@/components/AllParts";
import BaseNumbers from "@/components/BaseNumbers";
const tabs = [
  { name: "All Parts", current: true },
  { name: "Base Numbers", current: false },
  { name: "PX FAQs", current: false },
];
import { SortAscendingIcon, SearchIcon } from "@heroicons/vue/solid";

export default {
  components: {
    SortAscendingIcon,
    SearchIcon,
    AllParts,
    PartXpertFaq,
    BaseNumbers,
  },
  setup() {
    const selectedComponent = ref(tabs[0].name);
    const setSelectedComponent = (comp) => {
      console.log(selectedComponent.value);
      selectedComponent.value = comp.name;
    };

    return {
      tabs,
      selectedComponent,
      setSelectedComponent,
    };
  },
};
</script>
