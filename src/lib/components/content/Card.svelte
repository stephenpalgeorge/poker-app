<script>
    export let title;
    export let body;
    export let url;
</script>

<a class="card" href="{url}">
    <h3>{title}</h3>
    {#if body}
        <p>{body}</p>
    {/if}
</a>

<style lang="scss">
    @use '../../styles/variables' as var;

    .card {
      display: block;
      padding: var.$scale--500 var.$scale--600;
      border: .125rem solid var.$clr--dark;
      text-decoration: none !important;
      background-color: var(--bg);
      color: var.$clr--dark;

      transition: box-shadow .2s ease-out;
      &:hover,
      &:focus {
        outline: none;
        box-shadow: 0 0 0 .125rem var(--bg-offset), 0 0 0 .5rem var(--focus-outline);
      }

      h3 {
        padding-bottom: var.$scale--400;
        font-family: var.$font--serif;
        font-size: var.$font-size--lead;
        color: var(--highlight);
        border-bottom: .125rem solid currentColor;

        + * {
          margin-top: var.$scale--500;
        }
      }

      p {
        font-family: var.$font--sans-serif;
        font-size: var.$font-size--base;
      }
    }
</style>