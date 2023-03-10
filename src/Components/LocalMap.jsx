import React, { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const LocalMap = ({doc}) => {
    const {x, y, place_name, phone} =doc;
    const [toggle, setToggle] = useState(false);
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: y,
        lng: x,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3}>
        
        <MapMarker position={{lat:y,lng:x,}}
                onClick={()=>setToggle(!toggle)}>
            {toggle &&
                <div style={{padding:'10px', fontSize:'12px'}}>
                    <div>{place_name}</div>
                    <div>{phone}</div>
                </div>
        }  
        </MapMarker>
    </Map>
  );
}

export default LocalMap