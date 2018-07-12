export let messages = {
  vi: {
    common: {
      select_lang: "Ngôn ngữ"
    },
    language: "Tiếng Việt",
    login: {
      title: "Đăng nhập công ty",
      buttons: {
        login: "Đăng nhập"
      },
      input_text: {
        email: "Địa chỉ gmail",
        entryEmail: "Nhập Email của bạn",
        password: "Mật khẩu",
        entryPassword: "Nhập Password của bạn"
      },
      messages: {
        rememberMe: "Ghi nhớ mật khẩu",
        none_account: "Tạo tài khoản mới",
        register: "Đăng ký"
      }
    }
  },
  en: {
    common: {
      select_lang: "Language"
    },
    language: "English",
    login: {
      title: "Sign in company",
      buttons: {
        login: "Login"
      },
      input_text: {
        email: "Email Address",
        entryEmail: "Entry your email",
        password: "Password",
        entryPassword: "Entry your password"
      },
      messages: {
        rememberMe: "Remember Me",
        none_account: "Create new a account",
        register: "Register"
      }
    }
  }
};

export const dateTimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric"
    }
  },
  vi: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }
  }
};

export const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'vi': {
    currency: {
      style: 'currency', currency: 'VND', currencyDisplay: 'symbol'
    }
  }
}

