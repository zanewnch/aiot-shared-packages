/**
 * @fileoverview Redis 基礎服務類別
 *
 * 提供統一的 Redis 連線管理和錯誤處理機制，
 * 供所有微服務繼承使用，避免重複的 Redis 初始化代碼。
 *
 * 功能特點：
 * - 自動 Redis 連線管理和錯誤處理
 * - 統一的日誌記錄
 * - 可配置的快取 TTL
 * - 優雅降級支援（Redis 不可用時自動降級）
 *
 * @module BaseRedisService
 * @author AIOT Team
 * @since 1.0.0
 * @version 1.0.0
 */
import type { RedisClientType } from 'redis';
/**
 * Redis 連線配置選項
 */
export interface RedisConnectionOptions {
    /** 連線名稱，用於日誌識別 */
    serviceName?: string;
    /** 預設快取 TTL（秒） */
    defaultTTL?: number;
    /** 是否啟用詳細日誌 */
    enableDebugLogs?: boolean;
    /** Logger 實例 */
    logger?: any;
}
/**
 * Redis 基礎服務抽象類別
 *
 * 提供統一的 Redis 連線管理、錯誤處理和基本快取操作。
 * 所有需要使用 Redis 的服務都應該繼承此類別。
 *
 * @abstract
 * @class BaseRedisService
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * @injectable()
 * export class UserService extends BaseRedisService {
 *   constructor() {
 *     super({
 *       serviceName: 'UserService',
 *       defaultTTL: 3600
 *     });
 *   }
 *
 *   async cacheUser(user: User): Promise<void> {
 *     const redis = this.getRedisClient();
 *     if (redis) {
 *       await redis.setEx(`user:${user.id}`, this.defaultTTL, JSON.stringify(user));
 *     }
 *   }
 * }
 * ```
 */
export declare abstract class BaseRedisService {
    /** Redis 客戶端實例 */
    protected redisClient: RedisClientType | null;
    /** Redis 可用性狀態 */
    protected isRedisAvailable: boolean;
    /** 服務名稱，用於日誌識別 */
    protected readonly serviceName: string;
    /** 預設快取 TTL（秒） */
    protected readonly defaultTTL: number;
    /** 是否啟用詳細日誌 */
    protected readonly enableDebugLogs: boolean;
    /** Logger 實例 */
    protected readonly logger: any;
    /**
     * 建構函式
     *
     * 初始化 Redis 連線和配置參數
     *
     * @param options Redis 連線配置選項
     */
    constructor(options?: RedisConnectionOptions);
    /**
     * 初始化 Redis 連線
     *
     * 嘗試建立 Redis 連線，若失敗則啟用降級模式
     *
     * @private
     */
    private initializeRedisConnection;
    /**
     * 取得 Redis 客戶端實例
     *
     * 若 Redis 不可用則返回 null，調用方需要處理 fallback 邏輯
     *
     * @returns Redis 客戶端實例或 null
     * @protected
     */
    protected getRedisClient(): RedisClientType | null;
    /**
     * 檢查 Redis 是否可用
     *
     * @returns Redis 可用性狀態
     * @public
     */
    isRedisEnabled(): boolean;
    /**
     * 安全執行 Redis 操作
     *
     * 提供統一的錯誤處理和日誌記錄
     *
     * @param operation Redis 操作函式
     * @param operationName 操作名稱，用於日誌
     * @param fallbackValue 操作失敗時的預設返回值
     * @returns 操作結果或 fallback 值
     * @protected
     */
    protected safeRedisOperation<T>(operation: (redis: RedisClientType) => Promise<T>, operationName: string, fallbackValue: T): Promise<T>;
    /**
     * 安全執行 Redis 寫入操作
     *
     * 專門用於快取寫入操作，失敗時不會拋出異常
     *
     * @param operation Redis 寫入操作函式
     * @param operationName 操作名稱，用於日誌
     * @returns 操作是否成功
     * @protected
     */
    protected safeRedisWrite(operation: (redis: RedisClientType) => Promise<void>, operationName: string): Promise<boolean>;
    /**
     * 建立快取鍵值
     *
     * 提供統一的快取鍵值命名規範
     *
     * @param prefix 前綴
     * @param identifier 識別符
     * @returns 完整的快取鍵值
     * @protected
     */
    protected createCacheKey(prefix: string, identifier: string | number): string;
    /**
     * 批量刪除快取
     *
     * 根據模式刪除多個快取鍵值
     *
     * @param pattern 快取鍵值模式（支援萬用字元）
     * @returns 刪除的鍵值數量
     * @protected
     */
    protected clearCacheByPattern(pattern: string): Promise<number>;
    /**
     * 重新連線 Redis
     *
     * 用於 Redis 連線斷開後的重新連線
     *
     * @returns 重新連線是否成功
     * @public
     */
    reconnectRedis(): Promise<boolean>;
    /**
     * 取得服務狀態資訊
     *
     * @returns 服務狀態物件
     * @public
     */
    getServiceStatus(): {
        serviceName: string;
        redisAvailable: boolean;
        defaultTTL: number;
        debugEnabled: boolean;
    };
}
