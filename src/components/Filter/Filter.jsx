import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Search Contacts</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search by name or phone"
      />
    </div>
  );
};