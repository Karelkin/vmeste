<template>
  <div id="app">
    <div class='container-fluid'>
      <div class="row nav">
        <span></span>
        <div class="col-lg-2 col-md-2 col-12 nav__logo">
          <router-link to="/"><img src="@/assets/logo.png"></router-link>
        </div>
        <label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
        <input type="checkbox" id="toggle-1"> 
        <ul class='col-lg-10 col-md-10 col-12 nav__links'>
          <li active><router-link tag='a' to="/">Главная</router-link></li>
          <li><router-link tag='a' to="/signIn">Вход</router-link></li>
          <li><router-link tag='a' to="/account">Личный кабинет</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
@import url('./assets/scss/fonts.scss');

$blue: #00918E;

.container-fluid{
  padding: 0;
}
.container {
  padding: 0;
}
.row{
  margin: 0;
}
ul,li,h1,h2,h3,h4,h5,h6,p{
  padding: 0;
  margin: 0;
}
*{
  font-family: 'Ropa Sans Pro SC Regular', sans-serif;
  font-weight: 500;
}
.nav{
  height: 60px;
  border-bottom: 1px solid #C4C4C4;
}
.nav__logo{
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 80px;
}
.nav__links{
  justify-content: flex-end;
  padding-right: 80px;
  list-style-type: none;
  display: flex;
  align-items: center;
  a{
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    &:hover{
      text-decoration: underline;
    }
  }
  li+li{
    padding-left: 30px;
  }
}
.toggle-menu ul{
  display:table;
  width:31px;
  margin-left:0;
  padding-left:0;
  margin:5px;
}
.toggle-menu ul li{
  width:100%;
  height:3px;
  background-color:#000;
  margin-bottom:4px;
  list-style:none;
}
.toggle-menu ul li:last-child{
  margin-bottom:0;
} 
.nav{
  input[type=checkbox],
  label{
    display:none;
  }
}


@media (max-width: 993px){
  .nav__logo{
    padding-left: 15px;
    justify-content: center;
    margin-bottom: 10px;
    padding-top: 15px;
    img{
      width: 100% !important;
    }
  }
}
@media (max-width:768px){
  .nav{
    height: auto;
  }
  .nav__links{
    display: none;
    flex-direction: column;
    padding-right: 0px;
    padding-left: 0;
    li+li{
      padding-left: 0;
    }
  }
  .nav{
    input[type=checkbox]{
      position: absolute;
      top: -7777px;
      left: -7777px;
      background: none;
    } 
    input[type=checkbox]:focus{
      background: none;
    } 
    label{
      cursor: pointer;
      display: block;
      position: absolute;
      top: 15px;
      right: 25px;
    } 
    input[type=checkbox]:checked ~ .nav__links{
      display: block;
    } 
    input[type=checkbox] ~ .nav__links{
      display: none;
    } 
  }
  .nav__links{
    display: none;
    position: absolute;
    right: 0;
    top: 60px;
    background-color: rgba(28, 22, 22, 0.5);
    padding: 0;
    z-index: 99;
  } 
  .nav__links {
    width: auto;
  } 
  .nav__links li{
    float: none;
    padding: 0;
    width: 100%;
    display: table;
  } 
  .nav__links li a{
    color: #FFF;
    font-size: 15px;
    padding: 10px 20px;
    display: block;
    border-bottom: 1px solid rgba(225,225,225,0.1);
  } 
}
</style>
