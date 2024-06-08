const {User} = require("../models")

class todos_repository {
    static async register(req, res, next) {
        try {
            const {title} = req
            const todos = await Todos.create({
                title
            });

            return todos
        } catch(e) {
            // console.log(e) teasd

        } 
    }
}

module.exports = UserRepository