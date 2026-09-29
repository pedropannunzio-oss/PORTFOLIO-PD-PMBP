var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_04082025_EIXO_LOGRADOUROmodificadoSMP_1 = new ol.format.GeoJSON();
var features_04082025_EIXO_LOGRADOUROmodificadoSMP_1 = format_04082025_EIXO_LOGRADOUROmodificadoSMP_1.readFeatures(json_04082025_EIXO_LOGRADOUROmodificadoSMP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04082025_EIXO_LOGRADOUROmodificadoSMP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04082025_EIXO_LOGRADOUROmodificadoSMP_1.addFeatures(features_04082025_EIXO_LOGRADOUROmodificadoSMP_1);
var lyr_04082025_EIXO_LOGRADOUROmodificadoSMP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04082025_EIXO_LOGRADOUROmodificadoSMP_1, 
                style: style_04082025_EIXO_LOGRADOUROmodificadoSMP_1,
                popuplayertitle: '04082025_EIXO_LOGRADOURO-modificadoSMP',
                interactive: false,
    title: '04082025_EIXO_LOGRADOURO-modificadoSMP<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_0.png" /> Arterial<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_1.png" /> Arterial - Estrada Parque<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_2.png" /> Arterial Secundária<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_3.png" /> Coletora<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_4.png" /> Local<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_5.png" /> Regional<br />\
    <img src="styles/legend/04082025_EIXO_LOGRADOUROmodificadoSMP_1_6.png" /> <br />' });
var format_EQUIPAMENTOS_SEMADS_2 = new ol.format.GeoJSON();
var features_EQUIPAMENTOS_SEMADS_2 = format_EQUIPAMENTOS_SEMADS_2.readFeatures(json_EQUIPAMENTOS_SEMADS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMENTOS_SEMADS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMENTOS_SEMADS_2.addFeatures(features_EQUIPAMENTOS_SEMADS_2);
var lyr_EQUIPAMENTOS_SEMADS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMENTOS_SEMADS_2, 
                style: style_EQUIPAMENTOS_SEMADS_2,
                popuplayertitle: 'EQUIPAMENTOS_SEMADS',
                interactive: true,
                title: '<img src="styles/legend/EQUIPAMENTOS_SEMADS_2.png" /> EQUIPAMENTOS_SEMADS'
            });
var format_EQUIPAMENTOS_EDUCACAO_3 = new ol.format.GeoJSON();
var features_EQUIPAMENTOS_EDUCACAO_3 = format_EQUIPAMENTOS_EDUCACAO_3.readFeatures(json_EQUIPAMENTOS_EDUCACAO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMENTOS_EDUCACAO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMENTOS_EDUCACAO_3.addFeatures(features_EQUIPAMENTOS_EDUCACAO_3);
var lyr_EQUIPAMENTOS_EDUCACAO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMENTOS_EDUCACAO_3, 
                style: style_EQUIPAMENTOS_EDUCACAO_3,
                popuplayertitle: 'EQUIPAMENTOS_EDUCACAO',
                interactive: true,
    title: 'EQUIPAMENTOS_EDUCACAO<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_0.png" /> EJA/Ensino Superior<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_1.png" /> Ensino Fundamental<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_2.png" /> Ensino Fundamental/EJA<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_3.png" /> Ensino Infantil<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_4.png" /> Ensino Infantil/Ensino Fundamental<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_5.png" /> Escola de Formação e Aperfeiçoamento<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_6.png" /> Núcleo de Apoio à Aprendizagem<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_7.png" /> Secretaria Municipal de Educação<br />\
    <img src="styles/legend/EQUIPAMENTOS_EDUCACAO_3_8.png" /> <br />' });
var format_EQUIPAMENTOS_ESPORTE_4 = new ol.format.GeoJSON();
var features_EQUIPAMENTOS_ESPORTE_4 = format_EQUIPAMENTOS_ESPORTE_4.readFeatures(json_EQUIPAMENTOS_ESPORTE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMENTOS_ESPORTE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMENTOS_ESPORTE_4.addFeatures(features_EQUIPAMENTOS_ESPORTE_4);
cluster_EQUIPAMENTOS_ESPORTE_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EQUIPAMENTOS_ESPORTE_4
});
var lyr_EQUIPAMENTOS_ESPORTE_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EQUIPAMENTOS_ESPORTE_4, 
                style: style_EQUIPAMENTOS_ESPORTE_4,
                popuplayertitle: 'EQUIPAMENTOS_ESPORTE',
                interactive: true,
                title: '<img src="styles/legend/EQUIPAMENTOS_ESPORTE_4.png" /> EQUIPAMENTOS_ESPORTE'
            });
var format_EQUIPAMENTOS_SAUDE_5 = new ol.format.GeoJSON();
var features_EQUIPAMENTOS_SAUDE_5 = format_EQUIPAMENTOS_SAUDE_5.readFeatures(json_EQUIPAMENTOS_SAUDE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMENTOS_SAUDE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMENTOS_SAUDE_5.addFeatures(features_EQUIPAMENTOS_SAUDE_5);
var lyr_EQUIPAMENTOS_SAUDE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMENTOS_SAUDE_5,
maxResolution:14.00223307613098,
 
                style: style_EQUIPAMENTOS_SAUDE_5,
                popuplayertitle: 'EQUIPAMENTOS_SAUDE',
                interactive: true,
    title: 'EQUIPAMENTOS_SAUDE<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_0.png" /> ALMOXARIFADO DA SECRETARIA DE SAÚDE<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_1.png" /> FISCALIZAÇÃO DE ZOONOSES<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_2.png" /> FISCALIZAÇÃO EPIDEMIOLÓGICA E SANITARIA<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_3.png" /> GESTÃO<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_4.png" /> TRANSPORTE PARA PACIENTES<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_5.png" /> UNIDADE DE SAÚDE - URGÊNCIA E EMERGÊNCIA<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_6.png" /> UNIDADE DE SAÚDE ESPECIALIZADA<br />\
    <img src="styles/legend/EQUIPAMENTOS_SAUDE_5_7.png" /> UNIDADE DE SAÚDE PRIMÁRIA<br />' });
var format_EQUIPAMENTOS_CULTURA_6 = new ol.format.GeoJSON();
var features_EQUIPAMENTOS_CULTURA_6 = format_EQUIPAMENTOS_CULTURA_6.readFeatures(json_EQUIPAMENTOS_CULTURA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMENTOS_CULTURA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMENTOS_CULTURA_6.addFeatures(features_EQUIPAMENTOS_CULTURA_6);
var lyr_EQUIPAMENTOS_CULTURA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMENTOS_CULTURA_6, 
                style: style_EQUIPAMENTOS_CULTURA_6,
                popuplayertitle: 'EQUIPAMENTOS_CULTURA',
                interactive: true,
                title: '<img src="styles/legend/EQUIPAMENTOS_CULTURA_6.png" /> EQUIPAMENTOS_CULTURA'
            });
var group_INFRAESTRUTURAURBANA = new ol.layer.Group({
                                layers: [lyr_EQUIPAMENTOS_SEMADS_2,lyr_EQUIPAMENTOS_EDUCACAO_3,lyr_EQUIPAMENTOS_ESPORTE_4,lyr_EQUIPAMENTOS_SAUDE_5,lyr_EQUIPAMENTOS_CULTURA_6,],
                                fold: 'open',
                                title: 'INFRAESTRUTURA URBANA'});
var group_VIASEESTRADAS = new ol.layer.Group({
                                layers: [lyr_04082025_EIXO_LOGRADOUROmodificadoSMP_1,],
                                fold: 'open',
                                title: 'VIAS E ESTRADAS'});
var group_Mapas = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mapas'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'group1'});

lyr_GoogleSatellite_0.setVisible(true);lyr_04082025_EIXO_LOGRADOUROmodificadoSMP_1.setVisible(true);lyr_EQUIPAMENTOS_SEMADS_2.setVisible(true);lyr_EQUIPAMENTOS_EDUCACAO_3.setVisible(true);lyr_EQUIPAMENTOS_ESPORTE_4.setVisible(true);lyr_EQUIPAMENTOS_SAUDE_5.setVisible(true);lyr_EQUIPAMENTOS_CULTURA_6.setVisible(true);
var layersList = [group_group1,group_VIASEESTRADAS,group_INFRAESTRUTURAURBANA];
lyr_04082025_EIXO_LOGRADOUROmodificadoSMP_1.set('fieldAliases', {'fid': 'fid', 'nome_via': 'nome_via', 'cod_log': 'cod_log', 'Hierarquia confome PA-16330/25 e D-4691/25': 'Hierarquia confome PA-16330/25 e D-4691/25', 'Diretriz conforme PA-16330/25 e D-4691/25': 'Diretriz conforme PA-16330/25 e D-4691/25', 'Observações': 'Observações', 'nome_igual_cadastro': 'nome_igual_cadastro', 'fora_da_ZDU1': 'fora_da_ZDU1', });
lyr_EQUIPAMENTOS_SEMADS_2.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Finalidade/Uso': 'Finalidade/Uso', 'Acessibilidade': 'Acessibilidade', 'AVCB_CLCB': 'AVCB_CLCB', 'Endereço': 'Endereço', 'Email': 'Email', 'Horário de atendimento ao público': 'Horário de atendimento ao público', 'Contato': 'Contato', });
lyr_EQUIPAMENTOS_EDUCACAO_3.set('fieldAliases', {'fid': 'fid', 'Nº': 'Nº', 'Equipamento': 'Equipamento', 'Endereço': 'Endereço', 'Nível/Tipo': 'Nível/Tipo', 'Telefone': 'Telefone', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'text': 'text', 'Observações': 'Observações', 'Tipo': 'Tipo', 'Vagas Manhã': 'Vagas Manhã', 'Vagas Tarde': 'Vagas Tarde', 'Vagas Integral': 'Vagas Integral', });
lyr_EQUIPAMENTOS_ESPORTE_4.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Endereço': 'Endereço', 'Tipo de equipamento': 'Tipo de equipamento', });
lyr_EQUIPAMENTOS_SAUDE_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Unidade': 'Unidade', 'Finalidade': 'Finalidade', 'Endereço': 'Endereço', 'AVCB': 'AVCB', 'Número': 'Número', 'Metragem (m²)': 'Metragem (m²)', 'Acessibilidade': 'Acessibilidade', 'Obs': 'Obs', 'Coordenadas': 'Coordenadas', 'Zona Rural': 'Zona Rural', });
lyr_EQUIPAMENTOS_CULTURA_6.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Endereço': 'Endereço', 'Email': 'Email', 'Telefone': 'Telefone', 'Horário de atendimento ao público': 'Horário de atendimento ao público', });
lyr_04082025_EIXO_LOGRADOUROmodificadoSMP_1.set('fieldImages', {'fid': 'TextEdit', 'nome_via': 'TextEdit', 'cod_log': 'TextEdit', 'Hierarquia confome PA-16330/25 e D-4691/25': 'TextEdit', 'Diretriz conforme PA-16330/25 e D-4691/25': 'TextEdit', 'Observações': 'TextEdit', 'nome_igual_cadastro': 'TextEdit', 'fora_da_ZDU1': 'TextEdit', });
lyr_EQUIPAMENTOS_SEMADS_2.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Finalidade/Uso': 'TextEdit', 'Acessibilidade': 'TextEdit', 'AVCB_CLCB': 'TextEdit', 'Endereço': 'TextEdit', 'Email': 'TextEdit', 'Horário de atendimento ao público': 'TextEdit', 'Contato': 'TextEdit', });
lyr_EQUIPAMENTOS_EDUCACAO_3.set('fieldImages', {'fid': 'TextEdit', 'Nº': 'TextEdit', 'Equipamento': 'TextEdit', 'Endereço': 'TextEdit', 'Nível/Tipo': 'TextEdit', 'Telefone': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'text': 'TextEdit', 'Observações': 'TextEdit', 'Tipo': 'TextEdit', 'Vagas Manhã': 'Range', 'Vagas Tarde': 'Range', 'Vagas Integral': 'Range', });
lyr_EQUIPAMENTOS_ESPORTE_4.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Endereço': 'TextEdit', 'Tipo de equipamento': 'TextEdit', });
lyr_EQUIPAMENTOS_SAUDE_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Unidade': 'TextEdit', 'Finalidade': 'TextEdit', 'Endereço': 'TextEdit', 'AVCB': 'TextEdit', 'Número': 'TextEdit', 'Metragem (m²)': 'TextEdit', 'Acessibilidade': 'TextEdit', 'Obs': 'TextEdit', 'Coordenadas': 'TextEdit', 'Zona Rural': 'TextEdit', });
lyr_EQUIPAMENTOS_CULTURA_6.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Endereço': 'TextEdit', 'Email': 'TextEdit', 'Telefone': 'TextEdit', 'Horário de atendimento ao público': 'TextEdit', });
lyr_04082025_EIXO_LOGRADOUROmodificadoSMP_1.set('fieldLabels', {'fid': 'no label', 'nome_via': 'no label', 'cod_log': 'no label', 'Hierarquia confome PA-16330/25 e D-4691/25': 'no label', 'Diretriz conforme PA-16330/25 e D-4691/25': 'no label', 'Observações': 'no label', 'nome_igual_cadastro': 'no label', 'fora_da_ZDU1': 'no label', });
lyr_EQUIPAMENTOS_SEMADS_2.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'header label - always visible', 'Finalidade/Uso': 'inline label - visible with data', 'Acessibilidade': 'hidden field', 'AVCB_CLCB': 'hidden field', 'Endereço': 'inline label - visible with data', 'Email': 'hidden field', 'Horário de atendimento ao público': 'inline label - visible with data', 'Contato': 'hidden field', });
lyr_EQUIPAMENTOS_EDUCACAO_3.set('fieldLabels', {'fid': 'hidden field', 'Nº': 'no label', 'Equipamento': 'header label - visible with data', 'Endereço': 'inline label - visible with data', 'Nível/Tipo': 'inline label - visible with data', 'Telefone': 'hidden field', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'text': 'hidden field', 'Observações': 'hidden field', 'Tipo': 'inline label - visible with data', 'Vagas Manhã': 'hidden field', 'Vagas Tarde': 'hidden field', 'Vagas Integral': 'hidden field', });
lyr_EQUIPAMENTOS_ESPORTE_4.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'header label - visible with data', 'Endereço': 'inline label - visible with data', 'Tipo de equipamento': 'inline label - visible with data', });
lyr_EQUIPAMENTOS_SAUDE_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Unidade': 'header label - visible with data', 'Finalidade': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'AVCB': 'hidden field', 'Número': 'hidden field', 'Metragem (m²)': 'hidden field', 'Acessibilidade': 'hidden field', 'Obs': 'hidden field', 'Coordenadas': 'hidden field', 'Zona Rural': 'hidden field', });
lyr_EQUIPAMENTOS_CULTURA_6.set('fieldLabels', {'fid': 'no label', 'Nome': 'header label - visible with data', 'Endereço': 'inline label - visible with data', 'Email': 'hidden field', 'Telefone': 'hidden field', 'Horário de atendimento ao público': 'inline label - visible with data', });
lyr_EQUIPAMENTOS_CULTURA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});