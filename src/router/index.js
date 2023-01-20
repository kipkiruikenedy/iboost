
import {createRouter, createWebHistory} from "vue-router";

import AboutView from "../Views/AboutView.vue";
import HomeView from "../Views/HomeView.vue";
import ContactView from "../Views/ContactView.vue";
import MapView from "../Views/MapView.vue";


const routes=[
  {
     path:"/",
     component: HomeView
  },
  {
     path:"/about",
     component: AboutView
  },
  {
     path:"/contact",
     component: ContactView
  },
  {
     path:"/map",
     component: MapView
  }
]



const router=createRouter(
  {
     history: createWebHistory(),
     routes
  }
);

export default router;


