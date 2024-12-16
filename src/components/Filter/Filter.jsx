import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/contacts/selectors';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label className={s.label}>
        Find contacts by name or number
        <input type="text" value={filter} onChange={handleChange} className={s.inputF}/>
      </label>
    </div>
  );
};