/**
 * File: src\app\models\paginated-iitems-view.ts
 * Project: AngularClient
 * Created Date: Monday, February 26th 2024, 11:45:33 am
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

export interface PaginatedItemsView<T> {

    content: T[],
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    last: boolean,
    first: boolean,
    numberOfElements: number,
    empty: boolean
}