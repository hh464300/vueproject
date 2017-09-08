<template>
	<div>
		<div class="top fixed">{{msg}}</div> 
	</div>
</template>
<script>
	export default {
		props:['msg'],
		data(){
			return {
				
			}
		}
	}
</script>
<style scoped>

.top{
  position: fixed;
  width:100%;
  background: #286090;
  top:0px;
  color:white;
  line-height: 40px;
}

</style>