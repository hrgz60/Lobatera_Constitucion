var size = 0;
var placement = 'point';
function categories_Municipio_Lobatera_Parroquia_Constitucion_Precipitacion_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '1000 - 1400':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(69,225,58,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '600 - 1000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(205,64,76,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Municipio_Lobatera_Parroquia_Constitucion_Precipitacion_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("rango");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Municipio_Lobatera_Parroquia_Constitucion_Precipitacion_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
