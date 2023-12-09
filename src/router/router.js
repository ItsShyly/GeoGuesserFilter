import { createRouter, createWebHistory } from 'vue-router';
import World from './pages/WorldMap.vue';
import Africa from './pages/AfricaMap.vue';
import Asia from './pages/AsiaMap.vue';
import Europe from './pages/EuropeMap.vue';
import NorthAmerica from './pages/NorthAmericaMap.vue';
import SouthAmerica from './pages/SouthAmericaMap.vue';

const routes = [
  {
    path: '/',
    name: 'world-map',
    component: World,
  },
  {
    path: '/africa',
    name: 'africa',
    component: Africa,
  },
  {
    path: '/asia',
    name: 'asia',
    component: Asia,
  },
  {
    path: '/europe',
    name: 'europe',
    component: Europe,
  },
  {
    path: '/north-america',
    name: 'NorthAmerica',
    component: NorthAmerica,
  },
  {
    path: '/south-america',
    name: 'SouthAmerica',
    component: SouthAmerica,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
