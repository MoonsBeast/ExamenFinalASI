import { Character, DataArr, DataChar } from "../types.ts";


export const Query = {
    character: async(
        _: unknown,
        args: {
            id: number,
        },
    ): Promise<Character | null> => {

        const  query = `
        query character($id: ID!) {
            character(id: $id) {
                id,
                name,
                status,
                species,
                type,
                gender,
                origin{
                    id,
                    name,
                    type,
                    dimension,
                    created
                },
                location{
                    id,
                    name,
                    type,
                    dimension,
                    created
                },
                image,
                episode{
                    id,
                    name,
                    air_date,
                    episode,
                    created
                },
                created
            }
        }
        `

        const variables = { id: args.id }

        const response = await fetch("https://rickandmortyapi.com/graphql", {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                query,
                variables
            }),
        })
        const data: DataChar = await response.json()

        return data.data.character as Character;
    },

    charactersByIds: async (
        _: unknown,
        args: {
            ids: Array<number>,
        }
    ): Promise<Character[] | null> => {

        const query = `
        query charactersByIds($ids: [ID!]!) {
            charactersByIds(ids: $ids) {
                id,
                name,
                status,
                species,
                type,
                gender,
                origin{
                    id,
                    name,
                    type,
                    dimension,
                    created
                },
                location{
                    id,
                    name,
                    type,
                    dimension,
                    created
                },
                image,
                episode{
                    id,
                    name,
                    air_date,
                    episode,
                    created
                },
                created
            }
        }
        `

        const variables = { ids: args.ids }

        const response = await fetch("https://rickandmortyapi.com/graphql", {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                query,
                variables
            }),
        })
        const data: DataArr = await response.json()

        return data.data.charactersByIds as Array<Character>;
    }
};