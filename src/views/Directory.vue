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
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <!-- Navbar -->

    <!-- Page heading -->
    <header class="bg-white py-8">
      <div
        class="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          xl:flex xl:items-center xl:justify-between
        "
      >
        <div class="flex-1 min-w-0">
          <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
              <li>
                <div>
                  <a
                    href="#"
                    class="
                      text-sm
                      font-medium
                      text-gray-500
                      hover:text-gray-700
                    "
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
            Aviation Industry Company Directory
          </h1>
          <div class="py-6 pr-12">
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="
                  focus:outline-none focus:border-transparent
                  block
                  w-full
                  h-12
                  pl-3
                  pr-12
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
                placeholder="Enter a company name and select a company type."
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  border-gray-300 border-l-2
                "
              >
                <label for="currency" class="sr-only">Currency</label>
                <select
                  id="currency"
                  name="currency"
                  class="
                    focus:outline-none focus:border-transparent
                    h-full
                    py-0
                    pl-4
                    pr-7
                    border-transparent
                    bg-transparent
                    text-gray-500
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option>Any Type</option>
                  <option>Airline</option>
                  <option>Government</option>
                </select>
              </div>
            </div>
            <div class="pt-5">
              <div class="flex justify-start">
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-brand-navy-300
                    hover:bg-brand-navy-500
                    focus:outline-none
                  "
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 flex xl:mt-0 xl:ml-4">
          <img src="https://www.the145.com/images/Delta_ad550x225.png" />

          <!-- Dropdown -->
          <Menu as="span" class="ml-3 relative sm:hidden">
            <MenuButton
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-gray-700
                bg-white
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-purple-500
              "
            >
              More
              <ChevronDownIcon
                class="-mr-1 ml-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </MenuButton>

            <transition
              enter-active-class="transition ease-out duration-200"
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
                  -mr-1
                  w-48
                  rounded-md
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Edit</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >View</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </header>

    <main class="pt-8 pb-16">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium text-gray-900">
            Click a facility name for more information.
          </h2>

          <!-- Tabs -->
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select
              id="tabs"
              name="tabs"
              class="
                mt-4
                block
                w-full
                pl-3
                pr-10
                py-2
                text-base
                border-gray-300
                focus:outline-none focus:ring-purple-500 focus:border-purple-500
                sm:text-sm
                rounded-md
              "
            >
              <option
                v-for="tab in tabs"
                :key="tab.name"
                :selected="tab.current"
              >
                {{ tab.name }}
              </option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                <a
                  v-for="tab in tabs"
                  :key="tab.name"
                  :href="tab.href"
                  :class="[
                    tab.current
                      ? 'border-brand-navy-300 text-brand-navy-300'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                  ]"
                >
                  {{ tab.name }}
                  <span
                    v-if="tab.count"
                    :class="[
                      tab.current
                        ? 'bg-blue-100 text-brand-navy-300'
                        : 'bg-gray-100 text-gray-900',
                      'hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                    ]"
                    >{{ tab.count }}</span
                  >
                </a>
              </nav>
            </div>
          </div>
        </div>

        <!-- Stacked list -->
        <ul
          role="list"
          class="
            mt-5
            border-t border-gray-200
            divide-y divide-gray-200
            sm:mt-0 sm:border-t-0
          "
        >
          <li v-for="candidate in candidates" :key="candidate.email">
            <a href="#" class="group block">
              <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                <div class="min-w-0 flex-1 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-12 w-12 rounded-full group-hover:opacity-75"
                      :src="candidate.imageUrl"
                      alt=""
                    />
                  </div>
                  <div
                    class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                  >
                    <div>
                      <p
                        class="text-sm font-medium text-brand-navy-300 truncate"
                      >
                        {{ candidate.name }}
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <MailIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="truncate">{{ candidate.email }}</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div>
                        <p class="text-sm text-gray-900">
                          Applied on
                          {{ " " }}
                          <time :datetime="candidate.appliedDatetime">{{
                            candidate.applied
                          }}</time>
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                          {{ candidate.status }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon
                    class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          </li>
        </ul>

        <!-- Pagination -->
        <nav
          class="
            border-t border-gray-200
            px-4
            flex
            items-center
            justify-between
            sm:px-0
          "
          aria-label="Pagination"
        >
          <div class="-mt-px w-0 flex-1 flex">
            <a
              href="#"
              class="
                border-t-2 border-transparent
                pt-4
                pr-1
                inline-flex
                items-center
                text-sm
                font-medium
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
              "
            >
              <ArrowNarrowLeftIcon
                class="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          </div>
          <div class="hidden md:-mt-px md:flex">
            <a
              href="#"
              class="
                border-transparent
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
                border-t-2
                pt-4
                px-4
                inline-flex
                items-center
                text-sm
                font-medium
              "
            >
              1
            </a>
            <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
            <a
              href="#"
              class="
                border-brand-navy-300
                text-brand-navy-300
                border-t-2
                pt-4
                px-4
                inline-flex
                items-center
                text-sm
                font-medium
              "
              aria-current="page"
            >
              2
            </a>
            <a
              href="#"
              class="
                border-transparent
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
                border-t-2
                pt-4
                px-4
                inline-flex
                items-center
                text-sm
                font-medium
              "
            >
              3
            </a>
            <a
              href="#"
              class="
                border-transparent
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
                border-t-2
                pt-4
                px-4
                inline-flex
                items-center
                text-sm
                font-medium
              "
            >
              4
            </a>
            <a
              href="#"
              class="
                border-transparent
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
                border-t-2
                pt-4
                px-4
                inline-flex
                items-center
                text-sm
                font-medium
              "
            >
              5
            </a>
            <a
              href="#"
              class="
                border-transparent
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
                border-t-2
                pt-4
                px-4
                inline-flex
                items-center
                text-sm
                font-medium
              "
            >
              6
            </a>
          </div>
          <div class="-mt-px w-0 flex-1 flex justify-end">
            <a
              href="#"
              class="
                border-t-2 border-transparent
                pt-4
                pl-1
                inline-flex
                items-center
                text-sm
                font-medium
                text-gray-500
                hover:text-gray-700 hover:border-gray-200
              "
            >
              Next
              <ArrowNarrowRightIcon
                class="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>

        <div class="max-w-7xl pt-16">
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
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  MailIcon,
  PencilIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const user = {
  name: "Whitney Francis",
  email: "whitneyfrancis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const tabs = [
  { name: "Repair Station", href: "#", count: "2", current: false },
  { name: "Part Supplier", href: "#", count: "4", current: false },
  {
    name: "Government Agency/Organization",
    href: "#",
    count: "6",
    current: true,
  },
  { name: "OEM", href: "#", current: false },
  { name: "Air Carrier/Aircraft Operator", href: "#", current: false },
  { name: "Leasing/Finance Company", href: "#", current: false },
];
const candidates = [
  {
    name: "Aviation Accessory Svcs. Miami",
    email: "Miami, FL, United States",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "aviationaccy@bellsouth.net",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "aviationaccy@bellsouth.net",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  // More candidates...
];
const publishingOptions = [
  {
    name: "Published",
    description: "This job posting can be viewed by anyone who has the link.",
    current: true,
  },
  {
    name: "Draft",
    description: "This job posting will no longer be publicly accessible.",
    current: false,
  },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
    BellIcon,
    BriefcaseIcon,
    CalendarIcon,
    CheckCircleIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CurrencyDollarIcon,
    LinkIcon,
    LocationMarkerIcon,
    MailIcon,
    MenuIcon,
    PencilIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const selected = ref(publishingOptions[0]);

    return {
      user,
      navigation,
      userNavigation,
      tabs,
      candidates,
      publishingOptions,
      selected,
    };
  },
};
</script>