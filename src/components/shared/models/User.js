
class User {
  constructor(data = {}) {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.password = null;
    this.token = null;
    this.creationDate = null;
    this.birthdayDate = null;


    Object.assign(this, data);
  }
}
export default User;
