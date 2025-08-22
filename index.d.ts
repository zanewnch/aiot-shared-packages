/**
 * @fileoverview AIOT Shared Packages 主要導出文件
 *
 * 統一導出所有共用的服務、工具函式、型別定義等，
 * 供各個微服務使用。
 *
 * @module AIOTSharedPackages
 * @author AIOT Team
 * @since 1.0.0
 * @version 1.0.0
 */
export { BaseRedisService, type RedisConnectionOptions } from './BaseRedisService.js';
export { redisConnectionManager, getRedisClient, initializeRedis } from './RedisConnectionManager.js';
export { ResResult } from './utils/ResResult.js';
export { redisConfig } from './configs/RedisConfig.js';
export { JwtBlacklistService, type Logger as JwtLogger } from './services/JwtBlacklistService.js';
export { loggerDecorator, type Logger } from './patterns/LoggerDecorator.js';
/**
 * 套件版本資訊
 */
export declare const PACKAGE_VERSION = "1.0.0";
/**
 * 套件名稱
 */
export declare const PACKAGE_NAME = "@aiot/shared-packages";
/**
 * 套件資訊
 */
export declare const PACKAGE_INFO: {
    name: string;
    version: string;
    description: string;
    author: string;
};
//# sourceMappingURL=index.d.ts.map