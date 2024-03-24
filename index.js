import 'dotenv/config';
import express from "express";
import { graphqlHTTP } from 'express-graphql';
import cors from "cors";

import schema from './schema.js';

// TEST DATA
const users = [

    {
        id: 1,
        name: "Sanya",
        age: 12
    },
    {
        id: 2,
        name: "Olegh",
        age: 14
    },
    {
        id: 3,
        name: "Ahmde-Abdullah",
        age: 12
    }

];

const createUser = (input) => {
    const id = Date.now();
    return {
        id, ...input
    }
}

const app = express();
app.use(cors());

const root = {
    getAllUsers: () => {
        return users;
    },
    getUser: ({id}) => {
        return users.find((user) => user.id === id);
    },
    createUser: ({input}) => {
        const user = createUser(input);
        users.push(user);
        return user;
    }
}

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root
}));



/**
 * Точка входа
 */

const start = async () => {
    try{
        app.listen(process.env.HTTP_PORT, () => console.log(`listening at ${process.env.HTTP_PORT}`))
    }catch(e){
        console.log(e);
    }
}

start();