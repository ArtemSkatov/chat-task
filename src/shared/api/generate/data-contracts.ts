/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MainLoginRequest {
  password: string;
  username: string;
}

export interface MainRegisterRequest {
  password: string;
  username: string;
}

export type LoginCreateData = Record<string, string>;

export type LoginCreateError = Record<string, string>;

export type LogoutCreateData = Record<string, string>;

export type LogoutCreateError = Record<string, string>;

export type ProfileListData = Record<string, number>;

export type ProfileListError = Record<string, string>;

export type RefreshCreateData = Record<string, number>;

export type RefreshCreateError = Record<string, string>;

export type RegisterCreateData = Record<string, string>;

export type RegisterCreateError = Record<string, string>;
