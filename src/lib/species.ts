import { z } from "zod";
import { NamedApiResource, NamedApiResourceSchema, fetch_json } from "./utils";
import { PokemonGrowthRate, fetchPokemonGrowthRate } from "./growth_rate";

export const PokemonSpeciesSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
    gender_rate: z.number().transform((n) => {
        if (n == -1) {
            return 0;
        } else {
            return (n / 8) * 100;
        }
    }),
    order: z.number().int(),
    capture_rate: z
        .number()
        .int()
        .positive()
        .max(255)
        .transform((n) => (n / 255) * 100),
    base_happiness: z
        .number()
        .int()
        .positive()
        .max(255)
        .transform((n) => (n / 255) * 100),
    is_baby: z.boolean(),
    is_legendary: z.boolean(),
    is_mythical: z.boolean(),
    hatch_counter: z
        .number()
        .positive()
        .transform((hc) => 255 * hc + 1),
    has_gender_differences: z.boolean(),
    forms_switchable: z.boolean(),
    growth_rate: NamedApiResourceSchema,
    color: z.object({
        name: z.string(),
    }),
});

type PokemonSpeciesData = z.infer<typeof PokemonSpeciesSchema>;

export type PokemonSpecies = Omit<PokemonSpeciesData, "growth_rate"> & {
    growth_rate: PokemonGrowthRate;
};

export async function fetchPokemonSpecies({
    url,
}: NamedApiResource): Promise<PokemonSpecies> {
    const pokemonSpeciesData = PokemonSpeciesSchema.parse(
        await fetch_json(url),
    );

    const pokemonGrowthRate = await fetchPokemonGrowthRate(
        pokemonSpeciesData.growth_rate,
    );

    return { ...pokemonSpeciesData, growth_rate: pokemonGrowthRate };
}
