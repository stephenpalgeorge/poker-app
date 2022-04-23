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
      padding: var.$scale--700 var.$scale--800;
      border: .125rem solid var.$clr--dark;
      text-decoration: none !important;
      color: var.$clr--dark;

      transition: box-shadow .2s ease-out;
      &:hover {
        box-shadow: 0 0 0 .125rem var.$clr--light, 0 0 0 .5rem rgba(var.$clr--red, .24);
      }

      h3 {
        font-family: var.$font--serif;
        font-size: var.$font-size--lead;
        color: var.$clr--red;
        width: max-content;
        border-bottom: .125rem solid currentColor;
        &::after {
            content: '\000BB';
            margin-left: var.$scale--700;
        }

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