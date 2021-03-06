(function () {

    /*
     TODO -

     TOP:

     move Vars

     */
    var Example = this.Example = {};

    Example.start = function () {
        var schema = {
            sections: [
                {
                    name: "name",
                    attributes: [
                        {name: "prefix", type: "string"},
                        {name: "first", type: "string"},
                        {name: "last", type: "string"}
                    ]
                },
                {
                    name: "features",
                    attributes: [
                        {name: "gender", type: "string"},
                        {name: "height", type: "float", aggregateType: "average"},  //spelling?
                        {name: "weight", type: "float", aggregateType: "average"},
                        {name: "age", type: "int", aggregateType: "sum"},
                        {name: "has_nose", type: "bool"}
                    ]
                }
            ]
        };

        var data = [
            {
                name: {prefix: "Mr.", first: "Harry", last: "Potter"},
                features: {
                    gender: "m",
                    height: 70,
                    weight: 140,
                    age: 19,
                    has_nose: true
                }
            },
            {
                name: {prefix: "Ms.", first: "Hermione", last: "Granger"},
                features: {
                    gender: "f",
                    height: 66,
                    weight: 121,
                    age: 19,
                    has_nose: true
                }
            },
            {
                name: {first: "Dobby"},
                features: {
                    gender: "m",
                    height: 23,
                    weight: 20,
                    age: 284,
                    has_nose: true
                }
            },
            {
                name: {prefix: "Ms.", first: "Luna", last: "Lovegood"},
                features: {
                    gender: "f",
                    height: 68,
                    weight: 99,
                    age: 17,
                    has_nose: true
                }
            },
            {
                name: {first: "Hagrid"},
                features: {
                    gender: "m",
                    height: 108,
                    weight: 553,
                    age: 45,
                    has_nose: true
                }
            },
            {
                name: {prefix: "Dark Lord", first: "Tom", last: "Riddle"},
                features: {
                    gender: "m",
                    height: 74,
                    weight: 144,
                    age: 48,
                    has_nose: false
                }
            },
            {
                name: {prefix: "\"Moaning\"", first: "Myrtle", last: null},
                features: {
                    gender: "f",
                    height: 65,
                    weight: 0,
                    age: 106,
                    has_nose: null
                }
            }
        ];

        var pubSub = _.extend({}, Backbone.Events);
        var table = new Supertable.Table({rows: data, pubSub: pubSub});
        var view = new Supertable.TableView({
            model: table,
            schema: schema
        }).render();

        $('body').append(view.el);
    };
})();
