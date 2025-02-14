import logoImg from "@/assets/logo.png";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton }: Props) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate("groups");
  };

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
};
