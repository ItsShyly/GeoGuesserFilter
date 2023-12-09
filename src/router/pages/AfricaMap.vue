<template>
    <div class="map-container">
        <div id="world-map" class="jvmap-smart"></div>
    </div>
</template>

<script>
  // Importing jQuery and jVectorMap using ES6 import statements
  import $ from 'jquery';
  import 'jvectormap';
  import 'jvectormap-next/jquery-jvectormap.css';
  import '../../lib/jquery-jvectormap-africa-mill.js';

  export default {
    mounted() {
      this.loadScripts().then(() => {
        this.drawMap();
      });
    },
    methods: {
      loadScripts() {
        return new Promise((resolve) => {
          // Load scripts here
          resolve();
        });
      },
      drawMap() {
        $('#world-map').vectorMap({
          map: 'world_mill'
          // Add other options and configurations here
        });
      }
    }

  };
</script>

<style scoped>
    /* Add your component-specific styles here if needed */
</style>
