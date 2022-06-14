function adminUser(username, password) {
    this.username = username;
    this.password = password;
}

const adminOne = new adminUser("Admin", 12345);


let storageAdmin = localStorage.setItem("userAdmin", (adminOne.username)); //Admin kullanıcı adı
let storagePassword = localStorage.setItem("passAdmin", (adminOne.password)); //admin şifre