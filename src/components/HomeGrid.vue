<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white pt-16 sm:py-24 lg:pt-32">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl sm:px-6
        lg:px-8 lg:max-w-7xl
      "
    >
      <div class="">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-brand-navy-500
                      rounded-md
                      shadow-lg
                    "
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ feature.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  PresentationChartBarIcon,
  SearchIcon,
  EmojiHappyIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "Repair Search",
    icon: CloudUploadIcon,
    desc: "Explore industry average repair costs, TAT, manufacturer, ATA chapter, aircraft applicability, PMA availability, part search statistics, repair certifications, and more.",
  },
  {
    name: "Big Data",
    icon: PresentationChartBarIcon,
    desc: "Your Secret Weapon to Making Smarter Business Decisions and Growing your Business. Outpace the competition with our market intelligence tools.",
  },
  {
    name: "Inventory Search",
    icon: SearchIcon,
    desc: "Buy parts with confidence, knowing you're getting the best prices in the market. Sell parts with confidence, knowing the prices your competition is quoting.",
  },
  {
    name: "145 Summit at Sea",
    icon: ShieldCheckIcon,
    desc: "An MRO Networking Conference at sea for shops and airlines only, August 4th - 8th, 2022. Registration begins August 2, 2021, details to follow soon.",
  },
  {
    name: "Shop Support Service",
    icon: EmojiHappyIcon,
    desc: "Need to find a calibration lab, buy chemicals, shop cleaning supplies or send out components out for plating, etc.? We've got you covered.",
  },
  {
    name: "Database Backups",
    icon: ServerIcon,
    desc: "Need to find a calibration lab, buy chemicals, shop cleaning supplies or send out components out for plating, etc.? We've got you covered.",
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>