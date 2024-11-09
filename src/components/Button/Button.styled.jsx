import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
    border-radius: ${props => props.theme.radii.button}px;
    background:  ${props => props.theme.colors.btnGrad};
    transition: ${props => props.theme.transitions.trAllDefLin};
    color: ${props => props.theme.colors.whiteText};
    padding: 8px 16px;
    text-align: center;
    display: inline-block;
    border: 0;
    font-size: 18px;
    cursor: pointer;
    min-width: 180px;
    &:hover, &:focus {
      opacity: 0.8;
    }
`;

export const RandomizeBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0 0 0;
`;