var dataPrev = {
  2016: [
    ['Kích hoạt thẻ ATM', 155000000,'#E04D77'],
    ['Mua bảo hiểm', 285412000,'#54976B'],
    ['Đăng ký IPAY', 166412000,'#014F97'],
    ['Mở tài khoản', 209000000,'#493CAD'],
    ['Đăng ký thẻ tín dụng', 100365000,'#4CC6E1']
  ]
};

var data = {
  2016: [
    ['Kích hoạt thẻ ATM', 125000000],
    ['Mua bảo hiểm', 265412000],
    ['Đăng ký IPAY', 186412000],
    ['Mở tài khoản', 169000000],
    ['Đăng ký thẻ tín dụng', 210365000]
  ]
};

var countries = [  {
  name: 'Kích hoạt thẻ ATM',
  flag: 'Kích hoạt thẻ ATM',
  color: '#E04D77'
}, {
  name: 'Mua bảo hiểm',
  flag: 'Mua bảo hiểm',
  color: '#54976B'
},{
  name: 'Đăng ký IPAY',
  flag: 'Đăng ký IPAY',
  color: '#014F97'
}, {
  name: 'Mở tài khoản',
  flag: 'Mở tài khoản',
  color: '#493CAD'
}, {
  name: 'Đăng ký thẻ tín dụng',
  flag: 'Đăng ký thẻ tín dụng',
  color: '#4CC6E1'
}];
var countriesColor = [  {
  name: 'Kích hoạt thẻ ATM',
  flag: 'Kích hoạt thẻ ATM',
  color: '#FEE8EF'
}, {
  name: 'Mua bảo hiểm',
  flag: 'Mua bảo hiểm',
  color: '#EFFAF3'
},{
  name: 'Đăng ký IPAY',
  flag: 'Đăng ký IPAY',
  color: '#EBF5FF'
}, {
  name: 'Mở tài khoản',
  flag: 'Mở tài khoản',
  color: '#EFEDFC'
}, {
  name: 'Đăng ký thẻ tín dụng',
  flag: 'Đăng ký thẻ tín dụng',
  color: '#E1F5FB'
}];


function getData(data) {
  return data.map(function (country, i) {
    return {
      name: country[0],
      y: country[1],
      color: countries[i].color
    };
  });
}
function getDataColor(data) {
  return data.map(function (country, i) {
    return {
      name: country[0],
      y: country[1],
      color: countriesColor[i].color,
    };
  });
}

var chart = Highcharts.chart('campaign', {
  chart: {
    type: 'column'
  },
  
  plotOptions: {
    series: {
      grouping: false,
      borderWidth: 0
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} VND</b><br/>'
  },
  xAxis: {
    type: 'category',
    max: 4,
    labels: {
      useHTML: true,
      animate: true,
      formatter: function () {
        var value = this.value,
          output;

        countries.forEach(function (country) {
          if (country.name === value) {
            output = country.flag;
          }
        });

        return '<span>' + output + '</span>';
      }
    }
  },
  yAxis: [{
    title: {
      text: 'VND'
    },
    showFirstLabel: false,
  }],
   plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
  series: [{
    pointPlacement: -0.2,
    linkedTo: 'main',
    name: 'Target',
	color:'#95CEFF',
	data: dataPrev[2016].slice(),
	
  }, {
    name: 'Current',
    id: 'main',
	dataSorting: {
      enabled: true,
      matchByName: true
    },
    data: getData(data[2016]).slice()
  }],
  exporting: {
    allowHTML: true
  }
});
