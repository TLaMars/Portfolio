<svelte:head>
  <title>Thomas Lamars | FE Developer</title>
</svelte:head>

<section class="intro">
  <h1>Hi, I'm <span class="name">Thomas!</span></h1>
  <p>A Frontend Developer @ <span class="company">Triple</span></p>
</section>

<style lang="scss">
  @use "../lib/styles/utils.scss" as *;

  .intro {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    padding: 0 1rem;
  }
  h1 {
    color: var(--foreground);
    font-size: 8rem;
    margin: 0;

    @include phone-only {
      font-size: 5rem;
    }
  }
  .name {
    color: var(--foreground-accent);
  }
  p {
    color: var(--foreground);
    font-size: 4rem;
    padding: 0;
    margin: 0;

    @include phone-only {
      font-size: 2.5rem;
    }
  }
  .company {
    color: var(--foreground-accent-secondary);
  }
</style>
