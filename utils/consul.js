// Consul 服務註冊和發現工具
export class ConsulHelper {
    constructor(consulHost = 'localhost', consulPort = 8500) {
        this.consulHost = consulHost;
        this.consulPort = consulPort;
    }
    /**
     * 註冊服務到 Consul
     */
    async registerService(config) {
        const consulUrl = `http://${this.consulHost}:${this.consulPort}`;
        const serviceDefinition = {
            ID: config.serviceId,
            Name: config.serviceName,
            Address: config.address,
            Port: config.port,
            Tags: config.tags || [],
            Meta: config.meta || {},
            Check: config.check ? {
                HTTP: config.check.http,
                GRPC: config.check.grpc,
                TCP: config.check.tcp,
                Interval: config.check.interval || '10s',
                Timeout: config.check.timeout || '3s',
                DeregisterCriticalServiceAfter: config.check.deregisterCriticalServiceAfter || '30s'
            } : undefined
        };
        try {
            const response = await fetch(`${consulUrl}/v1/agent/service/register`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(serviceDefinition),
            });
            if (!response.ok) {
                throw new Error(`Failed to register service: ${response.status} ${response.statusText}`);
            }
            console.log(`✅ Service ${config.serviceName} registered successfully with Consul`);
        }
        catch (error) {
            console.error(`❌ Failed to register service ${config.serviceName}:`, error);
            throw error;
        }
    }
    /**
     * 從 Consul 註銷服務
     */
    async deregisterService(serviceId) {
        const consulUrl = `http://${this.consulHost}:${this.consulPort}`;
        try {
            const response = await fetch(`${consulUrl}/v1/agent/service/deregister/${serviceId}`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error(`Failed to deregister service: ${response.status} ${response.statusText}`);
            }
            console.log(`✅ Service ${serviceId} deregistered successfully from Consul`);
        }
        catch (error) {
            console.error(`❌ Failed to deregister service ${serviceId}:`, error);
            throw error;
        }
    }
    /**
     * 從 Consul 發現服務
     */
    async discoverService(serviceName) {
        const consulUrl = `http://${this.consulHost}:${this.consulPort}`;
        try {
            const response = await fetch(`${consulUrl}/v1/health/service/${serviceName}?passing`);
            if (!response.ok) {
                throw new Error(`Failed to discover service: ${response.status} ${response.statusText}`);
            }
            const services = await response.json();
            return services.map((service) => ({
                id: service.Service.ID,
                name: service.Service.Service,
                address: service.Service.Address,
                port: service.Service.Port,
                tags: service.Service.Tags,
                meta: service.Service.Meta,
            }));
        }
        catch (error) {
            console.error(`❌ Failed to discover service ${serviceName}:`, error);
            throw error;
        }
    }
    /**
     * 獲取服務的負載均衡地址
     */
    async getServiceEndpoint(serviceName) {
        try {
            const services = await this.discoverService(serviceName);
            if (services.length === 0) {
                return null;
            }
            // 簡單的隨機負載均衡
            const randomIndex = Math.floor(Math.random() * services.length);
            const service = services[randomIndex];
            return {
                address: service.address,
                port: service.port,
            };
        }
        catch (error) {
            console.error(`❌ Failed to get service endpoint for ${serviceName}:`, error);
            return null;
        }
    }
}
