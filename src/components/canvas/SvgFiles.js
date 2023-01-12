
const IPFabricPaths = {
  openTag: `<svg width="20px" height="20px" viewBox="0 0 202 202" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`,
  closeTag: `</svg>`,
  svgList: [
    {

      name: "BlueCircle",
      materialName: "BlackMetal",
      depth: 5,
      code: `    
        <path
          id="BlueCircle"
          d="m 164.72134,146.67005 a 17.653392,17.653392 0 1 1 -5.18984,-12.50338 17.719758,17.719758 0 0 1 5.18984,12.50338"
          fill="#546582"
          fill-rule="evenodd"
        />
    `
    },
    {
      name: "blueShape",
      materialName: "BlackMetal",
      depth: 5,
      code: `    
        <path
          id="blueShape"
          d="M 110.36747,128.48573 91.187658,109.43865 C 69.303519,120.57529 44.131529,109.95853 35.157805,89.440216 31.507985,81.094945 31.394848,65.510322 34.923125,57.112941 43.598012,36.466512 68.613212,25.485419 90.656729,36.303164 L 127.02537,8.8729257e-4 H 16.60692 A 16.606334,16.606334 0 0 0 5.8646e-4,16.607221 V 203.06646 A 16.606334,16.606334 0 0 0 16.60692,219.6728 h 38.642734 a 2.0045627,2.0045627 0 0 0 1.41744,-0.58713 l 53.833106,-53.8331 c -5.88532,-11.52566 -5.88532,-25.17481 0,-36.70048"
          fill="#546582"
        />
    `
    }
    ,
    {
      name: "GreyCircle",
      materialName: "WhiteMetal",
      depth: 5,
      code: `    
        <path
          id="GreyCircle"
          d="M 90.457633,73.003644 A 17.719758,17.719758 0 1 1 72.80424,55.350252 17.719758,17.719758 0 0 1 90.457633,73.003644"
          fill="#4e4e50"
          fill-rule="evenodd"
        />
    `
    },
    {
      name: "GreyShape",
      materialName: "WhiteMetal",
      depth: 5,
      code: `    
        <path
          id="GreyShape"
          d="M 162.86309,8.8729257e-4 108.64195,53.89019 c 5.05197,9.627173 5.06491,28.271556 0.26547,37.629597 l 18.91435,18.914353 c 0.90576,-0.47732 1.82756,-0.91899 2.76328,-1.32449 8.35578,-3.62096 23.93951,-3.68748 32.3373,-0.16099 12.75569,5.3565 22.03838,16.972 24.45035,30.59485 1.58795,8.9687 -1.97963,24.13744 -7.39873,31.45812 -11.41918,15.42625 -32.95346,21.50014 -51.42217,12.10343 L 91.917691,219.6728 H 202.9998 c 9.17143,0 16.60634,-7.43491 16.60634,-16.60634 V 16.607221 c 0,-9.1714246 -7.43491,-16.60633370743 -16.60634,-16.60633370743 z"
          fill="#4e4e50"
        />
      `
    }
    ,
    {
      name: "center",
      materialName: "glass",
      depth: 3.5,
      code: `    
        <path
          id = "center"
          d = "M 127.0252,9.9523897e-4 90.656674,36.303019 C 63.376647,22.915656 31.545564,42.913897 31.766231,73.300401 31.986965,103.68691 64.105068,123.22075 91.187792,109.43859 l 19.179588,19.04702 0.13299,0.0664 c -5.88535,11.52569 -5.88535,25.17487 0,36.70056 l -54.420201,54.4202 h 35.837404 l 36.634067,-36.56798 c 23.62469,12.02033 52.26577,-1.27383 58.33451,-27.07651 6.06874,-25.80267 -13.64398,-50.46955 -40.14984,-50.23984 -6.58989,-0.0213 -13.08452,1.57344 -18.91443,4.64579 L 108.90744,91.519771 c 2.93815,-5.728973 4.46271,-12.077867 4.44633,-18.516311 -7.8e-4,-6.658566 -1.61788,-13.217426 -4.71189,-19.1135 L 162.86303,8.6250351e-4 Z M 72.804063,55.350446 c 9.734546,0.03584 17.617026,7.918595 17.653555,17.65314 0.0597,15.819612 -19.063623,23.780477 -30.2486,12.59575 -11.184977,-11.184713 -3.224571,-30.30789 12.595045,-30.24889 z m 74.193327,73.665064 c 4.69696,-0.0186 9.20778,1.83487 12.53422,5.15096 3.3166,3.31667 5.18292,7.81298 5.18988,12.50341 -7.8e-4,15.71126 -18.98089,23.59195 -30.11098,12.50566 -11.13007,-11.0863 -3.32425,-30.09711 12.38688,-30.16003 z"
          fill-rule="evenodd"
        />
    `
    }

    ,
    {

      name: "light1",
      materialName: "neon",
      depth: .1,
      position: [0, 0, 1.9],
      code: `    
        <path
          id = "ligth1"
          d="M 153.23242,2.1425781 C 144.69143,2.5809326 135.98461,1.7027983 127.51756,2.6269536 115.31467,14.65706 103.26114,26.839576 90.908203,38.716797 75.263116,30.30409 54.317095,34.180909 43.049254,48.023647 29.027001,63.692999 31.595144,90.56398 48.437976,103.21567 c 11.828809,9.79357 29.589983,11.21332 42.954602,3.74727 7.286437,5.9197 13.865222,14.73011 22.064452,20.60743 -6.7877,11.48999 -6.8877,26.38484 -0.41211,38.04102 -16.519409,16.7049 -33.464919,33.05487 -49.646483,50.05273 4.40786,4.62845 14.891215,0.66754 21.444467,1.99641 10.523335,1.44838 15.062597,-11.1654 22.676816,-16.41386 7.37519,-6.20958 14.09132,-16.44952 21.88505,-20.12894 18.10051,9.84984 42.8882,1.95929 52.04786,-16.46671 10.1475,-18.42492 1.94541,-43.96395 -17.28342,-52.75296 -11.39174,-5.60723 -25.62783,-5.21677 -36.65171,1.12538 -6.96078,-6.5248 -14.10695,-14.071896 -21.21093,-21.039045 6.51213,-11.78321 6.44926,-26.768043 -0.29687,-38.4375 16.4935,-16.568258 33.40577,-32.843274 49.63671,-49.5957031 0.11958,-1.2287209 -1.25027,-2.1871934 -2.41399,-1.8086138 z m 0.0879,1.5664063 c -2.47184,3.8845887 -9.21197,9.3531186 -13.31818,13.8441716 -11.83275,11.758312 -23.66557,23.51655 -35.49822,35.274969 2.50197,6.759233 5.81244,14.104176 5.05023,21.765883 2.03298,7.782106 -9.32512,16.353758 -1.15752,21.699278 6.86734,5.496714 12.15184,14.801124 19.92974,18.134904 8.00718,-4.9588 20.0328,-6.28873 29.64649,-3.31915 18.81326,5.28584 30.46291,26.71479 24.99389,45.3841 -4.96003,20.349 -29.12423,32.84765 -48.58546,25.06025 -9.53199,-7.21195 -14.73257,8.02478 -21.89771,12.50482 -7.3136,7.32116 -14.628944,14.6407 -21.985703,21.91854 -8.371145,0.23645 -17.719337,0.0939 -25.359375,-0.0137 16.332969,-16.86707 33.312676,-33.19513 49.605598,-50.03818 -6.10979,-11.37681 -6.77413,-25.74154 -0.21511,-37.13762 -1.50823,-6.12923 -12.15484,-11.60258 -16.622297,-17.94999 -4.465111,-8.69599 -11.371707,-2.94591 -18.220249,-1.30017 -18.101547,3.77244 -37.567556,-7.96428 -42.669819,-25.739533 -4.645554,-15.54396 1.675754,-33.729738 15.77734,-42.175313 11.204762,-7.403391 26.234699,-7.470669 37.985332,-1.27854 7.736979,-5.830415 14.360853,-13.759379 21.588803,-20.477561 7.82841,-5.789701 12.84551,-18.4870278 24.14301,-16.0488083 5.88875,-0.0565 11.52869,0.076433 16.80921,-0.1083503 z M 72.945312,51.865234 C 58.452433,50.71567 47.516966,67.109716 52.543189,80.319369 57.0394,93.642637 75.383127,99.086266 86.081595,89.720267 97.985857,81.096402 96.002209,61.021268 83.086538,54.386037 80.035744,52.617658 76.456384,51.653118 72.945312,51.865234 Z m 0.785157,0.785157 c 2.456491,1.274732 13.314764,3.423431 15.666015,9.761718 C 96.820599,73.039302 90.453186,89.122248 78,92.148437 65.364516,96.23649 50.920282,84.231759 53.171614,70.99242 53.692865,60.782654 63.605379,52.815014 73.501344,53.205045 l 0.169684,-0.254557 0.05944,-0.300097 z m 73.220701,72.773439 c -15.16672,-0.77477 -26.32092,17.55423 -18.9132,30.69811 5.54031,12.39344 23.30389,15.69233 33.16283,6.50578 10.72345,-8.88328 8.97876,-27.82302 -3.47675,-34.32959 -3.24086,-1.90892 -7.00245,-2.96998 -10.77288,-2.8743 z m 0.0156,1.56836 c 13.76615,-0.61312 24.26662,15.4498 18.08791,27.80558 -5.11452,12.61564 -23.98263,15.6549 -32.62187,5.03267 -10.04206,-10.10827 -4.19136,-29.38152 9.74753,-32.28542 1.57113,-0.34347 3.17636,-0.55404 4.78643,-0.55283 z"
          fill-rule="evenodd"
        />
    `
    },
    {

      name: "light2",
      materialName: "neon",
      depth: .1,
      position: [0, 0, -1.8],
      code: `    
        <path
          id = "ligth2"
         d="M 153.23242,2.1425781 C 144.69143,2.5809326 135.98461,1.7027983 127.51756,2.6269536 115.31467,14.65706 103.26114,26.839576 90.908203,38.716797 75.263116,30.30409 54.317095,34.180909 43.049254,48.023647 29.027001,63.692999 31.595144,90.56398 48.437976,103.21567 c 11.828809,9.79357 29.589983,11.21332 42.954602,3.74727 7.286437,5.9197 13.865222,14.73011 22.064452,20.60743 -6.7877,11.48999 -6.8877,26.38484 -0.41211,38.04102 -16.519409,16.7049 -33.464919,33.05487 -49.646483,50.05273 4.40786,4.62845 14.891215,0.66754 21.444467,1.99641 10.523335,1.44838 15.062597,-11.1654 22.676816,-16.41386 7.37519,-6.20958 14.09132,-16.44952 21.88505,-20.12894 18.10051,9.84984 42.8882,1.95929 52.04786,-16.46671 10.1475,-18.42492 1.94541,-43.96395 -17.28342,-52.75296 -11.39174,-5.60723 -25.62783,-5.21677 -36.65171,1.12538 -6.96078,-6.5248 -14.10695,-14.071896 -21.21093,-21.039045 6.51213,-11.78321 6.44926,-26.768043 -0.29687,-38.4375 16.4935,-16.568258 33.40577,-32.843274 49.63671,-49.5957031 0.11958,-1.2287209 -1.25027,-2.1871934 -2.41399,-1.8086138 z m 0.0879,1.5664063 c -2.47184,3.8845887 -9.21197,9.3531186 -13.31818,13.8441716 -11.83275,11.758312 -23.66557,23.51655 -35.49822,35.274969 2.50197,6.759233 5.81244,14.104176 5.05023,21.765883 2.03298,7.782106 -9.32512,16.353758 -1.15752,21.699278 6.86734,5.496714 12.15184,14.801124 19.92974,18.134904 8.00718,-4.9588 20.0328,-6.28873 29.64649,-3.31915 18.81326,5.28584 30.46291,26.71479 24.99389,45.3841 -4.96003,20.349 -29.12423,32.84765 -48.58546,25.06025 -9.53199,-7.21195 -14.73257,8.02478 -21.89771,12.50482 -7.3136,7.32116 -14.628944,14.6407 -21.985703,21.91854 -8.371145,0.23645 -17.719337,0.0939 -25.359375,-0.0137 16.332969,-16.86707 33.312676,-33.19513 49.605598,-50.03818 -6.10979,-11.37681 -6.77413,-25.74154 -0.21511,-37.13762 -1.50823,-6.12923 -12.15484,-11.60258 -16.622297,-17.94999 -4.465111,-8.69599 -11.371707,-2.94591 -18.220249,-1.30017 -18.101547,3.77244 -37.567556,-7.96428 -42.669819,-25.739533 -4.645554,-15.54396 1.675754,-33.729738 15.77734,-42.175313 11.204762,-7.403391 26.234699,-7.470669 37.985332,-1.27854 7.736979,-5.830415 14.360853,-13.759379 21.588803,-20.477561 7.82841,-5.789701 12.84551,-18.4870278 24.14301,-16.0488083 5.88875,-0.0565 11.52869,0.076433 16.80921,-0.1083503 z M 72.945312,51.865234 C 58.452433,50.71567 47.516966,67.109716 52.543189,80.319369 57.0394,93.642637 75.383127,99.086266 86.081595,89.720267 97.985857,81.096402 96.002209,61.021268 83.086538,54.386037 80.035744,52.617658 76.456384,51.653118 72.945312,51.865234 Z m 0.785157,0.785157 c 2.456491,1.274732 13.314764,3.423431 15.666015,9.761718 C 96.820599,73.039302 90.453186,89.122248 78,92.148437 65.364516,96.23649 50.920282,84.231759 53.171614,70.99242 53.692865,60.782654 63.605379,52.815014 73.501344,53.205045 l 0.169684,-0.254557 0.05944,-0.300097 z m 73.220701,72.773439 c -15.16672,-0.77477 -26.32092,17.55423 -18.9132,30.69811 5.54031,12.39344 23.30389,15.69233 33.16283,6.50578 10.72345,-8.88328 8.97876,-27.82302 -3.47675,-34.32959 -3.24086,-1.90892 -7.00245,-2.96998 -10.77288,-2.8743 z m 0.0156,1.56836 c 13.76615,-0.61312 24.26662,15.4498 18.08791,27.80558 -5.11452,12.61564 -23.98263,15.6549 -32.62187,5.03267 -10.04206,-10.10827 -4.19136,-29.38152 9.74753,-32.28542 1.57113,-0.34347 3.17636,-0.55404 4.78643,-0.55283 z"
          fill-rule="evenodd"
        />
    `
    },
    {

      name: "circledash1",
      materialName: "neonG",
      depth: .05,
      position: [0, 0, 2.5],
      code: `    
        <path
          id = "circledash1"
         d="m 72.914901,57.981727 -0.01288,0.820968 c 1.301992,0.02094 2.600439,0.220975 3.846818,0.594441 0.287964,0.08632 0.572735,0.181598 0.853419,0.285973 l 0.288228,-0.771164 c -0.29847,-0.11099 -0.599379,-0.210926 -0.903334,-0.30204 h -0.0017 c -1.320259,-0.395604 -2.693363,-0.606018 -4.070639,-0.628178 z m -5.006179,0.732608 -0.154582,0.04981 -0.267296,0.09318 -0.264076,0.09639 -0.262467,0.102822 -0.259245,0.107642 -0.254414,0.110855 -0.252806,0.115674 -0.249584,0.120496 -0.247975,0.125313 -0.243143,0.128527 -0.239922,0.133348 -0.236704,0.138167 -0.235092,0.14138 -0.230261,0.146201 -0.227041,0.149412 -0.223822,0.152626 -0.220599,0.157447 -0.21738,0.162266 -0.181955,0.139772 0.502389,0.650672 0.177124,-0.134955 0.204499,-0.152625 0.209327,-0.147807 0.21094,-0.144592 0.214159,-0.141382 0.217381,-0.138166 0.2206,-0.133348 0.22382,-0.130135 0.227041,-0.125312 0.228653,-0.122103 0.233481,-0.11728 0.235093,-0.114069 0.238313,-0.109248 0.241532,-0.104429 0.243143,-0.101214 0.247975,-0.09639 0.249584,-0.09157 0.252806,-0.08836 0.144919,-0.04658 z m 14.359954,2.729601 -0.526543,0.632996 c 1.203359,0.998623 2.240585,2.197411 3.05459,3.531293 l 0.05797,0.09479 0.706886,-0.422534 -0.05959,-0.09961 h -0.0017 C 84.63874,63.769009 83.542356,62.50096 82.268619,61.443935 Z m -22.227496,3.385091 -0.01932,0.02892 -0.140089,0.224923 -0.136869,0.228135 -0.133649,0.228137 -0.128817,0.232956 -0.123987,0.232957 -0.120766,0.236168 -0.115937,0.237776 -0.112715,0.240989 -0.107884,0.240989 -0.104666,0.244202 -0.09983,0.244202 -0.09501,0.247415 -0.09178,0.249022 -0.08696,0.250628 -0.08374,0.25063 -0.0789,0.253842 -0.07406,0.25384 -0.06924,0.255449 -0.06602,0.257055 -0.0017,0.0081 0.803501,0.189578 v -0.0017 l 0.06119,-0.242594 0.06602,-0.242597 0.07086,-0.240988 0.07407,-0.239383 0.0789,-0.237776 0.08212,-0.237776 0.08696,-0.234562 0.09018,-0.234562 0.09501,-0.23135 0.09823,-0.231349 0.103054,-0.228137 0.106274,-0.228136 0.109495,-0.224923 0.114327,-0.223317 0.119156,-0.221709 0.120767,-0.220103 0.125597,-0.21689 0.128818,-0.215284 0.133648,-0.21207 0.0161,-0.0241 z m 27.346389,5.161984 -0.808331,0.162266 c 0.183549,0.905319 0.276339,1.830495 0.280179,2.755308 6e-6,0.0016 -6e-6,0.0032 0,0.0049 l -0.0017,0.295614 -0.0065,0.294007 -0.01288,0.290793 -0.01933,0.289187 -0.02254,0.285974 -0.02898,0.282761 -0.03382,0.281153 -0.04026,0.279548 -0.04347,0.276333 -0.04992,0.273122 -0.05475,0.269907 -0.05959,0.2683 -0.06441,0.266696 -0.06924,0.261874 -0.07407,0.260268 -0.0789,0.257055 -0.08212,0.255448 -0.0097,0.02731 0.777737,0.269908 0.01288,-0.03534 0.08856,-0.269907 0.08213,-0.271515 0.0789,-0.276333 0.07246,-0.277941 0.06924,-0.281154 0.06279,-0.284368 0.05797,-0.285973 0.05152,-0.289186 0.0467,-0.2924 0.04187,-0.294007 0.03704,-0.297219 0.03059,-0.298827 0.02415,-0.302039 0.01933,-0.305253 0.01288,-0.30686 0.0081,-0.308466 0.0017,-0.308466 -0.330096,-0.0017 0.330096,-0.0017 c -0.0037,-0.979015 -0.101461,-1.958268 -0.29628,-2.919179 z m -28.88415,4.434197 -0.819603,0.08676 0.02737,0.252235 0.0322,0.266694 0.03864,0.268301 0.04347,0.266695 0.04992,0.266694 0.05314,0.266694 0.05796,0.266695 0.06442,0.265088 0.06924,0.265088 0.07406,0.263482 0.08051,0.263481 0.08534,0.261874 0.09018,0.261875 0.09501,0.260268 0.101443,0.260268 0.106275,0.258663 0.111106,0.257054 0.117546,0.257055 0.06442,0.13656 0.743922,-0.356664 -0.06279,-0.128527 -0.109496,-0.242596 -0.106273,-0.242595 -0.09983,-0.244202 -0.09501,-0.244202 -0.09017,-0.245809 -0.08534,-0.247416 -0.0789,-0.247416 -0.07569,-0.247415 -0.07086,-0.249022 -0.06442,-0.250628 -0.06119,-0.250628 -0.05475,-0.250629 -0.05152,-0.250629 -0.04509,-0.252235 -0.04187,-0.252234 -0.03542,-0.252236 -0.0322,-0.252235 z m 25.301407,7.383902 -0.06602,0.08194 -0.162632,0.194398 -0.165853,0.191185 -0.170684,0.189578 -0.172294,0.184757 -0.175514,0.181546 -0.178733,0.179938 -0.181956,0.175119 -0.185176,0.171905 -0.186785,0.167086 -0.191616,0.165479 -0.193228,0.162267 -0.196446,0.157446 -0.198056,0.154232 -0.201279,0.151019 -0.204498,0.147808 -0.206109,0.142986 -0.209328,0.14138 -0.210939,0.136561 -0.132038,0.08033 0.43637,0.698868 0.138479,-0.08515 0.22221,-0.144593 0.220601,-0.147806 0.21899,-0.152628 0.215769,-0.155839 0.212551,-0.159053 0.209327,-0.163873 0.207719,-0.167085 0.204498,-0.170298 0.201279,-0.175119 0.199666,-0.178332 0.194837,-0.181545 0.193227,-0.184757 0.188395,-0.189579 0.186786,-0.19279 0.183566,-0.196005 0.178734,-0.199218 0.175514,-0.204038 0.172294,-0.207251 0.07085,-0.08676 z m -21.24365,1.106943 -0.58773,0.576766 0.06924,0.0707 0.22221,0.218497 0.22543,0.21207 0.228653,0.205645 0.230261,0.200823 0.231872,0.196004 0.235092,0.189579 0.235093,0.183151 0.239922,0.178332 0.239923,0.171906 0.243144,0.165479 0.244754,0.162265 0.246363,0.154234 0.247974,0.151019 0.249584,0.142987 0.251196,0.139774 0.251193,0.13174 0.196448,0.09961 0.370351,-0.735819 -0.188392,-0.0948 -0.238314,-0.125313 -0.236702,-0.130134 -0.236703,-0.13656 -0.233482,-0.14138 -0.231872,-0.146201 -0.231872,-0.152626 -0.228651,-0.157446 -0.228652,-0.163872 -0.225431,-0.167086 -0.22382,-0.175118 -0.22221,-0.178332 L 63.485447,83.777189 63.268068,83.586004 63.050688,83.39 62.836527,83.189176 62.625589,82.981925 Z m 13.226359,3.873496 -0.05797,0.01447 -0.246364,0.05302 -0.246364,0.04981 -0.247974,0.04499 -0.247975,0.04017 -0.249584,0.03534 -0.249584,0.03213 -0.251195,0.02731 -0.251194,0.0241 -0.251195,0.01767 -0.252804,0.01447 -0.252806,0.01124 -0.252805,0.0049 h -0.252798 l -0.252805,-0.0032 -0.254416,-0.0081 -0.252804,-0.01285 -0.254415,-0.01767 -0.252806,-0.02249 -0.198057,-0.02089 -0.08696,0.817757 0.206109,0.02249 0.267296,0.02249 0.268907,0.01929 0.268907,0.01285 0.268907,0.0097 0.267297,0.0032 h 0.267296 l 0.268907,-0.0065 0.267298,-0.0097 0.265686,-0.01606 0.267296,-0.01928 0.265687,-0.0241 0.264076,-0.02892 0.264077,-0.03374 0.264075,-0.03855 0.262467,-0.04337 0.262464,-0.0466 0.260855,-0.05302 0.259246,-0.05623 0.06602,-0.01447 z"
          fill-rule="evenodd"
        />
    `
    },
    {

      name: "circledash2",
      materialName: "neon",
      depth: .05,
      position: [0, 0, 2.5],
      code: `    
        <path
          id = "circledash2"
d="m 147.29905,131.66874 -0.0129,0.82097 c 1.30199,0.0209 2.60044,0.22098 3.84682,0.59444 0.28796,0.0863 0.57273,0.1816 0.85342,0.28598 l 0.28822,-0.77117 c -0.29847,-0.11099 -0.59938,-0.21092 -0.90333,-0.30204 h -0.002 c -1.32026,-0.3956 -2.69336,-0.60602 -4.07064,-0.62818 z m -5.00618,0.73261 -0.15458,0.0498 -0.2673,0.0932 -0.26407,0.0964 -0.26247,0.10282 -0.25925,0.10765 -0.25441,0.11085 -0.25281,0.11568 -0.24958,0.12049 -0.24798,0.12531 -0.24314,0.12853 -0.23992,0.13335 -0.2367,0.13817 -0.2351,0.14138 -0.23026,0.1462 -0.22704,0.14941 -0.22382,0.15263 -0.2206,0.15744 -0.21738,0.16227 -0.18195,0.13977 0.50238,0.65067 0.17713,-0.13495 0.2045,-0.15263 0.20932,-0.1478 0.21094,-0.1446 0.21416,-0.14138 0.21738,-0.13816 0.2206,-0.13335 0.22382,-0.13014 0.22705,-0.12531 0.22865,-0.1221 0.23348,-0.11728 0.23509,-0.11407 0.23832,-0.10925 0.24153,-0.10443 0.24314,-0.10121 0.24798,-0.0964 0.24958,-0.0916 0.25281,-0.0884 0.14491,-0.0466 z m 14.35995,2.7296 -0.52654,0.633 c 1.20336,0.99862 2.24059,2.19741 3.05459,3.53129 l 0.058,0.0948 0.70689,-0.42253 -0.0596,-0.0996 h -0.002 c -0.86155,-1.41186 -1.95794,-2.67991 -3.23167,-3.73694 z m -22.22749,3.38509 -0.0193,0.0289 -0.14009,0.22493 -0.13687,0.22813 -0.13365,0.22814 -0.12882,0.23296 -0.12398,0.23295 -0.12077,0.23617 -0.11594,0.23778 -0.11271,0.24099 -0.10789,0.24098 -0.10466,0.24421 -0.0998,0.2442 -0.095,0.24741 -0.0918,0.24903 -0.087,0.25062 -0.0837,0.25063 -0.0789,0.25385 -0.0741,0.25384 -0.0692,0.25544 -0.066,0.25706 -0.002,0.008 0.8035,0.18958 v -0.002 l 0.0612,-0.2426 0.066,-0.24259 0.0709,-0.24099 0.0741,-0.23938 0.0789,-0.23778 0.0821,-0.23778 0.087,-0.23456 0.0902,-0.23456 0.095,-0.23135 0.0982,-0.23135 0.10305,-0.22814 0.10628,-0.22813 0.10949,-0.22493 0.11433,-0.22331 0.11916,-0.22171 0.12076,-0.2201 0.1256,-0.21689 0.12882,-0.21529 0.13365,-0.21207 0.0161,-0.0241 z m 27.34639,5.16199 -0.80833,0.16226 c 0.18354,0.90532 0.27633,1.8305 0.28017,2.75531 1e-5,0.002 0,0.003 0,0.005 l -0.002,0.29562 -0.007,0.294 -0.0129,0.2908 -0.0193,0.28918 -0.0225,0.28598 -0.029,0.28276 -0.0338,0.28115 -0.0403,0.27955 -0.0435,0.27633 -0.0499,0.27312 -0.0548,0.26991 -0.0596,0.2683 -0.0644,0.2667 -0.0692,0.26187 -0.0741,0.26027 -0.0789,0.25705 -0.0821,0.25545 -0.01,0.0273 0.77774,0.26991 0.0129,-0.0353 0.0886,-0.26991 0.0821,-0.27151 0.0789,-0.27633 0.0725,-0.27795 0.0692,-0.28115 0.0628,-0.28437 0.058,-0.28597 0.0515,-0.28919 0.0467,-0.2924 0.0419,-0.294 0.037,-0.29722 0.0306,-0.29883 0.0242,-0.30204 0.0193,-0.30525 0.0129,-0.30686 0.008,-0.30847 0.002,-0.30846 -0.33009,-0.002 0.33009,-0.002 c -0.004,-0.97902 -0.10146,-1.95827 -0.29628,-2.91918 z m -28.88415,4.4342 -0.81961,0.0868 0.0274,0.25223 0.0322,0.26669 0.0386,0.26831 0.0435,0.26669 0.0499,0.26669 0.0531,0.2667 0.058,0.26669 0.0644,0.26509 0.0692,0.26509 0.0741,0.26348 0.0805,0.26348 0.0853,0.26188 0.0902,0.26187 0.095,0.26027 0.10145,0.26027 0.10627,0.25866 0.11111,0.25705 0.11754,0.25706 0.0644,0.13656 0.74393,-0.35666 -0.0628,-0.12853 -0.1095,-0.2426 -0.10627,-0.24259 -0.0998,-0.2442 -0.095,-0.24421 -0.0902,-0.24581 -0.0853,-0.24741 -0.0789,-0.24742 -0.0757,-0.24741 -0.0709,-0.24902 -0.0644,-0.25063 -0.0612,-0.25063 -0.0548,-0.25063 -0.0515,-0.25063 -0.0451,-0.25223 -0.0419,-0.25224 -0.0354,-0.25223 -0.0322,-0.25224 z m 25.3014,7.3839 -0.066,0.0819 -0.16263,0.1944 -0.16585,0.19118 -0.17069,0.18958 -0.17229,0.18476 -0.17551,0.18154 -0.17874,0.17994 -0.18195,0.17512 -0.18518,0.1719 -0.18678,0.16709 -0.19162,0.16548 -0.19323,0.16227 -0.19644,0.15744 -0.19806,0.15423 -0.20128,0.15102 -0.2045,0.14781 -0.2061,0.14299 -0.20933,0.14138 -0.21094,0.13656 -0.13204,0.0803 0.43637,0.69887 0.13848,-0.0851 0.22221,-0.1446 0.2206,-0.1478 0.21899,-0.15263 0.21577,-0.15584 0.21255,-0.15905 0.20933,-0.16388 0.20772,-0.16708 0.20449,-0.1703 0.20128,-0.17512 0.19967,-0.17833 0.19484,-0.18154 0.19322,-0.18476 0.1884,-0.18958 0.18678,-0.19279 0.18357,-0.19601 0.17873,-0.19921 0.17552,-0.20404 0.17229,-0.20725 0.0708,-0.0868 z m -21.24365,1.10694 -0.58773,0.57677 0.0692,0.0707 0.22221,0.21849 0.22543,0.21207 0.22866,0.20565 0.23026,0.20082 0.23187,0.19601 0.23509,0.18958 0.23509,0.18315 0.23993,0.17833 0.23992,0.1719 0.24314,0.16548 0.24476,0.16227 0.24636,0.15423 0.24797,0.15102 0.24959,0.14299 0.25119,0.13977 0.2512,0.13174 0.19645,0.0996 0.37035,-0.73582 -0.1884,-0.0948 -0.23831,-0.12531 -0.2367,-0.13013 -0.2367,-0.13656 -0.23349,-0.14138 -0.23187,-0.14621 -0.23187,-0.15262 -0.22865,-0.15745 -0.22865,-0.16387 -0.22543,-0.16708 -0.22382,-0.17512 -0.22221,-0.17833 -0.22061,-0.18476 -0.21737,-0.19119 -0.21738,-0.196 -0.21417,-0.20083 -0.21093,-0.20725 z m 13.22636,3.8735 -0.058,0.0145 -0.24636,0.053 -0.24637,0.0498 -0.24797,0.045 -0.24797,0.0402 -0.24959,0.0353 -0.24958,0.0321 -0.2512,0.0273 -0.25119,0.0241 -0.2512,0.0177 -0.2528,0.0145 -0.25281,0.0112 -0.2528,0.005 h -0.2528 l -0.2528,-0.003 -0.25442,-0.008 -0.2528,-0.0129 -0.25442,-0.0177 -0.25281,-0.0225 -0.19805,-0.0209 -0.087,0.81775 0.20611,0.0225 0.26729,0.0225 0.26891,0.0193 0.26891,0.0128 0.2689,0.01 0.2673,0.003 h 0.2673 l 0.2689,-0.006 0.2673,-0.01 0.26569,-0.0161 0.26729,-0.0193 0.26569,-0.0241 0.26408,-0.0289 0.26407,-0.0337 0.26408,-0.0386 0.26247,-0.0434 0.26246,-0.0466 0.26085,-0.053 0.25925,-0.0562 0.066,-0.0145 z"
          fill-rule="evenodd"
        />
    `
    },
    ,
    {

      name: "circledash3",
      materialName: "neon",
      depth: .05,
      position: [0, 0, -2.6],
      code: `    
        <path
          id = "circledash1"
         d="m 72.914901,57.981727 -0.01288,0.820968 c 1.301992,0.02094 2.600439,0.220975 3.846818,0.594441 0.287964,0.08632 0.572735,0.181598 0.853419,0.285973 l 0.288228,-0.771164 c -0.29847,-0.11099 -0.599379,-0.210926 -0.903334,-0.30204 h -0.0017 c -1.320259,-0.395604 -2.693363,-0.606018 -4.070639,-0.628178 z m -5.006179,0.732608 -0.154582,0.04981 -0.267296,0.09318 -0.264076,0.09639 -0.262467,0.102822 -0.259245,0.107642 -0.254414,0.110855 -0.252806,0.115674 -0.249584,0.120496 -0.247975,0.125313 -0.243143,0.128527 -0.239922,0.133348 -0.236704,0.138167 -0.235092,0.14138 -0.230261,0.146201 -0.227041,0.149412 -0.223822,0.152626 -0.220599,0.157447 -0.21738,0.162266 -0.181955,0.139772 0.502389,0.650672 0.177124,-0.134955 0.204499,-0.152625 0.209327,-0.147807 0.21094,-0.144592 0.214159,-0.141382 0.217381,-0.138166 0.2206,-0.133348 0.22382,-0.130135 0.227041,-0.125312 0.228653,-0.122103 0.233481,-0.11728 0.235093,-0.114069 0.238313,-0.109248 0.241532,-0.104429 0.243143,-0.101214 0.247975,-0.09639 0.249584,-0.09157 0.252806,-0.08836 0.144919,-0.04658 z m 14.359954,2.729601 -0.526543,0.632996 c 1.203359,0.998623 2.240585,2.197411 3.05459,3.531293 l 0.05797,0.09479 0.706886,-0.422534 -0.05959,-0.09961 h -0.0017 C 84.63874,63.769009 83.542356,62.50096 82.268619,61.443935 Z m -22.227496,3.385091 -0.01932,0.02892 -0.140089,0.224923 -0.136869,0.228135 -0.133649,0.228137 -0.128817,0.232956 -0.123987,0.232957 -0.120766,0.236168 -0.115937,0.237776 -0.112715,0.240989 -0.107884,0.240989 -0.104666,0.244202 -0.09983,0.244202 -0.09501,0.247415 -0.09178,0.249022 -0.08696,0.250628 -0.08374,0.25063 -0.0789,0.253842 -0.07406,0.25384 -0.06924,0.255449 -0.06602,0.257055 -0.0017,0.0081 0.803501,0.189578 v -0.0017 l 0.06119,-0.242594 0.06602,-0.242597 0.07086,-0.240988 0.07407,-0.239383 0.0789,-0.237776 0.08212,-0.237776 0.08696,-0.234562 0.09018,-0.234562 0.09501,-0.23135 0.09823,-0.231349 0.103054,-0.228137 0.106274,-0.228136 0.109495,-0.224923 0.114327,-0.223317 0.119156,-0.221709 0.120767,-0.220103 0.125597,-0.21689 0.128818,-0.215284 0.133648,-0.21207 0.0161,-0.0241 z m 27.346389,5.161984 -0.808331,0.162266 c 0.183549,0.905319 0.276339,1.830495 0.280179,2.755308 6e-6,0.0016 -6e-6,0.0032 0,0.0049 l -0.0017,0.295614 -0.0065,0.294007 -0.01288,0.290793 -0.01933,0.289187 -0.02254,0.285974 -0.02898,0.282761 -0.03382,0.281153 -0.04026,0.279548 -0.04347,0.276333 -0.04992,0.273122 -0.05475,0.269907 -0.05959,0.2683 -0.06441,0.266696 -0.06924,0.261874 -0.07407,0.260268 -0.0789,0.257055 -0.08212,0.255448 -0.0097,0.02731 0.777737,0.269908 0.01288,-0.03534 0.08856,-0.269907 0.08213,-0.271515 0.0789,-0.276333 0.07246,-0.277941 0.06924,-0.281154 0.06279,-0.284368 0.05797,-0.285973 0.05152,-0.289186 0.0467,-0.2924 0.04187,-0.294007 0.03704,-0.297219 0.03059,-0.298827 0.02415,-0.302039 0.01933,-0.305253 0.01288,-0.30686 0.0081,-0.308466 0.0017,-0.308466 -0.330096,-0.0017 0.330096,-0.0017 c -0.0037,-0.979015 -0.101461,-1.958268 -0.29628,-2.919179 z m -28.88415,4.434197 -0.819603,0.08676 0.02737,0.252235 0.0322,0.266694 0.03864,0.268301 0.04347,0.266695 0.04992,0.266694 0.05314,0.266694 0.05796,0.266695 0.06442,0.265088 0.06924,0.265088 0.07406,0.263482 0.08051,0.263481 0.08534,0.261874 0.09018,0.261875 0.09501,0.260268 0.101443,0.260268 0.106275,0.258663 0.111106,0.257054 0.117546,0.257055 0.06442,0.13656 0.743922,-0.356664 -0.06279,-0.128527 -0.109496,-0.242596 -0.106273,-0.242595 -0.09983,-0.244202 -0.09501,-0.244202 -0.09017,-0.245809 -0.08534,-0.247416 -0.0789,-0.247416 -0.07569,-0.247415 -0.07086,-0.249022 -0.06442,-0.250628 -0.06119,-0.250628 -0.05475,-0.250629 -0.05152,-0.250629 -0.04509,-0.252235 -0.04187,-0.252234 -0.03542,-0.252236 -0.0322,-0.252235 z m 25.301407,7.383902 -0.06602,0.08194 -0.162632,0.194398 -0.165853,0.191185 -0.170684,0.189578 -0.172294,0.184757 -0.175514,0.181546 -0.178733,0.179938 -0.181956,0.175119 -0.185176,0.171905 -0.186785,0.167086 -0.191616,0.165479 -0.193228,0.162267 -0.196446,0.157446 -0.198056,0.154232 -0.201279,0.151019 -0.204498,0.147808 -0.206109,0.142986 -0.209328,0.14138 -0.210939,0.136561 -0.132038,0.08033 0.43637,0.698868 0.138479,-0.08515 0.22221,-0.144593 0.220601,-0.147806 0.21899,-0.152628 0.215769,-0.155839 0.212551,-0.159053 0.209327,-0.163873 0.207719,-0.167085 0.204498,-0.170298 0.201279,-0.175119 0.199666,-0.178332 0.194837,-0.181545 0.193227,-0.184757 0.188395,-0.189579 0.186786,-0.19279 0.183566,-0.196005 0.178734,-0.199218 0.175514,-0.204038 0.172294,-0.207251 0.07085,-0.08676 z m -21.24365,1.106943 -0.58773,0.576766 0.06924,0.0707 0.22221,0.218497 0.22543,0.21207 0.228653,0.205645 0.230261,0.200823 0.231872,0.196004 0.235092,0.189579 0.235093,0.183151 0.239922,0.178332 0.239923,0.171906 0.243144,0.165479 0.244754,0.162265 0.246363,0.154234 0.247974,0.151019 0.249584,0.142987 0.251196,0.139774 0.251193,0.13174 0.196448,0.09961 0.370351,-0.735819 -0.188392,-0.0948 -0.238314,-0.125313 -0.236702,-0.130134 -0.236703,-0.13656 -0.233482,-0.14138 -0.231872,-0.146201 -0.231872,-0.152626 -0.228651,-0.157446 -0.228652,-0.163872 -0.225431,-0.167086 -0.22382,-0.175118 -0.22221,-0.178332 L 63.485447,83.777189 63.268068,83.586004 63.050688,83.39 62.836527,83.189176 62.625589,82.981925 Z m 13.226359,3.873496 -0.05797,0.01447 -0.246364,0.05302 -0.246364,0.04981 -0.247974,0.04499 -0.247975,0.04017 -0.249584,0.03534 -0.249584,0.03213 -0.251195,0.02731 -0.251194,0.0241 -0.251195,0.01767 -0.252804,0.01447 -0.252806,0.01124 -0.252805,0.0049 h -0.252798 l -0.252805,-0.0032 -0.254416,-0.0081 -0.252804,-0.01285 -0.254415,-0.01767 -0.252806,-0.02249 -0.198057,-0.02089 -0.08696,0.817757 0.206109,0.02249 0.267296,0.02249 0.268907,0.01929 0.268907,0.01285 0.268907,0.0097 0.267297,0.0032 h 0.267296 l 0.268907,-0.0065 0.267298,-0.0097 0.265686,-0.01606 0.267296,-0.01928 0.265687,-0.0241 0.264076,-0.02892 0.264077,-0.03374 0.264075,-0.03855 0.262467,-0.04337 0.262464,-0.0466 0.260855,-0.05302 0.259246,-0.05623 0.06602,-0.01447 z"
          fill-rule="evenodd"
        />
    `
    },
    {

      name: "circledash4",
      materialName: "neon",
      depth: .05,
      position: [0, 0, -2.6],
      code: `    
        <path
          id = "circledash2"
d="m 147.29905,131.66874 -0.0129,0.82097 c 1.30199,0.0209 2.60044,0.22098 3.84682,0.59444 0.28796,0.0863 0.57273,0.1816 0.85342,0.28598 l 0.28822,-0.77117 c -0.29847,-0.11099 -0.59938,-0.21092 -0.90333,-0.30204 h -0.002 c -1.32026,-0.3956 -2.69336,-0.60602 -4.07064,-0.62818 z m -5.00618,0.73261 -0.15458,0.0498 -0.2673,0.0932 -0.26407,0.0964 -0.26247,0.10282 -0.25925,0.10765 -0.25441,0.11085 -0.25281,0.11568 -0.24958,0.12049 -0.24798,0.12531 -0.24314,0.12853 -0.23992,0.13335 -0.2367,0.13817 -0.2351,0.14138 -0.23026,0.1462 -0.22704,0.14941 -0.22382,0.15263 -0.2206,0.15744 -0.21738,0.16227 -0.18195,0.13977 0.50238,0.65067 0.17713,-0.13495 0.2045,-0.15263 0.20932,-0.1478 0.21094,-0.1446 0.21416,-0.14138 0.21738,-0.13816 0.2206,-0.13335 0.22382,-0.13014 0.22705,-0.12531 0.22865,-0.1221 0.23348,-0.11728 0.23509,-0.11407 0.23832,-0.10925 0.24153,-0.10443 0.24314,-0.10121 0.24798,-0.0964 0.24958,-0.0916 0.25281,-0.0884 0.14491,-0.0466 z m 14.35995,2.7296 -0.52654,0.633 c 1.20336,0.99862 2.24059,2.19741 3.05459,3.53129 l 0.058,0.0948 0.70689,-0.42253 -0.0596,-0.0996 h -0.002 c -0.86155,-1.41186 -1.95794,-2.67991 -3.23167,-3.73694 z m -22.22749,3.38509 -0.0193,0.0289 -0.14009,0.22493 -0.13687,0.22813 -0.13365,0.22814 -0.12882,0.23296 -0.12398,0.23295 -0.12077,0.23617 -0.11594,0.23778 -0.11271,0.24099 -0.10789,0.24098 -0.10466,0.24421 -0.0998,0.2442 -0.095,0.24741 -0.0918,0.24903 -0.087,0.25062 -0.0837,0.25063 -0.0789,0.25385 -0.0741,0.25384 -0.0692,0.25544 -0.066,0.25706 -0.002,0.008 0.8035,0.18958 v -0.002 l 0.0612,-0.2426 0.066,-0.24259 0.0709,-0.24099 0.0741,-0.23938 0.0789,-0.23778 0.0821,-0.23778 0.087,-0.23456 0.0902,-0.23456 0.095,-0.23135 0.0982,-0.23135 0.10305,-0.22814 0.10628,-0.22813 0.10949,-0.22493 0.11433,-0.22331 0.11916,-0.22171 0.12076,-0.2201 0.1256,-0.21689 0.12882,-0.21529 0.13365,-0.21207 0.0161,-0.0241 z m 27.34639,5.16199 -0.80833,0.16226 c 0.18354,0.90532 0.27633,1.8305 0.28017,2.75531 1e-5,0.002 0,0.003 0,0.005 l -0.002,0.29562 -0.007,0.294 -0.0129,0.2908 -0.0193,0.28918 -0.0225,0.28598 -0.029,0.28276 -0.0338,0.28115 -0.0403,0.27955 -0.0435,0.27633 -0.0499,0.27312 -0.0548,0.26991 -0.0596,0.2683 -0.0644,0.2667 -0.0692,0.26187 -0.0741,0.26027 -0.0789,0.25705 -0.0821,0.25545 -0.01,0.0273 0.77774,0.26991 0.0129,-0.0353 0.0886,-0.26991 0.0821,-0.27151 0.0789,-0.27633 0.0725,-0.27795 0.0692,-0.28115 0.0628,-0.28437 0.058,-0.28597 0.0515,-0.28919 0.0467,-0.2924 0.0419,-0.294 0.037,-0.29722 0.0306,-0.29883 0.0242,-0.30204 0.0193,-0.30525 0.0129,-0.30686 0.008,-0.30847 0.002,-0.30846 -0.33009,-0.002 0.33009,-0.002 c -0.004,-0.97902 -0.10146,-1.95827 -0.29628,-2.91918 z m -28.88415,4.4342 -0.81961,0.0868 0.0274,0.25223 0.0322,0.26669 0.0386,0.26831 0.0435,0.26669 0.0499,0.26669 0.0531,0.2667 0.058,0.26669 0.0644,0.26509 0.0692,0.26509 0.0741,0.26348 0.0805,0.26348 0.0853,0.26188 0.0902,0.26187 0.095,0.26027 0.10145,0.26027 0.10627,0.25866 0.11111,0.25705 0.11754,0.25706 0.0644,0.13656 0.74393,-0.35666 -0.0628,-0.12853 -0.1095,-0.2426 -0.10627,-0.24259 -0.0998,-0.2442 -0.095,-0.24421 -0.0902,-0.24581 -0.0853,-0.24741 -0.0789,-0.24742 -0.0757,-0.24741 -0.0709,-0.24902 -0.0644,-0.25063 -0.0612,-0.25063 -0.0548,-0.25063 -0.0515,-0.25063 -0.0451,-0.25223 -0.0419,-0.25224 -0.0354,-0.25223 -0.0322,-0.25224 z m 25.3014,7.3839 -0.066,0.0819 -0.16263,0.1944 -0.16585,0.19118 -0.17069,0.18958 -0.17229,0.18476 -0.17551,0.18154 -0.17874,0.17994 -0.18195,0.17512 -0.18518,0.1719 -0.18678,0.16709 -0.19162,0.16548 -0.19323,0.16227 -0.19644,0.15744 -0.19806,0.15423 -0.20128,0.15102 -0.2045,0.14781 -0.2061,0.14299 -0.20933,0.14138 -0.21094,0.13656 -0.13204,0.0803 0.43637,0.69887 0.13848,-0.0851 0.22221,-0.1446 0.2206,-0.1478 0.21899,-0.15263 0.21577,-0.15584 0.21255,-0.15905 0.20933,-0.16388 0.20772,-0.16708 0.20449,-0.1703 0.20128,-0.17512 0.19967,-0.17833 0.19484,-0.18154 0.19322,-0.18476 0.1884,-0.18958 0.18678,-0.19279 0.18357,-0.19601 0.17873,-0.19921 0.17552,-0.20404 0.17229,-0.20725 0.0708,-0.0868 z m -21.24365,1.10694 -0.58773,0.57677 0.0692,0.0707 0.22221,0.21849 0.22543,0.21207 0.22866,0.20565 0.23026,0.20082 0.23187,0.19601 0.23509,0.18958 0.23509,0.18315 0.23993,0.17833 0.23992,0.1719 0.24314,0.16548 0.24476,0.16227 0.24636,0.15423 0.24797,0.15102 0.24959,0.14299 0.25119,0.13977 0.2512,0.13174 0.19645,0.0996 0.37035,-0.73582 -0.1884,-0.0948 -0.23831,-0.12531 -0.2367,-0.13013 -0.2367,-0.13656 -0.23349,-0.14138 -0.23187,-0.14621 -0.23187,-0.15262 -0.22865,-0.15745 -0.22865,-0.16387 -0.22543,-0.16708 -0.22382,-0.17512 -0.22221,-0.17833 -0.22061,-0.18476 -0.21737,-0.19119 -0.21738,-0.196 -0.21417,-0.20083 -0.21093,-0.20725 z m 13.22636,3.8735 -0.058,0.0145 -0.24636,0.053 -0.24637,0.0498 -0.24797,0.045 -0.24797,0.0402 -0.24959,0.0353 -0.24958,0.0321 -0.2512,0.0273 -0.25119,0.0241 -0.2512,0.0177 -0.2528,0.0145 -0.25281,0.0112 -0.2528,0.005 h -0.2528 l -0.2528,-0.003 -0.25442,-0.008 -0.2528,-0.0129 -0.25442,-0.0177 -0.25281,-0.0225 -0.19805,-0.0209 -0.087,0.81775 0.20611,0.0225 0.26729,0.0225 0.26891,0.0193 0.26891,0.0128 0.2689,0.01 0.2673,0.003 h 0.2673 l 0.2689,-0.006 0.2673,-0.01 0.26569,-0.0161 0.26729,-0.0193 0.26569,-0.0241 0.26408,-0.0289 0.26407,-0.0337 0.26408,-0.0386 0.26247,-0.0434 0.26246,-0.0466 0.26085,-0.053 0.25925,-0.0562 0.066,-0.0145 z"
          fill-rule="evenodd"
        />
    `
    }
  ]
}
export const SvgPaths = { IPFabric: IPFabricPaths }
