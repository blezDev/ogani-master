/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

})(jQuery);


//Fetch User Email
const userName = document.getElementById("user-login-name");
userName.textContent.replaceAll("Login","");
userName.textContent = localStorage.getItem("user_email");

const almond = document.getElementById("almond-pic");
almond.addEventListener("click",()=>{
    let id = "171686";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Almond");
    window.location = "shop-details.html"
});

const banana = document.getElementById("banana-pic");

banana.addEventListener("click",()=>{
    let id = "1105073";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Banana");
    window.location = "shop-details.html"
});

const chicken = document.getElementById("chicken-pic");
chicken.addEventListener("click",()=>{
    let id = "2514746";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Chicken");
    window.location = "shop-details.html"
});

const watermelon = document.getElementById("watermelon-pic");

watermelon.addEventListener("click",()=>{

});

const grapes = document.getElementById("grapes-pic");

grapes.addEventListener("click",()=>{
   const id = "2346413";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Grapes");
    window.location = "shop-details.html"
});

const fish = document.getElementById("fish-pic");

fish.addEventListener("click",()=>{
    const id = "333374";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Fish");
    window.location = "shop-details.html"
});

const mango = document.getElementById("mango-pic");

mango.addEventListener("click",()=>{
    const id = "2344737";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Mango");
    window.location = "shop-details.html"
});

const apple = document.getElementById("apple-pic");

apple.addEventListener("click",()=>{
    const id = "1750340";
    localStorage.setItem("itemID",id);
    localStorage.setItem("itemName","Apples");
    window.location = "shop-details.html"
});


//shop-details
async function fetchData() {
    try {
        const id = localStorage.getItem("itemID");
        let itemName = localStorage.getItem("itemName");
        const url = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=AM8O0qiDqSBecgxaVyrQDSseYvz3FanDdXTMYIxf`;
        const response = await axios.get(url);
        const foodDetails = response.data;
        const h3Element = document.querySelector('.product__details__text h3');
        // Add text using innerText property
        h3Element.innerText = itemName;
        const itemDescription = document.getElementById("item-description");

        h3Element.innerText = foodDetails.description;
        const nutrientList = document.getElementById("nutrients-list");

        foodDetails["foodNutrients"].forEach(item=>{
            // Create a new <li> element
            const liElement = document.createElement('li');

            // Create a <b> element for bold text
            const boldElement = document.createElement('b');
            boldElement.textContent = item.nutrient.name + ': ';

            // Create a <span> element for the value
            const spanElement = document.createElement('span');
            const amountValue = item.amount !== null ? item.amount : "0";
            spanElement.innerHTML = `${amountValue} ${item.nutrient.unitName}`;

            // Append the <b> and <span> elements to the <li> element
            liElement.appendChild(boldElement);
            liElement.appendChild(spanElement);

            // Append the <li> element to the <ul> element
            nutrientList.appendChild(liElement);
        });



        itemDescription.innerText = `Food Nutrients`

        const dataType =  document.getElementById("data-type");
        dataType.innerText = `Data Type : ${foodDetails["dataType"]}`;


        const foodImage = document.getElementById("food-image");
        const imageURL = `https://api.pexels.com/v1/search?query=${foodDetails["description"]}&per_page=1`
        const imageResponse = await axios.get(imageURL,{headers : {
                Authorization : "RJctUfnsOAa2wZmqMY8J3mMbMQNvLd9DJJYNxaJp62WeRN0XlyeegnXV"
            }});
        const imageData = imageResponse["data"];
        let image = imageData.photos[0].src.original;
        if (image === undefined){
            image = "https://demofree.sirv.com/nope-not-here.jpg"
        }

        foodImage.src = image

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

