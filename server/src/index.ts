import 'reflect-metadata'
import { createKoaServer } from "routing-controllers"
import setupDb from './db'
//import controllers into here
import UserController from "./users/controller"
import LoginController from './logins/controller';
import BatchController from './batches/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
    controllers: [
        UserController,
        LoginController,
        BatchController
    ]
})

setupDb()
    .then(_ =>
        app.listen(port, () => console.log('Listening on port 4000'))
    )
    .catch(err => console.error(err))
