import { Router } from 'express';
import { UserController } from './user.controller';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';


class UserRouter {

    public router: Router;


    constructor() {
        this.router = Router();
        // this.router.use();
        this.router.use(cors());
        this.router.use(bodyParser.json());

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }


    getRoutes() {
        this.router.get('/kafka',        
        UserController.kafa)

        
    }
    postRoutes() {

       
    }
    patchRoutes() {
      
    }
    deleteRoutes() {
        //DELETE IMAGE 
      
    }

}

export default new UserRouter().router;