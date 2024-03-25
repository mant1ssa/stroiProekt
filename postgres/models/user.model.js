import Sequilize from "sequelize";


const User = (sequelize) => {
    return sequelize.define("users", {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        age: {
            type: Sequilize.SMALLINT,
            allowNull: false
        },
        email: {
            type: Sequilize.STRING,
            allowNull: false
        }
        }, {
            timestamps: false,
            tableName: 'users'
        })
}

export default User;