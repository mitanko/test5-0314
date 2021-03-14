<template>
  <div>
    <ul>
      <li>
        <router-link :to=" { name: 'Home' , params: { id: 3 } }"> Home ❘ About  
        </router-link>
      </li>
      <li2>
       3
      </li2>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0px 30px 50px;
}
li {
  list-style: none;
}

</style>