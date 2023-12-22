import {Model, DataTypes} from "sequelize"
import util from 'util'
import connectToDB from './db.js'

export const db = await connectToDB('postgresql:///demodata')

export class User extends Model{
    [util.inspect.customer](){
        returnthis.toJSON()
    }
}

User.init(
    {
        userId:{
            type:DataTypes. INTEGER,
            autoIncrement: true,
            primaryKey:true,
            unique:true,
            allowNull:false,
        },
        email: {
            type:DataTypes. STRING,
            unique:true,
            allowNull:false,
        },
        password: {
            type:DataTypes. STRING,
            allowNull:false,
    }
},
{
    modelName:'user',
    sequelize:db
}
)