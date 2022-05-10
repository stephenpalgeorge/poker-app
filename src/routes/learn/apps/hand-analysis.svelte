<script>
    // component imports
    import Meta from "$lib/components/global/Meta.svelte";
    import CardArray from "$lib/components/poker/CardArray.svelte";
    import analysis from "$lib/_data/analysis.js";
    import Feature from "$lib/components/poker/Feature.svelte";

    const title = "Hand analysis";
    const description = "Your poker hand will be analysed by our API. See a breakdown of the contents and value of your hand.";

    export let data = {type: "", cards: []};
    const cardIds = [];
    data.cards.forEach(c => cardIds.push(`${c.value}-${c.suit}`));
    let handAnalysis = analysis[data.type];
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1 class="hidden">{title}</h1>

{#if data.type?.length > 0}
    <h2>{handAnalysis.title}</h2>
{/if}

{#if data.cards?.length > 0}
    <div id="hand-analysis__cards">
        <CardArray cards={cardIds} />
    </div>
{/if}

<p class="lead-text">{handAnalysis.description}</p>
<p>{handAnalysis.tie}</p>

<div id="hand-features">
    <h3 class="hidden">Hand features</h3>
    <p id="features">This hand contains:</p>
    {#each data.features as { type, value }}
        <Feature {type} {value} />
    {/each}
</div>

<pre><code>
    { JSON.stringify(data, null, 2) }
</code></pre>

<style lang="scss">
    @use '../../../lib/styles/variables' as var;

    :global {
      #hand-analysis__cards .card {
        pointer-events: none;
      }
    }

    p#features {
      font-size: var.$font-size--lead;
      font-family: var.$font--serif;
      font-weight: 900;
      margin-top: var.$scale--700;
    }
</style>