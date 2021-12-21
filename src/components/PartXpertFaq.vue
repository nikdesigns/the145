<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-6">
      <div class="max-w-7xl mx-auto divide-y-2 divide-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Part Xpert FAQ's
        </h3>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt class="text-base">
              <DisclosureButton
                class="
                  text-left
                  w-full
                  flex
                  justify-between
                  items-start
                  text-gray-400
                "
              >
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
              <p class="text-base text-gray-700 pt-1">
                {{ faq.subQuestionOne }}
              </p>
              <!-- {{ faq.subAnswerOne }} -->
              <div v-for="(sub, i) in faq.subAnswerOne" :key="i">
                <p>{{ sub.one }}</p>
                <p>{{ sub.two }}</p>
                <p>{{ sub.three }}</p>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const faqs = [
  {
    question: "How do I reserve parts?",
    answer:
      "There are two ways to reserve parts. You can reserve a list of part numbers, or you can reserve one part at a time.",
    subQuestionOne: "Reserve a List of Part Numbers:",
    subAnswerOne: [
      {
        one: "Go to the Repair tab as if you are going to search for a repair capability.",
        two: "Click on the “PX Reserve Parts” link, as shown above.",
        three:
          "Paste your list of part numbers into the text box and hit “Reserve”.",
      },
    ],
    subQuestionTwo: "Reserve a Specific Part Number:",
    subAnswerTwo: [
      {
        one: "Search a part number in the Repair system that you repair all the time",
        two: "Click on the icon next to the part number in the results page",
        three:
          "Fill-out the Part Expert profile page and select all associated dash numbers",
        four: "Click the “Save” button",
      },
    ],
  },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    };
  },
};
</script>