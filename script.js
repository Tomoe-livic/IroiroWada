/* ---------- Dataset ----------
   Dataset completo (348 combinazioni, duo/trio/quad) da
   meodai/sanzoWadaColors (combinations.json, licenza MIT),
   a sua volta basato sul lavoro di digitalizzazione di
   dblodorn/sanzo-wada.
*/
const COMBINATIONS = [
  {"id":1,"colors":[{"name":"English Red","hex":"#de4500"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":2,"colors":[{"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}]},
  {"id":3,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}]},
  {"id":4,"colors":[{"name":"Isabella Color","hex":"#c3a55c"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":5,"colors":[{"name":"Cossack Green","hex":"#328e13"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}]},
  {"id":6,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Deep Indigo","hex":"#000831"}]},
  {"id":7,"colors":[{"name":"Orange","hex":"#ff5200"}, {"name":"Glaucous Green","hex":"#b3e8c2"}]},
  {"id":8,"colors":[{"name":"Cinnamon Rufous","hex":"#c2612c"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}]},
  {"id":9,"colors":[{"name":"Violet Red","hex":"#3d0079"}, {"name":"Dull Blue Violet","hex":"#6e66d4"}]},
  {"id":10,"colors":[{"name":"Cinnamon Rufous","hex":"#c2612c"}, {"name":"Dark Citrine","hex":"#7e8743"}]},
  {"id":11,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Mineral Gray","hex":"#9fc2b2"}]},
  {"id":12,"colors":[{"name":"Isabella Color","hex":"#c3a55c"}, {"name":"Green Blue","hex":"#2dbc94"}]},
  {"id":13,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Veronia Purple","hex":"#7e3075"}]},
  {"id":14,"colors":[{"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Naples Yellow","hex":"#faed8f"}]},
  {"id":15,"colors":[{"name":"Benzol Green","hex":"#00d973"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}]},
  {"id":16,"colors":[{"name":"Vandyke Red","hex":"#740909"}, {"name":"Pale King's Blue","hex":"#abf5ed"}]},
  {"id":17,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Sea Green","hex":"#33ff7d"}]},
  {"id":18,"colors":[{"name":"Fawn","hex":"#d1b0b3"}, {"name":"Dusky Madder Violet","hex":"#2d0060"}]},
  {"id":19,"colors":[{"name":"Mars Brown / Tobacco","hex":"#522000"}, {"name":"Night Green","hex":"#7aff00"}]},
  {"id":20,"colors":[{"name":"Calamine BLue","hex":"#80ffcc"}, {"name":"Laelia Pink","hex":"#cc85d1"}]},
  {"id":21,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Sea Green","hex":"#33ff7d"}]},
  {"id":22,"colors":[{"name":"Yellow","hex":"#ffff00"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":23,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Light Mauve","hex":"#9161f2"}]},
  {"id":24,"colors":[{"name":"Sepia","hex":"#503d00"}, {"name":"Veronia Purple","hex":"#7e3075"}]},
  {"id":25,"colors":[{"name":"Etruscan Red","hex":"#c9303e"}, {"name":"Nile Blue","hex":"#bfffe6"}]},
  {"id":26,"colors":[{"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Pale Raw Umber","hex":"#5e4017"}]},
  {"id":27,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":28,"colors":[{"name":"Madder Brown","hex":"#651300"}, {"name":"Deep Indigo","hex":"#000831"}]},
  {"id":29,"colors":[{"name":"Krongbergs Green","hex":"#759243"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":30,"colors":[{"name":"Pompeian Red","hex":"#a90636"}, {"name":"Mineral Gray","hex":"#9fc2b2"}]},
  {"id":31,"colors":[{"name":"Red Orange","hex":"#e81900"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}]},
  {"id":32,"colors":[{"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Night Green","hex":"#7aff00"}]},
  {"id":33,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":34,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":35,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Carmine Red","hex":"#a10b2b"}]},
  {"id":36,"colors":[{"name":"Sulphine Yellow","hex":"#baa600"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":37,"colors":[{"name":"Brick Red","hex":"#a32100"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":38,"colors":[{"name":"Diamine Green","hex":"#1b8e13"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":39,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Helvetia Blue","hex":"#0057ba"}]},
  {"id":40,"colors":[{"name":"Vinaceous Tawny","hex":"#c74300"}, {"name":"Citron Yellow","hex":"#a6d40d"}]},
  {"id":41,"colors":[{"name":"Dark Citrine","hex":"#7e8743"}, {"name":"Calamine BLue","hex":"#80ffcc"}]},
  {"id":42,"colors":[{"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":43,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Aconite Violet","hex":"#9c52f2"}]},
  {"id":44,"colors":[{"name":"Light Porcelain Green","hex":"#23c17c"}, {"name":"Olympic Blue","hex":"#4f8fe6"}]},
  {"id":45,"colors":[{"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Lemon Yellow","hex":"#f2ff26"}]},
  {"id":46,"colors":[{"name":"Orange","hex":"#ff5200"}, {"name":"Black","hex":"#000000"}]},
  {"id":47,"colors":[{"name":"Etruscan Red","hex":"#c9303e"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}]},
  {"id":48,"colors":[{"name":"Rosolanc Purple","hex":"#b319ab"}, {"name":"Helvetia Blue","hex":"#0057ba"}]},
  {"id":49,"colors":[{"name":"Pale King's Blue","hex":"#abf5ed"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":50,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Dusky Madder Violet","hex":"#2d0060"}]},
  {"id":51,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":52,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Black","hex":"#000000"}]},
  {"id":53,"colors":[{"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Dusky Madder Violet","hex":"#2d0060"}]},
  {"id":54,"colors":[{"name":"Benzol Green","hex":"#00d973"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}]},
  {"id":55,"colors":[{"name":"Old Rose","hex":"#d94d99"}, {"name":"White","hex":"#ffffff"}]},
  {"id":56,"colors":[{"name":"Grayish Lavender - B","hex":"#bfabcc"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":57,"colors":[{"name":"Taupe Brown","hex":"#6b2e63"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":58,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Sea Green","hex":"#33ff7d"}]},
  {"id":59,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Citrine","hex":"#7b6c0d"}]},
  {"id":60,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}]},
  {"id":61,"colors":[{"name":"Light Green Yellow","hex":"#bdf226"}, {"name":"Cotinga Purple","hex":"#340059"}]},
  {"id":62,"colors":[{"name":"Yellow","hex":"#ffff00"}, {"name":"Black","hex":"#000000"}]},
  {"id":63,"colors":[{"name":"Vistoris Lake","hex":"#5c2c45"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":64,"colors":[{"name":"Aconite Violet","hex":"#9c52f2"}, {"name":"Dark Soft Violet","hex":"#4d52de"}]},
  {"id":65,"colors":[{"name":"Sulphine Yellow","hex":"#baa600"}, {"name":"Calamine BLue","hex":"#80ffcc"}]},
  {"id":66,"colors":[{"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Olive Green","hex":"#58771e"}]},
  {"id":67,"colors":[{"name":"Olympic Blue","hex":"#4f8fe6"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}]},
  {"id":68,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Yellow","hex":"#ffff00"}]},
  {"id":69,"colors":[{"name":"Warm Gray","hex":"#9cb29e"}, {"name":"Black","hex":"#000000"}]},
  {"id":70,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Lincoln Green","hex":"#405416"}]},
  {"id":71,"colors":[{"name":"Pompeian Red","hex":"#a90636"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}]},
  {"id":72,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Pale King's Blue","hex":"#abf5ed"}]},
  {"id":73,"colors":[{"name":"Pale Raw Umber","hex":"#5e4017"}, {"name":"Rainette Green","hex":"#85b857"}]},
  {"id":74,"colors":[{"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Green Blue","hex":"#2dbc94"}]},
  {"id":75,"colors":[{"name":"Pale King's Blue","hex":"#abf5ed"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":76,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":77,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}]},
  {"id":78,"colors":[{"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Venice Green","hex":"#6bffb3"}]},
  {"id":79,"colors":[{"name":"Madder Brown","hex":"#651300"}, {"name":"Green Blue","hex":"#2dbc94"}]},
  {"id":80,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Light Mauve","hex":"#9161f2"}]},
  {"id":81,"colors":[{"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":82,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Dusky Madder Violet","hex":"#2d0060"}]},
  {"id":83,"colors":[{"name":"Olive Buff","hex":"#bcd382"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":84,"colors":[{"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Deep Slate Green","hex":"#0f261f"}]},
  {"id":85,"colors":[{"name":"Vinaceous Tawny","hex":"#c74300"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":86,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Sea Green","hex":"#33ff7d"}]},
  {"id":87,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Citron Yellow","hex":"#a6d40d"}]},
  {"id":88,"colors":[{"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":89,"colors":[{"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":90,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Aconite Violet","hex":"#9c52f2"}]},
  {"id":91,"colors":[{"name":"Vistoris Lake","hex":"#5c2c45"}, {"name":"Orange Rufous","hex":"#c05200"}]},
  {"id":92,"colors":[{"name":"Coral Red","hex":"#ff7399"}, {"name":"Benzol Green","hex":"#00d973"}]},
  {"id":93,"colors":[{"name":"Citrine","hex":"#7b6c0d"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}]},
  {"id":94,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Dusky Green","hex":"#00592e"}]},
  {"id":95,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":96,"colors":[{"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Olive","hex":"#718600"}]},
  {"id":97,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Etruscan Red","hex":"#c9303e"}]},
  {"id":98,"colors":[{"name":"Madder Brown","hex":"#651300"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":99,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":100,"colors":[{"name":"Buffy Citrine","hex":"#888d2a"}, {"name":"Dull Blue Violet","hex":"#6e66d4"}]},
  {"id":101,"colors":[{"name":"Cameo Pink","hex":"#e6adcf"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":102,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Orange Rufous","hex":"#c05200"}]},
  {"id":103,"colors":[{"name":"Cinnamon Rufous","hex":"#c2612c"}, {"name":"Dusky Madder Violet","hex":"#2d0060"}]},
  {"id":104,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}]},
  {"id":105,"colors":[{"name":"Cameo Pink","hex":"#e6adcf"}, {"name":"Chromium Green","hex":"#66ab56"}]},
  {"id":106,"colors":[{"name":"Antwarp Blue","hex":"#008aa1"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":107,"colors":[{"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Light Grayish Olive","hex":"#76844e"}]},
  {"id":108,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Brick Red","hex":"#a32100"}]},
  {"id":109,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Blackish Olive","hex":"#324e2a"}]},
  {"id":110,"colors":[{"name":"Brown","hex":"#6c2b11"}, {"name":"Vandyke Brown","hex":"#362304"}]},
  {"id":111,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Yellow Green","hex":"#a6ff47"}]},
  {"id":112,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Black","hex":"#000000"}]},
  {"id":113,"colors":[{"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Vandyke Brown","hex":"#362304"}]},
  {"id":114,"colors":[{"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":115,"colors":[{"name":"Naples Yellow","hex":"#faed8f"}, {"name":"Peach Red","hex":"#ff3319"}]},
  {"id":116,"colors":[{"name":"Cameo Pink","hex":"#e6adcf"}, {"name":"Blue Violet","hex":"#4733ff"}]},
  {"id":117,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Black","hex":"#000000"}]},
  {"id":118,"colors":[{"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Vandyke Brown","hex":"#362304"}]},
  {"id":119,"colors":[{"name":"Light Glaucous Blue","hex":"#a6e6db"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}]},
  {"id":120,"colors":[{"name":"Cameo Pink","hex":"#e6adcf"}, {"name":"Pompeian Red","hex":"#a90636"}]},
  {"id":121,"colors":[{"name":"Brown","hex":"#6c2b11"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Lincoln Green","hex":"#405416"}]},
  {"id":122,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Benzol Green","hex":"#00d973"}]},
  {"id":123,"colors":[{"name":"Coral Red","hex":"#ff7399"}, {"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Taupe Brown","hex":"#6b2e63"}]},
  {"id":124,"colors":[{"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Olive Yellow","hex":"#99b333"}]},
  {"id":125,"colors":[{"name":"Fawn","hex":"#d1b0b3"}, {"name":"Cerulian Blue","hex":"#29bdad"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":126,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":127,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Pistachio Green","hex":"#56aa69"}, {"name":"Dark Soft Violet","hex":"#4d52de"}]},
  {"id":128,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Venice Green","hex":"#6bffb3"}, {"name":"Light Mauve","hex":"#9161f2"}]},
  {"id":129,"colors":[{"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Khaki","hex":"#b68400"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":130,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":131,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"English Red","hex":"#de4500"}, {"name":"Peacock Blue","hex":"#00cf91"}]},
  {"id":132,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Citrine","hex":"#7b6c0d"}]},
  {"id":133,"colors":[{"name":"Vandyke Red","hex":"#740909"}, {"name":"Citrine","hex":"#7b6c0d"}, {"name":"Sea Green","hex":"#33ff7d"}]},
  {"id":134,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Light Mauve","hex":"#9161f2"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":135,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Cossack Green","hex":"#328e13"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":136,"colors":[{"name":"Scarlet","hex":"#d50c42"}, {"name":"Dull Viridian Green","hex":"#19cc33"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":137,"colors":[{"name":"Etruscan Red","hex":"#c9303e"}, {"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Pistachio Green","hex":"#56aa69"}]},
  {"id":138,"colors":[{"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Venice Green","hex":"#6bffb3"}]},
  {"id":139,"colors":[{"name":"Salvia Blue","hex":"#96bfe6"}, {"name":"Deep Indigo","hex":"#000831"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":140,"colors":[{"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Antwarp Blue","hex":"#008aa1"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":141,"colors":[{"name":"Orange","hex":"#ff5200"}, {"name":"Yellow Green","hex":"#a6ff47"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}]},
  {"id":142,"colors":[{"name":"Hydrangea Red","hex":"#9e194d"}, {"name":"Sulphine Yellow","hex":"#baa600"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":143,"colors":[{"name":"Blue","hex":"#0d75ff"}, {"name":"Lilac","hex":"#b875eb"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":144,"colors":[{"name":"Rosolanc Purple","hex":"#b319ab"}, {"name":"Orange","hex":"#ff5200"}, {"name":"Black","hex":"#000000"}]},
  {"id":145,"colors":[{"name":"Brown","hex":"#6c2b11"}, {"name":"Citron Yellow","hex":"#a6d40d"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":146,"colors":[{"name":"Khaki","hex":"#b68400"}, {"name":"Deep Grayish Olive","hex":"#505423"}, {"name":"Diamine Green","hex":"#1b8e13"}]},
  {"id":147,"colors":[{"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Vandyke Red","hex":"#740909"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":148,"colors":[{"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":149,"colors":[{"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Orange","hex":"#ff5200"}, {"name":"Deep Slate Green","hex":"#0f261f"}]},
  {"id":150,"colors":[{"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Citron Yellow","hex":"#a6d40d"}, {"name":"Glaucous Green","hex":"#b3e8c2"}]},
  {"id":151,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}]},
  {"id":152,"colors":[{"name":"Etruscan Red","hex":"#c9303e"}, {"name":"Hay's Russet","hex":"#681916"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}]},
  {"id":153,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Citron Yellow","hex":"#a6d40d"}]},
  {"id":154,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Yellow","hex":"#ffff00"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":155,"colors":[{"name":"Jasper Red","hex":"#fa2b00"}, {"name":"Benzol Green","hex":"#00d973"}, {"name":"Deep Indigo","hex":"#000831"}]},
  {"id":156,"colors":[{"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":157,"colors":[{"name":"Pansy Purple","hex":"#6f0043"}, {"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Olympic Blue","hex":"#4f8fe6"}]},
  {"id":158,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Cinnamon Rufous","hex":"#c2612c"}, {"name":"Night Green","hex":"#7aff00"}]},
  {"id":159,"colors":[{"name":"Khaki","hex":"#b68400"}, {"name":"Calamine BLue","hex":"#80ffcc"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}]},
  {"id":160,"colors":[{"name":"Sulphine Yellow","hex":"#baa600"}, {"name":"Pale Raw Umber","hex":"#5e4017"}, {"name":"Dark Medici Blue","hex":"#417777"}]},
  {"id":161,"colors":[{"name":"Brown","hex":"#6c2b11"}, {"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Helvetia Blue","hex":"#0057ba"}]},
  {"id":162,"colors":[{"name":"Old Rose","hex":"#d94d99"}, {"name":"Rainette Green","hex":"#85b857"}, {"name":"Lilac","hex":"#b875eb"}]},
  {"id":163,"colors":[{"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":164,"colors":[{"name":"Red Orange","hex":"#e81900"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":165,"colors":[{"name":"Cameo Pink","hex":"#e6adcf"}, {"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Vistoris Lake","hex":"#5c2c45"}]},
  {"id":166,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Naples Yellow","hex":"#faed8f"}, {"name":"Deep Slate Green","hex":"#0f261f"}]},
  {"id":167,"colors":[{"name":"Ecru","hex":"#c0b490"}, {"name":"Pale King's Blue","hex":"#abf5ed"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}]},
  {"id":168,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}, {"name":"Veronia Purple","hex":"#7e3075"}]},
  {"id":169,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":170,"colors":[{"name":"Rosolanc Purple","hex":"#b319ab"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":171,"colors":[{"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Glaucous Green","hex":"#b3e8c2"}]},
  {"id":172,"colors":[{"name":"Cinnamon Rufous","hex":"#c2612c"}, {"name":"Antwarp Blue","hex":"#008aa1"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":173,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Madder Brown","hex":"#651300"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":174,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}, {"name":"Taupe Brown","hex":"#6b2e63"}]},
  {"id":175,"colors":[{"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Olive Buff","hex":"#bcd382"}, {"name":"Blue Violet","hex":"#4733ff"}]},
  {"id":176,"colors":[{"name":"Hermosa Pink","hex":"#ffb3f0"}, {"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Calamine BLue","hex":"#80ffcc"}]},
  {"id":177,"colors":[{"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Buffy Citrine","hex":"#888d2a"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}]},
  {"id":178,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}, {"name":"Green Blue","hex":"#2dbc94"}]},
  {"id":179,"colors":[{"name":"Red Orange","hex":"#e81900"}, {"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":180,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Light Mauve","hex":"#9161f2"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":181,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Violet","hex":"#2619d1"}, {"name":"Cotinga Purple","hex":"#340059"}]},
  {"id":182,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Vandyke Brown","hex":"#362304"}, {"name":"Deep Indigo","hex":"#000831"}]},
  {"id":183,"colors":[{"name":"Deep Violet / Plumbeous","hex":"#5c7287"}, {"name":"Veronia Purple","hex":"#7e3075"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":184,"colors":[{"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Light Grayish Olive","hex":"#76844e"}]},
  {"id":185,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Etruscan Red","hex":"#c9303e"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}]},
  {"id":186,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":187,"colors":[{"name":"Helvetia Blue","hex":"#0057ba"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}, {"name":"Aconite Violet","hex":"#9c52f2"}]},
  {"id":188,"colors":[{"name":"Rainette Green","hex":"#85b857"}, {"name":"Salvia Blue","hex":"#96bfe6"}, {"name":"Cobalt Green","hex":"#94ff94"}]},
  {"id":189,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Venice Green","hex":"#6bffb3"}]},
  {"id":190,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"English Red","hex":"#de4500"}, {"name":"Black","hex":"#000000"}]},
  {"id":191,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":192,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Vandyke Brown","hex":"#362304"}, {"name":"Deep Violet / Plumbeous","hex":"#5c7287"}]},
  {"id":193,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Naples Yellow","hex":"#faed8f"}, {"name":"Light Porcelain Green","hex":"#23c17c"}]},
  {"id":194,"colors":[{"name":"Jasper Red","hex":"#fa2b00"}, {"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Olympic Blue","hex":"#4f8fe6"}]},
  {"id":195,"colors":[{"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":196,"colors":[{"name":"Citron Yellow","hex":"#a6d40d"}, {"name":"Pale King's Blue","hex":"#abf5ed"}, {"name":"Blue Violet","hex":"#4733ff"}]},
  {"id":197,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Dark Soft Violet","hex":"#4d52de"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":198,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Green","hex":"#40c945"}]},
  {"id":199,"colors":[{"name":"Ochre Red","hex":"#a7374b"}, {"name":"Light Brownish Olive","hex":"#706934"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":200,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Olive Buff","hex":"#bcd382"}, {"name":"Chromium Green","hex":"#66ab56"}]},
  {"id":201,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Olive","hex":"#718600"}, {"name":"Cobalt Green","hex":"#94ff94"}]},
  {"id":202,"colors":[{"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":203,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Lincoln Green","hex":"#405416"}]},
  {"id":204,"colors":[{"name":"Rosolanc Purple","hex":"#b319ab"}, {"name":"Cinnamon Rufous","hex":"#c2612c"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}]},
  {"id":205,"colors":[{"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":206,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Cinnamon Rufous","hex":"#c2612c"}]},
  {"id":207,"colors":[{"name":"Sudan Brown","hex":"#9b5348"}, {"name":"Glaucous Green","hex":"#b3e8c2"}, {"name":"Black","hex":"#000000"}]},
  {"id":208,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Green Blue","hex":"#2dbc94"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":209,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":210,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Lincoln Green","hex":"#405416"}]},
  {"id":211,"colors":[{"name":"Apricot Orange","hex":"#ff7340"}, {"name":"Olive Yellow","hex":"#99b333"}, {"name":"Deep Indigo","hex":"#000831"}]},
  {"id":212,"colors":[{"name":"Pompeian Red","hex":"#a90636"}, {"name":"Orange Citrine","hex":"#8c6510"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":213,"colors":[{"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Pale King's Blue","hex":"#abf5ed"}]},
  {"id":214,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Sudan Brown","hex":"#9b5348"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":215,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Blue","hex":"#0d75ff"}, {"name":"Eupatorium Purple","hex":"#bf36e0"}]},
  {"id":216,"colors":[{"name":"Jasper Red","hex":"#fa2b00"}, {"name":"Green","hex":"#40c945"}, {"name":"Black","hex":"#000000"}]},
  {"id":217,"colors":[{"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Diamine Green","hex":"#1b8e13"}]},
  {"id":218,"colors":[{"name":"Helvetia Blue","hex":"#0057ba"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}, {"name":"Deep Violet / Plumbeous","hex":"#5c7287"}]},
  {"id":219,"colors":[{"name":"Jasper Red","hex":"#fa2b00"}, {"name":"Dusky Green","hex":"#00592e"}, {"name":"Chromium Green","hex":"#66ab56"}]},
  {"id":220,"colors":[{"name":"Pomegranite Purple","hex":"#b90078"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Aconite Violet","hex":"#9c52f2"}]},
  {"id":221,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Neutral Gray","hex":"#b5d1cc"}, {"name":"Black","hex":"#000000"}]},
  {"id":222,"colors":[{"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Orange Rufous","hex":"#c05200"}]},
  {"id":223,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":224,"colors":[{"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Dark Medici Blue","hex":"#417777"}, {"name":"Taupe Brown","hex":"#6b2e63"}]},
  {"id":225,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Dusky Green","hex":"#00592e"}, {"name":"Dark Slate Purple","hex":"#53225c"}]},
  {"id":226,"colors":[{"name":"Vistoris Lake","hex":"#5c2c45"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":227,"colors":[{"name":"Hermosa Pink","hex":"#ffb3f0"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":228,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":229,"colors":[{"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":230,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Cobalt Green","hex":"#94ff94"}]},
  {"id":231,"colors":[{"name":"Cameo Pink","hex":"#e6adcf"}, {"name":"Hay's Russet","hex":"#681916"}, {"name":"Olympic Blue","hex":"#4f8fe6"}]},
  {"id":232,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Deep Indigo","hex":"#000831"}]},
  {"id":233,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Buffy Citrine","hex":"#888d2a"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":234,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Pale Raw Umber","hex":"#5e4017"}, {"name":"Pale King's Blue","hex":"#abf5ed"}]},
  {"id":235,"colors":[{"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}]},
  {"id":236,"colors":[{"name":"Khaki","hex":"#b68400"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}, {"name":"Purple Drab","hex":"#754260"}]},
  {"id":237,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Madder Brown","hex":"#651300"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":238,"colors":[{"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Cotinga Purple","hex":"#340059"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":239,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Pyrite Yellow","hex":"#c4bf33"}, {"name":"Glaucous Green","hex":"#b3e8c2"}]},
  {"id":240,"colors":[{"name":"Fresh Color","hex":"#ff788c"}, {"name":"Yellow","hex":"#ffff00"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":241,"colors":[{"name":"Red Orange","hex":"#e81900"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Isabella Color","hex":"#c3a55c"}, {"name":"Dark Medici Blue","hex":"#417777"}]},
  {"id":242,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Diamine Green","hex":"#1b8e13"}, {"name":"Black","hex":"#000000"}]},
  {"id":243,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Olive Green","hex":"#58771e"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":244,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Vinaceous Tawny","hex":"#c74300"}, {"name":"Andover Green","hex":"#5c8a73"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":245,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Oil Green","hex":"#6ea900"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":246,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Brick Red","hex":"#a32100"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Cinnamon Buff","hex":"#ffbf6e"}]},
  {"id":247,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Benzol Green","hex":"#00d973"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}]},
  {"id":248,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Khaki","hex":"#b68400"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}, {"name":"Dark Slate Purple","hex":"#53225c"}]},
  {"id":249,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Ecru","hex":"#c0b490"}, {"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Dark Medici Blue","hex":"#417777"}]},
  {"id":250,"colors":[{"name":"Pyrite Yellow","hex":"#c4bf33"}, {"name":"Peach Red","hex":"#ff3319"}, {"name":"Sea Green","hex":"#33ff7d"}, {"name":"Nile Blue","hex":"#bfffe6"}]},
  {"id":251,"colors":[{"name":"Red","hex":"#a10045"}, {"name":"Yellow","hex":"#ffff00"}, {"name":"Diamine Green","hex":"#1b8e13"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":252,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Sulphine Yellow","hex":"#baa600"}, {"name":"Green Blue","hex":"#2dbc94"}]},
  {"id":253,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Apricot Orange","hex":"#ff7340"}, {"name":"Cotinga Purple","hex":"#340059"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":254,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Olive","hex":"#718600"}, {"name":"Laelia Pink","hex":"#cc85d1"}]},
  {"id":255,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Pyrite Yellow","hex":"#c4bf33"}, {"name":"Calamine BLue","hex":"#80ffcc"}, {"name":"Black","hex":"#000000"}]},
  {"id":256,"colors":[{"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Orange","hex":"#ff5200"}, {"name":"Dull Viridian Green","hex":"#19cc33"}, {"name":"Black","hex":"#000000"}]},
  {"id":257,"colors":[{"name":"Spectrum Red","hex":"#f20000"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Blue","hex":"#0d75ff"}, {"name":"Aconite Violet","hex":"#9c52f2"}]},
  {"id":258,"colors":[{"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Olive","hex":"#718600"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":259,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Green Blue","hex":"#2dbc94"}, {"name":"Helvetia Blue","hex":"#0057ba"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":260,"colors":[{"name":"Old Rose","hex":"#d94d99"}, {"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Glaucous Green","hex":"#b3e8c2"}, {"name":"Sea Green","hex":"#33ff7d"}]},
  {"id":261,"colors":[{"name":"Red","hex":"#a10045"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Calamine BLue","hex":"#80ffcc"}, {"name":"Warm Gray","hex":"#9cb29e"}]},
  {"id":262,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Citrine","hex":"#7b6c0d"}, {"name":"Cossack Green","hex":"#328e13"}]},
  {"id":263,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":264,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Red Orange","hex":"#e81900"}, {"name":"Dark Greenish Glaucous","hex":"#b3d9a3"}, {"name":"Cerulian Blue","hex":"#29bdad"}]},
  {"id":265,"colors":[{"name":"Old Rose","hex":"#d94d99"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Olive Yellow","hex":"#99b333"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":266,"colors":[{"name":"Spectrum Red","hex":"#f20000"}, {"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Rainette Green","hex":"#85b857"}, {"name":"Benzol Green","hex":"#00d973"}]},
  {"id":267,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Benzol Green","hex":"#00d973"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":268,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Nile Blue","hex":"#bfffe6"}]},
  {"id":269,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Aconite Violet","hex":"#9c52f2"}, {"name":"Black","hex":"#000000"}]},
  {"id":270,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Olive Green","hex":"#58771e"}, {"name":"Cossack Green","hex":"#328e13"}]},
  {"id":271,"colors":[{"name":"Pomegranite Purple","hex":"#b90078"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Green Blue","hex":"#2dbc94"}, {"name":"Deep Slate Green","hex":"#0f261f"}]},
  {"id":272,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Orange","hex":"#ff5200"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":273,"colors":[{"name":"Hermosa Pink","hex":"#ffb3f0"}, {"name":"Pansy Purple","hex":"#6f0043"}, {"name":"Sudan Brown","hex":"#9b5348"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":274,"colors":[{"name":"Peach Red","hex":"#ff3319"}, {"name":"Dark Citrine","hex":"#7e8743"}, {"name":"Olympic Blue","hex":"#4f8fe6"}, {"name":"Light Mauve","hex":"#9161f2"}]},
  {"id":275,"colors":[{"name":"Etruscan Red","hex":"#c9303e"}, {"name":"Ecru","hex":"#c0b490"}, {"name":"Madder Brown","hex":"#651300"}, {"name":"Taupe Brown","hex":"#6b2e63"}]},
  {"id":276,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Yellow Green","hex":"#a6ff47"}, {"name":"Black","hex":"#000000"}]},
  {"id":277,"colors":[{"name":"Spinel Red","hex":"#ff4dc9"}, {"name":"Rosolanc Purple","hex":"#b319ab"}, {"name":"Olive","hex":"#718600"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":278,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Olive Ocher","hex":"#d1bd19"}, {"name":"Cossack Green","hex":"#328e13"}, {"name":"Dusky Green","hex":"#00592e"}]},
  {"id":279,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Ecru","hex":"#c0b490"}, {"name":"Dark Tyrian Blue","hex":"#0d2b52"}]},
  {"id":280,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Lincoln Green","hex":"#405416"}, {"name":"Laelia Pink","hex":"#cc85d1"}, {"name":"Taupe Brown","hex":"#6b2e63"}]},
  {"id":281,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Benzol Green","hex":"#00d973"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":282,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Maple","hex":"#c2975a"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Lilac","hex":"#b875eb"}]},
  {"id":283,"colors":[{"name":"Ochre Red","hex":"#a7374b"}, {"name":"Pale Burnt Lake","hex":"#730f1f"}, {"name":"Venice Green","hex":"#6bffb3"}, {"name":"Chromium Green","hex":"#66ab56"}]},
  {"id":284,"colors":[{"name":"Eugenia Red | A","hex":"#ed3d66"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Sea Green","hex":"#33ff7d"}, {"name":"Dusky Green","hex":"#00592e"}]},
  {"id":285,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Peach Red","hex":"#ff3319"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":286,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Peacock Blue","hex":"#00cf91"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":287,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Pyrite Yellow","hex":"#c4bf33"}, {"name":"Pale King's Blue","hex":"#abf5ed"}, {"name":"Calamine BLue","hex":"#80ffcc"}]},
  {"id":288,"colors":[{"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Sepia","hex":"#503d00"}, {"name":"Taupe Brown","hex":"#6b2e63"}, {"name":"Black","hex":"#000000"}]},
  {"id":289,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Light Green Yellow","hex":"#bdf226"}, {"name":"Violet Blue","hex":"#202d85"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":290,"colors":[{"name":"Vistoris Lake","hex":"#5c2c45"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Lincoln Green","hex":"#405416"}, {"name":"Cobalt Green","hex":"#94ff94"}]},
  {"id":291,"colors":[{"name":"Light Green Yellow","hex":"#bdf226"}, {"name":"Sea Green","hex":"#33ff7d"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Calamine BLue","hex":"#80ffcc"}]},
  {"id":292,"colors":[{"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Isabella Color","hex":"#c3a55c"}, {"name":"Ecru","hex":"#c0b490"}]},
  {"id":293,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Artemesia Green","hex":"#65a98f"}, {"name":"Green","hex":"#40c945"}]},
  {"id":294,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Cossack Green","hex":"#328e13"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":295,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Yellow","hex":"#ffff00"}, {"name":"Blue","hex":"#0d75ff"}, {"name":"Dull Violet Black","hex":"#06004f"}]},
  {"id":296,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"Pale Raw Umber","hex":"#5e4017"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":297,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Olive Green","hex":"#58771e"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":298,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Peach Red","hex":"#ff3319"}, {"name":"Black","hex":"#000000"}]},
  {"id":299,"colors":[{"name":"Indian Lake","hex":"#cc1a97"}, {"name":"Vinaceous Cinnamon","hex":"#f59994"}, {"name":"Oil Green","hex":"#6ea900"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":300,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Calamine BLue","hex":"#80ffcc"}]},
  {"id":301,"colors":[{"name":"Spectrum Red","hex":"#f20000"}, {"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Rainette Green","hex":"#85b857"}, {"name":"Aconite Violet","hex":"#9c52f2"}]},
  {"id":302,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Ecru","hex":"#c0b490"}, {"name":"Nile Blue","hex":"#bfffe6"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":303,"colors":[{"name":"Naples Yellow","hex":"#faed8f"}, {"name":"Peach Red","hex":"#ff3319"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":304,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Dark Citrine","hex":"#7e8743"}, {"name":"Benzol Green","hex":"#00d973"}]},
  {"id":305,"colors":[{"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Citron Yellow","hex":"#a6d40d"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":306,"colors":[{"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Benzol Green","hex":"#00d973"}, {"name":"Dull Viridian Green","hex":"#19cc33"}, {"name":"Nile Blue","hex":"#bfffe6"}]},
  {"id":307,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Grayish Lavender - A","hex":"#b8b8ff"}, {"name":"Aconite Violet","hex":"#9c52f2"}, {"name":"Cotinga Purple","hex":"#340059"}]},
  {"id":308,"colors":[{"name":"Fawn","hex":"#d1b0b3"}, {"name":"Scarlet","hex":"#d50c42"}, {"name":"English Red","hex":"#de4500"}, {"name":"Cobalt Green","hex":"#94ff94"}]},
  {"id":309,"colors":[{"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Apricot Orange","hex":"#ff7340"}, {"name":"Violet Blue","hex":"#202d85"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}]},
  {"id":310,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Pinkish Cinnamon","hex":"#f2ad78"}, {"name":"Olive","hex":"#718600"}, {"name":"Deep Slate Olive","hex":"#172713"}]},
  {"id":311,"colors":[{"name":"Pompeian Red","hex":"#a90636"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Dark Greenish Glaucous","hex":"#b3d9a3"}, {"name":"Light Green Yellow","hex":"#bdf226"}]},
  {"id":312,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Artemesia Green","hex":"#65a98f"}, {"name":"Helvetia Blue","hex":"#0057ba"}]},
  {"id":313,"colors":[{"name":"Carmine","hex":"#d60036"}, {"name":"Yellow","hex":"#ffff00"}, {"name":"Diamine Green","hex":"#1b8e13"}, {"name":"Black","hex":"#000000"}]},
  {"id":314,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Hay's Russet","hex":"#681916"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}, {"name":"Dusky Madder Violet","hex":"#2d0060"}]},
  {"id":315,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Golden Yellow","hex":"#fa9442"}, {"name":"Eupatorium Purple","hex":"#bf36e0"}]},
  {"id":316,"colors":[{"name":"Vandyke Red","hex":"#740909"}, {"name":"Dull Viridian Green","hex":"#19cc33"}, {"name":"Violet","hex":"#2619d1"}, {"name":"Red Violet","hex":"#3400a3"}]},
  {"id":317,"colors":[{"name":"Light Pinkish Cinnamon","hex":"#ffbf99"}, {"name":"Ecru","hex":"#c0b490"}, {"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Turquoise Green","hex":"#b5ffc2"}]},
  {"id":318,"colors":[{"name":"Light Brownish Olive","hex":"#706934"}, {"name":"Blackish Olive","hex":"#324e2a"}, {"name":"Dusky Green","hex":"#00592e"}, {"name":"Deep Slate Green","hex":"#0f261f"}]},
  {"id":319,"colors":[{"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Apricot Yellow","hex":"#ffe600"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Cossack Green","hex":"#328e13"}]},
  {"id":320,"colors":[{"name":"Coral Red","hex":"#ff7399"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Oil Green","hex":"#6ea900"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}]},
  {"id":321,"colors":[{"name":"Light Brown Drab","hex":"#b08699"}, {"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Salvia Blue","hex":"#96bfe6"}]},
  {"id":322,"colors":[{"name":"Spectrum Red","hex":"#f20000"}, {"name":"Brick Red","hex":"#a32100"}, {"name":"Eupatorium Purple","hex":"#bf36e0"}, {"name":"Blue Violet","hex":"#4733ff"}]},
  {"id":323,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Citron Yellow","hex":"#a6d40d"}, {"name":"Madder Brown","hex":"#651300"}, {"name":"Black","hex":"#000000"}]},
  {"id":324,"colors":[{"name":"Pompeian Red","hex":"#a90636"}, {"name":"Olympic Blue","hex":"#4f8fe6"}, {"name":"Aconite Violet","hex":"#9c52f2"}, {"name":"Neutral Gray","hex":"#b5d1cc"}]},
  {"id":325,"colors":[{"name":"Eugenia Red | B","hex":"#e62e73"}, {"name":"Naples Yellow","hex":"#faed8f"}, {"name":"Yellow Ocher","hex":"#e0b81f"}, {"name":"Deep Slate Green","hex":"#0f261f"}]},
  {"id":326,"colors":[{"name":"Sulpher Yellow","hex":"#f5f5b8"}, {"name":"Peach Red","hex":"#ff3319"}, {"name":"Yellow Green","hex":"#a6ff47"}, {"name":"Night Green","hex":"#7aff00"}]},
  {"id":327,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Raw Sienna","hex":"#b85e00"}, {"name":"Ecru","hex":"#c0b490"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}]},
  {"id":328,"colors":[{"name":"Brick Red","hex":"#a32100"}, {"name":"Apricot Orange","hex":"#ff7340"}, {"name":"Vandyke Brown","hex":"#362304"}, {"name":"Light Porcelain Green","hex":"#23c17c"}]},
  {"id":329,"colors":[{"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}, {"name":"Cotinga Purple","hex":"#340059"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":330,"colors":[{"name":"Olive Buff","hex":"#bcd382"}, {"name":"Nile Blue","hex":"#bfffe6"}, {"name":"Salvia Blue","hex":"#96bfe6"}, {"name":"Green Blue","hex":"#2dbc94"}]},
  {"id":331,"colors":[{"name":"Indian Lake","hex":"#cc1a97"}, {"name":"Dull Violet Black","hex":"#06004f"}, {"name":"Light Mauve","hex":"#9161f2"}, {"name":"Violet","hex":"#2619d1"}]},
  {"id":332,"colors":[{"name":"Coral Red","hex":"#ff7399"}, {"name":"Scarlet","hex":"#d50c42"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Dusky Green","hex":"#00592e"}]},
  {"id":333,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Lemon Yellow","hex":"#f2ff26"}, {"name":"Cobalt Green","hex":"#94ff94"}, {"name":"Blue","hex":"#0d75ff"}]},
  {"id":334,"colors":[{"name":"Seashell Pink","hex":"#ffcfc4"}, {"name":"Olive","hex":"#718600"}, {"name":"Yellow Green","hex":"#a6ff47"}, {"name":"Antwarp Blue","hex":"#008aa1"}]},
  {"id":335,"colors":[{"name":"Vandyke Red","hex":"#740909"}, {"name":"Yellow Orange","hex":"#ff8c00"}, {"name":"Violet","hex":"#2619d1"}, {"name":"Slate Color","hex":"#1b3644"}]},
  {"id":336,"colors":[{"name":"Eosine Pink","hex":"#ff5ec4"}, {"name":"Hay's Russet","hex":"#681916"}, {"name":"Pale Lemon Yellow","hex":"#fff59e"}, {"name":"Blackish Olive","hex":"#324e2a"}]},
  {"id":337,"colors":[{"name":"Vistoris Lake","hex":"#5c2c45"}, {"name":"Laelia Pink","hex":"#cc85d1"}, {"name":"Violet Carmine","hex":"#531745"}, {"name":"Black","hex":"#000000"}]},
  {"id":338,"colors":[{"name":"Carmine Red","hex":"#a10b2b"}, {"name":"Orange Yellow","hex":"#ffab00"}, {"name":"Dusky Green","hex":"#00592e"}, {"name":"Grayish Lavender - B","hex":"#bfabcc"}]},
  {"id":339,"colors":[{"name":"Ochraceous Salmon","hex":"#d99e73"}, {"name":"English Red","hex":"#de4500"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}, {"name":"Violet Blue","hex":"#202d85"}]},
  {"id":340,"colors":[{"name":"Peach Red","hex":"#ff3319"}, {"name":"Sea Green","hex":"#33ff7d"}, {"name":"Neutral Gray","hex":"#b5d1cc"}, {"name":"Black","hex":"#000000"}]},
  {"id":341,"colors":[{"name":"Grenadine Pink","hex":"#ff616b"}, {"name":"Cossack Green","hex":"#328e13"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Light Glaucous Blue","hex":"#a6e6db"}]},
  {"id":342,"colors":[{"name":"Corinthian Pink","hex":"#ffa6d9"}, {"name":"Cream Yellow","hex":"#ffb852"}, {"name":"Orange Citrine","hex":"#8c6510"}, {"name":"Deep Slate Olive","hex":"#172713"}]},
  {"id":343,"colors":[{"name":"Burnt Sienna","hex":"#a93400"}, {"name":"Ivory Buff","hex":"#ebd999"}, {"name":"Deep Grayish Olive","hex":"#505423"}, {"name":"Vandar Poel's Blue","hex":"#003e83"}]},
  {"id":344,"colors":[{"name":"Cinnamon Buff","hex":"#ffbf6e"}, {"name":"Deep Lyons Blue","hex":"#0024cc"}, {"name":"Aconite Violet","hex":"#9c52f2"}, {"name":"Black","hex":"#000000"}]},
  {"id":345,"colors":[{"name":"Hay's Russet","hex":"#681916"}, {"name":"Nile Blue","hex":"#bfffe6"}, {"name":"Venice Green","hex":"#6bffb3"}, {"name":"Blue Violet","hex":"#4733ff"}]},
  {"id":346,"colors":[{"name":"Rosolanc Purple","hex":"#b319ab"}, {"name":"Turquoise Green","hex":"#b5ffc2"}, {"name":"Light Green Yellow","hex":"#bdf226"}, {"name":"Andover Green","hex":"#5c8a73"}]},
  {"id":347,"colors":[{"name":"Olive Yellow","hex":"#99b333"}, {"name":"Sea Green","hex":"#33ff7d"}, {"name":"Helvetia Blue","hex":"#0057ba"}, {"name":"Lilac","hex":"#b875eb"}]},
  {"id":348,"colors":[{"name":"Olive Buff","hex":"#bcd382"}, {"name":"Cossack Green","hex":"#328e13"}, {"name":"Deep Slate Olive","hex":"#172713"}, {"name":"Cotinga Purple","hex":"#340059"}]}
];

/* Elenco piatto di tutti i colori nominati, per la tendina di scelta */
const ALL_COLORS = (() => {
  const seen = new Map();
  COMBINATIONS.forEach(c => c.colors.forEach(col => {
    if(!seen.has(col.hex)) seen.set(col.hex, col);
  }));
  return [...seen.values()].sort((a,b) => a.name.localeCompare(b.name));
})();

/* ---------- Stato ---------- */
let selectedCount = 2;
let currentPalette = null; // {chosen:{hex,name}, others:[{hex,name}...]}
let expandedBandIndex = null; // indice della fascia ingrandita (accordion), null = nessuna
let activeColorTag = null; // 'aka' | 'shiro' | 'kuro' | 'ao' | null (filtro nella tendina di sfoglio)
let searchQuery = ''; // testo digitato nel campo colore, per filtrare i suggerimenti
let showRecent = false; // true quando la tendina mostra la cronologia invece della lista completa

/* ---------- Utility colore ---------- */
function isValidHex(hex){
  return /^#([0-9a-f]{6})$/i.test(hex);
}
function normalizeHex(hex){
  if(!hex) return null;
  hex = hex.trim();
  if(hex[0] !== '#') hex = '#' + hex;
  return isValidHex(hex) ? hex.toLowerCase() : null;
}
/* Interpreta stringhe tipo "168, 57, 31" o "rgb(168,57,31)" in un hex.
   Ritorna null se il formato non corrisponde o i valori non sono 0-255. */
function parseRgbString(str){
  const m = str.trim().match(/^\s*(?:rgba?\s*\()?\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)?\s*$/i);
  if(!m) return null;
  const [r,g,b] = [Number(m[1]), Number(m[2]), Number(m[3])];
  if([r,g,b].some(v => v > 255)) return null;
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
}
function hexToRgb(hex){
  const n = parseInt(hex.slice(1), 16);
  return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
}
function hexToHsl(hex){
  const {r,g,b} = hexToRgb(hex);
  const rn = r/255, gn = g/255, bn = b/255;
  const max = Math.max(rn,gn,bn), min = Math.min(rn,gn,bn);
  const l = (max+min)/2;
  let h = 0, s = 0;
  const d = max - min;
  if(d !== 0){
    s = d / (1 - Math.abs(2*l - 1));
    switch(max){
      case rn: h = 60 * (((gn-bn)/d) % 6); break;
      case gn: h = 60 * (((bn-rn)/d) + 2); break;
      case bn: h = 60 * (((rn-gn)/d) + 4); break;
    }
    if(h < 0) h += 360;
  }
  return { h, s, l };
}
function hslToHex(h, s, l){
  const c = (1 - Math.abs(2*l - 1)) * s;
  const x = c * (1 - Math.abs((h/60) % 2 - 1));
  const m = l - c/2;
  let r=0, g=0, b=0;
  if(h < 60){ r=c; g=x; b=0; }
  else if(h < 120){ r=x; g=c; b=0; }
  else if(h < 180){ r=0; g=c; b=x; }
  else if(h < 240){ r=0; g=x; b=c; }
  else if(h < 300){ r=x; g=0; b=c; }
  else { r=c; g=0; b=x; }
  const R = Math.round((r+m)*255), G = Math.round((g+m)*255), B = Math.round((b+m)*255);
  return '#' + [R,G,B].map(v => v.toString(16).padStart(2,'0')).join('');
}
/* Classificazione in 4 aggettivi cromatici giapponesi antichi (aka/kuro/shiro/ao),
   ricostruita euristicamente sulla logica luminosità/tonalità attribuita ai
   termini dagli studiosi (non un criterio storico documentato per questi colori
   specifici, che sono nomi occidentali del '900):
   - shiro (chiaro)  -> luminosità molto alta
   - kuro (scuro)    -> luminosità molto bassa
   - aka (caldo)     -> luminosità media, tonalità calda (rosso-arancio-giallo-magenta)
   - ao (freddo)     -> luminosità media, tonalità fredda (verde-ciano-blu-viola) */
function classifyColorTag(hex){
  const {h, l} = hexToHsl(hex);
  if(l >= 0.78) return 'shiro';
  if(l <= 0.22) return 'kuro';
  return (h < 65 || h >= 330) ? 'aka' : 'ao';
}
function colorDistance(hexA, hexB){
  const a = hexToRgb(hexA), b = hexToRgb(hexB);
  return Math.sqrt((a.r-b.r)**2 + (a.g-b.g)**2 + (a.b-b.b)**2);
}
function contrastText(hex){
  const {r,g,b} = hexToRgb(hex);
  const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
  return luminance > 0.6 ? '#1a1a1a' : '#f5f5f5';
}

/* ---------- Matching ---------- */
function findBestCombo(hex, count){
  const candidates = COMBINATIONS.filter(c => c.colors.length === count);
  if(candidates.length === 0) return null;

  let best = null, bestDist = Infinity, bestColor = null;
  candidates.forEach(combo => {
    combo.colors.forEach(col => {
      const d = colorDistance(hex, col.hex);
      if(d < bestDist){ bestDist = d; best = combo; bestColor = col; }
    });
  });
  if(!best) return null;
  const others = best.colors.filter(c => c.hex !== bestColor.hex);
  return { matchedCombo: best, others, chosenName: bestColor.name, chosenDist: bestDist };
}

/* ---------- Rendering ---------- */
function renderBands(chosenHex, others){
  const bandsEl = document.getElementById('bands');
  const emptyEl = document.getElementById('empty-state');
  bandsEl.innerHTML = '';
  expandedBandIndex = null;
  closeCodeMenu();

  const chosenName = (currentPalette && currentPalette.chosen && currentPalette.chosen.hex === chosenHex)
    ? currentPalette.chosen.name
    : null;
  const chosenWadaName = (currentPalette && currentPalette.chosen && currentPalette.chosen.hex === chosenHex)
    ? currentPalette.chosen.wadaName
    : null;
  const chosenDist = (currentPalette && currentPalette.chosen && currentPalette.chosen.hex === chosenHex)
    ? currentPalette.chosen.dist
    : null;
  const all = [{hex:chosenHex, name:chosenName, wadaName:chosenWadaName, dist:chosenDist}, ...others];
  all.forEach((entry, i) => {
    const band = document.createElement('div');
    band.className = 'band';
    band.style.background = entry.hex;
    band.style.color = contrastText(entry.hex);
    band.tabIndex = 0;
    band.setAttribute('role', 'button');
    band.setAttribute('aria-label', `Ingrandisci la fascia ${entry.name || entry.wadaName || entry.hex.toUpperCase()}`);
    band.addEventListener('click', (e) => {
      if(e.target.closest('.band-codes')) return;
      toggleExpandBand(i);
    });
    band.addEventListener('keydown', (e) => {
      if(e.target.closest('.band-codes')) return;
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggleExpandBand(i);
      }
    });

    if(entry.name || entry.wadaName){
      const nameEl = document.createElement('span');
      nameEl.className = 'band-name';
      nameEl.textContent = entry.name || entry.wadaName;

      const showReference = entry.name && entry.wadaName && entry.wadaName !== entry.name;
      if(showReference){
        nameEl.appendChild(document.createElement('br'));
        const refEl = document.createElement('span');
        refEl.className = 'band-ref';
        refEl.textContent = `≈ ${entry.wadaName}`;
        refEl.title = `Nessuna combinazione Wada da ${1 + others.length} colori contiene "${entry.name}": il colore Wada di riferimento più vicino è "${entry.wadaName}"`;
        if(entry.dist && entry.dist >= 1){
          const deltaEl = document.createElement('span');
          deltaEl.className = 'band-delta';
          deltaEl.textContent = ` Δ ${Math.round(entry.dist)}`;
          deltaEl.title = 'Differenza cromatica dal colore Wada di riferimento (distanza euclidea RGB, 0 = identico, max ~442)';
          refEl.appendChild(deltaEl);
        }
        nameEl.appendChild(refEl);
      } else if(entry.dist && entry.dist >= 1){
        const deltaEl = document.createElement('span');
        deltaEl.className = 'band-delta';
        deltaEl.textContent = ` Δ ${Math.round(entry.dist)}`;
        deltaEl.title = 'Differenza cromatica dal colore Wada più vicino (distanza euclidea RGB, 0 = identico, max ~442)';
        nameEl.appendChild(deltaEl);
      }
      band.appendChild(nameEl);
    }

    const {r,g,b} = hexToRgb(entry.hex);
    const codes = document.createElement('div');
    codes.className = 'band-codes';
    codes.tabIndex = 0;
    codes.setAttribute('role', 'button');
    codes.setAttribute('aria-label', `Codici colore ${entry.hex.toUpperCase()}, apri menu copia o vai al colore`);
    codes.innerHTML = `
      <span class="code-line code-rgb">RGB ${r}, ${g}, ${b}</span>
      <span class="code-line code-hex">${entry.hex.toUpperCase()}</span>
    `;
    codes.addEventListener('click', (e) => {
      e.stopPropagation();
      openCodeMenu(codes, entry.hex);
    });
    codes.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        e.stopPropagation();
        openCodeMenu(codes, entry.hex);
      }
    });
    band.appendChild(codes);

    bandsEl.appendChild(band);
  });

  bandsEl.style.display = 'flex';
  emptyEl.style.display = 'none';
  updateStarState();
  document.getElementById('simulate-toggle').disabled = false;
  if(isSimulationOpen()) renderSimulation();
}

/* ---------- Accordion: click sul background ingrandisce la fascia ---------- */
function toggleExpandBand(i){
  expandedBandIndex = (expandedBandIndex === i) ? null : i;
  applyBandSizes();
}
function applyBandSizes(){
  document.querySelectorAll('#bands .band').forEach((band, idx) => {
    if(expandedBandIndex === null){
      band.style.flexGrow = 1;
    } else if(idx === expandedBandIndex){
      band.style.flexGrow = 6;
    } else {
      band.style.flexGrow = 1;
    }
  });
}

/* ---------- Tendina sui codici colore (copia / vai al colore) ---------- */
let codeMenuAnchor = null;
function closeCodeMenu(returnFocus){
  const existing = document.getElementById('code-menu');
  if(existing) existing.remove();
  document.removeEventListener('click', closeCodeMenuOnOutsideClick);
  document.removeEventListener('keydown', closeCodeMenuOnEscape);
  if(returnFocus && codeMenuAnchor) codeMenuAnchor.focus();
  codeMenuAnchor = null;
}
function closeCodeMenuOnOutsideClick(e){
  const menu = document.getElementById('code-menu');
  if(menu && !menu.contains(e.target)){
    closeCodeMenu(false);
  }
}
function closeCodeMenuOnEscape(e){
  if(e.key === 'Escape'){
    closeCodeMenu(true);
  }
}
function positionMenu(menu, anchorEl, estHeight){
  const rect = anchorEl.getBoundingClientRect();
  const menuWidth = 190;
  const spaceBelow = window.innerHeight - rect.bottom;
  const openUpward = spaceBelow < estHeight + 12 && rect.top > estHeight + 12;
  if(openUpward){
    menu.style.top = `${rect.top + window.scrollY - estHeight - 4}px`;
  } else {
    menu.style.top = `${rect.bottom + window.scrollY + 4}px`;
  }
  menu.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - menuWidth - 8)}px`;
}

function openCodeMenu(anchorEl, hex){
  closeCodeMenu(false);
  codeMenuAnchor = anchorEl;
  const menu = document.createElement('div');
  menu.id = 'code-menu';
  menu.className = 'code-menu';

  function renderTopLevel(){
    menu.innerHTML = '';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-menu-item';
    copyBtn.textContent = 'Copia';
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      renderCopyLevel();
      positionMenu(menu, anchorEl, menu.offsetHeight);
      menu.firstChild.focus();
    });

    const gotoBtn = document.createElement('button');
    gotoBtn.className = 'code-menu-item';
    gotoBtn.textContent = 'Vai al colore';
    gotoBtn.addEventListener('click', () => {
      closeCodeMenu(false);
      document.getElementById('hex-input').value = hex;
      applyColor(hex);
    });

    menu.appendChild(copyBtn);
    menu.appendChild(gotoBtn);
  }

  function copyValue(value, btn){
    navigator.clipboard.writeText(value).then(() => {
      btn.textContent = 'Copiato!';
      setTimeout(() => closeCodeMenu(true), 700);
    }, () => {
      btn.textContent = 'Errore nella copia';
    });
  }

  function renderCopyLevel(){
    menu.innerHTML = '';
    const {r,g,b} = hexToRgb(hex);

    const rgbBtn = document.createElement('button');
    rgbBtn.className = 'code-menu-item';
    rgbBtn.textContent = 'Copia RGB';
    rgbBtn.addEventListener('click', () => copyValue(`${r}, ${g}, ${b}`, rgbBtn));

    const hexBtn = document.createElement('button');
    hexBtn.className = 'code-menu-item';
    hexBtn.textContent = 'Copia HEX';
    hexBtn.addEventListener('click', () => copyValue(hex.toUpperCase(), hexBtn));

    menu.appendChild(rgbBtn);
    menu.appendChild(hexBtn);
  }

  renderTopLevel();
  document.body.appendChild(menu);
  positionMenu(menu, anchorEl, menu.offsetHeight);

  menu.firstChild.focus();
  setTimeout(() => {
    document.addEventListener('click', closeCodeMenuOnOutsideClick);
    document.addEventListener('keydown', closeCodeMenuOnEscape);
  }, 0);
}

function showEmptyMessage(msg){
  document.getElementById('bands').style.display = 'none';
  const emptyEl = document.getElementById('empty-state');
  emptyEl.textContent = msg;
  emptyEl.style.display = 'flex';
  document.getElementById('simulate-toggle').disabled = true;
}

/* Verifica se un hex corrisponde esattamente a un colore Wada catalogato,
   indipendentemente dalla dimensione di combinazione richiesta. Serve a
   distinguere "il colore che hai chiesto" da "il colore Wada di
   riferimento più vicino", che possono differire quando il colore
   richiesto non compare in nessuna combinazione di quella dimensione. */
function exactColorName(hex){
  const found = ALL_COLORS.find(c => c.hex === hex);
  return found ? found.name : null;
}

function applyColor(hex){
  const normalized = normalizeHex(hex);
  if(!normalized){
    showEmptyMessage('Codice HEX non valido. Prova con un formato tipo #a8391f.');
    currentPalette = null;
    return;
  }
  const result = findBestCombo(normalized, selectedCount);
  if(!result){
    showEmptyMessage(`Nessuna combinazione da ${selectedCount} colori trovata. Prova con 2.`);
    currentPalette = null;
    return;
  }
  const requestedName = exactColorName(normalized);
  currentPalette = {
    chosen: { hex: normalized, name: requestedName, wadaName: result.chosenName, dist: result.chosenDist },
    others: result.others
  };
  addRecent({ hex: normalized, name: requestedName });
  renderBands(normalized, result.others);
}

/* ---------- Tendina colori ---------- */
const TAG_LABELS = {
  aka:   { abbr: 'Aka',   title: 'colori caldi' },
  shiro: { abbr: 'Shiro', title: 'colori chiari' },
  kuro:  { abbr: 'Kuro',  title: 'colori scuri' },
  ao:    { abbr: 'Ao',    title: 'colori freddi' }
};

function buildSwatchDropdown(){
  const dropdown = document.getElementById('swatch-dropdown');
  dropdown.innerHTML = '';

  const favoriteHexes = new Set(getFavorites().map(f => f.palette.chosen.hex));
  const recentEntries = getRecent().filter(r => !favoriteHexes.has(r.hex));
  if(recentEntries.length === 0) showRecent = false; // cronologia svuotata (es. tutto già nei preferiti)

  const tagBar = document.createElement('div');
  tagBar.className = 'tag-bar';
  ['aka','shiro','kuro','ao'].forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-btn';
    btn.classList.toggle('active', !showRecent && activeColorTag === tag);
    btn.innerHTML = `<abbr title="${TAG_LABELS[tag].title}">${TAG_LABELS[tag].abbr}</abbr>`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showRecent = false;
      activeColorTag = (activeColorTag === tag) ? null : tag;
      buildSwatchDropdown();
    });
    tagBar.appendChild(btn);
  });
  if(recentEntries.length > 0){
    const recentBtn = document.createElement('button');
    recentBtn.className = 'tag-btn';
    recentBtn.classList.toggle('active', showRecent);
    recentBtn.setAttribute('aria-label', 'Colori cercati di recente, non ancora nei preferiti');
    recentBtn.setAttribute('title', 'Colori cercati di recente, non ancora nei preferiti');
    recentBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 3v5h5"/>
        <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/>
        <path d="M12 7v5l4 2"/>
      </svg>
    `;
    recentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showRecent = !showRecent;
      if(showRecent) activeColorTag = null;
      buildSwatchDropdown();
    });
    tagBar.appendChild(recentBtn);
  }
  dropdown.appendChild(tagBar);

  const list = document.createElement('div');
  list.className = 'swatch-list';
  let colors = showRecent
    ? recentEntries
    : (activeColorTag ? ALL_COLORS.filter(col => classifyColorTag(col.hex) === activeColorTag) : ALL_COLORS);

  if(searchQuery){
    const q = searchQuery.toLowerCase();
    colors = colors.filter(col =>
      (col.name && col.name.toLowerCase().includes(q)) || col.hex.toLowerCase().includes(q)
    );
  }

  if(colors.length === 0){
    const empty = document.createElement('p');
    empty.className = 'fav-empty';
    empty.textContent = searchQuery
      ? 'Nessun colore corrisponde alla ricerca.'
      : (showRecent ? 'Nessun colore recente da mostrare.' : 'Nessun colore in questa categoria.');
    list.appendChild(empty);
  }

  colors.forEach(col => {
    const row = document.createElement('div');
    row.className = 'swatch-row';
    row.tabIndex = 0;
    row.setAttribute('role', 'button');
    row.setAttribute('aria-label', `${col.name || col.hex.toUpperCase()}, ${col.hex.toUpperCase()}`);
    row.innerHTML = `
      <span class="swatch-chip" style="background:${col.hex}"></span>
      <span class="swatch-name">${col.name || col.hex.toUpperCase()}</span>
      <span class="swatch-hex">${col.hex.toUpperCase()}</span>
    `;
    const selectRow = () => {
      document.getElementById('hex-input').value = col.hex;
      searchQuery = '';
      applyColor(col.hex);
      dropdown.classList.remove('open');
      document.getElementById('hex-input').focus();
    };
    row.addEventListener('click', selectRow);
    row.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        selectRow();
      }
    });
    list.appendChild(row);
  });
  dropdown.appendChild(list);
}

/* ---------- Cronologia colori cercati ---------- */
const RECENT_KEY = 'wada-app-recent';
const RECENT_LIMIT = 15;

function getRecent(){
  try{ return JSON.parse(localStorage.getItem(RECENT_KEY)) || []; }
  catch(e){ return []; }
}
function addRecent(entry){
  try{
    let recent = getRecent().filter(r => r.hex !== entry.hex);
    recent.unshift({ hex: entry.hex, name: entry.name || null, savedAt: Date.now() });
    if(recent.length > RECENT_LIMIT) recent = recent.slice(0, RECENT_LIMIT);
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
  } catch(e){ /* storage non disponibile: la cronologia semplicemente non persiste */ }
}

/* ---------- Preferiti ---------- */
const FAV_KEY = 'wada-app-favorites';
let favSearchQuery = '';
let favSortMode = 'recent';

function getFavorites(){
  try{ return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch(e){ return []; }
}
function saveFavorites(list){
  try{ localStorage.setItem(FAV_KEY, JSON.stringify(list)); }
  catch(e){ /* storage non disponibile */ }
}
function paletteKey(p){
  return [p.chosen.hex, ...p.others.map(o=>o.hex)].join('-');
}
function isCurrentSaved(){
  if(!currentPalette) return false;
  const favs = getFavorites();
  return favs.some(f => f.key === paletteKey(currentPalette));
}
function updateStarState(){
  const starBtn = document.getElementById('star-btn');
  starBtn.classList.toggle('is-fav', isCurrentSaved());
}
function toggleFavorite(){
  if(!currentPalette) return;
  const favs = getFavorites();
  const key = paletteKey(currentPalette);
  const idx = favs.findIndex(f => f.key === key);
  if(idx >= 0){
    favs.splice(idx, 1);
  } else {
    favs.unshift({ key, savedAt: Date.now(), palette: currentPalette });
  }
  saveFavorites(favs);
  updateStarState();
  renderFavoritesList();
}
function renderFavoritesList(){
  const listEl = document.getElementById('fav-list');
  const allFavs = getFavorites();
  let favs = [...allFavs];

  if(favSearchQuery){
    const q = favSearchQuery.toLowerCase();
    favs = favs.filter(fav => {
      const all = [fav.palette.chosen, ...fav.palette.others];
      return all.some(c => (c.name && c.name.toLowerCase().includes(q)) || c.hex.toLowerCase().includes(q));
    });
  }

  if(favSortMode === 'alpha'){
    favs.sort((a,b) => {
      const nameA = a.palette.chosen.name || a.palette.chosen.hex;
      const nameB = b.palette.chosen.name || b.palette.chosen.hex;
      return nameA.localeCompare(nameB, 'it');
    });
  } else if(favSortMode === 'hue'){
    favs.sort((a,b) => hexToHsl(a.palette.chosen.hex).h - hexToHsl(b.palette.chosen.hex).h);
  } else if(favSortMode === 'count'){
    favs.sort((a,b) => (1 + a.palette.others.length) - (1 + b.palette.others.length));
  }
  /* 'recent' = ordine di salvataggio, già garantito da unshift in toggleFavorite */

  listEl.innerHTML = '';
  if(allFavs.length === 0){
    listEl.innerHTML = '<p class="fav-empty">Nessuna combinazione salvata ancora. Scegli un colore e clicca la stellina.</p>';
    return;
  }
  if(favs.length === 0){
    listEl.innerHTML = '<p class="fav-empty">Nessun preferito corrisponde alla ricerca.</p>';
    return;
  }
  favs.forEach(fav => {
    const all = [fav.palette.chosen, ...fav.palette.others];
    const item = document.createElement('div');
    item.className = 'fav-item';
    item.innerHTML = `
      <div class="fav-swatches" tabindex="0" role="button" aria-label="Ricarica combinazione ${all.map(c=>c.hex.toUpperCase()).join(', ')}">
        ${all.map(c => `<span style="background:${c.hex}"></span>`).join('')}
      </div>
      <div class="fav-meta">
        <span>${all.map(c=>c.hex.toUpperCase()).join(' · ')}</span>
        <button class="fav-share" aria-label="Condividi questa combinazione">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <path d="M8.6 13.5 15.4 17.5M15.4 6.5 8.6 10.5"/>
          </svg>
        </button>
        <button class="fav-remove" aria-label="Rimuovi dai preferiti">✕</button>
      </div>
    `;
    const loadFav = () => {
      document.getElementById('hex-input').value = fav.palette.chosen.hex;
      selectedCount = all.length;
      updateCountButtons();
      currentPalette = fav.palette;
      renderBands(fav.palette.chosen.hex, fav.palette.others);
      closeFavorites();
      document.getElementById('fav-toggle').focus();
    };
    const swatchesEl = item.querySelector('.fav-swatches');
    swatchesEl.addEventListener('click', loadFav);
    swatchesEl.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        loadFav();
      }
    });
    item.querySelector('.fav-share').addEventListener('click', (e) => {
      e.stopPropagation();
      sharePalette(fav, item.querySelector('.fav-share'));
    });
    item.querySelector('.fav-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      const updated = getFavorites().filter(f => f.key !== fav.key);
      saveFavorites(updated);
      renderFavoritesList();
      updateStarState();
    });
    listEl.appendChild(item);
  });
}

/* ---------- Pannello preferiti open/close ---------- */
function openFavorites(){
  document.getElementById('favorites-panel').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  renderFavoritesList();
}
function closeFavorites(){
  document.getElementById('favorites-panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

/* Costruisce un link che, aperto, ricarica la stessa combinazione:
   basta il colore principale + il numero di colori, perché
   findBestCombo è deterministico e ritrova sempre la stessa combo. */
function buildShareUrl(fav){
  const count = 1 + fav.palette.others.length;
  const base = location.origin + location.pathname;
  return `${base}?color=${fav.palette.chosen.hex.slice(1)}&n=${count}`;
}

async function sharePalette(fav, btn){
  const all = [fav.palette.chosen, ...fav.palette.others];
  const shareUrl = buildShareUrl(fav);
  const shareText = `Guarda questa combinazione di colori Sanzo Wada: ${all.map(c => c.hex.toUpperCase()).join(' · ')}`;
  const fullText = `${shareText}\n${shareUrl}`;

  if(navigator.share){
    try{
      await navigator.share({ title: 'IroiroWada', text: shareText, url: shareUrl });
      return;
    } catch(e){
      if(e && e.name === 'AbortError') return; // l'utente ha annullato la condivisione, nessun fallback
      /* qualsiasi altro errore (es. permesso negato dall'iframe che ospita
         l'artefatto): non ci fermiamo qui, proviamo il fallback sotto */
    }
  }

  try{
    await navigator.clipboard.writeText(fullText);
    const original = btn.innerHTML;
    btn.textContent = 'Copiato!';
    setTimeout(() => { btn.innerHTML = original; }, 1200);
    return;
  } catch(e){
    /* clipboard non disponibile in questo contesto: fallback con
       testo selezionabile per la copia manuale */
    showManualShareFallback(fullText, btn);
  }
}

function showManualShareFallback(text, anchorEl){
  const existing = document.getElementById('share-fallback');
  if(existing) existing.remove();

  const box = document.createElement('div');
  box.id = 'share-fallback';
  box.className = 'share-fallback';
  box.innerHTML = `
    <p class="share-fallback-hint">Copia manualmente il testo:</p>
    <textarea readonly></textarea>
  `;
  document.body.appendChild(box);

  const rect = anchorEl.getBoundingClientRect();
  const boxWidth = 240;
  box.style.top = `${rect.bottom + window.scrollY + 6}px`;
  box.style.left = `${Math.max(8, Math.min(rect.left + window.scrollX, window.innerWidth - boxWidth - 8))}px`;

  const ta = box.querySelector('textarea');
  ta.value = text;
  ta.focus();
  ta.select();

  const close = () => {
    box.remove();
    document.removeEventListener('click', onOutside);
    document.removeEventListener('keydown', onEsc);
  };
  const onOutside = (e) => { if(!box.contains(e.target)) close(); };
  const onEsc = (e) => { if(e.key === 'Escape') close(); };
  setTimeout(() => {
    document.addEventListener('click', onOutside);
    document.addEventListener('keydown', onEsc);
  }, 0);
}

/* Se l'app viene aperta da un link condiviso (?color=...&n=...),
   ricarica subito quella combinazione. */
function loadSharedPaletteFromUrl(){
  const params = new URLSearchParams(location.search);
  const colorParam = params.get('color');
  const nParam = Number(params.get('n'));
  if(!colorParam || ![2,3,4].includes(nParam)) return;
  const hex = normalizeHex(colorParam);
  if(!hex) return;
  selectedCount = nParam;
  updateCountButtons();
  document.getElementById('hex-input').value = hex;
  applyColor(hex);
}

/* ---------- Selettore conteggio colori ---------- */
function updateCountButtons(){
  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.count) === selectedCount);
  });
}

/* ---------- Eventi ---------- */
document.getElementById('hex-input').addEventListener('input', (e) => {
  const val = e.target.value.trim();
  const dropdown = document.getElementById('swatch-dropdown');

  if(val.length === 0){
    showEmptyMessage('Scegli un colore per vedere le combinazioni di Sanzo Wada.');
    currentPalette = null;
    searchQuery = '';
    dropdown.classList.remove('open');
    return;
  }

  const asHex = normalizeHex(val);
  const asRgb = asHex ? null : parseRgbString(val);

  if(asHex){
    applyColor(asHex);
    searchQuery = '';
    dropdown.classList.remove('open');
    return;
  }
  if(asRgb){
    applyColor(asRgb);
    searchQuery = '';
    dropdown.classList.remove('open');
    return;
  }

  /* Non è un hex né un RGB completo: trattalo come ricerca per nome
     e mostra la tendina con i suggerimenti filtrati. */
  searchQuery = val;
  buildSwatchDropdown();
  dropdown.classList.add('open');
});
document.getElementById('hex-input').addEventListener('focus', (e) => {
  if(searchQuery){
    document.getElementById('swatch-dropdown').classList.add('open');
  }
});

document.getElementById('swatch-toggle').addEventListener('click', () => {
  const dropdown = document.getElementById('swatch-dropdown');
  const opening = !dropdown.classList.contains('open');
  if(opening){
    /* Ricostruisce sempre all'apertura: se il campo è stato svuotato dopo
       una ricerca, evita di mostrare ancora i risultati filtrati vecchi. */
    buildSwatchDropdown();
  }
  dropdown.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  const picker = document.querySelector('.color-picker');
  if(!picker.contains(e.target)){
    document.getElementById('swatch-dropdown').classList.remove('open');
  }
});
document.addEventListener('keydown', (e) => {
  if(e.key !== 'Escape') return;
  if(document.getElementById('tutorial-overlay').style.display !== 'none'){
    endTutorial();
    document.getElementById('help-btn').focus();
    return;
  }
  const dropdown = document.getElementById('swatch-dropdown');
  if(dropdown.classList.contains('open')){
    dropdown.classList.remove('open');
    document.getElementById('hex-input').focus();
    return;
  }
  if(document.getElementById('favorites-panel').classList.contains('open')){
    closeFavorites();
    document.getElementById('fav-toggle').focus();
    return;
  }
  if(document.getElementById('camera-view').style.display !== 'none'){
    closeCamera();
    document.getElementById('camera-btn').focus();
    return;
  }
  if(isSimulationOpen()){
    closeSimulation();
    document.getElementById('simulate-toggle').focus();
  }
});

document.querySelectorAll('.count-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedCount = Number(btn.dataset.count);
    updateCountButtons();
    const hexVal = document.getElementById('hex-input').value;
    if(isValidHex(normalizeHex(hexVal) || '')){
      applyColor(hexVal);
    }
  });
});

document.getElementById('star-btn').addEventListener('click', toggleFavorite);
document.getElementById('fav-toggle').addEventListener('click', openFavorites);
document.getElementById('fav-close').addEventListener('click', closeFavorites);
document.getElementById('overlay').addEventListener('click', closeFavorites);

document.getElementById('fav-search').addEventListener('input', (e) => {
  favSearchQuery = e.target.value.trim();
  renderFavoritesList();
});
document.querySelectorAll('.fav-sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    favSortMode = btn.dataset.sort;
    document.querySelectorAll('.fav-sort-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderFavoritesList();
  });
});

/* ---------- Simulazione ---------- */
const LOREM_SNIPPETS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
];
let simContrastVisible = false;
let simAutoFix = false;
let simShowHex = true;

function isSimulationOpen(){
  return document.getElementById('simulation-view').style.display !== 'none';
}

function relLuminance(hex){
  const {r,g,b} = hexToRgb(hex);
  const lin = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
  return 0.2126*lin(r) + 0.7152*lin(g) + 0.0722*lin(b);
}
function contrastRatio(hexA, hexB){
  const L1 = relLuminance(hexA), L2 = relLuminance(hexB);
  const light = Math.max(L1,L2), dark = Math.min(L1,L2);
  return (light + 0.05) / (dark + 0.05);
}

/* Regola solo la luminosità (HSL) di un colore, a passi, finché non raggiunge
   il rapporto di contrasto richiesto contro lo sfondo — o finché non tocca
   nero/bianco puro. Tonalità e saturazione restano invariate, così il colore
   resta riconoscibile come "variante" dell'originale, non un altro colore. */
function adjustForContrast(hex, bgHex, target){
  const {h, s, l} = hexToHsl(hex);
  const step = 0.02;

  let ld = l, hexDown = hex, stepsDown = 0, ratioDown = contrastRatio(hex, bgHex);
  while(ratioDown < target && ld > 0){
    ld = Math.max(0, ld - step);
    hexDown = hslToHex(h, s, ld);
    ratioDown = contrastRatio(hexDown, bgHex);
    stepsDown++;
  }

  let lu = l, hexUp = hex, stepsUp = 0, ratioUp = contrastRatio(hex, bgHex);
  while(ratioUp < target && lu < 1){
    lu = Math.min(1, lu + step);
    hexUp = hslToHex(h, s, lu);
    ratioUp = contrastRatio(hexUp, bgHex);
    stepsUp++;
  }

  const downOk = ratioDown >= target, upOk = ratioUp >= target;
  if(downOk && upOk) return stepsDown <= stepsUp ? {hex:hexDown, ratio:ratioDown, ok:true} : {hex:hexUp, ratio:ratioUp, ok:true};
  if(downOk) return {hex:hexDown, ratio:ratioDown, ok:true};
  if(upOk) return {hex:hexUp, ratio:ratioUp, ok:true};
  return ratioDown >= ratioUp ? {hex:hexDown, ratio:ratioDown, ok:false} : {hex:hexUp, ratio:ratioUp, ok:false};
}

function openSimulation(){
  if(!currentPalette) return;
  document.querySelector('main').style.display = 'none';
  document.getElementById('simulation-view').style.display = 'flex';
  renderSimulation();
}
function closeSimulation(){
  document.getElementById('simulation-view').style.display = 'none';
  document.querySelector('main').style.display = 'flex';
}

function rotateMainColor(){
  if(!currentPalette) return;
  const all = [currentPalette.chosen, ...currentPalette.others];
  const rotated = [...all.slice(1), all[0]];
  currentPalette = { chosen: rotated[0], others: rotated.slice(1) };
  document.getElementById('hex-input').value = currentPalette.chosen.hex;
  renderBands(currentPalette.chosen.hex, currentPalette.others);
  renderSimulation();
}

function renderSimulation(){
  if(!currentPalette) return;
  const screen = document.getElementById('sim-screen');
  screen.innerHTML = '';

  const frame = document.createElement('div');
  frame.className = 'sim-frame';
  frame.style.background = currentPalette.chosen.hex;

  const bar = document.createElement('div');
  bar.className = 'sim-frame-bar';
  bar.innerHTML = '<span></span><span></span><span></span>';
  frame.appendChild(bar);

  const content = document.createElement('div');
  content.className = 'sim-content';
  content.style.color = contrastText(currentPalette.chosen.hex);

  currentPalette.others.forEach((col, i) => {
    const block = document.createElement('div');
    block.className = 'sim-color-block';

    const tag = document.createElement('span');
    tag.className = 'sim-color-tag';
    const dot = `<span class="sim-color-dot" style="background:${col.hex}"></span>`;

    const originalRatio = contrastRatio(col.hex, currentPalette.chosen.hex);
    let displayHex = col.hex;
    let adjustedNote = '';
    let badge = '';

    if(simAutoFix && originalRatio < 4.5){
      const fix = adjustForContrast(col.hex, currentPalette.chosen.hex, 4.5);
      displayHex = fix.hex;
      adjustedNote = ` <span class="sim-adjusted-note">(regolato per leggibilità)</span>`;
      badge = `<span class="sim-contrast-badge ${fix.ok ? 'pass' : 'fail'}">${fix.ratio.toFixed(2)}:1 ${fix.ok ? 'AA ok' : 'AA no'}</span>`;
    } else if(simContrastVisible){
      const passed = originalRatio >= 4.5;
      badge = `<span class="sim-contrast-badge ${passed ? 'pass' : 'fail'}">${originalRatio.toFixed(2)}:1 ${passed ? 'AA ok' : 'AA no'}</span>`;
    }

    tag.innerHTML = `${dot}${col.name || col.hex.toUpperCase()}${badge}${adjustedNote}`;

    const {r,g,b} = hexToRgb(displayHex);
    const codeEl = document.createElement('span');
    codeEl.className = 'sim-code';
    codeEl.tabIndex = 0;
    codeEl.setAttribute('role', 'button');
    codeEl.setAttribute('aria-label', `Codice colore ${displayHex.toUpperCase()}, apri menu copia o vai al colore`);
    codeEl.textContent = simShowHex ? displayHex.toUpperCase() : `RGB ${r}, ${g}, ${b}`;
    const openThisMenu = (e) => {
      e.stopPropagation();
      openCodeMenu(codeEl, displayHex);
    };
    codeEl.addEventListener('click', openThisMenu);
    codeEl.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openThisMenu(e);
      }
    });

    const p = document.createElement('p');
    p.className = 'sim-lorem';
    p.style.color = displayHex;
    p.textContent = LOREM_SNIPPETS[i % LOREM_SNIPPETS.length];

    block.appendChild(tag);
    block.appendChild(codeEl);
    block.appendChild(p);
    content.appendChild(block);
  });

  frame.appendChild(content);
  screen.appendChild(frame);
}

document.getElementById('simulate-toggle').addEventListener('click', () => {
  const simulationView = document.getElementById('simulation-view');
  const simulateToggle = document.getElementById('simulate-toggle');
  if (simulationView.style.display === 'flex') {
    closeSimulation();
    simulateToggle.classList.remove('active');
  } else {
    openSimulation();
    simulateToggle.classList.add('active');
  }
});

document.getElementById('sim-next-btn').addEventListener('click', rotateMainColor);
document.getElementById('sim-contrast-btn').addEventListener('click', () => {
  simContrastVisible = !simContrastVisible;
  const btn = document.getElementById('sim-contrast-btn');
  btn.classList.toggle('active', simContrastVisible);
  btn.setAttribute('aria-pressed', String(simContrastVisible));
  renderSimulation();
});
document.getElementById('sim-autofix-btn').addEventListener('click', () => {
  simAutoFix = !simAutoFix;
  const btn = document.getElementById('sim-autofix-btn');
  btn.classList.toggle('active', simAutoFix);
  btn.setAttribute('aria-pressed', String(simAutoFix));
  renderSimulation();
});
document.getElementById('sim-format-btn').addEventListener('click', () => {
  simShowHex = !simShowHex;
  const btn = document.getElementById('sim-format-btn');
  btn.textContent = `Formato: ${simShowHex ? 'HEX' : 'RGB'}`;
  btn.setAttribute('aria-pressed', String(!simShowHex));
  renderSimulation();
});

/* ---------- Contagocce (EyeDropper API) ---------- */
function isMobileDevice(){
  if(navigator.userAgentData?.mobile !== undefined){
    return navigator.userAgentData.mobile;
  }

  return /Android|iPhone|iPod/i.test(navigator.userAgent) ||
  (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
}

function initEyedropper(){
  const btn = document.getElementById('eyedropper-btn');
  if(!('EyeDropper' in window)){
    return; // resta hidden: browser non supportato (mobile, Firefox, Safari)
  }
  btn.hidden = false;
  btn.addEventListener('click', async () => {
    const eyeDropper = new EyeDropper();
    btn.classList.add('active');
    try{
      const result = await eyeDropper.open();
      const hex = result.sRGBHex;
      document.getElementById('hex-input').value = hex;
      applyColor(hex);
    } catch(e){
      /* utente ha premuto Esc: nessuna azione */
    } finally {
      btn.classList.remove('active');
    }
  });
}

/* ---------- Fotocamera (cattura colore) ---------- */
let cameraStream = null;
const CAMERA_GRANTED_KEY = 'wada-app-camera-granted';

function initCameraButton(){
  const btn = document.getElementById('camera-btn');
  const isMobile = isMobileDevice();
  const hasCameraApi = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  if(!isMobile || !hasCameraApi){
    return; // resta hidden: desktop senza touch, o browser senza supporto getUserMedia
  }
  btn.hidden = false;
  btn.addEventListener('click', openCamera);
  document.getElementById('camera-close').addEventListener('click', closeCamera);
  document.getElementById('camera-video').addEventListener('click', sampleFromVideoTap);
}

async function openCamera(){
  const view = document.getElementById('camera-view');
  const video = document.getElementById('camera-video');
  const errorEl = document.getElementById('camera-error');
  errorEl.style.display = 'none';
  video.style.display = 'block';
  view.style.display = 'flex';

  /* Android/iOS: senza questi attributi il video può restare nero
     (autoplay bloccato o apertura forzata a schermo intero). */
  video.setAttribute('playsinline', '');
  video.setAttribute('autoplay', '');
  video.muted = true;

  /* Se uno stream precedente è ancora attivo, lo si riusa: nessuna
     nuova richiesta di permesso durante la stessa sessione. */
  if(cameraStream && cameraStream.getVideoTracks().some(t => t.readyState === 'live')){
    video.srcObject = cameraStream;
    try{ await video.play(); } catch(e){ /* riprodurrà al primo tap */ }
    return;
  }

  try{
    try{
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false
      });
    } catch(err){
      /* Alcuni Android rifiutano il vincolo facingMode: si riprova senza. */
      if(err && (err.name === 'OverconstrainedError' || err.name === 'NotReadableError' || err.name === 'AbortError')){
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      } else {
        throw err;
      }
    }
    video.srcObject = cameraStream;
    try{ await video.play(); } catch(e){ /* autoplay bloccato: il tap sul video avvia comunque la lettura */ }
    try{ localStorage.setItem(CAMERA_GRANTED_KEY, '1'); } catch(e){ /* storage non disponibile */ }
  } catch(e){
    video.style.display = 'none';
    errorEl.style.display = 'flex';
    const name = e && e.name;
    if(name === 'NotAllowedError' || name === 'SecurityError'){
      try{ localStorage.removeItem(CAMERA_GRANTED_KEY); } catch(_){ }
      errorEl.textContent = window.isSecureContext === false
        ? 'La fotocamera richiede una connessione sicura (HTTPS).'
        : 'Accesso alla fotocamera negato. Controlla i permessi del browser per questo sito.';
    } else if(name === 'NotFoundError' || name === 'OverconstrainedError'){
      errorEl.textContent = 'Nessuna fotocamera disponibile su questo dispositivo.';
    } else if(name === 'NotReadableError' || name === 'AbortError'){
      errorEl.textContent = 'La fotocamera è in uso da un\'altra app. Chiudila e riprova.';
    } else {
      errorEl.textContent = 'Impossibile accedere alla fotocamera su questo dispositivo.';
    }
  }
}

function closeCamera(){
  document.getElementById('camera-view').style.display = 'none';
  const video = document.getElementById('camera-video');
  if(video) video.srcObject = null;
  if(cameraStream){
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
}

/* Android sospende la pagina in background: si rilascia la fotocamera
   per non lasciarla bloccata e non ricevere uno stream "morto". */
document.addEventListener('visibilitychange', () => {
  if(document.hidden && cameraStream) closeCamera();
});

function sampleFromVideoTap(e){
  const video = document.getElementById('camera-video');
  const canvas = document.getElementById('camera-canvas');
  if(video.paused){ video.play().catch(() => {}); } // Android: primo tap avvia il video se l'autoplay era bloccato
  if(!video.videoWidth || !video.videoHeight) return; // fotogramma non ancora pronto

  const rect = video.getBoundingClientRect();
  const tapX = e.clientX - rect.left;
  const tapY = e.clientY - rect.top;

  /* Mappatura delle coordinate del tap (spazio CSS, object-fit:cover)
     alle coordinate reali del fotogramma video, tenendo conto del
     ritaglio centrato applicato da "cover". */
  const vw = video.videoWidth, vh = video.videoHeight;
  const scale = Math.max(rect.width / vw, rect.height / vh);
  const videoX = tapX / scale + (vw - rect.width / scale) / 2;
  const videoY = tapY / scale + (vh - rect.height / scale) / 2;

  canvas.width = vw;
  canvas.height = vh;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, vw, vh);

  const x = Math.min(vw - 1, Math.max(0, Math.round(videoX)));
  const y = Math.min(vh - 1, Math.max(0, Math.round(videoY)));
  const px = ctx.getImageData(x, y, 1, 1).data;
  const hex = '#' + [px[0], px[1], px[2]].map(v => v.toString(16).padStart(2, '0')).join('');

  document.getElementById('hex-input').value = hex;
  applyColor(hex);
  closeCamera();
}

/* ---------- Tour guidato ---------- */
const TUTORIAL_KEY = 'wada-app-tutorial-seen';
let tutorialSteps = [];
let tutorialStepIndex = 0;

function getTutorialSteps(){
  const steps = [
    { selector: '#hex-input', title: 'Cerca un colore', text: 'Scrivi un codice hex (#a8391f), un RGB (168,57,31) oppure solo il nome di un colore Wada.' },
    { selector: '#swatch-toggle', title: 'Sfoglia il catalogo', text: 'Scorri tutti i colori di Sanzo Wada, filtrabili per tonalità calda, chiara, scura o fredda — e ritrova qui anche i colori cercati di recente.' }
  ];
  if(!document.getElementById('eyedropper-btn').hidden){
    steps.push({ selector: '#eyedropper-btn', title: 'Contagocce', text: 'Preleva un colore direttamente da qualsiasi punto dello schermo.' });
  }
  if(!document.getElementById('camera-btn').hidden){
    steps.push({ selector: '#camera-btn', title: 'Fotocamera', text: 'Cattura un colore inquadrandolo con la fotocamera del dispositivo.' });
  }
  steps.push(
    { selector: '.count-select', title: 'Numero di colori', text: 'Scegli se cercare combinazioni Wada da 2, 3 o 4 colori.' },
    { selector: '#simulate-toggle', title: 'Anteprima simulata', text: 'Vedi la combinazione applicata a un\'interfaccia reale, con verifica del contrasto WCAG e correzione automatica.' },
    { selector: '#star-btn', title: 'Salva nei preferiti', text: 'Salva la combinazione che stai vedendo per ritrovarla più tardi.' },
    { selector: '#fav-toggle', title: 'I tuoi preferiti', text: 'Cerca, ordina e condividi le combinazioni salvate — anche con un link diretto.' }
  );
  return steps;
}

function startTutorial(){
  tutorialSteps = getTutorialSteps();
  tutorialStepIndex = 0;
  document.getElementById('tutorial-overlay').style.display = 'block';
  showTutorialStep();
}

function endTutorial(){
  document.getElementById('tutorial-overlay').style.display = 'none';
  const highlighted = document.querySelector('.tutorial-highlight');
  if(highlighted) highlighted.classList.remove('tutorial-highlight');
  try{ localStorage.setItem(TUTORIAL_KEY, '1'); } catch(e){ /* storage non disponibile */ }
}

function nextTutorialStep(){
  tutorialStepIndex++;
  if(tutorialStepIndex >= tutorialSteps.length){
    endTutorial();
  } else {
    showTutorialStep();
  }
}

function showTutorialStep(){
  const prevHighlighted = document.querySelector('.tutorial-highlight');
  if(prevHighlighted) prevHighlighted.classList.remove('tutorial-highlight');

  const step = tutorialSteps[tutorialStepIndex];
  const target = document.querySelector(step.selector);
  if(!target){ nextTutorialStep(); return; } // elemento non presente in questo contesto: salta

  target.classList.add('tutorial-highlight');
  target.scrollIntoView({ block: 'center', behavior: 'smooth' });

  const card = document.getElementById('tutorial-card');
  card.innerHTML = `
    <p class="tutorial-progress">${tutorialStepIndex + 1} di ${tutorialSteps.length}</p>
    <h3></h3>
    <p></p>
    <div class="tutorial-actions">
      <button id="tutorial-skip" type="button">Salta</button>
      <button id="tutorial-next" type="button">${tutorialStepIndex === tutorialSteps.length - 1 ? 'Fine' : 'Avanti'}</button>
    </div>
  `;
  card.querySelector('h3').textContent = step.title;
  card.querySelector('p').textContent = step.text;
  document.getElementById('tutorial-skip').addEventListener('click', endTutorial);
  document.getElementById('tutorial-next').addEventListener('click', nextTutorialStep);

  requestAnimationFrame(() => positionTutorialCard(target, card));
}

function positionTutorialCard(target, card){
  const rect = target.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const margin = 12;

  let top = rect.bottom + margin;
  if(top + cardRect.height > window.innerHeight - margin){
    top = rect.top - cardRect.height - margin;
  }
  top = Math.max(margin, Math.min(top, window.innerHeight - cardRect.height - margin));

  let left = rect.left + rect.width / 2 - cardRect.width / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - cardRect.width - margin));

  card.style.top = `${top}px`;
  card.style.left = `${left}px`;
}

document.getElementById('help-btn').addEventListener('click', startTutorial);
document.getElementById('tutorial-overlay').addEventListener('click', (e) => {
  if(e.target.id === 'tutorial-overlay') e.stopPropagation(); // blocca i click sul resto della pagina durante il tour
});

/* ---------- Init ---------- */
buildSwatchDropdown();
updateCountButtons();
initEyedropper();
initCameraButton();
loadSharedPaletteFromUrl();
let tutorialAlreadySeen = false;
try{ tutorialAlreadySeen = localStorage.getItem(TUTORIAL_KEY) === '1'; } catch(e){ /* storage non disponibile */ }
if(!tutorialAlreadySeen) startTutorial();

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      /* registrazione fallita (es. contesto non supportato): l'app
         funziona comunque normalmente, solo senza installazione/offline */
    });
  });
}
