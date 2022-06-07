<script>
    export let id;
    export let options = [];
</script>

{#if options.length > 0}
    <div class="select">
        <label for="{id}">
            <slot></slot>
        </label>
        <div class="select-element">
            <select name="{id}" id="{id}">
                {#each options as option}
                    <option value="{option.value}">{option.label}</option>
                {/each}
            </select>
        </div>
    </div>
{/if}

<style lang="scss">
    @use '../../styles/variables' as var;

    :global {
      * + .select {
        margin-top: var.$scale--600;
      }
    }

    .select {
      font-family: var.$font--serif;

      label {
        font-weight: 900;
      }

      select {
        appearance: none;
        background-color: transparent;
        border: none;
        padding: var.$scale--200 var.$scale--400;
        width: 100%;
        margin: 0;
        font-family: var.$font--sans-serif;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;

        &:focus {
          outline: .25rem solid rgba(var.$clr--diamonds, .4);
          outline-offset: .125rem;
        }
      }

      &-element {
        position: relative;
        width: 100%;
        min-width: 15ch;
        max-width: 30ch;
        margin: var.$scale--200 0 0;
        border: .125rem solid var.$clr--spades;
        cursor: pointer;
        line-height: 1.1;
        background-color: #fff;

        &::after {
          position: absolute;
          right: var.$scale--400;
          top: 50%;
          transform: translateY(-75%) rotate(45deg);
          content: '';
          width: .75rem;
          height: .75rem;
          border: .25rem solid black;
          border-top-width: 0;
          border-left-width: 0;
        }
      }
    }
</style>