/**
 * @fileoverview Redis 連線管理服務
 *
 * 提供統一的 Redis 連線初始化邏輯，供所有微服務使用。
 * 實現單例模式，確保整個應用程式只有一個 Redis 連接實例。
 *
 * 功能特點：
 * - 統一的 Redis 連線配置和管理
 * - 自動錯誤處理和重連機制
 * - 標準化的日誌記錄
 * - 環境變數配置支援
 *
 * @module RedisConnectionManager
 * @author AIOT Team
 * @since 1.0.0
 * @version 1.0.0
 */
import type { RedisClientType } from 'redis';
/**
 * Redis 連線管理器
 *
 * 提供統一的 Redis 連線管理和客戶端實例的單例模式實現
 * 用於會話管理、快取資料和臨時資料存儲
 *
 * @class RedisConnectionManager
 * @since 1.0.0
 */
declare class RedisConnectionManager {
    /** 單例實例靜態屬性 */
    private static instance;
    /** Redis 客戶端實例，初始為 null */
    private client;
    /** 連接狀態標記，初始為 false */
    private isConnected;
    /** 私有建構函式，防止外部直接實例化 */
    private constructor();
    /**
     * 取得 RedisConnectionManager 單例實例
     * 如果實例不存在則建立新實例，確保全域唯一性
     * @returns {RedisConnectionManager} Redis 連線管理器單例實例
     */
    static getInstance(): RedisConnectionManager;
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
export declare const redisConnectionManager: RedisConnectionManager;
/**
 * 便利方法：取得 Redis 客戶端實例
 * 提供簡化的方式取得 Redis 客戶端，無需直接操作 redisConnectionManager 物件
 * @returns {RedisClientType} Redis 客戶端實例
 */
export declare const getRedisClient: () => RedisClientType;
/**
 * 便利方法：初始化 Redis 連線
 * 提供統一的初始化邏輯，供各微服務在啟動時調用
 * @returns {Promise<void>} 無返回值的 Promise
 */
export declare const initializeRedis: () => Promise<void>;
export {};
//# sourceMappingURL=RedisConnectionManager.d.ts.map