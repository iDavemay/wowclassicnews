import $ from 'jquery';

$('.dropdown__toggle').click( function(e) {
    e.preventDefault();
    $(this).parent('.dropdown').toggleClass('dropdown--is-open').siblings().removeClass('dropdown--is-open');
});