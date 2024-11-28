<script lang="ts">
  import PageHeader from "$lib/components/PageHeader.svelte";
  import WorkInfo from "$lib/components/WorkInfo.svelte";
  import type { Work } from "$lib/models/work";

  export let data: Work;
</script>

<PageHeader title={data.name} marginSize="sub-page" />

<WorkInfo
  timeline={data.timeline}
  type={data.type}
  productLabel={data.projectUrlLabel}
  productURL={data.projectUrl}
/>

<img src={data.image} alt={data.name} />

<section class="summary">
  <h2>Summary</h2>
  {#each data.summary.paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}
</section>

<style lang="scss">
  @use "../../../lib/styles/utils.scss" as *;

  img {
    width: 100%;
    max-width: 90rem;
    margin: 9.2rem 0;
  }

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
