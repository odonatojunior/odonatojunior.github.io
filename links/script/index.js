(
  function() {
    const links = document.querySelector('.links');
    
    fetch('https://odonatojunior.github.io/links/api/media.json')
      .then(res => res.json())
      .then(json => {
        json.forEach(element => createLink(links, element));
      })
      .catch(error => {
        console.log(error);
      });

    fetch('https://odonatojunior.github.io/links/api/info.json')
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
