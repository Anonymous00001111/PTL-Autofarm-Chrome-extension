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

          Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
         }
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for(var i = this.length - 1; i >= 0; i--) {
                if(this[i] && this[i].parentElement) {
                    this[i].parentElement.removeChild(this[i]);
                }
            }
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
                if (node == null)
                {
                    location.reload();
                }
                else{
                node.remove();
                var id_real = document.querySelector('[title="-> Payday auszahlen"]');
                id_real.click();
                }
            }
        }
        catch (e) {
            location.reload();  
        }
        }
}())
