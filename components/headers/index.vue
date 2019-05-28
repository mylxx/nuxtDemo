<template>
  <div>
    <p style="textAlign:center;">test头</p>
    <Row>
      <i-col span="12">
        <test1/>
      </i-col>
      <i-col span="12">
        <test2/>
      </i-col>
    </Row>
  </div>
</template>
<script>
import test1 from "./test_1";
import test2 from "./test_2";
export default {
  components: {
    test1,
    test2
  }
};
</script>