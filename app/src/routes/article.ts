import { Router } from "express";
import Joi from "joi";
import Articles from "../controllers/Article"
import Validate from "../middlewares/Validate";
const router = Router();

const schema = {
    article: Joi.object({
        name: Joi.string(),
        data: Joi.string(),
        image_url:Joi.string()
    })
};

router.get("/v1/articles", Articles.list_article);
router.post("/v1/articles", Validate.query(schema.article), Articles.insert_article);
export default router;