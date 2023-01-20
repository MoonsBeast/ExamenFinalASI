import { Character, Location } from "../types.ts";

export const LocationRes = {
    residents: (parent: Location) => {parent.residents.map((elem) => { elem as Character }); return parent.residents},
}