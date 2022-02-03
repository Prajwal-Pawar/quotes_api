let quoteContainer = document.getElementById('quote-container');

async function getData(){
    try{
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        var quotes = data.slice(0, 10);

        for(let i in quotes){
            console.log(quotes[i]);
            // const quote = quotes[i]['text'];
            // const author = quotes[i]['author'];
        
            quoteContainer.innerHTML += `
                <div id="single-quote">
                    <h1>${quotes[i]['text']}</h1>
                    <h3> - ${quotes[i]['author']}</h3>
                </div>
            `;
        }

    }catch(error){
        return error;
    }
}

getData();


