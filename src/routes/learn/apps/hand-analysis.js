export async function post({ request }) {
    const data = await request.formData();
    const hand = data.get('hand-list');
    if (hand) {
        let cards = hand.split(',');
        const url = `${import.meta.env.VITE_API_DOMAIN}/api/analysis`;
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
            console.log(data);
            return {
                body: { data: data.description }
            }
        }
    } else {
        // return an error
    }
}