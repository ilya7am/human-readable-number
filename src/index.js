function toReadable (number) {
    let result = '';
    let numb = 0;
  
      let array1 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let array2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

     
        if (number === 0) {
          return 'zero';
        };


        if (number >= 100) {        
            numb = (number / 100);
            result = `${array1[numb]} hundred `;
            number = number - numb * 100;
            }


        if (number > 19) {
            num = (number / 10);
            number = number - numb * 10;
            result = `${result} ${array2[numb]} ${array1[number]}`;
        } else {
            result = `${result} ${array1[number]}`;
        }

        return result.trim();
        
    };
    



  


  