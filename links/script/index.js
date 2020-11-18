(
  function() {
    const links = document.querySelector('.links');
    
    fetch('https://my-json-server.typicode.com/odonatojunior/fake-apis/links')
      .then(res => res.json())
      .then(json => {
        json.forEach(element => createLink(links, element));
      })
      .catch(error => {
        console.log(error);
      }); 
    
    function createLink(links, element){
      const newLink = document.createElement('li');
      newLink.className = 'link';
      newLink.innerHTML = `<a href="${element.link}" target="_blank">${element.name}</a>`;
      links.appendChild(newLink);
    }

    function notImage(){
      const img = document.querySelectorAll('img');
      img.forEach(i => i.addEventListener('dragstart', n));
      function n(e){
        e.preventDefault();
      }
    }
    notImage();
  }
)()
