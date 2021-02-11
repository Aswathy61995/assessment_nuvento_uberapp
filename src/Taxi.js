
let data = {
    test1: { username: "test1", password: "testone", accountn0: 1001, balance: 5000, source: "haripad", destination: "kayankulam" },
    test2: { username: "test2", password: "testtwo", accountn0: 1002, balance: 5000, source: "trivandrum", destination: "kochi" },
    test3: { username: "test3", password: "testthree", accountn0: 1003, balance: 7000, source: "kochi", destination: "alappuzha" },
    test4: { username: "test4", password: "testfour", accountn0: 1004, balance: 55000, source: "haripad", destination: "trivandrum" },
}
let newData = localStorage.getItem("data");
if (newData) {
    data = JSON.parse(newData);
}
class Taxi {
    static currentUser = "";

    static getUser() {
        return localStorage.getItem("currentUser");
    }
    static saveData() {
        localStorage.setItem("data", JSON.stringify(data));
    }
    static getDetails() {
        return data;
    }
    static addUser(username, password, accountn0, source, destination) {
        data[username] = { username, password, accountn0, balance: 0, source, destination };
        Taxi.saveData();
    }
    // static getUser(){
    //     return data[Taxi.currentUser];
    // }
    static setCurrentUser(usname) {
        localStorage.setItem("currentUser", usname);

    }

}

export default Taxi;