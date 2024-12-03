<footer>
  <p>© 2024 Thomas Lamars</p>
  <a href="https://www.linkedin.com/in/thomaslamars/">LinkedIn</a>
</footer>

<style lang="scss">
  @use "$lib/styles/utils.scss" as *;

  footer {
    margin-top: auto;
    max-width: var(--content-page-width-extra-large);
    width: 100%;
    padding: 2.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;

    @include tablet-and-smaller {
      padding: 1.6rem 0;

      flex-direction: column-reverse;
      gap: 0.8rem;
    }
  }
</style>
