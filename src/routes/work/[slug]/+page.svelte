<script lang="ts">
  import ModuleRenderer from "$lib/components/ModuleRenderer.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import type { Work } from "$lib/models/work";

  export let data: Work;
</script>

<PageHeader title={data.name} marginSize="sub-page" />

{#each data.modules as module}
  <ModuleRenderer {module} />
{/each}
