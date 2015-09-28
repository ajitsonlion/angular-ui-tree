(function () {
    'use strict';

    angular.module('demoApp')
        .controller('CloningCtrl', ['$scope', function ($scope) {
            $scope.remove = function (scope) {
                scope.remove();
            };

            $scope.toggle = function (scope) {
                scope.toggle();
            };

            $scope.newSubItem = function (scope) {
                var nodeData = scope.$modelValue;
                nodeData.nodes.push({
                    id: nodeData.id * 10 + nodeData.nodes.length,
                    title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                    nodes: []
                });
            };

            $scope.logIcon = function (node, $event) {

                var icon = $event.target.attributes['class'].value;

                node.icon = icon;
                console.log(icon);


            };

            $scope.logIconColor = function (node, color) {

                // var icon = $event.target.attributes['class'].value;

                node.iconColor = color;
                console.log(color);


            };

            $scope.defaultColor = "#fff";
            $scope.tree1 = [{
                'id': 1,
                'title': 'Organ',
                'icon': 'fa fa-lg fa-pencil',
                'iconColor': '#000',

                'nodes': []
            }, {
                'id': 2,
                'title': 'Hurdles',
                'icon': 'fa fa-lg fa-pencil',
                'iconColor': '#000',

                'nodes': []
            }, {
                'id': 3,
                'title': 'Measure',
                'icon': 'fa fa-lg fa-pencil',
                'iconColor': '#000',

                'nodes': []
            }, {
                'id': 4,
                'title': 'Outcome',
                'icon': 'fa fa-lg fa-pencil',
                'iconColor': '#000',
                'nodes': []
            }, {
                'id': 4,
                'title': 'Drivers',
                'icon': 'fa fa-lg fa-pencil',
                'iconColor': '#000',
                'nodes': []
            }
                , {
                    'id': 5,
                    'title': 'Measurement Extraction',
                    'icon': 'fa fa-lg fa-pencil',
                    'iconColor': '#000',
                    'nodes': []
                }
                , {
                    'id': 6,
                    'title': 'Time Extraction',
                    'icon': 'fa fa-lg fa-pencil',
                    'iconColor': '#000',
                    'nodes': []
                }, {
                    'id': 7,
                    'title': 'Place',
                    'icon': 'fa fa-lg fa-pencil',
                    'iconColor': '#000',
                    'nodes': []
                }, {
                    'id': 8,
                    'title': 'Person',
                    'icon': 'fa fa-lg fa-pencil',
                    'iconColor': '#000',
                    'nodes': []
                }
            ];
            $scope.tree2 = [];
        }]);


}());
