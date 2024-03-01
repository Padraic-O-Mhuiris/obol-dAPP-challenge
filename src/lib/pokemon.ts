import { z } from "zod";
import { NamedApiResourceSchema, fetch_json } from "./utils";
import { PokemonSpecies, fetchPokemonSpecies } from "./species";

const PokemonDataSchema = z.object({
    id: z.number().min(1).max(151),
    name: z.string(),
    base_experience: z.number().int().positive(),
    height: z
        .number()
        .int()
        .positive()
        .transform((x) => x / 10),
    is_default: z.boolean(),
    order: z.number().int(),
    weight: z
        .number()
        .int()
        .positive()
        .transform((x) => x / 10),
    sprites: z.object({
        front_default: z.string().url(),
        back_default: z.string().url(),
    }),
    cries: z.object({
        latest: z.string().url().endsWith(".ogg"),
        legacy: z.string().url().endsWith(".ogg"),
    }),
    species: NamedApiResourceSchema,
});

type PokemonData = z.infer<typeof PokemonDataSchema>;

export type Pokemon = Omit<PokemonData, "species"> & {
    species: PokemonSpecies;
};

const PokemonListSchema = z.object({
    results: z.array(z.object({ name: z.string(), url: z.string().url() })),
});

export async function collectPokemonData(): Promise<Pokemon[]> {
    const pokemonList = PokemonListSchema.parse(
        await fetch_json("https://pokeapi.co/api/v2/pokemon?limit=151"),
    );

    const pokemon: Pokemon[] = await Promise.all(
        pokemonList.results.map(async ({ url }) => {
            const pokemonData = PokemonDataSchema.parse(await fetch_json(url));

            const pokemonSpecies = await fetchPokemonSpecies(
                pokemonData.species,
            );

            return {
                ...pokemonData,
                species: {
                    ...pokemonSpecies,
                },
            };
        }),
    );

    return pokemon;
}
