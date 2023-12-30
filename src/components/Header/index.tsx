import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackIcon, BackButton } from "./styles";
import LogoImg from '@assets/logo.png'

interface HeaderProps {
    showBackButton?: boolean
}

export function Header ({ showBackButton }: HeaderProps) {

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups')
    }

    return(
        <Container>
            {
                showBackButton && 
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }

            <Logo source={LogoImg}/>
        </Container>
    )
}