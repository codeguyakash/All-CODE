let BlueBox = document.getElementById("Blue");
let YellowBox = document.getElementById("Yellow");
let GreenBox = document.getElementById("Green");
let RedBox = document.getElementById("Red");

BlueBox.innerHTML = "Name - " + FriendData.data["FriendsName"][0].Name;
YellowBox.innerHTML = "Age - " + FriendData.data["FriendsName"][0].Age;
GreenBox.innerHTML = "Course - " + FriendData.data["FriendsName"][0].Course;
RedBox.innerHTML = "City - " + FriendData.data["FriendsName"][0].City;

let row = FriendData.data.FriendsName.map(FriendsName => {
    return {
        "Name": FriendsName.Name,
        "Age": FriendsName.Age,
        "Course": FriendsName.Course,
        "City": FriendsName.City
    }
});

var table = document.getElementById("dataTable");
var tbody = table.querySelector("tbody");

row.forEach(FriendsName => {
    var tr = document.createElement("tr");
    Object.keys(FriendsName).forEach(key => {
        var td = document.createElement("td");
        td.innerHTML = FriendsName[key];
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
})