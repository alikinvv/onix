$('.main h1').addClass('active');

$('body').on('click', '.variants nav a', (e) => {
    if (!$(e.currentTarget).hasClass('active')) {
        $('.variants nav a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.variants .tab').removeClass('active');
        $(`.variants .tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
    }
});

$('.variants').height($('.variants').height());

if ($('#map').length > 0) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [58.010016, 56.262016],
                zoom: 17
            }, { searchControlProvider: 'yandex#search' }),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/point-map.svg',
                iconImageSize: [88, 127],
                iconImageOffset: [-44, -127]
            });
    
        myMap.geoObjects.add(myPlacemark)
        myMap.behaviors.disable('scrollZoom');
    });
}

var technology = new Swiper('.technology .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            $('.technology .sliders__icon').removeClass('active');
            $(`.technology .sliders__icon:nth-child(${technology.activeIndex + 1})`).addClass('active');
        },
      }
});

$('body').on('click', '.technology .sliders__icon', (e) => {
    $('.technology .sliders__icon').removeClass('active');
    $(e.currentTarget).addClass('active');
    technology.slideTo($(e.currentTarget).index());
});

var apartments = new Swiper('.apartments .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            $('.apartments .sliders__icon').removeClass('active');
            $(`.apartments .sliders__icon:nth-child(${apartments.activeIndex + 1})`).addClass('active');
        },
      }
});

$('body').on('click', '.apartments .sliders__icon', (e) => {
    $('.apartments .sliders__icon').removeClass('active');
    $(e.currentTarget).addClass('active');
    apartments.slideTo($(e.currentTarget).index());
});

var places = new Swiper('.places .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            $('.places .sliders__icon').removeClass('active');
            $(`.places .sliders__icon:nth-child(${places.activeIndex + 1})`).addClass('active');
        },
      }
});

$('body').on('click', '.places .sliders__icon', (e) => {
    $('.places .sliders__icon').removeClass('active');
    $(e.currentTarget).addClass('active');
    places.slideTo($(e.currentTarget).index());
});

var territory = new Swiper('.territory .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            $('.territory .sliders__icon').removeClass('active');
            $(`.territory .sliders__icon:nth-child(${territory.activeIndex + 1})`).addClass('active');
        },
      }
});

$('body').on('click', '.territory .sliders__icon', (e) => {
    $('.territory .sliders__icon').removeClass('active');
    $(e.currentTarget).addClass('active');
    territory.slideTo($(e.currentTarget).index());
});

var additions = new Swiper('.additions .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            $('.additions .sliders__icon').removeClass('active');
            $(`.additions .sliders__icon:nth-child(${additions.activeIndex + 1})`).addClass('active');
        },
      }
});

$('body').on('click', '.additions .sliders__icon', (e) => {
    $('.additions .sliders__icon').removeClass('active');
    $(e.currentTarget).addClass('active');
    additions.slideTo($(e.currentTarget).index());
});