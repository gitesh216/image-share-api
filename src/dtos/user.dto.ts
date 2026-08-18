import { z } from "zod";

const userSchema = z.object({
    username: z.string().min(5).trim(),
    email: z.string().email(),
    role: z.enum(["user", "admin"]),
});

export type UserSignupDTO = z.infer<typeof userSchema>;

export default userSchema;
