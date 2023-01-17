let items = [];

if(localStorage.getItem('paidlogs') && ((JSON.parse(localStorage.getItem('paidlogs')).length) > 0)){
    updateCartTotal();
} 

function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('paidlogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    var downFile = document.getElementById('down-file');
    var showToast = document.getElementById('showtoasts');
    var anonP = document.getElementById('anon-p');
    var anonCheck = document.getElementById('anon-check');

    if(JSON.parse(localStorage.getItem('paidlogs')).length == 1) {
        const bankLog = (JSON.parse(localStorage.getItem('paidlogs'))[0].account);
        const bankBal = (JSON.parse(localStorage.getItem('paidlogs'))[0].balance);
        const bankImg = (JSON.parse(localStorage.getItem('paidlogs'))[0].image);

        const banking1 = (JSON.parse(localStorage.getItem('paidlogs'))[0].info1);
        const banking2 = (JSON.parse(localStorage.getItem('paidlogs'))[0].info2);
        const banking3 = (JSON.parse(localStorage.getItem('paidlogs'))[0].info3);
        const banking4 = (JSON.parse(localStorage.getItem('paidlogs'))[0].info4);
        const banking5 = (JSON.parse(localStorage.getItem('paidlogs'))[0].info5);
        const banking6 = (JSON.parse(localStorage.getItem('paidlogs'))[0].info6);

        if(bankLog.includes('Huntington') || bankLog.includes('Woodforest') || bankLog.includes('Barclays')) {
            downFile.innerHTML = bankLog.split('Bank')[0];
        } else if(bankLog.includes('America')) {
            downFile.innerHTML = 'BankofAmerica';
        } else {
            downFile.innerHTML = bankLog.split('[')[0];
        }
    
        showToast.innerHTML = `
            Complete 1 Download <img src="img/partners/doh.png">
        `;

        anonP.innerHTML = `
            ${bankLog.replace(']',' ACCOUNT]')} with <span>${bankBal}</span> <hr class="thehr">
            ${banking1}, ${banking2}, ${banking3}, ${banking4}, ${banking5}, ${banking6}
        `;
        anonCheck.innerHTML = `
            Download File <img src=${bankImg}>
        `;
    } else if(JSON.parse(localStorage.getItem('paidlogs')).length > 1 && JSON.parse(localStorage.getItem('paidlogs')).length <= 3) {
        var Loginz = (JSON.parse(localStorage.getItem('paidlogs')));
    
        var discountTotal = parseInt((total * 0.9).toFixed(0));
        localStorage.setItem('divtotal', discountTotal);
        var disTot = localStorage.getItem('divtotal');

        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('p');
            var logItems = document.getElementById('anon-p');
            logRow.innerHTML = `
                <hr class="thehr" style="margin-top: -10px !important"> 
                ${Loginz[i].account.replace(']', ' ACCOUNT]')} with 
                <span>${Loginz[i].balance}</span>
            `;
            logItems.prepend(logRow);
        }
        
        showToast.innerHTML = `
            Complete ${JSON.parse(localStorage.getItem('paidlogs')).length} Downloads
            <img src="img/partners/doh.png">
        `;
        downFile.innerHTML = 'Bank Log Files';
        anonCheck.innerHTML = `
            Download ${JSON.parse(localStorage.getItem('paidlogs')).length} Files
            <img src="img/partners/doh.png">
        `;
    } else if(JSON.parse(localStorage.getItem('paidlogs')).length > 3) {
        var Loginz = (JSON.parse(localStorage.getItem('paidlogs')));
    
        var discountTotal = parseInt((total * 0.9).toFixed(0));
        localStorage.setItem('divtotal', discountTotal);
        var disTot = localStorage.getItem('divtotal');

        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('p');
            var logItems = document.getElementById('anon-p');
            logRow.innerHTML = `
                <hr class="thehr" style="margin-top: -10px !important"> 
                ${Loginz[i].account.substring(0, Loginz[i].account.indexOf('['))} -
                <span>${Loginz[i].balance}</span>
            `;
            logItems.prepend(logRow);
        }
        
        showToast.innerHTML = `
            Complete ${JSON.parse(localStorage.getItem('paidlogs')).length} Downloads
            <img src="img/partners/doh.png">
        `;
        downFile.innerHTML = 'Bank Log Files';
        anonCheck.innerHTML = `
            Download ${JSON.parse(localStorage.getItem('paidlogs')).length} Files
            <img src="img/partners/doh.png">
        `;
    } 
    localStorage.setItem('banktotal',total);
}