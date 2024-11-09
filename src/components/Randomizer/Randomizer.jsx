import Button from '../Button';
import { Wrapper, DishWrap, DishesList, DishesListItem, RandomizerWrap } from './Randomizer.styled';
import { useState } from 'react';

const Randomizer = () => {
    const [dishesArr] = useState(['Рис', 'Картопля смажена', 'Тефтелі', 'Гречка', 'Банош' , 'Печене м\'ясо', 'Картопля варена', 'Печені гомілки', 'Картопля печена']);
    const [dish, setDish] = useState('');

    const getRandomDish = () =>{
        const randomIndex = Math.floor(Math.random() * dishesArr.length);
        setDish(dishesArr[randomIndex]);
    }

    return (
        <Wrapper>
            <DishesList>
                {
                    dishesArr.map(dish => {
                        return (<DishesListItem key={dishesArr.indexOf(dish)}>{dish}</DishesListItem>)
                    })
                }
            </DishesList>
            <RandomizerWrap>
                {dish === '' ? (<DishWrap>This will be the random dish</DishWrap>) : (<DishWrap>{dish}</DishWrap>)}
                <Button clickHandler={getRandomDish}/>
            </RandomizerWrap>
        </Wrapper>
    );
}

export default Randomizer;
