import './Card.css'
function Card (props){
    const classes =  'card ' + props.className;
    //using props.children to allow component the other components in its.
    return (<div className={classes}>{props.children}</div>);
}

export default Card;