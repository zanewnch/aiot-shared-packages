export { BaseRedisService } from './services/redis/BaseRedisService.js';
export { redisConnectionManager, getRedisClient, initializeRedis } from './services/redis/RedisConnectionManager.js';
export { loggerDecorator } from './patterns/LoggerDecorator.js';
export { redisConfig } from './configs/RedisConfig.js';
export { ResResult } from './utils/ResResult.js';
export { ReqResult } from './utils/ReqResult.js';
export * from './types/ControllerResult.js';
export * from './types/RequestResult.js';
export * from './types/PaginationTypes.js';
export * from './types/ApiResponseTypes.js';
export * from './utils/consul.js';
export * from './utils/grpc.js';
export * from './utils/validation.js';
/**
 * 套件版本資訊
 */
export declare const PACKAGE_VERSION = "1.1.4";
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
