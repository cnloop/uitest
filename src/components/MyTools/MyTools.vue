<template>
  <section class="test">
    <tree></tree>
    <base-input :class="hello" fontSize="15px" :value="value" label="密码" placeholder="请填写密码" @input="handleInput" @focus="handleFocus"></base-input>
    <base-btn @click="getWord"></base-btn>
    <toggle-div :show.sync="valueChild"></toggle-div>
    <button @click="toggleShow">显示/隐藏</button>
  </section>
</template>
<script>
import Tree from "@/components/Common/Tree";
import BaseInput from "@/components/Common/BaseInput";
import BaseBtn from "@/components/Common/BaseBtn";
import ToggleDiv from "./ToggleDiv";

export default {
  data() {
    return {
      value: "哈哈",
      hello: "jjj",
      valueChild: true
    };
  },
  methods: {
    handleInput(value) {
      console.log(value);
    },
    handleFocus(event) {
      console.log("focus...");
    },
    getWord() {
      console.log("welcome");
    },
    toggleShow() {
      this.valueChild = !this.valueChild;
    }
  },
  components: {
    Tree,
    BaseInput,
    BaseBtn,
    ToggleDiv
  }
};
</script>
<style scoped>
</style>

