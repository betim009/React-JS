export const fetchJujutso = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=kaisen');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res.Search[0]
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

    return res.Search[8]
};

export const fetchAll = async () => {
    const data  = [];

    const naruto = await fetchJujutso();
    const bleach = await fetchBleach();
    const onePiece = await fetchOnePiece();

    data.push( onePiece, naruto, bleach);

    return data;
};