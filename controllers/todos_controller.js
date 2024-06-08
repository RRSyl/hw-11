const {Todos} = require('../models')

class TodosController{
    static async register(req,res,next){
        const{title} = req.body;

        try{
            const todos = await TodosService.register({
                title
            })
            res.status(201).json(todos);

        }
        catch(err){
            next(error);
        }
    }

    static async login(req,res,next){
        
    }
    static async create(req,res,next){
        const{title} = req.body
        const data = await Todos.create({
            title
        })

        res.status(201).json(data);
    }

    static async get(req,res,next){
        const data = await Todos.findAll()

        res.status(200).json(data)
    }

    static async getOne(req,res,next){
        const {id} = req.params
        const data = await Todos.findByPk(id)

        res.status(200).json(data)
    }

    static async delete(req,res,next){
        const {id} = req.params
        await Todos.destroy(
            {where: {
                id:id
            }}
        )
        res.status(200).json({message: "delete success"})
    }
}

module.exports = TodosController