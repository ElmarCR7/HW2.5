function getRandomColor() { 
    let letters = '0123456789ABCDEF'; 
    let color = '#'; 
    for (var i = 0; i < 6; i++) { 
        color += letters[Math.floor(Math.random() * 16)]; 
    } 
    return color; 
} 

function createCircles(count) { 
    let circleContainer = document.getElementById('circleContainer'); 
    circleContainer.innerHTML = ''; 
    for (let i = 0; i < count; i++) { 
        let circle = document.createElement('div'); 
        circle.className = 'circle'; 
        circle.style.backgroundColor = getRandomColor();
        circleContainer.appendChild(circle); 
    } 
} 