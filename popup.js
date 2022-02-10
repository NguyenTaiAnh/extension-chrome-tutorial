const colorPicker = () =>{
    const colors = ['red', 'green', 'blue', 'alpha','black','white','yellow','cyan'];
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}
function test () {
    document.body.style.backgroundColor=colorPicker();
}
document.getElementById('content').innerHTML = test();
  
