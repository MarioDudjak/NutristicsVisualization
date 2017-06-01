<?php
require 'vendor/autoload.php';
$outfile= 'main_meals.json';

Unirest\Request::verifyPeer(false); 
// These code snippets use an open-source library. http://unirest.io/php
$response = Unirest\Request::get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&fillIngredients=false&instructionsRequired=true&limitLicense=false&maxCalories=3500&maxCarbs=1000&maxFat=1000&maxProtein=1000&minCalories=10&minCarbs=1&minFat=1&minProtein=1&number=100&offset=0&query=&ranking=1&type=drink",
  array(
    "X-Mashape-Key" => "7uUANJytiXmshrLiPi1aypEeoaNUp1w0ZRcjsndhlrbMIQSx7N",
    "Accept" => "application/json"
  )
);
if($response) { 

$fp = fopen('drinks.json', 'w');
if($fp){
fwrite($fp, json_encode($response));
fclose($fp);
}
else{ echo 'neuspjesno';}
}
var_dump ($response);

?>


