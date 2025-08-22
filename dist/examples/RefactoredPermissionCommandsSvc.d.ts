/**
 * @fileoverview 重構後的權限命令服務範例
 *
 * 展示如何使用 BaseRedisService 重構現有的服務，
 * 移除重複的 Redis 連線處理代碼。
 *
 * @module RefactoredPermissionCommandsSvc
 * @author AIOT Team
 * @since 1.0.0
 * @version 1.0.0
 */
import 'reflect-metadata';
import { BaseRedisService } from '../BaseRedisService.js';
interface PermissionDTO {
    id: number;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
interface UserPermissions {
    userId: number;
    permissions: PermissionDTO[];
    roles: string[];
}
/**
 * 重構後的權限命令服務
 *
 * 使用 BaseRedisService 作為基礎類別，移除了重複的 Redis 連線處理代碼。
 * 專注於業務邏輯，而將 Redis 管理交給基礎類別處理。
 *
 * @class RefactoredPermissionCommandsSvc
 * @extends BaseRedisService
 * @since 1.0.0
 */
export declare class RefactoredPermissionCommandsSvc extends BaseRedisService {
    private static readonly PERMISSIONS_CACHE_PREFIX;
    private static readonly ROLES_CACHE_PREFIX;
    private static readonly PERMISSION_CACHE_PREFIX;
    private static readonly ALL_PERMISSIONS_KEY;
    constructor();
    /**
     * 實作抽象方法：提供 Redis 客戶端工廠函式
     *
     * @protected
     * @returns Redis 客戶端工廠函式
     */
    protected getRedisClientFactory(): any;
    /**
     * 將使用者權限資料存入快取
     *
     * 使用基礎類別的 safeRedisWrite 方法，自動處理錯誤和日誌
     *
     * @param userId 使用者 ID
     * @param permissions 權限資料
     * @param ttl 快取時間（秒），預設使用類別設定
     */
    setCachedUserPermissions(userId: number, permissions: UserPermissions, ttl?: number): Promise & lt;
}
/**
 * 使用範例：展示如何使用重構後的服務
 */
export declare class PermissionServiceUsageExample {
    static demonstrateUsage(): Promise<void>;
}
export {};
//# sourceMappingURL=RefactoredPermissionCommandsSvc.d.ts.map