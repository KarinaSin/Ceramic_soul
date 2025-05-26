import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import JustValidate from "just-validate";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "animate.css";
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");
  console.log(tabs);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Удаляем активный класс у всех табов и контента
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.style.display = "none"));

      // Добавляем активный класс к нажатому табу и показываем соответствующий контент
      tab.classList.add("catalog__tab_active");
      contents[index].style.display = "flex";
    });
  });

  // Показываем первый контент при загрузке
  contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}

// Обратите внимание, что значение block (в двух местах) можно спокойно поменять на flex, если вам это необходимо
try {
  new Swiper(".works__slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },

    modules: [Navigation, Pagination],
  });
} catch (e) {}

try {
  const validator = new JustValidate("form");
  validator
    .addField("#name", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Min 2",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField("#question", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 5,
      },
    ], {
      errorsContainer: document.querySelector('#question').parentElement.querySelector(".error-message"),
    })
    .addField("#checkbox", [
      {
        rule: "required",
      },
    ],{
      errorsContainer: document.querySelector('#checkbox').parentElement.parentElement.querySelector(".checkbox-error-message"),
    });
} catch (e) { }

try {
  const validatorForm = new JustValidate(".footer__form");
  validatorForm
    .addField(
      "#footer__email",
      [
        {
          rule: "required",
        },
        {
          rule: "email",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer__email")
          .parentElement.parentElement.querySelector(
            ".footer__email-error-message"
          ),
      }
    )
    .addField(
      "#footer__checkbox",
      [
        {
          rule: "required",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer__checkbox")
          .parentElement.parentElement.querySelector(
            ".footer__checkbox-error-message"
          ),
      }
    );
} catch (e) {}
