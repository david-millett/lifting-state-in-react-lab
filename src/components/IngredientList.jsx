// src/components/IngredientList.jsx

const IngredientList = (props) => {
    return (
        <ul>
            {props.availableIngredients.map(ingredient => {
                return <li key={ingredient.name} style={{backgroundColor: ingredient.color}}>
                    <p>{ingredient.name}</p>
                    <button onClick={() => props.addToBurger(ingredient)}>+</button>
                </li>
            })}
    </ul>
    )
};

export default IngredientList;
