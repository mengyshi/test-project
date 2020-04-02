<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-table th{
  background:#F2F9FF ;
  color:#5A5B5F;
  text-align: center !important;
}
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.login{
  .el-input__inner{
      border-radius:0px;
      border:1px solid transparent;
      border-bottom:1px solid #DCDFE6;
      height: 42px !important;
      line-height: 42px !important;
  }
}
</style>
