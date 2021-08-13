"use strict";
(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define(['jquery', 'googlemaps!'], factory);
  }
  else {
    root.GMaps = factory();
  }


}(this, function() {


/*!
 * GMaps.js v0.4.25
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2017, Gustavo Leon
 * Released under the MIT License.
 */

var extend_object = function(obj, new_obj) {};

var replace_object = function(obj, replace) {};

var array_map = function(array, callback) {};

var array_flat = function(array) {};

var coordsToLatLngs = function(coords, useGeoJSON) {};

var arrayToLatLng = function(coords, useGeoJSON) {};

var getElementsByClassName = function (class_name, context) {};

var getElementById = function(id, context) {};

var findAbsolutePosition = function(obj)  {};

var GMaps = (function(global) {
  "use strict";

  var doc = document;
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @class GMaps
   * @constructs
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * * `lat` (number): Latitude of the map's center
   * * `lng` (number): Longitude of the map's center
   * * `el` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  var GMaps = function(options) {};

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {};

/**
 * Add a custom control to the map UI.
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function(options) {};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function(control) {};

GMaps.prototype.createMarker = function(options) {};

GMaps.prototype.addMarker = function(options) {};

GMaps.prototype.addMarkers = function(array) {};

GMaps.prototype.hideInfoWindows = function() {};

GMaps.prototype.removeMarker = function(marker) {};

GMaps.prototype.removeMarkers = function (collection) {};

GMaps.prototype.drawOverlay = function(options) {};

GMaps.prototype.removeOverlay = function(overlay) {};

GMaps.prototype.removeOverlays = function() {};

GMaps.prototype.drawPolyline = function(options) {};

GMaps.prototype.removePolyline = function(polyline) {};

GMaps.prototype.removePolylines = function() {};

GMaps.prototype.drawCircle = function(options) {};

GMaps.prototype.drawRectangle = function(options) {};

GMaps.prototype.drawPolygon = function(options) {};

GMaps.prototype.removePolygon = function(polygon) {};

GMaps.prototype.removePolygons = function() {};

GMaps.prototype.getFromFusionTables = function(options) {};

GMaps.prototype.loadFromFusionTables = function(options) {};

GMaps.prototype.getFromKML = function(options) {};

GMaps.prototype.loadFromKML = function(options) {};

GMaps.prototype.addLayer = function(layerName, options) {};

GMaps.prototype.removeLayer = function(layer) {};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {};

GMaps.prototype.removeRoutes = function() {
  this.routes.length = 0;
};

GMaps.prototype.getElevations = function(options) {};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function(options, renderOptions) {};

GMaps.prototype.drawRoute = function(options) {};

GMaps.prototype.travelRoute = function(options) {};

GMaps.prototype.drawSteppedRoute = function(options) {};

GMaps.Route = function(options) {};

GMaps.Route.prototype.getRoute = function(options) {};

GMaps.Route.prototype.back = function() {};

GMaps.Route.prototype.forward = function() {};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {};

GMaps.prototype.toImage = function(options) {};

GMaps.staticMapURL = function(options){};

GMaps.prototype.addMapType = function(mapTypeId, options) {};

GMaps.prototype.addOverlayMapType = function(options) {};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {};

GMaps.prototype.addStyle = function(options) {};

GMaps.prototype.setStyle = function(mapTypeId) {};

GMaps.prototype.createPanorama = function(streetview_options) {};

GMaps.createPanorama = function(options) {};

GMaps.prototype.on = function(event_name, handler) {};

GMaps.prototype.off = function(event_name) {};

GMaps.prototype.once = function(event_name, handler) {};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {};

GMaps.off = function(event_name, object) {};

GMaps.once = function(event_name, object, handler) {};

GMaps.fire = function(event_name, object, scope) {};

GMaps.geolocate = function(options) {};

GMaps.geocode = function(options) {};

if (typeof window.google === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {};
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function(latLng) {};
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function(latLng) {};
  }

  google.maps.Rectangle.prototype.containsLatLng = function(latLng) {};

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {};

  google.maps.Marker.prototype.setFences = function(fences) {};

  google.maps.Marker.prototype.addFence = function(fence) {};

  google.maps.Marker.prototype.getId = function() {};
}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {}
}

return GMaps;
}));