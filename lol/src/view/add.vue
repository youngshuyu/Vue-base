<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="text" class="form-control" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input type="text" class="form-control" v-model="formData.gender">
          </div>
          <button type="button" class="btn btn-success" @click="addHero">Submit</button>
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
        addHero() {
            if (this.formData.name.trim() && this.formData.gender.trim()) {
                this.$axios.post('/heroes',this.formData).then(res => {
                    if (res.status === 201) {
                        alert("添加英雄成功！");
                        this.$router.go(-1);
                    }else {
                        alert("添加失败")
                    }
                })
            }else {
                alert("英雄名称和性别不能为空！")
            }
        }
    }
}
</script>

<style>

</style>