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
    const getAnotherArea = calculationWithoutHalf('width' , 'length');
    // show value in calculation area
    const showResult = document.getElementById('dynamicResults');
    const section = document.createElement('section');
    section.innerHTML = `
       <ul class="calculationListStyling">
         <li class="d-flex justify-content-between align-items-center">
          <p>Rectangle</p>
          <p>${getAnotherArea}cm<sup>2</sup></p>
          <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
        </li>
       </ul>
    `
    showResult.appendChild(section);
})

// -------Parallelogram--------
document.getElementById('calculateParallelogram').addEventListener('click' , function(){
      const getAnotherArea = calculationWithoutHalf('paraValue1' , 'paraValue2');
      // show value in calculation area
      const showResult = document.getElementById('dynamicResults');
      const section = document.createElement('section');
      section.innerHTML = `
        <ul class="calculationListStyling">
          <li class="d-flex justify-content-between align-items-center">
            <p>Rectangle</p>
            <p>${getAnotherArea}cm<sup>2</sup></p>
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

// ---------------Ellipse---------------
