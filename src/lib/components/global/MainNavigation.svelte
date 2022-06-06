<script>
    import { page } from "$app/stores";
    import { MainNav } from "../../_config/navigation.js";
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";

    let navigationOpen = false;
    function handleRouteChange() {
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

        <input type="checkbox" name="main-menu-toggle" id="main-menu-toggle" bind:checked={navigationOpen} />
        <label for="main-menu-toggle">
            <p>Menu</p>
            <span id="menu-icon">
                <div></div><div></div>
            </span>
        </label>

        <ul>
            {#each MainNav as item}
                <li on:click={handleRouteChange}>
                    <a class:current={$page.url.pathname.includes(item.url)} aria-current={$page.url.pathname === item.url ? "page" : null} href="{item.url}">
                        {item.label}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</section>

<style lang="scss">
    @use 'sass:math';
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
        }

        input[type="checkbox"] {
          display: none;
          & + label {
            display: none;
          }
        }

        @include m.break(var.$breakpoint-sm) {
          input[type="checkbox"] {
            + label {
              display: flex;
              align-items: center;
              color: black;

              p {
                font-size: var.$scale--400;
                text-transform: uppercase;
              }

              span {
                $size: math.div(var.$navigation-height, 2);
                position: relative;
                display: block;
                margin-left: var.$scale--300;
                width: $size;
                height: $size;
                flex-shrink: 0;

                div {
                  position: absolute;
                  width: 90%;
                  height: 25%;
                  top: 12.5%;
                  left: 50%;
                  transform: translateX(-50%);
                  background-color: var.$clr--spades;
                  transition: transform .2s ease;

                  &:last-of-type {
                    top: unset;
                    bottom: 12.5%;
                  }
                }
              }
            }

            ~ ul {
              position: absolute;
              top: var.$navigation-height;
              left: 120%;
              flex-direction: column;
              width: 100vw;
              background-color: var.$clr--light;
              box-shadow: $shadow;
              opacity: 0;
              transition: left .25s ease-out, opacity .25s ease-out;

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

            &:checked {
              + label span div {
                top: 50%;
                transform: translate(-50%, -50%);
              }

              ~ ul {
                left: 0 - var.$scale--600;
                opacity: 1;
              }
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