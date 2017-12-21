function desenhaGrafico() {
	$("#grafico-linhas").highcharts({
		title: {
			text: "Incêndios em Portugal",
		},
		exporting: { 
			enabled: false
		},
		xAxis: {
			categories: ["2001", "2002", "2003", "2004", "2005", "2006",
				"2007", "2008", "2009", "2010", "2011", "2012", "2003", "2014", "2015", "2016", "2017"]
		},
		series: [{
			name: "Área ardida",
			data: [300, 290, 270, 240, 400, 220, 215, 170, 300, 250, 280, 230, 80, 170, 150, 160]
		},{
			name: "Nº de Ocorrências",
			data: [1000, 1100, 3800, 1200, 3000, 700, 300, 200, 700, 1200, 600, 900, 1300, 200, 500, 1500, 1900]
		}]
	});
};

