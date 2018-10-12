<template>
  <section class="tree">
    <ul ref="root">root
      <li>node1-1
        <ul>
          <li>node1-1-1</li>
          <li>node1-1-2</li>
        </ul>
      </li>
      <li>node1-2
        <ul>
          <li>node1-2-1</li>
          <li>node1-2-2</li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  mounted() {
    this.loadTree();
  },
  methods: {
    loadTree() {
      let root = this.$refs.root;
      this.getHeight(root);
      this.setHeight(root);
      root.onclick = function() {};
    },
    getHeight(rootDom) {
      rootDom.sumHeight = rootDom.offsetHeight;
      for (var i = 0; i < rootDom.children.length; i++) {}

      {
        rootDom.sumHeight = rootDom.offsetHeight;
      }
    },
    cycChildNode(rootDom) {
      if (rootDom.children.length) return;
      for (var i = 0; i < rootDom.children.length; i++) {
        rootDom.children[i].sumHeight = rootDom.children[i].offsetHeight;
        this.getHeight(rootDom.children[i]);
      }
    },
    setHeight(rootDom) {
      if (rootDom.children.length > 0) {
        for (var i = 0; i < rootDom.children.length; i++) {
          // console.dir(rootDom.children[i].sumHeight);
          this.getHeight(rootDom.children[i]);
        }
      }
    }
  }
  //   data() {
  //     return {
  //       jsonArr: [
  //         {
  //           text: "Node1",
  //           children: [
  //             { text: "Child node 1", children: [{ text: "Child node 1-2" }] },
  //             { text: "Child node 2", children: [{ text: "Child node 2-2" }] }
  //           ]
  //         },
  //         {
  //           text: "Node2",
  //           children: [{ text: "Child node 1" }, { text: "Child node 2" }]
  //         }
  //       ]
  //     };
  //   },
  //   methods: {
  //     cycJsonArr(el, jsonArr) {
  //       for (let i = 0; i < jsonArr.length; i++) {
  //         document.createElement("span");
  //         console.log(jsonArr[i].text);
  //         if (jsonArr[i].children) {
  //           this.cycJsonArr(jsonArr[i].children);
  //         }
  //       }
  //     }
  //   },
  //   directives: {
  //     loadTree: {
  //       inserted: function(el, binding, vnode) {
  //         vnode.context.cycJsonArr(vnode.context.jsonArr);
  //       }
  //     }
  //   }
};
</script>
<style scoped>
ul {
  /* height: 0px; */
  /* overflow:hidden; */
}
li {
  /* height: 0px; */
  /* overflow: hidden; */
}
</style>

