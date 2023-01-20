import { ApolloServer } from "apolloserver"
import { startStandaloneServer } from "apolloserver/standalone"
import {Query} from "./resolvers/query.ts";
import { CharacterRes } from "./resolvers/character.ts";
import {typeDefs} from "./schema.ts";
import { LocationRes } from "./resolvers/location.ts";
import { EpisodeRes } from "./resolvers/episode.ts";

const resolvers = {
    Query,
    Character: CharacterRes,
    Location: LocationRes,
    Episode: EpisodeRes
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8888 }
})

console.log(`Server running on: ${url}`);