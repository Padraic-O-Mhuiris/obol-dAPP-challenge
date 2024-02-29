import { Values } from "zod";
import { z } from "zod";
import { createTRPCNext } from "@trpc/next";
import { ssrPrepass } from "@trpc/next/ssrPrepass";
import { NamedApiResourceSchema, fetch_json } from "./utils";
import { PokemonSpecies, fetchPokemonSpecies } from "./species";

const pokemonNames = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr-mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew",
] as const;

const PokemonNameSchema = z.enum(pokemonNames);

type PokemonName = z.infer<typeof PokemonNameSchema>;

function pokemonUrl<P extends PokemonName>(
    p: P,
): `https://pokeapi.co/api/v2/pokemon/${P}/` {
    return `https://pokeapi.co/api/v2/pokemon/${p}/`;
}

// TODO Change pokemon name schema to call the api directly
// e.g use https://pokeapi.co/api/v2/pokemon?limit=151

const PokemonDataSchema = z.object({
    id: z.number().min(1).max(151),
    name: PokemonNameSchema,
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

export async function collectPokemonData(): Promise<Pokemon[]> {
    return await Promise.all(
        pokemonNames.map(async (n) => {
            const pokemonData = PokemonDataSchema.parse(
                await fetch_json(pokemonUrl(n)),
            );

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
}
