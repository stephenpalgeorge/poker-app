<script>
    import { page } from "$app/stores";
    import { MainNav } from "../../_config/navigation.js";
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";

    let navigationVisible = false;

    function handleRouteChange() {
        navigationVisible = false;
        window.scrollTo(0, 0);
    }
</script>

<section id="top-bar">
    <nav id="main-nav">
        <a on:click={handleRouteChange} href="/">
            <SuitIcon key="s" size="xs" />
            <SuitIcon key="h" size="xs" />
            <SuitIcon key="d" size="xs" />
            <SuitIcon key="c" size="xs" />
        </a>
        <button on:click={() => navigationVisible = !navigationVisible} id="menu-toggle">menu</button>
        <ul class="{ navigationVisible ? 'in' : 'out' }">
            {#each MainNav as item}
                <li on:click={handleRouteChange}>
                    <a class:current={$page.url.pathname.includes(item.url)} href="{item.url}">
                        {item.label}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</section>

<style lang="scss">
    @use '../../styles/mixins' as m;
    @use '../../styles/variables' as var;

    #top-bar {
      $shadow: 0 .125rem .25rem .125rem rgba(var.$clr--dark, .16);

      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      max-width: 100vw;
      height: var.$navigation-height;
      box-shadow: $shadow;
      background-color: var.$clr--light;
      z-index: 1;

      @include m.break(var.$breakpoint-sm) {
        padding-inline: var.$scale--600;
      }

      nav#main-nav {
        @include m.container;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        > a {
          display: flex;
          @include m.link-focus(var.$clr--red);
        }

        #menu-toggle {
          display: none;
          @include m.break(var.$breakpoint-sm) {
            display: block;
          }
        }

        > ul {
          display: flex;
          list-style-type: none;

          li + li {
            margin-left: var.$scale--900;
          }
          a {
            font-family: var.$font--sans-serif;
            font-size: var.$font-size--base;
            font-weight: 400;
            text-transform: uppercase;
            text-decoration: none;
            color: var.$clr--dark;

            transition: color .2s ease-out, font-weight .2s ease-out;
            &:hover {
              color: var.$clr--red;
              text-decoration: underline;
            }

            @include m.link-focus(var.$clr--red);

            &:active,
            &.current {
              color: var.$clr--red;
              font-weight: 900;
            }
          }

          @include m.break(var.$breakpoint-sm) {
            position: absolute;
            top: var.$navigation-height;
            flex-direction: column;
            width: 100vw;
            background-color: var.$clr--light;
            box-shadow: $shadow;

            transition: left .3s ease-out, opacity .3s ease-out;
            &.in {
              left: 0 - var.$scale--600;
              opacity: 1;
            }

            &.out {
              left: 120%;
              opacity: 0;
            }

            li {
              width: 100%;
              padding-block: var.$scale--600;
              text-align: center;
              background-color: var.$clr--light;

              a {
                font-size: var.$scale--500;
              }
            }

            li + li {
              margin-left: 0;
            }
          }
        }
      }
    }

    :global {
      nav#main-nav > a .suit-icon + .suit-icon {
        margin-left: .262rem;
      }
    }
</style>