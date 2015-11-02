import Ember from 'ember';

export default Ember.Component.extend({
    initMap: function(){
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            scrollwheel: false,
            zoom: 8
        });
        console.log('loading map')
    }.on('mapMade')
});
