(function(){
  setTimeout(loader, 2000);

  function loader(){
    const load = document.querySelector('.loader');
    console.log(load)
    if(load.classList.contains('active')){
      load.classList.remove('active')
    }
  }


  function notImage(){
    const img = document.querySelectorAll('img');
    img.forEach(i => i.addEventListener('dragstart', n))
    function n(e){
      e.preventDefault();
    }
  }
  notImage();
})()