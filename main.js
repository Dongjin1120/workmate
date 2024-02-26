// 구글 맵을 초기화하는 함수를 작성합니다.
function initMap() {
    // 지도의 초기 위치를 설정합니다.
    let myLatLng = {lat: 37.64275523214001, lng: 126.94799898696702}; 

    // 맵을 생성하고 초기 위치에 표시합니다.
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {lat: 37.64275523214001 , lng: 126.94799898696702 }
    });

    const teammembers = [
        {label: "정민", name: "Sydney", lat: -33.88048572951443  , lng: 151.1931490741418  }, 
        {label: "미영", name: "France", lat: 48.87635330855851   , lng: 2.3435917310731167  },
        {label: "혜원", name: "New Zealand", lat: -41.21472999089703   , lng: 174.90537018038026  },
        {label: "나리", name: "Melbourne", lat: -37.81467389117771   , lng: 145.02000657985997  },
        {label: "동진", name: "Perth", lat: -31.942164290956356   , lng: 115.87872855699194  }
    ];

    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();

    teammembers.forEach(({label, name, lat, lng}) => {
        const marker = new google.maps.Marker({
            position: {lat, lng},
            map: map,
            label: label
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.panTo(marker.position);
            infoWindow.setContent(name);
            infoWindow.open({
                anchor: marker,
                map
            })
        })
    });
    map.fitBounds(bounds);        
}

initMap ();