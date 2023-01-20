import { Character, Episode } from "../types.ts";

export const EpisodeRes = {
    characters: (parent: Episode) => {parent.characters.map((elem) => { elem as Character }); return parent.characters},
}