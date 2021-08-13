<script>
  export let link = null;
  // let theme;
  // import Appbar { theme } from "./Appbar.svelte";
</script>

<a href={link} class="appbar-item">
  <slot />
</a>

<style type="scss">
  @import "./appbar";
</style>
