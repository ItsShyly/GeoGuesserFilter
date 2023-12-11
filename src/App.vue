<script setup>
  // Import your components
  import ContinentFilter from './components/filter/ContinentFilter.vue'
  import DirectionFilter from './components/filter/DirectionFilter.vue'
  import RoadMarksFilter from './components/filter/RoadMarksFilter.vue'
  import YearsFilter from './components/filter/YearsFilter.vue'
  import WorldMap from './components/WorldMap.vue'
  import ResultBox from './components/ResultBox.vue'


</script>

<template>
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
