<!-- Direction.vue -->
<template>
    <div class="inner-splitter ">
        <div class="inner-left">
            <div class="checkbox-wrapper-extra extra-left">
                <input type="checkbox" v-model="filter.left" id="left" @change="handleCheckboxChangeEvent('left')" />
                <label for="left">Left</label>
            </div>
        </div>
        <div class="inner-right dot-splitter">
            <div class="checkbox-wrapper-extra extra-right">
                <input type="checkbox" v-model="filter.right" id="right" @change="handleCheckboxChangeEvent('right')" />
                <label for="right">Right</label>
            </div>
        </div>
    </div>
</template>


<script>
  import { handleCheckboxChange } from '../../assets/js/handleCheckbox'
  import { filterState } from '../../assets/js/countriesData.js'

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


<style></style>
