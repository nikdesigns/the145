import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import SearchResult from '../views/SearchResult.vue';
import LabsPage from '../views/LabsPage.vue';
import WhoSearched from '../views/WhoSearched.vue';
import Directory from '../views/Directory.vue';
import InventorySearch from '../views/InventorySearch.vue';
import NewsPage from '../views/NewsPage.vue';
import NewsView from '../views/NewsView.vue';
import MegaSearch from '../views/MegaSearch.vue';
import PartXpertPage from '../views/PartXpertPage.vue';
import Administration from '../views/Administration.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/search/:id',
    name: 'SearchResult',
    component: SearchResult,
  },
  {
    path: '/labs',
    name: 'LabsPage',
    component: LabsPage,
  },
  {
    path: '/directory',
    name: 'Directory',
    component: Directory,
  },
  {
    path: '/who-searched',
    name: 'WhoSearched',
    component: WhoSearched,
  },
  {
    path: '/inventory-search',
    name: 'InventorySearch',
    component: InventorySearch,
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage,
  },
  {
    path: '/news/:id',
    name: 'NewsView',
    component: NewsView,
  },
  {
    path: '/mega-search',
    name: 'MegaSearch',
    component: MegaSearch,
  },
  {
    path: '/part-xpert',
    name: 'PartXpertPage',
    component: PartXpertPage,
  },
  {
    path: '/administration',
    name: 'Administration',
    component: Administration,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
