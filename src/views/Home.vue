<template>
  <div class="main-container">
    <p>Home</p>
  </div>
  <img src="../assets/configuracao.png" alt="Icone Configuracao">

  <div id="barra_branca">
    <img src="../assets/camera.png" alt="Icone Camera">
  </div>

  <p>Tire uma foto para que possamos identificar que tipo de praga que o aflige!</p>
  <button on-click="#" id="b_azul">Tirar Foto</button>
  <button on-click="#" id="b_verde">Selecionar da galeria</button>
  <img src="../assets/lua.png" alt="Icone Lua">

</template>

<script>
export default {
  name: 'Home'
}

</script>

<style scoped>
#barra_branca {
  
  width: 100%;
  height: 581px;
  top: 150px;
  display: block;

  background: #FFFFFF;
  border-radius: 48px 48px 0px 0px;
 }

 img {
  width: 30%;
  height: 30%;
  margin: 0 auto;
  position: relative;
  box-shadow: 1px 1px 10px;
	}

  #b_azul {
    background-color: #2C35FE;
  }

  #b_verde {
    background-color: #087E05;
  }

</style>
