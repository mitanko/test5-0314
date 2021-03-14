<template>
  <div>
    <ul>
      <li>
        <router-link :to=" { name: 'Home' , params: { id: 1 } }"> Home ❘ About
        </router-link>
      </li>
      <li>
       1
      </li>
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
