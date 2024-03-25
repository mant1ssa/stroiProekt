import Sequilize from "sequelize";


const Answer = (sequelize) => {
    const Answer = sequelize.define("answers", {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        text: {
            type: Sequilize.STRING,
            allowNull: false
        },
        topic_id: {
            type: Sequilize.INTEGER,
            allowNull: false
        },
        is_correct: {
            type: Sequilize.BOOLEAN,
            allowNull: false
        }
        }, {
            timestamps: false,
            tableName: 'answers'
    });

    Answer.associate = (models) => {
        Answer.belongsTo(models.Question);
    }

    return Answer;
}

export default Answer;