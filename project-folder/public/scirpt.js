let map, marker, score = 5000;
const correctLocations = [
    { lat: 35.6895, lng: 139.6917 }, // 東京
    { lat: 34.6937, lng: 135.5023 }, // 大阪
    { lat: 43.0646, lng: 141.3468 }  // 札幌
];
let currentQuestionIndex = 0;
let isFinalAnswerShown = false;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.5, lng: 137.5 },
        zoom: 6,
        mapTypeId: 'roadmap'
    });

    map.addListener("click", (e) => {
        placeMarker(e.latLng);
    });

    document.getElementById("goButton").addEventListener("click", calculateScore);
    document.getElementById("finalAnswerButton").addEventListener("click", showFinalAnswer);
    document.getElementById("setQuestionButton").addEventListener("click", setQuestion);

    document.querySelectorAll('input[name="mapType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            map.setMapTypeId(e.target.value);
        });
    });
}

function loadMap() {
    if (typeof google === "undefined" || !google.maps) {
        alert("地図の読み込みに失敗しました。再読み込みしてください。");
        return;
    }
    initMap();
}

window.onload = loadMap;

// 他の関数（placeMarker, calculateScore, showFinalAnswer, setQuestionなど）はそのまま
