//This component is defined as a functional component using the arrow function syntax (const TypesOfFruit = () => { ... }).
const TypesOfFruit = () => {
//In this case, it returns a <div> element that contains an <h2> element with the text "Fruits:" and an unordered list (<ul>) with four list items (<li>) representing different types of fruits.

return(
<div>
<h2>Fruits:</h2>
<ul>
<li>Apples</li>
<li>Blueberries</li>
<li>Strawberries</li>
<li>Bananas</li>
</ul>
</div>
);
}

//This component is also a functional component defined using the arrow function syntax (const Fruits = () => { ... }).
//It returns JSX, but in the provided code, it doesn't render any elements or content. The <div> element is empty.

const Fruits = () => {
  return (
    <div>
    </div>
  );
};
//This component is defined as a class component using the class syntax (class TypesOfFood extends React.Component { ... }).
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
    render() 
    //
        return (
          <div>
            <h1>Types of Food:</h1>
            </div>
    );
  }
};
          
    
           