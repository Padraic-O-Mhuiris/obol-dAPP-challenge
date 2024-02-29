import { z } from "zod";

export const NamedApiResourceSchema = z.object({
    name: z.string(),
    url: z.string().url(),
});

export type NamedApiResource = z.infer<typeof NamedApiResourceSchema>;

export async function fetch_json(url: string): Promise<string> {
    return await fetch(url).then((res) => res.json());
}
