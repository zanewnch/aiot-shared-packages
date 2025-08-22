/**
 * @fileoverview JWT 黑名單服務
 *
 * 此服務用於管理已登出或失效的 JWT token，確保登出後的 token 無法被重複使用
 * 使用 Redis 作為存儲機制，支持 token 自動過期
 *
 * @author AIOT Team
 * @version 1.0.0
 * @since 2025-08-16
 */
export interface Logger {
    info(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
    debug(message: string, ...args: any[]): void;
}
/**
 * JWT 黑名單管理服務
 *
 * 負責管理已失效的 JWT token，防止登出後的 token 被重複使用
 */
export declare class JwtBlacklistService {
    private redisClient;
    private readonly keyPrefix;
    private logger;
    constructor(logger: Logger);
    /**
     * 設置 Redis 連線
     */
    private setupRedisConnection;
    /**
     * 將 JWT token 加入黑名單
     *
     * @param token JWT token 字串
     * @param expiresAt token 的過期時間（Unix timestamp）
     * @param reason 加入黑名單的原因
     * @returns Promise<void>
     */
    addToBlacklist(token: string, expiresAt: number, reason?: string): Promise<void>;
    /**
     * 檢查 JWT token 是否在黑名單中
     *
     * @param token JWT token 字串
     * @returns Promise<boolean> true 表示在黑名單中，false 表示不在
     */
    isBlacklisted(token: string): Promise<boolean>;
    /**
     * 從黑名單中移除 JWT token（通常用於測試）
     *
     * @param token JWT token 字串
     * @returns Promise<boolean> true 表示成功移除，false 表示不存在
     */
    removeFromBlacklist(token: string): Promise<boolean>;
    /**
     * 獲取黑名單統計信息
     *
     * @returns Promise<{count: number, keys: string[]}> 黑名單統計
     */
    getBlacklistStats(): Promise<{
        count: number;
        keys: string[];
    }>;
    /**
     * 清理所有過期的黑名單項目（手動觸發，Redis 會自動清理）
     *
     * @returns Promise<number> 清理的項目數量
     */
    cleanupExpiredTokens(): Promise<number>;
    /**
     * 生成 Redis key
     *
     * @param token JWT token 字串
     * @returns Redis key
     */
    private getRedisKey;
    /**
     * 關閉 Redis 連線
     */
    close(): Promise<void>;
}
