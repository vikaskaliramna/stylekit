<script>
  // export let theme = "default";
  let theme = "default";
</script>

<div class="appbar appbar--{theme}">
  <slot />
</div>

<style type="scss">
  @import "./appbar";
</style>
