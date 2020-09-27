const socket = io();
var dat
window.addEventListener('message', function(e){
    var dat = e.data;
    localStorage.setItem('username', dat)
});

function redirect(form){
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