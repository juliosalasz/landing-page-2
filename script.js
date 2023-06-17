// Big Text
function scaleHeader() {
  var scalable = document.querySelectorAll(".scale--js");
  var margin = 10;
  for (var i = 0; i < scalable.length; i++) {
    var scalableContainer = scalable[i].parentNode;
    scalable[i].style.transform = "scale(1)";
    var scalableContainerWidth = scalableContainer.offsetWidth - margin;
    var scalableWidth = scalable[i].offsetWidth;
    scalable[i].style.transform =
      "scale(" + scalableContainerWidth / scalableWidth + ")";
    scalableContainer.style.height =
      scalable[i].getBoundingClientRect().height + "px";
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var myScaleFunction = debounce(function () {
  scaleHeader();
}, 250);

myScaleFunction();

window.addEventListener("resize", myScaleFunction);

//Nav to white

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 200) {
    $(".navClass").css("background", "white");
    $("#nav").css("color", "black");
  } else {
    $(".navClass").css("background", "none");
    $("#nav").css("color", "white");
  }
});

//Change between two navs

$(document).ready(function () {
  if ($(window).width() <= 425) {
    $("#nav").css("display", "none");
  }
});

$(document).ready(function () {
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 425) {
      $("#nav").removeAttr("style");
      $("#navMobile").css("display", "none");
    } else {
      $("#nav").css("display", "none");
      $("#navMobile").removeAttr("style");
    }
  });
});

$(".btnSlider").on("click", function () {
  $(".menu").toggleClass("show");
});

//Section Links

$(document).ready(function () {
  $(".aboutLink").click(function (event) {
    event.preventDefault();

    var offset = $("#aboutMe").offset().top;
    var scrollPosition = offset - 150;

    $("body, html").animate(
      {
        scrollTop: scrollPosition,
      },
      600
    );
  });

  $(".skillLink").click(function (event) {
    event.preventDefault();

    var offset = $("#skills").offset().top;
    var scrollPosition = offset - 150;

    $("body, html").animate(
      {
        scrollTop: scrollPosition,
      },
      600
    );
  });

  $(".proyectosLink").click(function (event) {
    event.preventDefault();

    var offset = $("#proyectos").offset().top;
    var scrollPosition = offset - 120;

    $("body, html").animate(
      {
        scrollTop: scrollPosition,
      },
      600
    );
  });

  $(".contactLink").click(function (event) {
    event.preventDefault();

    var offset = $("#contacto").offset().top;
    var scrollPosition = offset - 150;

    $("body, html").animate(
      {
        scrollTop: scrollPosition,
      },
      600
    );
  });

  $(".logoLink").click(function (event) {
    event.preventDefault();

    var offset = $("#heroBanner").offset().top;
    var scrollPosition = offset - 150;

    $("body, html").animate(
      {
        scrollTop: scrollPosition,
      },
      600
    );
  });
});

//Aperaring animation

$(document).ready(function () {
  $(".heroLogo").animate(
    {
      left: "0px",
      opacity: "1",
    },
    "slow"
  );
  $(".aboutMe-container").animate(
    {
      opacity: "1",
    },
    "slow"
  );

  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() + $(window).height() - 100 >=
      $("#skills").offset().top
    ) {
      $(".skill-list ").animate(
        {
          opacity: "1",
          top: "0px",
        },
        "slow"
      );
    }
  });
});
