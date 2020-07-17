import { User } from "./users"
import database from "../data/db"



const user = new User(database, 'dashboard')

const models = {
    user
}

export default models;