angular.module("indexModule")
	.controller("RecipesController", ["$scope", "PaginationFactory", "WatchWidthFactory", function($scope, PaginationFactory, WatchWidthFactory){
		//===================
		// PAGINATION
		//===================
		$scope.pagination = [];
		$scope.pageNumber = 1;
		$scope.bookmarkPageNumber = 0;
		$scope.startingElement = 1;
		$scope.beersPerPage = 18;

		$scope.Paginate = PaginationFactory;
		$scope.WidthChecker = WatchWidthFactory;

		window.addEventListener("resize", function(){
			$scope.WidthChecker.changeNumberOfPages($scope)});

		$scope.changePage = function(page){
			$scope.Paginate.changePagination($scope, page);
		}
		//=====================
		//    LIGHTBOX
		//=====================
		$scope.lightBoxState = false;
		$scope.lightBox = {
			alias: "",
			about: "",
			taste: "",
		};

		$scope.lightBoxOn = function(beer){
			$scope.lightBox.alias = beer.alias;
			$scope.lightBox.about = beer.about;
			$scope.lightBox.taste = beer.taste;
			$scope.lightBoxState = true;
		}

		$scope.lightBoxOff = function(){
			$scope.lightBox.alias = " ";
			$scope.lightBox.about = " ";
			$scope.lightBox.taste = " ";
			$scope.lightBoxState = false;
		}

		//===================
		//   BEER TYPES
		//===================
		//List of Beers To see, select cmd + option + ]
		$scope.beerTypes = [
			{
			 alias: "Red Ale",
			 style: "Ale",
			 about: "Also known as a American Amber",
			 taste: ""
			},
			{
			 alias: "American Barleywine",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Black Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Blonde Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Brown Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Dark Wheat Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Double IPA",
			 style: "Ale",
			 about: "Also known as an Imperial IPA",
			 taste: ""
			},
			{
			 alias: "American Double Stout",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American IPA",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Pale Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Pale Wheat Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Porter",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Stout",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Strong Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Wild Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Black & Tan",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Chile Beer",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Cream Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Pumpkin Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Rye Beer",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Wheatwine",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
				{
			 alias: "Wheatwine",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Belgian Dark Ale",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Belgian IPA",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Belgian Pale Ale",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Belgian Strong Dark Ale",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Belgian Strong Pale Ale",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Bière de Champagne",
			 style: "Belgian Ale",
			 about: "Also known as Bière Brut",
			 taste: ""
			},
			{
			 alias: "Bière de Garde",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Dubbel",
			 style: "Belgian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Faro",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Flanders Oud Bruin",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Flanders Red Ale",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Gueuze",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Lambic-Fruit",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Lambic-Unblended",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Quadrupel",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Saison",
			 style: "Ale",
			 about: "",
			 taste: "Also known as a Farmhouse Ale"
			},
			{
			 alias: "Tripel",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Witbier",
			 style: "Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Baltic Porter",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Braggot",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Barleywine",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Bitter",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Brown Ale",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Dark Mild Ale",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English IPA",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Pale Ale",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Pale Mild Ale",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Porter",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Stout",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "English Strong Ale",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Extra Strong Bitter",
			 style: "English Ale",
			 about: "Also known as the Extra Special Bitter",
			 taste: ""
			},
			{
			 alias: "Foriegn Stout",
			 style: "English Ale",
			 about: "Also known as the Export Stout",
			 taste: ""
			},
			{
			 alias: "Milk Stout",
			 style: "English Ale",
			 about: "",
			 taste: "Also known as the Sweet Stout"
			},
			{
			 alias: "Oatmeal Stout",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Old Ale",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Russian Imperial Stout",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Winter Warmer",
			 style: "English Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Sahti",
			 style: "Finnish Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Altbier",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Berliner Weissbier",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Dunkelweizen",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Gose",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Hefeweizen",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Kölsch",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Kristalweizen",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Roggenbier",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Weizenbock",
			 style: "German Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Irish Dry Stout",
			 style: "Irish Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Irish Red Ale",
			 style: "Irish Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Kvass",
			 style: "Russian Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Scotch Ale",
			 style: "Scottish Ale",
			 about: "Also known as the Wee Heavy",
			 taste: ""
			},
			{
			 alias: "Scottish Ale",
			 style: "Scottish Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Scottish Gruit",
			 style: "Scottish Ale",
			 about: "",
			 taste: "Also known as the Ancient Herbed Ale"
			},
			{
			 alias: "Kölsch",
			 style: "Scottish Ale",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Adjunct Lager",
			 style: "American Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Red Lager",
			 style: "American Lager",
			 about: "",
			 taste: "Also known as the American Amber"
			},
			{
			 alias: "American Double Pilsner",
			 style: "American Lager",
			 about: "Also known as the American Imperial Pilsner",
			 taste: ""
			},
			{
			 alias: "American Malt Liquor",
			 style: "American Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "American Pale Lager",
			 style: "American Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "California Common",
			 style: "American Lager",
			 about: "Also known as a California Steam Beer",
			 taste: ""
			},
			{
			 alias: "Light Lager",
			 style: "American Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Czech Pilsener",
			 style: "Czech Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Euro Dark Lager",
			 style: "European Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Euro Pale Lager",
			 style: "European Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Euro Strong Lager",
			 style: "European Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Bock",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Doppelbock",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Dortmunder Lager",
			 style: "German Lager",
			 about: "Also known as the Export Lager",
			 taste: ""
			},
			{
			 alias: "Eisbock",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "German Pilsener",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Kellerbier",
			 style: "German Lager",
			 about: "Also known as the Zwickelbier",
			 taste: ""
			},
			{
			 alias: "Maibock",
			 style: "German Lager",
			 about: "Also known as the Helles Bock",
			 taste: ""
			},
			{
			 alias: "Märzen",
			 style: "German Lager",
			 about: "Also known as the Oktoberfest",
			 taste: ""
			},
			{
			 alias: "Munich Dunkel Lager",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Munich Helles Lager",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Rauchbier",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Schwarzbier",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Vienna Lager",
			 style: "German Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Happoshu",
			 style: "Japanese Lager",
			 about: "",
			 taste: ""
			},
			{
			 alias: "Japanese Rice Lager",
			 style: "Japanese Lager",
			 about: "",
			 taste: ""
			},



		];

		$scope.lastPage = Math.ceil($scope.beerTypes.length / $scope.beersPerPage);
		$scope.Paginate.setPagination($scope);
}]);