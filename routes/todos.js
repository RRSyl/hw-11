const express =require("express")
const router = express.Router();
const TodosController = require("../controllers/todos_controller")

router.post('/',TodosController.create);
router.get('/',TodosController.get);
router.get('/:id',TodosController.getOne);
router.delete('/:id',TodosController.delete);

module.exports = router;