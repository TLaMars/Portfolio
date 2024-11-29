<script lang="ts">
  import type { Info } from "$lib/models/info";

  export let info: Info[];
</script>

<section class="info">
  {#each info as { title, description, href } (title)}
    <div>
      <h4>{title}</h4>
      {#if href}
        <a {href} target="_blank">{description}</a>
      {:else}
        <p>{description}</p>
      {/if}
    </div>
  {/each}
</section>

<style lang="scss">
  @use "../../../lib/styles/utils.scss" as *;

  .info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    max-width: 70rem;
    width: 100%;

    h4 {
      font-size: 1.8rem;
      margin: 0;
      color: var(--foreground-accent);
      font-family: var(--font-body);
      font-weight: 700;
    }

    p {
      font-size: 1.6rem;
      margin: 0;
    }

    @include phone-only {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
</style>
