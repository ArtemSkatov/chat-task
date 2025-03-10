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
  LoginCreateError,
  LogoutCreateData,
  LogoutCreateError,
  MainLoginRequest,
  MainRegisterRequest,
  ProfileListData,
  ProfileListError,
  RefreshCreateData,
  RefreshCreateError,
  RegisterCreateData,
  RegisterCreateError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Авторизует пользователя и возвращает токены
   *
   * @tags auth
   * @name LoginCreate
   * @summary Логин пользователя
   * @request POST:/api/login
   * @response `200` `LoginCreateData` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `401` `Record<string,string>` Неверные данные
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  loginCreate = (input: MainLoginRequest, params: RequestParams = {}) =>
    this.request<LoginCreateData, LoginCreateError>({
      path: `/api/login`,
      method: "POST",
      body: input,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Выход пользователя стирание refresh_token
   *
   * @tags auth
   * @name LogoutCreate
   * @summary Выход пользователя
   * @request POST:/api/logout
   * @response `200` `LogoutCreateData` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  logoutCreate = (params: RequestParams = {}) =>
    this.request<LogoutCreateData, LogoutCreateError>({
      path: `/api/logout`,
      method: "POST",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает информацию о текущем пользователе
   *
   * @tags user
   * @name ProfileList
   * @summary Получить профиль пользователя
   * @request GET:/api/profile
   * @secure
   * @response `200` `ProfileListData` user_id
   * @response `401` `Record<string,string>` Неавторизованный доступ
   */
  profileList = (params: RequestParams = {}) =>
    this.request<ProfileListData, ProfileListError>({
      path: `/api/profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Возвращает access_token
   *
   * @tags user
   * @name RefreshCreate
   * @summary Переиздать access_token
   * @request POST:/api/refresh
   * @secure
   * @response `200` `RefreshCreateData` user_id
   * @response `401` `Record<string,string>` Неавторизованный доступ
   */
  refreshCreate = (params: RequestParams = {}) =>
    this.request<RefreshCreateData, RefreshCreateError>({
      path: `/api/refresh`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Регистрирует нового пользователя и возвращает токены
   *
   * @tags auth
   * @name RegisterCreate
   * @summary Регистрация нового пользователя
   * @request POST:/api/register
   * @response `200` `RegisterCreateData` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  registerCreate = (input: MainRegisterRequest, params: RequestParams = {}) =>
    this.request<RegisterCreateData, RegisterCreateError>({
      path: `/api/register`,
      method: "POST",
      body: input,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
