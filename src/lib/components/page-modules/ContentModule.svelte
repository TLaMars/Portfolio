<script lang="ts">
  export let title: string | undefined = undefined;
  export let paragraphs: string[] | undefined = undefined;
</script>

<section>
  {#if title}
    <h2>{title}</h2>
  {/if}
  {#if paragraphs}
    {#each paragraphs as paragraph}
      <p>{paragraph}</p>
    {/each}
  {/if}
</section>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  section {
    max-width: var(--content-page-width);
    width: 100%;
    margin-bottom: var(--content-page-gap);

    h2 {
      margin-top: 0;
      font-size: var(--font-size-l);
    }

    @include phone-only {
      margin-bottom: var(--content-page-gap-mobile);
    }
  }
</style>
