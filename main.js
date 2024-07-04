import MainCard from "./MainCard.js";
import Slider from "./Slider.js";
import { getActionMovies, getComedyMovies, getPopularMovies, getsliderContainer } from "./config.js";
import { actionContainer, actionLeftBtn, actionRightBtn, bestContainer, bestLeftBtn, bestRightBtn, popularContainer, popularLeftBtn, popularRightBtn, sliderContainer, videoContainer } from "./query.js";
import VideoCard from "./videoCard.js";




fetch('./db/videos.json')
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    data.forEach(video => {
      console.log(video)
      videoContainer.innerHTML += VideoCard.render(video)
    });
  })


getPopularMovies()
  .then(resp => {
    console.log(resp);
    resp.forEach((data) => {
      console.log(data)
      popularContainer.innerHTML += MainCard.render(data)
    })
    Slider.buttons(popularLeftBtn, popularRightBtn, popularContainer.children)
  })

getComedyMovies()
  .then(resp => {
    console.log(resp);
    resp.forEach((data) => {
      console.log(data)
      bestContainer.innerHTML += MainCard.render(data)
    })
    Slider.buttons(bestRightBtn, bestRightBtn, bestContainer.children)
  })


getActionMovies()
  .then(resp => {
    console.log(resp);
    resp.forEach((data) => {
      console.log(data)
      actionContainer.innerHTML += MainCard.render(data)
    })
    Slider.buttons(actionLeftBtn, actionRightBtn, actionContainer.children)
  })


getsliderContainer()
  .then(resp => {
    console.log(resp);
    resp.forEach((data) => {
      console.log(data)
      sliderContainer.innerHTML += MainCard.render(data)

    })

  })
