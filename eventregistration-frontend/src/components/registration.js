import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  name: 'eventregistration',
  data () {
    return {
      persons: [],
      newPerson: '',
      errorPerson: '',
      response: [],
      newEvent: {
        name: '',
        eventDate: '',
        startTime: '12:00',
        endTime: '13:00'
      },
      errorEvent: '',
      events: [],
    }
  },
  created: function () {
    AXIOS.get('/persons')
      .then(response => {
        // JSON responses are automatically parsed.
        this.persons = response.data
      })
      .catch(e => {
        this.errorPerson = e
      })
    // Initializing events
    AXIOS.get('/events')
      .then(response => {
        this.events = response.data
      })
      .catch(e => {
        this.errorEvent = e
        // this.errors.push(e)
      })
    AXIOS.get('/events').then(response => {this.events = response.data}).catch(e => {this.errorEvent = e});
  },
  methods: {
    createPerson: function (personName) {
      AXIOS.post('/persons/'.concat(personName), {}, {})
        .then(response => {
          // JSON responses are automatically parsed.
          this.persons.push(response.data)
          this.errorPerson = ''
          this.newPerson = ''
        })
        .catch(e => {
          var errorMsg = e.response.data.message
          console.log(errorMsg)
          this.errorPerson = errorMsg
        })
    },
    createEvent:function (name,date) {
      const form_data=new FormData()
      form_data.append('date',date)
        AXIOS.post('/events/'.concat(name),form_data,{})
          .then(response => {
            // JSON responses are automatically parsed.
            this.events.push(response.data)
            this.errorEvent = ''
            this.newEvent = ''
          })
          .catch(e => {
            var errorMsg = e.response.data.message
            console.log(errorMsg)
            this.errorEvent = errorMsg
          })
    }
  },
}

function PersonDto (name) {
  this.name = name
  this.events = []
}

function EventDto (name, date, start, end) {
  this.name = name
  this.eventDate = date
  this.startTime = start
  this.endTime = end
}





