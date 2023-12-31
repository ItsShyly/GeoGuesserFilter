<template>
<div class="container-box-full border-left">
    <p class="category-title padding-40">Roadmarks</p>
    <div class=" height-100  scroll-box-100">
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption1" value="S-Yellow + M-White">
            <label for="roadOption1">
                <div class="stripe yellow"></div>
                <div class="stripe white"></div>
                <div class="stripe yellow"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption2" value="S-Yellow + M-Yellow">
            <label for="roadOption2">
                <div class="stripe yellow"></div>
                <div class="stripe yellow"></div>
                <div class="stripe yellow"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption3" value="S-Yellow + M-White & Yellow">
            <label for="roadOption3">
                <div class="stripe yellow"></div>
                <div class="stripe_split ">
                    <div class="stripe yellow"></div>
                    <div class="stripe white"></div>
                </div>
                <div class="stripe yellow"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption4" value="S-White + M-White">
            <label for="roadOption4">
                <div class="stripe white"></div>
                <div class="stripe white"></div>
                <div class="stripe white"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption5" value="S-White + M-Yellow">
            <label for="roadOption5">
                <div class="stripe white"></div>
                <div class="stripe yellow"></div>
                <div class="stripe white"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption6" value="S-White + M-White & Yellow">
            <label for="roadOption6">
                <div class="stripe white"></div>
                <div class="stripe_split ">
                    <div class="stripe yellow"></div>
                    <div class="stripe white"></div>
                </div>
                <div class="stripe white"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption7" value="S-White + M-White & Green">
            <label for="roadOption7">
                <div class="stripe white"></div>
                <div class="stripe_split ">
                    <div class="stripe white"></div>
                    <div class="stripe green"></div>
                </div>
                <div class="stripe white"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption8" value="S-Red + M-White">
            <label for="roadOption8">
                <div class="stripe red"></div>
                <div class="stripe white"></div>
                <div class="stripe red"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption9" value="S-Red + M-Yellow">
            <label for="roadOption9">
                <div class="stripe red"></div>
                <div class="stripe yellow"></div>
                <div class="stripe red"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption10" value="Orange and Blue">
            <label for="roadOption10">
                <div class="stripe orange"></div>
                <p class="and">&</p>
                <div class="stripe blue"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption11" value="White and Blue">
            <label for="roadOption11">
                <div class="stripe white"></div>
                <p class="and">&</p>
                <div class="stripe blue"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption12" value="Red and White">
            <label for="roadOption12">
                <div class="stripe red"></div>
                <p class="and">&</p>
                <div class="stripe white"></div>
            </label>
        </div>
        <div class="checkbox-wrapper checkbox-full">
            <input type="checkbox" v-model="filter.roadmarks" id="roadOption13" value="Blue">
            <label for="roadOption13">
                <div class="stripe blue"></div>
            </label>
        </div>
    </div>
</div>


</template>

<script>

  import { filterState } from '@/assets/js/countriesData';

  export default {
    data () {
      return {
        filter: filterState,
      };
    },
  };
</script>

<style scoped>

</style>