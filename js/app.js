var map;
function initMap() {
	var locations = [
		['atlanta', 33.7489954, -84.3879824, 4],
		['seattle', 47.6062095, -122.3320708, 5],
		['ny', 40.7127837, -74.00594130000002, 3],
		['san diego', 32.715738, -117.16108380000003, 2],
		['miami', 25.7616798, -80.19179020000001, 1]
	];
	var myLatLng = {lat: 37.09024, lng: -95.71289100000001};
	var mapOptions = {
		zoom: 10, 
		center: myLatLng, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	var infoWindow = new google.maps.InfoWindow({map: map});
	
	var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
	
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		map.setCenter(pos);
	}, function() {
		handleLocationError(true, infoWindow, map.getCenter());
	});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setContent(browserHasGeolocation ?
												'Error: The Geolocation service failed.' :
												'Error: Your browser doesn\'t support geolocation.');
	}
}

function newLocation(newLat,newLng) {
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

$(document).ready(function () {
	$(document).foundation();
	
	$("#atlanta").click(function () {
		console.log("atlanta");
	  newLocation(33.7489954, -84.3879824);
	});
  
	$("#seattle").click(function () {
		console.log("seattle");
	  newLocation(47.6062095, -122.3320708);
	});
  
  $("#ny").click(function () {
	  newLocation(40.7127837, -74.00594130000002);
	});
	
	$("#san-diego").click(function () {
	  newLocation(32.715738, -117.16108380000003);
	});
	
	$("#miami").click(function () {
	  newLocation(25.7616798, -80.19179020000001);
	});
	
});