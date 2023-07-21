function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["Javascript", "HTML", "CSS"],
        address: {
            city: "Tokyo",
            country: "Japan"
        },
        getName: function () {
            return this.name;
        }
    };
    console.log(member.getName());
    console.log(member.skills);
    console.log(member.address.city);
}