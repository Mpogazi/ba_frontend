import { Deserializable } from './deserializable.model';
export enum Role {
    User = 'User',
    Admin = 'Admin'
}

export class User implements Deserializable {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}