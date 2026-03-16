class UserService{

    @Inject(Logger)
    logger;

    createUser(name){
        console.log("User created:", name);
        this.logger.log("User " + name + "was created successfully")
    }
}


const service = new UserService();
service.createUser("Jaheer");