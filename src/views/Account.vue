<template>
  <div class="back-color_account">
    <div class="container">
      <h2 class='title'>Личный кабинет</h2>
      <div class="row item">
        <div class="col-lg-4 col-md-5 col-12 block_wrap card-left">
          <h4 class="title">
            Ваша карточка
          </h4>
          <div class="item__info">
            <div class='face'>
              <img src="@/assets/photo-1.png" alt="">
            </div>
            <div class="center">
              <h4 class="name">
                Каргин Георгий Олегович
              </h4>
              <h5 class="old">
                64 года
              </h5>
            </div>
            <ul>
              <li>
                <h6>Телефоны родственников:</h6>
                <p>8 (911) xxx xx xx</p>
              </li>
              <li>
                <h6>Группа крови:</h6>
                <p>&#8545;(A)</p>
              </li>
              <li>
                <h6>Заболевание:</h6>
                <p>Эпилепсия, обмороки</p>
              </li>
              <li>
                <h6>Дополнительная информация:</h6>
                <p>В случае припадка положить на спину, придерживая голову, связаться с родными по указанному телефону.</p>
              </li>
              <li>
                <h6>Аллергии:</h6>
                <p>Аллергии</p>
              </li>
              <li>
                <h6>Принимаемые лекарства:</h6>
                <p>Принимаемые лекарства</p>
              </li>
              <li>
                <h6>Город:</h6>
                <p>Санкт-Петербург, Россия</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-8 col-md-7 col-12 card-right">
          <div class="row">
            <div class="col-12 block_wrap">
              <h4 class="title">
                Данные анкеты
              </h4>
              <p>Если данные о вашем остоянии здоровья изменились, не забудте внести их  в анкету!</p>
              <div class="profile-btn">
                <router-link tag='a' to="/profile" class='btn profile-btn'>Редактировать анкету</router-link>
              </div>
            </div>
            <div class="col-12 settings block_wrap">
              <div class="block-1">
                <h4 class="title">
                  Настройки
                </h4>  
                <input type="file"><br>
                <span>На фото должно быть изображено ваше лицо крупным планом, размер не более X Мб</span>
              </div>
              <div class="block-2">
                <h4 class="title">
                  Изменение пароля
                </h4>
                <label for="password">Старый пароль</label>
                <input name='passwordOld' type="password" v-model='passwordOld' placeholder="Введите пароль" required>
                <label for="password">Новый пароль</label>
                <input name='password' type="password" v-model='password' placeholder="Введите пароль" required>
                <label for="password2">Повторите пароль</label>
                <input name='password2' type="password" v-model='password2' placeholder="Введите пароль" required ref="password2El">
              </div>
              <div class="profile-btn margin_btn">
                <button class='btn profile-btn'>Сохранить изменения</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: '',
      passwordOld: '',
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
      // const { tel, password } = this
      // this.$store.dispatch(AUTH_REQUEST, { tel, password }).then(() => {
        
      // })
  },
}
</script>

<style lang='scss' scopped>
@import url('./../assets/scss/fonts.scss');

$blue: #00918E;

.back-color_account{
  background-color: #E0E0E0;
  padding-top: 45px;
  padding-bottom: 45px;
  min-height: 100vh;
  .block_wrap{
    background-color: #fff;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
    padding: 30px;
  }
  .title{
    margin-bottom: 25px;
    color: $blue;
  }
}
.item{
  ul li{
    list-style: none;
    margin-top: 20px;
  }
  ul li:first-child{
    margin-top: 40px;
  }
  h6{
    font-weight: 700;
  }
  .profile-btn{
    justify-content: flex-start;
    margin-top: 20px;
  }
}
.settings{
  .block-1{
    border-bottom: 1px solid #E5E5E5;
    span{
      color: #818A91;
      font-size: 13px;
      line-height: 14px;
    }
  }
  .block-2{
    padding-top: 25px;
    border-bottom: none;
    max-width: 410px;
    input{
      width: 100%;
      border: 1px solid #C4C4C4;
      border-radius: 4px;
      height: 38px;
      padding: 0 10px 0 10px;
      margin-bottom: 20px;
    }
  }
}
.item{
  .margin_btn{
    margin-top: 0;
  }
}
.item__info{
  h4,
  h5, 
  h6, 
  p{
    font-family: 'Roboto', sans-serif !important;
  }
  h6{
    font-size: 16px;
    line-height: 19px;
  }
  p{
    font-family: 'Roboto Condensed Regular', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 300;
    color: #4d4d4d;
    margin-top: 7px;
  }
}

.center{
  text-align: center;
  .name{
    margin-top: 30px;
    font-size: 24px;
    line-height: 28px;
    // font-weight: 300;
  }
  .old{
    margin-top: 10px;
    font-size: 18px;
    line-height: 21px;
  }
  .name,
  .old{
    color: #2A2C2E;
  }
}
.face{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.block-left{
  height: 100%;
}
.container{
  padding-left: 15px;
  padding-right: 15px;
}
.settings{
  margin-top: 25px;
}

@media (max-width: 768px){
  .item{
    .profile-btn{
      justify-content: center;
      display: flex;
    }
  }
  .card-right{
    padding: 0;
    margin-top: 25px;
  }
}

</style>