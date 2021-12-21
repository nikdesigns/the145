<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div class="py-6">
      <div
        class="
          max-w-3xl
          mx-auto
          sm:px-1
          lg:max-w-7xl lg:px-1 lg:grid lg:grid-cols-12 lg:gap-8
        "
      >
        <div class="hidden lg:block lg:col-span-3 xl:col-span-3">
          <nav aria-label="Sidebar" class="sticky top-6 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'flex items-center px-3 py-2 text-sm font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <span class="truncate">
                {{ item.name }}
              </span>
            </a>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-9">
          <profile></profile>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Administration/Profile";
const navigation = [
  { name: "Profile", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

export default {
  components: {
    Profile,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

<style>
</style>