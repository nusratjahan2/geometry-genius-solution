function calculationWithHalf(id1, id2){
  const value1 = document.getElementById(id1).value;
  const value2 = document.getElementById(id2).value;
  const area = 0.5 * value1 * value2;
  return area;
}



// --------Triangle--------
document.getElementById('calculateTriangle').addEventListener('click' , function(){
  const getResult = calculationWithHalf('height' , 'breadth');
  // show value in calculation area
  const showResult = document.getElementById('dynamicResults');
  const section = document.createElement('section');
  section.innerHTML = `
     <ul class="calculationListStyling">
       <li class="d-flex justify-content-between align-items-center">
        <p>Triangle</p>
        <p>${getResult}cm<sup>2</sup></p>
        <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
      </li>
     </ul>
  `
  showResult.appendChild(section);
})

// -----Rectangle-------
document.getElementById('calculateRectangle').addEventListener('click' , function(){
    const width = document.getElementById('width').value;
    const length = document.getElementById('length').value;
    const area = width * length;

    // show value in calculation area
    const showResult = document.getElementById('dynamicResults');
    const section = document.createElement('section');
    section.innerHTML = `
       <ul class="calculationListStyling">
         <li class="d-flex justify-content-between align-items-center">
          <p>Rectangle</p>
          <p>${area}cm<sup>2</sup></p>
          <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
        </li>
       </ul>
    `
    showResult.appendChild(section);
})

// -------Parallelogram--------
document.getElementById('calculateParallelogram').addEventListener('click' , function(){
    const breadth = document.getElementById('paraValue1').value;
    const height = document.getElementById('paraValue2').value;
    const area = breadth * height;

    // show value in calculation area
    const showResult = document.getElementById('dynamicResults');
    const section = document.createElement('section');
    section.innerHTML = `
       <ul class="calculationListStyling">
         <li class="d-flex justify-content-between align-items-center">
          <p>Parallelogram</p>
          <p>${area}cm<sup>2</sup></p>
          <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
        </li>
       </ul>
    `
    showResult.appendChild(section);
})

// --------Rhombus---------
document.getElementById('calculateRhombus').addEventListener('click' , function(){
  const getResult = calculationWithHalf('d1' , 'd2');
  // show value in calculation area
  const showResult = document.getElementById('dynamicResults');
  const section = document.createElement('section');
  section.innerHTML = `
     <ul class="calculationListStyling">
       <li class="d-flex justify-content-between align-items-center">
        <p>Rhombus</p>
        <p>${getResult}cm<sup>2</sup></p>
        <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
      </li>
     </ul>
  `
  showResult.appendChild(section);

})

// ----------Pentagon-------------
document.getElementById('calculatePentagon').addEventListener('click' , function(){
  const getResult = calculationWithHalf('p' , 'b');
  // show value in calculation area
  const showResult = document.getElementById('dynamicResults');
  const section = document.createElement('section');
  section.innerHTML = `
     <ul class="calculationListStyling">
       <li class="d-flex justify-content-between align-items-center">
        <p>Pentagon</p>
        <p>${getResult}cm<sup>2</sup></p>
        <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
      </li>
     </ul>
  `
  showResult.appendChild(section);

})
