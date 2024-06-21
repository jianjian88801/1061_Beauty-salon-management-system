<template>
  <div>
    <div class="container">
      <div class="login-form" style="backgroundColor:rgba(247, 240, 240, 0.7);borderRadius:10px">
        <h1 class="h1" style="color:#000;fontSize:28px;">美容院管理系统注册</h1>
		<el-form ref="rgsForm" class="rgs-form" :model="rgsForm" label-width="120px">
			<!-- <div v-if="tableName=='putongyonghu'" class="input-group">
			   <div class="label">账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zhanghao" class="input" type="text" placeholder="账号">
			   </div>
			 </div> -->
			<el-form-item label="账号" class="input" v-if="tableName=='putongyonghu'">
			  <el-input v-model="ruleForm.zhanghao" autocomplete="off" placeholder="账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='putongyonghu'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='putongyonghu'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='putongyonghu'" class="input-group">
			   <div class="label">姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.xingming" class="input" type="text" placeholder="姓名">
			   </div>
			 </div> -->
			<el-form-item label="姓名" class="input" v-if="tableName=='putongyonghu'">
			  <el-input v-model="ruleForm.xingming" autocomplete="off" placeholder="姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='putongyonghu'" class="input-group">
			   <div class="label">年龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.nianling" class="input" type="text" placeholder="年龄">
			   </div>
			 </div> -->
			<el-form-item label="年龄" class="input" v-if="tableName=='putongyonghu'">
			  <el-input v-model="ruleForm.nianling" autocomplete="off" placeholder="年龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='putongyonghu'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='putongyonghu'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<!-- <div v-if="tableName=='putongyonghu'" class="input-group">
			   <div class="label">身份证</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzheng" class="input" type="text" placeholder="身份证">
			   </div>
			 </div> -->
			<el-form-item label="身份证" class="input" v-if="tableName=='putongyonghu'">
			  <el-input v-model="ruleForm.shenfenzheng" autocomplete="off" placeholder="身份证"  />
			</el-form-item>
			<!-- <div v-if="tableName=='huiyuan'" class="input-group">
			   <div class="label">会员账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.huiyuanzhanghao" class="input" type="text" placeholder="会员账号">
			   </div>
			 </div> -->
			<el-form-item label="会员账号" class="input" v-if="tableName=='huiyuan'">
			  <el-input v-model="ruleForm.huiyuanzhanghao" autocomplete="off" placeholder="会员账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='huiyuan'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='huiyuan'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='huiyuan'" class="input-group">
			   <div class="label">会员姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.huiyuanxingming" class="input" type="text" placeholder="会员姓名">
			   </div>
			 </div> -->
			<el-form-item label="会员姓名" class="input" v-if="tableName=='huiyuan'">
			  <el-input v-model="ruleForm.huiyuanxingming" autocomplete="off" placeholder="会员姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='huiyuan'" class="input-group">
			   <div class="label">年龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.nianling" class="input" type="text" placeholder="年龄">
			   </div>
			 </div> -->
			<el-form-item label="年龄" class="input" v-if="tableName=='huiyuan'">
			  <el-input v-model="ruleForm.nianling" autocomplete="off" placeholder="年龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='huiyuan'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='huiyuan'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<!-- <div v-if="tableName=='huiyuan'" class="input-group">
			   <div class="label">身份证</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzheng" class="input" type="text" placeholder="身份证">
			   </div>
			 </div> -->
			<el-form-item label="身份证" class="input" v-if="tableName=='huiyuan'">
			  <el-input v-model="ruleForm.shenfenzheng" autocomplete="off" placeholder="身份证"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jishi'" class="input-group">
			   <div class="label">技师工号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.jishigonghao" class="input" type="text" placeholder="技师工号">
			   </div>
			 </div> -->
			<el-form-item label="技师工号" class="input" v-if="tableName=='jishi'">
			  <el-input v-model="ruleForm.jishigonghao" autocomplete="off" placeholder="技师工号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jishi'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='jishi'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='jishi'" class="input-group">
			   <div class="label">技师姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.jishixingming" class="input" type="text" placeholder="技师姓名">
			   </div>
			 </div> -->
			<el-form-item label="技师姓名" class="input" v-if="tableName=='jishi'">
			  <el-input v-model="ruleForm.jishixingming" autocomplete="off" placeholder="技师姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jishi'" class="input-group">
			   <div class="label">年龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.nianling" class="input" type="text" placeholder="年龄">
			   </div>
			 </div> -->
			<el-form-item label="年龄" class="input" v-if="tableName=='jishi'">
			  <el-input v-model="ruleForm.nianling" autocomplete="off" placeholder="年龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jishi'" class="input-group">
			   <div class="label">联系电话</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lianxidianhua" class="input" type="text" placeholder="联系电话">
			   </div>
			 </div> -->
			<el-form-item label="联系电话" class="input" v-if="tableName=='jishi'">
			  <el-input v-model="ruleForm.lianxidianhua" autocomplete="off" placeholder="联系电话"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jishi'" class="input-group">
			   <div class="label">身份证</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzheng" class="input" type="text" placeholder="身份证">
			   </div>
			 </div> -->
			<el-form-item label="身份证" class="input" v-if="tableName=='jishi'">
			  <el-input v-model="ruleForm.shenfenzheng" autocomplete="off" placeholder="身份证"  />
			</el-form-item>
			<!-- <div v-if="tableName=='qiantai'" class="input-group">
			   <div class="label">前台账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.qiantaizhanghao" class="input" type="text" placeholder="前台账号">
			   </div>
			 </div> -->
			<el-form-item label="前台账号" class="input" v-if="tableName=='qiantai'">
			  <el-input v-model="ruleForm.qiantaizhanghao" autocomplete="off" placeholder="前台账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='qiantai'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='qiantai'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='qiantai'" class="input-group">
			   <div class="label">前台姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.qiantaixingming" class="input" type="text" placeholder="前台姓名">
			   </div>
			 </div> -->
			<el-form-item label="前台姓名" class="input" v-if="tableName=='qiantai'">
			  <el-input v-model="ruleForm.qiantaixingming" autocomplete="off" placeholder="前台姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='qiantai'" class="input-group">
			   <div class="label">年龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.nianling" class="input" type="text" placeholder="年龄">
			   </div>
			 </div> -->
			<el-form-item label="年龄" class="input" v-if="tableName=='qiantai'">
			  <el-input v-model="ruleForm.nianling" autocomplete="off" placeholder="年龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='qiantai'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='qiantai'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
				<el-button class="btn" type="primary" @click="login()">注册</el-button>
				<el-button class="btn close" type="primary" @click="close()">取消</el-button>
			</div>
		</el-form>
      </div>
      <!-- <div class="nk-navigation">
        <a href="#">
          <div @click="login()">注册</div>
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
      },
      tableName:"",
      rules: {}
    };
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    close(){
	this.$router.push({ path: "/login" });
    },
    // 注册
    login() {
      if((!this.ruleForm.zhanghao) && `putongyonghu` == this.tableName){
        this.$message.error(`账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `putongyonghu` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.xingming) && `putongyonghu` == this.tableName){
        this.$message.error(`姓名不能为空`);
        return
      }
      if(`putongyonghu` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
        this.$message.error(`年龄应输入整数`);
        return
      }
      if(`putongyonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`putongyonghu` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
        this.$message.error(`身份证应输入身份证格式`);
        return
      }
      if(`putongyonghu` == this.tableName && this.ruleForm.jifen&&(!this.$validate.isNumber(this.ruleForm.jifen))){
        this.$message.error(`积分应输入数字`);
        return
      }
      if(`putongyonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
        this.$message.error(`余额应输入数字`);
        return
      }
      if((!this.ruleForm.huiyuanzhanghao) && `huiyuan` == this.tableName){
        this.$message.error(`会员账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `huiyuan` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.huiyuanxingming) && `huiyuan` == this.tableName){
        this.$message.error(`会员姓名不能为空`);
        return
      }
      if(`huiyuan` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
        this.$message.error(`年龄应输入整数`);
        return
      }
      if(`huiyuan` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`huiyuan` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
        this.$message.error(`身份证应输入身份证格式`);
        return
      }
      if(`huiyuan` == this.tableName && this.ruleForm.jifen&&(!this.$validate.isNumber(this.ruleForm.jifen))){
        this.$message.error(`积分应输入数字`);
        return
      }
      if(`huiyuan` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
        this.$message.error(`余额应输入数字`);
        return
      }
      if((!this.ruleForm.jishigonghao) && `jishi` == this.tableName){
        this.$message.error(`技师工号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `jishi` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.jishixingming) && `jishi` == this.tableName){
        this.$message.error(`技师姓名不能为空`);
        return
      }
      if(`jishi` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
        this.$message.error(`年龄应输入整数`);
        return
      }
      if(`jishi` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }
      if(`jishi` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
        this.$message.error(`身份证应输入身份证格式`);
        return
      }
      if(`jishi` == this.tableName && this.ruleForm.jifen&&(!this.$validate.isNumber(this.ruleForm.jifen))){
        this.$message.error(`积分应输入数字`);
        return
      }
      if(`jishi` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
        this.$message.error(`余额应输入数字`);
        return
      }
      if((!this.ruleForm.qiantaizhanghao) && `qiantai` == this.tableName){
        this.$message.error(`前台账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `qiantai` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.qiantaixingming) && `qiantai` == this.tableName){
        this.$message.error(`前台姓名不能为空`);
        return
      }
      if(`qiantai` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
        this.$message.error(`年龄应输入整数`);
        return
      }
      if(`qiantai` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`qiantai` == this.tableName && this.ruleForm.jifen&&(!this.$validate.isNumber(this.ruleForm.jifen))){
        this.$message.error(`积分应输入数字`);
        return
      }
      if(`qiantai` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
        this.$message.error(`余额应输入数字`);
        return
      }
      this.$http({
        url: `${this.tableName}/register`,
        method: "post",
        data:this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$router.replace({ path: "/login" });
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}

	// .container {
 //    min-height: 100vh;
 //    text-align: center;
 //    // background-color: #00c292;
 //    padding-top: 20vh;
 //    background-image: url(../assets/img/bg.jpg);
 //    background-size: 100% 100%;
 //    opacity: 0.9;
 //  }

	// .login-form:before {
	// 	vertical-align: middle;
	// 	display: inline-block;
	// }

	// .login-form {
	// 	max-width: 500px;
	// 	padding: 20px 0;
	// 	width: 80%;
	// 	position: relative;
	// 	margin: 0 auto;

	// 	.label {
	// 		min-width: 60px;
	// 	}

	// 	.input-group {
	// 		max-width: 500px;
	// 		padding: 20px 0;
	// 		width: 80%;
	// 		position: relative;
	// 		margin: 0 auto;
	// 		display: flex;
	// 		align-items: center;

	// 		.input-container {
	// 			display: inline-block;
	// 			width: 100%;
	// 			text-align: left;
	// 			margin-left: 10px;
	// 		}

	// 		.icon {
	// 			width: 30px;
	// 			height: 30px;
	// 		}

	// 		.input {
	// 			position: relative;
	// 			z-index: 2;
	// 			float: left;
	// 			width: 100%;
	// 			margin-bottom: 0;
	// 			box-shadow: none;
	// 			border-top: 0px solid #ccc;
	// 			border-left: 0px solid #ccc;
	// 			border-right: 0px solid #ccc;
	// 			border-bottom: 1px solid #ccc;
	// 			padding: 0px;
	// 			resize: none;
	// 			border-radius: 0px;
	// 			display: block;
	// 			width: 100%;
	// 			height: 34px;
	// 			padding: 6px 12px;
	// 			font-size: 14px;
	// 			line-height: 1.42857143;
	// 			color: #555;
	// 			background-color: #fff;
	// 		}

	// 	}
	// }

	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}
	
	.container {
		background-image: url("http://codegen.caihongy.cn/20201126/ff6024f5009f4e9497b897831b3b157d.jpg");
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	
		.login-form {
			right: 50%;
			top: 50%;
			height: auto;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			width: 420px;
			padding: 30px 30px 40px 30px;
			font-size: 14px;
			font-weight: 500;
			
			.h1 {
				margin: 0;
				text-align: center;
				line-height: 54px;
			    font-size: 24px;
			    color: #000;
			}
				
			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				.input {
					width: 100%;
					
					& /deep/ .el-form-item__label {
						line-height: 40px;
						color: 14px;
						font-size: #606266;
					}
					
					& /deep/ .el-input__inner {
						height: 40px;
						color: rgba(12, 12, 13, 1);
						font-size: 14px;
						border-width: 1px;
						border-style: solid;
						border-color: rgba(18, 18, 18, 1);
						border-radius: 4px;
						background-color: #fff;
					}
				}
				
				.btn {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: #fff;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 4px;
					background-color: #409EFF;
				}

				.close {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: #409EFF;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 4px;
					background-color: #FFF;
				}

			}
		}
	}
</style>
