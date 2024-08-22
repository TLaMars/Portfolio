<script lang="ts">
  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let marginSize: "title-page" | "sub-page" = "title-page";
</script>

<header
  class="header"
  class:title-page={marginSize === "title-page"}
  class:sub-page={marginSize === "sub-page"}
>
  <h1 class="title">{@html title}</h1>
  {#if subtitle}
    <h3 class="subtitle">{@html subtitle}</h3>
  {/if}
</header>

<style lang="scss">
  @use "../styles/utils.scss" as *;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &.title-page {
      margin-top: 28rem;
      margin-bottom: 28rem;

      @include phone-only {
        margin-top: 20rem;
        margin-bottom: 20rem;
      }
    }

    &.sub-page {
      margin-top: 19.2rem;
      margin-bottom: 9.2rem;

      @include phone-only {
        margin-top: 12rem;
        margin-bottom: 8em;
      }
    }
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
