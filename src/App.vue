<script setup>
  import ContinentFilter from './components/filter/ContinentFilter.vue';
  import DirectionFilter from './components/filter/DirectionFilter.vue';
  import RoadMarksFilter from './components/filter/RoadMarksFilter.vue';
  import YearsFilter from './components/filter/YearsFilter.vue';
  import WorldMap from './components/WorldMap.vue';
  import ResultBox from './components/ResultBox.vue';
</script>

<script>
  import { filterState } from '@/assets/js/countriesData';

  export default {
    data() {
      return {
        filter: filterState, // Use spread operator to create a copy of filterState
        isRotated: false,
      };
    },
    methods: {
      resetButton() {
        // Reset all properties of the filter object
        Object.keys(this.filter).forEach(key => {
          if (Array.isArray(this.filter[key])) {
            this.filter[key] = [];
          } else {
            this.filter[key] = false;
          }
        });

        // Rotation logic
        this.isRotated = true;
        setTimeout(() => {
          this.isRotated = false;
        }, 1200); // 1000 milliseconds = 1 second
      },
    },
  };
</script>

<template>
    <div class="floating-reset-btn" :class="{ 'rotate': isRotated }" @click="resetButton">
        <button><span class="reset-btn-text">&#x21bb;</span></button>
    </div>
    <div class="container-fh container_wrapper">
        <div class="container-fh container_left">
            <div class="container-fh container_split-vertical-50 r">
                <YearsFilter/>
            </div>
            <div class="container-fh container_split-vertical-50 rp">
                <RoadMarksFilter/>
            </div>
        </div>
        <div class="container-fh container_mid">
            <div class="container-fw container_split-horizontal-40 b dp-flex-center">
                <WorldMap/>
            </div>
            <div class="container-fw container_split-horizontal-60 bp dp-flex-center">
                <ResultBox/>
            </div>
        </div>
        <div class="container-fh container_right">
            <div class="container-fw container_split-horizontal-70 y">
                <ContinentFilter/>
            </div>
            <div class="container-fw container_split-horizontal-30 yp">
                <DirectionFilter/>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>
