<script>
  export let theme = "default";
  export let shape = "initial";
</script>

<button class="button button--{theme} button--{shape}">
  <span><slot /></span>
</button>

<style type="text/scss">
  @import "./button";
</style>
