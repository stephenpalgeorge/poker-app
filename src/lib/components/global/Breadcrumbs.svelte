<script>
    import {page} from "$app/stores";

    export let links = [];

    const defaultLinks = $page.url.pathname.split('/').map((label, i) => {
        const url = $page.url.pathname.split('/').slice(0, i + 1).join('/');
        return {label, url}
    });

    $: crumbs = links.length === 0 ? defaultLinks : links;
</script>

{#if crumbs.length > 2}
    <nav class="breadcrumbs" aria-label="breadcrumbs">
        <ul>
            {#each crumbs as link}
                {@const isCurrent = $page.url.pathname === link.url}
                {#if link.url !== ""}
                    <li>
                        <a class:current={isCurrent} aria-current={isCurrent ? "page" : null} href="{link.url}">
                            {link.label.replace(/\-/g, ' ')}
                        </a>
                    </li>
                {/if}
            {/each}
        </ul>
    </nav>
{/if}

<style lang="scss">
    @use '../../styles/variables' as var;

    .breadcrumbs {
      margin-bottom: var.$scale--900;

      ul {
        list-style-type: none;
        display: flex;

        li {
          text-transform: uppercase;
          font-family: var.$font--sans-serif;
          font-size: .9em;
          color: var.$clr--grey;

          + li {
            margin-left: var.$scale--400;
            &::before {
              content: '>';
              margin-right: var.$scale--400;
            }
          }

          a {
            color: inherit;
            &.current {
              font-weight: 900;
            }
          }
        }
      }
    }
</style>