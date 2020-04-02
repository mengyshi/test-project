<template>
  <div>
    国际化
    <el-card class="box-card" style="margin-top:40px;">
      <div slot="header" class="clearfix">
        <svg-icon icon-class="international" />
        <span style='margin-left:10px;'>{{$t('i18nView.title')}}</span>
      </div>
      <div>
        <el-radio-group v-model="lang" size="small">
          <el-radio label="zh" border>简体中文</el-radio>
          <el-radio label="en" border>English</el-radio>
        </el-radio-group>
        <el-tag style='margin-top:15px;display:block;' type="info">{{$t('i18nView.note')}}</el-tag>
      </div>
    </el-card>
    <p v-html="$t('message.hello')"></p>

   
  </div>
</template>

<script>
import message from './local.js'
const viewName = 'i18nView'

export default {
  name: 'i18n',
  data() {
    return {
      lang:"",
     
    }
  },
  created() {
    
  },
  computed: {
   
  }
}
</script>

<style scoped>
.box-card {
  width: 600px;
  margin: 20px auto;
}
.item-btn{
  margin-bottom: 15px;
  margin-left: 0px;
}
.block {
  padding: 25px;
}
</style>
