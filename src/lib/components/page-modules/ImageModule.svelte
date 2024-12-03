<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} />

<style lang="scss">
  @use "../../../lib/styles/utils.scss" as *;

  img {
    width: 100%;
    max-width: 90rem;
    margin-bottom: var(--content-page-gap);
    min-height: 60rem;

    @include phone-only {
      margin-bottom: var(--content-page-gap-mobile);
      min-height: auto;
    }
  }
</style>
