import { CgDanger } from "react-icons/cg";
function WeekListFrom() {
  return (
    <div className="week-list-form">
      <div className="container">
        <h2 className="form-title">
          <CgDanger />
          اختر الوقت المناسب للإستلام
        </h2>
        <form>
          <div className="day">
            <label>اختر اليوم</label>
            <select>
              <option>اليوم</option>
              <option value="sunday">الأحد</option>
              <option value="monday">الأثنين</option>
              <option value="tuesday">الثلاثاء</option>
              <option value="wednesday">الأربعاء</option>
              <option value="thursday">الخميس</option>
            </select>
          </div>
          <div className="time">
            <label>اختر الوقت</label>
            <input min="8:00" max="24:00" type="time" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default WeekListFrom;
