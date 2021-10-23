var url = 'https://jsonp.afeld.me/?callback=?&url=https://binaryjazz.us/wp-json/genrenator/v1/genre/10';


$.getJSON (url, function(data) {
 

for (var i = 0; i < data.length; i++) {
    display.innerHTML += `${data[i]} <br> <br>`
}
});