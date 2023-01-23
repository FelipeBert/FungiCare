<template>
  <div class="main-container">
    <p>Fungos Cadastrados</p>
  </div>
  <div id="fungo">
    <img src="../assets/trigo.png" alt="Imagem de um Fungo">
    <p>Tipo: Fungo x</p>
    <p>Plantação: Arroz</p>
    <button on-click="" id="botao_info">Informações</button>
  </div>
  <p id="atencao">Nesse caso teria que puxar do banco tanto a imagem da plantação quanto o tipo do fungo pra inserir</p>
</template>

<script>
export default {
  name: 'Enciclopedia'
}

</script>

<style scoped>

#botao_info {
  background: #3D45FF;
  border-radius: 20px;
}

#atencao {
    font-size: 50px;
}

</style>
