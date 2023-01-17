var j = true;
function move(){
    if(localStorage.getItem('received-funds')) {
        var elemj = document.getElementById('pablos');
        var width = localStorage.getItem('paid-left');
        var id = setInterval(frame, 1000);
        function frame(){
            if(width <= 0){
                clearInterval(id);
                i = false;
                localStorage.clear();
                alert("Time's up. This progress is lost, select another bank log from the website and pay for it on time");
                window.location.assign('dashboard');
            } 
            else if( width <= 300) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('paid-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/9) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width <= 600) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('paid-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/9) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else {
                localStorage.setItem('paid-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/9) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            }
        }
    } else {
        console.log('There was nothing on your cart')
    }      
}