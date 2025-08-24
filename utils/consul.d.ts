export interface ConsulServiceConfig {
    serviceName: string;
    serviceId: string;
    address: string;
    port: number;
    tags?: string[];
    meta?: Record<string, string>;
    check?: {
        http?: string;
        grpc?: string;
        tcp?: string;
        interval?: string;
        timeout?: string;
        deregisterCriticalServiceAfter?: string;
    };
}
export declare class ConsulHelper {
    private consulHost;
    private consulPort;
    constructor(consulHost?: string, consulPort?: number);
    /**
     * 註冊服務到 Consul
     */
    registerService(config: ConsulServiceConfig): Promise<void>;
    /**
     * 從 Consul 註銷服務
     */
    deregisterService(serviceId: string): Promise<void>;
    /**
     * 從 Consul 發現服務
     */
    discoverService(serviceName: string): Promise<any[]>;
    /**
     * 獲取服務的負載均衡地址
     */
    getServiceEndpoint(serviceName: string): Promise<{
        address: string;
        port: number;
    } | null>;
}
