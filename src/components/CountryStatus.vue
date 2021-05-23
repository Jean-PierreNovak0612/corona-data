<template>
    <div class="pt-5 mt-5">
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
                class=" py-3 px-5 mx-5 bg-light "
            />
        </div>
       <div class="navigation pt-3">
           <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button @click="onClick" :class="isActive(cured)" value="cured">Cured</button>
                </li>
                <li class="nav-item">
                    <button @click="onClick" :class="isActive(infected)" value="infected">Infected</button>
                </li>
                <li class="nav-item">
                    <button @click="onClick" :class="isActive(dead)" value="dead">Dead</button>
                </li>
            </ul>
       </div>
       <div v-if="cured">
           <h2 class="pt-4 ps-5">Recovered in </h2>
       </div>
       <div v-if="infected">
           <h2 class="pt-4 ps-5">Cases in </h2>
       </div>
       <div v-if="dead">
          <h2 class="pt-4 ps-5"> How many died in</h2>
       </div>
    </div>
</template>

<script>
import DatePickerLite from 'vue3-datepicker-lite';

export default {
    name: 'CountryStatus',
    components: {
        DatePickerLite
    },
    data() {
        return {
            cured: true,
            infected: false,
            dead: false,
            datepickerSetting: {
                id: "birthday",
                name: "birthday",
                class: "myDateInput",
                value: this.getDate(),
                placeholder: "Select",
                isButtonType: false,
                yearMinus: 0,
                fromDate: "10-02-2020",
                toDate: this.getDate(),
                locale: {
                    format: "DD-MM-YYYY",
                    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    startsWeeks: 0,
                },
                changeEvent: (value) => {
                    console.log(value + " selected!");
                },
                disableInput: false,
            }
        }
    },
    methods: {
        onClick(e) {
            this.cured = e.target.value === 'cured'
            this.infected = e.target.value === 'infected'
            this.dead = e.target.value === 'dead'
        },
        isActive(item) {
            if(item) return "nav-link px-5 active fw-bold fs-5";
            return "nav-link px-5 fw-bold fs-5"
        },
        getDate(){
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth()+1).padStart(2, '0');
            const yyyy = today.getFullYear()

            return `${dd}-${mm}-${yyyy}`
        },
        onSelect() {
            console.log("selected")
        }
    }
}
</script>