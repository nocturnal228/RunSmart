const hello = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World 111"), 2000);
    });
  }
  
  hello()
    .then(value => console.log(value));

$(document).ready(function(){
  $('.carousel__slider').slick({
    speed: 700,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="src/img/carousel/chevron-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="src/img/carousel/chevron-right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
$('ul.catalog__tab').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__maintenance').removeClass('catalog_maintenance_active').eq($(this).index()).addClass('catalog_maintenance_active');
});
});
            