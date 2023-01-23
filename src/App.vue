<template>
  <router-view/>
  <Footbar />
</template>

<script>
import Footbar from './components/Footbar.vue';

export default {
  components: {
    Footbar
  }
}

</script>

<style>
* {
  font-family: 'Poppins';
  font-style: normal;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #087E05;
}

 .main-container {
  margin: 50px;
  min-height: 250px;
 }

</style>
