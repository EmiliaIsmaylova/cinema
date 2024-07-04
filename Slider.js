class Slider {
  constructor () {
    this.count = 0
  }

  render(data) {
    for (let i = 0; i < data.length; i++){
      console.log(data[i]);
      data[i].style.transform = `translateX(-${this.count * 310}px)`
    }
  }

  buttons(leftBtn, rightBtn, data){
    rightBtn.addEventListener("click", () => {
      if ((data.length - 4) > this.count){
        this.count ++
      } else{
        this.count = 0
      }
      this.render(data)
    })

    leftBtn.addEventListener("click", () => {
      if (this.count > 0){
        this.count --
      } else{
        this.count = data.length - 4
      }
      this.render(data)
    })
  }
}


export default new Slider