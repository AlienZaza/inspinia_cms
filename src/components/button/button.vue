<template>
  <div style="width: 100%;overflow: hidden">
    <div class="pull-right">
      <button class="btn btn-white" @click="addUser()">Create</button>
      <button class="btn btn-white" @click="deleteUser()">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'button',
  data() {
    return {

    }
  },
  props: ['pageOptions', 'data'],
  methods: {
    
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
