import { Character, Episode, Location } from "../types.ts";

export const CharacterRes = {
    origin: (parent: Character) => parent.origin as Location,
    location: (parent: Character) => parent.location as Location,
    episode: (parent: Character) => { parent.episode.map((elem) => {elem as Episode}); return parent.episode},
}