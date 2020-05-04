export class Loki {
  static save(data) {
    localStorage.setItem('token', data);
  }

  static authCheck() {
    let token = localStorage.getItem('token');
    if (token != null || token != undefined) {
      return true;
    } else
      return false;
  }

  static get() {
    return localStorage.getItem('token');
  }

  static logout(){
    return localStorage.removeItem('token');
  }

}
