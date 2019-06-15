<template>
  <div class="container-fluid back-color_profile">
    <div class="profile">
      <div class="title">
        <h4>Анкета</h4>
        <p>Для участия в программе необходимо заполнить анкету</p>
      </div>
      <div class="block-1">
        <label for="surname">Фамилия</label>
        <input name='surname' type="text" placeholder="Введите фамилию" required>
        <label for="name">Имя</label>
        <input name='name' type="text" placeholder="Введите имя" required>
        <label for="patronymic">Отчество</label>
        <input name='patronymic' type="text" placeholder="Введите отчество" required>
        <label for="birthday">Дата рождения</label>
        <input name='birthday' type="date" placeholder="дд.мм.гггг" required>
        <label for="gender">Пол</label>
        <input type="radio" name='gender' value='мужской' required>мужской
        <input type="radio" name='gender' value='женский' required>женский
      </div>
      <div class="block-2">
        <h5 class="block-2__title">
          Контактная информация
        </h5>
        <label for="surname">Страна</label>
        <input name='surname' type="text" placeholder="Введите страну">
        <label for="name">Город</label>
        <input name='name' type="text" placeholder="Введите город">
        <label for="name">Телефоны родственников</label>
        <input name='name' type="text" placeholder="х (ххх) ххх-хх-хх">
        <p>добавить телефон</p>
      </div>
      <div class="block-3">
        <h5 class="block-3__title">
          Медицинская информация
        </h5>
        <label for="blood">Группа крови</label>
        <select name="blood" id="blood" size='4'>
          <option value="1">&#8544;(0)</option>
          <option value="1">&#8545;(A)</option>
          <option value="1">&#8546;(B)</option>
          <option value="1">&#8546;(AB)</option>
        </select>
        <label for="blood">Заболевания</label>
        <textarea name="blood" id="blood"></textarea>
        <label for="blood">Дополнительная информация</label>
        <textarea name="blood" id="blood"></textarea>
        <label for="blood">Аллергии</label>
        <textarea name="blood" id="blood"></textarea>
        <label for="blood">Принимаемые лекарства</label>
        <textarea name="blood" id="blood"></textarea>
        <label for="blood">Код браслета</label>
        <input name='name' type="text" placeholder="Введите код с обратной стороны браслета">
      </div>
      <div class="profile-btn">
        <router-link tag='a' to="/account" class='btn'>Сохранить изменения</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang='scss' scopped>
@import url('./../assets/scss/fonts.scss');

$blue: #00918E;

#blood{
  option{
    font-family: 'Roboto Regular', sans-serif;
  }
}
.back-color_profile{
  background-color: #E0E0E0;
  padding-top: 45px;
  padding-bottom: 45px;
  height: 100%;
  position: inherit !important;
}
.profile{
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 40px 20px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
  .title{
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #E5E5E5;
    h4{
      font-size: 36px;
      line-height: 47px;
      color: $blue;
    }
    p{
      font-size: 14px;
      line-height: 18px;
      margin-top: 5px;
    }
  }
}
.profile label{
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin-top: 14px;
  // margin-top: 20px;
}
.profile input{
  width: 100%;
  padding: 0 10px;
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
}
.block-1__title,
.block-2__title,
.block-3__title{
  color: $blue;
}
.block-1{
  padding: 20px 0 20px;
  border-bottom: 1px solid #E5E5E5;
  input[type=radio]{
    width: auto;
    height: auto;
    margin-right: 5px;
  }
  input[type=radio]:last-child{
    margin-left: 50px;
  }
}
.block-2{
  padding: 20px 0 20px;
  border-bottom: 1px solid #E5E5E5;
}
.block-3{
  padding: 20px 0 0px;
  select{
    width: 100%;
    border-radius: 4px;
    padding: 5px;
    option{
      height: 20px;
    }
  }
  textarea{
    padding: 5px;
    border-radius: 4px;
    height: 85px;
    width: 100%;
  }
}
.profile-btn{
  display: flex;
  justify-content: center;
  .btn{
    margin-top: 35px;
  }
}


</style>