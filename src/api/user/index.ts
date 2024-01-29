import { apiClient } from "../apiClient";
import { User } from "./user.interface";

export const postUser = (user: Partial<User>) => {
    return apiClient.post('/user', user);
}