const hello = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World 111"), 2000);
    });
  }
  
  hello()
    .then(value => console.log(value));
//slider
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
//tabs
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__maintenance').removeClass('catalog__maintenance_active').eq($(this).index()).addClass('catalog__maintenance_active');
});

//tabs more and back
function toggleSlide(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog__content').eq(i).toggleClass('catalog__content_active');
          $('.catalog__list').eq(i).toggleClass('catalog__list_active');
      })
  });
};
toggleSlide('.catalog-item__more')
toggleSlide('.catalog-item__back')

// Modal
$('[data-modal=consultation]').on('click', function() {
    $('.hidden, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.hidden, #consultation, #purchase, #thankfulness').fadeOut('slow');
});
$('.catalog-item__button').each(function(i) {
    $(this).on('click', function(){
        $('#purchase .modal__descr').text($('.catalog-item__product').eq(i).text());
        $('.hidden, #purchase').fadeIn('slow');
    })
});
});
            