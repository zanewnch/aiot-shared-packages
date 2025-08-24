/**
 * @fileoverview 分頁相關類型定義
 *
 * 定義所有與分頁功能相關的類型介面，用於統一整個應用的分頁格式。
 *
 * @author AIOT Development Team
 * @version 1.0.0
 * @since 2025-08-23
 */

/**
 * 分頁資訊介面
 * 
 * 定義分頁查詢回應中的分頁元數據，包含頁面信息和導航狀態。
 * 
 * @interface PaginationInfo
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * const paginationInfo: PaginationInfo = {
 *   currentPage: 1,
 *   pageSize: 20,
 *   totalCount: 150,
 *   totalPages: 8,
 *   hasNext: true,
 *   hasPrevious: false
 * };
 * ```
 */
export interface PaginationInfo {
    /**
     * 當前頁數（從 1 開始）
     */
    currentPage: number;
    
    /**
     * 每頁數量
     */
    pageSize: number;
    
    /**
     * 總記錄數
     */
    totalCount: number;
    
    /**
     * 總頁數
     */
    totalPages: number;
    
    /**
     * 是否有下一頁
     */
    hasNext: boolean;
    
    /**
     * 是否有上一頁
     */
    hasPrevious: boolean;
}

/**
 * 分頁參數介面
 * 
 * 定義分頁查詢請求的參數結構。
 * 
 * @interface PaginationParams
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * const params: PaginationParams = {
 *   page: 1,
 *   pageSize: 20,
 *   sortBy: 'createdAt',
 *   sortOrder: 'DESC'
 * };
 * ```
 */
export interface PaginationParams {
    /**
     * 頁數（從 1 開始），預設為 1
     */
    page?: number;
    
    /**
     * 每頁數量，預設依各服務設定
     */
    pageSize?: number;
    
    /**
     * 偏移量（可選，通常由 page 和 pageSize 計算）
     */
    offset?: number;
    
    /**
     * 排序欄位（可選）
     */
    sortBy?: string;
    
    /**
     * 排序方向（可選）
     */
    sortOrder?: 'ASC' | 'DESC';
}

/**
 * 分頁回應介面
 * 
 * 定義統一的分頁查詢回應格式，包含資料和分頁資訊。
 * 
 * @interface PaginatedResponse
 * @template T 資料的類型
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * const response: PaginatedResponse<User> = {
 *   data: [...users],
 *   pagination: {
 *     currentPage: 1,
 *     pageSize: 20,
 *     totalCount: 150,
 *     totalPages: 8,
 *     hasNext: true,
 *     hasPrevious: false
 *   }
 * };
 * ```
 */
export interface PaginatedResponse<T> {
    /**
     * 回應資料陣列
     */
    data: T[];
    
    /**
     * 分頁資訊
     */
    pagination: PaginationInfo;
}

/**
 * 分頁查詢選項介面
 * 
 * 結合查詢條件和分頁參數的綜合選項。
 * 
 * @interface PaginatedQueryOptions
 * @template TFilter 過濾條件的類型
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * interface UserFilter {
 *   status?: string;
 *   role?: string;
 * }
 * 
 * const options: PaginatedQueryOptions<UserFilter> = {
 *   page: 1,
 *   pageSize: 20,
 *   sortBy: 'createdAt',
 *   sortOrder: 'DESC',
 *   filters: {
 *     status: 'active',
 *     role: 'user'
 *   }
 * };
 * ```
 */
export interface PaginatedQueryOptions<TFilter = any> extends PaginationParams {
    /**
     * 查詢過濾條件（可選）
     */
    filters?: TFilter;
    
    /**
     * 搜尋關鍵字（可選）
     */
    search?: string;
}