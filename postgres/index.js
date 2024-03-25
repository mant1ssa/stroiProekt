import 'dotenv/config';
import Sequilize  from "sequelize";
import User from "./models/user.model.js";
import Topic from "./models/topic.model.js";
import Question from "./models/question.model.js";
import Answer from './models/answer.model.js';

const sequelize = new Sequilize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    operatorsAliases: 0,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
})

const createTables = async () => {
    const queryInterface = sequelize.getQueryInterface();

    await queryInterface.createTable('Topics', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: Sequilize.INTEGER
        },
        title: {
            allowNull: false,
            type: Sequilize.STRING
        }
    });
}

const users = User(sequelize);
const topics = Topic(sequelize);
const questions = Question(sequelize);
const answers = Answer(sequelize);

export default { sequelize: sequelize, user: users, topic: topics, question: questions, answer: answers, createTables };