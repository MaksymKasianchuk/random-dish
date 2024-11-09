import PropTypes from 'prop-types';
import { ButtonStyled, RandomizeBtnWrap } from './Button.styled';

const Button = ({clickHandler}) => {
    return(
        <RandomizeBtnWrap>
            <ButtonStyled type="button" onClick={() =>clickHandler()}>Get Random Dish</ButtonStyled>
        </RandomizeBtnWrap>
    )
};

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired,
};

export default Button;