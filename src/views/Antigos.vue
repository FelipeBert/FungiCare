<template>
    <p>Fungos Antigos Detectados</p>

    <div id="fungo">
        <img src="../assets/trigo.png" alt="Imagem de um Fungo">
        <p id="atencao">Nesse caso teria que puxar do banco tanto a imagem da plantação quanto o tipo do fungo pra inserir</p>
        <p>Tipo: Fungo x</p>
        <p>Plantação: Arroz</p>
        <router-link to="/fungo_detectado">Informações</router-link>
    </div>
    
</template>

<script>
export default {
    name: 'Antigos'
}

</script>

<style scoped>

#atencao {
    font-size: 50px;
}

</style>