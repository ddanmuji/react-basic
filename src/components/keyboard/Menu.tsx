import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { FONT_LIST } from '../../constants';
import { font, theme } from '../../recoil';
import * as S from './Menu.styled';

const Menu = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(theme.isDarkMode);
  const [fontFamily, setFontFamily] = useRecoilState(font.fontAtom);

  const onToggleSwitch = () => setIsDarkMode((prev) => !prev);
  const onChangeFont = (e: ChangeEvent<HTMLSelectElement>) =>
    setFontFamily(e.target.value as typeof FONT_LIST[number]);

  return (
    <S.Container>
      <S.Switch onClick={onToggleSwitch}>
        <S.Circle active={isDarkMode} />
      </S.Switch>
      <S.SelectWrapper>
        <S.Select onChange={onChangeFont} value={fontFamily}>
          {FONT_LIST.map((font, idx) => (
            <option key={idx} value={font}>
              {`Font ${idx + 1}`}
            </option>
          ))}
        </S.Select>
      </S.SelectWrapper>
    </S.Container>
  );
};

export default Menu;
