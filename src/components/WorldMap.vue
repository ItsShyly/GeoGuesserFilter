<template>
    <div class="container-box-floating">
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

        this.map.chartContainer.wheelable = false;
        this.map.seriesContainer.draggable = false;
        this.map.seriesContainer.resizable = false;
        this.map.maxZoomLevel = 1;
        this.map.seriesContainer.events.disableType("doublehit");
        this.map.chartContainer.events.disableType("doublehit");

        const polygonTemplate = this.polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#311475");

        const hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#313cb0");

        const activeState = polygonTemplate.states.create("active");
        activeState.properties.fill = am4core.color("#44B9DE");

        this.polygonSeries.exclude = ["AQ"];
        this.polygonSeries.maxZoomLevel = 1;
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
        width: 90%;
        height: 90%;
        text-align: center;

    }
</style>
