<template>
    <div class="result-box">
        <h2 class="result-title">Filtered Countries</h2>
        <div class="scroll-box">
            <ul>
                <li v-for="country in filteredCountries" :key="country.name">
                    {{ country.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {countriesList, filterState  } from '../assets/js/countriesData.js'

export default {
  data() {
    return {
      filter: filterState,
      countries: countriesList,
    };
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) => {
        const directionMatch = (!this.filter.left || country.direction === 'Left') && (!this.filter.right || country.direction === 'Right');
        const continentMatch =
          (!this.filter.europe || country.continent === 'Europe') &&
          (!this.filter.africa || country.continent === 'Africa') &&
          (!this.filter.asia || country.continent === 'Asia') &&
          (!this.filter.australia || country.continent === 'Australia') &&
          (!this.filter.na || country.continent === 'na') &&
          (!this.filter.sa || country.continent === 'sa') &&
          (!this.filter.antarctica || country.continent === 'Antarctica');

        const yearMatch = !this.filter.years.length || this.filter.years.every(year => country.years.includes(year));
        const roadmarksMatch = !this.filter.roadmarks.length || this.filter.roadmarks.every(r => country.roadmarks.includes(r));

        return directionMatch && continentMatch && yearMatch && roadmarksMatch;
      });
    },



  },
};

</script>


<style>

</style>
