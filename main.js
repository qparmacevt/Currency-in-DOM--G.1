(async () => {

    let URL1 = 'https://restcountries.eu/rest/v2/all';
    let answer1 = await fetch(URL1);
    answer1 = await answer1.json();

    let URL2 = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    let answer2 = await fetch(URL2);
    answer2 = await answer2.json();


    let countries = answer1;
    let rates = answer2;

 
    for(let item of countries){

        let cc = item.currencies[0].code;

        for(let oneRate of rates){
            if(oneRate.cc == cc){
                item.rate = oneRate.rate;
                item.exchangedate = oneRate.exchangedate;
                break;
            }
        }
    }

    countries = countries.filter(item => item.rate);


  
  /*  console.log(answer2[0].cc);

    let validCountries = answer1;

    console.log(validCountries);

    for(let i=0; i<validCountries.length; i++){

        if(answer1[i].currencies[0].code in answer2) {
            validCountries = validCountries[i].push(answer2[i].exchangedate);
        }

    };

    console.log(validCountries);
    

   answer1 = answer1.filter(item => item.currencies.code == answer2.cc).map( countries => `
    <div class="alert alert-primary" role="alert">
         ${countries.name}
    </div>
    `);
    console.log(answer1);

    let countryCard = document.querySelector('#special');
    countryCard.innerHTML = answer1.join(' ');*/

})()
