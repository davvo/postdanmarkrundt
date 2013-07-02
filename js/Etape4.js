/*global L, define */

define(function (require) {

	"use strict";

	return require('Etape').extend({

		start: {
			coordinates: [11.2939453125, 55.5168724819294],
			popupContent: "Start Etape 4",
			iconUrl: 'img/start-4.png'
		},

		stop: {
			coordinates: [11.5091, 55.83779],
			popupContent: "Mål Etape 4",
			iconUrl: 'img/finish.png'
		},

		track: {
			coordinates: '11.2939453125,55.5168724819294 11.29369,55.5169 11.29509,55.51936 11.29566,55.52056 11.29588,55.52114 11.29669,55.52406 11.29793,55.52749 11.29823,55.52887 11.29829,55.53009 11.29841,55.53075 11.29863,55.53147 11.29899,55.53223 11.29944,55.53293 11.30072,55.53449 11.30157,55.5356 11.30206,55.53632 11.30365,55.5391 11.3041,55.53978 11.30492,55.54083 11.3068,55.54284 11.30743,55.54369 11.30785,55.54449 11.30816,55.54548 11.3083,55.54573 11.30879,55.54632 11.30907,55.54674 11.30912,55.5469 11.30912,55.5473 11.30922,55.54729 11.30922,55.54729 11.30912,55.5473 11.30889,55.54928 11.30889,55.5499 11.30897,55.55026 11.30932,55.55124 11.30935,55.55159 11.30922,55.55198 11.30817,55.55367 11.30795,55.55411 11.30788,55.55457 11.30797,55.55502 11.30821,55.55545 11.3086,55.55583 11.31062,55.55728 11.31133,55.55786 11.31318,55.55982 11.31357,55.56029 11.31414,55.56107 11.31594,55.5637 11.31615,55.5642 11.31628,55.56466 11.31783,55.57108 11.31782,55.57176 11.31743,55.57358 11.31727,55.57385 11.31647,55.57485 11.3163,55.57522 11.31623,55.57561 11.31626,55.57616 11.31636,55.57643 11.31656,55.57673 11.31725,55.57756 11.31735,55.57774 11.31746,55.57817 11.31736,55.57889 11.31686,55.58027 11.31672,55.58107 11.31681,55.58195 11.31725,55.58482 11.31718,55.58565 11.3166,55.5872 11.31636,55.58765 11.31585,55.58839 11.31518,55.58916 11.31335,55.59101 11.31269,55.59157 11.31199,55.59209 11.31223,55.59223 11.3123,55.59231 11.31263,55.59342 11.31278,55.59368 11.31294,55.59375 11.31602,55.59454 11.31619,55.59471 11.31623,55.59521 11.31642,55.59537 11.31673,55.59544 11.31907,55.59575 11.32044,55.59599 11.32044,55.59598 11.32248,55.59638 11.32336,55.59658 11.32397,55.59677 11.32617,55.59801 11.32668,55.59825 11.32845,55.59893 11.33157,55.60022 11.33341,55.60093 11.33892,55.60036 11.33957,55.60035 11.34399,55.60183 11.34398,55.60183 11.34992,55.60381 11.36269,55.60816 11.36898,55.61019 11.36972,55.61048 11.37017,55.61097 11.37028,55.61104 11.37102,55.61129 11.3733,55.61192 11.37685,55.61265 11.37713,55.61267 11.37751,55.61266 11.37959,55.61252 11.38003,55.61255 11.38078,55.61272 11.38116,55.61277 11.38165,55.61271 11.38282,55.61238 11.38403,55.61215 11.38426,55.61206 11.38478,55.61174 11.38513,55.61163 11.38685,55.6114 11.38705,55.61172 11.38727,55.61198 11.38759,55.61223 11.388,55.61248 11.38905,55.61301 11.38973,55.61341 11.39013,55.61375 11.39093,55.61468 11.39116,55.61504 11.3918,55.61638 11.39208,55.61678 11.39208,55.61677 11.39236,55.61711 11.39297,55.61763 11.39347,55.61799 11.39536,55.61911 11.3958,55.61941 11.39653,55.62007 11.39674,55.6203 11.39719,55.62096 11.39742,55.62144 11.3976,55.62205 11.39765,55.62286 11.39758,55.62334 11.39742,55.62389 11.39715,55.62441 11.39674,55.62497 11.39626,55.62546 11.39255,55.62895 11.39193,55.62961 11.39169,55.63 11.39136,55.63073 11.39122,55.6317 11.39125,55.63211 11.39152,55.63288 11.3917,55.63317 11.39215,55.63376 11.3926,55.63419 11.39344,55.63484 11.39408,55.63521 11.39599,55.6362 11.39719,55.63697 11.39798,55.63767 11.39889,55.63877 11.3994,55.63961 11.40019,55.64161 11.40032,55.64211 11.40029,55.64256 11.39949,55.64393 11.39949,55.64393 11.3985,55.64572 11.39821,55.64643 11.3981,55.64724 11.39813,55.6483 11.39812,55.64866 11.39805,55.64885 11.39782,55.64923 11.39733,55.64979 11.39712,55.65031 11.39691,55.65169 11.39705,55.65354 11.3967,55.65471 11.3967,55.65471 11.3963,55.65591 11.39573,55.65717 11.3955,55.65799 11.39524,55.65871 11.39569,55.66048 11.39659,55.66035 11.39659,55.66035 11.39726,55.66025 11.39773,55.66012 11.3988,55.65991 11.40002,55.65971 11.4013,55.65951 11.40149,55.6595 11.40164,55.65953 11.40227,55.65986 11.40227,55.65986 11.40379,55.6607 11.40416,55.66107 11.40494,55.66153 11.40593,55.66239 11.40652,55.66274 11.40651,55.66274 11.4071,55.66304 11.40795,55.66337 11.40863,55.66359 11.40979,55.66386 11.41039,55.66394 11.41167,55.66405 11.41979,55.66463 11.41974,55.66483 11.41974,55.66483 11.41951,55.66498 11.41882,55.66512 11.41845,55.66526 11.41167,55.66896 11.40924,55.67018 11.40814,55.67076 11.40721,55.67106 11.4069,55.6712 11.4057,55.67198 11.4039,55.67304 11.40276,55.67383 11.40227,55.67426 11.40158,55.67471 11.40091,55.67534 11.4007,55.67561 11.40035,55.67662 11.40014,55.67682 11.39988,55.67692 11.39949,55.67697 11.3951,55.67704 11.39432,55.67706 11.39432,55.67706 11.39423,55.67706 11.39402,55.67724 11.39387,55.67743 11.39379,55.67765 11.39376,55.67836 11.3938,55.67852 11.39389,55.67862 11.39388,55.67862 11.39394,55.67868 11.39364,55.67872 11.39347,55.67872 11.39309,55.67864 11.39246,55.67864 11.39178,55.67867 11.38746,55.67911 11.38537,55.67918 11.3819,55.67947 11.38148,55.67956 11.37995,55.68028 11.37938,55.68039 11.37792,55.68045 11.37654,55.68049 11.37613,55.68045 11.37529,55.68024 11.37399,55.67985 11.37359,55.67978 11.36771,55.67955 11.3677,55.67955 11.36758,55.67955 11.36737,55.67935 11.36713,55.67923 11.36632,55.679 11.36428,55.67848 11.36391,55.67844 11.36203,55.6784 11.35715,55.67795 11.35654,55.67786 11.35558,55.67765 11.35503,55.67757 11.35096,55.67708 11.3506,55.67695 11.35039,55.67672 11.34877,55.67336 11.34647,55.66945 11.34647,55.66945 11.34645,55.66942 11.34452,55.67043 11.34208,55.67161 11.33942,55.6733 11.33874,55.67365 11.33649,55.67461 11.33492,55.67545 11.33427,55.6757 11.33209,55.67633 11.33053,55.67668 11.33053,55.67668 11.32988,55.67681 11.32937,55.67697 11.32888,55.67717 11.3282,55.67749 11.3278,55.67772 11.32701,55.67828 11.32491,55.67953 11.32451,55.67969 11.32134,55.68076 11.31835,55.68191 11.31239,55.68482 11.31191,55.68493 11.31115,55.68502 11.31,55.685 11.30866,55.68487 11.30865,55.68487 11.30745,55.68476 11.3075,55.68542 11.30746,55.68558 11.30701,55.68641 11.30701,55.68641 11.30638,55.68755 11.30494,55.68998 11.30471,55.69014 11.30495,55.69028 11.30698,55.69251 11.30713,55.69285 11.30711,55.69306 11.30656,55.69485 11.30629,55.6973 11.30585,55.6994 11.3037,55.70563 11.30351,55.70683 11.30351,55.70706 11.30387,55.7085 11.30384,55.70883 11.3037,55.70914 11.3037,55.70914 11.3016,55.71253 11.30156,55.71274 11.30163,55.71296 11.30182,55.7132 11.30201,55.71332 11.30301,55.71375 11.30321,55.71389 11.30331,55.71415 11.30327,55.71429 11.30296,55.71475 11.30284,55.71532 11.30247,55.71576 11.30206,55.71612 11.30201,55.71626 11.30201,55.71647 11.30201,55.71647 11.30204,55.71675 11.30198,55.71706 11.30061,55.72048 11.30062,55.72076 11.30102,55.72196 11.301,55.72221 11.30088,55.72244 11.2996,55.72429 11.29842,55.7259 11.29833,55.72615 11.29794,55.72858 11.29775,55.72907 11.29775,55.72907 11.29732,55.73006 11.29707,55.73032 11.29583,55.73113 11.29429,55.73205 11.29407,55.73222 11.29394,55.7324 11.29398,55.73281 11.29557,55.7384 11.2957,55.73854 11.29616,55.73889 11.29925,55.7411 11.29924,55.7411 11.29953,55.7413 11.29991,55.74146 11.30265,55.74236 11.30303,55.74243 11.30378,55.74247 11.30393,55.74251 11.30532,55.74336 11.30562,55.7437 11.30739,55.74715 11.30745,55.74746 11.30833,55.74759 11.30886,55.74761 11.31237,55.74728 11.31244,55.7473 11.31253,55.74734 11.31263,55.74749 11.31365,55.75009 11.31379,55.75033 11.31404,55.75059 11.31455,55.75091 11.31481,55.75102 11.31539,55.75119 11.31593,55.75127 11.31763,55.75142 11.31762,55.75142 11.3184,55.75155 11.31887,55.75168 11.31956,55.75192 11.32023,55.75226 11.32093,55.75271 11.32125,55.75292 11.3223,55.75286 11.3235,55.75283 11.32582,55.75292 11.32647,55.75289 11.32712,55.75269 11.32899,55.75201 11.32969,55.75181 11.3359,55.75031 11.33771,55.7499 11.33815,55.74973 11.33843,55.75029 11.33843,55.75028 11.33866,55.7508 11.3387,55.7512 11.33858,55.75224 11.33828,55.75347 11.33823,55.75382 11.3383,55.75395 11.33849,55.75402 11.34017,55.75442 11.343,55.75531 11.34522,55.75596 11.34521,55.75596 11.34747,55.75657 11.34964,55.75727 11.35174,55.75815 11.35338,55.75902 11.35367,55.75908 11.35387,55.75905 11.35431,55.75891 11.35463,55.7591 11.35463,55.75909 11.35536,55.75955 11.35721,55.76131 11.35737,55.7614 11.36314,55.75928 11.36597,55.75828 11.36656,55.7584 11.36838,55.75776 11.36852,55.75773 11.3687,55.75773 11.36888,55.75781 11.3716,55.76011 11.37204,55.76039 11.37228,55.76049 11.37257,55.76059 11.37324,55.76071 11.37396,55.76071 11.37551,55.76047 11.37551,55.76047 11.37562,55.76083 11.3754,55.76145 11.3754,55.76145 11.37477,55.76291 11.37475,55.76319 11.37553,55.76446 11.37647,55.7651 11.37686,55.76521 11.37686,55.76521 11.37605,55.76707 11.37579,55.76796 11.37573,55.76859 11.37577,55.76926 11.37591,55.7698 11.37619,55.77048 11.37663,55.77119 11.37706,55.7717 11.37772,55.7723 11.37935,55.77352 11.38049,55.77428 11.38151,55.77482 11.38227,55.77514 11.38495,55.7761 11.38495,55.7761 11.38621,55.77659 11.38731,55.7771 11.38858,55.77783 11.38969,55.77857 11.39025,55.77888 11.39161,55.77948 11.39231,55.77974 11.39196,55.78003 11.3916,55.78025 11.39004,55.78091 11.38891,55.78155 11.38861,55.78193 11.38682,55.78511 11.38682,55.78511 11.3859,55.78678 11.38552,55.78827 11.38538,55.7884 11.38425,55.78897 11.384,55.78913 11.38209,55.79108 11.38011,55.79301 11.37978,55.79344 11.37875,55.79537 11.38202,55.79616 11.38234,55.79639 11.38311,55.79705 11.38311,55.79704 11.38347,55.79736 11.38366,55.79745 11.38671,55.79761 11.38742,55.79769 11.38769,55.79783 11.38814,55.79821 11.39083,55.80061 11.39155,55.80108 11.39252,55.80162 11.39485,55.80327 11.39485,55.80326 11.39547,55.80374 11.39579,55.80403 11.39602,55.80433 11.3962,55.80475 11.39645,55.80512 11.39773,55.80644 11.39791,55.80671 11.39812,55.80727 11.39859,55.80777 11.3992,55.8086 11.40142,55.81226 11.40168,55.81348 11.40183,55.81386 11.40196,55.81397 11.40223,55.81407 11.40303,55.81405 11.40335,55.81409 11.40415,55.81492 11.40505,55.81566 11.40562,55.81608 11.40588,55.81635 11.40609,55.81673 11.40614,55.81736 11.40974,55.81987 11.41097,55.82067 11.41096,55.82067 11.41291,55.82212 11.41737,55.82482 11.41736,55.82482 11.42145,55.82741 11.42193,55.82757 11.42401,55.82811 11.42635,55.82854 11.42634,55.82854 11.42966,55.82915 11.42997,55.82915 11.43076,55.82902 11.43076,55.82903 11.4317,55.82891 11.43698,55.8284 11.43753,55.8284 11.43919,55.82852 11.43919,55.82852 11.44097,55.82867 11.44129,55.82867 11.44157,55.82863 11.44362,55.82813 11.44527,55.82752 11.4459,55.82742 11.44698,55.82733 11.44698,55.82733 11.44878,55.82715 11.44965,55.82709 11.44991,55.82703 11.45092,55.82751 11.45092,55.8275 11.45162,55.82776 11.45331,55.82812 11.45483,55.82867 11.45509,55.82909 11.45537,55.8297 11.45543,55.82969 11.45543,55.82969 11.45554,55.82972 11.45785,55.83092 11.45945,55.83204 11.45944,55.83204 11.4624,55.83406 11.46281,55.83423 11.46614,55.83533 11.47143,55.83717 11.47564,55.83932 11.47564,55.83932 11.47622,55.83952 11.47682,55.83969 11.47732,55.83971 11.47816,55.8397 11.4785,55.83966 11.47952,55.83942 11.48077,55.83903 11.48077,55.83903 11.48241,55.83883 11.48287,55.83865 11.48324,55.83878 11.48351,55.83895 11.48494,55.84008 11.48516,55.8402 11.48544,55.84023 11.48963,55.84037 11.48963,55.84037 11.49014,55.84037 11.48952,55.83937 11.48821,55.83794 11.48777,55.83712 11.48777,55.83711 11.48755,55.83665 11.48742,55.83651 11.48705,55.83622 11.48696,55.83609 11.48686,55.83571 11.48674,55.83558 11.48702,55.83544 11.48719,55.83553 11.48719,55.83552 11.48776,55.83586 11.48841,55.83609 11.48896,55.83611 11.48953,55.83609 11.49078,55.83676 11.49147,55.83719 11.49288,55.83792 11.49287,55.83792 11.49363,55.83833 11.49411,55.83871 11.49535,55.83917 11.49825,55.83985 11.49864,55.83988 11.49995,55.83978 11.50049,55.8398 11.50129,55.83999 11.50182,55.84019 11.502,55.84031 11.50212,55.84045 11.5026,55.84118 11.50314,55.8421 11.50418,55.84294 11.50449,55.84311 11.50474,55.84317 11.50473,55.84317 11.50563,55.84331 11.506,55.84338 11.50616,55.84343 11.50735,55.8442 11.50844,55.84483 11.50895,55.84326 11.50895,55.84326 11.50913,55.84275 11.50975,55.84195 11.50986,55.84176 11.51016,55.84098 11.51038,55.83976 11.51035,55.83932 11.51009,55.83886 11.5091,55.83779',
			popupContent: '4. etape, Høng–Asnæs Indelukke, 105 km'
		},

		circuit: {
			coordinates: '11.5072774887085,55.8358554217677 11.50726,55.83585 11.50668,55.83526 11.50637,55.83505 11.50536,55.83455 11.50516,55.83437 11.50552,55.83432 11.50642,55.83431 11.50727,55.83439 11.50913,55.83463 11.50977,55.83466 11.51101,55.83454 11.51205,55.83436 11.51268,55.8342 11.51423,55.83365 11.51468,55.83346 11.51531,55.83305 11.51707,55.83226 11.51835,55.83181 11.51982,55.83139 11.52012,55.83121 11.5202,55.83106 11.52052,55.83074 11.52082,55.83051 11.52214,55.82973 11.52261,55.82953 11.52339,55.82928 11.52553,55.82848 11.5299,55.82675 11.53072,55.82645 11.53134,55.82628 11.53146,55.82618 11.53155,55.82587 11.53155,55.82587 11.53156,55.82581 11.53166,55.82597 11.53429,55.82836 11.53521,55.82987 11.53535,55.83001 11.53901,55.83217 11.539,55.83217 11.54053,55.83308 11.5431,55.8338 11.54938,55.83674 11.55014,55.8372 11.55053,55.83732 11.55144,55.83737 11.551,55.83753 11.55049,55.83784 11.55037,55.83799 11.54905,55.84117 11.54881,55.84154 11.54844,55.84193 11.54845,55.84193 11.54188,55.84665 11.54189,55.84681 11.54321,55.84783 11.54405,55.84857 11.54468,55.85189 11.54386,55.85174 11.54341,55.85171 11.54341,55.85171 11.54295,55.85173 11.54213,55.85187 11.53518,55.85342 11.53385,55.85375 11.52998,55.85141 11.52997,55.85141 11.52937,55.8511 11.52884,55.85092 11.52805,55.85075 11.52735,55.85068 11.51757,55.85088 11.51757,55.85088 11.5168,55.85087 11.51582,55.85078 11.51496,55.85062 11.5131,55.85019 11.50247,55.84766 11.49632,55.84626 11.49465,55.84571 11.49388,55.84543 11.49349,55.84525 11.49253,55.84466 11.49223,55.84441 11.49191,55.84401 11.49003,55.84014 11.48952,55.83937 11.48821,55.83794 11.48755,55.83665 11.48742,55.83651 11.48705,55.83622 11.48691,55.83601 11.48686,55.83571 11.48674,55.83558 11.48702,55.83544 11.48782,55.83589 11.48782,55.83588 11.48841,55.83609 11.48896,55.83611 11.48953,55.83609 11.49078,55.83676 11.49147,55.83719 11.49313,55.83806 11.49313,55.83805 11.49363,55.83833 11.49411,55.83871 11.49535,55.83917 11.49825,55.83985 11.49864,55.83988 11.49995,55.83978 11.50049,55.8398 11.50129,55.83999 11.50182,55.84019 11.502,55.84031 11.50212,55.84045 11.5026,55.84118 11.50314,55.8421 11.50418,55.84294 11.50449,55.84311 11.50493,55.84321 11.506,55.84338 11.50616,55.84343 11.50735,55.8442 11.50844,55.84483 11.50846,55.84479 11.50846,55.84479 11.50911,55.8428 11.50975,55.84195 11.51016,55.84098 11.51038,55.83976 11.51038,55.83946 11.51029,55.83919 11.51009,55.83886 11.50735,55.83594',
			popupContent: 'Rundstrækning Asnæs Indelukke'
		},

		moreInfo: 'http://www.postdanmarkrundt.dk/index.php?p=menu/side.php&menu=28&side=154'

	});

});