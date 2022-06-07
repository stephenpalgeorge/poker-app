<script>
    import {onMount} from "svelte";
    import MainNavigation from "$lib/components/global/MainNavigation.svelte";
    import {themeStore} from "$lib/stores/theme.js";

    let theme;
    onMount(() => {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        if (window.localStorage.getItem('theme')) theme = window.localStorage.getItem('theme');
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            theme = e.matches ? 'dark' : 'light';
            window.localStorage.setItem('theme', theme);
            $themeStore = theme;
        });
    });
</script>

<div class="theme--{$themeStore}">
    <div class="root">
        <MainNavigation />

        <main id="main-content">
            <slot></slot>
        </main>

        <footer></footer>
    </div>
</div>

<style lang="scss">
    @use '../lib/styles/mixins' as m;
    @use '../lib/styles/variables' as var;

    .root {
      @include m.theme {
          background-color: m.t(bg);
      }
    }

    .root main {
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
        text-transform: uppercase;
        &:not(.hidden) + * {
          margin-top: var.$scale--900;
        }
      }

      h2 {
        font-family: var.$font--serif;
        font-size: var.$scale--800;
        text-transform: capitalize;
        &:not(.hidden) + * {
          margin-top: var.$scale--600;
        }
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

        & + * {
          margin-top: var.$scale--400;
        }
      }

      .emphasis {
        font-style: italic;
      }

      .hidden {
        @include m.hidden;
      }

      a {
        color: var.$clr--red;
        transition: color .2s ease;
        &:hover {
          color: var.$clr--dark-red;
        }
      }
    }
</style>