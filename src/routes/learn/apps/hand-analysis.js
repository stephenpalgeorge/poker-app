export async function get({ request }) {
    const cookies = {};
    const cookieHeader = request.headers.get('cookie').split(';').map(c => c.trim());
    cookieHeader.forEach(c => {
        const partials = c.split('=');
        cookies[partials[0]] = partials[1];
    });

    if (cookies['hand'] && cookies['hand'].length > 0) {
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
    } else {
        // return an error
    }
}