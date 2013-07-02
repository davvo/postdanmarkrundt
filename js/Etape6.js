/*global L, define */

define(function (require) {

	"use strict";

	return require('Etape').extend({

		start: {
			coordinates: [12.0913660526276, 55.6687875282375],
			popupContent: "Start Etape 6"
		},

		stop: {
			coordinates: [12.53306, 55.6747],
			popupContent: "Mål Etape 6"
		},

		track: {
			coordinates: '12.0913660526276,55.6687875282375 12.09135,55.66878 12.09182,55.6698 12.09197,55.66993 12.09237,55.67064 12.09271,55.67106 12.09301,55.67133 12.09343,55.6716 12.0941,55.67191 12.09486,55.67217 12.09603,55.67246 12.09572,55.67323 12.09545,55.67407 12.09529,55.67427 12.09528,55.67476 12.09528,55.67476 12.09536,55.67563 12.09546,55.67612 12.09565,55.67671 12.09598,55.67738 12.09659,55.67837 12.09825,55.68068 12.09879,55.68167 12.0991,55.68235 12.09937,55.683 12.10002,55.68489 12.10038,55.68567 12.10062,55.68606 12.10216,55.68823 12.10278,55.68934 12.10393,55.69192 12.10405,55.69201 12.10457,55.69291 12.10455,55.693 12.10666,55.69639 12.10762,55.69778 12.1083,55.6985 12.10897,55.69903 12.1095,55.69952 12.1123,55.70187 12.1124,55.70201 12.11332,55.7029 12.11371,55.7034 12.1141,55.70416 12.11441,55.70511 12.11448,55.7052 12.11484,55.70671 12.11526,55.7076 12.11525,55.70767 12.11575,55.70842 12.11593,55.70886 12.11605,55.70948 12.11603,55.70993 12.11579,55.71065 12.11553,55.7111 12.11511,55.7116 12.11333,55.71351 12.11283,55.71418 12.11253,55.71474 12.11231,55.71536 12.11225,55.71565 12.11387,55.71588 12.11386,55.71588 12.12062,55.71599 12.12451,55.71579 12.12624,55.71568 12.12674,55.71561 12.13204,55.71473 12.13299,55.71464 12.13386,55.71468 12.13608,55.71509 12.13702,55.71513 12.13815,55.71505 12.13822,55.71569 12.13815,55.71589 12.13783,55.71641 12.13695,55.71747 12.13696,55.71747 12.13603,55.7186 12.13595,55.71873 12.13595,55.71895 12.13698,55.72068 12.13761,55.72188 12.13763,55.72208 12.13748,55.7228 12.13752,55.72308 12.13912,55.72535 12.14159,55.72866 12.14255,55.73003 12.14279,55.73044 12.14285,55.73074 12.14279,55.73094 12.14264,55.73105 12.14185,55.73119 12.14125,55.73137 12.14079,55.73156 12.14018,55.73196 12.13998,55.73225 12.1399,55.73247 12.13945,55.73461 12.14285,55.73471 12.14285,55.73471 12.14751,55.73483 12.14871,55.73489 12.1495,55.73501 12.15068,55.73509 12.15058,55.73546 12.15012,55.73642 12.14832,55.73915 12.14832,55.73915 12.14477,55.74465 12.14419,55.7454 12.14222,55.74735 12.14183,55.74766 12.14071,55.74834 12.14017,55.74873 12.13955,55.74925 12.13812,55.75077 12.13722,55.75201 12.13695,55.75232 12.1367,55.75252 12.13611,55.75284 12.13391,55.75361 12.13317,55.75393 12.13271,55.75421 12.13156,55.75512 12.1308,55.75556 12.13026,55.75581 12.12964,55.75537 12.12822,55.75425 12.12737,55.75346 12.12648,55.75214 12.12614,55.7515 12.12594,55.75099 12.12584,55.75088 12.12584,55.75088 12.12573,55.75041 12.1258,55.74985 12.12507,55.74983 12.12494,55.7498 12.12463,55.74981 12.12197,55.75001 12.12174,55.75006 12.11965,55.75024 12.11798,55.75033 12.11797,55.75029 12.11797,55.75029 12.11798,55.75033 12.10769,55.75118 12.10713,55.7512 12.10659,55.75116 12.10646,55.75119 12.10633,55.75118 12.10624,55.75113 12.10621,55.75107 12.10532,55.75108 12.10309,55.75132 12.1032,55.75228 12.1035,55.75306 12.10357,55.75346 12.10357,55.75346 12.1036,55.75448 12.1036,55.75448 12.10504,55.75482 12.10885,55.75585 12.10951,55.75605 12.10918,55.75631 12.10912,55.75649 12.10942,55.75682 12.11022,55.75787 12.11022,55.75787 12.11093,55.75892 12.11201,55.76008 12.11222,55.76026 12.11329,55.76104 12.11337,55.76106 12.11356,55.76119 12.11429,55.76182 12.11519,55.76243 12.11621,55.76305 12.11743,55.76354 12.11796,55.76384 12.11844,55.76407 12.12054,55.76543 12.12146,55.76647 12.12309,55.76764 12.124,55.76816 12.1252,55.7687 12.12656,55.76922 12.1302,55.77072 12.13097,55.77102 12.13182,55.77129 12.13132,55.77195 12.13062,55.77262 12.13049,55.77291 12.13049,55.77291 12.13027,55.77354 12.12992,55.77404 12.12935,55.77464 12.12892,55.77503 12.12851,55.77534 12.12782,55.77572 12.12545,55.77676 12.12502,55.77698 12.12227,55.7785 12.12122,55.77918 12.12008,55.78011 12.11958,55.78058 12.11905,55.78116 12.11856,55.78186 12.11842,55.78217 12.11832,55.7827 12.11816,55.7843 12.11803,55.78452 12.11771,55.78488 12.11739,55.78567 12.11746,55.78579 12.11771,55.78592 12.11486,55.78781 12.11408,55.78837 12.11398,55.78841 12.11338,55.7889 12.11338,55.7889 12.11148,55.79048 12.10975,55.79201 12.10822,55.79349 12.10678,55.79506 12.10527,55.79703 12.10435,55.79855 12.10349,55.8003 12.10313,55.80121 12.10272,55.80255 12.10276,55.80262 12.10251,55.80385 12.10225,55.80559 12.10216,55.80589 12.10214,55.80667 12.1022,55.80796 12.10237,55.80929 12.10266,55.8106 12.10468,55.81784 12.1052,55.81997 12.10529,55.82127 12.10528,55.82217 12.10513,55.82348 12.10489,55.82465 12.10492,55.82511 12.10506,55.82518 12.10511,55.82532 12.10501,55.82543 12.10479,55.82548 12.10453,55.82544 12.10441,55.82533 12.10369,55.82527 12.1024,55.8253 12.10152,55.82537 12.10152,55.82537 12.09981,55.82555 12.09763,55.82567 12.09692,55.82567 12.09454,55.82554 12.09321,55.82537 12.09194,55.82516 12.09005,55.82473 12.08903,55.82445 12.08407,55.82641 12.08304,55.82689 12.08305,55.82689 12.08029,55.8284 12.0748,55.8313 12.07185,55.83275 12.06686,55.83535 12.06662,55.83551 12.06616,55.83605 12.06579,55.83654 12.06551,55.83677 12.06551,55.83677 12.06543,55.83684 12.06599,55.83696 12.06695,55.83707 12.06634,55.83869 12.06588,55.83963 12.06578,55.83971 12.06571,55.84012 12.06571,55.84012 12.06592,55.84072 12.06612,55.84072 12.06627,55.84078 12.06638,55.84087 12.06642,55.84098 12.0663,55.84108 12.06597,55.84106 12.0659,55.84117 12.0655,55.84355 12.06556,55.84364 12.06548,55.84402 12.0656,55.84407 12.06565,55.84417 12.06561,55.84424 12.06545,55.8443 12.06484,55.84798 12.06468,55.84839 12.06449,55.84849 12.06424,55.84893 12.06424,55.84893 12.06351,55.85023 12.06341,55.85072 12.06331,55.8522 12.06314,55.85311 12.06312,55.85347 12.06327,55.85402 12.06344,55.85429 12.06445,55.8557 12.06483,55.85599 12.06536,55.85613 12.06545,55.85608 12.06559,55.85608 12.06569,55.85613 12.06571,55.85621 12.06597,55.85624 12.06658,55.85628 12.06704,55.85624 12.06771,55.85612 12.06807,55.85601 12.06893,55.85565 12.06987,55.85533 12.07112,55.85506 12.07192,55.85496 12.07281,55.85491 12.07407,55.85494 12.07453,55.85499 12.07586,55.85522 12.07715,55.85562 12.07888,55.85645 12.0797,55.85681 12.08126,55.85739 12.08185,55.85757 12.08327,55.85789 12.08465,55.85808 12.08516,55.8581 12.08545,55.85797 12.08565,55.85798 12.08583,55.8581 12.08588,55.85821 12.08674,55.85836 12.08683,55.85842 12.0874,55.85857 12.08782,55.85872 12.08832,55.85893 12.09043,55.86 12.09181,55.86043 12.09204,55.86053 12.09273,55.86098 12.09272,55.86098 12.09301,55.86109 12.09326,55.86112 12.09471,55.86107 12.09659,55.86114 12.09753,55.86103 12.09956,55.86057 12.10026,55.86038 12.10103,55.86012 12.10275,55.85971 12.10307,55.85962 12.10362,55.85936 12.10457,55.85895 12.10627,55.85838 12.10706,55.85802 12.10894,55.85703 12.11015,55.85649 12.11077,55.85626 12.11077,55.85626 12.11114,55.85617 12.11188,55.85607 12.11583,55.8556 12.11704,55.85534 12.11851,55.85487 12.12867,55.85298 12.13351,55.85213 12.13362,55.85242 12.13376,55.85262 12.13456,55.85301 12.13455,55.85301 12.13936,55.85501 12.14108,55.85549 12.14138,55.8556 12.14177,55.85745 12.14202,55.85827 12.14289,55.86245 12.14293,55.86253 12.14305,55.8626 12.14388,55.86262 12.14392,55.86255 12.14409,55.86245 12.14493,55.86225 12.14493,55.86225 12.1464,55.86196 12.14708,55.86176 12.14782,55.86149 12.14955,55.86075 12.15444,55.85852 12.15485,55.85825 12.15514,55.85787 12.15544,55.85754 12.15735,55.85601 12.15807,55.8556 12.16031,55.85443 12.15736,55.85269 12.15735,55.85269 12.15632,55.85207 12.15613,55.85199 12.15484,55.85124 12.15466,55.85125 12.15451,55.85122 12.15438,55.85113 12.15436,55.85104 12.15446,55.85093 12.1546,55.85088 12.1548,55.85088 12.15494,55.85093 12.15515,55.85078 12.15525,55.85062 12.15532,55.84841 12.15542,55.84833 12.15565,55.84827 12.15655,55.84817 12.15655,55.84817 12.16228,55.84759 12.1632,55.84747 12.16422,55.84729 12.16731,55.84643 12.1676,55.8463 12.16797,55.84594 12.16813,55.84585 12.16828,55.84581 12.1693,55.84573 12.1702,55.84542 12.17046,55.8453 12.17055,55.84522 12.17073,55.84454 12.17079,55.84443 12.17089,55.84439 12.17113,55.84434 12.17143,55.84434 12.1723,55.84444 12.17229,55.84444 12.17239,55.84446 12.17225,55.84463 12.17209,55.84528 12.17183,55.84583 12.17179,55.84641 12.17187,55.84674 12.17186,55.84674 12.17206,55.84718 12.17254,55.84779 12.17272,55.84814 12.17319,55.85353 12.17456,55.85354 12.17456,55.85354 12.17555,55.85349 12.17699,55.85328 12.17782,55.85322 12.18202,55.85349 12.1827,55.85355 12.1832,55.85369 12.18362,55.85385 12.18397,55.85404 12.18438,55.85419 12.18476,55.85426 12.18526,55.85427 12.18558,55.85422 12.18669,55.85397 12.18736,55.85377 12.18783,55.85358 12.18907,55.85294 12.19004,55.85261 12.1929,55.85199 12.19334,55.85195 12.19382,55.85199 12.19405,55.85204 12.19438,55.85216 12.19649,55.85319 12.19913,55.85463 12.19972,55.85506 12.20028,55.8557 12.20048,55.85585 12.20076,55.85597 12.20201,55.85626 12.20606,55.85703 12.20711,55.8572 12.20756,55.85731 12.20822,55.85757 12.20946,55.85813 12.21022,55.85855 12.21131,55.85928 12.21256,55.85993 12.21313,55.86013 12.21375,55.86025 12.21542,55.86046 12.22011,55.86132 12.22066,55.86136 12.22128,55.86136 12.22195,55.86145 12.22237,55.86154 12.22318,55.86192 12.22382,55.86212 12.22427,55.86236 12.225,55.86305 12.22523,55.86341 12.2257,55.8647 12.22595,55.8651 12.22625,55.86535 12.22773,55.86633 12.22773,55.86632 12.22792,55.86649 12.22895,55.86655 12.23115,55.86653 12.23361,55.86657 12.23464,55.86655 12.23578,55.86644 12.2371,55.86636 12.23781,55.86638 12.23849,55.86621 12.23893,55.86607 12.23921,55.86595 12.2394,55.86584 12.24043,55.86497 12.24094,55.86461 12.24234,55.86346 12.24471,55.86111 12.24472,55.86111 12.24509,55.8607 12.24522,55.86009 12.24536,55.85979 12.24862,55.85517 12.24916,55.85435 12.24956,55.85363 12.24967,55.85332 12.24947,55.85245 12.24851,55.84935 12.24849,55.84914 12.24867,55.84805 12.2486,55.84794 12.24857,55.84793 12.24974,55.84717 12.25216,55.8455 12.25602,55.84273 12.25954,55.83979 12.25954,55.83979 12.25958,55.83976 12.25995,55.84018 12.26043,55.84042 12.26229,55.84103 12.26331,55.84132 12.26361,55.84139 12.26395,55.84142 12.26721,55.84146 12.26944,55.84146 12.27105,55.84119 12.27321,55.84094 12.27602,55.84056 12.27791,55.84037 12.27949,55.84034 12.27949,55.84034 12.28112,55.84033 12.28537,55.84043 12.28541,55.84038 12.28554,55.84035 12.28566,55.84036 12.28573,55.84042 12.28568,55.84051 12.28551,55.84054 12.28544,55.84152 12.2857,55.84213 12.28605,55.84254 12.28604,55.84254 12.28659,55.84321 12.28689,55.84326 12.2877,55.84325 12.28882,55.84332 12.29263,55.84388 12.29473,55.84422 12.29472,55.84422 12.31267,55.84704 12.31539,55.84752 12.32086,55.84859 12.32656,55.84965 12.32655,55.84965 12.33026,55.85036 12.33026,55.85036 12.33151,55.8506 12.33219,55.85076 12.3327,55.85096 12.33338,55.85131 12.33451,55.85219 12.33694,55.85479 12.33842,55.8571 12.33977,55.85869 12.34047,55.85929 12.34058,55.85927 12.34058,55.85927 12.34047,55.85929 12.34084,55.85958 12.34088,55.85965 12.34079,55.85988 12.34156,55.86016 12.34406,55.86192 12.34405,55.86192 12.34446,55.86224 12.34479,55.86259 12.34569,55.86388 12.34604,55.86423 12.34656,55.86454 12.34696,55.86468 12.3473,55.86477 12.34809,55.86487 12.34821,55.86492 12.34824,55.86497 12.34742,55.86645 12.34735,55.86667 12.34717,55.86825 12.34917,55.86832 12.34916,55.86832 12.35108,55.86843 12.35172,55.8686 12.35228,55.8689 12.35467,55.8681 12.35469,55.86804 12.3548,55.868 12.355,55.86804 12.35502,55.86812 12.35496,55.86818 12.35534,55.86857 12.35534,55.86856 12.35572,55.86887 12.35604,55.86899 12.35778,55.86951 12.35787,55.86957 12.35886,55.86988 12.35905,55.86983 12.35926,55.86988 12.35966,55.86976 12.35978,55.86976 12.36079,55.86937 12.36079,55.86937 12.36172,55.86906 12.36192,55.8689 12.36226,55.86875 12.36247,55.86861 12.3627,55.86905 12.3633,55.86965 12.36348,55.86977 12.36419,55.87009 12.36466,55.87026 12.3656,55.8705 12.3696,55.87141 12.37028,55.87159 12.37125,55.87194 12.37204,55.87237 12.37204,55.87236 12.37252,55.87271 12.37301,55.87319 12.37318,55.87345 12.3736,55.87431 12.37378,55.87458 12.37393,55.87472 12.37419,55.8749 12.37447,55.87503 12.37529,55.87517 12.37644,55.87531 12.37721,55.87536 12.37856,55.87537 12.37998,55.87528 12.37998,55.87528 12.38077,55.87525 12.38171,55.87526 12.38254,55.87531 12.38446,55.87551 12.38573,55.87557 12.38724,55.87559 12.38863,55.87554 12.38863,55.87554 12.38851,55.87489 12.38805,55.8735 12.38805,55.87349 12.38737,55.87135 12.38728,55.87059 12.38741,55.86894 12.38741,55.86812 12.38753,55.86787 12.38728,55.86718 12.387,55.86671 12.38697,55.86655 12.387,55.86639 12.38756,55.86576 12.3876,55.86565 12.3876,55.86565 12.38758,55.86548 12.3874,55.86519 12.38732,55.86487 12.38746,55.86469 12.38799,55.86424 12.38756,55.86384 12.38756,55.86384 12.3874,55.8637 12.38996,55.86274 12.39011,55.86271 12.39267,55.86178 12.39267,55.86178 12.3991,55.85942 12.40005,55.85905 12.40035,55.8589 12.40178,55.85832 12.40314,55.85774 12.40323,55.85766 12.40321,55.8576 12.40294,55.85729 12.40264,55.85704 12.40165,55.85638 12.40015,55.85554 12.40014,55.85554 12.39649,55.85361 12.39155,55.85093 12.39084,55.85045 12.39027,55.84992 12.39027,55.84991 12.38932,55.84888 12.38869,55.84776 12.38834,55.84691 12.3884,55.8467 12.38914,55.84558 12.38981,55.84471 12.39037,55.84381 12.39093,55.84336 12.39093,55.84336 12.39267,55.84203 12.39523,55.83969 12.39583,55.83933 12.39641,55.83907 12.39682,55.83893 12.39731,55.83883 12.39794,55.83879 12.40058,55.83878 12.40316,55.83867 12.40377,55.8387 12.40678,55.83903 12.41073,55.83912 12.41366,55.83906 12.41515,55.83893 12.41515,55.83893 12.41529,55.83891 12.4153,55.83835 12.41548,55.83767 12.41581,55.83712 12.41652,55.8362 12.4177,55.835 12.41855,55.83423 12.41891,55.83395 12.41994,55.83329 12.42098,55.83279 12.42163,55.83255 12.42244,55.8323 12.42415,55.83192 12.42535,55.83177 12.4297,55.83157 12.42969,55.83146 12.42969,55.83146 12.42964,55.83095 12.42968,55.83065 12.43016,55.82971 12.43015,55.82886 12.42972,55.82666 12.42976,55.8266 12.42951,55.8263 12.42915,55.82598 12.42857,55.82567 12.42787,55.82544 12.42584,55.82515 12.42523,55.82499 12.42297,55.8241 12.42242,55.82382 12.42096,55.82275 12.42034,55.82241 12.41986,55.82223 12.4197,55.8222 12.41886,55.82193 12.41877,55.82188 12.41614,55.82109 12.41368,55.82015 12.41317,55.82001 12.41258,55.81995 12.41231,55.81998 12.41197,55.82007 12.41081,55.82056 12.40834,55.8217 12.40753,55.82204 12.40537,55.82284 12.40312,55.82351 12.4016,55.82389 12.40037,55.82413 12.40021,55.82389 12.40025,55.82381 12.39997,55.82321 12.39997,55.8232 12.39986,55.82283 12.3999,55.82222 12.40018,55.82165 12.40098,55.82054 12.40114,55.82026 12.40125,55.81992 12.40125,55.81934 12.40111,55.81891 12.40085,55.81849 12.40046,55.81812 12.39969,55.81764 12.39864,55.81727 12.39741,55.81693 12.39665,55.81661 12.39473,55.81608 12.39334,55.8158 12.39234,55.81565 12.39071,55.81551 12.39018,55.8155 12.38913,55.8156 12.37742,55.81561 12.37681,55.81562 12.3754,55.8157 12.37543,55.81535 12.37549,55.81513 12.37556,55.81505 12.37576,55.81394 12.37577,55.81394 12.37593,55.81294 12.37638,55.81221 12.3768,55.81102 12.37729,55.80999 12.37728,55.80989 12.37769,55.80938 12.37992,55.8071 12.38039,55.80648 12.38072,55.80569 12.38092,55.80503 12.38086,55.80371 12.3808,55.8036 12.38094,55.80303 12.38116,55.80265 12.38149,55.80228 12.38364,55.80066 12.3848,55.79947 12.38494,55.79938 12.38554,55.79824 12.38554,55.79824 12.38799,55.79365 12.38871,55.7927 12.38947,55.79193 12.39051,55.79108 12.39283,55.78958 12.39352,55.78907 12.39454,55.78821 12.39611,55.78674 12.40213,55.78134 12.40218,55.78123 12.40383,55.77956 12.40295,55.77937 12.40294,55.77937 12.39778,55.77842 12.39705,55.77831 12.39631,55.77827 12.39553,55.7783 12.39478,55.77839 12.38999,55.77942 12.38929,55.77954 12.38822,55.77962 12.38688,55.77959 12.38625,55.77952 12.38559,55.77941 12.38534,55.77933 12.3835,55.77901 12.38202,55.77869 12.38115,55.77866 12.38032,55.7787 12.38011,55.77782 12.38022,55.77724 12.38035,55.77699 12.38091,55.77639 12.38091,55.77639 12.3828,55.77534 12.38338,55.77497 12.38411,55.77436 12.38554,55.77352 12.38645,55.77262 12.38555,55.7721 12.38529,55.77188 12.38516,55.77169 12.38334,55.76809 12.38336,55.76786 12.38348,55.76762 12.38418,55.76667 12.38449,55.76609 12.38483,55.76467 12.38483,55.76445 12.38478,55.76434 12.38451,55.7641 12.3845,55.7641 12.38402,55.76374 12.38318,55.763 12.38252,55.76188 12.38227,55.7618 12.38068,55.76152 12.38049,55.7614 12.38022,55.76101 12.37991,55.76067 12.37971,55.76062 12.37934,55.76058 12.37794,55.76048 12.37639,55.76043 12.37488,55.76048 12.37424,55.76039 12.37299,55.76006 12.37156,55.75944 12.37005,55.75892 12.37093,55.75782 12.37093,55.75782 12.37214,55.75631 12.37262,55.75561 12.373,55.75499 12.37346,55.75407 12.37376,55.7533 12.3739,55.75234 12.37379,55.75174 12.37338,55.75104 12.37282,55.75043 12.37223,55.74992 12.36861,55.74707 12.36817,55.74663 12.36797,55.74636 12.3676,55.74562 12.36746,55.74511 12.3675,55.74353 12.36745,55.7432 12.36727,55.74263 12.36701,55.74217 12.36668,55.74171 12.3645,55.7398 12.36387,55.73908 12.36351,55.73831 12.36307,55.73658 12.36307,55.73658 12.36298,55.73627 12.3628,55.73592 12.36278,55.73515 12.36266,55.73469 12.36266,55.73452 12.36269,55.73434 12.36296,55.73376 12.36324,55.73279 12.36334,55.73224 12.36334,55.73224 12.36331,55.73198 12.3621,55.72912 12.3617,55.72871 12.36139,55.7285 12.36076,55.72822 12.35814,55.72722 12.35773,55.727 12.35715,55.72655 12.35636,55.72573 12.35593,55.72513 12.35582,55.72473 12.35586,55.72359 12.35724,55.72353 12.35735,55.72356 12.35838,55.72351 12.35837,55.72345 12.35837,55.72345 12.35838,55.72351 12.36335,55.7233 12.36349,55.72324 12.36523,55.72307 12.37115,55.72261 12.37764,55.72204 12.37764,55.72204 12.38071,55.72182 12.38406,55.72166 12.39142,55.72143 12.39443,55.7213 12.39583,55.72115 12.39689,55.72098 12.39763,55.7208 12.4035,55.71925 12.40845,55.71799 12.41188,55.71706 12.41294,55.71672 12.41387,55.71633 12.41441,55.71606 12.41526,55.7155 12.41592,55.71492 12.41627,55.71454 12.41801,55.71184 12.41826,55.7115 12.41898,55.71072 12.41971,55.7101 12.42039,55.70962 12.42198,55.70867 12.42725,55.70551 12.42822,55.7051 12.42929,55.70477 12.43011,55.70459 12.43153,55.70439 12.43244,55.70436 12.43617,55.70446 12.43679,55.70445 12.43811,55.70429 12.43875,55.70415 12.44133,55.70328 12.44241,55.703 12.44852,55.70186 12.45092,55.70149 12.45092,55.70149 12.45171,55.7014 12.45149,55.70114 12.44961,55.69942 12.44902,55.6988 12.44881,55.69848 12.4488,55.69848 12.44852,55.69783 12.44848,55.69753 12.4487,55.69402 12.4491,55.69167 12.4496,55.68944 12.4496,55.68944 12.45006,55.68752 12.45143,55.68456 12.45304,55.68134 12.45304,55.68134 12.45448,55.6784 12.45503,55.67577 12.45629,55.67106 12.45912,55.67136 12.45912,55.67136 12.46301,55.67168 12.46479,55.67187 12.46845,55.67219 12.47339,55.6726 12.47558,55.6727 12.47888,55.67267 12.47888,55.67267 12.4871,55.67253 12.48864,55.67249 12.49087,55.67247 12.49087,55.67247 12.49535,55.67237 12.50636,55.67218 12.50636,55.67218 12.50646,55.67218 12.50637,55.67246 12.50637,55.67246 12.50636,55.67256 12.50647,55.67297 12.50672,55.67315 12.50686,55.67346 12.50762,55.67564 12.50762,55.67564 12.50782,55.67616 12.50833,55.67706 12.5092,55.67884 12.51132,55.67889 12.51132,55.67889 12.51804,55.67911 12.52134,55.67937 12.52292,55.67957 12.52292,55.67956 12.52334,55.67962 12.52356,55.67961 12.52673,55.6792 12.529,55.67897 12.53282,55.67847 12.53309,55.6784 12.53324,55.67834 12.53349,55.67917 12.53392,55.67911 12.53392,55.67911 12.53697,55.67877 12.5388,55.67852 12.54061,55.67812 12.54061,55.67805 12.5407,55.67801 12.54084,55.67803 12.54089,55.67807 12.54215,55.6778 12.54167,55.67663 12.54167,55.67662 12.54159,55.67647 12.54163,55.67636 12.54072,55.67469 12.54072,55.67468 12.54036,55.67395 12.53306,55.6747',
			popupContent: '6. etape, Roskilde–Frederiksberg, 165 km'
		},

		circuit: {
			coordinates: '12.532696723938,55.674728968556 12.5327,55.67474 12.53229,55.67478 12.53113,55.67083 12.52992,55.67092 12.52992,55.67092 12.52552,55.67125 12.51959,55.67185 12.51951,55.67188 12.51829,55.67202 12.51731,55.67208 12.5064,55.67228 12.5064,55.67228 12.50636,55.67256 12.50647,55.67297 12.50672,55.67315 12.50686,55.67346 12.50769,55.67583 12.50817,55.67678 12.50817,55.67677 12.5092,55.67884 12.5134,55.67895 12.5134,55.67895 12.51804,55.67911 12.52134,55.67937 12.52349,55.67962 12.52673,55.6792 12.52854,55.67902 12.52854,55.67902 12.53282,55.67847 12.53309,55.6784 12.53324,55.67834 12.53349,55.67917 12.53398,55.67911 12.53398,55.67911 12.53697,55.67877 12.5388,55.67852 12.54061,55.67812 12.54061,55.67805 12.5407,55.67801 12.54084,55.67803 12.54089,55.67807 12.54215,55.6778 12.54205,55.67754 12.54204,55.67754 12.54159,55.67647 12.54163,55.67636 12.54036,55.67395 12.53292,55.67471',
			popupContent: 'Rundstrækning Frederiksberg'
		},

		moreInfo: 'http://www.postdanmarkrundt.dk/index.php?p=menu/side.php&menu=28&side=156'

	});

});