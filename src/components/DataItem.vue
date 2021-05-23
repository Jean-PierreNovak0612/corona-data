<template>
    <div class="card mt-3 p-3 text-start">
        <div class="card-body">
            <h4 class="card-title text-lg-center text-start mb-5">{{title || info && info.Country}}</h4>
            <div class="d-inline-block width">
                <h5>New Data</h5>
                <ul>
                    <li>New confirmed: {{info && info.NewConfirmed}}</li>
                    <li>New Recovered: {{info && info.NewRecovered}}</li>
                    <li>New Deaths: {{info && info.NewDeaths}}</li>
                </ul>
            </div>
            <div class="d-inline-block width mb-5">
                <h5>Total Data</h5>
                <ul>
                    <li>Total confirmed: {{info && info.TotalConfirmed}}</li>
                    <li>Total Recovered: {{info && info.TotalRecovered}}</li>
                    <li>Total Deaths: {{info && info.TotalDeaths}}</li>
                </ul>
            </div>
            <p>Last updated: {{info && getDate(info.Date)}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataItem',
    props: ['info', 'title'],
    methods: {
        getDate(date) {
            const newDate = new Date(date);
            let year = newDate.getFullYear();
            let month = newDate.getMonth() + 1;
            let day = newDate.getDate()

            if(day < 10) day = '0' + month;

            return `${day}.${month}.${year}`
        }, 
    }
}
</script>

<style scoped>
    .width  {
        max-width: 400px;
        width: 100%;
    }
    ul {
        list-style-image: url('../assets/images/corona_bullets.png');
    }
</style>