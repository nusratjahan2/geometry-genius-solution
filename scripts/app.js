document.getElementById('calculateTriangle').addEventListener('click' , function(){
    const breadth = document.getElementById('breadth').value;
    const height = document.getElementById('height').value;
    const area = 0.5 * breadth * height;

    // show value in calculation area
    const showResult = document.getElementById('dynamicResults');
    const section = document.createElement('section');
    section.innerHTML = `
       <ol>
         <li>${area}</li>
       </ol>
    `
    showResult.appendChild(section);
})