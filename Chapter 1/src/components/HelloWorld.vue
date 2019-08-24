<template>
  <div>
    <h1 v-text="text" />

    <div v-once>{{ once }}</div>

    <h2 v-html="html" />

    <a v-bind:href="url">Binding method 1</a>

    <a :href="url">Binding method 2</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      text: 'Directive text',
      // v-once
      once: 'This is only ever loaded once',
      // v-html
      html: 'Stylise</br>HTML in<br/><b>your data</b>',
      // v-bind
      url: 'https://google.com',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
