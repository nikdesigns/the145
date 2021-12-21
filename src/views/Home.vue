<template>
  <hero-section></hero-section>
  <home-featured></home-featured>
  <home-stats></home-stats>
  <home-grid></home-grid>
  <home-team></home-team>
  <home-more></home-more>
  <home-cloud></home-cloud>
  <newsletter-section></newsletter-section>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import HomeFeatured from "@/components/HomeFeatured";
import NewsletterSection from "@/components/NewsletterSection";
import HomeTeam from "@/components/HomeTeam";
import HomeMore from "@/components/HomeMore";
import HomeCloud from "@/components/HomeCloud";
import HomeStats from "@/components/HomeStats";
import HomeGrid from "@/components/HomeGrid";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    HeroSection,
    HomeFeatured,
    NewsletterSection,
    HomeTeam,
    HomeMore,
    HomeCloud,
    HomeStats,
    HomeGrid,
  },
};
</script>
