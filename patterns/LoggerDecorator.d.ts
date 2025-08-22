/**
 * 簡單的 Logger Decorator
 * 只有兩個參數：originalFunction 和 methodName
 *
 * @note 這個裝飾器需要從使用的服務中傳入 logger 實例
 * 以避免對特定 loggerConfig 的依賴
 */
export interface Logger {
    info(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
}
export declare function loggerDecorator(originalFunction: Function, methodName: string, logger: Logger): (...args: any[]) => Promise<any>;
