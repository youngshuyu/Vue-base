import VueRouter from 'vue-router'
import Vue from 'vue'
import heroList from '../views/hero-list.vue'
import weaponList from '../views/weapon-list.vue'
import equipmentList from '../views/equipment'
import addHero from '../views/add'
import editHero from '../views/edit'
import secondRouter from '../views/second-router.vue'

Vue.use(VueRouter); // 使用router (这步不能少)
export default new VueRouter({
    linkActiveClass : 'active',
    routes : [
        {
            path : '/',
            redirect : '/hero',          
        },
        {
            path : '/hero',
            component : secondRouter,
            children : [
                {
                    path : '',
                    component : heroList,
                },
                {
                    path : '/hero/add',
                    component : addHero
                },
                {
                    path : '/hero/edit/:id',
                    component : editHero
                }
            ]
        },
        {
            path : '/weapon',
            component : weaponList
        },
        {
            path : '/equipment',
            component : equipmentList
        },
        
    ]
})
