// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map(ingredient => {
                return <li key={ingredient.name} style={{backgroundColor: ingredient.color}}>
                <p>{ingredient.name}</p>
                <button onClick={() => props.removeFromBurger(ingredient)}>x</button>
            </li>
            })}
        </ul>
    )
};

export default BurgerStack;
