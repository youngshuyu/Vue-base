<template>
  <div>
                <h2 class="sub-header">英雄列表</h2>
                <router-link class="btn btn-success" to="/hero/add">添加英雄</router-link>
                <!-- <a class="btn btn-success" href="#/add.html">添加英雄</a> -->
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>英雄姓名</th>
                                <th>英雄性别</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="item in list" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.gender}}</td>
                                <td>
                                    <a :href="`#/hero/edit/${item.id}`">edit</a> &nbsp;&nbsp;
                                    <a href="#" @click.prevent="delHero(item.id)">delete</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
</template>

<script>
export default {
    data () {
        return {
            list : []
        }
    },
    methods : {
        loadData () {
            this.$axios.get("/heroes").then(result => {
                this.list = result.data
            })
        },
        delHero(id) {
            if (confirm("确定要删除此英雄吗？")) {
            this.$axios.delete(`/heroes/${id}`).then( () => {
                this.loadData()
            })
            }
        },
    },
    created () {
        this.loadData();
    }
}
</script>

<style>

</style>