import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background: #fff;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    align-ittems: center;
    justify-content: space-between; 
    max-width: 500px;
    border-radius: ${props => props.theme.radii.wrapers}px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center; 
        padding: 30px 15px;
    }
`;
export const RandomizerWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-ittems: center;
    justify-content: flex-end; 
    flex-grow: 1;
`;  
export const DishWrap = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: ${props => props.theme.colors.textColor};
    @media screen and (max-width: 768px) {
        margin-top: 50px;
        min-height: 70px;
    }
`;
export const DishesList = styled.ul`
    display: flex;
    flex-direction: column;
    align-ittems: center;
    justify-content: center; 
    padding: 0px 30px 0 0;
    font-size: 20px;
    min-width: 250px;
    color:  ${props => props.theme.colors.lightText};
    list-style:none;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`;
export const DishesListItem = styled.li`
    &:not(:last-child){
        margin-bottom: 10px;
    }
    @media screen and (max-width: 768px) {
        &:not(:last-child){
            margin-bottom: 5px;
        }
    }
`;