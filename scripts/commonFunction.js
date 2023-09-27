function calculationWithHalf(id1, id2){
    const value1 = document.getElementById(id1).value;
    const value2 = document.getElementById(id2).value;
    const area = 0.5 * value1 * value2;

    document.getElementById(id1).value = '';
    document.getElementById(id2).value = '';
    return area;
    
  }

  function calculationWithoutHalf(id1 , id2){
    const value1 = document.getElementById(id1).value;
    const value2 = document.getElementById(id2).value;
    const area = value1 * value2;

    document.getElementById(id1).value = '';
    document.getElementById(id2).value = '';

    return area;
  }
  