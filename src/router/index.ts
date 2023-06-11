import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"

const routers: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home/Home.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: () => import("@/views/Page404/Page404.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})
export default router
