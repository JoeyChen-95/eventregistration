<style>
#eventregistration {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: #f2ece8;
}
</style>

<script src="./registration.js">
</script>

<template>
  <div id="eventregistration">
    <h2>People</h2>
    <table>
      <tr>
        <td>Name</td>
        <td>Event to attend</td>
      </tr>
      <tr v-for="person in persons" >
        <td>{{ person.name }}</td>
        <td>
          <ul>
            <li v-for="event in person.events">
              {{event.name}}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="newPerson" placeholder="Person Name">
        </td>
        <td>
          <button v-bind:disabled="!newPerson" @click="createPerson(newPerson)">Create Person</button>
        </td>
      </tr>
    </table>
    <p>
      <span v-if="errorPerson" style="color:red">Error: {{errorPerson}} </span>
    </p>
    <h2>Events</h2>
    <table>
      <tr>
        <th>Event Name</th>
        <th>Date</th>
        <th>Start</th>
        <th>End</th>
      </tr>
      <tr v-for="event in events">
        <td>{{event.name}}</td>
        <td>{{event.eventDate}}</td>
        <td>{{event.startTime}}</td>
        <td>{{event.endTime}}</td>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="newEvent.name" placeholder="Event Name">
        </td>
        <td>
          <input type="text" v-model="newEvent.eventDate" placeholder="YYYY-MM-DD">
        </td>
        <td>
          <input type="text" v-model="newEvent.startTime" placeholder="HH:mm">
        </td>
        <td>
          <input type="text" v-model="newEvent.endTime" placeholder="HH:mm">
        </td>
        <td>
          <button v-bind:disabled="!newEvent" @click="createEvent(newEvent.name, newEvent.eventDate, newEvent.startTime, newEvent.endTime)">Create</button>
        </td>
      </tr>
    </table>
    <span v-if="errorEvent" style="color:red">Error: {{errorEvent}} </span>
  </div>
</template>
<table>
<!-- ... -->
<tr>
  <td>
    <input type="text" v-model="newPerson" placeholder="Person Name">
  </td>
  <td>
    <button v-bind:disabled="!newPerson" @click="createPerson(newPerson)">Create Person</button>
  </td>
</tr>
</table>

