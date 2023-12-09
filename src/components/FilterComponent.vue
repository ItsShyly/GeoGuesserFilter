<template>
    <div class="container-wrapper">
        <div class="container-left">
            <div title="Which driving direction?" class="filter-box">
                <div class="inner-splitter ">
                    <div class="inner-left">
                        <div class="checkbox-wrapper-extra extra-left">
                            <input type="checkbox" v-model="filter.left" id="left" @change="handleCheckboxChange('left')" />
                            <label for="left">Left</label>
                        </div>
                    </div>
                    <div class="inner-right dot-splitter">
                        <div class="checkbox-wrapper-extra extra-right">
                            <input type="checkbox" v-model="filter.right" id="right" @change="handleCheckboxChange('right')" />
                            <label for="right">Right</label>
                        </div>
                    </div>
                </div>
            </div >
            <div title="Which continent?" class="filter-box">

                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.europe" id="europe" @change="handleCheckboxChange('europe')" />
                    <label for="europe">Europe</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.asia" id="asia" @change="handleCheckboxChange('asia')"  />
                    <label for="asia">Asia</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.na" id="na" @change="handleCheckboxChange('na')"  />
                    <label for="na">North-America</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.sa" id="sa" @change="handleCheckboxChange('sa')"  />
                    <label for="sa">South-America</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.africa" id="africa" @change="handleCheckboxChange('africa')" />
                    <label for="africa">Africa</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.australia" id="australia" @change="handleCheckboxChange('australia')" />
                    <label for="australia">Australia</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" v-model="filter.antarctica" id="antarctica" @change="handleCheckboxChange('antarctica')" />
                    <label for="antarctica">Antarctica</label>
                </div>
            </div>
            <div title="What Roadmarks?" class="filter-box">
                <div id="popover" popover>
                    <div class="grid_wrapper">
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" id="roadOption1" value="S-Yellow + M-White">
                            <label for="roadOption1">
                                <div class="stripe yellow"></div>
                                <div class="stripe mid white"></div>
                                <div class="stripe yellow"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption2" value="S-Yellow + M-Yellow">
                            <label for="roadOption2">
                                <div class="stripe yellow"></div>
                                <div class="stripe yellow"></div>
                                <div class="stripe yellow"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption3" value="S-Yellow + M-White & Yellow">
                            <label for="roadOption3">
                                <div class="stripe yellow"></div>
                                <div class="stripe half">
                                    <div class="stripe mid yellow"></div>
                                    <div class="stripe mid white"></div>
                                </div>
                                <div class="stripe yellow"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption4" value="S-White + M-White">
                            <label for="roadOption4">
                                <div class="stripe white"></div>
                                <div class="stripe mid white"></div>
                                <div class="stripe white"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption5" value="S-White + M-Yellow">
                            <label for="roadOption5">
                                <div class="stripe white"></div>
                                <div class="stripe mid yellow"></div>
                                <div class="stripe white"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption6" value="S-White + M-White & Yellow">
                            <label for="roadOption6">
                                <div class="stripe white"></div>
                                <div class="stripe half">
                                    <div class="stripe mid yellow"></div>
                                    <div class="stripe mid white"></div>
                                </div>
                                <div class="stripe white"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption7" value="S-White + M-White & Green">
                            <label for="roadOption7">
                                <div class="stripe white"></div>
                                <div class="stripe half">
                                    <div class="stripe mid white"></div>
                                    <div class="stripe mid green"></div>
                                </div>
                                <div class="stripe white"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption9" value="S-Red + M-Yellow">
                            <label for="roadOption9">
                                <div class="stripe red"></div>
                                <div class="stripe mid yellow"></div>
                                <div class="stripe red"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption10" value="Orange and Blue">
                            <label for="roadOption10">
                                <div class="stripe orange"></div>
                                <p class="and">&</p>
                                <div class="stripe blue"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption11" value="White and Blue">
                            <label for="roadOption11">
                                <div class="stripe white"></div>
                                <p class="and">&</p>
                                <div class="stripe blue"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption12" value="Red and White">
                            <label for="roadOption12">
                                <div class="stripe red"></div>
                                <p class="and">&</p>
                                <div class="stripe white"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption13" value="Blue">
                            <label for="roadOption13">
                                <div class="full-stripe blue"></div>
                            </label>
                        </div>
                        <div class="checkbox-wrapper box different-shadow">
                            <input type="checkbox" v-model="filter.roadmarks" id="roadOption8" value="S-Red + M-White">
                            <label for="roadOption8">
                                <div class="stripe red"></div>
                                <div class="stripe mid white"></div>
                                <div class="stripe red"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <button popovertarget="popover">Road markings</button>

            </div>
            <div title="Which Google Years?" class="filter-box">
                <div class="inner-splitter ">
                    <div class="inner-left">
                        <div class="checkbox-wrapper" v-for="year in availableYears.slice(0, 7)" :key="year">
                            <input type="checkbox" v-model="filter.years" :value="year" :id="year" />
                            <label :for="year">{{ year }}</label>
                        </div>
                    </div>

                    <div class="inner-right">
                        <div class="checkbox-wrapper" v-for="year in availableYears.slice(7)" :key="year">
                            <input type="checkbox" v-model="filter.years" :value="year" :id="year" />
                            <label :for="year">{{ year }}</label>
                        </div>
                        <div class="checkbox-wrapper" style="visibility: hidden">
                            <input type="checkbox">
                            <label for="">invisible</label>
                        </div>
                    </div>


                </div>
            </div>

        </div>
        <div class="container-right">
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
        </div>
    </div>

</template>

<script>

  export default {
    data() {
      return {
        countries: [
          { name: 'Botswana', continent: 'Africa', years: [2012, 2013, 2016, 2017, 2019, 2020, 2021], direction: 'Left', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Egypt', continent: 'Africa', years: [], direction: '', roadmarks: [] },
          { name: 'Eswatini', continent: 'Africa', years: [2013, 2017, 2018, 2019, 2020, 2022], direction: 'Left', roadmarks: ['S-Yellow + M-White & Yellow','S-Yellow + M-White' ] },
          { name: 'Ghana', continent: 'Africa', years: [2017, 2019, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Kenya', continent: 'Africa', years: [2018, 2019, 2022], direction: 'Left', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Lesotho', continent: 'Africa', years: [2017, 2019, 2020, 2021], direction: 'Left', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Madagascar', continent: 'Africa', years: [2020, 0], direction: 'Right', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Nigeria', continent: 'Africa', years: [2017, 2019, 2021, 2022], direction: 'Right', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Rwanda', continent: 'Africa', years: [2022], direction: 'Right', roadmarks: ['S-White+ M-Yellow'] },
          { name: 'Senegal', continent: 'Africa', years: [2017, 2019, 2020, 2022], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'South Africa', continent: 'Africa', years: [2009, 2010, 2011, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], direction: 'Left', roadmarks: ['S-Red + M-White', ' S-Yellow + M-White'] },
          { name: 'Tunisia', continent: 'Africa', years: [2016, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Uganda', continent: 'Africa', years: [2015, 2019], direction: 'Left', roadmarks: ['S-White + M-Yellow', 'S-White + M-White'] },
          { name: 'Bangladesh', continent: 'Asia', years: [2015, 2016, 2019, 2020, 2022, 2023], direction: 'Left', roadmarks: ['S-White + M-White'] },
          { name: 'Bhutan', continent: 'Asia', years: [2014, 2016, 2017, 2018, 2019, 2021, 2022], direction: 'Left', roadmarks: ['S-White + M-White'] },
          { name: 'Cambodia', continent: 'Asia', years: [2014, 2015, 2016, 2017, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Christmas Island', continent: 'Asia', years: [], direction: 'Left', roadmarks: ['S-White + M-White'] },
          { name: 'Hong Kong', continent: 'Asia', years: [2013, 2023], direction: 'Right', roadmarks: [] },
          { name: 'India', continent: 'Asia', years: [2013, 2022, 2023], direction: 'Left', roadmarks: ['S-Yellow + M-White', 'S-White + M-White', 'S-Yellow + M-Yellow'] },
          { name: 'Indonesia', continent: 'Asia', years: [2016, 2017, 2019, 2020, 2021, 2022, 2023], direction: 'Left', roadmarks: ['S-White + M-Yellow', 'S-White + M-White'] },
          { name: 'Israel', continent: 'Asia', years: [2012, 2013, 2014, 2015, 2016, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Japan', continent: 'Asia', years: [2009, 2014, 2016, 2018, 2019, 2020, 2021, 2022], direction: 'Left', roadmarks: ['S-White + M-White', 'S-White + M-Yellow', 'S-White + M-White & Yellow'] },
          { name: 'Jordan', continent: 'Asia', years: [2017, 2018, 2019], direction: 'Right', roadmarks: ['S-Yellow+ M-White'] },
          { name: 'Kyrgyzstan', continent: 'Asia', years: [2016, 2018, 2019], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Laos', continent: 'Asia', years: [2015, 2016, 2018, 2019], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Macao', continent: 'Asia', years: [2017, 2018, 2019, 2022], direction: 'Right', roadmarks: [] },
          { name: 'Malaysia', continent: 'Asia', years: [2015, 2018, 2019, 2020, 2021], direction: 'Left', roadmarks: ['S-White + M-White'] },
          { name: 'Mongolia', continent: 'Asia', years: [2015, 2016, 2017, 2018, 2019, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Nepal', continent: 'Asia', years: [2020], direction: '', roadmarks: [] },
          { name: 'Palestine', continent: 'Asia', years: [2012, 2014, 2019, 2020, 2021, 2022], direction: 'Right', roadmarks: [] },
          { name: 'Philippines', continent: 'Asia', years: [2016, 2017, 2018, 2019, 2020, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-White + M-Yellow', 'S-White + M-White & yellow', 'Orange and Blue, White and Blue'] },
          { name: 'Qatar', continent: 'Asia', years: [2022], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Russia', continent: 'Asia', years: [2016, 2017, 2018, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White','S-Yellow + M-White','S-White + M-Yellow'] },
          { name: 'Singapore', continent: 'Asia', years: [2019, 2021, 2023], direction: 'Left', roadmarks: ['S-White + M-White','S-Yellow + M-White'] },
          { name: 'South Korea', continent: 'Asia', years: [2019, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Sri Lanka', continent: 'Asia', years: [2016, 2019, 2020, 2021, 2022], direction: 'Left', roadmarks: ['S-White + M-White', 'S-Yellow + M-White'] },
          { name: 'Taiwan', continent: 'Asia', years: [2011, 2012, 2014, 2015, 2016, 2019, 2021, 2023], direction: 'Right', roadmarks: ['Blue', 'S-Red + M-Yellow', 'S-White + M-Yellow'] },
          { name: 'Thailand', continent: 'Asia', years: [2015, 2016, 2017, 2019, 2020, 2021, 2023], direction: 'Left', roadmarks: ['S-White + M-Yellow'] },
          { name: 'United Arab Emirates', continent: 'Asia', years: [2016, 2017, 2019, 2020, 2022], direction: 'Right', roadmarks: ['S-Yellow + M-White', 'S-Yellow + M-Yellow'] },
          { name: 'Vietnam', continent: 'Asia', years: [2020, 2021], direction: 'Right', roadmarks: [] },
          { name: 'Albania', continent: 'Europe', years: [2016, 2019, 2021], direction: 'Right', roadmarks: ['S-White + M-White', 'S-White + M-Yellow'] },
          { name: 'Andorra', continent: 'Europe', years: [2013, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Austria', continent: 'Europe', years: [2018, 2019, 2020, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Belgium', continent: 'Europe', years: [2017, 2018, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Bulgaria', continent: 'Europe', years: [2013, 2015, 2016, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Croatia', continent: 'Europe', years: [2012, 2013, 2016, 2019, 2020, 2022], direction: 'Right', roadmarks: ['S-White + M-White', 'Red and White'] },
          { name: 'Czech Republic', continent: 'Europe', years: [2009, 2010, 2012, 2013, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Denmark', continent: 'Europe', years: [2012, 2016, 2017, 2018, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Estonia', continent: 'Europe', years: [2012, 2013, 2017, 2019, 2020, 2022], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Faroe Islands', continent: 'Europe', years: [], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Finland', continent: 'Europe', years: [2013, 2014, 2017, 2019, 2022], direction: 'Right', roadmarks: ['S-White + M-White','S-White + M-Yellow','S-White + M-White & Yellow'] },
          { name: 'France', continent: 'Europe', years: [2009, 2010, 2011, 2013, 2014, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Germany', continent: 'Europe', years: [2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-Yellow'] },
          { name: 'Gibraltar', continent: 'Europe', years: [2016, 2019, 2020, 2021, 2022], direction: 'Right', roadmarks: ['S-Yellow + M-White', 'S-White + M-White'] },
          { name: 'Greece', continent: 'Europe', years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Hungary', continent: 'Europe', years: [2013, 2014, 2016, 2018, 2019, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Iceland', continent: 'Europe', years: [2017, 2018, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Ireland', continent: 'Europe', years: [2011, 2013, 2014, 2017, 2019, 2022], direction: 'Left', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Isle of Man', continent: 'Europe', years: [2011, 2013, 2016, 2018, 2019, 2020, 2021, 2022], direction: 'Left', roadmarks: ['S-White + M-White', 'S-Yellow + M-White'] },
          { name: 'Italy', continent: 'Europe', years: [2013, 2014, 2016, 2017, 2018, 2019, 2020, 2021, 2023], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Jersey', continent: 'Europe', years: [2011, 2013, 2019, 2020], direction: 'Left', roadmarks: ['S-Yellow + M-White'] },
          { name: 'Latvia', continent: 'Europe', years: [2012, 2013, 2014, 2016, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Lithuania', continent: 'Europe', years: [2013, 2014, 2016, 2018, 2019, 2020, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-White','S-Yellow + M-White' ] },
          { name: 'Luxembourg', continent: 'Europe', years: [2014, 2017, 2019, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Malta', continent: 'Europe', years: [2016, 2019], direction: 'Left', roadmarks: ['S-White + M-White'] },
          { name: 'Monaco', continent: 'Europe', years: [2013, 2016, 2019, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Montenegro', continent: 'Europe', years: [2016, 2019, 2021], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-White'] },
          { name: 'Netherlands', continent: 'Europe', years: [2009, 2010, 2013, 2015, 2016, 2018, 2019, 2020, 2022], direction: 'Right', roadmarks: ['S-White + M-White', 'S-White + M-White & Green'] },
          { name: 'North Macedonia', continent: 'Europe', years: [2015, 2016, 2017, 2019], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-Yellow'] },
          { name: 'Norway', continent: 'Europe', years: [2010, 2011, 2012, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Poland', continent: 'Europe', years: [2013, 2014, 2016, 2017, 2018, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Portugal', continent: 'Europe', years: [2013, 2014, 2015, 2017, 2019, 2020, 2021, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-White'] },
          { name: 'Romania', continent: 'Europe', years: [2013, 2014, 2017, 2019, 2022], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-Yellow'] },
          { name: 'San Marino', continent: 'Europe', years: [2012, 2013, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Serbia', continent: 'Europe', years: [2015, 2016, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Slovakia', continent: 'Europe', years: [2012, 2013, 2015, 2018, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Slovenia', continent: 'Europe', years: [2013, 2014, 2016, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Spain', continent: 'Europe', years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-White'] },
          { name: 'Sweden', continent: 'Europe', years: [2011, 2013, 2016, 2017, 2018, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Switzerland', continent: 'Europe', years: [2011, 2012, 2014, 2015, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Turkey', continent: 'Asia', years: [2014, 2015, 2016, 2018, 2019, 2020, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-Yellow', 'S-White + M-White & Yellow', 'S-White + M-Yellow'] },
          { name: 'Ukraine', continent: 'Europe', years: [2012, 2014, 2015, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'United Kingdom', continent: 'Europe', years: [2009, 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021], direction: 'Left', roadmarks: ['S-White + M-White', 'S-Yellow + M-White'] },
          { name: 'Canada', continent: 'na', years: [2009, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2023], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Costa Rica', continent: 'na', years: [2020], direction: '', roadmarks: [] },
          { name: 'Curaçao', continent: 'sa', years: [2018], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Dominican Republic', continent: 'na', years: [2020], direction: '', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Greenland', continent: 'na', years: [2015, 2016, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'Guatemala', continent: 'na', years: [2017, 2019, 2021], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Mexico', continent: 'na', years: [2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-White + M-Yellow', 'S-Yellow + M-White'] },
          { name: 'Puerto Rico', continent: 'na', years: [2016], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'United States', continent: 'na', years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'US Virgin Islands', continent: 'na', years: [2017, 2019], direction: 'Left', roadmarks: ['S-White + M-Yellow'] },
          { name: 'American Samoa', continent: 'Australia', years: [2015, 2019], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Australia', continent: 'Australia', years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], direction: 'Left', roadmarks: ['S-White + M-White', 'S-Yellow + M-Yellow', 'S-Yellow + M-White'] },
          { name: 'Guam', continent: 'Australia', years: [0], direction: 'Right', roadmarks: ['S-White + M-White'] },
          { name: 'New Zealand', continent: 'Australia', years: [2014, 2016, 2017, 2018, 2019, 2020, 2021], direction: 'Left', roadmarks: ['S-White + M-White', 'S-White + M-Yellow', 'S-Yellow + M-White', 'S-Yellow + M-Yellow', 'S-White+ M-White & Yellow'] },
          { name: 'Northern Mariana Islands', continent: 'Australia', years: [0], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Argentina', continent: 'sa', years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-White + M-Yellow', 'S-Yellow + M-White', 'S-White+ M-White & Yellow'] },
          { name: 'Bolivia', continent: 'sa', years: [2015, 2016, 2017, 2018, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White','S-White + M-Yellow'] },
          { name: 'Brazil', continent: 'sa', years: [2013, 2014, 2015, 2016, 2018, 2019, 2020, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-White', 'S-White + M-Yellow', 'Red and White', 'White and Blue' ] },
          { name: 'Chile', continent: 'sa', years: [2014, 2015, 2016, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White', 'S-Yellow + M-Yellow', 'S-White + M-Yellow', 'S-Yellow + M-White'] },
          { name: 'Colombia', continent: 'sa', years: [2015, 2016, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Ecuador', continent: 'sa', years: [2015, 2017, 2018, 2019, 2020, 2021], direction: 'Right', roadmarks: ['S-White + M-Yellow'] },
          { name: 'Peru', continent: 'sa', years: [2013, 2014, 2016, 2017, 2019, 2020, 2022, 2023], direction: 'Right', roadmarks: ['S-White + M-Yellow', 'S-White + M-White'] },
          { name: 'Uruguay', continent: 'sa', years: [2015, 2016, 2017, 2019, 2020], direction: 'Right', roadmarks: ['S-White + M-White & Yellow'] },
          { name: 'Antarctica', continent: 'Antarctica', years: [2012, 2013, 2020], direction: 'Right', roadmarks: [] },

        ],
        filter: {
          left: false,
          na: false,
          sa: false,
          europe: false,
          asia: false,
          americas: false,
          africa: false,
          australia: false,
          antarctica: false,
          right: false,
          years: [],
          roadmarks: [],
        },
        availableYears: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
        ],
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

        // Handle continent checkboxes
        else if (['europe', 'asia', 'na', 'sa', 'africa', 'australia', 'antarctica'].includes(checkbox)) {
            // Reset all continent filters except the selected one
            for (const continent of ['europe', 'asia', 'na', 'sa', 'africa', 'australia', 'antarctica']) {
              if (continent !== checkbox) {
                this.filter[continent] = false;
              }
            }


          }

      }


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

<style scoped>

</style>