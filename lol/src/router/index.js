import VueRouter from 'vue-router'
import Vue from 'vue'
import heroList from '../view/hero-list.vue'
import rank from '../view/rank.vue'
import equipment from '../view/equipment.vue'
import container from '../components/componentContainer.vue'
import edit from '../view/edit.vue'
import add from '../view/add.vue'

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/heroes'
        },
        {
            path: '/heroes',
            component: container,//一级路由的组件里应该放  二级路由的容器 => router-view
            children: [{//一级路由的路由表 =>children => 二级路由表
                path: '',//如果二级路由的path 什么都不写 它就匹配 二级路由的默认组件
                component: heroList,
            }, {
                path: '/heroes/edit/:id',
                component: edit
            },{
                path : '/heroes/add',
                component : add
            }]
        },
        {
            path: '/rank',
            component: rank
        },
        {
            path: '/equipment',
            component: equipment
        }

    ]
})