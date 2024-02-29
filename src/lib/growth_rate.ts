import { z } from "zod";
import { NamedApiResource, NamedApiResourceSchema, fetch_json } from "./utils";

const PokemonGrowthRateSchema = z.object({
    name: z.string(),
    formula: z.string(),
    descriptions: z.array(z.object({ description: z.string() })),
    levels: z.array(
        z.object({ level: z.number().int(), experience: z.number().int() }),
    ),
    // pokemon_species: z.array(NamedApiResourceSchema),
});

export type PokemonGrowthRate = z.infer<typeof PokemonGrowthRateSchema>;

export async function fetchPokemonGrowthRate({
    url,
}: NamedApiResource): Promise<PokemonGrowthRate> {
    return PokemonGrowthRateSchema.parse(await fetch_json(url));
}
