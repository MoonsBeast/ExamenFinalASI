
export type Location = {
    id: string,
    name: string,
    type: string,
    dimension: string,
    residents: Array<Character>,
    created: string
}

export type Character = {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Location,
    location: Location,
    image: string,
    episode: Array<Episode>,
    created: string,
}

export type Episode = {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    characters: Array<Character>,
    created: string
}

export type DataChar = {
    data:{character: Character}
}

export type DataArr = {
    data: { charactersByIds: Array<Character> }
}

