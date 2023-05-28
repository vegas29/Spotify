import { Button } from "semantic-ui-react"
import { Auth } from "../../api";


export const HomePage = () => {

    const { logout } = new Auth();
    
    return (
        <div>   
            HomePage
            <Button
                onClick={ () => logout()}
                color="red"
            >
                Cerrar Sesion
            </Button>
        </div>
    )
}
