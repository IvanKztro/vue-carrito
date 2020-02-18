const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

const app  = express();

app.use(history());
app.use("/", express.static( path.join(__dirname, '/dist' ) ) )


app.set("port", process.env.PORT || 4000)


app.listen(app.get("port"), (req, res) => {
    console.log("Escuchando puerto: ", app.get("port"))
})