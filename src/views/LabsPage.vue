<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" class="divide-y divide-gray-200">
        <li
          v-for="application in applications"
          :key="application.applicant.email"
        >
          <a :href="application.href" class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0 pr-4">
                  <img
                    class="h-16 w-auto"
                    :src="application.applicant.imageUrl"
                    alt=""
                  />
                </div>
                <div
                  class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <p
                      class="text-base font-medium text-brand-navy-300 truncate"
                    >
                      {{ application.applicant.name }}
                    </p>
                    <div class="sm:flex mt-2">
                      <p class="flex items-center text-sm text-gray-500">
                        <CameraIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </p>
                      <div
                        v-for="(image, index) in application.images"
                        :key="index"
                      >
                        <img class="h-8 mx-1 w-8" :src="image.src" alt="" />
                      </div>
                      <p
                        class="
                          mt-2
                          flex
                          items-center
                          text-sm text-gray-500
                          sm:mt-0 sm:ml-6
                        "
                      >
                        <PhoneIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {{ application.applicant.phone }}
                      </p>
                    </div>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <p class="text-sm text-gray-900">
                        Applied on
                        {{ " " }}
                        <time :datetime="application.date">{{
                          application.dateFull
                        }}</time>
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <CheckCircleIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        {{ application.stage }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  UsersIcon,
  LocationMarkerIcon,
  CameraIcon,
  PhoneIcon,
} from "@heroicons/vue/solid";

const applications = [
  {
    applicant: {
      name: "Anritsu Company Calibration Service",
      phone: "+1 (408) 201-1976",
      imageUrl:
        "https://www.the145.com/classifiedImage/MyClassifiedImage_16167531_1519162099.jpg",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
    images: [
      {
        src: "https://images.pexels.com/photos/10479230/pexels-photo-10479230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnail:
          "https://images.pexels.com/photos/10479230/pexels-photo-10479230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        w: 600,
        h: 400,
        alt: "some of me one", // optional alt attribute for thumbnail image
      },
      {
        src: "https://images.pexels.com/photos/10504692/pexels-photo-10504692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnail:
          "https://images.pexels.com/photos/10504692/pexels-photo-10504692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        w: 1200,
        h: 900,
      },
    ],
  },
  {
    applicant: {
      name: "Kristen Ramos",
      phone: "+1 (408) 201-1976",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://www.the145.com/classifiedImage/MyClassifiedImage_16167081_1515440460.jpg",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
    images: [
      {
        src: "https://images.pexels.com/photos/8732901/pexels-photo-8732901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnail: "https://www.the145.com/classifiedImage/calibration-big.jpg",
        w: 600,
        h: 400,
        alt: "some numbers on a grey background", // optional alt attribute for thumbnail image
      },
      {
        src: "https://images.pexels.com/photos/10500476/pexels-photo-10500476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnail: "https://www.the145.com/classifiedImage/calibration-big.jpg",
        w: 1200,
        h: 900,
      },
    ],
  },
  {
    applicant: {
      name: "Ted Fox",
      phone: "+1 (408) 201-1976",
      email: "ted.fox@example.com",
      imageUrl:
        "https://www.the145.com/classifiedImage/MyClassifiedImage_16167471_1515524179.jpg",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
    images: [
      {
        src: "https://images.pexels.com/photos/10275754/pexels-photo-10275754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnail: "https://www.the145.com/classifiedImage/calibration-big.jpg",
        w: 600,
        h: 400,
        alt: "some numbers on a grey background", // optional alt attribute for thumbnail image
      },
      {
        src: "https://images.pexels.com/photos/10433590/pexels-photo-10433590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnail: "https://www.the145.com/classifiedImage/calibration-big.jpg",
        w: 1200,
        h: 900,
      },
    ],
  },
];

export default {
  components: {
    CheckCircleIcon,
    ChevronRightIcon,
    MailIcon,
    UsersIcon,
    LocationMarkerIcon,
    CameraIcon,
    PhoneIcon,
  },
  setup() {
    return {
      applications,
    };
  },
};
</script>