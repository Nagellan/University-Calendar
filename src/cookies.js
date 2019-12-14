'use strict';

class Cookies {
  getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  setCookie(name, value) {
    document.cookie = name + "=" + value;
  }

  deleteCookie(name) {
    this.setCookie(name, "", {
      'max-age': -1
    })
  }
}

export default new Cookies();