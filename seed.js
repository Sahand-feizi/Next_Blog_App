const users = require("./backend/data/db.users.json");
const posts = require("./backend/data/db.posts.json");
const categories = require("./backend/data/db.category.json");
const comments = require("./backend/data/db.comments.json");
const { UserModel } = require("./backend/app/models/user");
const { PostModel } = require("./backend/app/models/post");
const { CommentModel } = require("./backend/app/models/comment");
const { CategoryModel } = require("./backend/app/models/category");
const Application = require("./backend/app/server");

(async () => {
  new Application();
  await UserModel.insertMany(users);
  await PostModel.insertMany(posts);
  await CommentModel.insertMany(comments);
  await CategoryModel.insertMany(categories);
})()
  .then(() => {
    console.log("DATA INSERTED SUCCESSFULLY.");
    console.log("NOW RUN npm run dev AND TEST THE APIs");
  })
  .catch((err) => console.log("DATA INSERTION FAILED: ", err));
