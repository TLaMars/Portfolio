<script lang="ts">
  import type { PageModule } from "$lib/models/page-module";
  import ContentModule from "./page-modules/ContentModule.svelte";
  import ImageModule from "./page-modules/ImageModule.svelte";
  import InfoModule from "./page-modules/InfoModule.svelte";

  export let module: PageModule;
</script>

{#if module.moduleType === "ContentModule"}
  <ContentModule title={module.title} paragraphs={module.paragraphs} />
{:else if module.moduleType === "InfoModule"}
  <InfoModule info={module.info} />
{:else if module.moduleType === "ImageModule"}
  <ImageModule src={module.src} alt={module.alt} />
{/if}
