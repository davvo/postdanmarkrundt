/*global L, define */

define(function (require) {

	"use strict";

	return require('Etape').extend({

		start: {
			coordinates: [9.52731370925903, 56.1531991386967],
			popupContent: 'Start Etape 1',
			iconUrl: 'img/start-1.png'
		},

		stop: {
			coordinates: [8.48638, 55.62312],
			popupContent: 'Mål Etape 1',
			iconUrl: 'img/finish.png'
		},

		track: {
			coordinates: '9.52731370925903,56.1531991386967 9.52728,56.1532 9.52708,56.15239 9.52676,56.15174 9.52625,56.1511 9.5242,56.14887 9.52262,56.14705 9.52097,56.14527 9.52039,56.14477 9.51973,56.14434 9.51897,56.14392 9.51772,56.1434 9.5137,56.14216 9.50655,56.14007 9.50484,56.1395 9.50253,56.13847 9.50124,56.13785 9.50073,56.13755 9.49997,56.13706 9.49845,56.13582 9.49792,56.13532 9.49733,56.13462 9.49695,56.13391 9.49568,56.13092 9.49442,56.12772 9.49406,56.12695 9.4937,56.12646 9.49328,56.12605 9.49177,56.1248 9.49137,56.12426 9.49127,56.12391 9.49125,56.12364 9.49137,56.12311 9.49171,56.12262 9.49264,56.12178 9.49291,56.12144 9.49314,56.12088 9.49315,56.12048 9.49302,56.12005 9.49282,56.1197 9.48939,56.11528 9.48912,56.11503 9.48876,56.11478 9.48822,56.11449 9.47782,56.10986 9.4769,56.10943 9.47624,56.10903 9.47588,56.10873 9.4756,56.10844 9.47424,56.10613 9.47399,56.10586 9.47357,56.10551 9.47024,56.1036 9.46985,56.10327 9.46971,56.10309 9.46958,56.10281 9.46955,56.10237 9.46999,56.10098 9.46991,56.10066 9.46978,56.10047 9.46953,56.10026 9.46927,56.10013 9.46565,56.09882 9.45765,56.0961 9.45112,56.0936 9.45064,56.09344 9.44868,56.09305 9.44851,56.09294 9.44817,56.09162 9.44817,56.09162 9.44815,56.09172 9.44696,56.09185 9.44269,56.09247 9.44204,56.09241 9.44021,56.09228 9.43625,56.09228 9.43582,56.09221 9.43559,56.09212 9.43492,56.09169 9.42919,56.08758 9.42895,56.08727 9.42887,56.08705 9.42864,56.08581 9.4283,56.08551 9.42184,56.08223 9.42131,56.08191 9.4196,56.08077 9.4173,56.07934 9.41701,56.0791 9.41489,56.07696 9.41442,56.07672 9.41379,56.07662 9.4078,56.07613 9.40492,56.07594 9.40205,56.0754 9.40096,56.07523 9.39172,56.07343 9.38906,56.07295 9.38498,56.07228 9.38497,56.07228 9.3827,56.0719 9.38608,56.07168 9.38771,56.07164 9.38841,56.07157 9.39653,56.06921 9.39653,56.06921 9.40606,56.0664 9.40686,56.06612 9.41173,56.06328 9.41527,56.06114 9.427,56.05419 9.42952,56.05264 9.42992,56.05235 9.43068,56.05154 9.43269,56.05001 9.43288,56.04979 9.43372,56.04833 9.43425,56.04768 9.43492,56.04671 9.43513,56.04657 9.43554,56.0464 9.43767,56.04595 9.438,56.04583 9.43864,56.04548 9.4391,56.04533 9.43989,56.04522 9.44024,56.04514 9.44126,56.04469 9.44166,56.04455 9.44299,56.04422 9.44441,56.04398 9.44484,56.04384 9.44522,56.04359 9.44596,56.04276 9.4463,56.04223 9.44672,56.0414 9.44672,56.0414 9.44835,56.04133 9.44876,56.04131 9.44965,56.04122 9.45031,56.04104 9.44986,56.04012 9.44985,56.04012 9.44853,56.03765 9.44825,56.03744 9.44681,56.03685 9.44661,56.03674 9.44642,56.03656 9.44278,56.03116 9.44178,56.03012 9.44162,56.02973 9.44137,56.0285 9.44044,56.02691 9.44015,56.02586 9.43992,56.02524 9.43933,56.02429 9.43933,56.02428 9.43897,56.02359 9.43881,56.02339 9.43796,56.02265 9.43769,56.02226 9.43618,56.02042 9.43528,56.01952 9.43516,56.01935 9.43517,56.0187 9.43502,56.0182 9.43491,56.01794 9.43425,56.01689 9.43415,56.01651 9.43412,56.01621 9.43398,56.01574 9.43342,56.0144 9.43344,56.01404 9.43331,56.01378 9.43312,56.0136 9.43261,56.01333 9.43056,56.01261 9.43027,56.01246 9.4301,56.01222 9.43009,56.01175 9.43002,56.01161 9.42988,56.01147 9.42939,56.01122 9.42909,56.01117 9.42892,56.01118 9.42704,56.01139 9.42593,56.01058 9.42592,56.01058 9.4188,56.00564 9.41764,56.00479 9.41062,55.9999 9.40773,55.99785 9.40773,55.99785 9.41314,55.99605 9.41427,55.99572 9.41823,55.99497 9.41823,55.99497 9.43106,55.99168 9.43214,55.99134 9.43301,55.991 9.43402,55.99045 9.43999,55.98676 9.44074,55.98615 9.44041,55.98317 9.4404,55.98317 9.42463,55.97623 9.41532,55.9721 9.41358,55.97138 9.41284,55.97112 9.41192,55.97088 9.41069,55.97062 9.40789,55.97017 9.40649,55.96999 9.40576,55.96985 9.40472,55.96972 9.40159,55.96919 9.39997,55.96904 9.39982,55.96906 9.39927,55.96905 9.39922,55.96911 9.39901,55.96918 9.39876,55.96918 9.39865,55.96916 9.39856,55.96909 9.3985,55.96899 9.39853,55.96887 9.39843,55.96885 9.39816,55.96871 9.39766,55.96858 9.39696,55.96831 9.39614,55.96792 9.39488,55.96626 9.39437,55.9649 9.39437,55.96489 9.39429,55.96472 9.3942,55.96468 9.39313,55.96454 9.39299,55.9645 9.3927,55.96449 9.39162,55.96456 9.39132,55.9645 9.39121,55.96441 9.39051,55.96323 9.38832,55.96299 9.38831,55.96299 9.3838,55.96247 9.37893,55.96249 9.37872,55.96227 9.3774,55.95948 9.3774,55.95947 9.3762,55.95696 9.37544,55.9556 9.37518,55.95541 9.37247,55.95392 9.36908,55.95198 9.36583,55.95019 9.36478,55.94942 9.36424,55.94895 9.36405,55.94874 9.36295,55.94682 9.36275,55.94661 9.35484,55.94321 9.3542,55.94299 9.35349,55.94281 9.34754,55.9415 9.34513,55.94121 9.34429,55.94107 9.34344,55.94086 9.34104,55.94004 9.34088,55.93994 9.34074,55.93979 9.34007,55.93822 9.34008,55.93789 9.34022,55.93769 9.34053,55.93741 9.34189,55.93654 9.34212,55.93636 9.34221,55.93622 9.34223,55.93607 9.34216,55.93586 9.34206,55.93575 9.34132,55.93522 9.34076,55.93491 9.34024,55.9347 9.34024,55.93469 9.3397,55.93443 9.33936,55.9337 9.33939,55.9335 9.33916,55.93315 9.33914,55.93301 9.3392,55.93275 9.33937,55.93261 9.33974,55.93245 9.34081,55.93218 9.34274,55.93196 9.3429,55.93191 9.34314,55.93174 9.34387,55.93093 9.34387,55.93093 9.34475,55.92988 9.34511,55.92903 9.34509,55.92761 9.34494,55.92625 9.34505,55.92596 9.34526,55.92572 9.34577,55.92537 9.34969,55.92295 9.34991,55.92263 9.34958,55.92175 9.34925,55.92163 9.34594,55.91986 9.34593,55.91986 9.34362,55.91864 9.34254,55.91813 9.33419,55.91445 9.33337,55.91421 9.33217,55.91397 9.33216,55.91397 9.33107,55.91378 9.32861,55.91349 9.32268,55.91269 9.30474,55.91017 9.30387,55.9101 9.30284,55.91009 9.3023,55.91004 9.29399,55.90857 9.29225,55.9081 9.28917,55.90716 9.2873,55.90656 9.28694,55.90648 9.28632,55.90646 9.28361,55.90651 9.27993,55.90651 9.27926,55.90641 9.27753,55.9059 9.27683,55.90577 9.27603,55.90572 9.2752,55.90575 9.2723,55.90615 9.2723,55.90615 9.26977,55.90652 9.25999,55.90797 9.25923,55.90735 9.25922,55.90735 9.25909,55.90693 9.25906,55.90638 9.25917,55.90582 9.25933,55.90562 9.25977,55.90535 9.26174,55.90451 9.2632,55.9036 9.26291,55.90231 9.26282,55.90181 9.26284,55.90108 9.26284,55.90108 9.26428,55.89321 9.26422,55.89321 9.26422,55.8932 9.26428,55.89321 9.26502,55.88839 9.26516,55.88789 9.2653,55.88754 9.2661,55.88641 9.2663,55.8863 9.26687,55.88569 9.26687,55.88569 9.26646,55.88342 9.26575,55.87867 9.26558,55.87802 9.26532,55.8774 9.26498,55.87675 9.26461,55.87619 9.26419,55.87567 9.26373,55.87518 9.2632,55.87472 9.25724,55.86966 9.25603,55.86857 9.25565,55.8683 9.25553,55.86832 9.25536,55.8683 9.25516,55.8682 9.25514,55.86806 9.25524,55.86796 9.25515,55.86767 9.25482,55.86715 9.25474,55.86694 9.25468,55.86656 9.25469,55.86621 9.25448,55.8662 9.25431,55.86615 9.25419,55.86601 9.25422,55.8659 9.25434,55.86581 9.25454,55.86576 9.25476,55.86577 9.25476,55.86518 9.25463,55.86474 9.25403,55.86396 9.25363,55.86353 9.25299,55.86326 9.25282,55.86316 9.2528,55.86282 9.25195,55.86196 9.25117,55.8611 9.25033,55.8603 9.24921,55.8589 9.24911,55.8587 9.24758,55.85669 9.24666,55.85566 9.24589,55.85492 9.24589,55.85487 9.24459,55.85374 9.24266,55.85215 9.23971,55.84933 9.23971,55.84933 9.23991,55.84911 9.24031,55.84847 9.24024,55.84815 9.2398,55.84705 9.23992,55.84679 9.24045,55.84632 9.24081,55.84619 9.24062,55.8459 9.24061,55.8459 9.23986,55.84545 9.23854,55.84478 9.23854,55.84478 9.23917,55.84416 9.23955,55.84389 9.24077,55.84333 9.24802,55.83938 9.24802,55.83937 9.24732,55.83899 9.24629,55.83861 9.24535,55.83842 9.24432,55.83831 9.24344,55.83832 9.23375,55.83906 9.23254,55.8391 9.23159,55.83909 9.2308,55.83904 9.23013,55.83897 9.22821,55.83825 9.2283,55.83743 9.22826,55.8372 9.22554,55.83518 9.22505,55.83487 9.22504,55.83487 9.22395,55.83415 9.22078,55.83182 9.21539,55.82721 9.21443,55.82647 9.20368,55.81901 9.19962,55.81663 9.19788,55.81564 9.19787,55.81564 9.19418,55.8135 9.19385,55.8132 9.19334,55.81195 9.19336,55.81089 9.19336,55.81089 9.19335,55.81063 9.19318,55.81033 9.1921,55.80922 9.19405,55.80911 9.19405,55.80911 9.19574,55.80901 9.2001,55.80853 9.20088,55.8084 9.20286,55.80788 9.20324,55.80782 9.20624,55.80749 9.22334,55.80701 9.22381,55.80692 9.22559,55.80645 9.22749,55.80535 9.2266,55.80457 9.2266,55.80457 9.22543,55.80355 9.2253,55.80341 9.22521,55.80317 9.22533,55.80174 9.22553,55.80087 9.22638,55.79876 9.22638,55.79876 9.22871,55.79564 9.22898,55.79542 9.23001,55.79478 9.23018,55.79462 9.23024,55.79445 9.23013,55.79354 9.23017,55.79332 9.23057,55.79286 9.23108,55.79262 9.23084,55.79227 9.23084,55.79226 9.23058,55.79177 9.23046,55.79116 9.23023,55.78355 9.23029,55.78285 9.23038,55.78244 9.23058,55.78207 9.23087,55.78171 9.23117,55.78143 9.23541,55.77772 9.23627,55.77692 9.2365,55.77655 9.23662,55.7756 9.23717,55.77445 9.23738,55.77423 9.23796,55.77389 9.23819,55.77362 9.23847,55.77262 9.23842,55.77209 9.23974,55.77186 9.24082,55.77175 9.24082,55.77175 9.24306,55.7715 9.24316,55.77068 9.24314,55.77032 9.24301,55.76975 9.24301,55.76975 9.24303,55.76958 9.24364,55.76909 9.24393,55.76859 9.24419,55.76824 9.24503,55.76746 9.24533,55.76709 9.24564,55.76606 9.24585,55.76582 9.24621,55.76553 9.24638,55.76531 9.24645,55.76496 9.24634,55.76459 9.24601,55.76407 9.24577,55.76386 9.24563,55.76379 9.24529,55.76369 9.24382,55.76354 9.24241,55.76346 9.24156,55.76316 9.24134,55.76312 9.241,55.7631 9.24018,55.76312 9.23916,55.7627 9.23832,55.76245 9.23716,55.76217 9.23464,55.76169 9.23443,55.76161 9.23298,55.76049 9.2301,55.75859 9.22963,55.75822 9.2292,55.75779 9.22892,55.75761 9.22834,55.75737 9.22786,55.75729 9.22733,55.75728 9.22691,55.75731 9.22606,55.7575 9.22578,55.75748 9.22538,55.75741 9.22403,55.75738 9.22379,55.75734 9.22291,55.75693 9.22205,55.75668 9.2205,55.75597 9.21999,55.75587 9.21828,55.75569 9.21798,55.75568 9.21715,55.7557 9.21324,55.75616 9.20971,55.75622 9.20914,55.75618 9.20866,55.75607 9.20815,55.75587 9.20647,55.75454 9.20628,55.75443 9.20602,55.75437 9.20431,55.75443 9.2043,55.75443 9.20333,55.7543 9.2023,55.75408 9.20177,55.75389 9.20112,55.75351 9.20081,55.75339 9.19949,55.75304 9.19685,55.75222 9.19684,55.75222 9.19678,55.7522 9.19635,55.75272 9.19617,55.75309 9.196,55.75332 9.19542,55.75388 9.195,55.75412 9.19475,55.75422 9.19441,55.75429 9.19398,55.75428 9.19307,55.75417 9.19043,55.75411 9.18934,55.75403 9.18757,55.75405 9.18731,55.75404 9.18622,55.75378 9.1852,55.75358 9.1846,55.75342 9.18422,55.75337 9.18028,55.75356 9.18028,55.75356 9.18004,55.75358 9.17991,55.75339 9.17963,55.7533 9.17837,55.7531 9.17758,55.75301 9.1759,55.75311 9.17208,55.75289 9.17126,55.75281 9.17047,55.75285 9.16607,55.75323 9.16603,55.75323 9.16389,55.75342 9.16324,55.75345 9.15077,55.75304 9.15029,55.75299 9.14643,55.75221 9.14546,55.75204 9.14243,55.75209 9.14054,55.75221 9.13867,55.75218 9.13831,55.75071 9.13832,55.74958 9.13832,55.74958 9.13841,55.74914 9.13834,55.74892 9.13817,55.74885 9.13806,55.74874 9.13806,55.74859 9.13823,55.74845 9.13821,55.74824 9.13779,55.74767 9.13619,55.74541 9.1358,55.74501 9.13525,55.74458 9.13525,55.74457 9.13481,55.74429 9.12436,55.73815 9.12386,55.73773 9.12369,55.73769 9.12362,55.73763 9.12362,55.73752 9.1237,55.73746 9.12413,55.73741 9.12471,55.7372 9.12565,55.73697 9.12565,55.73697 9.13103,55.73565 9.13271,55.73506 9.13329,55.73474 9.13371,55.73424 9.1338,55.7339 9.13301,55.73397 9.13269,55.73406 9.13201,55.73434 9.13163,55.73446 9.1311,55.73454 9.13072,55.73456 9.13009,55.73451 9.12814,55.73405 9.12813,55.73405 9.12668,55.73369 9.12477,55.7333 9.12424,55.73317 9.11926,55.73173 9.11891,55.73172 9.11834,55.73187 9.11834,55.73187 9.11743,55.73066 9.11591,55.73097 9.11567,55.73101 9.11567,55.73101 9.11423,55.73129 9.11409,55.73135 9.11378,55.73171 9.11309,55.73206 9.10908,55.73372 9.10839,55.73397 9.10829,55.73387 9.10829,55.73387 9.10797,55.73364 9.10772,55.73361 9.10711,55.73391 9.10648,55.73417 9.10577,55.7344 9.10445,55.73469 9.1018,55.73522 9.1018,55.73522 9.09505,55.73649 9.09503,55.73666 9.09485,55.73678 9.0946,55.73683 9.09427,55.73676 9.09417,55.7367 9.09411,55.73658 9.09415,55.73643 9.0927,55.73599 9.09206,55.73576 9.09126,55.73533 9.09098,55.73512 9.09062,55.73474 9.09062,55.73474 9.09039,55.73442 9.09014,55.73395 9.08889,55.73236 9.08836,55.73187 9.08799,55.7316 9.08555,55.73026 9.08207,55.72871 9.07259,55.72549 9.06618,55.72407 9.0587,55.7225 9.05869,55.7225 9.05551,55.72182 9.05466,55.72144 9.0542,55.72114 9.05373,55.72068 9.05348,55.72013 9.05338,55.71937 9.05321,55.71897 9.05297,55.71866 9.05272,55.71842 9.05226,55.71809 9.04194,55.71235 9.04162,55.71212 9.0412,55.71167 9.04011,55.70983 9.03972,55.70945 9.03911,55.70904 9.04004,55.70848 9.04026,55.70831 9.04035,55.70821 9.04074,55.70731 9.04082,55.70695 9.04113,55.70345 9.04196,55.70332 9.04196,55.70332 9.0617,55.70013 9.06258,55.70005 9.06539,55.70002 9.06595,55.69997 9.06627,55.69989 9.07257,55.69769 9.07289,55.69758 9.07289,55.69758 9.07411,55.69714 9.07557,55.6968 9.07628,55.69659 9.0819,55.69428 9.08298,55.69385 9.08371,55.69359 9.09069,55.69154 9.09189,55.69113 9.09232,55.69095 9.0942,55.68998 9.09643,55.68896 9.10269,55.68592 9.10384,55.68524 9.1043,55.68489 9.10577,55.68299 9.10419,55.68255 9.10353,55.68232 9.10255,55.68188 9.1021,55.68158 9.10209,55.68158 9.10073,55.68048 9.10008,55.67988 9.09502,55.67496 9.09293,55.67302 9.09292,55.67302 9.09205,55.67205 9.09177,55.67164 9.0912,55.67035 9.09064,55.66797 9.09053,55.66706 9.09062,55.66545 9.09079,55.66484 9.091,55.66433 9.09157,55.66331 9.09317,55.66054 9.0934,55.65996 9.09354,55.65925 9.09355,55.65862 9.09351,55.65826 9.09242,55.653 9.09112,55.6484 9.09044,55.64684 9.0893,55.64488 9.08338,55.63537 9.08337,55.63537 9.08228,55.63362 9.08187,55.63333 9.08056,55.63263 9.08042,55.63238 9.08033,55.63176 9.0802,55.63167 9.07988,55.63158 9.07854,55.63135 9.07821,55.63126 9.0778,55.63108 9.07728,55.63071 9.07707,55.63048 9.07679,55.62976 9.07661,55.62949 9.07637,55.62927 9.07497,55.6282 9.07457,55.62801 9.07362,55.62765 9.07361,55.62765 9.07212,55.62713 9.07118,55.62686 9.06098,55.62451 9.04148,55.62015 9.03677,55.61912 9.03361,55.61848 9.03361,55.61848 9.01536,55.61479 9.01535,55.61479 9.00584,55.61289 9.00492,55.61277 8.99754,55.612 8.99688,55.6119 8.99638,55.61176 8.99588,55.61155 8.99319,55.60955 8.99259,55.60916 8.99215,55.60898 8.99179,55.60888 8.9764,55.60538 8.97518,55.60513 8.97468,55.6051 8.97389,55.60509 8.9709,55.60516 8.94718,55.60593 8.94718,55.60593 8.94506,55.60611 8.94014,55.60657 8.93972,55.60557 8.93961,55.60504 8.93961,55.60504 8.93949,55.60331 8.93931,55.60179 8.93922,55.60156 8.93914,55.60149 8.93902,55.60141 8.93854,55.60127 8.93879,55.60049 8.93885,55.59994 8.93885,55.59994 8.93881,55.59902 8.93839,55.59682 8.93802,55.59513 8.93731,55.59233 8.93438,55.59353 8.93438,55.59353 8.93234,55.59435 8.93172,55.59479 8.92354,55.60346 8.91402,55.61217 8.91279,55.61302 8.91092,55.61441 8.90847,55.61574 8.90752,55.6163 8.90417,55.61852 8.90348,55.61895 8.90171,55.61993 8.89991,55.62086 8.89703,55.62199 8.89598,55.62105 8.89579,55.62097 8.89563,55.62098 8.89107,55.62182 8.88388,55.62321 8.88388,55.62321 8.87657,55.62484 8.87294,55.62573 8.86918,55.62661 8.86899,55.62644 8.86866,55.62629 8.85984,55.62349 8.85983,55.62349 8.85709,55.62259 8.85655,55.62235 8.85612,55.62209 8.85554,55.62155 8.85188,55.61668 8.84681,55.61315 8.84633,55.61292 8.84518,55.61256 8.84517,55.61256 8.83957,55.61088 8.83645,55.60958 8.83551,55.60929 8.8347,55.60913 8.82819,55.60835 8.8277,55.60828 8.82709,55.60816 8.82541,55.60746 8.82186,55.60628 8.819,55.60516 8.8141,55.60395 8.81331,55.60372 8.81331,55.60371 8.80676,55.60141 8.80618,55.60109 8.80508,55.60013 8.80358,55.59921 8.80357,55.59921 8.80354,55.59919 8.80257,55.59956 8.80238,55.59966 8.80239,55.59985 8.80253,55.60013 8.80236,55.60014 8.80126,55.59995 8.79884,55.59998 8.79637,55.59991 8.79357,55.59975 8.79311,55.59976 8.79119,55.59991 8.79011,55.59989 8.78935,55.59976 8.78869,55.59957 8.78818,55.59935 8.78726,55.5988 8.78725,55.5988 8.78468,55.59723 8.78412,55.59695 8.781,55.59562 8.77797,55.59448 8.77718,55.59424 8.77652,55.59409 8.77253,55.59363 8.77184,55.59349 8.76307,55.59031 8.76307,55.5903 8.76072,55.58946 8.75653,55.58809 8.7558,55.58795 8.74764,55.58692 8.74303,55.58599 8.74272,55.58587 8.74261,55.58579 8.74087,55.58613 8.74087,55.58613 8.74027,55.58624 8.73885,55.58667 8.73856,55.58678 8.73819,55.58708 8.73688,55.58716 8.73531,55.58705 8.73405,55.58705 8.73327,55.58717 8.7313,55.58764 8.73062,55.58775 8.7266,55.58796 8.72604,55.58796 8.72039,55.58757 8.71444,55.58657 8.70496,55.58447 8.69853,55.58312 8.69799,55.58304 8.69729,55.58303 8.69654,55.5831 8.69564,55.58332 8.69368,55.58223 8.69367,55.58223 8.6869,55.57846 8.6852,55.57755 8.6839,55.5769 8.68316,55.57718 8.68267,55.57731 8.68151,55.57747 8.68071,55.57746 8.6802,55.57741 8.67932,55.57725 8.67931,55.57725 8.67741,55.57687 8.67457,55.57603 8.67305,55.57571 8.66989,55.57474 8.66751,55.57383 8.66721,55.57387 8.66768,55.57492 8.66761,55.57529 8.6675,55.57555 8.6675,55.57555 8.66748,55.57558 8.66552,55.57593 8.66514,55.57602 8.66489,55.57612 8.65602,55.5806 8.65602,55.5806 8.65372,55.58176 8.65351,55.5819 8.65337,55.58203 8.65325,55.58224 8.65283,55.58328 8.65274,55.58339 8.6525,55.58357 8.65135,55.5841 8.64712,55.58612 8.64712,55.58612 8.63981,55.58959 8.63945,55.58959 8.63866,55.5912 8.63719,55.59549 8.6372,55.59549 8.63652,55.5974 8.63178,55.60511 8.63171,55.6054 8.63165,55.60629 8.63152,55.6063 8.63152,55.6063 8.63165,55.60629 8.63151,55.60841 8.63141,55.60876 8.6312,55.60908 8.62748,55.61268 8.62712,55.61311 8.62656,55.61395 8.6263,55.61423 8.62488,55.6154 8.62425,55.6158 8.62361,55.61613 8.6212,55.61703 8.62069,55.61723 8.62031,55.61743 8.62,55.61766 8.61969,55.618 8.61915,55.61843 8.61845,55.61878 8.61508,55.61979 8.60779,55.62191 8.6015,55.62342 8.59788,55.62476 8.5958,55.6255 8.59158,55.62687 8.59102,55.62673 8.59089,55.62689 8.59058,55.62711 8.58739,55.62831 8.58739,55.62831 8.58629,55.62872 8.58543,55.629 8.58431,55.62922 8.58413,55.62932 8.5841,55.62965 8.58392,55.62963 8.58326,55.63002 8.58203,55.63032 8.58016,55.63103 8.58016,55.63103 8.57725,55.63215 8.5763,55.63256 8.57554,55.633 8.57385,55.63415 8.57259,55.63507 8.56994,55.63789 8.56971,55.63818 8.5703,55.6384 8.57444,55.64028 8.57443,55.64028 8.57862,55.64217 8.57947,55.64235 8.57989,55.64237 8.58059,55.64233 8.58139,55.64248 8.58178,55.64258 8.58214,55.6428 8.5835,55.64395 8.58272,55.64448 8.58168,55.64507 8.58094,55.64554 8.58095,55.64554 8.57813,55.64722 8.57767,55.64754 8.5774,55.64783 8.57699,55.64847 8.57686,55.64871 8.57685,55.64895 8.57712,55.6495 8.57744,55.64995 8.57802,55.65022 8.57903,55.65052 8.57965,55.65085 8.58046,55.65137 8.58218,55.65237 8.58262,55.65251 8.58842,55.65361 8.59084,55.65436 8.5912,55.65444 8.59441,55.655 8.59843,55.65558 8.59843,55.65558 8.59918,55.65568 8.59967,55.6557 8.59985,55.65675 8.60006,55.6572 8.60018,55.65738 8.6012,55.65841 8.60204,55.66037 8.60315,55.66153 8.59935,55.66217 8.59935,55.66217 8.59302,55.66322 8.58968,55.66368 8.58833,55.66391 8.58076,55.66549 8.58053,55.66551 8.58002,55.66549 8.57955,55.66541 8.57907,55.66529 8.57907,55.66528 8.57865,55.66517 8.57829,55.66513 8.57793,55.66513 8.57344,55.66574 8.57416,55.66673 8.57393,55.66678 8.57273,55.66673 8.57193,55.66677 8.57193,55.66677 8.5714,55.66684 8.565,55.66795 8.56422,55.66815 8.56048,55.66924 8.5598,55.66941 8.55885,55.66956 8.55792,55.66959 8.5569,55.6695 8.54831,55.66809 8.5426,55.66731 8.53871,55.66711 8.53815,55.66705 8.52704,55.66531 8.52653,55.66514 8.52372,55.66356 8.52332,55.66344 8.52196,55.66327 8.52137,55.66326 8.52079,55.66329 8.52029,55.66339 8.51982,55.66355 8.51723,55.66484 8.51667,55.66524 8.5162,55.66578 8.5162,55.66578 8.51586,55.66635 8.51095,55.66486 8.51036,55.66473 8.50402,55.6637 8.50344,55.66354 8.50216,55.66305 8.50139,55.66282 8.50138,55.66282 8.50074,55.6627 8.50016,55.66265 8.49724,55.66257 8.49142,55.66161 8.4909,55.66157 8.48131,55.66164 8.47615,55.66164 8.47123,55.66174 8.46865,55.66175 8.46865,55.66175 8.46795,55.66175 8.46792,55.66179 8.46785,55.66181 8.46579,55.66626 8.46579,55.66626 8.46115,55.67638 8.46115,55.67638 8.46089,55.6768 8.45322,55.68692 8.45153,55.68926 8.44755,55.69437 8.44755,55.69437 8.44424,55.69856 8.44405,55.69888 8.44405,55.69915 8.4325,55.70138 8.43099,55.6993 8.43098,55.6993 8.42674,55.69348 8.42512,55.6913 8.42456,55.69061 8.42363,55.6896 8.41943,55.68591 8.41587,55.6827 8.40822,55.67594 8.40806,55.67567 8.41176,55.66333 8.41176,55.66333 8.4121,55.66218 8.41226,55.66201 8.41254,55.66189 8.42042,55.65902 8.42112,55.65882 8.42192,55.65867 8.42275,55.65856 8.42325,55.65853 8.43322,55.65807 8.43346,55.65586 8.4334,55.65558 8.43313,55.65514 8.43313,55.65514 8.43248,55.65419 8.43193,55.65325 8.4306,55.65073 8.43057,55.65043 8.4308,55.64993 8.43102,55.64959 8.43248,55.64827 8.43279,55.64788 8.43293,55.64755 8.43292,55.64687 8.43305,55.64669 8.43323,55.64666 8.43378,55.64674 8.43389,55.64672 8.43435,55.64655 8.43453,55.64652 8.43585,55.64648 8.43764,55.64635 8.43799,55.64621 8.43855,55.64567 8.43855,55.64567 8.43928,55.64497 8.4439,55.64123 8.44453,55.6407 8.44512,55.64011 8.4457,55.63967 8.44767,55.63856 8.45041,55.63688 8.46154,55.62995 8.46355,55.62864 8.4639,55.62891 8.46444,55.62923 8.46443,55.62923 8.46476,55.62941 8.46556,55.62973 8.46768,55.63041 8.46872,55.63067 8.46978,55.63106 8.47066,55.63128 8.47165,55.63145 8.48125,55.63217 8.48239,55.63219 8.48287,55.63218 8.48428,55.63205 8.48403,55.6309 8.48403,55.63089 8.4835,55.6285 8.4835,55.6285 8.4832,55.62745 8.483,55.62714 8.48229,55.62627 8.48229,55.62627 8.48133,55.62504 8.48092,55.62458 8.48077,55.62461 8.48065,55.62458 8.48056,55.62453 8.48056,55.62443 8.48021,55.62435 8.4802,55.62435 8.479,55.62381 8.47887,55.6237 8.47839,55.62306 8.47823,55.62294 8.47796,55.62282 8.4774,55.62266 8.47716,55.62283 8.47677,55.62272 8.47573,55.62254 8.47606,55.62198 8.47606,55.62198 8.47663,55.62085 8.47799,55.62077 8.47799,55.62077 8.4782,55.62075 8.47826,55.62057 8.47847,55.62041 8.47901,55.62012 8.47917,55.62008 8.47992,55.6201 8.4802570939064,55.6201360632538 8.48044887185097,55.6201602965538 8.48075062036514,55.6200557903408 8.48075,55.62005 8.48091,55.61988 8.48092,55.61988 8.48125,55.61949 8.48125,55.61949 8.48214,55.61787 8.48246,55.61751 8.48273,55.61739 8.48463,55.61709 8.48463,55.61709 8.48466,55.61718 8.48427,55.61791 8.48414,55.61802 8.48388,55.61856 8.48389,55.61856 8.4836,55.61919 8.4829,55.6211 8.4836,55.62147 8.48481,55.62215 8.48503,55.62237 8.48531,55.62244 8.48572,55.62273 8.48571,55.62273 8.48638,55.62312',
			popupContent: '1. etape, Silkeborg-Varde, 180 km'
		},

		circuit: {
			coordinates: '8.48685264587402,55.6234165099798 8.48685,55.62341 8.49031,55.6255 8.48971,55.6258 8.48971,55.6258 8.48692,55.62718 8.48603,55.62626 8.4851,55.62515 8.4851,55.62515 8.48341,55.62589 8.48229,55.62627 8.48229,55.62627 8.48133,55.62504 8.48092,55.62458 8.48077,55.62461 8.48065,55.62458 8.48056,55.62453 8.48056,55.62443 8.48018,55.62434 8.479,55.62381 8.47887,55.6237 8.47839,55.62306 8.47823,55.62294 8.47796,55.62282 8.4774,55.62266 8.47716,55.62283 8.47677,55.62272 8.47579,55.62255 8.47578,55.62255 8.47573,55.62254 8.47656,55.62106 8.47663,55.62085 8.47663,55.62085 8.4782,55.62075 8.4782,55.62075 8.47826,55.62057 8.47847,55.62041 8.47901,55.62012 8.47935,55.62006 8.47964,55.62008 8.47998350858688,55.620104257025 8.4804368019104,55.6201557528112 8.48052799701691,55.6201315195084 8.48074525594711,55.6200618486796 8.48077476024628,55.6200361007333 8.48075,55.62005 8.48115,55.61961 8.48115,55.61961 8.48139,55.61928 8.48214,55.61787 8.48228,55.61767 8.48252,55.61747 8.48253,55.61747 8.48273,55.61739 8.48406,55.6172 8.4844,55.61712 8.4844,55.61712 8.48463,55.61709 8.48466,55.61718 8.48427,55.61791 8.48414,55.61802 8.4835,55.61946 8.4835,55.61946 8.4829,55.6211 8.48394,55.62166 8.48393,55.62166 8.48481,55.62215 8.48503,55.62237 8.48531,55.62244 8.4855,55.6226 8.48678,55.62337',
			popupContent: 'Rundstrækning Varde'
		},

		moreInfo: "http://www.postdanmarkrundt.dk/index.php?p=menu/side.php&menu=28&side=151"

	});

});