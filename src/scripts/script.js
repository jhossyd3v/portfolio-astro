import  initHeader  from "./components/header"

window.addEventListener('DOMContentLoaded', () => {
  initHeader()
  initProjectSlider()
})

const initProjectSlider = () => {

  const projectSlider = document.querySelector('#projects-slider')

  if(!projectSlider) return

  const params = {
    navigation: true,
    loop: true,
    autoplay: true,
    injectStyles: [
      `
        .swiper {
          padding-top: 30px;
        }

        .swiper-button-prev,
        .swiper-button-next {
        --swiper-navigation-top-offset: 25px;
        --swiper-navigation-sides-offset: 0;
          width : 20px;
          height:  20px;
          background-color:#A12568;
          color: #FEC260;
          border-radius: 50%;
          padding: 10px;
        }

        .swiper-button-next {
          left: 50px;
          right: unset;
        }
      `
    ]
  }

    Object.assign(projectSlider, params)

    projectSlider.initialize()
}