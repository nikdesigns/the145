<template>
  <img class="px-4 pb-6" src="https://www.the145.com/images/big-ads.png" />
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <!-- Profile section -->
    <div class="px-4 lg:pb-8">
      <div
        class="
          -ml-4
          -mt-4
          flex
          justify-between
          items-center
          flex-wrap
          sm:flex-nowrap
        "
      >
        <div class="ml-4 mt-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">The145</h3>
          <p class="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit quam
            corrupti consectetur.
          </p>
        </div>
        <div class="ml-4 mt-4 flex-shrink-0">
          <button
            type="button"
            class="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-brand-navy-300
              hover:bg-brand-navy-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-brand-navy-300
            "
          >
            Edit
          </button>
        </div>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6">
          <div class="border-t border-gray-200 py-5">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Tel</dt>
                <dd class="mt-1 text-sm text-gray-900">+1 (888) 820-8551</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Email</dt>
                <dd class="mt-1 text-sm text-gray-900">support@the145.com</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Types</dt>
                <dd class="mt-1 text-sm text-gray-900">Repair Center</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Website</dt>
                <dd class="mt-1 text-sm text-gray-900">www.the145.com</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Employees</dt>
                <dd class="mt-1 text-sm text-gray-900">0-100</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Capabilities</dt>
                <dd class="mt-1 text-sm text-gray-900">57</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Address</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  45 E. 100 N Alpine UT, United States 84004
                </dd>
              </div>

              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Certificates</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  <ul
                    role="list"
                    class="
                      border border-gray-200
                      rounded-md
                      divide-y divide-gray-200
                    "
                  >
                    <li
                      class="
                        pl-3
                        pr-4
                        py-3
                        flex
                        items-center
                        justify-between
                        text-sm
                      "
                    >
                      <div class="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          class="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-2 flex-1 w-0 truncate">
                          A2LA - 1234
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          class="
                            font-medium
                            text-brand-navy-300
                            hover:text-brand-navy-500
                          "
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li
                      class="
                        pl-3
                        pr-4
                        py-3
                        flex
                        items-center
                        justify-between
                        text-sm
                      "
                    >
                      <div class="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          class="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-2 flex-1 w-0 truncate">
                          AFRA - 1247
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          class="
                            font-medium
                            text-brand-navy-300
                            hover:text-brand-navy-500
                          "
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Specialities</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  <div>
                    <ul
                      role="list"
                      class="
                        mt-2
                        grid grid-cols-1
                        gap-2
                        sm:gap-2 sm:grid-cols-2
                        lg:grid-cols-3
                      "
                    >
                      <li
                        v-for="special in specials"
                        :key="special.name"
                        class="col-span-1 flex justify-start content-center"
                      >
                        <div class="flex">
                          <CheckCircleIcon class="text-green-400 h-4 pr-1" />

                          <p class="text-gray-500 hover:text-gray-600">
                            {{ special.name }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              About
            </label>
            <div class="mt-1">
              <textarea
                id="about"
                name="about"
                rows="3"
                class="
                  shadow-sm
                  focus:ring-sky-500 focus:border-sky-500
                  mt-1
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                "
              />
            </div>
            <p class="mt-2 text-sm text-gray-500">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>
        </div>

        <div
          class="mt-6 flex-grow lg:mt-6 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
        >
          <p class="text-sm font-medium text-gray-700" aria-hidden="true">
            Photo
          </p>
          <div class="mt-1 lg:hidden">
            <div class="flex items-center">
              <div
                class="
                  flex-shrink-0
                  inline-block
                  rounded-full
                  overflow-hidden
                  h-12
                  w-12
                "
                aria-hidden="true"
              >
                <img
                  class="rounded-full h-full w-full"
                  :src="user.imageUrl"
                  alt=""
                />
              </div>
              <div class="ml-5 rounded-md shadow-sm">
                <div
                  class="
                    group
                    relative
                    border border-gray-300
                    rounded-md
                    py-2
                    px-3
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-50
                    focus-within:ring-2
                    focus-within:ring-offset-2
                    focus-within:ring-sky-500
                  "
                >
                  <label
                    for="mobile-user-photo"
                    class="
                      relative
                      text-sm
                      leading-4
                      font-medium
                      text-gray-700
                      pointer-events-none
                    "
                  >
                    <span>Change</span>
                    <span class="sr-only"> user photo</span>
                  </label>
                  <input
                    id="mobile-user-photo"
                    name="user-photo"
                    type="file"
                    class="
                      absolute
                      w-full
                      h-full
                      opacity-0
                      cursor-pointer
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="hidden relative rounded-full overflow-hidden lg:block">
            <img
              class="relative rounded-full w-40 h-40"
              :src="user.imageUrl"
              alt=""
            />
            <label
              for="desktop-user-photo"
              class="
                absolute
                inset-0
                w-full
                h-full
                bg-black bg-opacity-75
                flex
                items-center
                justify-center
                text-sm
                font-medium
                text-white
                opacity-0
                hover:opacity-100
                focus-within:opacity-100
              "
            >
              <span>Change</span>
              <span class="sr-only"> user photo</span>
              <input
                type="file"
                id="desktop-user-photo"
                name="user-photo"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  opacity-0
                  cursor-pointer
                  border-gray-300
                  rounded-md
                "
              />
            </label>
          </div>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >First name</label
          >
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-sky-500 focus:border-sky-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Last name</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-sky-500 focus:border-sky-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12">
          <label for="url" class="block text-sm font-medium text-gray-700"
            >URL</label
          >
          <input
            type="text"
            name="url"
            id="url"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-sky-500 focus:border-sky-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="company" class="block text-sm font-medium text-gray-700"
            >Company</label
          >
          <input
            type="text"
            name="company"
            id="company"
            autocomplete="organization"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-sky-500 focus:border-sky-500
              sm:text-sm
            "
          />
        </div>
      </div>
    </div>

    <!-- Privacy section -->
    <div class="pt-6 divide-y divide-gray-200">
      <div class="px-4 sm:px-6">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Privacy</h2>
          <p class="mt-1 text-sm text-gray-500">
            Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
          </p>
        </div>
        <ul role="list" class="mt-2 divide-y divide-gray-200">
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Available to hire
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
              </SwitchDescription>
            </div>
            <Switch
              v-model="availableToHire"
              :class="[
                availableToHire ? 'bg-brand-navy-300' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  availableToHire ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Make account private
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Pharetra morbi dui mi mattis tellus sollicitudin cursus
                pharetra.
              </SwitchDescription>
            </div>
            <Switch
              v-model="privateAccount"
              :class="[
                privateAccount ? 'bg-brand-navy-300' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  privateAccount ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Allow commenting
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Integer amet, nunc hendrerit adipiscing nam. Elementum ame
              </SwitchDescription>
            </div>
            <Switch
              v-model="allowCommenting"
              :class="[
                allowCommenting ? 'bg-brand-navy-300' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  allowCommenting ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Allow mentions
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Adipiscing est venenatis enim molestie commodo eu gravid
              </SwitchDescription>
            </div>
            <Switch
              v-model="allowMentions"
              :class="[
                allowMentions ? 'bg-brand-navy-300' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  allowMentions ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
        </ul>
      </div>
      <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
        <button
          type="button"
          class="
            bg-white
            border border-gray-300
            rounded-md
            shadow-sm
            py-2
            px-4
            inline-flex
            justify-center
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-sky-500
          "
        >
          Cancel
        </button>
        <button
          type="submit"
          class="
            ml-5
            bg-brand-navy-300
            border border-transparent
            rounded-md
            shadow-sm
            py-2
            px-4
            inline-flex
            justify-center
            text-sm
            font-medium
            text-white
            hover:bg-brand-navy-500
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-brand-navy-300
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { PaperClipIcon, CheckCircleIcon } from "@heroicons/vue/solid";

import { ref } from "vue";
const specials = [
  {
    name: "A/C Generators",
  },
  {
    name: "Aaacccc",
  },
  {
    name: "Accessories",
  },
  {
    name: "Accumulators",
  },
  {
    name: "ACMs",
  },
  {
    name: "Acoustic Panels (Engines)",
  },
  {
    name: "Actuators",
  },
  {
    name: "Advanced Epoxy Repair",
  },
  {
    name: "Aeroprint",
  },
  {
    name: "Aerostructures",
  },
  {
    name: "Ageing Aircraft Programs",
  },
  {
    name: "Air Conditioning",
  },
  {
    name: "Air De-Humidifiers",
  },
  {
    name: "Airbags",
  },
  {
    name: "APU Controller",
  },
  {
    name: "APU Isolators",
  },
  {
    name: "Cabin Noise Reduction",
  },
];
const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
export default {
  components: {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    PaperClipIcon,
    CheckCircleIcon,
  },
  setup() {
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);

    return {
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
      user,
      specials,
    };
  },
};
</script>

<style>
</style>