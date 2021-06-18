import { stringAccounting } from '../../../libs/utils';
import useExpensive from './hooks/useExpensive';

function Company() {
  const {
    company_husband,
    company_bride,
    rooftop_husband,
    rooftop_bride,
    owner_woman_husband,
    owner_woman_bride,
    owner_man_husband,
    owner_man_bride,
    select_husband,
    select_bride,
    frame_husband,
    frame_bride,
    dress_husband,
    dress_bride,
    hairpin_husband,
    hairpin_bride,
    wig_husband,
    wig_bride,
    video_husband,
    video_bride,
    etc_husband,
    etc_bride,
    onChange,
  } = useExpensive();

  return (
    <>
      <h3>웨딩업체</h3>

      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th className="basic" style={{ background: 'skyblue' }}>
              신랑
            </th>
            <th className="basic" style={{ background: 'pink' }}>
              신부
            </th>
            <th className="basic red">계</th>
          </tr>

          <tr>
            <th>웨딩업체</th>
            <td>
              <input
                type="number"
                name="company_husband"
                value={company_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="company_bride"
                value={company_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(company_husband) + parseInt(company_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>야간옥상전구</th>
            <td>
              <input
                type="number"
                name="rooftop_husband"
                value={rooftop_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="rooftop_bride"
                value={rooftop_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(rooftop_husband) + parseInt(rooftop_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>메이크업(여)</th>
            <td>
              <input
                type="number"
                name="owner_woman_husband"
                value={owner_woman_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="owner_woman_bride"
                value={owner_woman_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(owner_woman_husband) + parseInt(owner_woman_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>메이크업(남)</th>
            <td>
              <input
                type="number"
                name="owner_man_husband"
                value={owner_man_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="owner_man_bride"
                value={owner_man_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(owner_man_husband) + parseInt(owner_man_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>셀 렉</th>
            <td>
              <input
                type="number"
                name="select_husband"
                value={select_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="select_bride"
                value={select_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(select_husband) + parseInt(select_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>액 자</th>
            <td>
              <input
                type="number"
                name="frame_husband"
                value={frame_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="frame_bride"
                value={frame_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(frame_husband) + parseInt(frame_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>드레스</th>
            <td>
              <input
                type="number"
                name="dress_husband"
                value={dress_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="dress_bride"
                value={dress_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(dress_husband) + parseInt(dress_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>헤어피스</th>
            <td>
              <input
                type="number"
                name="hairpin_husband"
                value={hairpin_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="hairpin_bride"
                value={hairpin_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(hairpin_husband) + parseInt(hairpin_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>가 발</th>
            <td>
              <input
                type="number"
                name="wig_husband"
                value={wig_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="wig_bride"
                value={wig_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(parseInt(wig_husband) + parseInt(wig_bride))}원
            </td>
          </tr>

          <tr>
            <th>비디오촬영</th>
            <td>
              <input
                type="number"
                name="video_husband"
                value={video_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="video_bride"
                value={video_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(
                parseInt(video_husband) + parseInt(video_bride)
              )}
              원
            </td>
          </tr>

          <tr>
            <th>기 타</th>
            <td>
              <input
                type="number"
                name="etc_husband"
                value={etc_husband}
                onChange={onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="etc_bride"
                value={etc_bride}
                onChange={onChange}
              />
            </td>
            <td>
              {stringAccounting(parseInt(etc_husband) + parseInt(etc_bride))}원
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Company;
