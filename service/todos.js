const todos_repository = require("../repository")


class TodosService{
    static async register(req,res,next){
        const {title} = req

        const Todos = await todos_repository.register({
            title
        })

        return Todos
    }
}

module.exports = TodosService;