<template>
<div class="container wrap">
  <div class="man_card">
    <h2 class='title'>ИНФОРМАЦИЯ ДЛЯ ОКАЗАНИЯ ПОМОЩИ</h2>
    
    <div class='face'>
      <img class='img-back' src="@/assets/card-back.png" alt="">
      <img class='img-face' src="@/assets/photo-1.png" alt="">
    </div>
    <div class="row item">
      <div class="item__info col-12">
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
    <div class="card_footer">
      <div class="left">
        <h6>Проект</h6>
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="tel">
        <a href="tel:+74957306767">+7(495) 730-67-67</a>
        <span>Звонок бесплатный</span>
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
  
</script>

<style lang='scss' scopped>
@import url('./../assets/scss/fonts.scss');

$blue: #00918E;

.container {
  padding-left: 0;
  padding-right: 0;
}
.man_card{
  // padding-bottom: 30px;
  margin: 0 auto;
  max-width: 800px;
  .title{
    text-align: center;
    color: $blue;
    padding-top: 20px;
  }
  position: relative;
  .img-back{
    // position: absolute;
    width: 100%;
    top: 165px;
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
    /*font-weight: 300;*/
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
  .img-face{
    width: 40%;
    position: absolute;
  }
}
.block-left{
  height: 100%;
}
.settings{
  margin-top: 25px;
}
.card_footer{
  margin-top: 35px;
  background-color: #D2D2D2;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  .tel{
    text-align: end;
    a{
      display: block;
      color: #000;
    }
  }
}

@media (max-width: 600px){
  .man_card{
    .title{
      font-size: 30px !important;
    }
  }
}
@media (max-width: 520px){
  .man_card{
    .img-back{
      width: 100%;
      top: 135px;
    }
    
  }
}
@media (max-width: 360px){
  .card_footer{
    flex-direction: column;
  }
}
</style>