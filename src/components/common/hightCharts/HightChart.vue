<template>
  <div id="container" style="width:100%; height:270px"></div>
</template>
<script>
  import './highcharts'

  export default {
    props: {
      type: {
        type: Array
      },
      datas: {
        type: Array
      }
    },
    watch: {
      type: function (val) {
        this.showHighChart()
      }
    },
    mounted() {
      this.showHighChart()
    },
    methods: {
      showHighChart() {
        const {title, subTitle, type, datas} = this._props
        let chart = new Highcharts.Chart('container', {
          colors: ['#fc8246', '#5b74bd'],
          title: {
            text: null
          },
          xAxis: {
            categories: type
          },
          yAxis: {
            title: {
              text: null
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          legend: {
            itemStyle: {
              "fontSize": "12px",
              "fontWeight": "normal"
            },
            enabled: false
          },
          credits: {
            enabled: false
          },
          series: datas
        })
      }
    }
  }
</script>
