Highcharts.chart('columnChartKH', {
  chart: {
    type: 'column'
  },
  xAxis: {
    categories: [
      'Năm 2019',
      'Năm 2020',
      'Năm 2021'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Khách hàng (KH)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y} KH</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Quý 1',
    data: [75,80,85,]

  }, {
    name: 'Quý 2',
    data: [100,115,150,]

  }, {
    name: 'Quý 3',
    data: [125,162,118,]

  }, {
    name: 'Quý 4',
    data: [125,162,118,]

  }]
});