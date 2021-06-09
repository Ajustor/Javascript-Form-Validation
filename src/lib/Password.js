const regexs = {
  uppercase: /^(?=.*[A-Z])/,
  lowercase: /^(?=.*[a-z])/,
  numeric: /^(?=.*[0-9])/,
  special: /^(?=.*[!@#\$%\^&\*])/,
}

export class Password {
  constructor(options = {}) {
    try {
      this.checkOptions(options)
    } catch (error) {
      throw error
    }
    this.uppercase = options.hasOwnProperty("uppercase") ? options.uppercase : true;
    this.lowercase = options.hasOwnProperty("lowercase") ? options.lowercase : true;
    this.numeric = options.hasOwnProperty("numeric") ? options.numeric : true;
    this.special = options.hasOwnProperty("special") ? options.special : true;
    this.minLength = options.hasOwnProperty("minLength") ? options.minLength : 12;

  }

  checkOptions(options) {
    const {
      uppercase,
      lowercase,
      numeric,
      special,
      minLength,
    } = options
    if ('uppercase' in options && typeof uppercase !== "boolean") {
      throw "uppercase option should be boolean";
    }
    if ('lowercase' in options && typeof lowercase !== "boolean") {
      throw "lowercase option should be boolean";
    }
    if ('numeric' in options && typeof numeric !== "boolean") {
      throw "numeric option should be boolean";
    }
    if ('special' in options && typeof special !== "boolean") {
      throw "special option should be boolean";
    }
    if ('minLength' in options && typeof minLength !== "number") {
      throw "minLength option should be a number";
    }
  }

  isValid(password) {
    let onError = {
      uppercase: this.uppercase ? regexs.uppercase.test(password) : true,
      lowercase: this.lowercase ? regexs.lowercase.test(password) : true,
      numeric: this.numeric ? regexs.numeric.test(password) : true,
      special: this.special ? regexs.special.test(password) : true,
      minLength: password.length > this.minLength
    }

    return Object.values(onError).some((error) => !error) ? onError : true;
  }
}