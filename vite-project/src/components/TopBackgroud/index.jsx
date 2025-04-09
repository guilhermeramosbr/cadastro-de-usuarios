
import { Background } from "./styles";
import UserImage from '../../assets/users.png'

function TopBackground({ children }) {

    return (
        <Background>
            <img src={UserImage} alt="imagem-usuarios" />
        </Background>
    )
}

export default TopBackground
