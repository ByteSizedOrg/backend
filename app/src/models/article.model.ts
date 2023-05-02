import mongoose from "../providers/Database";
import { IArticle } from "../interfaces/article";

export const ArticleSchema = new mongoose.Schema<IArticle>({
    name: {type: String},
    data: { type: String },
    image_url: {type: String}
}, {
    timestamps: false,
    versionKey: false
});

export default mongoose.model<IArticle>("Articles",ArticleSchema);