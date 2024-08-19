<script lang="ts">
  export let title: string;
  export let subtitle: string | undefined;
</script>

<header class="header">
  <h1 class="title">{@html title}</h1>
  <h3 class="subtitle">{@html subtitle}</h3>
</header>

<style lang="scss">
  @use "../styles/utils.scss" as *;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 28rem;
    margin-bottom: 28rem;
  }

  .title {
    color: var(--foreground);
    font-size: 12rem;
    margin: 0;

    @include phone-only {
      font-size: 5rem;
    }

    @include tablet-only {
      font-size: 8rem;
    }
  }

  .subtitle {
    color: var(--foreground);
    font-size: 4rem;
    padding: 0;
    margin: 0;

    @include phone-only {
      font-size: 2.5rem;
    }
  }
</style>
