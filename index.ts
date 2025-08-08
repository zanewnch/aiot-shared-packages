// AIOT Shared Packages - 主要導出文件
// 這個文件導出所有共享的工具、中間件、配置和類型

// 中間件導出
export { default as AuthMiddleware } from './AuthMiddleware';
export { default as ErrorHandleMiddleware } from './ErrorHandleMiddleware';
export { default as PermissionMiddleware } from './PermissionMiddleware';
export { default as WebSocketAuthMiddleware } from './WebSocketAuthMiddleware';

// 結果類型導出
export { default as ControllerResult } from './ControllerResult';
export { default as ServiceResult } from './ServiceResult';
export { default as RequestResult } from './RequestResult';

// 配置導出
export { default as loggerConfig } from './loggerConfig';
export { default as serverConfig } from './serverConfig';

// 資料庫配置導出
export { default as MongoDBConfig } from './database/MongoDBConfig';
export { default as MysqlDBConfig } from './database/MysqlDBConfig';
export { default as redisConfig } from './database/redisConfig';

// 類型定義導出
export * from './types/ApiResponseType';
export * from './types/UserType';
export * from './types/dependency-injection';

// 常用工具函數
export * from './utils/consul';
export * from './utils/grpc';
export * from './utils/validation';