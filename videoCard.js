class VideoCard {
  render(video){
    return (
      `
      <div class="grid_video_card">
      <video src="${video.url}" controls></video>
      <h4>${video.title}</h4>
    </div>

      `
    )
  }
}

export default new VideoCard