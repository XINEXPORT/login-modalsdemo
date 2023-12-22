import {db,User} from '../database/model.js'

await db.sync({force:true})

for (let i=0; i < 4; i++){
    await User.create({email: `test${i}@email.com`, password:'test'})
}

await db.close()