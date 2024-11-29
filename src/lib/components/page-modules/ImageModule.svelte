<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} />

<style lang="scss">
  img {
    width: 100%;
    max-width: 90rem;
    margin: 9.2rem 0;
  }
</style>
