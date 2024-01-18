export const fetchCastle = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=castle');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[0]
};

export const fetchMononoke = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=Princess%20Mononoke');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }


    return res.Search[0]
};

export const fetchKikis = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=kiki%27s');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[0]
};

export const fetchGhibli = async () => {
    const data = [];

    const kikis = await fetchKikis();
    const momonoke = await fetchMononoke();
    const castle = await fetchCastle();

    data.push(kikis, momonoke, castle);

    return data;
};