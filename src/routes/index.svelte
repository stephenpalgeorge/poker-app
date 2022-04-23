<script>
    import Card from "$lib/components/poker/Card.svelte";
    let title = "Poker";
    let description = "Learn poker.";
</script>

<svelte:head>
    <meta name="description" content="{description}" />
    <meta property="og:description" content="{description}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{description}" />
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<Card id="3-h" />