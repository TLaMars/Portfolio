<script>
  import Background from "$lib/components/Background.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navigation from "$lib/components/Nav.svelte";
  import "$lib/styles/global.scss";
</script>

<main class="main">
  <Navigation />
  <Background />
  <slot />
  <Footer />
</main>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.4rem;
    min-height: 100vh;

    @include tablet-and-smaller {
      padding: 0 1.6rem;
    }
  }
</style>
