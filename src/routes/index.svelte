<script>
    import Meta from "$lib/components/global/Meta.svelte";
    import Card from "$lib/components/poker/Card.svelte";

    let title = "Poker";
    let description = "Learn poker.";
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1 class="hidden">{title}</h1>
<Card id="3-h" />