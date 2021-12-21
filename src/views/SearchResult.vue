<template>
  <div v-if="partLoading">
    <search-result-loader></search-result-loader>
  </div>
  <div class="text-center" v-if="error">
    {{ error }}
  </div>
  <div v-if="part" class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div>
      <div class="mb-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <div>
            <confirm-feedback-sponsor
              v-if="getWishlistFeedback"
            ></confirm-feedback-sponsor>
            <div class="mt-1 flex rounded-md shadow-sm">
              <div class="relative flex items-stretch flex-grow h-12">
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
                    block
                    w-full
                    h-full
                    pl-16
                    pr-3
                    py-2
                    border-transparent
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none focus:ring-0 focus:border-transparent
                    sm:text-sm
                  "
                  placeholder="Type part number or description"
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
                  rounded-md
                  text-white
                  bg-brand-navy-300
                  hover:bg-brand-navy-500
                  focus:outline-none focus:ring-transparent
                "
              >
                <span><SearchIcon class="h-6" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
          <h2
            class="
              text-xl
              font-bold
              leading-7
              text-gray-900
              sm:text-xl sm:truncate
            "
          >
            {{ part.partNumber }}
          </h2>

          <div
            class="
              mt-1
              flex flex-col
              sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6
            "
          >
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <CogIcon
                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span class="text-gray-900 font-medium">
                {{ part.description }}
              </span>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <LocationMarkerIcon
                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span class="text-gray-900 font-medium">MFR: </span>&nbsp;
              {{ part.mfr }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <span class="text-gray-900 font-medium">ATA: </span>&nbsp;
              <!-- <div v-for="at in part.ata" :key="at">
                {{ at }}
              </div> -->
              {{ part.ata.toString().split(",").join(", ") }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <span class="text-gray-900 font-medium">Aircraft: </span>
              &nbsp; {{ part.aircraft.toString().split(",").join(", ") }}
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
          <div class="pr-3">
            <button
              @click="showWishlistNotification"
              type="button"
              :class="[
                part.wishlisted
                  ? 'bg-red-500 text-white'
                  : 'bg-white border border-gray-300 text-gray-400',
              ]"
              class="
                px-4
                py-2
                inline-flex
                items-center
                p-1
                rounded-md
                shadow-sm
                hover:bg-red-500 hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-red-500
              "
            >
              <BookmarkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <span class="hidden sm:block">
            <button
              type="button"
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
                focus:ring-indigo-500
              "
            >
              <DownloadIcon
                class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />

              Western Support Group
            </button>
          </span>

          <span class="sm:ml-3">
            <button
              type="button"
              class="
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
                focus:ring-brand-navy-500
              "
            >
              <TrendingUpIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              See how this part is trending
            </button>
          </span>

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
                focus:ring-indigo-500
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

      <dl
        class="
          mt-5
          grid grid-cols-1
          rounded-lg
          bg-white
          border
          overflow-hidden
          divide-y divide-gray-200
          md:grid-cols-4 md:divide-y-0 md:divide-x
        "
      >
        <div
          v-for="item in part.details"
          :key="item.name"
          class="px-4 py-5 sm:p-6"
        >
          <dt class="text-base font-normal text-gray-900">
            {{ item.name }}
          </dt>
          <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div
              class="
                flex
                items-baseline
                text-2xl
                font-semibold
                text-brand-navy-300
              "
            >
              {{ item.stat }}
            </div>

            <div
              :class="[
                item.changeType === 'increase'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800',
                'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0',
              ]"
            >
              <ArrowSmUpIcon
                v-if="item.changeType === 'increase'"
                class="
                  -ml-1
                  mr-0.5
                  flex-shrink-0
                  self-center
                  h-5
                  w-5
                  text-green-500
                "
                aria-hidden="true"
              />
              <ArrowSmDownIcon
                v-else
                class="
                  -ml-1
                  mr-0.5
                  flex-shrink-0
                  self-center
                  h-5
                  w-5
                  text-red-500
                "
                aria-hidden="true"
              />
              <span class="sr-only">
                {{ item.changeType === "increase" ? "Increased" : "Decreased" }}
                by
              </span>
              {{ item.change }}
            </div>
          </dd>
        </div>
      </dl>

      <div
        class="
          mt-5
          grid grid-cols-3
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          overflow-hidden
        "
      >
        <div class="col-span-1 border border-gray-200 sm:rounded-lg">
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  py-2
                  align-middle
                  inline-block
                  min-w-full
                  sm:px-6
                  lg:px-8
                "
              >
                <div class="overflow-hidden">
                  <table class="table-auto w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="
                            px-3
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Service
                        </th>
                        <th
                          scope="col"
                          class="
                            px-3
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Low
                        </th>
                        <th
                          scope="col"
                          class="
                            px-3
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Mid
                        </th>
                        <th
                          scope="col"
                          class="
                            px-3
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Avg
                        </th>
                        <th
                          scope="col"
                          class="
                            px-3
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          High
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="stat in part.stats" :key="stat.name">
                        <td
                          class="
                            px-3
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ stat.name }}
                        </td>
                        <td
                          class="
                            px-3
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ stat.low }}
                        </td>
                        <td
                          class="
                            px-3
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ stat.mid }}
                        </td>
                        <td
                          class="
                            px-3
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ stat.avg }}
                        </td>
                        <td
                          class="
                            px-3
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ stat.high }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1 border border-gray-200 sm:rounded-lg">
          <div class="px-4 py-3 border-b border-gray-200 sm:px-6 bg-gray-50">
            <h3
              class="font-medium text-xs text-gray-500 uppercase tracking-wider"
            >
              Part Sponsor
            </h3>
          </div>
          <div class="flex justify-center items-center py-3">
            <img
              class="h-32 pt-1"
              src="https://www.the145.com/images/learn-more-bg.png"
            />
          </div>
        </div>

        <div class="col-span-1 border border-gray-200 sm:rounded-lg">
          <div class="px-4 py-3 border-b border-gray-200 sm:px-6 bg-gray-50">
            <h3
              class="font-medium text-xs text-gray-500 uppercase tracking-wider"
            >
              Part Sponsor
            </h3>
          </div>
          <div class="flex justify-center items-center py-3">
            <img
              class="h-32 pt-1"
              src="https://www.the145.com/images/learn-more-bg.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="py-6">
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
    <div v-if="loading">
      <Loader />
    </div>
    <div v-if="stations.length" class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 sm:rounded-lg">
            <table class="table-auto min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    No.
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    RFQ
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Repair Station
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Location
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Quote Speed
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Repair Cert.
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      border-r
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >Last Update
                      <SwitchVerticalIcon
                        class="h-5 w-5 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    rowspan="2"
                    scope="col"
                    class="
                      px-3
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      border-r
                      whitespace-normal
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >Quote Date
                      <SwitchVerticalIcon
                        class="h-5 w-5 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    colspan="2"
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      border-r border-b
                      tracking-wider
                    "
                  >
                    Overhaul
                  </th>
                  <th
                    colspan="2"
                    scope="col"
                    class="
                      px-4
                      py-3
                      border-r border-b
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Repair
                  </th>
                  <th
                    colspan="2"
                    scope="col"
                    class="
                      px-4
                      py-3
                      border-b
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Test
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      border-r
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >Price
                      <SwitchVerticalIcon
                        class="h-4 w-4 pl-1 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      border-r
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >TAT
                      <SwitchVerticalIcon
                        class="h-4 w-4 pl-1 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      border-r
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >Price
                      <SwitchVerticalIcon
                        class="h-4 w-4 pl-1 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      border-r
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >TAT
                      <SwitchVerticalIcon
                        class="h-4 w-4 pl-1 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      border-r
                      uppercase
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >Price
                      <SwitchVerticalIcon
                        class="h-4 w-4 pl-1 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                  <th
                    scope="col"
                    class="
                      px-4
                      py-3
                      text-center text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    <span class="flex items-center"
                      >TAT
                      <SwitchVerticalIcon
                        class="h-4 w-4 pl-1 justify-self-center cursor-pointer"
                    /></span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="station in stations" :key="station.email">
                  <td class="px-2 py-4 whitespace-normal border-r">
                    <div class="text-sm text-center text-gray-900">
                      {{ station.number }}
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-normal border-r text-center">
                    <div class="text-sm text-gray-900">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="
                          focus:ring-brand-navy-300
                          h-4
                          w-4
                          text-brand-navy-300
                          border-gray-300
                          rounded
                        "
                      />
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-pre border-r">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ station.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ station.email }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ station.phone }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-normal border-r">
                    <div class="text-sm text-center text-gray-900">
                      {{ station.location }}
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap border-r text-center">
                    <span
                      class="
                        px-2
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        rounded-full
                        bg-yellow-100
                        text-yellow-800
                      "
                    >
                      Moderate
                    </span>
                  </td>
                  <td class="px-2 py-4 whitespace-normal border-r">
                    <div
                      class="
                        text-xs text-center text-brand-navy-300
                        cursor-pointer
                      "
                    >
                      {{ station.title }}
                    </div>
                  </td>

                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-nowrap
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.role }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.date }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.ohPrice }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.ohTat }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.rpPrice }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.rpTat }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      border-r
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.tsPrice }}
                  </td>
                  <td
                    class="
                      px-2
                      py-4
                      whitespace-normal
                      text-center text-sm text-gray-500
                    "
                  >
                    {{ station.tsTat }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="
              bg-white
              px-4
              py-3
              flex
              items-center
              justify-between
              border-t border-gray-200
              sm:px-6
            "
          >
            <div class="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                class="
                  relative
                  inline-flex
                  items-center
                  px-4
                  py-2
                  border border-gray-300
                  text-sm
                  font-medium
                  rounded-md
                  text-gray-700
                  bg-white
                  hover:bg-gray-50
                "
              >
                Previous
              </a>
              <a
                href="#"
                class="
                  ml-3
                  relative
                  inline-flex
                  items-center
                  px-4
                  py-2
                  border border-gray-300
                  text-sm
                  font-medium
                  rounded-md
                  text-gray-700
                  bg-white
                  hover:bg-gray-50
                "
              >
                Next
              </a>
            </div>
            <div
              class="
                hidden
                sm:flex-1 sm:flex sm:items-center sm:justify-between
              "
            >
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  {{ " " }}
                  <span class="font-medium">1</span>
                  {{ " " }}
                  to
                  {{ " " }}
                  <span class="font-medium">10</span>
                  {{ " " }}
                  of
                  {{ " " }}
                  <span class="font-medium">97</span>
                  {{ " " }}
                  results
                </p>
              </div>
              <div>
                <nav
                  class="
                    relative
                    z-0
                    inline-flex
                    rounded-md
                    shadow-sm
                    -space-x-px
                  "
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-2
                      py-2
                      rounded-l-md
                      border border-gray-300
                      bg-white
                      text-sm
                      font-medium
                      text-gray-500
                      hover:bg-gray-50
                    "
                  >
                    <span class="sr-only">Previous</span>
                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a
                    href="#"
                    aria-current="page"
                    class="
                      z-10
                      bg-indigo-50
                      border-indigo-500
                      text-indigo-600
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border
                      text-sm
                      font-medium
                    "
                  >
                    1
                  </a>
                  <a
                    href="#"
                    class="
                      bg-white
                      border-gray-300
                      text-gray-500
                      hover:bg-gray-50
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border
                      text-sm
                      font-medium
                    "
                  >
                    2
                  </a>
                  <a
                    href="#"
                    class="
                      bg-white
                      border-gray-300
                      text-gray-500
                      hover:bg-gray-50
                      hidden
                      md:inline-flex
                      relative
                      items-center
                      px-4
                      py-2
                      border
                      text-sm
                      font-medium
                    "
                  >
                    3
                  </a>
                  <span
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border border-gray-300
                      bg-white
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    ...
                  </span>
                  <a
                    href="#"
                    class="
                      bg-white
                      border-gray-300
                      text-gray-500
                      hover:bg-gray-50
                      hidden
                      md:inline-flex
                      relative
                      items-center
                      px-4
                      py-2
                      border
                      text-sm
                      font-medium
                    "
                  >
                    8
                  </a>
                  <a
                    href="#"
                    class="
                      bg-white
                      border-gray-300
                      text-gray-500
                      hover:bg-gray-50
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border
                      text-sm
                      font-medium
                    "
                  >
                    9
                  </a>
                  <a
                    href="#"
                    class="
                      bg-white
                      border-gray-300
                      text-gray-500
                      hover:bg-gray-50
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border
                      text-sm
                      font-medium
                    "
                  >
                    10
                  </a>
                  <a
                    href="#"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-2
                      py-2
                      rounded-r-md
                      border border-gray-300
                      bg-white
                      text-sm
                      font-medium
                      text-gray-500
                      hover:bg-gray-50
                    "
                  >
                    <span class="sr-only">Next</span>
                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <fieldset class="space-y-5 flex flex-row justify-start">
            <legend class="sr-only">Notifications</legend>
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="select-all"
                  aria-describedby="select-all-description"
                  name="select-all"
                  type="checkbox"
                  class="
                    focus:ring-brand-navy-300
                    h-4
                    w-4
                    text-brand-navy-300
                    border-gray-300
                    rounded
                  "
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="select-all" class="font-medium text-gray-700"
                  >Select All</label
                >
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex items-center h-5 ml-6">
                <input
                  id="exchange-unit"
                  aria-describedby="exchange-unit-description"
                  name="exchange-unit"
                  type="checkbox"
                  class="
                    focus:ring-brand-navy-300
                    h-4
                    w-4
                    text-brand-navy-300
                    border-gray-300
                    rounded
                  "
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="exchange-unit" class="font-medium text-gray-700"
                  >Exchange Unit Available</label
                >
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex items-center h-5 ml-6">
                <input
                  id="outright"
                  aria-describedby="outright-description"
                  name="outright"
                  type="checkbox"
                  class="
                    focus:ring-brand-navy-300
                    h-4
                    w-4
                    text-brand-navy-300
                    border-gray-300
                    rounded
                  "
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="outright" class="font-medium text-gray-700"
                  >Outright Unit Available</label
                >
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex items-center h-5 ml-6">
                <input
                  id="workscope"
                  aria-describedby="workscope-description"
                  name="workscope"
                  type="checkbox"
                  class="
                    focus:ring-brand-navy-300
                    h-4
                    w-4
                    text-brand-navy-300
                    border-gray-300
                    rounded
                  "
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="workscope" class="font-medium text-gray-700"
                  >Request Workscope</label
                >
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex items-center h-5 ml-6">
                <input
                  id="delay-factors"
                  aria-describedby="delay-factors-description"
                  name="delay-factors"
                  type="checkbox"
                  class="
                    focus:ring-brand-navy-300
                    h-4
                    w-4
                    text-brand-navy-300
                    border-gray-300
                    rounded
                  "
                />
              </div>
              <div class="ml-3 text-sm flex">
                <label
                  for="delay-factors"
                  class="flex font-medium text-gray-700"
                  >Request Delay Factors
                </label>
                <Popper
                  :arrow="true"
                  :hover="true"
                  content="Please include details that may delay the estimated TAT.  For example: Will take 60 days to receive the repair kit from the OEM"
                >
                  <InformationCircleIcon
                    class="text-gray-500 flex h-5 w-5 ml-1"
                  />
                </Popper>
              </div>
            </div>
          </fieldset>
          <div class="flex items-start space-x-4 mt-12">
            <div class="min-w-0 flex-1">
              <form action="#">
                <div
                  class="
                    border-b border-gray-200
                    focus-within:border-indigo-600
                  "
                >
                  <label for="comment" class="sr-only">Add RFQ comment</label>
                  <textarea
                    rows="3"
                    name="comment"
                    id="comment"
                    class="
                      block
                      w-full
                      border-0 border-b border-transparent
                      p-0
                      pb-2
                      resize-none
                      focus:ring-0 focus:border-brand-navy-300
                      sm:text-sm
                    "
                    placeholder="Add RFQ comment..."
                  />
                </div>
                <div class="pt-2 flex justify-between">
                  <div class="flex-shrink-0">
                    <button
                      type="submit"
                      class="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        border border-transparent
                        text-sm
                        font-medium
                        rounded-md
                        shadow-sm
                        text-white
                        bg-brand-navy-300
                        hover:bg-brand-navy-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                      "
                    >
                      Send RFQ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <SponsorAdBanner :part="part" />
    <WishlistNotification :part="part" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Popper from "vue3-popper";
import getStations from "@/composables/getStations";
import getPart from "@/composables/getPart";
import Loader from "@/global/Loader.vue";
import SponsorAdBanner from "@/global/SponsorAdBanner";
import WishlistNotification from "@/global/WishlistNotification";
import SearchResultLoader from "@/global/Loaders/SearchResultLoader";
import ConfirmFeedbackSponsor from "@/global/ConfirmFeedbackSponsor";
import {
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

const messages = [
  {
    id: 1,
    sender: "Overhaul",
    time: "30 days",
  },
  {
    id: 2,
    sender: "Repair",
    time: "15 days",
  },
  {
    id: 3,
    sender: "Test",
    time: "5 days",
  },
];

import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
  TrendingUpIcon,
  DownloadIcon,
  PaperAirplaneIcon,
  SearchIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SwitchVerticalIcon,
  InformationCircleIcon,
  PlusSmIcon as PlusSmIconSolid,
} from "@heroicons/vue/solid";

import { BookmarkIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      showPopper: false,
    };
  },
  computed: {
    ...mapGetters("sponsorAdModalModule", ["getWishlistFeedback"]),
  },
  methods: {
    showPopover() {
      this.ShowPopper = !this.showPopper;
    },
    ...mapActions("notificationWishlistModule", ["showWishlistNotification"]),
  },
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    LocationMarkerIcon,
    PencilIcon,
    TrendingUpIcon,
    DownloadIcon,
    CogIcon,
    PaperAirplaneIcon,
    SearchIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    SwitchVerticalIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Loader,
    InformationCircleIcon,
    Popper,
    PlusSmIconSolid,
    BookmarkIcon,
    SponsorAdBanner,
    WishlistNotification,
    SearchResultLoader,
    ConfirmFeedbackSponsor,
  },
  setup() {
    const { stations, error, loading, load } = getStations();
    const { part, partError, partLoading, partLoad } = getPart();
    load();
    partLoad();
    return {
      stations,
      error,
      loading,
      messages,
      part,
      partError,
      partLoading,
    };
  },
};
</script>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 12px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>