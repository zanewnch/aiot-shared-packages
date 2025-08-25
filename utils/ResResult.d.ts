/**
 * @fileoverview 控制器結果類別
 *
 * 為所有控制器方法提供統一的 HTTP 回應結構，確保 API 回應的一致性。
 * 使用直接建構函式創建，讓開發者清楚知道使用的 HTTP 狀態碼。
 *
 * v2.0.0 更新：增加分頁支援，保持向後兼容。
 *
 * 簡單說：ResResult 處理預期情況，ErrorHandleMiddleware 處理意外情況。
 *
 * @author AIOT Development Team
 * @version 2.0.0
 * @since 2025-07-25
 */
import type { PaginationInfo } from '../types/PaginationTypes';
/**
 * 控制器結果類別
 *
 * @class ResResult
 * @description 為所有控制器層方法提供統一的 HTTP 回應結構
 * 包含 HTTP 狀態碼、訊息和資料，用於標準化 API 回應格式
 *
 * @template T - 資料的類型，預設為 any
 *
 * @example
 * ```typescript
 * // 一般成功回應 (200)
 * return ResResult.success('資料獲取成功', userData);
 *
 * // 分頁成功回應 (200) - 方法1：使用 successPaginated
 * return ResResult.successPaginated('用戶列表獲取成功', users, 1, 20, 150);
 *
 * // 分頁成功回應 (200) - 方法2：從 PaginatedResponse 創建
 * const paginatedData = await userService.getUsers(page, pageSize);
 * return ResResult.fromPaginatedResponse('用戶列表獲取成功', paginatedData);
 *
 * // 創建成功 (201)
 * return ResResult.created('用戶創建成功', newUser);
 *
 * // 客戶端錯誤 (400)
 * return ResResult.badRequest('請求參數無效');
 *
 * // 未授權 (401)
 * return ResResult.unauthorized('請先登入');
 *
 * // 禁止存取 (403)
 * return ResResult.forbidden('權限不足');
 *
 * // 找不到資源 (404)
 * return ResResult.notFound('用戶不存在');
 *
 * // 伺服器錯誤 (500)
 * return ResResult.internalError('內部伺服器錯誤');
 * ```
 */
export declare class ResResult<T = any> {
    /** HTTP 狀態碼 */
    status: number;
    /** 回應訊息 */
    message: string;
    /** 回應資料 */
    data?: T;
    /** 分頁資訊（可選，用於分頁查詢） */
    pagination?: PaginationInfo;
    /**
     * 建構函式
     *
     * @param status HTTP 狀態碼
     * @param message 回應訊息
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    constructor(status: number, message: string, data?: T, pagination?: PaginationInfo);
    /**
     * 創建成功回應（200 OK）
     *
     * @template T
     * @param message 成功訊息
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static success<T = any>(message: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建分頁成功回應（200 OK）- 專門用於分頁查詢
     *
     * @template T
     * @param message 成功訊息
     * @param data 分頁資料陣列
     * @param currentPage 當前頁數
     * @param pageSize 每頁數量
     * @param totalCount 總記錄數
     * @returns ResResult 實例
     */
    static successPaginated<T = any>(message: string, data: T[], currentPage: number, pageSize: number, totalCount: number): ResResult<T[]>;
    /**
     * 創建創建成功回應（201 Created）
     *
     * @template T
     * @param message 創建成功訊息
     * @param data 創建的資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static created<T = any>(message: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建錯誤請求回應（400 Bad Request）
     *
     * @param message 錯誤訊息
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static badRequest<T = any>(message: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建未授權回應（401 Unauthorized）
     *
     * @param message 未授權訊息，預設為 'Unauthorized'
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static unauthorized<T = any>(message?: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建禁止存取回應（403 Forbidden）
     *
     * @param message 禁止存取訊息，預設為 'Forbidden'
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static forbidden<T = any>(message?: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建找不到資源回應（404 Not Found）
     *
     * @param message 找不到資源訊息，預設為 'Not Found'
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static notFound<T = any>(message?: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建衝突回應（409 Conflict）
     *
     * @param message 衝突訊息
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static conflict<T = any>(message: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建伺服器錯誤回應（500 Internal Server Error）
     *
     * @param message 伺服器錯誤訊息，預設為 'Internal Server Error'
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static internalError<T = any>(message?: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 創建通用錯誤回應 - 向後相容方法
     *
     * @param status HTTP 狀態碼
     * @param message 錯誤訊息
     * @param data 回應資料（可選）
     * @param pagination 分頁資訊（可選）
     * @returns ResResult 實例
     */
    static error<T = any>(status: number, message: string, data?: T, pagination?: PaginationInfo): ResResult<T>;
    /**
     * 從 PaginatedResponse 創建分頁成功回應 - 便利方法
     *
     * @template T
     * @param message 成功訊息
     * @param paginatedResponse 分頁回應物件
     * @returns ResResult 實例
     */
    static fromPaginatedResponse<T = any>(message: string, paginatedResponse: {
        data: T[];
        pagination: PaginationInfo;
    }): ResResult<T[]>;
    /**
     * 檢查是否為分頁回應
     *
     * @returns 是否包含分頁資訊
     */
    isPaginated(): boolean;
    /**
     * 轉換為 JSON 物件
     *
     * @returns 包含 status, message, data 和可選 pagination 的物件
     */
    toJSON(): {
        status: number;
        message: string;
        data?: T;
        pagination?: PaginationInfo;
    };
}
