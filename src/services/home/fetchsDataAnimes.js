export const fetchNaruto = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=naruto');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[8]
};

export const fetchBleach = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=bleach');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }


    return res.Search[6]
};

export const fetchOnePiece = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=piece');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[2]
};

export const fetchAll = async () => {
    const data  = [];

    const naruto = await fetchNaruto();
    const bleach = await fetchBleach();
    const onePiece = await fetchOnePiece();

    data.push(naruto, bleach, onePiece);

    return data;
};