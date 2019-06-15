<template>
  <div class="home">
    <div class="container-fluid">
      <div class="wrap-bracelet">
        <div class="tel">
          <a href="tel:+74957306767">+7(495) 730-67-67</a>
          <span>Звонок бесплатный</span>
        </div>
        <div class="container">
        	<div class="row">
        		<div class="col-lg-6 col-md-12 col-12 bracelet__right">
        			<h2 class="title">
        				Браслет, который может спасти жизнь
        			</h2>
        			<p class="text">
        				Данный браслет в экстренных ситуациях предоставляет нам основную информацию о здоровье человека, о его заболеваниях и особенностях, а также даёт нам информацию о способах оказания первой медицинской помощи.
        			</p>
        			<router-link tag='a' to="/signIn" class='btn'>Регистрация</router-link>
        		</div>
        	</div>
        </div>
      </div>
      <div class="container">
      	<div class="row wrap bracelet_about">
          <div class="col-lg-5 col-12 bracelet_about__right">
            <img src="@/assets/home-1.png" alt="">
          </div>
      		<div class="col-lg-7 col-12 bracelet_about__left">
      			<h4 class="title">
      				О браслете
      			</h4>
      			<div class="text">
  	    			<p>
  	    				Браслет «Вместе» - это браслет с QR кодом, который дает возможность окружающим получить доступ к вашей медицинской информации в экстренных случаях в любое время и в любом месте.
  						</p>
  	    			<p>
  	    				При считывании QR кода через камеру смартфона выводится медицинская информация, введенная в анкету: ФИО, контактные данные, группу крови, заболевания, аллергии, принимаемые лекарства и прочее.
  						</p>
  	    			<p>
  	    				Браслет не нуждается в дополнительном заряде, не имеет элементов питания, и сделан так, что выдержит даже самый активный стиль жизни.
  	    			</p>
  	    		</div>
      		</div>
      	</div>
      </div>
      <div class="container">
      	<div class="row wrap manual">
      		<h4 class="col-12 title">
      			Как получить браслет
      		</h4>
      		<div class="col-12 manual__items">
      			<div class="manual__item step-1">
      				<h5 class="name line-1">
      					Прийти в точку выдачи браслетов
      				</h5>
      				<p class="text">
      					Браслеты выдаются по рекомендации врача в больницах, поликлиниках, а так же в благотворительных фондах.
      				</p>
      			</div>
      			<div class="manual__item step-2">
      				<h5 class="name line-2">
      					Зарегистрироваться в системе
      				</h5>
      				<p class="text">
      					Пройти процесс регистрации на сайте с помощью номера телефона.  Это можно сделать как дома, так и в точке выдачи браслета с помощью волонтера.
      				</p>
      			</div>
      			<div class="manual__item step-3">
      				<h5 class="name line-3">
      					Получить браслет
      				</h5>
      				<p class="text">
      					После регистрации вам выдается браслет на котором будет уникальный QR-код.
      				</p>
      			</div>
      			<div class="manual__item step-4">
      				<h5 class="name line-4">
      					Заполнить анкету
      				</h5>
      				<p class="text">
      					После получения браслета необходимо прикрепить его к вашему аккуанту с помощью кода на обратной стороне, а также заполнить анкету о Ваших медицинских данных.
      				</p>
      			</div>
      			<div class="manual__item step-5">
      				<h5 class="name">
      					Проверить работу браслета
      				</h5>
      				<p class="text">
      					Считайте ваш QR-код с браслета, чтобы проверить правильность отображаемой информации.
      				</p>
      			</div>
      		</div>
      	</div>
      </div>
      <div class="container">
      	<div class="row project">
      		<h4 class="col-12 title" ref='project'>
      			О проекте
      		</h4>
      		<div class="col-lg-6 col-12 project__left">
      			<img src="./../assets/home-3.png" alt="">
      		</div>
      		<div class="col-lg-6 col-12  project__right">
      			<p class="text">
      				Главная цель проекта «Вместе» - показать, что <br>
      				<span>помогать это легко и не страшно!</span>
      			</p>
      			<p class="text">
      				Проект «Вместе» создан для того, чтобы обратить внимание людей друг на
      				друга и повысить уровень взаимоответственности и взаимопомощи.
      			</p>
      			<p class="text">
      				Увидев, человека в таком браслете люди будут понимать и осознавать, что он находится в потенциальном риске, что с ним может что-то произойти и ему нужно более тщательное внимание.
      			</p>
      		</div>
      	</div>
      </div>
      <div class="footer-word">
        <img src="./../assets/footer-back.png" alt="">
      </div>
    </div>
    <div class="container-fluid footer-wrapper">
    	<div class="container footer">
	    	<div class="row">
	    		<div class="col-lg-4 col-md-6 col-6 contacts">
	    			<h6 class="">Контакты</h6>
	    			<a href="tel:+74957306767">+7(495) 730-67-67</a>
	    			<span>Звонок бесплатный</span>
	    			<a href="#">группа</a>
	    			<a href="#">адрес</a>
	    		</div>
	    		<div class="col-lg-4 col-md-6 col-6 info">
	    			<h6 class="">Информация</h6>
	    			<p>Информация</p>
	    			<p>Информация</p>
	    			<p>Информация</p>
	    			<p>Информация</p>
	    		</div>
	    		<div class="col-lg-4 col-md-12 col-12 partners">
	    			<h6 class="">Партнеры</h6>
	    			<div class="container">
	    				<div class="row">
	    					<div class="col-6"><img src="./../assets/partners-1.png" alt=""></div>
	    					<div class="col-6"><img src="./../assets/partners-2.png" alt=""></div>
	    					<div class="col-6"><img src="./../assets/partners-3.png" alt=""></div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default{
	data() {
		return {

		}
	},
}
</script>

<style lang='scss'>
@import url('./../assets/scss/fonts.scss');

$blue: #00918E;

.wrap-bracelet{
  background-image: url('./../assets/back-header.jpg');
  background-size: cover;
  background-position: right;
  position: relative;
  .tel{
    position: absolute;
    top: 20px;
    right: 40px;
    color: $blue;
    a{
      display: block;
      text-align: end;
      // text-decoration: none;
      color: $blue;
    }
  }
}
.wrap{
	box-shadow: 0px 26px 13px -26px rgba(0,0,0,0.3);
}
.bracelet__right{
	// padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 610px;
  // position: relative;
	.title{
		font-size: 48px;
		line-height: 55px;
		margin-bottom: 25px;
    color: $blue;
	}
	.text{
		font-size: 18px;
		line-height: 30px;
		font-weight: 300;
		margin-bottom: 60px;
	}
}
.btn{
  border-radius: 30px;
  padding: 17px 20px 12px 20px;
  background: #00918E;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 1px;
  max-width: fit-content;
}
.bracelet__left{
	// padding-right: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.bracelet__left img{
	width: 100%;
	height: 100%;
}
.bracelet_about{
  padding-top: 80px;
  padding-bottom: 30px;
	img{
		// width: 100%;
    // height: auto;
	}
}
.bracelet_about__left{
  padding-left: 60px;
	.title{
		margin-bottom: 40px;
		font-size: 36px;
		line-height: 42px;
    color: $blue;
	}
	.text p{
		margin-top: 20px;
		font-size: 18px;
		line-height: 30px;
	}
}
.bracelet_about__right{
	display: flex;
	justify-content: center;
	align-items: center;
}
.manual{
	padding-bottom: 100px;
  padding-top: 55px;
  padding-left: 15px;
	.title{
		text-align: center;
		margin-bottom: 70px;
		font-size: 36px;
		line-height: 42px;
    color: $blue;
	}
}
.manual__items{
	display: flex;
	flex-direction: column;
}
.manual__item:nth-child(2),
.manual__item:nth-child(4){
	align-self: flex-end;
}
.manual__item{
	padding-left: 120px;
	max-width: 580px;
	.name{
		font-size: 28px;
		line-height: 37px;
		margin-bottom: 20px;
    color: $blue;
	}
	.text{
		font-size: 18px;
		line-height: 30px;
	}
}
.manual__item+.manual__item{
	margin-top: 30px;
}
.step-1:after,
.step-2:after,
.step-3:after,
.step-4:after,
.step-5:after{
	position: absolute;
	font-size: 36px;
	color: #6D6060;
	font-weight: 700;
	left: -15px;
	top: -20px;
}
.step-1:after{
	content: '01';
}
.step-2:after{
	content: '02';
}
.step-3:after{
	content: '03';
}
.step-4:after{
	content: '04';
}
.step-5:after{
	content: '05';
}
.step-1,
.step-2,
.step-3,
.step-4,
.step-5{
	position: relative;
}
.step-1:before,
.step-2:before,
.step-3:before,
.step-4:before,
.step-5:before{
	content: '';
	position: absolute;
	left: 20px;
	height: 65px;
	width: 65px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.step-1:before{
	background-image: url('./../assets/step-1.png');
}
.step-2:before{
	background-image: url('./../assets/step-2.png');
}
.step-3:before{
	background-image: url('./../assets/step-3.png');
}
.step-4:before{
	background-image: url('./../assets/step-4.png');
}
.step-5:before{
	background-image: url('./../assets/step-5.png');
}
.line-1,
.line-2,
.line-3,
.line-4{
	position: relative;
}
.line-1:before,
.line-2:before,
.line-3:before,
.line-4:before{
	position: absolute;
}
.line-1:before{
	content: url('./../assets/line-1.png');
	left: 450px;
	top: 30px;
}
.line-2:before{
	content: url('./../assets/line-2.png');
	right: 500px;
	top: 100px;
}
.line-3:before{
	content: url('./../assets/line-3.png');
	top: 180px;
	right: 0;
}
.line-4:before{
	content: url('./../assets/line-4.png');
	top: 200px;
  left: -100px;
}
.project{
	padding-top: 70px;
	padding-bottom: 80px;
	.title{
		font-size: 36px;
		line-height: 42px;
		margin-bottom: 60px;
    color: $blue;
	}
	.text{
		font-size: 18px;
		line-height: 30px;
		padding-bottom: 35px;
		span{
			font-size: 35px;
			position: relative;
			top: 15px;
      color: $blue;
		}
	}
}
.project{
	.text:first-child{
		padding-bottom: 55px;
	}
	img{
		width: 80%;
	}
}
.project__left{
	display: flex;
	justify-content: center;
	align-items: center;
  img{
    border-radius: 50%;
  }
}
.project__right{
	max-width: 530px;
	margin: 0 auto;
  padding-top: 40px;
}
.footer-wrapper{
	background: #2F2F2F;
}
.footer{
	padding-top: 60px;
	padding-bottom: 25px;
	h6{
		font-size: 24px;
		line-height: 32px;
		padding-bottom: 30px;
	}
	a{
		color: #fff;
	}
	span{
		margin-bottom: 20px;
	}
	a+a{
		margin-top: 20px;
	}
}
.footer{
  color: #fff;
	.contacts{
		display: flex;
		flex-direction: column;
	}
	.info{
		p+p{
			margin-top: 20px;
		}
	}
}
.partners{
  margin-top: 20px;
  img{
    margin-bottom: 30px;
    width: 100%;
  }
}
.footer-word img{
  width: 100%;
  height: auto;
}

@media (max-width: 4000px){
	.container{
		max-width: 1250px;
	}
	.line-1:before{
		content: url('./../assets/line-1.png');
		left: 450px;
		top: 30px;
	}
	.line-2:before{
		content: url('./../assets/line-2.png');
		right: 560px;
		top: 100px;
	}
	.line-3:before{
		content: url('./../assets/line-3.png');
		top: 180px;
		left: 250px;
	}
	.line-4:before{
		content: url('./../assets/line-4.png');
		top: 200px;
		left: -130px;
	}
}
@media (max-width: 1200px){
	.line-3:before{
		right: 165px;
	}
  .line-4:before{
    left: 0;
  }
}
@media (max-width: 993px){
  .wrap-bracelet{
    background-image: url('./../assets/back-header-md.png');
    background-position: bottom;
  }
  .bracelet__right{
    justify-content: flex-start;
    padding-top: 80px;
  }
	.line-1:before,
	.line-2:before,
	.line-3:before,
	.line-4:before{
		content: '';
	}
	img{
		// width: 65% !important;
	}
	.bracelet__left{
		// padding-right: 15px;
		img{
			width: 60%;
		}
	}
  .bracelet_about__left{
    padding-left: 15px;
  }
	.bracelet_about__right{
		img{
			width: 60%;
			margin-top: 40px;
		}
	}
	.project__left{
		margin-bottom: 40px;
		img{
			width: 55%;
		}
	}
  .partners{
    img{
      max-width: 60%;
    }
  }
}
@media (max-width: 768px){
  .bracelet__right{
    justify-content: flex-start;
    padding-top: 80px;
    min-height: 750px;
  }
	.contacts{
		// margin-bottom: 30px;
	}
  .partners{
    margin-top: 30px;
  }
	p:not(.footer){
		font-size: 20px !important;
	}
	.title{
		font-size: 42px !important;
	}
	.manual .name{
		font-size: 24px;
	}
  .project__left{
    margin-bottom: 20px;
  }
	.project__right{
    padding-top: 10px;
		span{
			font-size: 30px !important;
		}
	}
}
@media (max-width: 600px){
	.bracelet_about,
	.manual,
	.project,
	.footer{
		padding-left: 25px;
		padding-right: 20px;
	}
  .bracelet_about{
    padding-top: 20px;
  }
  .partners{
    img{
      max-width: 85%;
    }
  }
}
@media (max-width: 442px){
  .wrap-bracelet{
    background-position: -350px;
  }
  .step-1:before,
  .step-2:before,
  .step-3:before,
  .step-4:before,
  .step-5:before{
    position: unset;
  }
  .step-1:after,
  .step-2:after,
  .step-3:after,
  .step-4:after,
  .step-5:after{
    left: -15px;
  }
  .manual__item{
    padding-left: 25px;
  }
}

</style>