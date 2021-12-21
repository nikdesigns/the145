<template>
  <top-navbar></top-navbar>
  <router-view />
  <bottom-footer></bottom-footer>
</template>

<script>
// @ is an alias to /src
import TopNavbar from "@/components/TopNavbar.vue";
import BottomFooter from "@/components/BottomFooter.vue";

export default {
  components: {
    TopNavbar,
    BottomFooter,
  },
};
</script>
