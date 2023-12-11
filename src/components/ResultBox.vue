<template>
<div class="container-box-floating dp-flex-center">

        <h2 class="result-title category-title">Filtered Countries</h2>
        <div class="scroll-box">
            <ul class="list-flex-center">
                <li class="list-style" v-for="country in filteredCountries" :key="country.name">
                    {{ country.name }}
                </li>
            </ul>
        </div>

</div>
</template>

<script>
  import { countriesList, filterState } from '@/assets/js/countriesData'
  import CountryStore from "@/assets/js/countryStore";

  export default {
    props: {
      worldMapRef: Object,
    },
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

          const excludeEurope = this.filter.exclude_europe && country.continent === 'Europe';
          const excludeNA = this.filter.exclude_na && country.continent === 'na';
          const excludeSA = this.filter.exclude_sa && country.continent === 'sa';
          const excludeAsia = this.filter.exclude_asia && country.continent === 'Asia';
          const excludeAfrica = this.filter.exclude_africa && country.continent === 'Africa';
          const excludeAustralia = this.filter.exclude_australia && country.continent === 'Australia';
          const excludeAntarctica = this.filter.exclude_antarctica && country.continent === 'Antarctica';

          const continentMatch = !(
            excludeEurope ||
            excludeNA ||
            excludeSA ||
            excludeAsia ||
            excludeAfrica ||
            excludeAustralia ||
            excludeAntarctica
          );

          const yearMatch = !this.filter.years.length || this.filter.years.every(year => country.years.includes(year));
          const roadmarksMatch = !this.filter.roadmarks.length || this.filter.roadmarks.every(r => country.roadmarks.includes(r));

          return directionMatch && continentMatch && yearMatch && roadmarksMatch;
        });
      },
    },


    watch: {
      filteredCountries(newCountries, oldCountries) {
        // Remove old countries from the CountryStore
        oldCountries.forEach((country) => {
          CountryStore.removeCountry(country.name);
        });

        // Add new countries to the CountryStore
        newCountries.forEach((country) => {
          CountryStore.addCountry(country.name);
        });
      },
    },
  };
</script>

<style>
    /* Your styles go here */
</style>
