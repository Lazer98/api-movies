class VOD {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.Title = _item.Title;
    this.Poster = _item.Poster;
    this.Year = _item.Year;
    this.id = _item.imdbID;
  }

  render() {
    let myDiv = document.createElement("div");
    myDiv.className = "col-md-3 p-3";
    document.querySelector(this.parent).append(myDiv);
    myDiv.innerHTML = `
    <div class="p-2 border text-center h-100">
      <img src="${this.Poster}" alt="movie" class="w-75">
      <h4>${this.Title}</h4>
      <h5>Year:${this.Year}</h5>
      <button class="btn btn-dark info-btn">More info</button>
    </div>
    `
    let infoBtn = myDiv.querySelector(".info-btn");
    infoBtn.addEventListener("click",() => {
      showLightBox(this.id);
    })

  }
}