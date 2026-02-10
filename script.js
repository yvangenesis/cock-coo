function calculateFeed() {
    const birds = parseFloat(document.getElementById('birdCount').value);
    const age = parseFloat(document.getElementById('birdAge').value);
    const price = parseFloat(document.getElementById('pricePerKg').value) || 0;
    
    const resultBox = document.getElementById('resultBox');
    const finalValue = document.getElementById('finalValue');
    const totalCost = document.getElementById('totalCost');
    const proteinLevel = document.getElementById('proteinLevel');
    const mixingInstruction = document.getElementById('mixingInstruction');
    const feedTypeTitle = document.getElementById('feedTypeTitle');
    const tipText = document.getElementById('dailyTip');

    if (birds > 0 && age > 0) {
        let dailyPerBird = 0;
        let feedType = "";
        let protein = "";
        let instruction = "";

        // Logic based on your provided feeding guide image
        if (age <= 6) {
            dailyPerBird = 0.045; 
            feedType = "Starter Feed";
            protein = "20% Protein";
            instruction = "Young chicks require organic starter feed for the first 6 weeks.";
            tipText.innerText = "Phase 1: High protein is key for bone and organ development.";
        } else if (age > 6 && age < 20) {
            dailyPerBird = 0.080; 
            feedType = "Grower Feed";
            protein = "17% to 18% Protein";
            instruction = "If you have leftover starter feed, mix it with the poultry grower feed.";
            tipText.innerText = "Phase 2: Focus on steady weight gain to avoid obesity before laying.";
        } else {
            dailyPerBird = 0.115; 
            feedType = "Layer Feed";
            protein = "16% to 17% Protein";
            instruction = "If you have leftover grower feed, mix it with the poultry layer feed.";
            tipText.innerText = "Phase 3: Point of Lay! Ensure they have enough calcium for strong shells.";
        }

        // Calculations
        let totalWeight = (birds * dailyPerBird).toFixed(2);
        let costResult = (totalWeight * price).toFixed(2);
        
        // Update UI
        feedTypeTitle.innerText = feedType;
        finalValue.innerText = `${totalWeight} kg`;
        totalCost.innerText = costResult;
        proteinLevel.innerText = protein;
        mixingInstruction.innerText = instruction;
        
        resultBox.style.display = "block";
    } else {
        alert("Please enter a valid number of birds and age.");
    }
}

function resetForm() {
    document.getElementById('birdCount').value = '';
    document.getElementById('birdAge').value = '';
    document.getElementById('pricePerKg').value = '';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('dailyTip').innerText = "Enter your flock details above to see personalized growth tips!";
}
