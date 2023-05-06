
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthInput {
    email: string;
    password: string;
}

export class Auth {
    accessToken: string;
}

export abstract class IQuery {
    abstract signIn(authInput: AuthInput): Nullable<Auth> | Promise<Nullable<Auth>>;

    abstract hello(): string | Promise<string>;

    abstract findOneUserByEmail(email: string): Nullable<User> | Promise<Nullable<User>>;

    abstract findOneUserById(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract signUp(authInput: AuthInput): Nullable<Auth> | Promise<Nullable<Auth>>;
}

export class User {
    id: number;
    email: string;
    password: string;
}

type Nullable<T> = T | null;
