<template>
	<div id='news'>
		<globalheader :msg='message'></globalheader>
		<h2>{{title}}</h2>
		<hr>
		 <div>
	       <vue-loading 
	       		type="spiningDubbles" 
	       		color="#d9544e" 
	       		:size="{ width: '50px', height: '50px' }" 
	       		v-show='isshow'>
	       	</vue-loading>    
    	</div>
		<ul class='list-unstyled'>
			<li  v-for='(item,index) in list'>
				<h4>{{item.title}}</h4>
				<a :href="'#/detail/'+item.id">
					<img :src="item.images.medium" alt="">
				</a>
				<p>类型：{{item.genres | connectfilter}}</p>
				<p>导演：{{item.directors[0].name}}</p>
			</li>
		</ul>
		<hr>
		<a href="#/" class='btn btn-default btn-lg'>返回</a>
	</div>
</template>
<script>
	import globalHeader from './header.vue'
	import vueLoading from 'vue-loading-template'
	import axios from 'axios';
	export default {
		data(){
			return {
				message:'列表页',
				isshow:true,
				title:'',
				list:[],
			}
		},
		filters:{
			connectfilter:function(value){
				return value.toString();
			}
		},
		components:{
			vueLoading,
			globalheader:globalHeader
		}
		,
		created:function(){
			var that = this;
			//console.log(this.$route.params.type)
			var type=this.$route.params.type;
			axios.get('/api/movie/'+type).then(function(data){
				that.isshow=false;
				console.log(data.data);
				that.title = data.data.title;
				that.list = data.data.subjects;
			})
		}
	}
</script>
<style scoped>
	#news{
		margin-top: 40px;
	}
	li{
		padding:5px;
		box-sizing: border-box;
		border:1px solid #ccc;
		margin:5px;
	}
	li p:first-of-type{
		margin-top: 10px;
		color:green;
	}
</style>