import Sequilize from "sequelize";


const Topic = (sequelize) => {
    const Topic = sequelize.define("topics", {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: Sequilize.STRING,
            allowNull: false
        }
        }, {
            timestamps: false,
            tableName: 'topics'
    });

    Topic.associate = (models) => {
        Topic.hasMany(models.Question); // Each topic can have many questions
    };

    return Topic;
}

export default Topic;