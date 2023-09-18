// --------Triangle--------
document.getElementById('calculateTriangle').addEventListener('click' , function(){
    const breadth = document.getElementById('breadth').value;
    const height = document.getElementById('height').value;
    const area = 0.5 * breadth * height;

    // show value in calculation area
    const showResult = document.getElementById('dynamicResults');
    const section = document.createElement('section');
    section.innerHTML = `
       <ul class="calculationListStyling">
         <li class="d-flex justify-content-between align-items-center">
          <p>Triangle</p>
          <p>${area}cm<sup>2</sup></p>
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
  const d1 = document.getElementById('d1').value;
  const d2 = document.getElementById('d2').value;
  const area = 0.5 * d1 * d2;

  // show value in calculation area
  const showResult = document.getElementById('dynamicResults');
  const section = document.createElement('section');
  section.innerHTML = `
     <ul class="calculationListStyling">
       <li class="d-flex justify-content-between align-items-center">
        <p>Rhombus</p>
        <p>${area}cm<sup>2</sup></p>
        <button type="button" class="btn btn-primary">Convert to m<sup>2</sup></button>
      </li>
     </ul>
  `
  showResult.appendChild(section);
})

