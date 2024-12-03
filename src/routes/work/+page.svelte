<script lang="ts">
  import PageHeader from "$lib/components/PageHeader.svelte";
  import WorkCard from "$lib/components/WorkCard.svelte";
  import type { Work } from "$lib/models/work";

  export let data: {
    work: Work[];
  };
</script>

<svelte:head>
  <title>Thomas Lamars | Work</title>
</svelte:head>

<PageHeader title="My Work" subtitle="All the projects I've worked on" />

<div class="work-section">
  {#each data.work as { name, shortDescription, image, slug, imagePosition, variant }}
    <WorkCard
      title={name}
      subtitle={shortDescription}
      {imagePosition}
      {image}
      {variant}
      slug="work/{slug}"
    />
  {/each}
</div>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;
  .work-section {
    position: relative;
    max-width: var(--content-page-width-extra-large);
    width: 100%;
    margin-bottom: var(--content-page-gap);
    gap: 5.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include desktop-only {
      :global(*:nth-child(4n + 1)),
      :global(*:nth-child(4n + 4)) {
        grid-column: auto / span 2;
      }
    }

    @include tablet-and-smaller {
      grid-template-columns: repeat(1, 1fr);
    }

    @include phone-only {
      gap: 3.6rem;
    }
  }
</style>
