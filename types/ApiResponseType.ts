/**
 * @fileoverview API 響應類型定義
 *
 * 定義統一的 API 響應格式，確保前後端通訊的一致性。
 *
 * @author AIOT Development Team
 * @version 1.0.0
 * @since 2025-08-08
 */

/**
 * 標準 API 響應格式
 * 
 * @template T - 資料的類型，預設為 any
 */
export interface ApiResponseType<T = any> {
    /** HTTP 狀態碼 */
    status: number;
    /** 響應訊息 */
    message: string;
    /** 響應資料（可選） */
    data?: T;
}

/**
 * 分頁響應格式
 */
export interface PaginatedApiResponse<T = any> {
    /** HTTP 狀態碼 */
    status?: number;
    /** 響應訊息 */
    message?: string;
    /** 分頁資料 */
    data: T[];
    /** 分頁資訊 */
    pagination: {
        /** 目前頁數 */
        page: number;
        /** 每頁筆數 */
        limit: number;
        /** 總筆數 */
        total?: number;
        /** 總筆數 */
        totalItems?: number;
        /** 總頁數 */
        totalPages: number;
        /** 是否有下一頁 */
        hasNext?: boolean;
        /** 是否有上一頁 */
        hasPrev?: boolean;
    };
}

/**
 * 錯誤響應格式
 */
export interface ErrorResponse extends ApiResponseType {
    /** 錯誤代碼 */
    errorCode?: string;
    /** 詳細錯誤資訊（開發環境） */
    details?: any;
}

/**
 * 分頁參數
 */
export interface PaginationParams {
    /** 頁數，預設為 1 */
    page?: number;
    /** 每頁筆數，預設為 10 */
    limit?: number;
    /** 偏移量 */
    offset?: number;
    /** 排序欄位 */
    sortBy?: string;
    /** 排序順序 */
    sortOrder?: 'ASC' | 'DESC';
}

/**
 * 為了向後兼容，重新匯出 PaginatedResponse
 */
export type PaginatedResponse<T = any> = PaginatedApiResponse<T>;