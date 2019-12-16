<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="text" class="form-control" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input type="text" class="form-control" v-model="formData.gender">
          </div>
          <button type="button" class="btn btn-success" @click="editHero">Submit</button>
        </form>
      </div>
</template>

<script>
export default {
    data () {
        return {
            formData : {
                name : '',
                gender : ''
            }
        }
    },
    methods : {
        loadData() {
            const {id} = this.$route.params
            this.$axios.get(`/heroes/${id}`).then(res => {
                this.formData = res.data
            })
        },
        editHero() {
            const {id} = this.$route.params;
            if (this.formData.name.trim() && this.formData.gender.trim()) {
                this.$axios.put(`/heroes/${id}`,this.formData).then(res => {
                    if (res.status === 200) {
                        alert("编辑成功")
                        this.$router.push({path : '/heroes'})
                    }
                })
            }else {
                alert("英雄名称和性别不能为空!")
            }
        }
    },
    mounted () {
        this.loadData();
    }
}
</script>

<style>

</style>