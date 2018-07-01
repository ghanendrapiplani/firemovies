export class User {
  dispName: string;
  uid: string;
  email: string;
  photoUrl: string;

  constructor(dispName,
              uid,
              email,
              photoUrl,
  ) {
    this.dispName = dispName;
    this.uid = uid;
    this.email = email;
    this.photoUrl = photoUrl;
  }

}
