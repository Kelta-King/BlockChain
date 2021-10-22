
window.onload = function(){

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            set_defaults()
        }
    }
    xhttp.open("GET", "mine_block", true);
    xhttp.send();

}

const set_defaults = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let blockchain = JSON.parse(this.responseText);
            document.getElementById("blocks_count").innerHTML = "#"+blockchain.length;
            document.getElementById("node_address").innerHTML = blockchain.chain[1].transactions[0].receiver;
            
        }
    }
    xhttp.open("GET", "get_chain", true);
    xhttp.send();
    // console.log(blockchain);
    // document.getElementById("blocks_count").innerHTML = "#"+blockchain.length;
    // console.log(blockchain.chain[0]);
}

