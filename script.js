function TipCalculator(){
	var cost = prompt("Hi there! What was the cost of your meal, not including tax?");
	cost = Number(cost);
	var taxPercent = prompt("And what is the tax rate percentage?");
	taxPercent = Number(taxPercent);
	var tipPercent = prompt("Finally, what percentage would you like to tip?");
	tipPercent = Number(tipPercent);
	var subtotal = (cost + cost * (taxPercent/100)).toFixed(2);
	var tip = (cost * (tipPercent/100)).toFixed(2);
	var total = (Number(subtotal) + Number(tip)).toFixed(2); 
	alert('The pre-tax cost of your meal was $' + cost.toFixed(2) + '. The cost with tax is $' + subtotal + '. The tip is $' + tip + '. The total cost of the meal is $' + total + '.');
}


TipCalculator();