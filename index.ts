// AIOT Shared Packages - 主要導出文件
// 這個文件導出所有共享的工具、中間件、配置和類型

// 中間件導出
export * from './AuthMiddleware';
export * from './ErrorHandleMiddleware';
export * from './PermissionMiddleware';
export * from './WebSocketAuthMiddleware';
export { SimplePermissionMiddleware, simplePermissionMiddleware } from './SimplePermissionMiddleware';

// 結果類型導出
export * from './ControllerResult';
export * from './ServiceResult';
export * from './RequestResult';

// 配置導出
export * from './loggerConfig';
export * from './serverConfig';

// 資料庫配置導出
export * from './database/MongoDBConfig';
export * from './database/MysqlDBConfig';
export * from './database/redisConfig';

// 類型定義導出
export * from './types/ApiResponseType';
export * from './types/UserType';
export * from './types/dependency-injection';

// 常用工具函數
export * from './utils/consul';
export * from './utils/grpc';
export * from './utils/validation';