import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'home',
        component: () =>import('../pages/Home.vue')
    },
    {
        path:'/signin',
        name:'signin',
        component: () => import('../pages/Signin.vue')
    },
    {
        path:'/aboutus',
        name:'aboutus',
        component: () => import('../pages/Aboutus.vue')
    },  
        {
        path:'/contacus',
        name:'contacus',
        component: () => import('../pages/Contacus.vue')
    },    
]

const router = new VueRouter({
    routes
})

export default router