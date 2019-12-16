<template>
  <div>
                <h2 class="sub-header">Hero List</h2>
                <a class="btn btn-success" href="#/heroes/add">添加英雄</a>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>英雄序号</th>
                                <th>英雄名称</th>
                                <th>英雄性别</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in list" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.gender}}</td>
                                <td>
                                    <a :href="`#/heroes/edit/${item.id}`">编辑</a> &nbsp;&nbsp;
                                    <a href="#" @click.prevent="delHero(item.id)">删除</a>
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
        loadData() {
            this.$axios.get('/heroes').then(res => this.list = res.data)
        },
        delHero(id) {
            this.$axios.delete(`/heroes/${id}`).then((res) => {
                if (res.status === 200) {
                    alert("删除成功");
                    this.loadData()
                }

            })
        }
    },
    created () {
        this.loadData()
    }
}
</script>

<style>

</style>