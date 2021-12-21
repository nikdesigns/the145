<template>
  <div
    v-if="show"
    class="
      fixed
      bottom-0
      inset-x-0
      pb-2
      sm:pb-5
      transition-colors
      ease-in-out
      delay-150
      scale-110
    "
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div
        class="p-2 rounded-lg border border-gray-400 bg-white shadow-2xl sm:p-3"
      >
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-gray-100">
              <SpeakerphoneIcon
                class="h-6 w-6 text-gray-800"
                aria-hidden="true"
              />
            </span>
            <p class="ml-3 font-medium text-gray-800 truncate">
              <span class="md:hidden"> We announced a new product! </span>
              <span class="hidden md:inline">
                Ad space available for this part number
                <span class="font-bold pl-1 underline">
                  {{ part.partNumber }}
                </span>
              </span>
            </p>
          </div>
          <div
            class="
              order-3
              mt-2
              flex-shrink-0
              w-full
              sm:order-2 sm:mt-0 sm:w-auto
            "
          >
            <a
              @click="showSponsorModal"
              href="#"
              class="
                flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-normal
                text-white
                bg-gray-700
                hover:bg-gray-900
              "
            >
              Reserve Now
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              @click="show = false"
              type="button"
              class="
                -mr-1
                flex
                p-2
                rounded-md
                hover:bg-brand-navy-300
                focus:outline-none focus:ring-2 focus:ring-white
              "
            >
              <span class="sr-only">Dismiss</span>
              <XIcon
                class="h-6 w-6 text-gray-800 hover:text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-sponsor-ad :part="part"></modal-sponsor-ad>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex";
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";
import ModalSponsorAd from "@/global/ModalSponsorAd";

export default {
  props: ["part"],
  components: {
    SpeakerphoneIcon,
    XIcon,
    ModalSponsorAd,
  },
  methods: {
    ...mapActions("sponsorAdModalModule", ["showSponsorModal"]),
  },

  setup() {
    const show = ref(false);
    function setShow() {
      show.value = false;
      setTimeout(() => {
        show.value = true;
      }, Math.floor(Math.random() * 5000) + 4000);
    }
    setShow();
    return {
      show,
    };
  },
};
</script>
