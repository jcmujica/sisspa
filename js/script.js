jQuery(function ($) {
  'use strict';

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('header-solid animated fadeInDown');
    } else {
      $('.header').removeClass('header-solid animated fadeInDown');
    }
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('.header2').addClass('header-bgnone animated fadeInDown');
    } else {
      $('.header2').removeClass('header-bgnone animated fadeInDown');
    }
  });
});