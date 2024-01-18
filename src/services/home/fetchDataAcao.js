export const fetchShooter = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=shooter');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchAvengers = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=Emancipation');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }


    return res
};

export const fetchFast = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=fast');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchSpider = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=spider+man');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchAllAcao = async () => {
    const data = [];

    const shooter = await fetchShooter();
    const spider = await fetchSpider();
    const avengers = await fetchAvengers();
    const fast = await fetchFast();

    data.push(spider, shooter, avengers, fast);

    return data;
};