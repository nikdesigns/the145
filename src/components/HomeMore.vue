<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      relative
      bg-gray-50
      pt-16
      pb-20
      px-4
      sm:px-6
      lg:pt-24 lg:pb-28 lg:px-8
    "
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          More 145
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Great Sourcing Tools Are Just The Beginning
        </p>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    title: "2021 Top Shop Awards",
    href: "#",
    category: { name: "Top Shop Awards", href: "#" },
    description:
      "The 145's Top Shop Awards is one of the most coveted aviation maintenance award in the world.  Check out this year's winners and learn about what's in store for 2022.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://www.the145.com/images/mro_2021.jpg",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Latest Issue Out Now",
    href: "#",
    category: { name: "The145 Magazine", href: "#" },
    description:
      '145 Magazine is our bi-monthly aviation "life style" e-magazine. Each issue contains intriguing interviews with aviation professionals, CEO profiles, business development ideas, tips for improving sales and marketing and more.',
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "https://www.the145.com/images/the145_mag_main_mock.jpg",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Summit at Sea",
    href: "#",
    category: { name: "145 Summit at Sea", href: "#" },
    description:
      "August 4th - 8th of 2022 The 145 will be hosting its first aviation maintenance networking conference aboard Royal Caribbean's Mariner of the Seas.   ",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "https://www.the145.com/images/the145_sas_footer.jpg",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
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