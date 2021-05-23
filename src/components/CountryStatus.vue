<template>
    <div class="pt-5 mt-5">
        {{ setData() }}
        <div>
            <label class="mx-5 px-5 fw-bold fs-5 mt-3">Select a date:</label>
            <DatePickerLite 
                :id-attr="datepickerSetting.id"
                :name-attr="datepickerSetting.name"
                :class-attr="datepickerSetting.class"
                :value-attr="datepickerSetting.value"
                :placeholder-attr="datepickerSetting.placeholder"
                :is-button-type="datepickerSetting.isButtonType"
                :year-minus="datepickerSetting.yearMinus"
                :from="datepickerSetting.fromDate"
                :to="datepickerSetting.toDate"
                :disabled-date="datepickerSetting.disabledDate"
                :locale="datepickerSetting.locale"
                @value-changed="datepickerSetting.changeEvent"
                :disableInput="datepickerSetting.disableInput"
                class=" py-3 px-5 bg-light fs-5"
            />
        </div>
       <div class="navigation pt-3">
           <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button @click="onClick" :class="isActive(infected)" value="infected">Infected</button>
                </li>
                <li class="nav-item">
                    <button @click="onClick" :class="isActive(cured)" value="cured">Cured</button>
                </li>
                <li class="nav-item">
                    <button @click="onClick" :class="isActive(dead)" value="dead">Dead</button>
                </li>
            </ul>
       </div>
       <div v-if="infected">
            <div class="my-1 px-3 py-1 mx-auto text">
                <h2 class="pb-2">Number of infected in {{ getCountryStatus && getCountryStatus[0].Country}}</h2>
                <p class="fs-5">The corona pandemic has taken us all by surprise. To keep the spread of the virus in check, we were all quarantined. However, that did't keep the virus from getting to us, as the numbers show:</p>
            </div>
            <SectionSegment :province="selected.Province" v-for="selected in filterSelected" :dataType="dataType1" :date="selectedDate" :key="selected.Id" :info="selected.Confirmed" />
            <p v-if="!(filterSelected).length" class="alert alert-danger mt-5 fs-5 fw-bold text-center">No data recorded!</p>
       </div>
       <div v-if="cured">
            <div class="my-1 px-3 py-1 mx-auto text">
               <h2 class="pb-2">Number of cured in {{ getCountryStatus && getCountryStatus[0].Country}}</h2>
                <p class="fs-5">But not everything is dark, as they say. There is a bit of hope since there are many people who had been infected but recovered:</p>
            </div>
            <SectionSegment :province="selected.Province" v-for="selected in filterSelected" :dataType="dataType2" :date="selectedDate" :key="selected.Id" :country="selected.Country" :info="selected.Recovered" />
            <p v-if="!(filterSelected).length" class="alert alert-danger mt-5 fs-5 fw-bold text-center">No data recorded!</p>
       </div>
       <div v-if="dead">
            <div class="my-1 px-3 py-1 mx-auto text">
                <h2 class="pb-2">Number of deaths in {{ getCountryStatus && getCountryStatus[0].Country}}</h2>
                <p class="fs-5">As there is good news, there are bad ones as well. The corona pandemic has taken many lives, which is visible here:</p>
            </div>
            <SectionSegment :province="selected.Province" v-for="selected in filterSelected" :dataType="dataType3" :date="selectedDate" :key="selected.Id" :info="selected.Deaths" />
            <p v-if="!(filterSelected).length" class="alert alert-danger mt-5 fs-5 fw-bold text-center">No data recorded!</p>
       </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import DatePickerLite from 'vue3-datepicker-lite';
import SectionSegment from './SectionSegment'

export default {
    name: 'CountryStatus',
    components: {
        DatePickerLite,
        SectionSegment
    },
    data() {
        return {
            cured: false,
            infected: true,
            dead: false,
            dataType1: "Total Confirmed:",
            dataType2: "Total Recovered:",
            dataType3: "Total Deaths:",
            text1: 'The corona pandemic has taken us all by surprise. To keep the spread of the virus in check, we were all quarantined. However, that did\'t keep the virus from getting to us, as the numbers show:',
            selectedDate: '',
            datepickerSetting: {
                id: "birthday",
                name: "birthday",
                class: "myDateInput",
                value: this.getDate(),
                placeholder: "Select",
                isButtonType: false,
                yearMinus: 0,
                fromDate: "2020-02-10T00:00:00",
                toDate: this.getDate(),
                locale: {
                    format: "YYYY-MM-DDTHH:mm:ssZ",
                    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    startsWeeks: 0,
                },
                changeEvent: (value) => {
                    this.selectedDate = value;
                    this.setData();   
                },
                disableInput: false,
            },
        }
    },
    computed:{
        ...mapGetters(['getCountryStatus']),
        filterSelected() {
            let items = this.getCountryStatus
            items = items.filter(item => item.Date === this.selectedDate);
            return items
        }
    },
    methods: {
        onClick(e) {
            this.cured = e.target.value === 'cured'
            this.infected = e.target.value === 'infected'
            this.dead = e.target.value === 'dead'
        },
        isActive(item) {
            if(item) return "nav-link px-md-5 active fw-bold fs-5";
            return "nav-link px-md-5 fw-bold fs-5"
        },
        getDate(){
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth()+1).padStart(2, '0');
            const yyyy = today.getFullYear()

            return `${yyyy}-${mm}-${dd}T00:00:00Z`
        },
        setData(){
            setTimeout(() => {
                this.getCountryStatus.forEach(country => {
                    if(country.Date === this.selectedDate) return this.selected = country
                })
            }, 50)
        },
    }
}
</script>

<style scoped>
    .text {
        max-width: 750px;
        width: 90%;
    }
    .text p{
        max-width: 60ch
    }
</style>