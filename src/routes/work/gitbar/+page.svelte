<script>
  import PageHeader from "$lib/components/PageHeader.svelte";
</script>

<PageHeader title="Gitbar" marginSize="sub-page" />

<section class="work-info">
  <div>
    <h4>Timeline</h4>
    <p>2024</p>
  </div>
  <div>
    <h4>Role</h4>
    <p>Frontend Developer</p>
  </div>
  <div>
    <h4>Stack</h4>
    <p>ReactNative, TypeScript, Swift</p>
  </div>
</section>

<style lang="scss">
  @use "../../../lib/styles/utils.scss" as *;

  .work-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    max-width: 76rem;

    h4 {
      font-size: 1.8rem;
      margin: 0;
      color: var(--foreground-accent);
      font-family: var(--font-body);
    }

    p {
      font-size: 1.6rem;
      margin: 0;
      color: var(--foreground);
    }

    @include phone-only {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
</style>
