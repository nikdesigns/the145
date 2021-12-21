<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div class="pb-5 border-b border-gray-200">
      <div class="sm:flex sm:justify-between sm:items-baseline">
        <div class="sm:w-0 sm:flex-1">
          <h1 id="message-heading" class="text-lg font-medium text-gray-900">
            Who Searched
          </h1>
          <p
            class="mt-1 text-sm text-gray-500 overflow-hidden overflow-ellipsis"
          >
            Your capabilities have been searched
            <span class="text-gray-900 font-medium">166</span> times since
            <span class="text-gray-900 font-medium">December 15, 2020</span>
          </p>
        </div>

        <div
          class="
            mt-4
            flex
            items-center
            justify-between
            sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start
          "
        >
          <span
            class="
              inline-flex
              items-center
              px-3
              py-0.5
              text-sm
              font-medium
              text-gray-500
            "
          >
            Download as:
            <img class="ml-2 h-6 w-6" src="../assets/excel.svg" />
          </span>
          <Menu as="div" class="ml-3 relative inline-block text-left">
            <div>
              <MenuButton
                class="
                  -my-2
                  p-2
                  rounded-full
                  bg-white
                  flex
                  items-center
                  text-gray-400
                  hover:text-gray-600
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                "
              >
                <span class="sr-only">Open options</span>
                <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-56
                  rounded-md
                  shadow-lg
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex justify-between px-4 py-2 text-sm',
                      ]"
                    >
                      <span>7 Days</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex justify-between px-4 py-2 text-sm',
                      ]"
                    >
                      <span>14 Days</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      type="button"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'w-full flex justify-between px-4 py-2 text-sm',
                      ]"
                    >
                      <span>30 Days</span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Row
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Part Number
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Company Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Time Searched
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(search, searchIdx) in searches"
                  :key="searchIdx"
                  :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                >
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ search.row }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      font-medium
                      text-sm text-gray-900
                    "
                  >
                    {{ search.partNumber }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ search.email }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ search.searched }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ search.date }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import {
  ChevronDownIcon,
  SearchIcon,
  SortAscendingIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/solid";
const searches = [
  {
    row: "1",
    partNumber: "59500000-1",
    searched: "5",
    email: "Global Aviation Tech Svcs.",
    date: "December 15, 2021",
  },
  {
    row: "2",
    partNumber: "59500000-1",
    searched: "1",
    email: "Global Aerosolutions Miami Beach",
    date: "December 12, 2021",
  },
];
export default {
  components: {
    DotsVerticalIcon,
    ChevronDownIcon,
    SearchIcon,
    SortAscendingIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  setup() {
    return {
      searches,
    };
  },
};
</script>

<style>
</style>