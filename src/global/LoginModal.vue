<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="getLoginModal">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="hideLoginModal"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
            "
          >
            <div v-if="forgotPassword">
              <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                  class="mx-auto h-10 w-auto"
                  src="https://www.the145.com/images/THE145-logo-wTag.png"
                  alt="Workflow"
                />
                <h2
                  class="mt-6 text-center text-2xl font-extrabold text-gray-900"
                >
                  Recover your account
                </h2>
              </div>
              <div class="mt-3 text-left sm:mt-5">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  <form class="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div class="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required=""
                          class="
                            appearance-none
                            block
                            w-full
                            px-3
                            py-2
                            border border-gray-300
                            rounded-md
                            shadow-sm
                            placeholder-gray-400
                            focus:outline-none
                            focus:ring-brand-navy-300
                            focus:border-brand-navy-300
                            sm:text-sm
                          "
                        />
                      </div>
                      <p
                        class="mt-2 text-sm text-gray-500"
                        id="email-description"
                      >
                        We'll send your password to the registered email.
                      </p>
                    </div>

                    <div class="flex justify-start">
                      <div class="text-sm">
                        <a
                          @click="forgotPassword = false"
                          href="#"
                          class="
                            font-medium
                            text-brand-navy-500
                            hover:text-brand-navy-500
                          "
                        >
                          Back to Login
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="
                          w-full
                          flex
                          justify-center
                          py-2
                          px-4
                          border border-transparent
                          rounded-md
                          shadow-sm
                          text-sm
                          font-medium
                          text-white
                          bg-brand-navy-300
                          hover:bg-brand-navy-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-brand-navy-500
                        "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </DialogTitle>
              </div>
            </div>

            <div v-else>
              <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                  class="mx-auto h-10 w-auto"
                  src="https://www.the145.com/images/THE145-logo-wTag.png"
                  alt="Workflow"
                />
                <h2
                  class="mt-6 text-center text-2xl font-extrabold text-gray-900"
                >
                  Sign in to your account
                </h2>
              </div>
              <div class="mt-3 text-left sm:mt-5">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  <form class="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div class="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required=""
                          class="
                            appearance-none
                            block
                            w-full
                            px-3
                            py-2
                            border border-gray-300
                            rounded-md
                            shadow-sm
                            placeholder-gray-400
                            focus:outline-none
                            focus:ring-brand-navy-300
                            focus:border-brand-navy-300
                            sm:text-sm
                          "
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div class="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required=""
                          class="
                            appearance-none
                            block
                            w-full
                            px-3
                            py-2
                            border border-gray-300
                            rounded-md
                            shadow-sm
                            placeholder-gray-400
                            focus:outline-none
                            focus:ring-brand-navy-300
                            focus:border-brand-navy-300
                            sm:text-sm
                          "
                        />
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          class="
                            h-4
                            w-4
                            text-brand-navy-500
                            focus:ring-brand-navy-300
                            border-gray-300
                            rounded
                          "
                        />
                        <label
                          for="remember-me"
                          class="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div class="text-sm">
                        <a
                          @click="forgotPassword = true"
                          href="#"
                          class="
                            font-medium
                            text-brand-navy-500
                            hover:text-brand-navy-500
                          "
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="
                          w-full
                          flex
                          justify-center
                          py-2
                          px-4
                          border border-transparent
                          rounded-md
                          shadow-sm
                          text-sm
                          font-medium
                          text-white
                          bg-brand-navy-300
                          hover:bg-brand-navy-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-brand-navy-500
                        "
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </DialogTitle>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/outline";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      forgotPassword: false,
    };
  },
  computed: {
    ...mapGetters(["getLoginModal"]),
  },
  methods: {
    ...mapActions(["hideLoginModal"]),
  },

  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
  },
};
</script>