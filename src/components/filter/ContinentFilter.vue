<template>

<div class="container-box-full">
    <p class="category-title padding-40 ">Continents</p>
    <div class="list-flex-center height-100">
        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_europe, 'selected': filter.europe}">
            <input type="checkbox" class="selected-continent"  v-model="filter.europe" id="europe" @change="handleCheckboxChangeEvent('europe') " >
            <label class="btn_continent" for="europe"  >Europe</label>
            <input type="checkbox"  class="selected-exclude"   v-model="filter.exclude_europe" id="exclude_europe" @change="handleCheckboxChangeEvent('exclude_europe')"/>
            <label class="btn_exclude"  for="exclude_europe" :class="{'selected bg-0': filter.europe }"></label>
        </div>
        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_asia, 'selected': filter.asia}">
            <input type="checkbox"  class="selected-continent" v-model="filter.asia" id="asia" @change="handleCheckboxChangeEvent('asia')" />
            <label class="btn_continent" for="asia">Asia</label>
            <input type="checkbox" class="selected-exclude" v-model="filter.exclude_asia" id="exclude_asia" @change="handleCheckboxChangeEvent('exclude_asia')" />
            <label class="btn_exclude" for="exclude_asia" :class="{'selected bg-0': filter.asia }"></label>
        </div>

        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_na, 'selected': filter.na}">
            <input type="checkbox"  class="selected-continent" v-model="filter.na" id="na" @change="handleCheckboxChangeEvent('na')" />
            <label class="btn_continent" for="na">North-America</label>
            <input type="checkbox" class="selected-exclude" v-model="filter.exclude_na" id="exclude_na" @change="handleCheckboxChangeEvent('exclude_na')" />
            <label class="btn_exclude" for="exclude_na" :class="{'selected bg-0': filter.na}"></label>
        </div>
        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_sa, 'selected': filter.sa}">
            <input type="checkbox"  class="selected-continent" v-model="filter.sa" id="sa" @change="handleCheckboxChangeEvent('sa')" />
            <label class="btn_continent" for="sa">South-America</label>
            <input type="checkbox" class="selected-exclude" v-model="filter.exclude_sa" id="exclude_sa" @change="handleCheckboxChangeEvent('exclude_sa')" />
            <label class="btn_exclude" for="exclude_sa" :class="{'selected bg-0': filter.sa}"></label>
        </div>

        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_africa, 'selected': filter.africa}">
            <input type="checkbox"  class="selected-continent" v-model="filter.africa" id="africa" @change="handleCheckboxChangeEvent('africa')" />
            <label class="btn_continent" for="africa">Africa</label>
            <input type="checkbox" class="selected-exclude" v-model="filter.exclude_africa" id="exclude_africa" @change="handleCheckboxChangeEvent('exclude_africa')" />
            <label class="btn_exclude" for="exclude_africa" :class="{'selected bg-0': filter.africa}"></label>
        </div>

        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_australia, 'selected': filter.australia}">
            <input type="checkbox"  class="selected-continent" v-model="filter.australia" id="australia" @change="handleCheckboxChangeEvent('australia')" />
            <label class="btn_continent" for="australia">Australia</label>
            <input type="checkbox" class="selected-exclude" v-model="filter.exclude_australia" id="exclude_australia" @change="handleCheckboxChangeEvent('exclude_australia')" />
            <label class="btn_exclude" for="exclude_australia" :class="{'selected bg-0': filter.australia}"></label>
        </div>

        <div class="checkbox-list checkbox-continent-wrapper" :class="{ 'excluded': filter.exclude_antarctica, 'selected': filter.antarctica}">
            <input type="checkbox"  class="selected-continent" v-model="filter.antarctica" id="antarctica" @change="handleCheckboxChangeEvent('antarctica')" />
            <label class="btn_continent" for="antarctica">Antarctica</label>
            <input type="checkbox" class="selected-exclude" v-model="filter.exclude_antarctica" id="exclude_antarctica" @change="handleCheckboxChangeEvent('exclude_antarctica')" />
            <label class="btn_exclude" for="exclude_antarctica" :class="{'selected bg-0': filter.antarctica}"></label>
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
      };
    },
    methods: {
      handleCheckboxChangeEvent(checkbox) {
        if (['europe', 'asia', 'na', 'sa', 'africa', 'australia', 'antarctica'].includes(checkbox)) {
          // Uncheck all continents except the current one
          Object.keys(this.filter).forEach((continent) => {
            if (continent !== checkbox && !['years', 'roadmarks', 'left', 'right'].includes(continent)) {
              this.filter[continent] = false;
            }
          });

          // Check all exclude checkboxes except for the current continent's exclude
          Object.keys(this.filter).forEach((continent) => {
            if (continent.startsWith('exclude_') && continent !== `exclude_${checkbox}`) {
              this.filter[continent] = true;
            }
          });
        }
        // Handle exclude continent checkboxes
        else if (['exclude_europe', 'exclude_asia', 'exclude_na', 'exclude_sa', 'exclude_africa', 'exclude_australia', 'exclude_antarctica'].includes(checkbox)) {
          // Uncheck the corresponding continent checkbox
          const continent = checkbox.replace('exclude_', '');
          this.filter[continent] = false;
        }
        console.log(filterState);
      },
    },
  };
</script>

<style scoped>

</style>