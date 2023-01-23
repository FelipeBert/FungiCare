<template>
   <footer>
    <div id="foot">
      <router-link to="/">Home</router-link>
      <router-link to="/enciclopedia">Enciclopedia</router-link>
      <router-link to="/configuracao">Configuração</router-link>
      <router-link to="/antigo">Antigos</router-link>
    </div>
  </footer>
</template>

<script>
export default{
  name: 'Footbar'
}

</script>

<style>

#foot{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  width: 100%;
}

#foot a{
  text-decoration: none;
}

#foot a:hover{
  color: #0ec50b;
}
 

</style>