<template>
    <div>
        <div id="main-app"></div>
    </div>
</template>

<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4maps from "@amcharts/amcharts4/maps";
  import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
  import CountryStore from "@/assets/js/countryStore";

  export default {
    name: "WorldMap",
    data() {
      return {
        map: null,
        polygonSeries: null,
      };
    },
    computed: {
      listOfCountries() {
        return CountryStore.selectedCountries;
      },
    },
    mounted() {
      this.initializeMap();
      CountryStore.setMapInstance(this);
    },
    methods: {
      initializeMap() {
        this.map = am4core.create("main-app", am4maps.MapChart);
        this.map.geodata = am4geodata_worldLow;
        this.map.projection = new am4maps.projections.Mercator();
        this.polygonSeries = this.map.series.push(new am4maps.MapPolygonSeries());
        this.polygonSeries.useGeodata = true;

        const polygonTemplate = this.polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#4f7e35");

        const hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#3e83ea");

        const activeState = polygonTemplate.states.create("active");
        activeState.properties.fill = am4core.color("#861414");

        this.polygonSeries.exclude = ["AQ"];

        polygonTemplate.events.on("hit", (ev) => {
          const data = ev.target.dataItem.dataContext;
          this.selectedCountry = data.name;
          CountryStore.addCountry(data.name);
        });
      },
      selectCountry(specificCountry) {
        if (!this.polygonSeries) {
          console.error("Polygon series is not initialized.");
          return;
        }

        this.listOfCountries = [specificCountry];

        this.polygonSeries.mapPolygons.each((polygon) => {
          const countryName = polygon.dataItem.dataContext.name;
          polygon.isActive = CountryStore.selectedCountries.includes(countryName);
        });
      },
    },
  };

  export function selectCountry(specificCountry) {
    if (!this.polygonSeries) {
      console.error("Polygon series is not initialized.");
      return;
    }

    this.listOfCountries = [specificCountry];

    this.polygonSeries.mapPolygons.each((polygon) => {
      const countryName = polygon.dataItem.dataContext.name;
      polygon.isActive = CountryStore.selectedCountries.includes(countryName);
    });
  }
</script>


<style>
    #main-app {
        margin: auto;
        width: 75%;
        height: 400px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.07);
    }
</style>
