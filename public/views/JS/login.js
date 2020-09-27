const socket = io();
var dat

function redirect(form){
    window.addEventListener('message', (event){
        var dat = JSON.stringify(event.data);
        localStorage.setItem('username', dat)
    });
    var data = localStorage.getItem('username');
    var n = data;
    socket.emit('names',n);
    if (n==('admin')){
        
        window.location="admin.html";
    }
    else{
        window.location="pindex.html";
    }
}