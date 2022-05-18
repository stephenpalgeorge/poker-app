<script>
    import MainNavigation from "$lib/components/global/MainNavigation.svelte";
</script>

<div class="site-container">
    <MainNavigation />

    <main id="main-content">
        <slot></slot>
    </main>

    <footer></footer>
</div>

<style lang="scss">
    @use '../lib/styles/mixins' as m;
    @use '../lib/styles/variables' as var;

    .site-container main {
      position: relative;
      @include m.container;
      padding-block: var.$navigation-height * 2;
      @include m.break(var.$breakpoint-md) {
        padding-inline: var.$scale--600;
      }
    }

    :global {
      ::selection {
        background-color: rgba(var.$clr--red, .8);
        color: var.$clr--light;
      }

      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      h1 {
        font-family: var.$font--serif;
        font-size: var.$scale--900;
        &:not(.hidden) + * {
          margin-top: var.$scale--900;
        }
      }

      h2 {
        font-family: var.$font--serif;
        font-size: var.$scale--800;
        text-transform: capitalize;
      }

      p {
        line-height: 1.8;
        font-family: var.$font--sans-serif;
        width: 100%;
        max-width: 70ch;
      }

      .lead-text {
        line-height: 1.5;
        font-size: var.$font-size--lead;
        font-family: var.$font--sans-serif;
        width: 100%;
        max-width: 50ch;

        & + * {
          margin-top: var.$scale--400;
        }
      }

      .hidden {
        @include m.hidden;
      }
    }
</style>