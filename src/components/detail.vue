<template>
	<div class="container">
		<globalheader :msg='message'></globalheader>
		<hr>
		<div>
	       <vue-loading 
	       		type="spiningDubbles" 
	       		color="#d9544e" 
	       		:size="{ width: '50px', height: '50px' }" 
	       		v-show='isshow'>
	       	</vue-loading>    
    	</div>
    	<div class="row" v-for='item in content'>
			<h4>{{item.title}}</h4>
			<img :src="item.images.large">
			<p style='width:60%;margin:0 auto'>{{item.summary}}</p>
			<p>评分：{{item.rating.average}}</p>
			<p>年份：{{item.year}}</p>
			<p>类型： {{item.genres | connectfilter}}</p>
    	</div>
    	<hr>
    	<button class='btn btn-lg btn-success' @click='toback'>返回上一页</button>
	</div>
</template>
<script>
	import globalHeader from './header.vue';
	import vueLoading from 'vue-loading-template'
	import axios from 'axios';
	export default{
		data(){
			return {
				isshow:true,
				content:[],
				message:'详情页'
			}
		},
		filters:{
			connectfilter:function(value){
				return value.toString();
			}
		},
		methods:{
			toback(){
				this.$router.go(-1)
			}
		}
		,
		components:{
			vueLoading,
			globalheader:globalHeader
		},
		created:function(){
			var that = this;
			axios.get('/api/movie/subject/'+that.$route.params.id).then(function(data){
				that.isshow = false;
				that.content.push(data.data);
				console.log(data.data)
			})
			/*
			测试参数
			new Promise((resolve,reject)=>{
				setTimeout(function(){
					that.goodsid = that.$route.params.id;
					//throw new Error('cuo l ')
					resolve();
				},1500)
			}).then(
				function(){
					that.isshow=false;
				}
			)*/	
		}	
		}

</script>
<style scoped>
		.container{
			margin-top: 40px;
		}

		p:last-of-type{
			color:red;
			font-size:20px;
		}
		p:first-of-type{
			padding:10px;
		}
		p:nth-of-type(2){
			font-size:20px;
			color:green;
		}
		p:nth-of-type(3){
			font-size: 20px;
			color:purple;
		}
</style>