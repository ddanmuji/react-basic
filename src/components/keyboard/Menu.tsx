import { useRecoilState } from 'recoil';
import { theme } from '../../recoil';
import * as S from './Menu.styled';

const Menu = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(theme.isDarkMode);
  const onToggleSwitch = () => setIsDarkMode((prev) => !prev);

  return (
    <S.Container>
      <S.Switch onClick={onToggleSwitch}>
        <S.Circle active={isDarkMode} />
      </S.Switch>
      <S.SelectBox>
        <label htmlFor="font">Font:</label>
        <S.Select id="font">
          <option value="" disabled selected>
            Choose Font
          </option>
          <option value="Comic Sans MS, Comic Sans, cursive">Font 1</option>
          <option value="Arial Narrow, sans-serif">Font 2</option>
          <option value="Chalkduster, fantasy">Font 3</option>
        </S.Select>
      </S.SelectBox>
    </S.Container>
  );
};

export default Menu;
