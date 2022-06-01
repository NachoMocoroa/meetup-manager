export default function FormInput({ element, type, isRequired, labelText, inputClass, attribute, value, handleInputChange }) {

  return (
    <div className={inputClass}>
      <label htmlFor={attribute}>
        {labelText}
      </label>
      {element==="textarea" ? (
          <textarea 
            required={isRequired} 
            rows="5" 
            id={attribute} 
            name={attribute} 
            value={ value }
            onChange={ handleInputChange }
          ></textarea>  
        ) 
        : (
          <input 
            type={type} 
            required={isRequired} 
            id={attribute} 
            name={attribute} 
            value={ value } 
            onChange={ handleInputChange } 
          />
        )
      }
      
    </div>
  );
};
