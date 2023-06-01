const express = require("express");
const app = express();
const cors = require("cors");
 const crudRouter = require("./routes/CrudRouts");


app.use(cors());
app.use(express.json());
 app.use("/api/v1", crudRouter);

app.listen(8000, () => {
	console.log("app running at 8000");
});
