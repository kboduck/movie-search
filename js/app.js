'use strict';

angular.module('myApp', [])
    .controller('MovieController', function($scope, $http) {
        $scope.$watch('search', function() {
            fetch();
        });

        $scope.search = "Blade Runner 2049";

        //Функция для работы с API
        function fetch() {
            $http.get("https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=4601150a312bf54c77866ff2276491ce" + $scope.search + "&tomatoes=true&plot=full")
                .then(function(response) { $scope.details = response.data; });

            $http.get("https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=4601150a312bf54c77866ff2276491ce" + $scope.search)
                .then(function(response) { $scope.related = response.data; });
        }

        $scope.update = function(movie) {
            $scope.search = movie.Title;
        };

        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        }
    });