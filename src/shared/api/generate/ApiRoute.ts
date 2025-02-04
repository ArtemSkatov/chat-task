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

import {
  LoginCreateData,
  LogoutCreateData,
  MainLoginRequest,
  MainRegisterRequest,
  ProfileListData,
  RefreshCreateData,
  RegisterCreateData,
} from "./data-contracts";

export namespace Api {
  /**
   * @description Авторизует пользователя и возвращает токены
   * @tags auth
   * @name LoginCreate
   * @summary Логин пользователя
   * @request POST:/api/login
   * @response `200` `LoginCreateData` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `401` `Record<string,string>` Неверные данные
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  export namespace LoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MainLoginRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoginCreateData;
  }

  /**
   * @description Выход пользователя стирание refresh_token
   * @tags auth
   * @name LogoutCreate
   * @summary Выход пользователя
   * @request POST:/api/logout
   * @response `200` `LogoutCreateData` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  export namespace LogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LogoutCreateData;
  }

  /**
   * @description Возвращает информацию о текущем пользователе
   * @tags user
   * @name ProfileList
   * @summary Получить профиль пользователя
   * @request GET:/api/profile
   * @secure
   * @response `200` `ProfileListData` user_id
   * @response `401` `Record<string,string>` Неавторизованный доступ
   */
  export namespace ProfileList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProfileListData;
  }

  /**
   * @description Возвращает access_token
   * @tags user
   * @name RefreshCreate
   * @summary Переиздать access_token
   * @request POST:/api/refresh
   * @secure
   * @response `200` `RefreshCreateData` user_id
   * @response `401` `Record<string,string>` Неавторизованный доступ
   */
  export namespace RefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RefreshCreateData;
  }

  /**
   * @description Регистрирует нового пользователя и возвращает токены
   * @tags auth
   * @name RegisterCreate
   * @summary Регистрация нового пользователя
   * @request POST:/api/register
   * @response `200` `RegisterCreateData` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  export namespace RegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MainRegisterRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RegisterCreateData;
  }
}
