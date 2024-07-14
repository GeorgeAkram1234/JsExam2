/// <reference types="../@types/jquery"/>


$('.fa-bars ').on('click', function () {
    $('.sidebar').animate({ width: 'toggle', padding: 'toggle' }, 600);
    $('.fa-bars').toggleClass('fa-times')
});

$(function () {
    $('.loader').fadeOut(1000, function () {
        $('.loading').fadeOut(1000)
        $('body').css('overflow', 'auto')
    })
})


// ---------------------------------------------------------------------------------------
// CATEGORIES
let allCategories = []
async function getCategories() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data = await response.json()
    allCategories = data.categories
    // console.log(allCategories)
    displayCategories()
}

getCategories()

function displayCategories() {
    let cartoona = ``;
    for (let i = 0; i < allCategories.length; i++) {
        cartoona += `            
                <div class="col-3">
        <div class="products ">
            <img src="${allCategories[i].strCategoryThumb}" class="w-100" alt="${allCategories[i].strCategory}">
        <div class="card-anim d-flex flex-column align-items-center justify-content-center text-center p-3">
        <h2 >${allCategories[i].strCategory}</h2>
        <p>${allCategories[i].strCategoryDescription.split(' ').slice(0, 20).join(' ')}</p>
        </div>
        </div>
    </div> `
    }
    $('.row').html(cartoona)

    let meals = $('.row .col-3')
    for (let i = 0; i < meals.length; i++) {
        meals[i].addEventListener('click', function () {
            let categoryName = allCategories[i].strCategory
            getName(categoryName)
        })
    }
}

let allNames = []
async function getName(catName) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
    let data = await response.json()
    allNames = data.meals
    // console.log(allNames);
    displayName(allNames)
}

function displayName(allCategories) {
    let cartoona = ``;
    for (let i = 0; i < allCategories.length; i++) {
        cartoona += `            
                <div class="col-3">
        <div class="products ">
            <img src="${allCategories[i].strMealThumb}" class="w-100" alt="${allCategories[i].strMeal}">
        <div class="card-anim d-flex align-items-center justify-content-start p-3">
        <h2 >${allCategories[i].strMeal}</h2>
        </div>
        </div>
    </div>`
        $('.row').html(cartoona)
        let meals = $('.row .col-3')
        for (let i = 0; i < meals.length; i++) {
            meals[i].addEventListener('click', function () {
                let ID = allNames[i].idMeal
                getRandomDetails(ID)
            })
        }
    }


    async function getRandomDetails(id) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let data = await response.json()
        console.log(data.meals);
        dispalyRandomDetails(data)
    }

    function dispalyRandomDetails(allNames) {
        let cartoona = `<div class="details">
            <div class="container">
                <div class="row gy-4 m-3 p-3" id="modal">
                    <div class="col-md-4 col-sm-12 ">
                        <div class="detailsImg text-white">
                            <img src=${allNames.meals[0].strMealThumb} class="w-100" alt="">
                            <h1>${allNames.meals[0].strMeal}</h1>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-12 ">
                        <div class="detailsInfo text-white">
                            <h1>instructions</h1>
                            <p>${allNames.meals[0].strInstructions}</p>
                            <h2>Area :${allNames.meals[0].strArea}</h2>
                            <h2>Category :${allNames.meals[0].strCategory}</h2>
                            <h2>Recipes :</h2>
                                <ul class="list-unstyled d-flex flex-wrap">
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure1} ${allNames.meals[0].strIngredient1}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure2} ${allNames.meals[0].strIngredient2}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure3} ${allNames.meals[0].strIngredient3}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure4} ${allNames.meals[0].strIngredient4}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure5} ${allNames.meals[0].strIngredient5}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure6} ${allNames.meals[0].strIngredient6}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure7} ${allNames.meals[0].strIngredient7}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure8} ${allNames.meals[0].strIngredient8}</li>
                                    <li class="alert alert-success p-1 me-2">${allNames.meals[0].strMeasure9} ${allNames.meals[0].strIngredient9}</li>
                                </ul>
                            <h2>Tags :</h2>
                            <ul class="list-unstyled d-flex">
                                <li class="alert alert-danger me-2 p-1">${allNames.meals[0].strTags}</li>
                            </ul>
                            <div class="d-flex">
                                <a href=${allNames.meals[0].strSource} target="_blank" class="btn btn-success me-2 py-2 px-4">Source</a>
                                <a href=${allNames.meals[0].strYoutube} target="_blank" class="btn btn-danger py-2 px-4">Youtube</a>
                            </div>
                    </div>
                </div> 
                </div>
            </div>
        </div>`
        $('.row').html(cartoona)

    }
}