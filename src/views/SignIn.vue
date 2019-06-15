<template>
  <div class="container-fluid back-color">
    <div class="sign-in">
    	<div class="title">
        <router-link tag='a' to="/signin">Вход</router-link>|<router-link tag='a' to="/signup">Регистрация</router-link>
      </div>
      <form 
        class="reg"
        @submit.prevent="login"
      >
        <h2>Вход</h2>
        <label for="tel">Номер телефона</label>
        <input name='tel' type="text" v-model='tel' placeholder="Введите номер телефона" required>
        <label for="password">Пароль</label>
        <input name='password' type="password" v-model='password' placeholder="Введите пароль" required>
        <div class="profile-btn">
          <button class='btn profile-btn'>Войти</button>
        </div>
        <!-- <div class="profile-btn">
          <router-link tag='button' type='submit' v-model='btn' to="/profile" class='btn profile-btn'>Войти</router-link>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      tel: null,
      password: null
    }
  },
  methods: {
    login: function () {
      // const { tel, password } = this
      // this.$store.dispatch(AUTH_REQUEST, { tel, password }).then(() => {
        this.$router.push('/profile')
      // })
    }
  }
}
</script>

<style lang='scss' scopped>
$blue: #00918E;

.profile-btn{
  display: flex;
  justify-content: center;
  .btn{
    margin-top: 35px;
    min-width: 150px;
  }
}
.back-color{
	background-color: #E0E0E0;
  padding-top: 45px;
  padding-bottom: 45px;
  height: 100%;
  position: absolute !important;
}
.sign-in{
	max-width: 450px;
	margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 40px 20px;
  .title{
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #E5E5E5;
    h4{
      font-size: 30px;
      line-height: 35px;
    }
    p{
      font-size: 14px;
      line-height: 16px;
    }
    a{
      color: #373A3C;
      margin-right: 10px;
      font-size: 20px;
      line-height: 26px;
    }
    a:last-child{
      color: $blue;
      margin-right: 0;
      margin-left: 10px;
    }
    a:first-child{
      pointer-events: none;
    }
  }
}
.reg{
  h2{
    text-align: center;
    margin-top: 20px;
  }
  input{
    width: 100%;
    padding: 0 10px;
    border-radius: 4px;
    border-width: 1px;
    height: 40px;
  }
  span{
    color: $blue;
  }
  label{
    margin-top: 14px;
  }
}
.tel-desc{
  color: #818A91 !important;
  font-size: 13px;
  line-height: 19px;
}
.agreement{
  display: flex;
  margin-top: 20px;
  align-items: baseline;
}
input[type=checkbox]{
  width: auto;
}

@media (max-width: 500px){
  .sign-in{
    margin: 15px;
  }
}

</style>