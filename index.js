var express = require("express");
var { graphqlHTTP } = require("express-graphql");
const root = require("./root");
const schema = require("./schema");

var app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => console.log("Now browse to localhost:3000/graphql"));
