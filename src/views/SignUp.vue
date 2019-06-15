<template>
  <div class="container-fluid back-color">
    <div class="sign-up">
      <div class="title">
        <router-link tag='a' to="/signIn">Вход</router-link>|<router-link tag='a' to="/profile">Регистрация</router-link>
      </div>
      <form 
        class="reg"
        @submit.prevent="registration()"
      >
        <h2>Регистрация</h2>
        <label for="tel">Номер телефона</label>
        <input name='tel' type="text" placeholder="Введите номер телефона" required>
        <span class="tel-desc">Это нужно только для вашей идентификации.</span><br>
        <label for="login">Логин</label>
        <input name='login' type="text" placeholder="Введите логин" required>
        <label for="password">Пароль</label>
        <input name='password' type="password" v-model='password' placeholder="Введите пароль" required>
        <label for="password2">Повторите пароль</label>
        <input name='password2' type="password" v-model='password2' placeholder="Введите пароль" required ref="password2El">
        <div class="agreement">
          <input type="checkbox" name='agreement' value='мужской' required>
          <label for="agreement">Я принимаю <span>Условия предоставления услуг, Политику конфиденциальности</span> а <span>также Политику файлов Cookie.</span></label>
        </div>
        <div class="profile-btn">
          <button class='btn profile-btn'>Регистрация</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: '',
      password: '',
      password2: '',
    }
  },

  watch: {
    password2: 'checkPasswordsEquality',
    password: 'checkPasswordsEquality',
  },

  methods: {
    checkPasswordsEquality() {
      const { password, password2 } = this;
      const { password2El } = this.$refs;

      if (password !== password2) {
        password2El.setCustomValidity("Пароли должны совпадать",);
      } else {
        password2El.setCustomValidity("");
      }
    },
    registration: function () {
      this.$router.push('/profile');
    },
      // const { tel, password } = this
      // this.$store.dispatch(AUTH_REQUEST, { tel, password }).then(() => {
        
      // })
  },
}
</script>

<style lang='scss' scopped>
$blue: #00918E;

.back-color{
  background-color: #E0E0E0;
  padding-top: 45px;
  height: 100vh;
  position: inherit !important;
}
.sign-up{
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
      font-size: 20px;
      line-height: 26px;
    }
    a:first-child{
      color: $blue;
      margin-right: 10px;
    }
    a:last-child{
      pointer-events: none;
      margin-left: 10px;
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
  .sign-up{
    margin: 15px;
  }
}


</style>