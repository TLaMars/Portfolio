<script>
  import Background from "$lib/components/Background.svelte";
  import "$lib/styles/global.scss";
</script>

<!-- markup (zero or more items) goes here -->
<slot></slot>
<Background />

<style>
  /* your styles go here */
</style>
