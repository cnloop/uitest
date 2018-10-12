<template>
    <div>
        <button v-on="listeners">点击</button>
    </div>
</template>
<script>
export default {
  created() {
    console.log(this.$listeners);
  },
  computed: {
    listeners: function() {
      return {};
    }
  }
};
</script>

