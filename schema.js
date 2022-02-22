var { buildSchema } = require("graphql");

module.exports = buildSchema(`
 type Skill {
    id: Int
    language: String
    experience: Float
    Student: Student!
  }

  type Student {
    _id: Int!
    name:String!
    lastname: String!
  }

  input post {
    id: Int!
    language: String!
    experience: Float!
  }

  type Query {
    hello: String
    getSkills: [Skill]!
  }

  type Mutations {
    postSkill(input:post):Skill  
  }

  schema {
    query: Query
    mutation:  Mutations
  }
`);
