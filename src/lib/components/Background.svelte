<div class="background">
  <div class="blob small-blob blue-blob" />
  <div class="blob small-blob purple-blob" />
  <div class="blob green-blob" />
</div>

<style lang="scss">
  @use "../styles/utils.scss" as *;

  .background {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 144rem;
    margin-left: auto;
    margin-right: auto;

    @include phone-only {
      overflow: hidden;
    }
  }

  .blob {
    position: absolute;
    opacity: 0.75;
    filter: blur(7.5rem);
    border-radius: 50%;

    @include phone-only {
      opacity: 0.9;
      filter: blur(6rem);
    }
  }

  .small-blob {
    width: 50rem;
    height: 46rem;
    top: -30rem;

    @include phone-only {
      width: 30rem;
      height: 25rem;
      top: -15rem;
    }

    @include tablet-only {
      width: 40rem;
      height: 35rem;
      top: -20rem;
    }
  }

  .blue-blob {
    right: 10rem;
    background: var(--blob2);

    @include phone-only {
      right: -5rem;
    }

    @include tablet-only {
      right: 5rem;
    }
  }

  .purple-blob {
    left: 10rem;
    background: var(--blob3);

    @include phone-only {
      left: -5rem;
    }

    @include tablet-only {
      left: 5rem;
    }
  }

  .green-blob {
    width: 60rem;
    height: 60rem;
    left: 50%;
    margin-left: -34rem;
    top: -32rem;

    background: var(--blob1);

    display: flex;
    justify-content: center;

    @include phone-only {
      width: 20rem;
      height: 55rem;
      margin-left: -10rem;
      top: -35rem;
      opacity: 0.75;
    }

    @include tablet-only {
      width: 40rem;
      height: 50rem;
      margin-left: -20rem;
      top: -30rem;
    }
  }

  // animate the blobs in multiple directions, speeds, and sizes in bigger impacts with more steps
  @keyframes moveBlobGreen {
    0% {
      transform: translateY(0) scale(1);
    }
    25% {
      transform: translate(-3rem, 5rem) scale(0.9);
    }
    50% {
      transform: translate(2rem, -2rem) scale(1.3);
    }
    75% {
      transform: translate(5rem, 3rem) scale(1.1);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes moveBlobBlue {
    0% {
      transform: translateY(0) scale(1);
    }
    25% {
      transform: translate(-2rem, 2rem) scale(1.3);
    }
    50% {
      transform: translate(3rem, -5rem) scale(0.9);
    }
    75% {
      transform: translate(-5rem, -3rem) scale(1.1);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes moveBlobPurple {
    0% {
      transform: translateY(0) scale(1);
    }
    25% {
      transform: translate(3rem, 5rem) scale(1.1);
    }
    50% {
      transform: translate(2rem, -2rem) scale(1.3);
    }
    75% {
      transform: translate(-5rem, 3rem) scale(0.9);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  .blue-blob {
    animation: moveBlobBlue 2.5s infinite;
  }

  .purple-blob {
    animation: moveBlobPurple 3.5s infinite;
  }

  .green-blob {
    animation: moveBlobGreen 3s infinite;
  }
</style>
