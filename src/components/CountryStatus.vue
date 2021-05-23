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
                class=" py-3 px-5 mx-5 bg-light fs-5"
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
       <div v-if="cured">
           <SectionSegment v-for="selected in filterSelected" :dataType="dataType1" :date="selectedDate" :key="selected.Id" :text="text2" :title="title2" :country="selected.Country" :info="selected.Confirmed" />
          <p v-if="!(filterSelected).length" class="alert alert-danger mt-5 text-center">No data recorded!</p>
       </div>
       <div v-if="infected">
           <SectionSegment v-for="selected in filterSelected" :dataType="dataType2" :date="selectedDate" :key="selected.Id" :text="text1" :title="title2" :country="selected.Country" :info="selected.Recovered" />
          <p v-if="!(filterSelected).length" class="alert alert-danger mt-5 text-center">No data recorded!</p>
       </div>
       <div v-if="dead">
          <SectionSegment v-for="selected in filterSelected" :dataType="dataType3" :date="selectedDate" :key="selected.Id" :text="text3" :title="title3" :country="selected.Country" :info="selected.Deaths" />
          <p v-if="!(filterSelected).length" class="alert alert-danger mt-5 text-center">No data recorded!</p>
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
            title1: 'Recovered in',
            title2: 'Infected in',
            title3: 'How many have died in',
            dataType1: "Total Confirmed:",
            dataType2: "Total Recovered:",
            dataType3: "Total Deaths:",
            text1: 'The corona pandemic has taken us all by suprise. In order to keep the spread of the virus in check, we were all quarantined. However, that did\'t keep the virus from getting to us, as the numbers show:',
            text2: 'But not everything is dark as they say. There is a bit of hope, since there are many people who had been infected, but recovered:',
            text3: 'As there are good news, there are bad ones as well. The corona pandemic has taken many lives which is visible here:',
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
        getData() {
            console.log(this.selected)
        }
    }
}
</script>