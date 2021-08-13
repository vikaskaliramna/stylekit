<script>
  export let col = "auto";
  export let sm = "auto";
  export let md = "auto";
  export let lg = "auto";
  export let xl = "auto";
</script>

<div class="col col--{col} col-sm--{sm} col-md--{md} col-lg--{lg} col-xl--{xl}">
  <slot />
</div>