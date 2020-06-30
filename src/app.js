
const apiCallBy =(q) =>{
  const url='https://api.github.com';
  
  fetch(`${url}/users/${q}/repos`)
    .then( (res) => {
      if(res.ok){
        return res.json(); 
      }else{
        let error;
            
        return error = res.status ;
      }
    })
    .catch(error => console.error(error))
    .then(data => {
      const send = [];
      data.map(d => {
        send.push(`<p>${d.name}</p><p>${d.url}</p>`);
      });
      $('.root').html(send.join(''));
    });
};

const handleClick =() => {
  $('#push').click(e=>{
    e.preventDefault();
    const q = $('#input').val();
    apiCallBy(q);
  });
}; 

const jquaryPackage = () =>{
  handleClick();
};
$(jquaryPackage);