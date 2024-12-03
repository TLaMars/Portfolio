<script lang="ts">
  import InfoModule from "$lib/components/page-modules/InfoModule.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";

  const employer = "Triple | Part of Hypersolid";
</script>

<PageHeader marginSize="sub-page" title="About me" />

<InfoModule
  info={[
    {
      title: "Name",
      description: "Thomas Lamars"
    },
    {
      title: "Location",
      description: "Alkmaar, The Netherlands"
    },
    {
      title: "Employer",
      description: employer
    }
  ]}
/>

<section>
  <h3>Who am I?</h3>
  <p>
    I'm a frontend developer who loves building beautiful, easy-to-use apps and
    websites. I care about writing good code and enjoy working with clients to
    create the best solutions and user experiences.
  </p>
  <p>
    I'm really into React (Native), TypeScript, and Svelte—they're my go-to
    tools for building cool things. I'm always up for exploring new technologies
    and seeing what they can do. When I'm not coding, you'll probably find me
    traveling to new places, piecing together new LEGO creations, or getting
    lost in a great series.
  </p>
</section>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  section {
    max-width: var(--content-page-width);
    width: 100%;
    margin-bottom: var(--content-page-gap);

    h3 {
      margin-top: 0;
      font-size: var(--font-size-l);
    }

    @include phone-only {
      margin-bottom: var(--content-page-gap-mobile);
    }
  }
</style>
