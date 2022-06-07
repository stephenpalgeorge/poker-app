<script>
    export let title;
    export let description;
</script>

<!-- @todo fix this - currently meta tags aren't being updated on page change -->
<meta name="description" content={description} />
<meta property="og:description" content={description} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<title>{title}</title>