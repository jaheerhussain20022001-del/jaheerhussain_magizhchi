function formatProfile(user){

const fullname = (user.firstname + " " + user.lastname).toUpperCase();

const domain = user.email.split("@")[1];

return 'Name: ${fullname} | Domain: ${domain}';
}

const user={
    firstname: "Jaheer",
    lastname: "Hussain",
    email: "jaheerhussain20022001@gmail.com"
};

console.log(formatProfile(user));