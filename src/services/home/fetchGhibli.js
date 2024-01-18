export const fetchCastle = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=castle+in+the');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchMononoke = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=Princess%20Mononoke');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }


    return res
};

export const fetchKikis = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=kiki%27s');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const theBoy = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=The%20Boy%20and%20the%20Heron');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchGhibli = async () => {
    const data = [];

    const kikis = await fetchKikis();
    const totoro = await theBoy();
    const momonoke = await fetchMononoke();
    const castle = await fetchCastle();

    data.push(kikis, totoro, momonoke, castle);

    return data;
};