function interacte(){
    alert("Hello User");
    let a = prompt("Enter your username: ");
    let b = prompt("Enter your gmail: ", (a+'@gmail.com'))
    let c = prompt("Enter your Password: ", (b+"7465"))
    document.write("Username: " + a)
    document.write( "Gmail: "+b)
    document.write("\nPassword: "+c)
}