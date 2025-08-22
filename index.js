// AIOT Shared Packages - 主要導出文件
// 這個文件導出所有共享的工具、中間件、配置和類型
// ===== Redis 相關服務 =====
export { BaseRedisService } from './BaseRedisService';
export { redisConnectionManager, getRedisClient, initializeRedis } from './RedisConnectionManager';
// ===== 服務類別 =====
export { JwtBlacklistService } from './services/JwtBlacklistService';
// ===== 設計模式 =====
export { loggerDecorator } from './patterns/LoggerDecorator';
// ===== 配置檔案 (Redis) =====
export { redisConfig } from './configs/RedisConfig';
// ===== 工具函式 =====
export { ResResult } from './utils/ResResult';
// 結果類型導出 (保留現有的)
export * from './ControllerResult';
export * from './RequestResult';
// 常用工具函數 (保留現有的)
export * from './utils/consul';
export * from './utils/grpc';
export * from './utils/validation';
/**
 * 套件版本資訊
 */
export const PACKAGE_VERSION = '1.0.0';
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
