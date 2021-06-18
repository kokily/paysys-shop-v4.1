import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useExpensive from './hooks/useExpensive';

function ExpensiveWedding() {
  const {
    husband_name,
    bride_name,
    wedding_at,
    event_at,
    onChange,
    onChangeDate,
  } = useExpensive();

  return (
    <>
      <div className="name-pane">
        <span className="name">신랑님: </span>
        <strong>
          <input
            type="text"
            className="name"
            name="husband_name"
            value={husband_name}
            onChange={onChange}
            autoFocus
          />
        </strong>
        <span className="name"> 신부님: </span>
        <strong>
          <input
            type="text"
            className="name"
            name="bride_name"
            value={bride_name}
            onChange={onChange}
          />
        </strong>
      </div>

      <div className="date">
        <span>웨딩일자: </span>
        <DatePicker
          locale="ko"
          startDate={wedding_at}
          selected={wedding_at}
          onChange={onChangeDate}
          dateFormat="yyyy, MM dd"
        />
        <span>웨딩시간: </span>
        <select name="event_at" value={event_at} onChange={onChange}>
          <option value="">전체</option>
          <option value="11:30">11:30</option>
          <option value="13:00">13:00</option>
          <option value="14:30">14:30</option>
          <option value="16:00">16:00</option>
          <option value="17:30">17:30</option>
          <option value="19:00">19:00</option>
        </select>
      </div>

      <hr style={{ width: '90%' }} />
    </>
  );
}

export default ExpensiveWedding;
