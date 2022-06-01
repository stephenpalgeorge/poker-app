export async function get({ request }) {
    const cookies = {};
    const cookieHeader = request.headers.get('cookie').split(';').map(c => c.trim());
    cookieHeader.forEach(c => {
        const partials = c.split('=');
        cookies[partials[0]] = partials[1];
    });

    // if there's a "hand" cookie this should contain the cards from a previous
    // analysis, so we perform the API call again with the same cards.
    if (cookies['hand'] && cookies['hand'].length > 0) {
        // the cookie is encoded, so there are no commas, but rather the `%2C` instead.
        let cards = cookies['hand'].split('%2C');
        const url = `${import.meta.env.VITE_API_DOMAIN}/api/hands/analysis`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                hand: cards,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return {
                body: { data: data.description },
            }
        }
        // @todo implement error handling here
    }
}

export async function post({ request }) {
    const data = await request.formData();
    const hand = data.get('hand-list');
    if (hand) {
        let cards = hand.split(',');
        const url = `${import.meta.env.VITE_API_DOMAIN}/api/hands/analysis`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                hand: cards,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return {
                headers: {'set-cookie': `hand=${hand}`},
                body: { data: data.description },
            }
        }
        // @todo implement error handling here
    } else {
        // @todo return an error
    }
}