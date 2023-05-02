import { Request,Response } from "express";
import  ArticleModel  from "../models/article.model";
import Log from "../middlewares/Log";

class Articles{
    public static async list_article(req: Request, res: Response) {
      
            const articles = await ArticleModel.find();
            return res.status(200).json(articles);
        
    }
    public static async insert_article(req: Request, res: Response) {
        Log.info(JSON.stringify(req.body.name))
        return res.status(200).json(await ArticleModel.create(req.body));
    }
}
export default Articles;