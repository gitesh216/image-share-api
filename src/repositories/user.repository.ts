import { UserSignupDTO } from "../dtos/user.dto.js";
import { User } from "../schema/user-schema.js";

export async function createUser(user: UserSignupDTO) {
    const createdUser = await User.create(user);
    return createdUser;
}

export async function findUserByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
}

export async function findUserByUsername(username: string) {
    const user = await User.findOne({ username });
    return user;
}

export async function findUserById(id: string) {
    const user = await User.findById(id);
    return user;
}

export async function findAllUsers() {
    const users = await User.find();
    return users;
}
