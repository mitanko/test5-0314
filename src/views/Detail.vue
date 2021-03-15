<template>
  <div>
   <router-link :to=" { name: 'Home' , params: { id: 1 } }"> Home ❘ About
  </router-link>
  <div>
    {{id}}
  </div>
  </div>
</template>

<style scoped>
ul {
  padding: 0px 30px 50px;
}

</style>

<script>
export default {
  props: ["id"]
};
</script>