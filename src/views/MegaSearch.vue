<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <form class="space-y-8 divide-y divide-gray-200">
      <div class="space-y-8 divide-y divide-gray-200">
        <div class="pt-2">
          <!-- <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div> -->
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="flex items-start space-x-4 pb-">
                <div class="min-w-0 flex-1">
                  <form action="#" class="relative">
                    <div
                      class="
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        overflow-hidden
                        focus-within:border-brand-navy-300
                        focus-within:ring-1
                        focus-within:ring-brand-navy-300
                      "
                    >
                      <label for="comment" class="sr-only"
                        >Paste Part Numbers</label
                      >
                      <textarea
                        rows="10"
                        name="comment"
                        id="comment"
                        class="
                          block
                          w-full
                          py-3
                          border-0
                          resize-none
                          focus:ring-0
                          sm:text-sm
                        "
                        placeholder="Paste your part numbers here. "
                      />

                      <!-- Spacer element to match the height of the toolbar -->
                      <div class="py-2" aria-hidden="true">
                        <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                        <div class="py-px">
                          <div class="h-9" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="
                        absolute
                        bottom-0
                        inset-x-0
                        pl-3
                        pr-2
                        py-2
                        flex
                        justify-between
                      "
                    >
                      <div class="flex items-center space-x-5">
                        <!-- <div class="flex items-center">
                          <button
                            type="button"
                            class="
                              -m-2.5
                              w-10
                              h-10
                              rounded-full
                              flex
                              items-center
                              justify-center
                              text-gray-400
                              hover:text-gray-500
                            "
                          >
                            <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                            <span class="sr-only">Attach a file</span>
                          </button>
                        </div> -->
                        <span class="text-gray-500 text-sm">2,000 Max.</span>
                      </div>
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
                            focus:ring-brand-navy-300
                          "
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="sm:col-span-3">
              <div class="flex items-start space-x-4 pb-">
                <div class="min-w-0 flex-1">
                  <form action="#" class="relative">
                    <div
                      class="
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        overflow-hidden
                        focus-within:border-brand-navy-300
                        focus-within:ring-1
                        focus-within:ring-brand-navy-300
                      "
                    >
                      <label for="comment" class="sr-only"
                        >Add your comment</label
                      >
                      <textarea
                        rows="10"
                        name="comment"
                        id="comment"
                        class="
                          block
                          w-full
                          py-3
                          border-0
                          resize-none
                          focus:ring-0
                          sm:text-sm
                        "
                        placeholder="Paste your part numbers or upload the spreadsheet. "
                      />

                      <!-- Spacer element to match the height of the toolbar -->
                      <div class="py-2" aria-hidden="true">
                        <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                        <div class="py-px">
                          <div class="h-9" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="
                        absolute
                        bottom-0
                        inset-x-0
                        pl-3
                        pr-2
                        py-2
                        flex
                        justify-between
                      "
                    >
                      <div class="flex items-center space-x-5">
                        <div class="flex items-center">
                          <button
                            type="button"
                            class="
                              -m-2.5
                              w-10
                              h-10
                              rounded-full
                              flex
                              items-center
                              justify-center
                              text-gray-400
                              hover:text-gray-500
                            "
                          >
                            <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                            <span class="sr-only">Attach a file</span>
                          </button>
                        </div>
                        <span class="text-gray-500 text-sm">50,000 Max.</span>
                      </div>
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
                            focus:ring-brand-navy-300
                          "
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/vue/solid";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: EmojiHappyIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: EmojiSadIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: ThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    EmojiHappyIcon,
    PaperClipIcon,
  },
  setup() {
    const selected = ref(moods[5]);

    return {
      moods,
      selected,
    };
  },
};
</script>