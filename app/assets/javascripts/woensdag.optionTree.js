$(function() {

	var option_tree = {
		"ICA":	{"Vleugel A":			{"Begane grond":		{"A.001":{"09.00-12.00":1001, "12.00-15.00":1002, "15.00-18.00":1003, "Hele dag":1004}, 
																 "A.002":{"09.00-12.00":1004, "12.00-15.00":1005, "15.00-18.00":1006, "Hele dag":1004}, 
																 "A.003":{"09.00-12.00":1007, "12.00-15.00":1008, "15.00-18.00":1009, "Hele dag":1004},
																},
										 "1e Verdieping":		{"A.101":{"09.00-12.00":1010, "12.00-15.00":1011, "15.00-18.00":1012, "Hele dag":1004}, 
																 "A.102":{"09.00-12.00":1013, "12.00-15.00":1014, "15.00-18.00":1015, "Hele dag":1004}, 
																 "A.103":{"09.00-12.00":1016, "12.00-15.00":1017, "15.00-18.00":1018, "Hele dag":1004},
																},
										 "2e Verdieping":		{"A.201":{"09.00-12.00":1019, "12.00-15.00":1020, "15.00-18.00":1021, "Hele dag":1004}, 
																 "A.202":{"09.00-12.00":1022, "12.00-15.00":1023, "15.00-18.00":1024, "Hele dag":1004}, 
																 "A.203":{"09.00-12.00":1025, "12.00-15.00":1026, "15.00-18.00":1027, "Hele dag":1004},
																},
										 "3e Verdieping":		{"A.301":{"09.00-12.00":1028, "12.00-15.00":1029, "15.00-18.00":1030, "Hele dag":1004}, 
																 "A.302":{"09.00-12.00":1031, "12.00-15.00":1032, "15.00-18.00":1033, "Hele dag":1004}, 
																 "A.303":{"09.00-12.00":1034, "12.00-15.00":1035, "15.00-18.00":1036, "Hele dag":1004},
																},
										},
				 "Vleugel B":			{"Begane grond":		{"B.001":{"09.00-12.00":1037, "12.00-15.00":1002, "15.00-18.00":1003, "Hele dag":1004}, 
																 "B.002":{"09.00-12.00":1040, "12.00-15.00":1005, "15.00-18.00":1006, "Hele dag":1004}, 
																 "B.003":{"09.00-12.00":1043, "12.00-15.00":1008, "15.00-18.00":1009, "Hele dag":1004},
																},
										 "1e Verdieping":		{"B.101":{"09.00-12.00":1046, "12.00-15.00":1011, "15.00-18.00":1012, "Hele dag":1004}, 
																 "B.102":{"09.00-12.00":1049, "12.00-15.00":1014, "15.00-18.00":1015, "Hele dag":1004}, 
																 "B.103":{"09.00-12.00":1052, "12.00-15.00":1017, "15.00-18.00":1018, "Hele dag":1004},
																},
										 "2e Verdieping":		{"B.201":{"09.00-12.00":1055, "12.00-15.00":1020, "15.00-18.00":1021, "Hele dag":1004}, 
																 "B.202":{"09.00-12.00":1058, "12.00-15.00":1023, "15.00-18.00":1024, "Hele dag":1004}, 
																 "B.203":{"09.00-12.00":1061, "12.00-15.00":1026, "15.00-18.00":1027, "Hele dag":1004},
																},
										 "3e Verdieping":		{"B.301":{"09.00-12.00":1064, "12.00-15.00":1029, "15.00-18.00":1030, "Hele dag":1004}, 
																 "B.302":{"09.00-12.00":1067, "12.00-15.00":1032, "15.00-18.00":1033, "Hele dag":1004}, 
																 "B.303":{"09.00-12.00":1070, "12.00-15.00":1035, "15.00-18.00":1036, "Hele dag":1004},
																},
										},
				 "Vleugel C":			{"Begane grond":		{"C.001":{"09.00-12.00":1037, "12.00-15.00":1002, "15.00-18.00":1003, "Hele dag":1004}, 
																 "C.002":{"09.00-12.00":1040, "12.00-15.00":1005, "15.00-18.00":1006, "Hele dag":1004}, 
																 "C.003":{"09.00-12.00":1043, "12.00-15.00":1008, "15.00-18.00":1009, "Hele dag":1004},
																},
										 "1e Verdieping":		{"C.101":{"09.00-12.00":1046, "12.00-15.00":1011, "15.00-18.00":1012, "Hele dag":1004}, 
																 "C.102":{"09.00-12.00":1049, "12.00-15.00":1014, "15.00-18.00":1015, "Hele dag":1004}, 
																 "C.103":{"09.00-12.00":1052, "12.00-15.00":1017, "15.00-18.00":1018, "Hele dag":1004},
																},
										 "2e Verdieping":		{"C.201":{"09.00-12.00":1055, "12.00-15.00":1020, "15.00-18.00":1021, "Hele dag":1004}, 
																 "C.202":{"09.00-12.00":1058, "12.00-15.00":1023, "15.00-18.00":1024, "Hele dag":1004}, 
																 "C.203":{"09.00-12.00":1061, "12.00-15.00":1026, "15.00-18.00":1027, "Hele dag":1004},
																},
										 "3e Verdieping":		{"C.301":{"09.00-12.00":1064, "12.00-15.00":1029, "15.00-18.00":1030, "Hele dag":1004}, 
																 "C.302":{"09.00-12.00":1067, "12.00-15.00":1032, "15.00-18.00":1033, "Hele dag":1004}, 
																 "C.303":{"09.00-12.00":1070, "12.00-15.00":1035, "15.00-18.00":1036, "Hele dag":1004},
																},
										},
				 "Vleugel D":			{"Begane grond":		{"D.001":{"09.00-12.00":1037, "12.00-15.00":1002, "15.00-18.00":1003, "Hele dag":1004}, 
																 "D.002":{"09.00-12.00":1040, "12.00-15.00":1005, "15.00-18.00":1006, "Hele dag":1004}, 
																 "D.003":{"09.00-12.00":1043, "12.00-15.00":1008, "15.00-18.00":1009, "Hele dag":1004},
																},
										 "1e Verdieping":		{"D.101":{"09.00-12.00":1046, "12.00-15.00":1011, "15.00-18.00":1012, "Hele dag":1004}, 
																 "D.102":{"09.00-12.00":1049, "12.00-15.00":1014, "15.00-18.00":1015, "Hele dag":1004}, 
																 "D.103":{"09.00-12.00":1052, "12.00-15.00":1017, "15.00-18.00":1018, "Hele dag":1004},
																},
										 "2e Verdieping":		{"D.201":{"09.00-12.00":1055, "12.00-15.00":1020, "15.00-18.00":1021, "Hele dag":1004}, 
																 "D.202":{"09.00-12.00":1058, "12.00-15.00":1023, "15.00-18.00":1024, "Hele dag":1004}, 
																 "D.203":{"09.00-12.00":1061, "12.00-15.00":1026, "15.00-18.00":1027, "Hele dag":1004},
																},
										 "3e Verdieping":		{"D.301":{"09.00-12.00":1064, "12.00-15.00":1029, "15.00-18.00":1030, "Hele dag":1004}, 
																 "D.302":{"09.00-12.00":1067, "12.00-15.00":1032, "15.00-18.00":1033, "Hele dag":1004}, 
																 "D.303":{"09.00-12.00":1070, "12.00-15.00":1035, "15.00-18.00":1036, "Hele dag":1004},
																},
										},
				 "Vleugel E":			{"Begane grond":		{"E.001":{"09.00-12.00":1037, "12.00-15.00":1038, "15.00-18.00":1039, "Hele dag":1004}, 
																 "E.002":{"09.00-12.00":1040, "12.00-15.00":1041, "15.00-18.00":1042, "Hele dag":1004}, 
																 "E.003":{"09.00-12.00":1043, "12.00-15.00":1044, "15.00-18.00":1045, "Hele dag":1004},
																},
										 "1e Verdieping":		{"E.101":{"09.00-12.00":1046, "12.00-15.00":1011, "15.00-18.00":1048, "Hele dag":1004}, 
																 "E.102":{"09.00-12.00":1049, "12.00-15.00":1014, "15.00-18.00":1051, "Hele dag":1004}, 
																 "E.103":{"09.00-12.00":1052, "12.00-15.00":1017, "15.00-18.00":1054, "Hele dag":1004},
																},
										 "2e Verdieping":		{"E.201":{"09.00-12.00":1055, "12.00-15.00":1020, "15.00-18.00":1057, "Hele dag":1004}, 
																 "E.202":{"09.00-12.00":1058, "12.00-15.00":1023, "15.00-18.00":1060, "Hele dag":1004}, 
																 "E.203":{"09.00-12.00":1061, "12.00-15.00":1026, "15.00-18.00":1063, "Hele dag":1004},
																},
										 "3e Verdieping":		{"E.301":{"09.00-12.00":1064, "12.00-15.00":1029, "15.00-18.00":1066, "Hele dag":1004}, 
																 "E.302":{"09.00-12.00":1067, "12.00-15.00":1032, "15.00-18.00":1069, "Hele dag":1004}, 
																 "E.303":{"09.00-12.00":1070, "12.00-15.00":1035, "15.00-18.00":1072, "Hele dag":1004},
																},
										},	
				},
		"FEM":	{"Oostvleugel":			{"Begane grond":		{"0.001":{"09.00-12.00":2001, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "0.002":{"09.00-12.00":2004, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "0.003":{"09.00-12.00":2007, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										 "1e Verdieping":		{"1.001":{"09.00-12.00":2010, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "1.002":{"09.00-12.00":2013, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "1.003":{"09.00-12.00":2016, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										 "2e Verdieping":		{"2.001":{"09.00-12.00":2010, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "2.002":{"09.00-12.00":2013, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "2.003":{"09.00-12.00":2016, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										 "3e Verdieping":		{"3.001":{"09.00-12.00":2010, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "3.002":{"09.00-12.00":2013, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "3.003":{"09.00-12.00":2016, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										},
				"Westvleugel":			{"Begane grond":		{"0.001":{"09.00-12.00":2001, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "0.002":{"09.00-12.00":2004, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "0.003":{"09.00-12.00":2007, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										 "1e Verdieping":		{"1.001":{"09.00-12.00":2010, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "1.002":{"09.00-12.00":2013, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "1.003":{"09.00-12.00":2016, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										 "2e Verdieping":		{"2.001":{"09.00-12.00":2010, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "2.002":{"09.00-12.00":2013, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "2.003":{"09.00-12.00":2016, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										 "3e Verdieping":		{"3.001":{"09.00-12.00":2010, "12.00-15.00":2002, "15.00-18.00":2003, "Hele dag":1004}, 
																 "3.002":{"09.00-12.00":2013, "12.00-15.00":2005, "15.00-18.00":2006, "Hele dag":1004}, 
																 "3.003":{"09.00-12.00":2016, "12.00-15.00":2008, "15.00-18.00":2009, "Hele dag":1004},
																},
										},
				},
    };

    $('input[name=woensdag]').optionTree(option_tree);

});