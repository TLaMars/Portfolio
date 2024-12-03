<script lang="ts">
  import type { Info } from "$lib/models/info";

  export let info: Info[];
</script>

<section class="info">
  {#each info as { title, description, href } (title)}
    <div>
      <h4>{title}</h4>
      <p>
        {#if href}
          <a {href} target="_blank">{description}</a>
        {:else}
          {description}
        {/if}
      </p>
    </div>
  {/each}
</section>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  .info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    max-width: var(--content-page-width);
    width: 100%;
    margin-bottom: var(--content-page-gap);

    h4 {
      font-size: var(--font-size-m);
      margin: 0;
      color: var(--foreground-accent);
      font-family: var(--font-body);
      font-weight: var(--font-weight-bold);
    }

    p,
    a {
      margin: 0;
      margin-top: 0.6rem;
    }

    @include phone-only {
      grid-template-columns: 1fr;
      width: 100%;
      margin-bottom: var(--content-page-gap-mobile);
    }
  }
</style>
