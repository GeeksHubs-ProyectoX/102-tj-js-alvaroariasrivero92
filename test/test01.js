function numPrimo(input) {
    if(input === 1){
        return -1
      }else{
        let arr = []
        for(let i = 2; i <= input; i++){
          arr.push(i)
        }
        const myPrimeArray = arr.filter(num => {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
        }
        return num !== 1;
      });
      return myPrimeArray
    }
}

module.exports = numPrimo;
