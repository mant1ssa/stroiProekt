
import Sequilize  from "sequelize";


async function test(){
    user.findAll().then(res => {
        console.log(res)
    })
}

test()