// gRPC 客戶端和服務器工具
export class GrpcClientManager {
    constructor() {
        this.clients = new Map();
    }
    /**
     * 創建 gRPC 客戶端
     */
    async createClient(config) {
        const clientKey = `${config.serviceName}:${config.host}:${config.port}`;
        // 如果客戶端已存在，直接返回
        if (this.clients.has(clientKey)) {
            return this.clients.get(clientKey);
        }
        try {
            // 這裡應該導入 grpc 相關的庫，但為了避免依賴問題，先提供接口
            // const grpc = require('@grpc/grpc-js');
            // const protoLoader = require('@grpc/proto-loader');
            // const packageDefinition = protoLoader.loadSync(config.protoPath, {
            //   keepCase: true,
            //   longs: String,
            //   enums: String,
            //   defaults: true,
            //   oneofs: true
            // });
            // const proto = grpc.loadPackageDefinition(packageDefinition);
            // const client = new proto[config.packageName][config.serviceName](
            //   `${config.host}:${config.port}`,
            //   grpc.credentials.createInsecure()
            // );
            // this.clients.set(clientKey, client);
            // return client;
            console.log(`gRPC client would be created for ${config.serviceName}`);
            return null;
        }
        catch (error) {
            console.error(`❌ Failed to create gRPC client for ${config.serviceName}:`, error);
            throw error;
        }
    }
    /**
     * 關閉所有客戶端連接
     */
    closeAllClients() {
        for (const [key, client] of this.clients) {
            try {
                if (client && typeof client.close === 'function') {
                    client.close();
                }
            }
            catch (error) {
                console.error(`❌ Failed to close gRPC client ${key}:`, error);
            }
        }
        this.clients.clear();
    }
    /**
     * 獲取現有客戶端
     */
    getClient(serviceName, host, port) {
        const clientKey = `${serviceName}:${host}:${port}`;
        return this.clients.get(clientKey) || null;
    }
}
/**
 * gRPC 健康檢查實現
 */
export class GrpcHealthCheck {
    static createHealthService() {
        return {
            check: (call, callback) => {
                // 實現健康檢查邏輯
                callback(null, { status: 'SERVING' });
            },
            watch: (call) => {
                // 實現健康狀態監控
                call.write({ status: 'SERVING' });
            }
        };
    }
}
/**
 * gRPC 錯誤處理工具
 */
export class GrpcErrorHandler {
    static handleError(error) {
        console.error('gRPC Error:', {
            code: error.code,
            message: error.message,
            details: error.details,
        });
        return {
            code: error.code || 13, // INTERNAL
            message: error.message || 'Internal server error',
            details: error.details || 'An unexpected error occurred',
        };
    }
}
// gRPC 狀態碼常量
export const GrpcStatus = {
    OK: 0,
    CANCELLED: 1,
    UNKNOWN: 2,
    INVALID_ARGUMENT: 3,
    DEADLINE_EXCEEDED: 4,
    NOT_FOUND: 5,
    ALREADY_EXISTS: 6,
    PERMISSION_DENIED: 7,
    RESOURCE_EXHAUSTED: 8,
    FAILED_PRECONDITION: 9,
    ABORTED: 10,
    OUT_OF_RANGE: 11,
    UNIMPLEMENTED: 12,
    INTERNAL: 13,
    UNAVAILABLE: 14,
    DATA_LOSS: 15,
    UNAUTHENTICATED: 16,
};
