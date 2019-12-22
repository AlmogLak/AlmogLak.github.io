import { User } from "../models/user.model";
import { ObjectID } from "mongodb";

export interface UsersApi {
    create(item: User): Promise<void>;
    list(): Promise<User[]>;
    show(userId: ObjectID): Promise<User>;
    delete(userId: ObjectID): Promise<void>;
}
