<script>
    import Meta from "$lib/components/global/Meta.svelte";
    import Grid from "$lib/components/content/Grid.svelte";
    import Card from "$lib/components/content/Card.svelte";

    const title = "Learn poker";
    const description = "Our collection of articles, apps and analysis tools will help you elevate your game, whatever your current level.";
    const cards = [
        {
            title: "Basic hand builder",
            body: "Learn the different hands in poker. Build your hand by selecting any five cards and our API will tell you what you’ve got.",
            url: "/learn/apps/basic-hand-builder",
        },
        {
            title: "Hold 'em hand builder",
            body: "Learn the different hands in poker. We’ll show you 5 random community cards - you chose any two cards for your hand and the API will calculate your outcome.",
            url: "/learn/apps/hold-em-hand-builder",
        },
        {
            title: "Hold 'em hand comparator",
            body: "Get comfortable with how different hands rank against each other. We’ll show you 5 random community cards - you chose any two cards for up to 9 different hands and the API will calculate the winner.",
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

<Grid>
    {#each cards as card}
        <Card {...card} />
    {/each}
</Grid>
