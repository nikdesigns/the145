<template>
  <main>
    <div>
      <!-- Hero card -->
      <div class="relative mt-6">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img
                class="h-full w-full object-cover"
                src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="People working on laptops"
              />
              <div
                class="absolute inset-0 bg-brand-navy-300 mix-blend-multiply"
              />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1
                class="
                  text-center text-4xl
                  font-extrabold
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span class="block text-white">Take control of your</span>
                <span class="block text-indigo-200">customer support</span>
              </h1>
              <p
                class="
                  mt-6
                  max-w-lg
                  mx-auto
                  text-center text-xl text-indigo-200
                  sm:max-w-3xl
                "
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div
                class="
                  mt-10
                  max-w-sm
                  mx-auto
                  sm:max-w-none sm:flex sm:justify-center
                "
              >
                <div
                  class="
                    space-y-4
                    sm:space-y-0
                    sm:mx-auto
                    sm:inline-grid
                    sm:grid-cols-2
                    sm:gap-5
                  "
                >
                  <a
                    href="#"
                    class="
                      flex
                      items-center
                      justify-center
                      px-4
                      py-3
                      border border-transparent
                      text-base
                      font-medium
                      rounded-md
                      shadow-sm
                      text-brand-navy-300
                      bg-white
                      hover:bg-indigo-50
                      sm:px-8
                    "
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    class="
                      flex
                      items-center
                      justify-center
                      px-4
                      py-3
                      border border-transparent
                      text-base
                      font-medium
                      rounded-md
                      shadow-sm
                      text-white
                      bg-brand-navy-300 bg-opacity-60
                      hover:bg-opacity-70
                      sm:px-8
                    "
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p
            class="
              mb-6
              text-center text-sm
              font-semibold
              uppercase
              text-gray-500
              tracking-wide
            "
          >
            Trusted by over 5 very average small businesses
          </p>
          <Carousel
            :settings="settings"
            :breakpoints="breakpoints"
            :autoplay="2000"
            :wrap-around="true"
          >
            <Slide v-for="slide in slides" :key="slide.id">
              <div class="carousel__item">
                <div
                  class="
                    col-span-1
                    flex
                    justify-center
                    md:col-span-2
                    lg:col-span-1
                  "
                >
                  <img class="h-12" :src="slide.imgSrc" alt="Tuple" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <!-- More main page content here... -->
  </main>
</template>

<script>
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineComponent({
  data() {
    return {
      slides: [
        {
          id: 1,
          imgSrc: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
        },
        {
          id: 2,
          imgSrc: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
        },
        {
          id: 3,
          imgSrc:
            "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
        },
        {
          id: 4,
          imgSrc:
            "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
        },
        {
          id: 5,
          imgSrc:
            "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
        },
        {
          id: 6,
          imgSrc:
            "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
        },
        {
          id: 7,
          imgSrc: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        pauseAutoplayOnHover: true,
        mouseDrag: true,
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>
.carousel__prev,
.carousel__next {
  background-color: #d7dbe2;
}
</style>