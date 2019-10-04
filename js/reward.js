let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});
/*function log(user,password){
    var userNamePrompt=prompt("Enter your username?");
    var userPasswordPrompt=prompt("Enter your password");
    var database={
        username:"Vidhya",
        password:"Vidhya@101"
    }
    if(user==database.username && password==database.password){
        return ("hi");
    }
    else{
        return ("Nope"); 
    }
      
    
}


function enterDetails(){
    return(log(user,password));
}
    
   

log(userNamePrompt,userPasswordPrompt);*/

function enterDetails(user,passwd){
    var userNamePrompt=prompt("Enter your username?");
    var userPasswordPrompt=prompt("Enter your password");
    
    
    var database=[
        {
        username:"Vidhya",
        password:"Vidhya@101"
    },
    
    {
        username:"Jayaku",
        password:"Jayaku@101"
    }
];

    
    
if ((userNamePrompt===database[0].username) && (userPasswordPrompt===database[0].password)){
    self.location.href="vidhya.html";
    
}
else{
    if ((userNamePrompt===database[1].username) && (userPasswordPrompt===database[1].password)){
        self.location.href="jayaku.html";
        
}
    
}
}
