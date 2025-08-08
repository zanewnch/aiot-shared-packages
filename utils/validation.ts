// 通用驗證工具

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

export class Validator {
  /**
   * 驗證單個字段
   */
  static validateField(value: any, rules: ValidationRule['rules']): ValidationError[] {
    const errors: ValidationError[] = [];

    for (const rule of rules) {
      let isValid = true;
      let errorMessage = rule.message || `Validation failed for rule: ${rule.type}`;

      switch (rule.type) {
        case 'required':
          isValid = value !== null && value !== undefined && value !== '';
          errorMessage = rule.message || 'Field is required';
          break;

        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          isValid = !value || emailRegex.test(value);
          errorMessage = rule.message || 'Invalid email format';
          break;

        case 'minLength':
          isValid = !value || (typeof value === 'string' && value.length >= (rule.value || 0));
          errorMessage = rule.message || `Minimum length is ${rule.value}`;
          break;

        case 'maxLength':
          isValid = !value || (typeof value === 'string' && value.length <= (rule.value || 0));
          errorMessage = rule.message || `Maximum length is ${rule.value}`;
          break;

        case 'pattern':
          if (value && rule.value) {
            const regex = new RegExp(rule.value);
            isValid = regex.test(value);
          }
          errorMessage = rule.message || 'Value does not match required pattern';
          break;

        case 'custom':
          if (rule.validator) {
            isValid = rule.validator(value);
          }
          errorMessage = rule.message || 'Custom validation failed';
          break;
      }

      if (!isValid) {
        errors.push({
          field: '', // 將在上層設置
          message: errorMessage,
        });
      }
    }

    return errors;
  }

  /**
   * 驗證對象
   */
  static validateObject(data: any, validationRules: ValidationRule[]): ValidationError[] {
    const errors: ValidationError[] = [];

    for (const rule of validationRules) {
      const fieldValue = data[rule.field];
      const fieldErrors = this.validateField(fieldValue, rule.rules);
      
      fieldErrors.forEach(error => {
        errors.push({
          field: rule.field,
          message: error.message,
        });
      });
    }

    return errors;
  }

  /**
   * 檢查是否有驗證錯誤
   */
  static hasValidationErrors(errors: ValidationError[]): boolean {
    return errors.length > 0;
  }

  /**
   * 格式化驗證錯誤信息
   */
  static formatValidationErrors(errors: ValidationError[]): Record<string, string[]> {
    const formatted: Record<string, string[]> = {};

    for (const error of errors) {
      if (!formatted[error.field]) {
        formatted[error.field] = [];
      }
      formatted[error.field].push(error.message);
    }

    return formatted;
  }
}

/**
 * 常用驗證規則預設
 */
export const ValidationRules = {
  required: (message?: string) => ({
    type: 'required' as const,
    message: message || 'This field is required',
  }),

  email: (message?: string) => ({
    type: 'email' as const,
    message: message || 'Please enter a valid email address',
  }),

  minLength: (length: number, message?: string) => ({
    type: 'minLength' as const,
    value: length,
    message: message || `Must be at least ${length} characters long`,
  }),

  maxLength: (length: number, message?: string) => ({
    type: 'maxLength' as const,
    value: length,
    message: message || `Must not exceed ${length} characters`,
  }),

  pattern: (regex: string, message?: string) => ({
    type: 'pattern' as const,
    value: regex,
    message: message || 'Invalid format',
  }),

  custom: (validator: (value: any) => boolean, message?: string) => ({
    type: 'custom' as const,
    validator,
    message: message || 'Validation failed',
  }),
};

/**
 * 資料清理工具
 */
export class DataSanitizer {
  /**
   * 清理字符串，移除危險字符
   */
  static sanitizeString(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/[<>]/g, '') // 移除 HTML 標籤
      .replace(/javascript:/gi, '') // 移除 JavaScript 協議
      .replace(/on\w+=/gi, ''); // 移除事件處理器
  }

  /**
   * 清理 HTML 內容
   */
  static sanitizeHtml(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/&/g, '&amp;');
  }

  /**
   * 清理數字輸入
   */
  static sanitizeNumber(input: any): number | null {
    const num = parseFloat(input);
    return isNaN(num) ? null : num;
  }

  /**
   * 清理布爾值輸入
   */
  static sanitizeBoolean(input: any): boolean {
    if (typeof input === 'boolean') return input;
    if (typeof input === 'string') {
      return input.toLowerCase() === 'true' || input === '1';
    }
    return Boolean(input);
  }
}