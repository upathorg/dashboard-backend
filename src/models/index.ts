import { User } from "./users"
import database from "../data/db"



const user = new User(database)

const models = {
    user
}

export default models;