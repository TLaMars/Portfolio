<script lang="ts">
  export let href: string;
  export let label: String;
  export let active = false;
</script>

<a {href} class:active>{label}</a>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  a {
    padding: 1.2rem 2.4rem;
    border-radius: 5rem;
    transition: background 0.3s;
    font-size: var(--font-size-s);

    @include phone-only {
      padding: 1rem 1.6rem;
      font-size: var(--font-size-xs);
    }

    &:hover {
      color: var(--foreground);
      background: var(--background-active);
    }

    &.active {
      background: var(--background-active);
    }
  }
</style>
