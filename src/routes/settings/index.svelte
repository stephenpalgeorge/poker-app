<script>
    import Meta from "$lib/components/global/Meta.svelte";
    import Select from "$lib/components/content/Select.svelte";

    const title = "Your settings";
    const description = "Configure the app to suit your style.";

    const themeOptions = [
        { value: 'light', label: 'Light Theme' },
        { value: 'dark', label: 'Dark Theme' },
        { value: 'black', label: 'Black Theme' },
    ];
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1>Settings</h1>

<div class="settings-section">
    <h2>Appearance</h2>
    <p class="lead-text">
        Configure the look and feel of the app to make it work best for you.
    </p>
    <p class="emphasis">
        The options below allow you change the way the app is presented to you, and configure some of
        the core visual elements to your liking.
    </p>
</div>
<Select id="theme-select" options={themeOptions}>
    Set your theme:
</Select>
