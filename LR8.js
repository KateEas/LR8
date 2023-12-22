const div_json = document.getElementById('div_for_json')
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {for(let i=0; i<data.length;i++){
      let div_for_json = document.createElement("div");
      let h_js_t=document.createElement("h1");
      h_js_t.textContent=data[i].id;
      div_for_json.append(h_js_t);
      let p_js_id=document.createElement("p");
      p_js_id.textContent=data[i].title;
      div_for_json.append(p_js_id);
      div_json.appendChild(div_for_json);
  }});