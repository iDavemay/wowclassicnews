import $ from 'jquery';

// class MobileMenu {
//     constructor() {
//         this.siteHeader = $(".site-header");
//         this.menuIcon = $(".site-header__menu-icon");
//         this.menuContent = $(".site-header__menu-content");
//         this.events();
//     }

//     events() {
//         this.menuIcon.click(this.toggleMenu.bind(this));
//     }

//     toggleMenu() {
//         this.menuContent.toggleClass("site-header__menu-content--is-visible");
//         this.siteHeader.toggleClass("site-header--is-expanded");
//         this.menuIcon.toggleClass("site-header__menu-icon--close-x");
//     }
// }

// export default MobileMenu;

class MobileMenu {
    constructor() {
        this.menu = $('.navbar');
        this.menuNav = $('.navbar__nav');
        this.menuToggleButton = $('.navbar__toggle');
        this.events();
    }

    events() {
        this.menuToggleButton.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuNav.toggleClass('navbar__nav--is-open');
        this.menuToggleButton.toggleClass('navicon--toggle');
    }
}

export default MobileMenu;