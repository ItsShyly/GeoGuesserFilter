<template>
<div class="container-box-full ">
    <p class="category-title padding-40">Google Years</p>
    <div class="list-flex-center height-100">
        <div class="checkbox-wrapper checkbox-list" v-for="year in availableYears" :key="year">
            <input  type="checkbox" v-model="filter.years" :value="year" :id="year" />
            <label class="btn-list justify-center" :for="year">{{ year }}</label>
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