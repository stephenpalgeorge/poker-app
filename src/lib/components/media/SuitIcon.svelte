<script lang="ts">
    export let key;
    export let size = 'md';
    export let color = undefined;

    const clubs_color = color || 'var(--clubs-color)';
    const diamonds_color = color || 'var(--diamonds-color)';
    const hearts_color = color || 'var(--hearts-color)';
    const spades_color = color || 'var(--spades-color)';
</script>

<div class="card-suit suit-icon {size}">
{#if key === 'c' || key === 'clubs'}
    <svg width="304px" height="367px" viewBox="0 0 304 367" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Clubs</title>
        <g id="clubs" fill="{clubs_color}">
            <g id="Group">
                <circle id="Oval" cx="82.5" cy="205.5" r="82.5"></circle>
                <circle id="Oval" cx="221.5" cy="205.5" r="82.5"></circle>
                <circle id="Oval" cx="152.5" cy="82.5" r="82.5"></circle>
            </g>
            <polygon id="Triangle" points="151.5 278 218 367 85 367"></polygon>
        </g>
    </svg>
{:else if key === 'd' || key === 'diamonds'}
    <svg width="318px" height="350px" viewBox="0 0 318 350" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Diamonds</title>
        <polygon fill="{diamonds_color}" transform="translate(158.707107, 174.727922) rotate(45.000000) translate(-158.707107, -174.727922) " points="35.2071068 51.2279221 270.893398 62.5416306 282.207107 298.227922 46.5208153 286.914214"></polygon>
    </svg>
{:else if key === 'h' || key === 'hearts'}
    <svg width="313px" height="323px" viewBox="0 0 313 323" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Hearts</title>
        <path fill="{hearts_color}" d="M265,316.653102 C314,294.838379 339,214.426395 271,129.132387 C203,43.8383791 157,0.838379092 156.732772,0.505245113 C157,0.838379092 113,39.8383791 44.5625939,128.857621 C-23.8748123,217.876863 -4.87481228,297.108168 44.5625939,316.473273 C85,330.838379 121.5302,315.610963 156.732772,270.167354 C189,316.653102 224,331.838379 265,316.653102 Z" id="hearts" transform="translate(156.351059, 161.419190) scale(1, -1) translate(-156.351059, -161.419190) "></path>
    </svg>
{:else if key === 's' || key === 'spades'}
    <svg width="333px" height="376px" viewBox="0 0 333 376" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Spades</title>
        <g id="spades" fill="{spades_color}">
            <path d="M274.574798,291.666866 C325.574798,277.666866 370.574798,183.666866 280.574798,118.666866 C190.574798,53.666866 184.574798,36.666866 166.30757,-2.84217094e-14 C162.397952,11.812209 145.916915,51.4857741 54.1373916,118.413377 C-37.6421313,185.340979 4.57479778,278.666866 54.1373916,291.500962 C103.699985,304.335058 131.104997,290.705425 166.30757,248.780753 C198.574798,291.666866 233.574798,300.666866 274.574798,291.666866 Z" id="Path-2"></path>
            <polygon id="Triangle" points="166.074798 286.666866 232.574798 375.666866 99.5747978 375.666866"></polygon>
        </g>
    </svg>
{:else}
    <svg width="313px" height="323px" viewBox="0 0 313 323" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Hearts</title>
        <path d="M265,316.653102 C314,294.838379 339,214.426395 271,129.132387 C203,43.8383791 157,0.838379092 156.732772,0.505245113 C157,0.838379092 113,39.8383791 44.5625939,128.857621 C-23.8748123,217.876863 -4.87481228,297.108168 44.5625939,316.473273 C85,330.838379 121.5302,315.610963 156.732772,270.167354 C189,316.653102 224,331.838379 265,316.653102 Z" id="hearts" fill="#b40d08" transform="translate(156.351059, 161.419190) scale(1, -1) translate(-156.351059, -161.419190) "></path>
    </svg>
{/if}
</div>

<style lang="scss">
    @use '../../styles/variables' as var;

    .suit-icon  {
        svg {
            width: 100%;
            height: auto;
        }

        &.xs { width: var.$scale--400; }
        &.sm { width: var.$scale--500; }
        &.md { width: var.$scale--700; }
        &.lg { width: var.$scale--800; }
        &.xl { width: var.$scale--900; }
    }

</style>