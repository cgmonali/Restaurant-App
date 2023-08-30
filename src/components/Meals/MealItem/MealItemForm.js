import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}//these are built in input element types
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;