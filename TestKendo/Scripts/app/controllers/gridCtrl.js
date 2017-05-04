MainApp.controller('gridCtrl', ['$scope', function ($scope) {
    $scope.name = "rusiz";

    $scope.mainGridOptions = {
        dataSource: {
            transport: {
                read: {
                    url: "api/Grid/GetUsers/"
                }
            },
            schema: {
                model: {
                    fields: {
                        name: {
                            first: { type: "string" },
                            last: { type: "string" }
                        },
                        company: { type: "string" },
                        email: { type: "string" },
                        phone: { type: "string" },
                        email: { type: "string" },
                        age: { type: "string" },
                        registered: { type: "date" }
                    }
                }
            },
            pageSize: 8,


        },
        ignoreCase: false,

        scrollable: true,
        filterable: {
            extra: false,
            operators: {
                string: {
                    startswith: "Starts with",
                    contains: "Contains",
                }
            }
        },
        sortable: true,
        pageable: true,
        columns: [
            {
                title: "IsActive",
                field: "isActive",
                template: '<input type="checkbox" #= isActive ? "checked=true" : "" # disabled="false" ></input>',
                width: 80,
                filterable: false,

            }, {
                title: "Balance",
                field: "balance",
                width: 150,
                filterable: false,
            }, {
                title: "Age",
                field: "age",
                width: 80,
                filterable: {
                    mode: "row"
                },
            }, {
                title: "First Name",
                field: "name.first",
                width: 150
            }, {
                title: "Last Name",
                field: "name.last",
                width: 150
            }, {
                title: "Company",
                field: "company",
                width: 150
            }, {
                title: "Email",
                field: "email",
                width: 150
            }, {
                title: "Phone",
                field: "phone",
                width: 150
            }, {
                title: "Address",
                field: "address",
                width: 150
            }, {
                title: "Registered",
                field: "registered",
                width: 150,
                type: "date",
                format: "{0:dd/MM/yyyy}",
                filterable: {
                    extra: true,
                    operators: {
                        date: {
                            gt: "Starts with",
                            lt: "Ends with",
                            eq: "Equal",
                            gte: "Starts with or equal to",
                            lte: "Ends with or equal to"

                        }
                    }
                }
            }
        ]
    };

    $scope.name = "Show";
    $scope.clicked = true;
    $scope.color = "greenBtn";
    $scope.gridButton = function () {

       
        $scope.color = $scope.clicked ? 'redBtn' : 'greenBtn';
        $scope.name = $scope.clicked ? "Hide" : "Show";
        $scope.clicked = !$scope.clicked;
       
    }

}]);
