import { buildSchema } from "graphql";

const schema = buildSchema(`

    type User{
        id: ID,
        name: String,
        age: Int,
        email: String
    }

    type Topic{
        id: ID,
        title: String!
    }

    type Question{
        id: ID,
        title: String!,
        topic_id: Int
    }

    type Answer{
        id: ID,
        text: String!
        is_correct: Boolean
        question_id: Int
    }


    input UserInput{
        id: ID,
        name: String!
        age: Int!
        email: String!
    }

    type Query{
        getAllUsers: [User]
        getUser(id: ID): User
        getTopicTasks(topicId: ID): Topic!
    }

    type Mutation{
        createUser(input: UserInput): User
    }

`);

export default schema;

/*
mutation{
  createUser(input: {
      name: "Серхио",
      age: 23,
      email: "serchTT@gmail.com"
  }){
    id, name
  }
}
*/