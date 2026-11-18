import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 2호선 <b>을지로입구역 5번출구</b>
            <br />
                  4호선 <b>명동역 8번출구</b>
            
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            <b>국가인권위, 안중근활동터</b> 혹은 <b>명동역7번출구</b> 정류장 하차
           
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>파인애비뉴 빌딩 지하주차장</b> 혹은 서울 중구 을지로 100 검색
            <br />
            - 성당 지하 주차장 지원 및 경내 진입이 불가합니다.
            <br />
            - 파인애비뉴 주차 요금은 <b>주차권 사용시 2시간 무료</b>입니다.
            <br />
            (주차장 이용 시 도보 360m)
          </div>
         
        </div>
      </LazyDiv>
    </>
  )
}
