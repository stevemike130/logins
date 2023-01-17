function detectPay() {
    var binance = new WebSocket("wss://ws.blockchain.info/inv");
    binance.onopen = function(){
        binance.send(JSON.stringify({
            "op": "unconfirmed_sub"
        }))
    }
    binance.onmessage = function(onmsg){
        var response = JSON.parse(onmsg.data);
        var address1 = response.x.out[0].addr;
        var address2 = '1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp';

        if(address1 == address2) {
            if(!localStorage.getItem('deposit-amount')) {
                if(localStorage.getItem('banklogs')) {
                    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
                        let coinbase = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
                        coinbase.onmessage = event => {
                            let confirm = JSON.parse(event.data);
                            let coinz = ((response.x.out[0].value / 100000000) * parseFloat(confirm.k.c)).toFixed(0);
                            let balance = parseInt(coinz);
            
                            localStorage.setItem('paidlogs', localStorage.getItem('banklogs'));
                            localStorage.setItem('banklogs',[]);
                            localStorage.setItem('paid-left', 900);
                            localStorage.setItem('received-funds', balance);
                            window.location.reload();
                        }
                    }
                }
            }
        }             
    }
}