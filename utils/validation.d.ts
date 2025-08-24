export interface ValidationRule {
    field: string;
    rules: Array<{
        type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
        value?: any;
        message?: string;
        validator?: (value: any) => boolean;
    }>;
}
export interface ValidationError {
    field: string;
    message: string;
}
export declare class Validator {
    /**
     * 驗證單個字段
     */
    static validateField(value: any, rules: ValidationRule['rules']): ValidationError[];
    /**
     * 驗證對象
     */
    static validateObject(data: any, validationRules: ValidationRule[]): ValidationError[];
    /**
     * 檢查是否有驗證錯誤
     */
    static hasValidationErrors(errors: ValidationError[]): boolean;
    /**
     * 格式化驗證錯誤信息
     */
    static formatValidationErrors(errors: ValidationError[]): Record<string, string[]>;
}
/**
 * 常用驗證規則預設
 */
export declare const ValidationRules: {
    required: (message?: string) => {
        type: "required";
        message: string;
    };
    email: (message?: string) => {
        type: "email";
        message: string;
    };
    minLength: (length: number, message?: string) => {
        type: "minLength";
        value: number;
        message: string;
    };
    maxLength: (length: number, message?: string) => {
        type: "maxLength";
        value: number;
        message: string;
    };
    pattern: (regex: string, message?: string) => {
        type: "pattern";
        value: string;
        message: string;
    };
    custom: (validator: (value: any) => boolean, message?: string) => {
        type: "custom";
        validator: (value: any) => boolean;
        message: string;
    };
};
/**
 * 資料清理工具
 */
export declare class DataSanitizer {
    /**
     * 清理字符串，移除危險字符
     */
    static sanitizeString(input: string): string;
    /**
     * 清理 HTML 內容
     */
    static sanitizeHtml(input: string): string;
    /**
     * 清理數字輸入
     */
    static sanitizeNumber(input: any): number | null;
    /**
     * 清理布爾值輸入
     */
    static sanitizeBoolean(input: any): boolean;
}
