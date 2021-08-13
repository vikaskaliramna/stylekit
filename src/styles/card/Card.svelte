<script>
  export let style = "default";
</script>

<div class="card card--{style}">
  <slot />
</div>

<style type="scss">
  @import "stylekit/backdrop.scss";
</style>