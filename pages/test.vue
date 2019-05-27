<template>
  <div>
    <div style="fontSize:50px;" v-for="item in $store.state.app.list" :Key="item">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted(){
  },
  async asyncData(context) {
    let { code, data } = await context.$axios.post(
      "https://www.easy-mock.com/mock/5caefeabdc560b32b35a74dc/reactLearn/textList"
    );
    if (code === 0) {
      return {
        list: data
      };
    }
  }
};
</script>
<style lang="scss">

</style>



