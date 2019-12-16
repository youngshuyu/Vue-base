<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="heroName">英雄名称</label>
        <input type="text" class="form-control" v-model="formData.name" />
      </div>
      <div class="form-group">
        <label for="heroGender">英雄性别</label>
        <input type="text" class="form-control" v-model="formData.gender" />
      </div>
      <button type="button" class="btn btn-success" @click="addHero">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    addHero() {
      if (this.formData.name.trim() && this.formData.gender.trim()) {
        this.$axios.post("/heroes", this.formData).then(result => {
          if (result.status === 201) {
            // 添加成功之后 要跳转回列表页
            // 编程式导航
            this.$router.push({ path: "/hero" });
          } else {
            alert("添加失败");
          }
        })
      }else {
          alert("英雄姓名和性别不能为空！")
      }
    }
  }
};
</script>

<style>
</style>