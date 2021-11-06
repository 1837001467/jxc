<template>
<el-container>
  <!-- height顶栏高度-->
<el-header height="80px">
	<el-row :gutter="20">
		<el-col :span="8">
				超易进销存管理系统<i class="el-icon-user-solid"></i>
		</el-col>
		<el-col :span="8"></el-col>
		<el-col :span="8" style="text-align: right;">
			<el-button plain circle icon="el-icon-eleme">注销账号</el-button>
		</el-col>
	</el-row>
</el-header>
<el-container>
  <el-aside width="200px">
	  <!-- el-menu导航菜单 -->
	<el-menu :default-active="2" :unique-opened="true" class="el-menu-vertical-demo" 
	  background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
	  <!-- 普通菜单选项-->
	  <el-menu-item index="1">
		  <template #default="scope">
			  <i class="el-icon-user-solid"></i>
			  <router-link to="/ck">出库</router-link>
		  </template>
	  </el-menu-item>
	  <el-menu-item index="2">
		  <template #default="scope">
			  <i class="el-icon-star-on"></i>
			  <router-link to="/rk">入库</router-link>
		  </template>
	  </el-menu-item>
	  <!-- 可展开的菜单选项-->
	  <el-submenu index="3">
		  <template #title><i class="el-icon-s-help"></i>成绩管理</template>
		  <el-menu-item index="5-1">成绩查询</el-menu-item>
		  <el-menu-item index="5-2">重考</el-menu-item>
	  </el-submenu>
	  <!-- 菜单分组 el-menu-group-->
	</el-menu>
  </el-aside>
  <el-container>
	<el-main>
		<!-- 主视图区 -->
		<router-view></router-view>
	</el-main>
	<el-footer>Footer</el-footer>
  </el-container>
</el-container>
</el-container>
</template>

<script>
</script>

<style>
	html,body{
		height: 100%;
	}
	/* 顶栏样式 */
	.el-header{
		background: #42B983;
		color: #fff;
		line-height: 80px;
		font-size: 22px;
	}
	/* 侧边栏 */
	.el-aside{
		background-color: #545c64;
		color: #fff;
		margin-top: 1px;
		min-height: 670px;
	}
	.el-main{
		padding-top: 20px;
	}
	.el-footer{
		background-color: #2C3E50;
	}

	.el-submenu__title i{
		color: yellowgreen;
	}
	
	.el-submenu__title i.el-icon-arrow-down{
		color:yellow
	}
</style>