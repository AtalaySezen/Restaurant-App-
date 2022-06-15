const search = document.getElementById('search');
const submitSearch = document.getElementById('find-meal');
const searchResults = document.getElementById('search-results');
const showResults = document.getElementById('result-meals');

console.log(showResults)
submitSearch.addEventListener('click', findMeal);

function findMeal(e) {
    e.preventDefault();
    const valueSearch = search.value;

    if (valueSearch.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueSearch}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // document.getElementById('hide-header').style.display = "none";
                searchResults.innerHTML = `<h1 class="meal-header">${valueSearch} aramanız için sonuçlar:</h1>`

                if (data.meals === null) {
                    searchResults.innerHTML = `<p class="meal-header">Maalesef aradığınız yemek tarifi bulunamadı.</p>`
                } else {
                    showResults.innerHTML = data.meals
                        .map(meal => `
                    <div class= "meal">
                        <img class="meal-image" src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                        <div class="meal-header" data-mealID="${meal.idMeal}"
                        <h1 class="meal-header">${meal.strMeal}</h1>
                    </div>
                    </div>
                    `
                        )
                        .join(''); //
                }
            });
        hideFooter();
        search.value = ""
    } else {
        searchResults.innerHTML = `<h1 class="meal-header">Lütfen bu alanı boş bırakmayın.</h1>`

    }
}

function hideFooter() {
    if (window.innerWidth < 900) {
        document.getElementById('footer-area').style.display = "none";
    }
}