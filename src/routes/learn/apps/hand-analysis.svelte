<script>
    import { goto } from "$app/navigation";
    // component imports
    import Meta from "$lib/components/global/Meta.svelte";
    import CardArray from "$lib/components/poker/CardArray.svelte";
    import analysis from "$lib/_data/analysis.js";
    import Feature from "$lib/components/poker/Feature.svelte";
    import HandRank from "$lib/components/poker/HandRank.svelte";

    const title = "Hand analysis";
    const description = "Your poker hand will be analysed by our API. See a breakdown of the contents and value of your hand.";

    export let data = {type: "", cards: [{value: '', suit: ''}]};
    const cardIds = [];
    let highlights = [];
    data.cards.forEach(c => cardIds.push(`${c.value}-${c.suit}`));
    let handAnalysis = analysis[data.type];

    function handleHighlight(e) {
        console.log(e);
        const type = e.detail.target.dataset.featureType;
        if (type && (type === 'straight' || type === 'flush')) {
            highlights = e.detail.value === 1 ? cardIds : [];
        } else {
            if (e.detail.value === 1) {
                // push every card that contains e.detail.key in its id
                // into the 'selection'.
                cardIds.forEach(c => {
                    if (c.indexOf(e.detail.key) > -1 && highlights.indexOf(c) === -1) {
                        highlights = [...highlights, c];
                    }
                });
            } else {
                highlights.forEach(h => {
                    const hasKey = h.indexOf(e.detail.key);
                    const index = highlights.indexOf(h);
                    if (hasKey > -1) {
                        highlights = [...highlights.slice(0, index), ...highlights.slice(index + 1)];
                    }
                });
            }
        }
    }
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
        <CardArray cards={cardIds} bind:selection={highlights} />
    </div>
{/if}

{#if handAnalysis.description}
    <p class="lead-text">{handAnalysis.description}</p>
{/if}

{#if handAnalysis.tie}
    <p>{handAnalysis.tie}</p>
{/if}

<div id="hand-features">
    <h3 class="hidden">Hand features</h3>
    <p id="features">This hand contains:</p>
    <ul id="feature-list" role="list">
        {#each data.features as { type, value }}
            <li>
                <Feature on:check={handleHighlight} {type} {value} />
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    @use '../../../lib/styles/variables' as var;

    :global {
      #hand-analysis__cards .card {
        pointer-events: none;
      }

      #main-content > .rank {
        top: var.$navigation-height * 2;
      }
    }

    p#features {
      font-size: var.$font-size--lead;
      font-family: var.$font--serif;
      font-weight: 900;
      margin-top: var.$scale--700;
      margin-bottom: var.$scale--200;
    }

    ul#feature-list {
      list-style-type: none;

      li:not(:first-of-type) {
        margin-top: var.$scale--200;
      }
    }
</style>