<script>
  import PageHeader from "$lib/components/PageHeader.svelte";
  import WorkCard from "$lib/components/WorkCard.svelte";
</script>

<svelte:head>
  <title>Thomas Lamars | FE Developer</title>
</svelte:head>

<PageHeader
  title="Hi, I'm <span style='color: var(--foreground-accent-secondary);'>Thomas!</span>"
  subtitle="A Frontend Developer @ <span style='color: var(--foreground-accent)'>Triple</span>"
/>

<div class="work-section">
  <WorkCard
    title="Gitbar"
    subtitle="Your new Mac PR tool"
    image="/images/gitbar.png"
    type="green"
  />
  <WorkCard
    title="Gitbar"
    subtitle="Your new Mac PR tool"
    image="/images/gitbar.png"
    type="blue"
  />
  <WorkCard
    title="Gitbar"
    subtitle="Your new Mac PR tool"
    image="/images/gitbar.png"
    type="blue"
    small={false}
  />
</div>

<style lang="scss">
  @use "../lib/styles/utils.scss" as *;
  .work-section {
    position: relative;
    max-width: 128rem;
    width: 100%;
    margin-bottom: 6.4rem;
    gap: 4.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @include tablet-and-smaller {
      flex-direction: column;
    }

    @include phone-only {
      gap: 3.6rem;
    }
  }
</style>
