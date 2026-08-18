import { UserSignupDTO } from "../dtos/user.dto.js";
import { createUser } from "../repositories/user.repository.js";
import { User } from "../schema/user-schema.js";
import { notFound } from "../utils/api-error.js";

export async function getAllUsers() {
    const users = await User.find();
    if (!users) {
        throw notFound("Users not found");
    }
    return users;
}

export async function getUserById(id: string) {
    const user = await User.findById(id);
    if (!user) {
        throw notFound("User not found");
    }
    return user;
}

export async function userSignup(user: UserSignupDTO) {
    const createdUser = await createUser(user);
    if (!createdUser) {
        throw notFound("User not created");
    }
    return createdUser;
}
