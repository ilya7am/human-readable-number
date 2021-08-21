function toReadable (number) {
    let result ='';
  
      let numb = [
        {value: 1, name: 'one'},
        {value: 2, name: 'two'},
        {value: 3, name: 'three'},
        {value: 4, name: 'four'},
        {value: 5, name: 'five'},
        {value: 6, name: 'six'},
        {value: 7, name: 'seven'},
        {value: 8, name: 'eight'},
        {value: 9, name: 'nine'},
        {value: 10, name: 'ten'},
        {value: 11, name: 'eleven'},
        {value: 12, name: 'twelve'},
        {value: 13, name: 'thirteen'},
        {value: 14, name: 'fourteen'},
        {value: 15, name: 'fifteen'},
        {value: 16, name: 'sixteen'},
        {value: 17, name: 'seventeen'},
        {value: 18, name: 'eighteen'},
        {value: 19, name: 'nineteen'},
        {value: 20, name: 'twenty'},
        {value: 30, name: 'thirty'},
        {value: 40, name: 'forty'},
        {value: 50, name: 'fifty'},
        {value: 60, name: 'sixty'},
        {value: 70, name: 'seventy'},
        {value: 80, name: 'eighty'},
        {value: 90, name: 'ninety'},
        {value: 100, name: 'hundred'},
        ];
  
        if (number === 0) {
          return 'zero';
        }
  
        for (let i of numb) {
          if(number >= i.value) {
            if(number <= 99) {
              result = result + i.name;
              number = number - i.value;
            }
          }
      }
  }
  



  


  