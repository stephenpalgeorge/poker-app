<script>
    import { page } from "$app/stores";
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";
</script>

<section id="top-bar">
    <nav id="main-nav">
        <a href="/">
            <SuitIcon key="s" size="xs" />
            <SuitIcon key="h" size="xs" />
            <SuitIcon key="d" size="xs" />
            <SuitIcon key="c" size="xs" />
        </a>
        <ul>
            <li><a class:current={$page.url.pathname.includes('/learn')} href="/learn">Learn</a></li>
            <li><a class:current={$page.url.pathname.includes('/about')} href="/about">About</a></li>
            <li><a class:current={$page.url.pathname.includes('/contact')} href="/contact">Contact</a></li>
        </ul>
    </nav>
</section>

<style lang="scss">
    @use '../../styles/mixins' as m;
    @use '../../styles/variables' as var;

    #top-bar {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: var.$navigation-height;
      box-shadow: 0 .125rem .25rem .125rem rgba(var.$clr--dark, .16);
      background-color: var.$clr--light;

      nav#main-nav {
        @include m.container;
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

            transition: color .2s ease-out;
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
      }
    }

    :global {
      nav#main-nav > a .suit-icon + .suit-icon {
        margin-left: .262rem;
      }
    }
</style>