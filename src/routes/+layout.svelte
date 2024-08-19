<script>
  import Background from "$lib/components/Background.svelte";
  import "$lib/styles/global.scss";
</script>

<!-- markup (zero or more items) goes here -->
<main class="main">
  <Background />
  <slot />
</main>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.4rem;

    @include tablet-and-smaller {
      padding: 0 1.6rem;
    }
  }
</style>
