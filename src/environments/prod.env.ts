import { Environment } from './env'

export const ProdEnvironment: Environment = {
    db_url: "",
    jwt_secret: "test1",
    image_path:"https://erm-node.herokuapp.com/",
    emailjs_com: {
        service_id: '',
        user_id: ""
    }
}