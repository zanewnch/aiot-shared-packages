/**
 * @fileoverview API 響應類型定義
 *
 * 定義前端 API 響應的標準格式介面，與後端 ResResult 保持一致。
 * 支援分頁功能和類型安全的響應處理。
 *
 * @author AIOT Development Team
 * @version 2.0.0
 * @since 2025-08-23
 */

import type { PaginationInfo } from './PaginationTypes.js';

/**
 * API 響應的標準格式介面
 * 對應後端 ResResult 的結構，支援分頁功能
 * 
 * @interface ApiResponseFormat
 * @template T 響應資料的類型，預設為 any
 * 
 * @example
 * ```typescript
 * // 一般 API 響應
 * const response: ApiResponseFormat<User[]> = {
 *   status: 200,
 *   message: '獲取成功',
 *   data: [user1, user2, user3]
 * };
 * 
 * // 分頁 API 響應
 * const paginatedResponse: ApiResponseFormat<User[]> = {
 *   status: 200,
 *   message: '分頁獲取成功',
 *   data: [user1, user2],
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
export interface ApiResponseFormat<T = any> {
    /** HTTP 狀態碼 */
    status: number;
    /** 響應訊息 */
    message: string;
    /** 響應資料（可選） */
    data?: T;
    /** 分頁資訊（可選，用於分頁查詢） */
    pagination?: PaginationInfo;
}