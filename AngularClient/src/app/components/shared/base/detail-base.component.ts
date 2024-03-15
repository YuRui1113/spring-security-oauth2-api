/**
 * File: src\app\components\shared\base\detail-base.component.ts
 * Project: AngularClient
 * Created Date: Monday, February 26th 2024, 3:22:35 pm
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

import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable()
export class DetailBaseComponent {
    
    hasError: boolean = false;
    errorMessage: string = '';

    @Input() isEdit = false;
    @Input() needCancel = true;
    @Input() title = '';

    @Output() onUpdate: EventEmitter<void> = new EventEmitter();
}