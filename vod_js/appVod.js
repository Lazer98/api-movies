const init = () => {
  doApi("lego");
  lightBox_init();
  declareSearchBtn();
}

const declareSearchBtn = () => {
  let search_btn = document.querySelector("#search_btn");
  let search_input = document.querySelector("#id_search_input");
  search_btn.addEventListener("click",() => {
    let input_val = search_input.value;
    doApi(input_val)
  })
}



const doApi = async(_search) => {
  // let url = "vod.json"; // למי שיש אינטרנט כשר
  let url = `https://www.omdbapi.com/?s=${_search}&apikey=5a292f28`;
  document.querySelector("#id_row").innerHTML = "<h2>Loading...</h2>"
  let resp = await axios.get(url);
  console.log(resp.data.Search);
  createAllVods(resp.data.Search);
}


const createAllVods = (_ar) => {
  document.querySelector("#id_row").innerHTML = ""
  _ar.forEach(item => {
    let mov = new VOD("#id_row",item);
    mov.render();
  })
}


init();
