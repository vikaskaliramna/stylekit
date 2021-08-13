<script>
  export let className = "";
  export let align = "flex-start";
  export let justify = "flex-start";
</script>

<div class="row align-items--{align} justify-content--{justify} {className}">
  <slot />
</div>