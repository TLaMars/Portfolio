<script lang="ts">
  import type { ImagePosition } from "$lib/models/work";
  import ArrowRight from "./svgs/ArrowRight.svelte";

  export let title: string;
  export let subtitle: string;
  export let image: string;
  export let imagePosition: ImagePosition = "fill";
  export let variant: "blue" | "green" | "purple" = "blue";
  export let slug: string;
</script>

<a
  class="card"
  class:green={variant === "green"}
  class:blue={variant === "blue"}
  class:purple={variant === "purple"}
  href={slug}
>
  <p class="subtitle">{subtitle}</p>
  <h2 class="title">{title}</h2>
  <div class="image-holder">
    <img
      class="image"
      class:center={imagePosition === "center"}
      src={image}
      alt={title}
    />
  </div>

  <div
    class="fab"
    class:green={variant === "green"}
    class:blue={variant === "blue"}
    class:purple={variant === "purple"}
  >
    <ArrowRight />
  </div>
</a>

<style lang="scss">
  @use "../styles/utils.scss" as *;

  .card {
    position: relative;
    padding: 3.2rem 4.8rem;
    border-radius: 4.8rem;
    height: 38rem;
    overflow: hidden;

    &:hover {
      color: var(--foreground);
    }

    &.green {
      background: var(--background-surface-1);
    }

    &.blue {
      background: var(--background-surface-2);
    }

    &.purple {
      background: var(--background-surface-3);
    }

    @include phone-only {
      height: 30rem;
      padding: 2.4rem 3.4rem;
      border-radius: 3.4rem;
    }
  }

  .subtitle {
    font-size: var(--font-size-s);
    margin: 0;
    text-align: right;

    @include phone-only {
      font-size: var(--font-size-xs);
    }
  }

  .title {
    font-size: var(--font-size-xl);
    margin-top: 0;
    margin-bottom: 3.2rem;
    text-align: right;

    @include phone-only {
      font-size: var(--font-size-l);
      margin-bottom: 2.4rem;
    }
  }

  .image-holder {
    position: relative;
    width: 100%;
  }

  .image {
    &.center {
      width: 100%;
    }
  }

  .fab {
    position: absolute;
    right: 3.8rem;
    bottom: 3.8rem;
    border-radius: 50%;

    width: 6.4rem;
    height: 6.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &.green {
      background: var(--background-button-1);
    }

    &.blue {
      background: var(--background-button-2);
    }

    &.purple {
      background: var(--background-button-3);
    }

    @include phone-only {
      width: 4.8rem;
      height: 4.8rem;
      right: 2.4rem;
      bottom: 2.4rem;

      :global(svg) {
        width: 3.6rem;
        height: 3.6rem;
      }
    }
  }
</style>
