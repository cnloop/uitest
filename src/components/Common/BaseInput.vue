<template>
    <div>
        <!-- <label>{{label}}</label> -->
        <!-- <input :value="value" :placeholder="placeholder" @focus="$emit('focus',$event)" @input="$emit('input',$event.targert.value)"> -->
        <label>
            {{label}}
            <input type="text" v-bind="$attrs"  v-on="listeners">
        </label>
    </div>

</template>
<script>
export default {
  props: ["label"],
  created() {
    console.log(this.$attrs);
    console.log(this.$listeners);
  },
  computed: {
    listeners() {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        vm.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function(event) {
            vm.$emit("input", event.target.value);
          }
        }
      );
    }
  }
};
</script>

