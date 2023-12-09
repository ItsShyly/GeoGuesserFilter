<template>


    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.europe" id="europe" @change="handleCheckboxChangeEvent('europe')" />
        <label for="europe">Europe</label>
    </div>
    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.asia" id="asia" @change="handleCheckboxChangeEvent('asia')"  />
        <label for="asia">Asia</label>
    </div>
    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.na" id="na" @change="handleCheckboxChangeEvent('na')"  />
        <label for="na">North-America</label>
    </div>
    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.sa" id="sa" @change="handleCheckboxChangeEvent('sa')"  />
        <label for="sa">South-America</label>
    </div>
    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.africa" id="africa" @change="handleCheckboxChangeEvent('africa')" />
        <label for="africa">Africa</label>
    </div>
    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.australia" id="australia" @change="handleCheckboxChangeEvent('australia')" />
        <label for="australia">Australia</label>
    </div>
    <div class="checkbox-wrapper">
        <input type="checkbox" v-model="filter.antarctica" id="antarctica" @change="handleCheckboxChangeEvent('antarctica')" />
        <label for="antarctica">Antarctica</label>
    </div>

</template>

<script>

  import { handleCheckboxChange } from '../../assets/js/handleCheckbox.js'
  import { filterState } from '../../assets/js/countriesData.js';

  export default {
    data() {
      return {
        filter: filterState,
      };
    },
    methods: {
      handleCheckboxChangeEvent(event) {
        const checkboxValue = event.target.value;
        handleCheckboxChange.call(this, checkboxValue);
      },
    },
  };
</script>

<style scoped>

</style>