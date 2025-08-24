/**
 * @fileoverview 控制器結果類別
 *
 * 為所有控制器方法提供統一的 HTTP 回應結構，確保 API 回應的一致性。
 * 使用直接建構函式創建，讓開發者清楚知道使用的 HTTP 狀態碼。
 *
 * 簡單說：ControllerResult 處理預期情況，ErrorHandleMiddleware 處理意外情況。
 *
 * @author AIOT Development Team
 * @version 1.0.0
 * @since 2025-07-25
 */
/**
 * 控制器結果類別
 *
 * @class ControllerResult
 * @description 為所有控制器層方法提供統一的 HTTP 回應結構
 * 包含 HTTP 狀態碼、訊息和資料，用於標準化 API 回應格式
 *
 * @template T - 資料的類型，預設為 any
 *
 * @example
 * ```typescript
 * // 成功回應 (200)
 * return new ControllerResult(200, '資料獲取成功', userData);
 *
 * // 創建成功 (201)
 * return new ControllerResult(201, '用戶創建成功', newUser);
 *
 * // 客戶端錯誤 (400)
 * return new ControllerResult(400, '請求參數無效');
 *
 * // 未授權 (401)
 * return new ControllerResult(401, '請先登入');
 *
 * // 禁止存取 (403)
 * return new ControllerResult(403, '權限不足');
 *
 * // 找不到資源 (404)
 * return new ControllerResult(404, '用戶不存在');
 *
 * // 伺服器錯誤 (500)
 * return new ControllerResult(500, '內部伺服器錯誤');
 * ```
 */
export class ControllerResult {
    /**
     * 建構函式
     *
     * @param status HTTP 狀態碼
     * @param message 回應訊息
     * @param data 回應資料（可選）
     */
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    /**
     * 創建成功回應（200 OK）
     *
     * @template T
     * @param message 成功訊息
     * @param data 回應資料（可選）
     * @returns ControllerResult 實例
     */
    static success(message, data) {
        return new ControllerResult(200, message, data);
    }
    /**
     * 創建創建成功回應（201 Created）
     *
     * @template T
     * @param message 創建成功訊息
     * @param data 創建的資料（可選）
     * @returns ControllerResult 實例
     */
    static created(message, data) {
        return new ControllerResult(201, message, data);
    }
    /**
     * 創建錯誤請求回應（400 Bad Request）
     *
     * @param message 錯誤訊息
     * @returns ControllerResult 實例
     */
    static badRequest(message) {
        return new ControllerResult(400, message);
    }
    /**
     * 創建未授權回應（401 Unauthorized）
     *
     * @param message 未授權訊息，預設為 'Unauthorized'
     * @returns ControllerResult 實例
     */
    static unauthorized(message = 'Unauthorized') {
        return new ControllerResult(401, message);
    }
    /**
     * 創建禁止存取回應（403 Forbidden）
     *
     * @param message 禁止存取訊息，預設為 'Forbidden'
     * @returns ControllerResult 實例
     */
    static forbidden(message = 'Forbidden') {
        return new ControllerResult(403, message);
    }
    /**
     * 創建找不到資源回應（404 Not Found）
     *
     * @param message 找不到資源訊息，預設為 'Not Found'
     * @returns ControllerResult 實例
     */
    static notFound(message = 'Not Found') {
        return new ControllerResult(404, message);
    }
    /**
     * 創建衝突回應（409 Conflict）
     *
     * @param message 衝突訊息
     * @returns ControllerResult 實例
     */
    static conflict(message) {
        return new ControllerResult(409, message);
    }
    /**
     * 創建伺服器錯誤回應（500 Internal Server Error）
     *
     * @param message 伺服器錯誤訊息，預設為 'Internal Server Error'
     * @returns ControllerResult 實例
     */
    static internalError(message = 'Internal Server Error') {
        return new ControllerResult(500, message);
    }
    /**
     * 轉換為 JSON 物件
     *
     * @returns 包含 status, message 和 data 的物件
     */
    toJSON() {
        const result = {
            status: this.status,
            message: this.message
        };
        if (this.data !== undefined) {
            result.data = this.data;
        }
        return result;
    }
}
