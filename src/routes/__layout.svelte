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
      @include m.container;
      padding-top: var.$navigation-height + var.$scale--900;
    }

    :global {
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      h1 {
        font-family: var.$font--serif;
        font-size: var.$scale--900;
        + * {
          margin-top: var.$scale--900;
        }
      }

      p {
        line-height: 1.8;
      }

      .lead-text {
        font-size: var.$font-size--lead;
        font-family: var.$font--sans-serif;
      }

      .hidden {
        @include m.hidden;
      }
    }
</style>