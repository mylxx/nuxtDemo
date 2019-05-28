<template>
  <div>
    <!-- <div style="fontSize:50px;">{{msg1}}</div> -->
    <div style="fontSize:50px;">{{msg2}}</div>
  </div>
</template>

<script>
export default {
  layout: 'testLayout',
  data() {
    return {
      list: []
    };
  },
  mounted() {},
  //独立设置head信息
  // head() {
  //   return {
  //     title: this.title,
  //     meta: [{ hid: "description", name: "news", content: "This is news page" }]
  //   };
  // }
  // async asyncData(context) {
  //     let {code, msg} = await context.$axios.get("/home/bind");
  //       return {
  //         msg1: msg
  //       }
  // }
  async asyncData(context) {
    let data = {
      loginCode: "123",
      password: "123"
    };
    let { code, msg } = await context.$axios.post("/home/login", data);
      return {
        msg2: msg
      };
  }
};
</script>
<style lang="scss">

</style>



