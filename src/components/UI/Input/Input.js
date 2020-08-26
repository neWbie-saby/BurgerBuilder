import React from 'react';

import classes from './Input.module.css';

const input = props => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if(props.invalid && props.shouldCheck && props.editted)
        inputClasses.push(classes.Invalid);
    
    switch(props.elementType){
        case ('input'):
            inputElement = <input
             {...props.elementConfig}
             className={inputClasses.join(' ')}
             value={props.value} onChange={props.entered} />;
            break;
        case ('textarea'):
            inputElement = <textarea
             {...props.elementConfig} 
             className={inputClasses.join(' ')}
             value={props.value} onChange={props.entered} />;
            break;
        case ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')}
                 value={props.value} onChange={props.entered} >
                    {props.elementConfig.options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
             {...props.elementConfig} 
             className={inputClasses.join(' ')}
             value={props.value} onChange={props.entered} />;
    }
    
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
    
};

export default input;