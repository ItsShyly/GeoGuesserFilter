<!-- Direction.vue -->
<template>
<div class="container-box-full border-top">
    <p class="category-title padding-20">Driving Direction</p>
    <div class="container-box-full container-split">
        <div class="inner-left">
            <div class="checkbox-wrapper checkbox-box">
                <input type="checkbox" v-model="filter.left" id="left" @change="handleCheckboxChange('left')" />
                <label for="left">Left</label>
            </div>
        </div>
        <div class="inner-right dot-splitter">
            <div class="checkbox-wrapper checkbox-box">
                <input type="checkbox" v-model="filter.right" id="right" @change="handleCheckboxChange('right')" />
                <label for="right">Right</label>
            </div>
        </div>
    </div>
</div>
</template>


<script>

  import { filterState } from '@/assets/js/countriesData'

  export default {
    data() {
      return {
        filter: filterState,
      };
    },
    methods: {
      handleCheckboxChange(checkbox) {
        // Handle direction checkboxes
        if (checkbox === 'left' && this.filter.right) {
          this.filter.right = false;
        } else if (checkbox === 'right' && this.filter.left) {
          this.filter.left = false;
        }


      }
    },
  };
</script>


<style></style>
