"use strict";

!function (NioApp, $) {
  "use strict"; //////// for developer - barchart //////// 
  // Avilable options to pass from outside 
  // labels: array,
  // stacked: false - boolean,
  // legend: false - boolean,
  // dataUnit: string, (Used in tooltip or other section for display) 
  // datasets: [{label : string, color: string (color code with # or other format), data: array}]

  var barChartData = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    dataUnit: 'People',
    datasets: [{
      label: "join",
      color: "#b695ff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90]
    }, {
      label: "join",
      color: "#b695ff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90]
    }]
  };
  var barChartMultiple = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dataUnit: 'USD',
    datasets: [{
      label: "Income",
      color: "#b695ff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    }, {
      label: "Expense",
      color: "#f4aaa4",
      data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
    }]
  };
  var barChartStacked = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    stacked: true,
    dataUnit: 'USD',
    datasets: [{
      label: "Income",
      color: "#b695ff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    }, {
      label: "Expense",
      color: "#f4aaa4",
      data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
    }]
  };

  function barChart(selector, set_data) {
    var $selector = selector ? $(selector) : $('.bar-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data,
          _d_legend = typeof _get_data.legend === 'undefined' ? false : _get_data.legend;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          label: _get_data.datasets[i].label,
          data: _get_data.datasets[i].data,
          // Styles
          backgroundColor: _get_data.datasets[i].color,
          borderWidth: 2,
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          borderSkipped: 'bottom',
          barPercentage: .6,
          categoryPercentage: .7
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'bar',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
            labels: {
              boxWidth: 30,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data.datasets[tooltipItem[0].datasetIndex].label;
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          },
          scales: {
            yAxes: [{
              display: true,
              stacked: _get_data.stacked ? _get_data.stacked : false,
              position: NioApp.State.isRTL ? "right" : "left",
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#9eaecf'
              },
              gridLines: {
                color: NioApp.hexRGB("#526484", .2),
                tickMarkLength: 0,
                zeroLineColor: NioApp.hexRGB("#526484", .2)
              }
            }],
            xAxes: [{
              display: true,
              stacked: _get_data.stacked ? _get_data.stacked : false,
              ticks: {
                fontSize: 12,
                fontColor: '#9eaecf',
                source: 'auto',
                reverse: NioApp.State.isRTL
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 10,
                zeroLineColor: 'transparent'
              }
            }]
          }
        }
      });
    });
  } // init bar chart


  barChart(); //////// for developer - linechart //////// 
  // Avilable options to pass from outside 
  // labels: array,
  // legend: false - boolean,
  // dataUnit: string, (Used in tooltip or other section for display) 
  // datasets: [{label : string, color: string (color code with # or other format), data: array}]
	
  var solidLineChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dataUnit: 'BTC',
    lineTension: .4,
    legend: true,
    datasets: [{
      label: "Total Received",
      color: "#5ce0aa",
      background: 'transparent',
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
    }, {
      label: "Total Send",
      color: "#9d72ff",
      background: 'transparent',
      data: [80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82]
    }]
  };
  var filledLineChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dataUnit: 'BTC',
    lineTension: .4,
    datasets: [{
      label: "Total Received",
      color: "#9d72ff",
      background: NioApp.hexRGB('#9d72ff', .4),
      data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
    }]
  };
  var straightLineChart = {
    labels: ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
    dataUnit: 'VND',
    lineTension: 0,
    datasets: [{
      label: "Chỉ tiêu",
      color: "#1BA9DC",
      background: NioApp.hexRGB('#1BA9DC', .3),
      data: [370100, 408020, 408010, 540800, 530000, 567000, 666000,756841,786541,845126, 958449]
    },{
      label: "Hiện tại",
      color: "#eb6459",
      dash: [5],
      background: "transparent",
      data: [110000, 220000, 206010, 408000, 600000, 607000, 606000,743651,771256,802365, 538772]
    }]
  };
	// chart customer 360
	var straightLineChart1 = {
    labels: ["2018", "2019", "2020"],
    dataUnit: 'Triệu',
    lineTension: 0,
    datasets: [{
      label: "Total Received",
      color: "#D6124C",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1049, 1000, 1100]
    },{
      label: "Total Received",
      color: "#E989A4",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1000, 950, 1069]
    },{
      label: "Total Received",
      color: "#F4C3D3",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [789, 700, 912]
    },{
      label: "Total Received",
      color: "#7EADCA",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [515, 490, 560]
    },{
      label: "Total Received",
      color: "#0A5994",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [818, 780, 900]
    },{
      label: "Total Received",
      color: "#BED5E4",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [650, 602, 712]
    }]
  };
  var straightLineChart2 = {
    labels: ["2018", "2019", "2020", "2021"],
    dataUnit: 'Triệu',
    lineTension: 0,
    datasets: [{
      label: "Total Received",
      color: "#D6124C",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1049, 1000, 1100, 1300]
    },{
      label: "Total Received",
      color: "#E989A4",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1000, 950, 1069, 1009]
    },{
      label: "Total Received",
      color: "#F4C3D3",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [789, 700, 912, 812]
    },{
      label: "Total Received",
      color: "#7EADCA",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [515, 490, 560, 660]
    },{
      label: "Total Received",
      color: "#0A5994",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [818, 780, 900, 950]
    }]
  };
  var straightLineChart3 = {
    labels: ["2018", "2019", "2020", "2021"],
    dataUnit: 'Triệu',
    lineTension: 0,
    datasets: [{
      label: "Total Received",
      color: "#D6124C",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1049, 1000, 1100, 1300]
    },{
      label: "Total Received",
      color: "#E989A4",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1000, 950, 1069, 1009]
    },{
      label: "Total Received",
      color: "#F4C3D3",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [789, 700, 912, 812]
    },{
      label: "Total Received",
      color: "#7EADCA",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [515, 490, 560, 660]
    },{
      label: "Total Received",
      color: "#0A5994",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [818, 780, 900, 950]
    }]
  };
  var straightLineChart4 = {
    labels: ["2018", "2019", "2020", "2021"],
    dataUnit: 'Triệu',
    lineTension: 0,
    datasets: [{
      label: "Total Received",
      color: "#D6124C",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1049, 1000, 1100, 1300]
    },{
      label: "Total Received",
      color: "#E989A4",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [1000, 950, 1069, 1009]
    },{
      label: "Total Received",
      color: "#F4C3D3",
      background: 'transparent',
	  fill: false,
	  tension: 0.1,
      data: [789, 700, 912, 812]
    }]
  };
  
  function lineChart(selector, set_data) {
    var $selector = selector ? $(selector) : $('.line-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          label: _get_data.datasets[i].label,
          tension: _get_data.lineTension,
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].color,
          pointBorderColor: _get_data.datasets[i].color,
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: _get_data.datasets[i].color,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 2,
          pointRadius: 4,
		  showLine: true,
          pointHitRadius: 4,
          data: _get_data.datasets[i].data
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'line',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
			responsive: true,
            labels: {
              boxWidth: 12,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          },
          scales: {
            yAxes: [{
              display: true,
              position: NioApp.State.isRTL ? "right" : "left",
              ticks: {
                beginAtZero: false,
                fontSize: 12,
                fontColor: '#9eaecf',
                padding: 10
              },
              gridLines: {
                color: NioApp.hexRGB("#526484", .2),
                tickMarkLength: 0,
                zeroLineColor: NioApp.hexRGB("#526484", .2)
              }
            }],
            xAxes: [{
              display: true,
			  responsive: false,
              ticks: {
                fontSize: 12,
                fontColor: '#9eaecf',
                source: 'auto',
                padding: 5,
                reverse: NioApp.State.isRTL
              },
              gridLines: {
                color: NioApp.hexRGB("#526484", .2),
                tickMarkLength: 10,
                zeroLineColor: NioApp.hexRGB("#526484", .2),
              }
            }]
          }
        }
      });
    });
  } // init line chart


  lineChart(); //////// for developer - pieChart //////// 
  // Avilable options to pass from outside 
  // labels: array,
  // legend: false - boolean,
  // dataUnit: string, (Used in tooltip or other section for display) 
  // datasets: [{label : string, color: string (color code with # or other format), data: array}]

  var pieChartData = {
    labels: ["Đã tư vấn", "Đang tư vấn", "Chưa tư vấn"],
    dataUnit: 'KH',
    legend: false,
    datasets: [{
      borderColor: "#fff",
      background: ["#F4C3D3", "#E04D77", "#D6124C"],
      data: [110, 80, 125]
    }]
  };
 
  var pieChartDataEff = {
    labels: ["TOI", "TOI BQ/KH", "NII cho vay", "NII huy động", "Phí"],
    dataUnit: 'KH',
    legend: false,
    datasets: [{
      borderColor: "#fff",
      background: ["#1BA9DC", "#FA6D27", "#FF82B7", "#793316", "#337916"],
      data: [100, 30, 40,20, 10]
    }]
  };
	var pieChartDataKH = {
		labels: ["KH sinh nhật trong tháng", "TK HĐV đến hạn trong 7D", "TK CV đến hạn trong 7D", "HĐBH đến kỳ nộp phí trong 7D", "HĐBH sắp tất toán trong 7D", "ipay Tempin", "ipay inactive trong 6 tháng", "Thẻ tín dụng đến hạn trong 7D"],
		dataUnit: 'KH',
		legend: false,
		datasets: [{
		  borderColor: "#fff",
		  background: ["#66B22E", "#FE220A", "#FFA9CE","#FFE793", "#9A6BFF", "#1BA9DC","#FA6D27", "#B97A57"],
		  data: [20, 68, 10,10, 6, 15,20, 10]
		}]
	  };
  function pieChart(selector, set_data) {
    var $selector = selector ? $(selector) : $('.pie-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].borderColor,
          hoverBorderColor: _get_data.datasets[i].borderColor,
          data: _get_data.datasets[i].data
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'pie',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
            labels: {
              boxWidth: 12,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          rotation: -.2,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          }
        }
      });
    });
  } // init pie chart


  pieChart();
   var thietkegiaiphap = {
    //labels: [ "Đang tư vấn", "Chưa tư vấn"],
    //dataUnit: 'KH',
    legend: false,
	tooltip: false,
    datasets: [{
      borderColor: "#fff",
      background: ["#D6124C", "#FBFCFD"],
      data: [110, 80]
    }]
  };
  function piePer(selector, set_data) {
    var $selector = selector ? $(selector) : $('.piePer');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].borderColor,
          data: _get_data.datasets[i].data
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'pie',
        data: {
          datasets: chart_data
        },
      });
    });
  } // init pie chart
  piePer();
  var doughnutChartData = {
    labels: ["Send", "Receive", "Withdraw"],
    dataUnit: 'BTC',
    legend: false,
    datasets: [{
      borderColor: "#fff",
      background: ["#b695ff", "#f4aaa4", "#8feac5"],
      data: [110, 80, 125]
    }]
  };

  function doughnutChart(selector, set_data) {
    var $selector = selector ? $(selector) : $('.doughnut-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].borderColor,
          hoverBorderColor: _get_data.datasets[i].borderColor,
          data: _get_data.datasets[i].data
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'doughnut',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
            labels: {
              boxWidth: 12,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          rotation: 1,
          cutoutPercentage: 40,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          }
        }
      });
    });
  } // init doughnut chart


  doughnutChart();
  var polarChartData = {
    labels: ["Send", "Receive", "Withdraw"],
    dataUnit: 'VND',
    legend: false,
    datasets: [{
      borderColor: "#fff",
      background: [NioApp.hexRGB("#b695ff", .8), NioApp.hexRGB("#13C9F2", .8), NioApp.hexRGB("#FF82B7", .8)],
      data: [184000, 148000, 45000]
    }]
  };

  function polarAreaChart(selector, set_data) {
    var $selector = selector ? $(selector) : $('.polar-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].borderColor,
          hoverBorderColor: _get_data.datasets[i].borderColor,
          data: _get_data.datasets[i].data
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'polarArea',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            rtl: NioApp.State.isRTL,
            labels: {
              boxWidth: 12,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            rtl: NioApp.State.isRTL,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          }
        }
      });
    });
  } // init line chart


  polarAreaChart();
}(NioApp, jQuery);