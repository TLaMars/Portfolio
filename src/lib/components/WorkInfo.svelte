<script lang="ts">
  export let timeline: string;
  export let type: string;
  export let productURL: string;
  export let productLabel: string;
</script>

<section class="work-info">
  <div>
    <h4>Timeline</h4>
    <p>{timeline}</p>
  </div>
  <div>
    <h4>Type</h4>
    <p>{type}</p>
  </div>
  <div>
    <h4>Product</h4>
    <a href={productURL} target="_blank">{productLabel}</a>
  </div>
</section>

<style lang="scss">
  @use "../../lib/styles/utils.scss" as *;

  .work-info {
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
