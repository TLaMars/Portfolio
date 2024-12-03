<script lang="ts">
  import NavLink from "./NavLink.svelte";

  // get the current route
  import { page } from "$app/stores";

  // get the current route

  $: activePath = $page.url.pathname;
</script>

<nav>
  <NavLink href="/" label="Home" active={activePath === "/"} />
  <NavLink href="/work" label="Work" active={activePath === "/work"} />
</nav>

<style lang="scss">
  @use "../styles/utils.scss" as *;

  nav {
    position: fixed;
    margin-top: 1.6rem;
    display: flex;
    background: var(--background-opaque);
    padding: 0.4rem;
    border-radius: 5rem;
    backdrop-filter: blur(1.4rem);
    gap: 0.4rem;
    z-index: 1;
  }
</style>
