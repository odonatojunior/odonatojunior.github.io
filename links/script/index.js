(
  function() {
    const links = document.querySelector('.links');
    
    fetch('http://127.0.0.1:5500/api/media.json')
      .then(res => res.json())
      .then(json => {
        json.forEach(element => createLink(links, element));
      })
      .catch(error => {
        console.log(error);
      });

    fetch('http://127.0.0.1:5500/api/info.json')
      .then(res => res.json())
      .then(json => {
        json.forEach(e=>{
          document.querySelector('.pic').setAttribute('src', e.picture)
        })
      })
    
    
    
    function createLink(links, element){
      const newLink = document.createElement('li');
      newLink.className = 'link';
      newLink.innerHTML = `<a href="${element.link}" target="_blank">${element.name}</a>`;
      links.appendChild(newLink);
    }
    
    const btn = document.querySelector('button');
    btn.addEventListener('click', toggler);
    
    function toggler(e){
      document.body.toggleAttribute('data-darkmode');
    }
  }
)()
