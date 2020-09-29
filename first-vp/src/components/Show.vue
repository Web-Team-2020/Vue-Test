<template>
  <div>
    <p style="margin-left: 15px">The list :</p>

    <ul>
      <li v-for="p in persons" :key="p.name">
        {{ p.name }}, {{ p.age }}
      </li>
    </ul>
    <div class="col-xs-3">
      <div class="form-group row">
        <input class="form-control" id="ex2" type="text" v-model="cityName">
        <button class="btn btn-primary" @click="req"> View the weather !</button>
      </div>
      <hr>
      <p v-if="weatherActive">The weather is : {{ weather }}</p>
      <button class="btn btn-info" @click="inc"> Increment</button>
      <p v-if="count%2===0" style="font-weight: bold;color: lightseagreen"> {{ count }} </p>
      <p v-if="count%2!==0" style="color:crimson"> {{ count }} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: 'This is the message.',
      count: 0,
      persons: [
        {name: 'reza rahmani', age: 52},
        {name: 'yousef zamani', age: 32},
        {name: 'ali nikzad', age: 56}
      ],
      cityName: '',
      weather: 'a',
      weatherActive: false
    }
  },
  computed: {},
  methods: {
    inc() {
      this.$store.commit('increment');
      this.count = this.$store.getters.getCount;
      return this.count;
    },

    req() {
      const apiKey = '359e093ddf228275e0448eccdfd24ba8'
      const query = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&appid=' + apiKey;
      //alert(query);
      axios.get(query).then(function (response) {
        // handle success

        //this.$store.commit('changeTheWeather', {'weather': response.data.weather[0].description});
        //this.$store.commit('changeTheActivation', {'act': true});
        //alert('The weather is \'' + response.data.weather[0].description + '\' now there.');
        this.weather = response.data.weather[0].description;
        this.weatherActive = true;
        //console.log(this.weather);

      }.bind(this)).catch(function (error) {
        // handle error
        alert('The weather of this city was not found !');
        alert(error);
      });

    }
  }

}
</script>

<style scoped>
ul {

  list-style-type: none;
  padding: 10px 20px;
}

li {
  border-left: 5px solid #ff0000;
  padding: 5px;
  margin-left: -5px;
}

li:hover {
  background-color: aqua;
  border-left: 5px solid greenyellow;
  padding: 10px;
  font-weight: bold;
}

div {
  padding-left: 15px;
}

button {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
