    (function(){
        var div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = 0;
        div.style.right = 0;
        div.textContent = 'Injected!';
        div.id = "injec";
        document.body.appendChild(div);
    
        
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
        console.log('Content script loaded and started');
        setInterval(doStuff, 5 * 60 * 1000)
        async function doStuff()
        {   
        try {
            await sleep(Math.random() *200000);
            console.log('Content script still loaded');
            var time = document.getElementById("countdown-payday").innerText;
            var a = parseInt(time);
            if (a <= 0) {
                var node = document.querySelector('[title="Payday auszahlen"]');
                var id_pd =document.getElementById("payday_payout");
                var  tag_a = id_pd.getElementsByTagName('a');
                if (tag_a != null && tag_a.length > 0) {
                    var setLink = id_pd.parentNode.getElementsByTagName('a');
                    if (setLink != null && setLink.length > 0) {
                        setLink[0].href = tag_a[0].href;
                    }
                }    
                if (node == null)
                {
                    location.reload();
                }
                else{
                    window.location.href = setLink[0].href;
                }
            }
        }
        catch (e) {
            location.reload();  
        }
        }
}())
