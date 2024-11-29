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
  section {
    max-width: 70rem;
    width: 100%;
    margin-bottom: 9.2rem;

    h2 {
      margin-top: 0;
      font-size: 2.8rem;
    }
  }
</style>
