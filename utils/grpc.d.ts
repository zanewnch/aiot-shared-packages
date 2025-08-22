export interface GrpcServiceConfig {
    serviceName: string;
    protoPath: string;
    packageName: string;
    host?: string;
    port?: number;
}
export declare class GrpcClientManager {
    private clients;
    /**
     * 創建 gRPC 客戶端
     */
    createClient(config: GrpcServiceConfig): Promise<any>;
    /**
     * 關閉所有客戶端連接
     */
    closeAllClients(): void;
    /**
     * 獲取現有客戶端
     */
    getClient(serviceName: string, host?: string, port?: number): any | null;
}
/**
 * gRPC 健康檢查實現
 */
export declare class GrpcHealthCheck {
    static createHealthService(): {
        check: (call: any, callback: any) => void;
        watch: (call: any) => void;
    };
}
/**
 * gRPC 錯誤處理工具
 */
export declare class GrpcErrorHandler {
    static handleError(error: any): {
        code: any;
        message: any;
        details: any;
    };
}
export declare const GrpcStatus: {
    OK: number;
    CANCELLED: number;
    UNKNOWN: number;
    INVALID_ARGUMENT: number;
    DEADLINE_EXCEEDED: number;
    NOT_FOUND: number;
    ALREADY_EXISTS: number;
    PERMISSION_DENIED: number;
    RESOURCE_EXHAUSTED: number;
    FAILED_PRECONDITION: number;
    ABORTED: number;
    OUT_OF_RANGE: number;
    UNIMPLEMENTED: number;
    INTERNAL: number;
    UNAVAILABLE: number;
    DATA_LOSS: number;
    UNAUTHENTICATED: number;
};
