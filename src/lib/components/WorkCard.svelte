<script lang="ts">
  import type { ImagePosition } from "$lib/models/work";
  import ArrowRight from "./svgs/ArrowRight.svelte";

  export let title: string;
  export let subtitle: string;
  export let image: string;
  export let imagePosition: ImagePosition = "fill";
  export let type: "blue" | "green" = "blue";
  export let slug: string;
</script>

<a
  class="card"
  class:green={type === "green"}
  class:blue={type === "blue"}
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

  <div class="fab" class:green={type === "green"} class:blue={type === "blue"}>
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
    width: calc(100% - 9.6rem);

    &:hover {
      color: var(--foreground);
    }

    &.green {
      background: var(--background-surface-1);
    }

    &.blue {
      background: var(--background-surface-2);
    }

    @include phone-only {
      height: 24rem;
      padding: 2.4rem 3.4rem;
      border-radius: 3.4rem;
    }
  }

  .subtitle {
    font-size: 1.4rem;
    margin: 0;
    text-align: right;

    @include phone-only {
      font-size: 1.2rem;
    }
  }

  .title {
    font-size: 3.2rem;
    margin-top: 0;
    margin-bottom: 3.2rem;
    text-align: right;

    @include phone-only {
      font-size: 2.4rem;
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
      background: var(--foreground-accent);
    }

    &.blue {
      background: var(--foreground-accent-secondary);
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
