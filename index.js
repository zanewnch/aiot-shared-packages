// AIOT Shared Packages - 主要導出文件
// 這個文件導出所有共享的工具、中間件、配置和類型
// ===== Redis 相關服務 =====
export { BaseRedisService } from './services/redis/BaseRedisService.js';
export { redisConnectionManager, getRedisClient, initializeRedis } from './services/redis/RedisConnectionManager.js';
// ===== 服務類別 =====
// JwtBlacklistService 已移除 - JWT 黑名單功能統一由 Gateway 層處理
// ===== 設計模式 =====
export { loggerDecorator } from './patterns/LoggerDecorator.js';
// ===== 配置檔案 (Redis) =====
export { redisConfig } from './configs/RedisConfig.js';
// ===== 工具函式 =====
export { ResResult } from './utils/ResResult.js';
export { ReqResult } from './utils/ReqResult.js';
// ===== 類型定義 =====
export * from './types/ControllerResult.js';
export * from './types/RequestResult.js';
export * from './types/PaginationTypes.js';
export * from './types/ApiResponseTypes.js';
// 常用工具函數 (保留現有的)
export * from './utils/consul.js';
export * from './utils/grpc.js';
export * from './utils/validation.js';
/**
 * 套件版本資訊
 */
export const PACKAGE_VERSION = '1.1.0';
/**
 * 套件名稱
 */
export const PACKAGE_NAME = '@aiot/shared-packages';
/**
 * 套件資訊
 */
export const PACKAGE_INFO = {
    name: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    description: 'AIOT 項目共用套件 - Redis 服務、工具函式、型別定義等',
    author: 'AIOT Team'
};
