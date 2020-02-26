let stephen_colbert = {
    first_name: "Stephen",
    last_name: "Hawking",
    sayHello: function(other_name){
        return "Hello " + other_name + " I'm " + this.first_name
    }
}

stephen_colbert.sayHello("Jim")