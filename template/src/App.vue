<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>
