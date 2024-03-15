/**
 * File: src\app\enums\routes-enum.ts
 * Project: AngularClient
 * Created Date: Monday, February 26th 2024, 10:59:37 am
 * Author: Rui Yu (yurui_113@hotmail.com)
 * -----
 * Last Modified: Wednesday, 13th March 2024 3:56:54 pm
 * Modified By: Rui Yu (yurui_113@hotmail.com>)
 * -----
 * Copyright (c) 2024 Rui Yu
 * -----
 * HISTORY:
 * Date                     	By       	Comments
 * -------------------------	---------	----------------------------------------------------------
 * Monday, February 26th 2024	Rui Yu		Initial version
 */

export enum RouteEnum {

    LOGIN = 'login',
    LOGOUT = 'logout',
    LOGIN_CALLBACK = 'login-callback',
    LOGOUT_CALLBACK = 'logout-callback',
    SILENT_CALLBACK = 'silent-callback',
    NOT_AUTHORIZED = 'unauthorized',
    BOOK_LIST = 'book/list',
}