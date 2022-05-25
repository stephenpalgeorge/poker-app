<script>
    import Meta from "$lib/components/global/Meta.svelte";
    import Grid from "$lib/components/content/Grid.svelte";
    import Card from "$lib/components/content/Card.svelte";

    const title = "Learn poker";
    const description = "Our collection of articles, apps and analysis tools will help you elevate your game, whatever your current level.";
    const cards = [
        {
            title: "Basic hand builder",
            body: "Select a hand of any 5 cards and see a basic analysis",
            url: "/learn/apps/basic-hand-builder",
        },
        {
            title: "Hold 'em hand builder",
            body: "Select your cards + the community cards and see a basic analysis of the best hand available.",
            url: "/learn/apps/hold-em-hand-builder",
        },
        {
            title: "Hold 'em hand comparator",
            body: "Build several hands and see an analysis of who would win, and why.",
            url: "/learn/apps/hold-em-hand-comparator",
        }
    ];
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1>Learn Poker</h1>
<p class="lead-text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum
    enim esse eveniet fugiat ipsum magnam nam non nostrum placeat quas quidem
    quis quod repudiandae, sequi tenetur voluptatum? Aliquam, modi?
</p>

<Grid title="Beginner tools.">
    <p class="lead-text" slot="description">
        Some of our most popular apps are listed below, but you can <a href="/learn/apps">browse all of them here.</a>
    </p>
    {#each cards as card}
        <Card {...card} />
    {/each}
</Grid>
