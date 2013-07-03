/*global define */

define(function (require) {

	"use strict";

	return require('Etape').extend({

		start: {
			coordinates: [8.76121044158936, 55.3178274246687],
			popupContent: "Start Etape 2",
			iconUrl: 'img/start-2.png'
		},

		stop: {
			coordinates: [9.7577, 54.90723],
			popupContent: "Mål Etape 2",
			iconUrl: 'img/finish-2.png'
		},

		track: {
			coordinates: '8.76121044158936,55.3178274246687 8.76118,55.31782 8.76137,55.31739 8.76137,55.31691 8.76032,55.31426 8.76003,55.3137 8.7608,55.31325 8.76117,55.313 8.76151,55.31271 8.76151,55.31271 8.7621,55.31218 8.76323,55.31104 8.7658,55.30855 8.76662,55.30752 8.76707,55.30673 8.76739,55.30593 8.76825,55.30217 8.76853,55.30133 8.77113,55.29818 8.77349,55.29464 8.77382,55.29421 8.77434,55.29374 8.77472,55.29345 8.78053,55.28955 8.78138,55.28891 8.78318,55.28738 8.78407,55.28658 8.78561,55.285 8.7893,55.28099 8.78953,55.28077 8.79094,55.27964 8.79138,55.27934 8.79217,55.27898 8.79982,55.27614 8.80045,55.27588 8.80108,55.27549 8.8059,55.2718 8.8064,55.27138 8.80672,55.27095 8.80693,55.27057 8.80763,55.26716 8.80784,55.26669 8.80826,55.26631 8.80851,55.26617 8.80909,55.26593 8.81782,55.26346 8.81855,55.26313 8.8197,55.26252 8.82001,55.26231 8.82025,55.2621 8.82057,55.26163 8.82214,55.25821 8.82266,55.25723 8.82281,55.25659 8.8229,55.25567 8.82319,55.25504 8.82762,55.24894 8.82821,55.24807 8.82834,55.2478 8.82853,55.24717 8.82898,55.24421 8.82914,55.24365 8.82949,55.24311 8.83309,55.23909 8.83361,55.23848 8.83401,55.23791 8.83431,55.23716 8.83527,55.23236 8.83527,55.23236 8.83549,55.23114 8.8355,55.2305 8.83525,55.22711 8.83506,55.22624 8.83467,55.2254 8.82861,55.21473 8.82873,55.21476 8.82872,55.21476 8.82861,55.21473 8.82767,55.21228 8.82721,55.21162 8.8262,55.2107 8.8262,55.21069 8.82206,55.20724 8.81531,55.20203 8.81472,55.20154 8.81438,55.2012 8.81398,55.2007 8.81369,55.20016 8.81121,55.19473 8.81095,55.19392 8.81087,55.19234 8.81087,55.19234 8.81068,55.18649 8.8106,55.18535 8.80961,55.17794 8.80942,55.17748 8.80939,55.17697 8.80942,55.17692 8.80919,55.17651 8.80875,55.17617 8.80825,55.17591 8.80824,55.17591 8.79729,55.17179 8.79618,55.17141 8.7948,55.17102 8.7948,55.17102 8.78688,55.16899 8.78544,55.16855 8.7804,55.16664 8.77977,55.16635 8.77905,55.1659 8.77862,55.16603 8.77842,55.16604 8.77807,55.16599 8.76763,55.1632 8.76762,55.1632 8.76644,55.16287 8.7662,55.16283 8.7639,55.16217 8.76468,55.1615 8.76469,55.1615 8.76632,55.16016 8.76891,55.15823 8.76734,55.15824 8.76734,55.15824 8.76418,55.15827 8.76371,55.1583 8.76236,55.15849 8.76171,55.15683 8.7615,55.15612 8.7615,55.15611 8.76131,55.1555 8.76116,55.15521 8.76055,55.15453 8.76028,55.15432 8.75731,55.15256 8.7573,55.15256 8.75616,55.15186 8.7557,55.15153 8.75541,55.15117 8.75509,55.15053 8.75485,55.15034 8.75449,55.15026 8.75273,55.15029 8.75273,55.15029 8.74984,55.15035 8.74308,55.15078 8.74217,55.15091 8.74151,55.15107 8.73722,55.15271 8.73629,55.15301 8.73575,55.15314 8.7308,55.15407 8.72955,55.1543 8.72895,55.15437 8.72813,55.1544 8.72652,55.15437 8.70758,55.15381 8.70547,55.15367 8.70341,55.15326 8.70338,55.15276 8.70338,55.15276 8.70334,55.15248 8.70321,55.15216 8.69653,55.14251 8.69596,55.14152 8.69537,55.14024 8.69054,55.12692 8.6902,55.1261 8.6897,55.12531 8.68796,55.12314 8.68795,55.12314 8.68502,55.11955 8.68426,55.11855 8.68386,55.11783 8.68368,55.11742 8.68072,55.10805 8.68049,55.10748 8.67986,55.1065 8.67934,55.1059 8.67906,55.10564 8.67849,55.10517 8.67781,55.10469 8.66732,55.09836 8.66615,55.09762 8.66573,55.09729 8.66508,55.09665 8.66473,55.09619 8.66401,55.09503 8.66389,55.09474 8.66344,55.09398 8.66276,55.09304 8.65983,55.08956 8.6592,55.08871 8.65893,55.08816 8.65877,55.08768 8.6587,55.08733 8.65865,55.08664 8.65965,55.08003 8.65964,55.07956 8.65949,55.07888 8.65933,55.07846 8.65844,55.07671 8.65823,55.07617 8.6582,55.07585 8.65825,55.07544 8.65899,55.07267 8.65907,55.07199 8.65905,55.07136 8.6589,55.07057 8.65868,55.07002 8.65711,55.06731 8.65711,55.06731 8.65597,55.06544 8.65564,55.06499 8.65288,55.06191 8.65237,55.0612 8.65194,55.06026 8.64992,55.05399 8.64932,55.05279 8.64457,55.04596 8.64413,55.04548 8.64359,55.04497 8.6415,55.04323 8.64067,55.0425 8.63995,55.0417 8.63956,55.04116 8.63916,55.04045 8.63886,55.03973 8.63849,55.03827 8.63835,55.03746 8.63834,55.03673 8.6385,55.03567 8.63888,55.03461 8.6393,55.03387 8.6491,55.02144 8.64943,55.02107 8.64987,55.02071 8.65045,55.02042 8.65079,55.02029 8.65105,55.02022 8.65183,55.02008 8.6525,55.02005 8.65319,55.02007 8.65319,55.02007 8.65495,55.02017 8.65593,55.02013 8.65646,55.02006 8.65832,55.01963 8.65924,55.01945 8.66027,55.01936 8.66751,55.01946 8.6686,55.01943 8.66979,55.01936 8.68913,55.01748 8.70534,55.01586 8.70553,55.01545 8.7057,55.01473 8.70604,55.01247 8.70602,55.01178 8.70557,55.01037 8.70529,55.0097 8.70499,55.00926 8.70412,55.0082 8.704,55.00794 8.70379,55.00706 8.70379,55.00706 8.70304,55.0035 8.70275,55.00277 8.70212,55.00175 8.69878,54.99682 8.69853,54.99652 8.69735,54.99545 8.69712,54.99511 8.69588,54.99137 8.69573,54.99061 8.69564,54.9896 8.69504,54.98696 8.69501,54.98628 8.69511,54.98587 8.69872,54.97571 8.69872,54.97571 8.69951,54.97344 8.69929,54.97338 8.69914,54.97331 8.69904,54.97322 8.6979,54.97043 8.69685,54.96868 8.69646,54.96792 8.69617,54.96747 8.69616,54.96747 8.69471,54.96506 8.6943,54.96421 8.69561,54.9639 8.69797,54.96346 8.69963,54.96318 8.70052,54.96294 8.70105,54.96283 8.70105,54.96283 8.70141,54.96277 8.70201,54.96273 8.7034,54.96272 8.70344,54.96267 8.70356,54.96264 8.70363,54.96267 8.70366,54.96273 8.70659,54.96282 8.71479,54.96298 8.7159,54.96297 8.71889,54.96285 8.72776,54.96297 8.73588,54.96282 8.74855,54.96254 8.74855,54.96254 8.75213,54.96248 8.75397,54.96239 8.75556,54.96218 8.75648,54.962 8.75751,54.96176 8.75817,54.96157 8.7596,54.96105 8.76086,54.96046 8.7695,54.95558 8.77096,54.95486 8.77215,54.95441 8.77325,54.95409 8.78068,54.95238 8.78067,54.95202 8.78087,54.95167 8.78258,54.9503 8.78258,54.9503 8.78379,54.94935 8.78464,54.94877 8.79155,54.9453 8.80051,54.94191 8.80051,54.94191 8.80255,54.94113 8.80298,54.94087 8.80333,54.94087 8.80712,54.94174 8.80711,54.94174 8.80814,54.94199 8.8093,54.94207 8.81097,54.94218 8.81151,54.94228 8.81277,54.94271 8.81895,54.94465 8.82168,54.94585 8.82218,54.94605 8.82325,54.94635 8.82724,54.94697 8.83332,54.94782 8.83377,54.94791 8.83445,54.9482 8.83665,54.94737 8.83665,54.94737 8.84264,54.94511 8.8431,54.94498 8.84362,54.94479 8.84357,54.94471 8.84359,54.94462 8.84368,54.94456 8.84383,54.94452 8.8433,54.94242 8.8433,54.94201 8.84339,54.94139 8.84366,54.94065 8.84389,54.94024 8.84536,54.93817 8.84536,54.93817 8.84577,54.93745 8.84603,54.93685 8.84878,54.93718 8.85044,54.93734 8.85055,54.93708 8.85081,54.93675 8.8512,54.93648 8.85179,54.93615 8.85221,54.93594 8.85268,54.93576 8.85325,54.93566 8.85363,54.93562 8.85363,54.93562 8.85937,54.93516 8.86121,54.93513 8.86287,54.93514 8.86287,54.93514 8.86292,54.93514 8.86295,54.93492 8.86313,54.93464 8.86334,54.93446 8.86371,54.93425 8.86524,54.93353 8.86581,54.93332 8.86689,54.93304 8.86689,54.93304 8.86761,54.93293 8.86886,54.9328 8.86968,54.9328 8.87032,54.93287 8.87089,54.93299 8.87144,54.9332 8.87323,54.93413 8.87455,54.93383 8.87606,54.93365 8.87606,54.93365 8.8775,54.93351 8.8777,54.93344 8.87947,54.93325 8.88115,54.93298 8.88134,54.93298 8.88178,54.93289 8.88317,54.93252 8.88708,54.93125 8.88878,54.93074 8.88959,54.93056 8.89109,54.93033 8.89111,54.93026 8.89121,54.93019 8.89147,54.93015 8.89161,54.9302 8.89167,54.93026 8.89313,54.93024 8.8941,54.93028 8.89507,54.93037 8.89604,54.93053 8.89706,54.93075 8.9004,54.93161 8.90518,54.9331 8.90587,54.93329 8.90724,54.93356 8.90805,54.93366 8.90916,54.93372 8.91034,54.93372 8.91621,54.93333 8.91621,54.93333 8.91906,54.93316 8.92465,54.93342 8.92678,54.93344 8.93584,54.93297 8.93862,54.93285 8.93861,54.93285 8.93965,54.9329 8.94113,54.93306 8.94996,54.93444 8.9514,54.93459 8.95872,54.93485 8.963,54.93503 8.96454,54.93506 8.96611,54.93502 8.9672,54.93496 8.97636,54.93417 8.97685,54.93409 8.97769,54.93389 8.98038,54.93306 8.98196,54.93267 8.9833,54.9324 8.98521,54.93212 8.98638,54.93199 8.98832,54.93184 8.9909,54.93172 8.99294,54.93174 8.99444,54.93181 9.00249,54.9324 9.00613,54.93255 9.01195,54.93281 9.01362,54.933 9.01983,54.93381 9.0217,54.934 9.02839,54.93432 9.03203,54.93428 9.03332,54.93424 9.05008,54.93279 9.05232,54.93255 9.06551,54.93035 9.06616,54.93017 9.06653,54.92998 9.06692,54.92972 9.067,54.92976 9.06699,54.92976 9.06761,54.93006 9.0698,54.93151 9.07727,54.93631 9.07861,54.93707 9.08092,54.93821 9.08168,54.93857 9.08168,54.93857 9.08329,54.93936 9.0842,54.93989 9.08494,54.94053 9.08573,54.94147 9.0859,54.94163 9.08739,54.94274 9.09167,54.94584 9.09429,54.94771 9.09498,54.94811 9.09565,54.94837 9.09835,54.94913 9.09904,54.94937 9.09969,54.94865 9.10093,54.94741 9.10257,54.94588 9.10258,54.94588 9.10386,54.94464 9.10721,54.94158 9.10892,54.94038 9.1136,54.93575 9.11421,54.93497 9.11461,54.93423 9.11511,54.93289 9.11523,54.93234 9.11525,54.93165 9.11912,54.93154 9.11912,54.93154 9.13266,54.93206 9.1495,54.93277 9.15053,54.93276 9.15159,54.93268 9.15273,54.93254 9.19179,54.92538 9.19356,54.92507 9.19462,54.92495 9.19589,54.92489 9.19672,54.92488 9.20994,54.92572 9.21138,54.92582 9.2132,54.92604 9.21528,54.92651 9.22168,54.92815 9.2247,54.92897 9.22724,54.9296 9.22746,54.92956 9.22783,54.92924 9.22857,54.9284 9.22858,54.9284 9.22986,54.92709 9.23134,54.92572 9.22689,54.92309 9.22689,54.92308 9.22593,54.9225 9.22552,54.92229 9.2229,54.92077 9.22195,54.92018 9.22108,54.91973 9.22457,54.91749 9.22576,54.9168 9.22576,54.9168 9.22819,54.91542 9.23116,54.9138 9.23444,54.91232 9.23475,54.91215 9.23589,54.9114 9.2382,54.90979 9.23893,54.90923 9.24053,54.90788 9.24231,54.90622 9.24246,54.90597 9.24288,54.90499 9.24299,54.90461 9.24321,54.90314 9.24333,54.90299 9.24507,54.90191 9.24622,54.90112 9.24632,54.90101 9.24632,54.90101 9.24648,54.90077 9.24652,54.90049 9.24273,54.9 9.23428,54.89926 9.23379,54.89924 9.23378,54.89924 9.23355,54.89923 9.2332,54.89915 9.23295,54.89895 9.23286,54.89883 9.23284,54.89865 9.2336,54.89377 9.23378,54.89255 9.23383,54.89188 9.23382,54.89188 9.23376,54.89163 9.23355,54.89135 9.23097,54.88926 9.23071,54.88892 9.23059,54.88857 9.23101,54.88669 9.23116,54.88645 9.23275,54.88455 9.23297,54.88425 9.23307,54.88395 9.23301,54.88357 9.2321,54.88185 9.23184,54.88122 9.23221,54.87936 9.2331,54.87785 9.23487,54.87451 9.2359,54.87268 9.24159,54.86037 9.24213,54.85925 9.24304,54.85759 9.24309,54.85709 9.24293,54.85673 9.24292,54.85673 9.2429,54.85669 9.24763,54.85752 9.26525,54.86033 9.26549,54.86033 9.26568,54.86029 9.26861,54.85927 9.26922,54.85904 9.27022,54.8585 9.27088,54.85826 9.27088,54.85826 9.27155,54.85809 9.27194,54.85802 9.27389,54.85776 9.2746,54.85776 9.27526,54.85781 9.27639,54.85803 9.27732,54.85838 9.2778,54.85864 9.27809,54.85885 9.27846,54.85919 9.27872,54.85949 9.27952,54.86056 9.27987,54.86086 9.28031,54.86114 9.28088,54.86141 9.28178,54.8617 9.2824,54.86182 9.28331,54.8619 9.2838,54.8619 9.28454,54.86183 9.28562,54.86162 9.28932,54.86041 9.29069,54.86011 9.29214,54.85993 9.29662,54.85974 9.29733,54.85962 9.29777,54.85951 9.29799,54.85942 9.29833,54.85953 9.29857,54.85956 9.29937,54.85958 9.30049,54.8597 9.30148,54.8597 9.30232,54.85962 9.30557,54.85912 9.30557,54.85912 9.31455,54.85767 9.31837,54.85689 9.31889,54.85683 9.31928,54.85681 9.31961,54.85682 9.32073,54.85696 9.32176,54.85714 9.32523,54.85851 9.32564,54.85817 9.32564,54.85817 9.32772,54.8563 9.32788,54.856 9.32777,54.85266 9.3273,54.85104 9.32857,54.85032 9.32965,54.84954 9.32965,54.84954 9.3309,54.84862 9.33182,54.84809 9.33251,54.84782 9.33464,54.84729 9.33491,54.84719 9.33472,54.84289 9.33472,54.84289 9.33466,54.84189 9.3345,54.84135 9.33416,54.84081 9.33303,54.83951 9.33296,54.83938 9.33297,54.83925 9.33327,54.83901 9.33383,54.83873 9.33689,54.83733 9.33734,54.8372 9.33785,54.83719 9.3379,54.83702 9.33807,54.83681 9.34094,54.83529 9.34102,54.8352 9.34193,54.83464 9.34261,54.8341 9.34268,54.834 9.34357,54.83441 9.34425,54.83481 9.34425,54.8348 9.34484,54.83517 9.34573,54.83573 9.3473,54.83497 9.34761,54.83472 9.34771,54.83468 9.35063,54.83208 9.35121,54.8315 9.35165,54.83098 9.35165,54.83098 9.35217,54.83024 9.35276,54.82922 9.35303,54.8286 9.35363,54.82688 9.35389,54.82612 9.35391,54.8259 9.35429,54.82497 9.35449,54.82465 9.35526,54.82364 9.35754,54.82085 9.35803,54.8201 9.35812,54.82007 9.35837,54.81969 9.35849,54.81969 9.35933,54.81987 9.35946,54.81992 9.36075,54.82013 9.3611,54.82023 9.36136,54.82039 9.36154,54.82058 9.36169,54.82118 9.36169,54.82118 9.36209,54.82323 9.36225,54.82366 9.36307,54.82501 9.36392,54.82582 9.36449,54.82634 9.36499,54.82687 9.36529,54.82735 9.36556,54.828 9.36607,54.83013 9.36611,54.83053 9.36602,54.8311 9.36575,54.83164 9.36557,54.83187 9.366,54.83211 9.36615,54.83227 9.36651,54.83332 9.36651,54.83332 9.36692,54.83429 9.36705,54.83546 9.36714,54.83582 9.36997,54.84099 9.37591,54.8455 9.37627,54.84573 9.37674,54.84593 9.37782,54.84621 9.37843,54.84635 9.37959,54.84655 9.38667,54.84726 9.38741,54.84725 9.38945,54.84709 9.39019,54.84711 9.39332,54.84773 9.39428,54.84795 9.39495,54.84803 9.3956,54.84805 9.39658,54.84797 9.39754,54.84778 9.39807,54.84761 9.39909,54.8472 9.40015,54.84672 9.40047,54.84663 9.4007,54.84706 9.40111,54.84768 9.40111,54.84768 9.40207,54.84908 9.40224,54.8494 9.40294,54.84949 9.4031,54.84956 9.40537,54.84986 9.40547,54.84983 9.40694,54.85002 9.40828,54.85025 9.41236,54.8508 9.41255,54.8508 9.41386,54.85094 9.41405,54.85068 9.41414,54.85063 9.41466,54.84984 9.41466,54.84984 9.4153,54.849 9.41574,54.84858 9.41619,54.84825 9.41718,54.8477 9.41779,54.84744 9.41865,54.84716 9.42219,54.84631 9.43481,54.84342 9.43481,54.84342 9.44754,54.84051 9.45116,54.84008 9.45483,54.83972 9.45593,54.83965 9.45593,54.83965 9.45693,54.83967 9.4576,54.83972 9.45965,54.84002 9.46094,54.8403 9.46196,54.84061 9.46247,54.84081 9.46338,54.84128 9.46391,54.84161 9.46488,54.84231 9.46553,54.84287 9.46714,54.84457 9.4678,54.84514 9.46829,54.84548 9.46891,54.84584 9.4697,54.8462 9.47057,54.84652 9.47056,54.84652 9.47112,54.8467 9.47183,54.84688 9.47315,54.84712 9.47633,54.84743 9.4787,54.84762 9.47986,54.84777 9.48066,54.84794 9.48156,54.8482 9.48242,54.84855 9.48306,54.84888 9.48306,54.84887 9.48356,54.84919 9.48442,54.84992 9.48677,54.85265 9.48865,54.85417 9.48906,54.85456 9.48931,54.85484 9.48964,54.85532 9.49016,54.85638 9.49036,54.85671 9.49069,54.8571 9.49116,54.8575 9.49117,54.85751 9.49178,54.85789 9.4925,54.85824 9.49695,54.85971 9.49732,54.85987 9.49762,54.86007 9.49719,54.86029 9.49697,54.86033 9.49601,54.86014 9.496,54.86014 9.49535,54.86004 9.49471,54.85984 9.49443,54.85981 9.49417,54.85982 9.49285,54.86011 9.49167,54.86049 9.49079,54.86072 9.48668,54.8617 9.4844,54.86216 9.4841,54.86217 9.48287,54.86186 9.48258,54.86182 9.48237,54.86183 9.4814,54.86202 9.48014,54.86233 9.47968,54.8625 9.47949,54.86268 9.47949,54.86268 9.47867,54.86342 9.47737,54.86431 9.47669,54.86468 9.47417,54.86592 9.47399,54.86605 9.47384,54.86634 9.4738,54.86664 9.47389,54.86687 9.47427,54.86739 9.47436,54.8676 9.47441,54.8681 9.4743,54.8683 9.47409,54.8684 9.47292,54.86876 9.47182,54.86916 9.47136,54.86947 9.46719,54.87186 9.46685,54.87195 9.46497,54.87229 9.46409,54.87242 9.46409,54.87242 9.46388,54.87247 9.47432,54.87936 9.47431,54.87936 9.48265,54.88484 9.48376,54.88542 9.48485,54.88586 9.48616,54.88624 9.48737,54.88647 9.48811,54.88657 9.49593,54.88727 9.49629,54.88701 9.49736,54.88579 9.49736,54.88579 9.49779,54.88532 9.49813,54.88506 9.49945,54.88424 9.5005,54.88367 9.50228,54.88313 9.50674,54.88189 9.50717,54.88173 9.50856,54.8811 9.50856,54.8811 9.51353,54.8788 9.51414,54.87842 9.51462,54.87796 9.51483,54.87766 9.51502,54.87724 9.51522,54.87646 9.51537,54.87618 9.51558,54.8759 9.51615,54.87539 9.51729,54.87464 9.51736,54.87468 9.51735,54.87468 9.51818,54.87512 9.52055,54.87669 9.5215,54.87737 9.52193,54.8776 9.52192,54.8776 9.52254,54.8778 9.52313,54.87791 9.52761,54.87849 9.52846,54.87862 9.529,54.8788 9.52951,54.87906 9.52994,54.87944 9.53009,54.87963 9.53079,54.88085 9.53141,54.88206 9.5327,54.88436 9.53337,54.88509 9.53386,54.88548 9.53452,54.88587 9.53539,54.88627 9.54529,54.89028 9.54547,54.89033 9.54587,54.89052 9.54614,54.89073 9.54695,54.89088 9.54763,54.8911 9.54762,54.8911 9.54912,54.89154 9.5496,54.89178 9.55182,54.89295 9.55595,54.89521 9.55655,54.8955 9.55833,54.89645 9.5586,54.89664 9.56011,54.89741 9.56072,54.89775 9.56083,54.89785 9.56438,54.89976 9.56524,54.90019 9.56587,54.90056 9.57135,54.90347 9.57297,54.90419 9.57544,54.90509 9.57572,54.90522 9.57624,54.90553 9.57673,54.90596 9.57689,54.9062 9.57689,54.9062 9.5771,54.90666 9.57725,54.90715 9.57745,54.90756 9.57789,54.90804 9.57816,54.90825 9.57865,54.90852 9.57958,54.90885 9.58028,54.90899 9.58086,54.90905 9.58339,54.9092 9.58582,54.90917 9.58868,54.90894 9.59463,54.9081 9.59682,54.9077 9.59717,54.90766 9.59811,54.90742 9.59811,54.90742 9.5999,54.90695 9.60182,54.9065 9.60264,54.90636 9.6145,54.90488 9.62253,54.90351 9.62758,54.90256 9.63012,54.90201 9.6546,54.89594 9.65573,54.8957 9.65674,54.89554 9.6584,54.89532 9.65864,54.89526 9.66012,54.89507 9.66051,54.89505 9.67095,54.89375 9.67156,54.89371 9.67275,54.8937 9.67292,54.89368 9.67362,54.89374 9.675,54.89397 9.67656,54.89447 9.67741,54.89484 9.67808,54.89524 9.68004,54.89656 9.68015,54.89658 9.681,54.89713 9.68121,54.89732 9.68193,54.89783 9.68929,54.90285 9.68999,54.90327 9.69049,54.90351 9.69118,54.90379 9.69224,54.90412 9.69899,54.90581 9.70007,54.90618 9.70086,54.90651 9.70213,54.90707 9.70287,54.90746 9.7041,54.90825 9.70471,54.90873 9.70516,54.9091 9.70569,54.90964 9.70624,54.91029 9.7069,54.91137 9.70701,54.91149 9.70701,54.91148 9.7071,54.91158 9.70738,54.91164 9.70775,54.91161 9.71214,54.91043 9.71214,54.91043 9.71633,54.90933 9.71665,54.90922 9.7172,54.90909 9.71764,54.90904 9.72156,54.90891 9.72292,54.90891 9.74374,54.90821 9.74409,54.90819 9.74464,54.90811 9.74591,54.90772 9.74954,54.90654 9.74996,54.90645 9.75046,54.90641 9.75046,54.90641 9.75449,54.90638 9.75449,54.90638 9.75442,54.90575 9.75448,54.90565 9.75478,54.90546 9.75484,54.90533 9.75481,54.90525 9.75388,54.90444 9.75383,54.90428 9.7541,54.90415 9.75454,54.90404 9.75613,54.9038 9.75794,54.90336 9.76163,54.90236 9.76214,54.9022 9.76214,54.9022 9.76273,54.90208 9.76348,54.90199 9.7648,54.90192 9.76526,54.902 9.76637,54.90248 9.76681,54.9027 9.76979,54.90458 9.76992,54.90511 9.77023,54.90535 9.77057,54.90546 9.7735,54.90611 9.77423,54.90666 9.77519,54.90681 9.77667,54.90683 9.77701,54.90679 9.77772,54.9066 9.77888,54.90636 9.77955,54.90625 9.77955,54.90625 9.77962,54.90624 9.77948,54.90685 9.77947,54.90702 9.77954,54.90718 9.77993,54.90778 9.78028,54.90857 9.78073,54.90926 9.78159,54.9101 9.78159,54.9101 9.78174,54.91029 9.78172,54.91041 9.7816,54.91056 9.7807,54.91086 9.78061,54.91092 9.78059,54.9112 9.78059,54.9112 9.7806,54.9113 9.78135,54.91104 9.78187,54.91095 9.7853,54.91116 9.78581,54.91115 9.7859,54.9111 9.78674,54.91107 9.78681,54.91073 9.78681,54.91073 9.78675,54.91045 9.78636,54.91024 9.78607,54.91019 9.78575,54.91019 9.7858,54.91043 9.78576,54.91054 9.78522,54.91139 9.78487,54.91179 9.7846,54.91226 9.78461,54.91226 9.78426,54.91324 9.78408,54.91407 9.78423,54.91416 9.7846,54.91424 9.78469,54.91354 9.78479,54.91344 9.78509,54.91334 9.78527,54.91318 9.78558,54.91298 9.78564,54.91292 9.78567,54.9127 9.78576,54.91254 9.78576,54.91254 9.78604,54.91204 9.78644,54.91164 9.78659,54.91163 9.78784,54.91201 9.78849,54.91129 9.78849,54.91129 9.78853,54.91122 9.78794,54.91114 9.78674,54.91116 9.78591,54.91119 9.78581,54.91115 9.78509,54.91115 9.78201,54.91095 9.78141,54.91106 9.78069,54.91138 9.77998,54.91161 9.77959,54.91168 9.77927,54.91169 9.77911,54.91162 9.77623,54.91104 9.77615,54.91105 9.77522,54.91087 9.77358,54.91049 9.77356,54.91053 9.77356,54.91053 9.77358,54.91049 9.76044,54.90783 9.7577,54.90723',
			popupContent: '2. etape, Ribe–Sønderborg, 180 km'
		},

		circuit: {
			coordinates: '9.75773692131042,54.9072363920569 9.75773,54.90723 9.75727,54.90709 9.75566,54.90647 9.75517,54.90641 9.75449,54.90638 9.75442,54.90575 9.75448,54.90565 9.75478,54.90546 9.75484,54.90533 9.75481,54.90525 9.75388,54.90444 9.75383,54.90428 9.7541,54.90415 9.75454,54.90404 9.75537,54.90391 9.75537,54.90391 9.75636,54.90375 9.75794,54.90336 9.76163,54.90236 9.7623,54.90215 9.76273,54.90208 9.76348,54.90199 9.76459,54.90192 9.76496,54.90193 9.76526,54.902 9.76654,54.90257 9.76654,54.90256 9.76681,54.9027 9.76979,54.90458 9.76992,54.90511 9.77012,54.90529 9.77057,54.90546 9.7735,54.90611 9.77423,54.90666 9.77519,54.90681 9.77639,54.90684 9.7768,54.90682 9.7768,54.90682 9.77772,54.9066 9.77962,54.90624 9.77947,54.90702 9.77993,54.90778 9.78036,54.9087 9.78036,54.9087 9.78073,54.90926 9.78169,54.91019 9.78174,54.91029 9.78172,54.91041 9.78154,54.9106 9.78082,54.91081 9.78061,54.91092 9.7806,54.9113 9.78135,54.91104 9.78187,54.91095 9.7853,54.91116 9.78581,54.91115 9.7859,54.9111 9.78674,54.91107 9.78678,54.91084 9.78679,54.91084 9.78682,54.91068 9.78675,54.91045 9.78636,54.91024 9.78607,54.91019 9.78575,54.91019 9.7858,54.91043 9.78576,54.91054 9.78522,54.91139 9.78487,54.91179 9.78462,54.91219 9.78457,54.91242 9.78435,54.913 9.78435,54.913 9.78408,54.91407 9.78423,54.91416 9.7846,54.91424 9.78463,54.91405 9.78463,54.91405 9.78469,54.91354 9.78479,54.91344 9.78509,54.91334 9.78564,54.91292 9.78567,54.9127 9.78604,54.91204 9.78644,54.91164 9.78659,54.91163 9.78784,54.91201 9.78812,54.91173 9.78812,54.91173 9.78853,54.91122 9.78794,54.91114 9.78674,54.91116 9.78591,54.91119 9.78581,54.91115 9.78509,54.91115 9.78201,54.91095 9.78141,54.91106 9.78069,54.91138 9.78018,54.91156 9.77949,54.91169 9.77927,54.91169 9.77911,54.91162 9.77858,54.91152 9.77857,54.91152 9.77623,54.91104 9.77615,54.91105 9.77522,54.91087 9.77358,54.91049 9.77133,54.91005 9.76611,54.90897 9.7661,54.90897 9.76044,54.90783 9.75793,54.90728',
			popupContent: 'Rundstrækning Sønderborg'
		},

		moreInfo: 'http://www.postdanmarkrundt.dk/index.php?p=menu/side.php&menu=28&side=152'

	});

});