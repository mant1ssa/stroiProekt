import Sequilize from "sequelize";


const Question = (sequelize) => {
    const Question = sequelize.define("questions", {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: Sequilize.STRING,
            allowNull: false
        },
        topic_id: {
            type: Sequilize.INTEGER,
            allowNull: false
        }
        }, {
            timestamps: false,
            tableName: 'questions'
    });

    Question.associate = (models) => {
        Question.belongsTo(models.Topic); // Each question belongs to a topic
        Question.hasMany(models.Answer); // Each question can have many answers
    };

    return Question;
}

export default Question;