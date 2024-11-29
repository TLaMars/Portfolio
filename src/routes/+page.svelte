<script lang="ts">
  import PageHeader from "$lib/components/PageHeader.svelte";
  import WorkCard from "$lib/components/WorkCard.svelte";
  import type { Work } from "$lib/models/work";

  export let data: {
    work: Work[];
  };
</script>

<svelte:head>
  <title>Thomas Lamars | FE Developer</title>
</svelte:head>

<PageHeader
  title="Hi, I'm <span style='color: var(--foreground-accent-secondary);'>Thomas!</span>"
  subtitle="A Frontend Developer @ <span style='color: var(--foreground-accent)'>Triple</span>"
/>

<div class="work-section">
  {#each data.work as { name, shortDescription, image, slug }, i}
    <WorkCard
      title={name}
      subtitle={shortDescription}
      {image}
      slug="work/{slug}"
    />
  {/each}
</div>

<style lang="scss">
  @use "../lib/styles/utils.scss" as *;
  .work-section {
    position: relative;
    max-width: 140rem;
    width: 100%;
    margin-bottom: 6.4rem;
    gap: 5.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    :global(*:nth-child(4n + 1)),
    :global(*:nth-child(4n + 4)) {
      grid-column: auto / span 2;
    }

    @include tablet-and-smaller {
      grid-template-columns: repeat(3, 1fr);
    }

    @include phone-only {
      gap: 3.6rem;
    }
  }
</style>
