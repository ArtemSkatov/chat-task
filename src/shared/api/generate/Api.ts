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

import { MainLoginRequest, MainRegisterRequest } from "./data-contracts";
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
   * @response `200` `Record<string,string>` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `401` `Record<string,string>` Неверные данные
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  loginCreate = (input: MainLoginRequest, params: RequestParams = {}) =>
    this.request<Record<string, string>, Record<string, string>>({
      path: `/api/login`,
      method: "POST",
      body: input,
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
   * @response `200` `Record<string,number>` user_id
   * @response `401` `Record<string,string>` Неавторизованный доступ
   */
  profileList = (params: RequestParams = {}) =>
    this.request<Record<string, number>, Record<string, string>>({
      path: `/api/profile`,
      method: "GET",
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
   * @response `200` `Record<string,string>` access_token и refresh_token
   * @response `400` `Record<string,string>` Ошибка валидации
   * @response `500` `Record<string,string>` Ошибка сервера
   */
  registerCreate = (input: MainRegisterRequest, params: RequestParams = {}) =>
    this.request<Record<string, string>, Record<string, string>>({
      path: `/api/register`,
      method: "POST",
      body: input,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
