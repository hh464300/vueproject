<template>
  <div class="hello">
    <globalheader  :msg='message'></globalheader> 
    <!-- <div class="top fixed">首页</div> -->
    <img src="../assets/logo.png" height="200" width="200" alt="">
    <h1>{{ msg }}</h1>
    <h4>1. 跨域请求豆瓣api</h4>
    <h4>2. bootstrap与jquery的插件注册</h4>
    <h4>3. 公用组件的使用</h4>
    <h4>4. 父子组件传参</h4>
   <hr>
   <button class='btn btn-primary' @click="show">点击--模态框</button>
   <hr>
   <a href="#/news/coming_soon" class='btn btn-default'>即将上映电影</a>
   <a href="#/news/in_theaters" class='btn btn-default'>正在热映列表</a>
   <a href="#/news/top250" class='btn btn-default'>电影top250</a>
   
  
  <div class='footer fixed'>
      <ul>
        <li>
          <a href="#/">
            <span class='glyphicon glyphicon-home'></span>
            <p>主页</p>
          </a>
        </li>
        <li>
          <a href="#/">
            <span class='glyphicon glyphicon-folder-open'></span>
            <p>新闻</p>
          </a>
        </li>
        <li>
          <a href="#/">
            <span class='glyphicon glyphicon-user'></span>
            <p>我的</p>
          </a>
        </li>
      </ul>
  </div>
  <!-- 模态框 -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          just do it
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
//导入头部组件
import globalHeader from './header.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome',
      message:'首页'
    }
  },
  components:{
    'globalheader':globalHeader
  }
  ,
  methods:{
    show(){
      jQuery('#myModal').modal('show')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin:0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0px 30px
}

a {
  color: #42b983;
}
.hello{
  height:2000px;
  margin-top: 40px;
}
.top,.footer{
  position: fixed;
  width:100%;
}
.top{
  background: #286090;
  top:0px;
  color:white;
}
.footer {
  bottom:0px;
}
.footer ul{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
