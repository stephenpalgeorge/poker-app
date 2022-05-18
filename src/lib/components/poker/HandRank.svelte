<script>
    import data from '$lib/_data/hand-rank.js';

    export let highlight;
</script>

<div class="rank">
    <h3 class="hidden">Hand rank</h3>
    <ul class="rank-list">
        {#each Object.entries(data) as [type, value]}
            <li class:highlight={type === highlight} id="hand-rank--{type}" class:highlighted={type === highlight}>{value}</li>
        {/each}
    </ul>
</div>

<style lang="scss">
    @use '../../styles/variables' as var;

    .rank {
      font-family: var.$font--sans-serif;
      font-size: .9em;

      ul {
        list-style-type: none;
        li + li {
          margin-top: var.$scale--400;
        }

        li.highlight {
          font-weight: 900;
          font-size: var.$scale--400;
          text-transform: uppercase;
          color: var.$clr--red;
        }
      }
    }
</style>
