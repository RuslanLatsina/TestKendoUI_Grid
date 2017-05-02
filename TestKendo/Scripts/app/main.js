$(document).ready(function () {

    var name ;
    var clicked = true;
    

    $("#gridButton").click(function () {
        if (clicked) {
            $("#grid").hide();
        } else {
            $('#grid').show();
        }  
        var color = clicked ? 'red' : 'green';
        name = clicked ? 'Hide' : 'Show';
        $(this).css('background-color', color);
        clicked = !clicked;
        $("#gridButton").html(name);
    });
 


    $("#grid").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "/Grid/GetUsers/",
                    dataType: "json"
                }
            },
            schema: {
                model: {
                    fields: {
                        Age: { type: "int" },
                        Name: {
                            First: { type: "string" },
                            Last: { type: "string" }
                        },
                        Company: { type: "string" },
                        Email: { type: "string" },
                        Phone: { type: "string" },
                        Email: { type: "string" },
                        Age: { type: "string" },
                        Registered: { type: "date" }
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
                field: "IsActive",
                template: '<input type="checkbox" #= IsActive ? "checked=true" : "" # disabled="false" ></input>',
                width: 80,
                filterable: false,

            }, {
                field: "Balance",
                width: 150,
                filterable: false,
            }, {
                field: "Age",
                width: 80,
                filterable: {
                    mode: "row"
                },
            }, {
                title: "First Name",
                field: "Name.First",
                width: 150
            }, {
                title: "Last Name",
                field: "Name.Last",
                width: 150
            }, {
                field: "Company",
                width: 150
            }, {
                field: "Email",
                width: 150
            }, {
                field: "Phone",
                width: 150
            }, {
                field: "Address",
                width: 150
            }, {
                field: "Registered",
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
    });
    
});


