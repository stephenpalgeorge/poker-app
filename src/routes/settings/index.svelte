<script>
    import {onMount} from "svelte";
    import Meta from "$lib/components/global/Meta.svelte";
    import Select from "$lib/components/content/Select.svelte";
    import {themeStore} from "$lib/stores/theme.js";

    const title = "Your settings";
    const description = "Configure the app to suit your style.";

    const themeOptions = [
        { value: 'light', label: 'Light Theme' },
        { value: 'dark', label: 'Dark Theme' },
        { value: 'black', label: 'Black Theme' },
    ];

    function changeTheme(e) {
        console.log(e);
        const theme = e.target.value;
        window.localStorage.setItem('theme', theme);
        themeStore.update(() => theme);
    }

    onMount(() => {
        if (window.localStorage.getItem('theme')) {
            themeStore.update(() => window.localStorage.getItem('theme'));
        }
    });
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1 class="hidden">Settings</h1>

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

<Select id="theme-select" options={themeOptions} onChange={changeTheme} bind:val={$themeStore}>
    Set your theme:
</Select>
