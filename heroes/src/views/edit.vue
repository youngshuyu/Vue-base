<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="heroName">英雄名称</label>
        <input type="text" class="form-control" v-model="formData.name" />
      </div>
      <div class="form-group">
        <label for="heroGender">英雄性别</label>
        <input type="text" class="form-control" v-model="formData.gender" />
      </div>
      <button type="button" class="btn btn-success" @click="editHero">修改</button>
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
    loadData() {
      const { id } = this.$route.params; // 通过参数获取id
      if (id) {
        this.$axios
          .get(`/heroes/${id}`)
          .then(res => (this.formData = res.data));
      }
    },
    editHero() {
      if (this.formData.name.trim() && this.formData.gender.trim()) {
        if (confirm("确定要修改吗？")) {
          const { id } = this.$route.params;
          this.$axios
            .put(`/heroes/${id}`,this.formData)
            .then(result => {
              if (result.status === 200) {
                // 添加成功之后 要跳转回列表页
                // 编程式导航
                this.$router.push({ path: "/hero" });
              } else {
                alert("编辑失败");
              }
            });
        }
      } else {
        alert("英雄姓名和性别不能为空！");
      }
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>