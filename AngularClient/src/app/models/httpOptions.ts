/**
 * File: src\app\models\httpOptions.ts
 * Project: AngularClient
 * Created Date: Monday, February 26th 2024, 11:07:57 am
 * Author: Rui Yu (yurui_113@hotmail.com)
 * -----
 * Last Modified: Wednesday, 13th March 2024 10:10:41 am
 * Modified By: Rui Yu (yurui_113@hotmail.com>)
 * -----
 * Copyright (c) 2024 Rui Yu
 * -----
 * HISTORY:
 * Date                     	By       	Comments
 * -------------------------	---------	----------------------------------------------------------
 * Monday, February 26th 2024	Rui Yu		Initial version
 */

import { HttpHeaders, HttpParams } from '@angular/common/http';

export class HttpOptions {
    
    constructor(
        public headers?: HttpHeaders,
        public params?: HttpParams) {
    }
}