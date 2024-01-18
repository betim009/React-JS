export const fetchJujutso = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=kaisen');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchBleach = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=bleach');
    const res = await req.json()

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }


    return res
};

export const fetchOnePiece = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=one+piece');
    const res = await req.json()

    console.log(res);

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchBerserk = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&t=berserk');
    const res = await req.json()

    console.log(res);

    if (!res) {
        throw new Error('Failed to fetch', Error)
    }

    return res
};

export const fetchAll = async () => {
    const data = [];

    const onePiece = await fetchOnePiece();
    const berserk = await fetchBerserk();
    const jujutso = await fetchJujutso();
    const bleach = await fetchBleach();

    data.push(onePiece, berserk, jujutso, bleach);

    return data;
};