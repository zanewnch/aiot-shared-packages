/**
 * @fileoverview Redis 快取資料庫配置模組
 * 此模組提供 Redis 連接管理和客戶端實例的單例模式實現
 * 用於會話管理、快取資料和臨時資料存儲
 */
import type { RedisClientType } from 'redis';
/**
 * Redis 連線配置類別
 * 使用單例模式管理 Redis 連接，確保整個應用程式只有一個 Redis 連接實例
 *
 * 主要功能：
 * - 會話管理 (Session Management)
 * - 快取資料 (Cache)
 * - 臨時資料存儲
 * - 連接狀態管理
 */
declare class RedisConfig {
    /** 單例實例靜態屬性 */
    private static instance;
    /** Redis 客戶端實例，初始為 null */
    private client;
    /** 連接狀態標記，初始為 false */
    private isConnected;
    /** 私有建構函式，防止外部直接實例化 */
    private constructor();
    /**
     * 取得 RedisConfig 單例實例
     * 如果實例不存在則建立新實例，確保全域唯一性
     * @returns {RedisConfig} Redis 配置單例實例
     */
    static getInstance(): RedisConfig;
    /**
     * 建立 Redis 連線
     * 使用環境變數配置連接參數，設定事件監聽器
     * @returns {Promise<void>} 無返回值的 Promise
     */
    connect(): Promise<void>;
    /**
     * 取得 Redis 客戶端實例
     * 檢查連接狀態後返回客戶端實例
     * @returns {RedisClientType} Redis 客戶端實例
     * @throws {Error} 當客戶端未連接時拋出錯誤
     */
    getClient(): RedisClientType;
    /**
     * 斷開 Redis 連線
     * 優雅地關閉連接並清理資源
     * @returns {Promise<void>} 無返回值的 Promise
     */
    disconnect(): Promise<void>;
    /**
     * 檢查連線狀態
     * 返回當前 Redis 連接是否可用
     * @returns {boolean} 連接狀態，true 表示已連接，false 表示未連接
     */
    isClientConnected(): boolean;
}
export declare const redisConfig: RedisConfig;
/**
 * 便利方法：取得 Redis 客戶端實例
 * 提供簡化的方式取得 Redis 客戶端，無需直接操作 redisConfig 物件
 * @returns {RedisClientType} Redis 客戶端實例
 */
export declare const getRedisClient: () => RedisClientType;
export {};
//# sourceMappingURL=RedisConfig.d.ts.map