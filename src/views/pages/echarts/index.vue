<template>
	<div >
		<span>echarts</span>
		<el-form @submit.native.prevent ref="searchForm" :inline="true" >
        <el-form-item label="毒理类型">
          <el-select
            @change="getList"
            value-key="id"
            v-model="drugExportClass"
            placeholder="请选择"
          >
            <el-option
              v-for="item in drugExportClassDictList"
              :key="item.id"
              :label="item.name"
              :value="item.val"
              
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
		<div id="myChart" style="width:100%;height:550px"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				drugExportClass:"2",
				drugExportClassDictList:[{val:"1",name:"麻醉药品"},{val:"2",name:"普通药品"},{val:"3",name:"精神二类"}],
				datas:['药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12'],

				title:"普通药品"


			}

		},
		methods:{
 getList(){
 	if(this.drugExportClass=="1"){
 		this.datas=['药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12'];

 	}else if(this.drugExportClass=="2"){
 		this.datas=['毒品1','毒品1','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12']

 	}else if(this.drugExportClass=="3"){
 		this.datas=['测试1','测试2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12']

 	}
 	this.getInit(this.datas,this.title);


 },
			getInit(datas,title){
				var myChart = this.$echarts.init(document.getElementById('myChart'));
				console.log(myChart)
				myChart.setOption({
     title: {
        text: '库存预警',
        subtext: title
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['当前库存','库存下限',"库存上限"]
    },
    toolbox: {
        show: true,
        id:"type",
        left:100,
        top:0,
        feature: {
        	dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['bar']},
            //saveAsImage: {show: true},
             restore: {show: true},
             myTool2: {
                show: true,
                title: '毒理类型',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function (){
                   var type=document.getElementById('type');
                   console.log(type)
                }
            }
        }
    },
    xAxis: {
        type: 'category',
        axisPointer: {
                type: 'shadow'
            },
            data:datas,

        // data: ['药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12','药品1','药品2','药品3','药品4','药品5','药品6','药品7','药品8','药品9','药品10','药品11','药品12'],
        axisLabel: {  
                               interval: 0,  
                               formatter:function(value)  
                               {  
                                   return value.split("").join("\n");  
                               }  
                           },
                            axisLine:{
                        lineStyle:{
                            color:'#ffff00',
                        }
                    }
    },
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      left: '9%',
      bottom: -15,
      start: 0,
      end: 70 //初始化滚动条
  }],

    yAxis: {
        type: 'value',
        name:"数量",
        color:'#FFFF00',
        min: 0,
            //max: 250,
            interval: 10,
    },
    series: [{
        name: '当前库存',
        type: 'bar',
        smooth: true,//是否平滑曲线显示
        data:[2, 4, 7, 23, 25, 76, 12, 162, 32, 20, 266, 3,2, 4, 7, 23, 25, 76, 12, 162, 32, 20, 266, 3,2, 4, 7, 23, 25, 76, 12, 162, 32, 20, 266, 3,2, 4, 7, 23, 25, 76, 12, 162, 32, 20, 266, 3]
    },
    // {
    //     name: '库存上限',
    //     type: 'line',
    //     smooth: true,
    //    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    // },
    {
        name: '库存下限',
        type: 'line',
        smooth: true,//是否平滑曲线显示
        data:[21, 4, 73, 13, 15, 86, 13, 162, 34, 23, 62, 32,21, 4, 73, 13, 15, 86, 13, 162, 34, 23, 62, 32,21, 4, 73, 13, 15, 86, 13, 162, 34, 23, 62, 32,21, 4, 73, 13, 15, 86, 13, 162, 34, 23, 62, 32]
    }]


})

			}
		},
		mounted(){
			this.getInit(this.datas,this.title);

		}
	}
</script>