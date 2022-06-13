import { createRouter, createWebHistory } from 'vue-router'
import MyGame from "@/pages/MyGame"
import MyWorkers from "@/pages/MyWorkers";


const routes = [
    {
        path: '/MyGame',
        name: 'MyGame',
        component: MyGame
    },
    {
        path: '/MyWorkers',
        name: 'MyWorkers',
        component: MyWorkers
    }
]

const index = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default index