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
    <h2>Persons</h2>
    <table>
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
      <!-- ... -->
    </table>
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
<span v-if="errorPerson" style="color:red">Error: {{errorPerson}} </span>
