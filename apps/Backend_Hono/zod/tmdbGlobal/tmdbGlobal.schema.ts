import { z } from "zod";


export const pageSchema = z.object({
    page: z.preprocess(
        (a) => (a == null ? undefined : parseInt(a as string, 10)),
        z.number().positive().optional().default(1)
    ),
});


export const IdSchema = z.object({
    id: z.coerce.number(),
});

export const includeAdultSchema = z.object({
    include_adult: z.boolean()
});