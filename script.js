const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

//return a list called results - filter fruit list based on user input
//should not matter if a user types upper of lower case 

function search(str) {
	let results = [];
	const lowerCasedFruit = str.toLowerCase();
	results = fruits.filter(fruit => (fruit.toLowerCase()).includes(lowerCasedFruit));
	return results;
}


function searchHandler(e) {
	const foundFruits = search(e.currentTarget.value);  //call function 
	showSuggestions(foundFruits, e.currentTarget.value);
}



//create a list item and appened it under the input
//loop results 
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	if(inputVal === ""){
		suggestions.innerHTML= "";
	}else{
		results.forEach(fruitSuggestions => {
			const newFruitSuggestion = document.createElement("li");
			newFruitSuggestion.innerText = results;
			suggestions.appendChild(newFruitSuggestion);
		})
	}
}

function useSuggestion(e) {
	input.value = e.currentTarget.innerText;
	suggestions.innerHTML= "";
}

