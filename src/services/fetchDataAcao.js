export const fetchShooter = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=shooter');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[0]
};

export const fetchAvengers = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=avengers');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }


    return res.Search[1]
};

export const fetchFast = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=fast');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[0]
};

export const fetchAllAcao = async () => {
    const data  = [];

    const shooter = await fetchShooter();
    const avengers = await fetchAvengers();
    const fast = await fetchFast();

    data.push(shooter, avengers, fast);

    return data;
};