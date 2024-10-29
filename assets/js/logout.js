document.addEventListener("build", ()=>{
    const logoutBtn = document.getElementById('logoutBtn');
    
    logoutBtn.addEventListener('click', function() {
        firebase.signOut(firebase.auth).then(() => {
            window.location.href = '/chakki/';
          }).catch((error) => {
            console.log(error)
          });
    })
  })