import 'dotenv/config';
import express from "express";
import { graphqlHTTP } from 'express-graphql';
import cors from "cors";

import schema from './schema.js';
import db from "./postgres/index.js";
const userModel = db.user;
const topicEntities = db;


const app = express();
app.use(cors());

const root = {


    getAllUsers: async () => {
        try{
            let users = await userModel.findAll();
            users = users.map((value, index, array) => {
                return value.dataValues
            })
            return users;
        }catch(e){
            console.log(e)
        }
    },
    getUser: async ({id}) => {
        try{
            let user = await userModel.findOne({
                where: { id: id }
            })

            return user;
        }catch(e){
            console.log(e);
        }
    },
    createUser: async (userInput) => {
        const newUser = await userModel.create({
            name:  userInput.input.name,
            age:   userInput.input.age,
            email: userInput.input.email
        })
        return newUser;
    },
    getTopicTasks: async ({ id }) => {
        try{
            const topicFullData = await topicEntities.topic.findByPk(id, {
                include: [
                    {
                      model: topicEntities.Question,
                      include: topicEntities.Answer
                    }
                  ]
            })

            return topicFullData
        }catch(e){
            console.log(e);
        }
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