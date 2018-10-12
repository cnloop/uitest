<template>
    <div v-show="$attrs.show">
        默认值是{{$attrs.show}}
        <button @click.stop="childToggle">隐藏</button>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
    childToggle() {
      console.log(this.$listeners);
      this.$emit("update:show", false);
    }
  }
};
</script>

