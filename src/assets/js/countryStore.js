// CountryStore.js
export default {
  selectedCountries: [],
  mapInstance: null, // Add a reference to the map instance

  setMapInstance(map) {
    this.mapInstance = map;
  },

  clearCountries() {
    this.selectedCountries = [];
    console.log("Countries cleared");

    // Trigger the map update directly
    this.updateMap();
  },

  addCountry(country) {
    if (!this.selectedCountries.includes(country)) {
      this.selectedCountries.push(country);
      console.log("Country added: ", country);
      console.log("Countries: ", this.selectedCountries);

      // Trigger the map update directly
      this.updateMap();
    }
  },

  removeCountry(country) {
    this.selectedCountries = this.selectedCountries.filter(c => c !== country);
    console.log("Country removed: ", country);

    // Trigger the map update directly
    this.updateMap();
  },



  updateMap() {
    // Check if the map instance is available
    if (this.mapInstance) {
      // Call the selectCountry method of the map instance
      this.mapInstance.selectCountry(this.selectedCountries);
    }
  }
};
