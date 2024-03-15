/**
 * File: src\app\services\base.service.ts
 * Project: AngularClient
 * Created Date: Monday, February 26th 2024, 11:04:56 am
 * Author: Rui Yu (yurui_113@hotmail.com)
 * -----
 * Last Modified: Friday, 15th March 2024 6:56:07 pm
 * Modified By: Rui Yu (yurui_113@hotmail.com>)
 * -----
 * Copyright (c) 2024 Rui Yu
 * -----
 * HISTORY:
 * Date                     	By       	Comments
 * -------------------------	---------	----------------------------------------------------------
 * Monday, February 26th 2024	Rui Yu		Initial version
 */

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpOptions } from '../models/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected serviceContext = '';

  constructor(protected http: HttpClient) {
  }

  protected setParams(params: { [key: string]: string }): HttpOptions {
    const options = {
      params: new HttpParams()
    };

    Object.keys(params).forEach((key) => {
      options.params = options.params.set(key, params[key]);
    });

    return options;
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('There was an error with the request:', error.error);
    } else if (error.status === 401 || error.status === 403) {
      return throwError('Unauthorized!');
    } else if (error.status === 404) {
      return throwError('Data does not exist, please refresh and try again!');
    } else if (error.status === 500) {
      return throwError(error.error.title + ' - ' + error.error.detail);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Return error code: ${error.status},Error: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something is wrong, please try again later.');
  }
}
