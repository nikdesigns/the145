<template>
  <div class="bg-white">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div>
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          NEWS
        </h2>
        <div
          class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"
        >
          <p class="text-xl text-gray-500">
            Press notes and other news by the145
          </p>
          <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autocomplete="email"
                required=""
                class="
                  appearance-none
                  w-full
                  px-4
                  py-2
                  border border-gray-300
                  text-base
                  rounded-md
                  text-gray-900
                  bg-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:ring-brand-navy-300
                  focus:border-brand-navy-300
                  lg:max-w-xs
                "
                placeholder="Enter your email"
              />
            </div>
            <div
              class="
                mt-2
                flex-shrink-0
                w-full
                flex
                rounded-md
                shadow-sm
                sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex
              "
            >
              <button
                type="button"
                class="
                  w-full
                  bg-brand-navy-300
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-brand-navy-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-brand-navy-300
                  sm:w-auto sm:inline-flex
                "
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div v-for="post in posts" :key="post.title">
          <p class="text-sm text-gray-500">
            <time :datetime="post.datetime">{{ post.date }}</time>
          </p>
          <a href="#" class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">
              {{ post.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ post.description }}
            </p>
          </a>
          <div class="mt-3">
            <a
              :href="post.href"
              class="
                text-base
                font-semibold
                text-brand-navy-300
                hover:text-brand-navy-500
              "
            >
              Read full story
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    title: "Summit at sea by The145",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Jul 1, 2021",
    datetime: "2020-03-16",
  },
  {
    title: "Our Newest Partner Smart145",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Jul 16, 2021",
    datetime: "2020-03-10",
  },
  {
    title: "The145 announces partnership with AeroParts",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    date: "Apr 23, 2021",
    datetime: "2020-02-12",
  },
];

export default {
  setup() {
    return {
      posts,
    };
  },
};
</script>