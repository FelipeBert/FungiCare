<template>

    <p>Configuração</p>
    <div id="quadrado_menor">
        <ul>
            <li>Linguagem</li>
            <li>Idioma <img src="../assets/seta.png" alt="Setinha"></li>
            <li>Segundo Idoma <img src="../assets/seta.png" alt="Setinha"></li>
        </ul>
    </div>
    <div id="quadrado_maior">
        <ul>
            <li>Configurações Adicionais</li>
            <li>Modo Escuro</li>
            <li>Notificações <img src="../assets/seta.png" alt="Setinha"></li>
            <li>Tamanho do Texto <img src="../assets/seta.png" alt="Setinha"></li>
            <li>Politicas de Privacidade <img src="../assets/seta.png" alt="Setinha"></li>
            <li>Termos e Condições <img src="../assets/seta.png" alt="Setinha"></li>
        </ul>
    </div>

</template>

<script>

export default{
    name: 'configuracao'
}

</script>

<style scoped>

li {
    padding: 10px;
    background-color: white;
}


</style>