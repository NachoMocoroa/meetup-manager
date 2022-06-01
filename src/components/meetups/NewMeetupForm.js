import { useDispatch } from "react-redux";
import { saveMeetup } from "../../redux/action";
import { useForm } from '../../util-hooks/useForm';
import Card from "../ui/Card";
import FormInput from "./FormInput";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  
  const dispatch = useDispatch();

  const initialForm = {
    title: '',
    image: '',
    address: '',
    description: ''
  };

  const [formData, handleInputChange, reset] = useForm(initialForm);

  const { title, image, address, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveMeetup(formData));
    reset();
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormInput 
          type="text"  
          isRequired={true} 
          labelText="Meetup Title" 
          inputClass={classes.control} 
          attribute="title" 
          value={ title } 
          handleInputChange={ handleInputChange } 
        />
        <FormInput 
          type="url"  
          isRequired={true} 
          labelText="Meetup Image" 
          inputClass={classes.control} 
          attribute="image" 
          value={ image } 
          handleInputChange={ handleInputChange } 
        />
        <FormInput 
          type="text"  
          isRequired={true} 
          labelText="Address" 
          inputClass={classes.control} 
          attribute="address" 
          value={ address } 
          handleInputChange={ handleInputChange } 
        />
        <FormInput 
          element="textarea"  
          isRequired={true} 
          labelText="Description" 
          inputClass={classes.control} 
          attribute="description" 
          value={ description } 
          handleInputChange={ handleInputChange } 
        />
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
