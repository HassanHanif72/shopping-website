// Similar Product Slider

$(".similar-product-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  // autoplaySpeed: 0,
  // speed: 7000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
  ],
});

// Latest Gaming Slider

$(".latest-gaming-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  // autoplaySpeed: 0,
  // speed: 7000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
  ],
});

// Best Selling Slider

$(".best-selling-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  // autoplaySpeed: 0,
  // speed: 7000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
      },
    },
  ],
});

// deals slider

$(".deals-slider-mobile").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  // autoplaySpeed: 0,
  // speed: 7000,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// Top Section Slider

$(".top-section-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  // autoplaySpeed: 0,
  // speed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
  ],
});

// Popup Zoom Image
$(document).ready(function () {
  $(".zoom-icon").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// magnify hover glass zoom

// $(document).ready(function() {
//   function initXzoomForActiveSlide() {
//       $('.carousel-item.active .xzoom').xzoom({zoomWidth:300,zoomHeight:300, tint: '#333', Xoffset: 15});
//   }
//   initXzoomForActiveSlide();
//   $('.carousel').on('slid.bs.carousel', function() {
//       $('.xzoom').trigger('xzoom.destroy');
//       initXzoomForActiveSlide();
//   });
// });

// magnify hover glass zoom

$(document).ready(function () {
  function initXzoomForActiveSlide() {
    $(".carousel-item.active .xzoom").xzoom({
      zoomWidth: 300,
      zoomHeight: 300,
      tint: "#333",
      Xoffset: 15,
    });
  }
  initXzoomForActiveSlide();

  $(".carousel").on("slid.bs.carousel", function () {
    $(".xzoom").trigger("xzoom.destroy");
    initXzoomForActiveSlide();
  });

  var isOverXzoom = false;
  var hoverOutTimeout;

  $("body").on("mousemove", function (e) {
    var $target = $(e.target);

    if ($target.closest(".xzoom").length) {
      clearTimeout(hoverOutTimeout);

      if (!isOverXzoom) {
        isOverXzoom = true;
        // console.log('xzoom hover in');
        $(".carousel").carousel("pause");
      }
    } else {
      if (isOverXzoom) {
        hoverOutTimeout = setTimeout(function () {
          isOverXzoom = false;
          // console.log('xzoom hover out');
          $(".carousel").carousel("cycle");
        }, 8000); // 200ms delay
      }
    }
  });
});

// password show hide
const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetInput = document.getElementById(targetId);
    const inputType = targetInput.getAttribute("type");
    targetInput.setAttribute(
      "type",
      inputType === "password" ? "text" : "password"
    );
  });
});

// plus minus quantity
// JavaScript functions to increment and decrement the input value
function updateValue(inputId, change) {
  var inputElement = document.getElementById(inputId);
  var value = parseInt(inputElement.value, 10);
  inputElement.value = isNaN(value) ? 1 : value + change;
}

// Get Quote Form validation

(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// hover menu

$(document).ready(function () {
  $(".nav-item.dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").first().addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").first().removeClass("show");
    }
  );
});

// Sticky header

// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// })

// end Sticky header
