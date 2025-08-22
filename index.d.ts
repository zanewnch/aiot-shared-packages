export { BaseRedisService, type RedisConnectionOptions } from './BaseRedisService';
export { redisConnectionManager, getRedisClient, initializeRedis } from './RedisConnectionManager';
export { JwtBlacklistService, type Logger as JwtLogger } from './services/JwtBlacklistService';
export { loggerDecorator, type Logger } from './patterns/LoggerDecorator';
export { redisConfig } from './configs/RedisConfig';
export { ResResult } from './utils/ResResult';
export * from './ControllerResult';
export * from './RequestResult';
export * from './utils/consul';
export * from './utils/grpc';
export * from './utils/validation';
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
