<script setup>
//filter
import ContinentFilter from './components/filter/ContinentFilter.vue'
import DirectionFilter from './components/filter/DirectionFilter.vue'
import RoadMarksFilter from './components/filter/RoadMarksFilter.vue'
import YearsFilter from './components/filter/YearsFilter.vue'

//results
import ResultBox from './components/ResultBox.vue'

</script>

<template>
    <RouterView/>
      <div class="container-wrapper">
          <div class="container-left">
              <div title="Which driving direction?" class="filter-box">
                  <DirectionFilter/>
              </div>
              <div title="Which continent?" class="filter-box">
                  <ContinentFilter/>
              </div>
              <div title="What Roadmarks?" class="filter-box">
                  <RoadMarksFilter/>
              </div>
              <div title="Which Google Years?" class="filter-box">
                  <YearsFilter/>
              </div>
          </div>
          <div class="container-right">
              <div class="result-box">
                  <ResultBox/>
              </div>
          </div>
      </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
