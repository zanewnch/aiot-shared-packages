# AIOT Shared Packages

這是 AIOT 微服務架構的共享套件庫，包含了所有微服務共用的中間件、工具函數、類型定義和配置。

## 📦 安裝方式

### 作為 Git 依賴使用

```bash
npm install git+https://github.com/your-org/aiot-shared-packages.git#v1.0.0
```

或在 package.json 中添加：

```json
{
  "dependencies": {
    "aiot-shared-packages": "git+https://github.com/your-org/aiot-shared-packages.git#v1.0.0"
  }
}
```

## 🚀 使用方法

### 中間件

```typescript
import { AuthMiddleware, ErrorHandleMiddleware } from 'aiot-shared-packages';

// Express 應用中使用
app.use(AuthMiddleware);
app.use(ErrorHandleMiddleware);
```

### 結果處理

```typescript
import { ControllerResult, ServiceResult } from 'aiot-shared-packages';

// 在控制器中
export const getUserById = async (req: Request, res: Response) => {
  const result = await userService.getById(req.params.id);
  return ControllerResult.success(res, result, 'User retrieved successfully');
};
```

### 資料庫配置

```typescript
import { MysqlDBConfig, MongoDBConfig } from 'aiot-shared-packages';

// 使用 MySQL 配置
const mysqlConnection = MysqlDBConfig.createConnection();

// 使用 MongoDB 配置  
const mongoConnection = MongoDBConfig.connect();
```

### Consul 服務註冊

```typescript
import { ConsulHelper } from 'aiot-shared-packages';

const consul = new ConsulHelper('localhost', 8500);

await consul.registerService({
  serviceName: 'rbac-service',
  serviceId: 'rbac-service-1',
  address: 'localhost',
  port: 3001,
  tags: ['auth', 'rbac'],
  check: {
    http: 'http://localhost:3001/health',
    interval: '10s'
  }
});
```

### 資料驗證

```typescript
import { Validator, ValidationRules } from 'aiot-shared-packages';

const validationRules = [
  {
    field: 'email',
    rules: [ValidationRules.required(), ValidationRules.email()]
  },
  {
    field: 'password',
    rules: [ValidationRules.required(), ValidationRules.minLength(8)]
  }
];

const errors = Validator.validateObject(userData, validationRules);
if (Validator.hasValidationErrors(errors)) {
  return ControllerResult.badRequest(res, 'Validation failed', errors);
}
```

## 📁 套件結構

```
aiot-shared-packages/
├── index.ts                    # 主要導出文件
├── AuthMiddleware.ts           # JWT 認證中間件
├── ErrorHandleMiddleware.ts    # 錯誤處理中間件
├── PermissionMiddleware.ts     # 權限檢查中間件
├── WebSocketAuthMiddleware.ts  # WebSocket 認證中間件
├── ControllerResult.ts         # 控制器統一回應格式
├── ServiceResult.ts           # 服務層結果處理
├── RequestResult.ts           # 請求結果處理
├── loggerConfig.ts            # 日誌配置
├── serverConfig.ts            # 服務器配置
├── database/                  # 資料庫配置
│   ├── MongoDBConfig.ts       # MongoDB 配置
│   ├── MysqlDBConfig.ts       # MySQL 配置
│   └── redisConfig.ts         # Redis 配置
├── types/                     # 類型定義
│   ├── ApiResponseType.ts     # API 回應類型
│   ├── UserType.ts            # 用戶類型
│   └── dependency-injection.ts # 依賴注入類型
└── utils/                     # 工具函數
    ├── consul.ts              # Consul 服務發現工具
    ├── grpc.ts                # gRPC 客戶端工具
    └── validation.ts          # 資料驗證工具
```

## 🔧 開發

### 建置

```bash
npm run build
```

### 開發模式（監聽檔案變化）

```bash
npm run dev
```

### 清理建置檔案

```bash
npm run clean
```

## 📋 主要功能

### 🔐 認證與授權
- JWT 認證中間件
- 權限檢查中間件
- WebSocket 認證支援

### 🗄️ 資料庫支援
- MySQL 連線配置
- MongoDB 連線配置
- Redis 快取配置

### 🌐 微服務工具
- Consul 服務註冊與發現
- gRPC 客戶端管理
- 健康檢查支援

### ✅ 資料驗證
- 靈活的驗證規則系統
- 常用驗證器（email、長度、格式等）
- 資料清理工具

### 📨 統一回應格式
- 標準化的 API 回應結構
- 錯誤處理機制
- HTTP 狀態碼管理

## 🏷️ 版本管理

使用 Git 標籤進行版本管理：

```bash
# 發布新版本
git tag v1.0.1
git push origin v1.0.1

# 在主項目中更新到特定版本
npm update aiot-shared-packages
```

## 🤝 貢獻指南

1. Fork 此倉庫
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📄 授權

此項目採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件