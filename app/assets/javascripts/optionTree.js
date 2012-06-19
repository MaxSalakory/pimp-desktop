var config = { 
	choose: 'Choose...',   // default label of the first (empty) option of each level. If empty will not add the empty option
    show_multiple: false,  // show multiple values in select (true - display all items, number (eg. 12) to show fixed number of items)
	preselect: {},         // values of options that will be automatically selected instead of 'Choose' option
	loading_image: '',     // ajax loading graphics URL to show while loading options via ajax (eg. /ajax-loader.gif)
	select_class: '',      // HTML class of created select elements 
	leaf_class: 'final',   // HTML class of leaf node <option> element
	empty_value: ''        // this value will be inserted int <input> element if client reverts from choosing an option by going up in the tree
	on_each_change: false, // URL to lazy load (JSON, 'id' parameter will be added) or function. See deafult_lazy_load
	set_value_on: 'leaf',  // leaf - sets input value only when choosing leaf node. 'each' - sets value on each level change.
                                      // makes sense only then indexed=true
	indexed: false,	        // tree is indexed by option label (false) or option value (true) - see below
};

$('input.nested').optionTree(option_tree, config);

var options = {
	empty_value: 'null',
	indexed: true,  // the data in tree is indexed by values (ids), not by labels
	on_each_change: 'get-subtree.php', // this file will be called with 'id' parameter, JSON data must be returned
	choose: function(level) {
	return 'Choose level ' + level;
	},
	loading_image: 'ajax-load.gif',
	show_multiple: 10, // if true - will set the size to show all options
	choose: '' // no choose item
};

// Option LABELS are object property names. Property values are either a scalar value or an object with a subtree
// The whole tree can be loaded at once
var indexed_false = { 
   "dagMaandag": {"Tijdblok": { "eersteBlok":{	"eersteGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}, 
																		
													"tweedeGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}},
																		
													"derdeGebouw":{		"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}},
																		
									"tweedeBlok":{	"eersteGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}, 
																		
													"tweedeGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}},
																		
													"derdeGebouw":{		"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}}, 
									"derdeBlok" :{	"eersteGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}, 
																		
													"tweedeGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}},
																		
													"derdeGebouw":{		"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}}}},
       "dagDinsdag": {"Tijdblok": { "eersteBlok":{"eersteGebouw", "derdeGebouw"}, 
									"tweedeBlok":{"eersteGebouw", "tweedeGebouw"}, 
									"derdeBlok" :{"eersteGebouw"}}},
};

// Option VALUES are property names. Property values become option names. 
// Additional levels have be loaded dynamically using 'on_each_change' option.
var indexed_true = {
   1: "Option 1",
   2: "Option 2" 
}
		
var option_tree = {
       "dagMaandag": {"Tijdblok": { "eersteBlok":{	"eersteGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}, 
																		
													"tweedeGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}},
																		
													"derdeGebouw":{		"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}},
																		
									"tweedeBlok":{	"eersteGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}, 
																		
													"tweedeGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}},
																		
													"derdeGebouw":{		"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}}, 
									"derdeBlok" :{	"eersteGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}, 
																		
													"tweedeGebouw":{	"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}},
																		
													"derdeGebouw":{		"vleugelA":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelB":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelC":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelD":{"lokaal01", "lokaal02", "lokaal03"},
																		"vleugelE":{"lokaal01", "lokaal02", "lokaal03"}}}}},
       "dagDinsdag": {"Tijdblok": { "eersteBlok":{"eersteGebouw", "derdeGebouw"}, 
									"tweedeBlok":{"eersteGebouw", "tweedeGebouw"}, 
									"derdeBlok" :{"eersteGebouw"}}},
    };

    $('input[name=demo1]').optionTree(option_tree);