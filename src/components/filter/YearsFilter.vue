<template>
    <div class="inner-splitter ">
        <div class="inner-left">
            <div class="checkbox-wrapper" v-for="year in availableYears.slice(0, 7)" :key="year">
                <input type="checkbox" v-model="filter.years" :value="year" :id="year" />
                <label :for="year">{{ year }}</label>
            </div>
        </div>

        <div class="inner-right">
            <div class="checkbox-wrapper" v-for="year in availableYears.slice(7)" :key="year">
                <input type="checkbox" v-model="filter.years" :value="year" :id="year" />
                <label :for="year">{{ year }}</label>
            </div>
            <div class="checkbox-wrapper" style="visibility: hidden">
                <input type="checkbox">
                <label for="">invisible</label>
            </div>
        </div>
    </div>
</template>

<script>
  import { filterState } from '@/assets/js/countriesData';

  export default {
    data() {
      return {
        filter: filterState,
        availableYears: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
        ],
      }
    }
  };
</script>

<style scoped>

</style>