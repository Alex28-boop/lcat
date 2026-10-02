// Banque de 100 lieux pour "Carte au Trésor"
// Répartition : 50 villes de seconde zone / 20 petites villes satellites
// / 15 lieux historiques / 10 lieux touristiques / 5 villages
// Indices écrits pour être difficiles même pour un joueur connaissant la France :
// on évite de nommer la ville, on joue sur culture générale, géographie, histoire et culture populaire.
// Pas encore branché à app.js — fichier de travail à relire avant intégration.

const treasureBank = [

  // ===== VILLES DE SECONDE ZONE (50) =====
  { city: "Angoulême", place: "Les remparts", category: "secondaire", lat: 45.651687, lng: 0.15386,
    clues: [
      "Cette ville domine une vallée depuis un plateau ceinturé de remparts, en Charente.",
      "Chaque hiver, elle devient la capitale mondiale d'un art fait de cases et de bulles.",
      "Les amateurs de BD connaissent son festival aussi bien que le Comic-Con de San Diego."
    ] },
  { city: "Chalon-sur-Saône", place: "Les quais de Saône", category: "secondaire", lat: 46.781052, lng: 4.858582,
    clues: [
      "Une rivière bourguignonne, affluent du Rhône, traverse cette ville marchande.",
      "C'est ici qu'a été prise, vers 1826, ce qu'on considère comme la toute première photographie.",
      "Son enfant le plus célèbre s'appelait Nicéphore et a inventé un procédé qui porte son nom."
    ] },
  { city: "Vannes", place: "Le port et les remparts", category: "secondaire", lat: 47.65149, lng: -2.757531,
    clues: [
      "Cette cité bretonne surveille l'entrée d'un golfe semé de dizaines de petites îles.",
      "Son port intra-muros donne directement sur un golfe qu'on dit compter une île par jour de l'année.",
      "Les Vénètes, un peuple gaulois marin, avaient ici leur capitale bien avant les Romains."
    ] },
  { city: "Quimper", place: "La cathédrale Saint-Corentin", category: "secondaire", lat: 47.995582, lng: -4.102248,
    clues: [
      "Deux rivières se rejoignent ici, ce qui a donné son nom à cette ville du Finistère.",
      "Une faïence peinte à la main, avec ses petits personnages bretons, porte le nom de cette ville.",
      "Chaque été, son grand festival folklorique rassemble bombardes, binious et coiffes bretonnes."
    ] },
  { city: "Épinal", place: "La place des Vosges", category: "secondaire", lat: 48.174618, lng: 6.450307,
    clues: [
      "Cette ville des Vosges est bâtie sur les deux rives d'une rivière du même massif.",
      "Une expression française vient d'ici : on parle encore d'une vision simpliste et idéalisée du monde.",
      "Au 19e siècle, on y imprimait des gravures populaires et colorées vendues dans toute la France."
    ] },
  { city: "Charleville-Mézières", place: "La place Ducale", category: "secondaire", lat: 49.773249, lng: 4.720686,
    clues: [
      "Deux anciennes villes des Ardennes, séparées par la Meuse, n'en forment plus qu'une depuis 1966.",
      "Un poète adolescent y est né en 1854 avant de fuir vers Paris puis l'Afrique.",
      "Sa place centrale ressemble beaucoup à la place des Vosges, en plus modeste."
    ] },
  { city: "Bourges", place: "La cathédrale Saint-Étienne", category: "secondaire", lat: 47.082164, lng: 2.399205,
    clues: [
      "Cette ville du Berry est presque à égale distance de Paris et du centre géographique de la France.",
      "Sa cathédrale, classée à l'UNESCO, n'a pas de transept contrairement à la plupart des grandes cathédrales.",
      "Chaque printemps, un festival de musique fait vibrer ses rues bien avant les beaux jours."
    ] },
  { city: "Niort", place: "Le donjon", category: "secondaire", lat: 46.325218, lng: -0.465109,
    clues: [
      "Cette ville des Deux-Sèvres borde des marais surnommés la 'Venise verte'.",
      "On la surnomme parfois la capitale française d'un secteur qui vous rembourse en cas d'accident.",
      "Son donjon médiéval fut, dit-on, commandé par un roi d'Angleterre né en France."
    ] },
  { city: "Châteauroux", place: "Le parc Balsan", category: "secondaire", lat: 46.811891, lng: 1.679883,
    clues: [
      "Cette préfecture du Berry doit une partie de son nom à un château disparu.",
      "Une célèbre marquise, favorite d'un roi de France, a donné son nom à cette ville.",
      "Une base aérienne américaine de la Guerre froide a longtemps marqué son histoire récente."
    ] },
  { city: "Roanne", place: "Les bords de Loire", category: "secondaire", lat: 46.031973, lng: 4.078378,
    clues: [
      "La Loire, encore modeste, traverse cette ville avant de devenir le plus long fleuve de France.",
      "Longtemps ville textile, elle est aussi connue des gastronomes pour une table étoilée renommée.",
      "Elle se trouve non loin du point où la Loire devient officiellement navigable."
    ] },
  { city: "Montluçon", place: "Le vieux château", category: "secondaire", lat: 46.340042, lng: 2.603595,
    clues: [
      "Cette ville de l'Allier fut longtemps un grand centre industriel du centre de la France.",
      "Chaque été, un festival réunit des milliers de danseurs et musiciens de musiques traditionnelles.",
      "Son vieux château domine encore la ville malgré la disparition de la plupart de ses fortifications."
    ] },
  { city: "Tarbes", place: "Le jardin Massey", category: "secondaire", lat: 43.23822, lng: 0.076429,
    clues: [
      "Cette préfecture des Pyrénées offre une vue directe sur le pic du Midi de Bigorre.",
      "Un maréchal de Napoléon, né ici, a donné son nom à la place centrale de la ville.",
      "Elle est un point de passage classique vers un célèbre lieu de pèlerinage marial voisin."
    ] },
  { city: "Auch", place: "L'escalier monumental", category: "secondaire", lat: 43.645608, lng: 0.587235,
    clues: [
      "Capitale de la Gascogne, cette ville est traversée par le Gers, qui lui donne son nom au département.",
      "Une statue de mousquetaire imaginaire domine son escalier monumental de plus de 300 marches.",
      "Alexandre Dumas s'est inspiré d'un vrai gentilhomme gascon né près d'ici pour son roman le plus célèbre."
    ] },
  { city: "Agen", place: "Les allées de la Garonne", category: "secondaire", lat: 44.204187, lng: 0.615828,
    clues: [
      "La Garonne longe cette préfecture du Lot-et-Garonne, réputée pour un fruit sec très célèbre.",
      "Un fruit confit, préparé à partir d'une prune locale, porte le nom de cette ville dans le monde entier.",
      "Son équipe de rugby a longtemps été un club historique du championnat français."
    ] },
  { city: "Albi", place: "La cathédrale Sainte-Cécile", category: "secondaire", lat: 43.928408, lng: 2.142717,
    clues: [
      "Cette ville du Tarn est bâtie en briques roses qui rougeoient au soleil couchant.",
      "Une cathédrale-forteresse, l'une des plus grandes construites en briques au monde, y domine la ville.",
      "Un peintre au corps fragile, célèbre pour ses affiches du Moulin Rouge, y est né en 1864."
    ] },
  { city: "Castres", place: "Les jardins de l'Évêché", category: "secondaire", lat: 43.603228, lng: 2.241517,
    clues: [
      "Cette ville du Tarn est traversée par l'Agout, bordée de maisons de tanneurs colorées.",
      "Son club de rugby a remporté plusieurs titres de champion de France ces dernières décennies.",
      "Jean Jaurès, grande figure politique française assassinée en 1914, y est né."
    ] },
  { city: "Béziers", place: "Les arènes", category: "secondaire", lat: 43.343651, lng: 3.228755,
    clues: [
      "Perchée sur une colline dominant l'Orb, cette ville languedocienne est un ancien comptoir romain.",
      "Le rugby y est une religion, tout comme la feria qui embrase la ville chaque été.",
      "Un canal royal du 17e siècle, classé à l'UNESCO, franchit ici un célèbre escalier d'écluses."
    ] },
  { city: "Narbonne", place: "Le Pont des Marchands", category: "secondaire", lat: 43.183213, lng: 3.00369,
    clues: [
      "Une ancienne voie romaine, la toute première construite hors d'Italie, traversait cette ville.",
      "Longtemps port méditerranéen actif, elle s'est retrouvée à plusieurs kilomètres de la mer après l'ensablement de son étang.",
      "Son pont central est l'un des rares en France encore bordé de boutiques, comme au Moyen Âge."
    ] },
  { city: "Carcassonne", place: "La Cité médiévale", category: "secondaire", lat: 43.206082, lng: 2.364196,
    clues: [
      "Cette ville de l'Aude possède deux visages : une cité fortifiée perchée et une ville basse plus récente.",
      "Sa double enceinte de remparts, avec ses tours coniques, sert souvent de décor dans les films médiévaux.",
      "Un jeu de société mondialement connu, où l'on construit routes et villes, porte son nom."
    ] },
  { city: "Périgueux", place: "La cathédrale Saint-Front", category: "secondaire", lat: 45.183586, lng: 0.722768,
    clues: [
      "Cette ville de Dordogne repose sur les vestiges d'une cité gallo-romaine encore visibles aujourd'hui.",
      "Ses coupoles blanches en dôme rappellent étrangement une célèbre basilique vénitienne.",
      "La région autour d'elle est réputée pour un met de luxe extrait du foie d'une oie ou d'un canard."
    ] },
  { city: "Brive-la-Gaillarde", place: "La place du 14 Juillet", category: "secondaire", lat: 45.161823, lng: 1.534044,
    clues: [
      "Cette ville corrézienne tire son surnom d'une résistance héroïque face à un siège au 16e siècle.",
      "Un grand salon du livre y attire chaque automne de nombreux auteurs et lecteurs.",
      "Son équipe de rugby porte le même surnom que la ville elle-même."
    ] },
  { city: "Cognac", place: "Les chais au bord de la Charente", category: "secondaire", lat: 45.6952, lng: -0.3295,
    clues: [
      "Une eau-de-vie exportée dans le monde entier porte le nom de cette ville charentaise.",
      "François Ier, roi de France, est né dans le château qui borde encore ses quais.",
      "L'odeur des vapeurs d'alcool qui s'échappe de ses chais noircit les façades alentour : on l'appelle le 'champignon des anges'."
    ] },
  { city: "Saintes", place: "Les arènes gallo-romaines", category: "secondaire", lat: 45.7458, lng: -0.643986,
    clues: [
      "Cette ville charentaise fut, dans l'Antiquité, la première capitale de l'Aquitaine romaine.",
      "Un arc antique dédié à un empereur romain enjambe toujours ses quais.",
      "Ses arènes, parmi les plus anciennes de Gaule, accueillaient déjà des spectacles il y a deux mille ans."
    ] },
  { city: "Rochefort", place: "La Corderie Royale", category: "secondaire", lat: 45.939383, lng: -0.955757,
    clues: [
      "Louis XIV a fait construire ici un arsenal pour fabriquer les cordages de sa marine royale.",
      "Une réplique grandeur nature d'une frégate ayant transporté Lafayette vers l'Amérique s'y visite aujourd'hui.",
      "Un célèbre film musical français des années 1960, avec Catherine Deneuve, se déroule dans cette ville portuaire."
    ] },
  { city: "La Roche-sur-Yon", place: "La place Napoléon", category: "secondaire", lat: 46.67011, lng: -1.426446,
    clues: [
      "Cette préfecture de la Vendée a été entièrement redessinée en damier sur ordre d'un empereur français.",
      "Sa place centrale porte le nom de l'empereur qui a littéralement créé cette ville de toutes pièces.",
      "Une statue équestre de son fondateur trône fièrement au centre de la ville qu'il a voulue."
    ] },
  { city: "Cholet", place: "Le musée du Textile", category: "secondaire", lat: 47.068171, lng: -0.897701,
    clues: [
      "Cette ville des Mauges fut un haut lieu de la guerre de Vendée contre les révolutionnaires.",
      "Un petit carré de tissu qu'on utilise pour se moucher porte, en expression populaire, le nom de cette ville.",
      "Elle fut longtemps un grand centre français du textile et de la chaussure."
    ] },
  { city: "Laval", place: "Le vieux château", category: "secondaire", lat: 48.06876, lng: -0.771867,
    clues: [
      "La Mayenne, rivière du même nom que son département, traverse cette ville par un pont fortifié.",
      "Un peintre naïf, douanier de métier et autodidacte, y est né en 1844.",
      "Des jardins suspendus le long de la rivière lui valent le surnom de 'Florence du Maine'."
    ] },
  { city: "Alençon", place: "La Maison d'Ozé", category: "secondaire", lat: 48.429966, lng: 0.08957,
    clues: [
      "Cette ville normande a donné son nom à une dentelle à l'aiguille classée à l'UNESCO.",
      "Sainte Thérèse de Lisieux, l'une des saintes les plus vénérées de France, y est née.",
      "Son point de dentelle, dit 'point de France', ornait autrefois les cols des rois."
    ] },
  { city: "Saint-Lô", place: "Les remparts reconstruits", category: "secondaire", lat: 49.114846, lng: -1.095094,
    clues: [
      "Cette préfecture normande fut détruite à plus de 90 % lors des combats de l'été 1944.",
      "On la surnomma la 'capitale des ruines' après la Seconde Guerre mondiale.",
      "Sa reconstruction a mêlé, de façon frappante, un vieux rempart médiéval à des bâtiments modernes d'après-guerre."
    ] },
  { city: "Cherbourg-en-Cotentin", place: "La Cité de la Mer", category: "secondaire", lat: 49.646253, lng: -1.617955,
    clues: [
      "Ce port du bout du Cotentin fut la dernière escale d'un paquebot parti sombrer en avril 1912.",
      "Un film musical entièrement chanté, avec Catherine Deneuve, porte le nom de cette ville dans son titre.",
      "Une ancienne gare transatlantique y abrite aujourd'hui le plus grand sous-marin visitable au monde."
    ] },
  { city: "Évreux", place: "La cathédrale Notre-Dame", category: "secondaire", lat: 49.024243, lng: 1.150817,
    clues: [
      "Cette préfecture normande est traversée par l'Iton, qui se divise en plusieurs bras au cœur de la ville.",
      "Elle a été très largement bombardée puis reconstruite après la Seconde Guerre mondiale.",
      "Sa cathédrale mêle des styles très différents accumulés au fil de sept siècles de construction."
    ] },
  { city: "Dreux", place: "Le beffroi", category: "secondaire", lat: 48.735556, lng: 1.367294,
    clues: [
      "Cette ville d'Eure-et-Loir se trouve aux portes de la Normandie, non loin de la forêt de Dreux.",
      "Une chapelle royale abrite les tombeaux d'une grande partie de la famille d'Orléans.",
      "Son beffroi Renaissance sonne encore les heures au centre de la vieille ville."
    ] },
  { city: "Beauvais", place: "La cathédrale Saint-Pierre", category: "secondaire", lat: 49.432573, lng: 2.08143,
    clues: [
      "Sa cathédrale possède le chœur gothique le plus haut du monde, mais n'a jamais eu de nef.",
      "Une compagnie aérienne à bas coût utilise son aéroport comme porte d'entrée low-cost vers Paris.",
      "Une héroïne locale, Jeanne Hachette, y est célébrée pour avoir repoussé un siège au 15e siècle."
    ] },
  { city: "Soissons", place: "L'abbaye Saint-Jean-des-Vignes", category: "secondaire", lat: 49.375795, lng: 3.324076,
    clues: [
      "Un vase brisé par un soldat franc, à l'époque de Clovis, a donné son nom à un épisode célèbre de cette ville.",
      "Cette ville de l'Aisne fut l'une des premières capitales des rois francs.",
      "Les hautes flèches en ruine d'une abbaye gothique dominent encore sa silhouette."
    ] },
  { city: "Laon", place: "La cathédrale Notre-Dame", category: "secondaire", lat: 49.564341, lng: 3.625004,
    clues: [
      "Cette ville de l'Aisne est perchée sur une butte qui domine toute la plaine environnante.",
      "Sa cathédrale possède quatre tours ornées de sculptures de bœufs en hommage aux animaux de trait.",
      "Un petit train touristique à crémaillère relie encore la gare basse à la ville haute."
    ] },
  { city: "Sedan", place: "Le château fort", category: "secondaire", lat: 49.701769, lng: 4.949359,
    clues: [
      "Cette ville des Ardennes a donné son nom à deux désastres militaires français, en 1870 et 1940.",
      "Son château fort est considéré comme le plus vaste d'Europe encore debout aujourd'hui.",
      "Un tissu de laine fine et un jeu de cartes portent tous deux le nom de cette ville."
    ] },
  { city: "Belfort", place: "Le Lion de Bartholdi", category: "secondaire", lat: 47.636594, lng: 6.86456,
    clues: [
      "Cette ville verrouille un passage stratégique entre les Vosges et le Jura.",
      "Un immense lion de pierre, sculpté par le créateur de la statue de la Liberté, veille sur la ville.",
      "Elle a résisté à un siège prussien de plus de trois mois en 1870-1871."
    ] },
  { city: "Montbéliard", place: "Le château des ducs de Wurtemberg", category: "secondaire", lat: 47.509368, lng: 6.800958,
    clues: [
      "Cette ville franc-comtoise a longtemps appartenu à une famille princière allemande avant la Révolution.",
      "Un célèbre constructeur automobile français au lion pour emblème y a ses origines historiques.",
      "Son influence protestante, rare dans la région, remonte à ses siècles sous domination allemande."
    ] },
  { city: "Vesoul", place: "La place de la République", category: "secondaire", lat: 47.622692, lng: 6.159266,
    clues: [
      "Un chanteur belge a rendu cette ville de Haute-Saône involontairement célèbre dans une chanson de 1968.",
      "Jacques Brel y chantait vouloir emmener 'son amie' avant de préciser qu'elle n'en avait pas envie.",
      "Cette préfecture discrète doit sa notoriété nationale presque entièrement à cette unique chanson."
    ] },
  { city: "Lons-le-Saunier", place: "La rue du Commerce", category: "secondaire", lat: 46.675345, lng: 5.553664,
    clues: [
      "Le sel a fait la richesse de cette ville jurassienne depuis l'époque celtique.",
      "L'auteur de l'hymne national français, composé en une nuit en 1792, y est né.",
      "Sa rue principale, aux arcades, abrite la maison natale de ce même compositeur."
    ] },
  { city: "Bourg-en-Bresse", place: "Le monastère royal de Brou", category: "secondaire", lat: 46.197878, lng: 5.236065,
    clues: [
      "Une volaille de qualité supérieure, la seule au monde à posséder sa propre appellation, porte le nom de sa région.",
      "Un monastère flamboyant, construit par une duchesse en deuil, est un joyau caché de cette ville de l'Ain.",
      "Ses poulets, aux pattes bleues et au plumage blanc, sont servis sur les plus grandes tables de France."
    ] },
  { city: "Valence", place: "Le kiosque Peynet", category: "secondaire", lat: 44.929226, lng: 4.888597,
    clues: [
      "On dit d'elle qu'elle est la porte d'entrée du Midi pour qui descend depuis le nord de la France.",
      "Un jeune officier corse y suivit une formation d'artillerie avant de devenir empereur des Français.",
      "Un kiosque à musique, immortalisé par un dessinateur d'amoureux, est devenu le symbole romantique de la ville."
    ] },
  { city: "Privas", place: "Le viaduc", category: "secondaire", lat: 44.728882, lng: 4.599742,
    clues: [
      "Cette préfecture est la plus petite de France par sa population.",
      "Elle est nichée au cœur d'un département connu pour ses gorges spectaculaires et ses châtaigniers.",
      "Un dessert à base de châtaignes confites dans du sucre est une spécialité locale renommée."
    ] },
  { city: "Gap", place: "La place Jean Marcellin", category: "secondaire", lat: 44.558822, lng: 6.079665,
    clues: [
      "Cette préfecture alpine se targue d'être l'une des villes les plus hautes de France.",
      "Napoléon y est passé lors de son retour d'exil, sur la route qui porte aujourd'hui son nom.",
      "Elle sert souvent de ville-étape lors du passage du Tour de France dans les Hautes-Alpes."
    ] },
  { city: "Digne-les-Bains", place: "La cathédrale Saint-Jérôme", category: "secondaire", lat: 44.091967, lng: 6.236103,
    clues: [
      "Une fleur mauve et parfumée, cultivée sur les plateaux environnants, a donné son surnom à cette ville.",
      "Un célèbre géologue anglais du 19e siècle a qualifié la région autour d'elle de véritable 'paradis' pour son métier.",
      "Ses thermes, connus depuis l'Antiquité romaine, ont donné leur nom à la ville elle-même."
    ] },
  { city: "Draguignan", place: "La tour de l'Horloge", category: "secondaire", lat: 43.539937, lng: 6.466332,
    clues: [
      "Cette ville varoise fut, avant Toulon, la préfecture du département pendant plus d'un siècle.",
      "Sa légende locale parle d'un dragon terrassé par un évêque, à l'origine de son nom.",
      "Une importante école militaire d'artillerie y forme aujourd'hui de nombreux officiers français."
    ] },
  { city: "Salon-de-Provence", place: "Le château de l'Empéri", category: "secondaire", lat: 43.639835, lng: 5.097382,
    clues: [
      "Un célèbre astrologue et médecin, auteur de prophéties encore commentées aujourd'hui, a vécu et est mort dans cette ville.",
      "Ses fameuses 'Centuries', publiées au 16e siècle, continuent d'alimenter les théories sur les événements futurs.",
      "La Patrouille de France, célèbre escadrille de voltige, a sa base aérienne juste à côté de cette ville."
    ] },
  { city: "Manosque", place: "La porte Saunerie", category: "secondaire", lat: 43.831674, lng: 5.784096,
    clues: [
      "Un écrivain provençal, chantre de la nature et des collines environnantes, est né et mort dans cette ville.",
      "Jean Giono a situé une grande partie de son œuvre littéraire dans cette région qu'il n'a presque jamais quittée.",
      "Elle se trouve au cœur d'un pays de collines couvertes de lavande, entre Luberon et Verdon."
    ] },
  { city: "Carpentras", place: "La porte d'Orange", category: "secondaire", lat: 44.056538, lng: 5.047301,
    clues: [
      "Cette ville du Vaucluse fut, avant la Révolution, une possession directe des papes.",
      "Un petit bonbon dur et parfumé, souvent offert en fin de repas, porte le nom de cette ville.",
      "Sa synagogue, la plus ancienne encore en activité en France, témoigne d'une présence juive très ancienne."
    ] },
  { city: "Voiron", place: "La place de la République", category: "secondaire", lat: 45.367504, lng: 5.591376,
    clues: [
      "Cette ville iséroise doit une partie de sa renommée à une liqueur verte ou jaune, secrète et monacale.",
      "Une distillerie centenaire, toujours en activité, produit ici l'une des liqueurs les plus célèbres de France.",
      "Le monastère où cette recette fut inventée se trouve dans le massif montagneux juste au-dessus de la ville."
    ] },

  // ===== PETITES VILLES PROCHES DE GRANDES VILLES (20) =====
  { city: "Saint-Germain-en-Laye", place: "La terrasse du château", category: "satellite", lat: 48.898019, lng: 2.096039,
    clues: [
      "Depuis la terrasse de son château, on aperçoit par temps clair la tour Eiffel au loin.",
      "Louis XIV y est né, dans un château qui domine une forêt aujourd'hui traversée par le RER.",
      "Le musée d'archéologie nationale y conserve des trésors préhistoriques dans l'ancien château royal."
    ] },
  { city: "Meaux", place: "La cathédrale Saint-Étienne", category: "satellite", lat: 48.960144, lng: 2.878915,
    clues: [
      "Un fromage à pâte molle et à croûte fleurie, vendu dans une boîte en bois, porte le nom de cette ville de Seine-et-Marne.",
      "Un grand évêque et prédicateur du 17e siècle, célèbre pour ses oraisons funèbres, y a longtemps officié.",
      "La Marne serpente à ses pieds, non loin de la grande bataille de 1914 qui porte son nom."
    ] },
  { city: "Melun", place: "L'île Saint-Étienne", category: "satellite", lat: 48.536389, lng: 2.658056,
    clues: [
      "Cette préfecture de Seine-et-Marne est bâtie sur une île au milieu de la Seine.",
      "Une célèbre prison française, longtemps l'une des plus importantes du pays, se trouve dans cette ville.",
      "Un château voisin, trop somptueux, coûta sa liberté à son propriétaire, surintendant de Louis XIV."
    ] },
  { city: "Pontoise", place: "La cathédrale Saint-Maclou", category: "satellite", lat: 49.050584, lng: 2.096934,
    clues: [
      "L'Oise se jette dans la Seine tout près de cette ville qui domine leur confluent.",
      "Plusieurs peintres impressionnistes, dont un célèbre paysagiste danois-français, ont peint ses coteaux et ses champs.",
      "Camille Pissarro y a vécu et peint de nombreuses toiles représentant ses rues et ses environs."
    ] },
  { city: "Rambouillet", place: "Le château", category: "satellite", lat: 48.645391, lng: 1.817376,
    clues: [
      "Un château entouré d'une immense forêt giboyeuse sert de résidence secondaire aux présidents français.",
      "François Ier y est mort en 1547, dans une tour qui porte aujourd'hui son nom.",
      "Une célèbre laiterie de porcelaine, construite pour une reine, se visite encore dans son parc."
    ] },
  { city: "Tarare", place: "Le parc du Sartel", category: "satellite", lat: 45.897195, lng: 4.434632,
    clues: [
      "Cette ville du Rhône fut, au 19e siècle, un grand centre de fabrication de tissus légers et vaporeux.",
      "Elle est nichée dans les monts qui séparent la vallée du Rhône de celle de la Loire.",
      "Son nom est resté associé, dans l'expression populaire, à un tissu fin porté par les mariées."
    ] },
  { city: "Aubagne", place: "Le cours Foch", category: "satellite", lat: 43.293558, lng: 5.567352,
    clues: [
      "Un écrivain et cinéaste provençal, auteur de récits d'enfance très célèbres, y est né en 1895.",
      "Marcel Pagnol a grandi dans cette ville avant de situer ses souvenirs dans les collines toutes proches.",
      "Le siège d'un corps d'armée français connu pour son recrutement international s'y trouve aussi."
    ] },
  { city: "La Ciotat", place: "Le vieux port", category: "satellite", lat: 43.173767, lng: 5.606263,
    clues: [
      "Deux frères inventeurs y ont projeté, en 1895, l'un des tout premiers films de l'histoire du cinéma.",
      "La scène d'un train entrant en gare, filmée ici, aurait effrayé les tout premiers spectateurs de cinéma.",
      "Cette ville portuaire près de Marseille fut aussi un grand centre de construction navale."
    ] },
  { city: "Martigues", place: "Le canal Saint-Sébastien", category: "satellite", lat: 43.404904, lng: 5.053468,
    clues: [
      "Des canaux traversent cette ville des bords de l'étang de Berre, lui valant un surnom vénitien.",
      "De nombreux peintres, dont Félix Ziem, ont immortalisé ses quais colorés et ses reflets dans l'eau.",
      "On la surnomme parfois la 'Venise provençale' à cause de ses canaux et ponts pittoresques."
    ] },
  { city: "Colomiers", place: "Le parc technologique", category: "satellite", lat: 43.611438, lng: 1.340422,
    clues: [
      "Cette ville de la banlieue toulousaine a grandi très vite avec l'essor d'un grand avionneur européen.",
      "Des chaînes d'assemblage de très gros avions de ligne emploient ici des milliers de personnes.",
      "Son équipe de rugby a longtemps évolué dans les divisions professionnelles françaises."
    ] },
  { city: "Muret", place: "Les bords de Garonne", category: "satellite", lat: 43.4599, lng: 1.3266,
    clues: [
      "Une grande bataille de 1213, opposant croisés et comte de Toulouse, s'est déroulée près de cette ville.",
      "La Garonne borde cette ville proche de Toulouse, dont elle a longtemps favorisé le commerce fluvial.",
      "Simon de Montfort y remporta une victoire décisive pendant la croisade contre les cathares."
    ] },
  { city: "Blagnac", place: "L'aéroport", category: "satellite", lat: 43.631346, lng: 1.36449,
    clues: [
      "Le plus gros avion de ligne du monde a été assemblé pour la première fois dans cette ville.",
      "Son aéroport partage son nom avec la ville elle-même, aux portes de Toulouse.",
      "Les chaînes de montage de l'A380 se trouvaient ici, tout près des pistes."
    ] },
  { city: "Mérignac", place: "L'aéroport", category: "satellite", lat: 44.82968, lng: -0.712904,
    clues: [
      "Cette ville de la banlieue bordelaise abrite le principal aéroport de la région.",
      "Une base aérienne militaire y côtoie l'aéroport civil qui dessert toute la métropole voisine.",
      "Elle est aujourd'hui la deuxième ville la plus peuplée de tout son département."
    ] },
  { city: "Libourne", place: "Le confluent Dordogne-Isle", category: "satellite", lat: 44.914449, lng: -0.248622,
    clues: [
      "Deux rivières se rejoignent au pied de cette ville, fondée au 13e siècle par un lieutenant anglais.",
      "Un vignoble mondialement réputé, classé à l'UNESCO juste à côté, porte le nom d'une commune voisine.",
      "Cette bastide, fondée par Roger de Leyburn, a donné son nom francisé à toute la ville."
    ] },
  { city: "Saint-Nazaire", place: "Les anciennes bases sous-marines", category: "satellite", lat: 47.274683, lng: -2.203491,
    clues: [
      "Les plus grands paquebots de croisière du monde sont assemblés dans les chantiers navals de cette ville.",
      "D'énormes bunkers en béton, construits pour abriter des sous-marins allemands, subsistent encore sur son port.",
      "Elle se trouve à l'embouchure de la Loire, juste en face de Saint-Brevin."
    ] },
  { city: "Haguenau", place: "La forêt de Haguenau", category: "satellite", lat: 48.843588, lng: 7.869252,
    clues: [
      "Cette ville alsacienne est entourée de l'une des plus grandes forêts de plaine de France.",
      "Le houblon cultivé aux alentours alimente de nombreuses brasseries de la région.",
      "Frédéric Barberousse, empereur du Saint-Empire, y fit construire un palais impérial au Moyen Âge."
    ] },
  { city: "Roubaix", place: "La Piscine, musée d'art", category: "satellite", lat: 50.692706, lng: 3.167559,
    clues: [
      "Une célèbre course cycliste d'un jour, réputée pour ses pavés, se termine chaque printemps dans cette ville.",
      "Un ancien établissement de bains municipaux Art déco abrite aujourd'hui un musée d'art très original.",
      "Elle fut, avec sa voisine, l'un des plus grands centres textiles d'Europe au 19e siècle."
    ] },
  { city: "Tourcoing", place: "Le musée des Beaux-Arts", category: "satellite", lat: 50.72326, lng: 3.161833,
    clues: [
      "Cette ville du Nord touche presque la frontière belge, à quelques kilomètres à peine.",
      "Sa voisine directe partage avec elle une longue histoire industrielle liée à la laine et au coton.",
      "Elle forme, avec Lille et Roubaix, une même agglomération sans frontière visible entre les trois villes."
    ] },
  { city: "Fougères", place: "Le château fort", category: "satellite", lat: 48.354212, lng: -1.208488,
    clues: [
      "L'un des plus vastes châteaux forts d'Europe, avec treize tours, domine cette ville bretonne.",
      "Victor Hugo a situé une partie de son roman 'Quatrevingt-treize' dans cette région marquée par les Chouans.",
      "Elle fut longtemps un grand centre de fabrication de chaussures en France."
    ] },
  { city: "Vitré", place: "Le château", category: "satellite", lat: 48.12436, lng: -1.215087,
    clues: [
      "Cette ville bretonne, aux maisons à pans de bois parfaitement conservées, doit sa richesse ancienne à la dentelle.",
      "Une célèbre marquise épistolière du 17e siècle vivait dans un château tout proche.",
      "Son château médiéval, en forme de fer à cheval, veille toujours sur la vieille ville."
    ] },

  // ===== LIEUX HISTORIQUES (15) =====
  { city: "Domrémy-la-Pucelle", place: "La maison natale de Jeanne d'Arc", category: "historique", lat: 48.442109, lng: 5.674526,
    clues: [
      "Une bergère devenue chef de guerre serait née dans ce tout petit village lorrain vers 1412.",
      "Sa maison natale, en pierre, se visite encore juste à côté de l'église du village.",
      "Elle entendit ici, selon la légende, des voix qui la poussèrent à sauver le royaume de France."
    ] },
  { city: "Azincourt", place: "Le champ de bataille", category: "historique", lat: 50.462945, lng: 2.139463,
    clues: [
      "En 1415, une armée française bien plus nombreuse y fut écrasée par des archers anglais.",
      "Shakespeare a immortalisé cette défaite française dans l'une de ses pièces consacrées à Henri V.",
      "Ce petit village du Pas-de-Calais a donné son nom à l'un des pires désastres militaires français."
    ] },
  { city: "Colombey-les-Deux-Églises", place: "Le mémorial et la Croix de Lorraine", category: "historique", lat: 48.223346, lng: 4.879752,
    clues: [
      "Un général devenu président de la République s'est retiré et repose dans ce petit village de Haute-Marne.",
      "Une immense croix à double traverse, symbole de la France Libre, domine la colline au-dessus du village.",
      "Charles de Gaulle y possédait sa maison de campagne, où il rédigea une partie de ses mémoires."
    ] },
  { city: "Fontevraud-l'Abbaye", place: "L'abbaye royale", category: "historique", lat: 47.181788, lng: 0.049988,
    clues: [
      "Cette abbaye angevine a longtemps été dirigée par des abbesses, un cas rare pour l'époque médiévale.",
      "Aliénor d'Aquitaine et Richard Cœur de Lion y reposent, leurs gisants peints encore visibles aujourd'hui.",
      "Elle servit aussi de prison d'État pendant près de 150 ans, jusqu'au milieu du 20e siècle."
    ] },
  { city: "Alise-Sainte-Reine", place: "Le site archéologique d'Alésia", category: "historique", lat: 47.535697, lng: 4.469034,
    clues: [
      "Un chef gaulois s'est ici rendu à Jules César après un siège resté célèbre, en 52 avant J.-C.",
      "Vercingétorix déposa ses armes aux pieds du général romain à l'issue de ce siège légendaire.",
      "Une immense statue de bronze du chef gaulois, voulue par Napoléon III, domine encore la colline."
    ] },
  { city: "Bouvines", place: "Le champ de bataille", category: "historique", lat: 50.579048, lng: 3.187456,
    clues: [
      "En 1214, un roi de France y vainquit une coalition réunissant l'empereur et plusieurs grands seigneurs.",
      "Philippe Auguste remporta ici une victoire qui renforça durablement le pouvoir royal français.",
      "Ce petit village du Nord a donné son nom à l'une des batailles fondatrices de l'histoire de France."
    ] },
  { city: "Chinon", place: "La forteresse royale", category: "historique", lat: 47.168069, lng: 0.23657,
    clues: [
      "Une jeune paysanne lorraine vint ici convaincre un dauphin hésitant de la laisser combattre pour son royaume.",
      "Jeanne d'Arc rencontra Charles VII dans la grande salle de cette forteresse dominant la Vienne.",
      "Les Templiers y furent emprisonnés en 1308, avant leur procès qui mena à la dissolution de l'ordre."
    ] },
  { city: "Amboise", place: "Le château royal", category: "historique", lat: 47.413654, lng: 0.986055,
    clues: [
      "Un génie italien, peintre, inventeur et anatomiste, passa les trois dernières années de sa vie près de ce château.",
      "Léonard de Vinci est enterré dans la chapelle de ce château royal du Val de Loire.",
      "François Ier l'invita à s'installer dans une demeure toute proche, reliée au château par un souterrain."
    ] },
  { city: "Cluny", place: "L'abbaye", category: "historique", lat: 46.434805, lng: 4.658501,
    clues: [
      "Cette abbaye bourguignonne fut, avant la construction de Saint-Pierre de Rome, la plus grande église du monde chrétien.",
      "Un vaste réseau de monastères à travers l'Europe dépendait autrefois de cette seule abbaye mère.",
      "La Révolution française en détruisit la majeure partie, n'en laissant debout qu'un fragment du transept."
    ] },
  { city: "Vézelay", place: "La basilique Sainte-Marie-Madeleine", category: "historique", lat: 47.466491, lng: 3.748747,
    clues: [
      "Cette 'colline éternelle' de Bourgogne est l'un des points de départ historiques du chemin vers Compostelle.",
      "Une basilique romane, censée conserver les reliques de Marie-Madeleine, couronne le sommet de la colline.",
      "Saint Bernard y prêcha en 1146 le départ en croisade devant le roi de France et une foule immense."
    ] },
  { city: "Autun", place: "La cathédrale Saint-Lazare", category: "historique", lat: 46.945025, lng: 4.299122,
    clues: [
      "Fondée par l'empereur Auguste, cette ville bourguignonne portait à l'origine un nom qui rendait hommage à cet empereur.",
      "Ses remparts et sa porte monumentale romaine témoignent encore d'une splendeur antique oubliée.",
      "Napoléon Bonaparte y fut scolarisé, jeune adolescent, avant de rejoindre l'école militaire de Brienne."
    ] },
  { city: "Orange", place: "Le théâtre antique", category: "historique", lat: 44.135903, lng: 4.808812,
    clues: [
      "Un théâtre romain à la façade quasiment intacte accueille encore aujourd'hui un grand festival lyrique d'été.",
      "Son arc de triomphe romain, l'un des mieux conservés du monde, célébrait les vétérans d'une légion.",
      "Cette ville a aussi donné son nom à une dynastie royale néerlandaise, encore régnante aujourd'hui."
    ] },
  { city: "Bayeux", place: "La cathédrale Notre-Dame", category: "historique", lat: 49.275469, lng: -0.703469,
    clues: [
      "Une broderie de 70 mètres de long raconte, image par image, la conquête normande de l'Angleterre en 1066.",
      "Cette ville normande fut la toute première libérée par les Alliés après le débarquement de juin 1944.",
      "Sa célèbre tapisserie se visite aujourd'hui dans un musée dédié, non loin de sa cathédrale."
    ] },
  { city: "Compiègne", place: "La clairière de l'Armistice", category: "historique", lat: 49.427422, lng: 2.906512,
    clues: [
      "Deux armistices majeurs de deux guerres mondiales différentes ont été signés dans le même wagon, en forêt.",
      "En 1918 puis en 1940, c'est dans cette forêt de l'Oise que la France a signé la fin des combats.",
      "Jeanne d'Arc fut aussi capturée sous les remparts de cette ville, en 1430."
    ] },
  { city: "Reims", place: "La cathédrale Notre-Dame", category: "historique", lat: 49.253828, lng: 4.034047,
    clues: [
      "Presque tous les rois de France, de Clovis à Charles X, furent sacrés dans la cathédrale de cette ville.",
      "Jeanne d'Arc y fit sacrer Charles VII en 1429, accomplissant l'une des promesses de ses 'voix'.",
      "Cette ville de Champagne donne aussi son nom à un vin effervescent connu dans le monde entier."
    ] },

  // ===== LIEUX TOURISTIQUES (10) =====
  { city: "Rocamadour", place: "La cité religieuse", category: "touristique", lat: 44.799451, lng: 1.617637,
    clues: [
      "Ce village du Lot semble littéralement accroché à la falaise qui surplombe le canyon de l'Alzou.",
      "Une statue noire de la Vierge, censée avoir des pouvoirs miraculeux, attire des pèlerins depuis le Moyen Âge.",
      "Un fromage de chèvre au lait cru, tout rond, porte aussi le nom de ce village vertigineux."
    ] },
  { city: "Carnac", place: "Les alignements mégalithiques", category: "touristique", lat: 47.591838, lng: -3.083599,
    clues: [
      "Plus de 3000 pierres dressées par l'homme, il y a des milliers d'années, s'alignent sur plusieurs kilomètres ici.",
      "Personne ne sait avec certitude pourquoi les hommes du Néolithique ont dressé tous ces menhirs alignés.",
      "Ce village du Morbihan possède l'une des plus grandes concentrations mégalithiques du monde."
    ] },
  { city: "Mont-Saint-Michel", place: "L'abbaye", category: "touristique", lat: 48.635957, lng: -1.511741,
    clues: [
      "Une abbaye juchée sur un rocher devient une île à marée haute, l'une des plus fortes d'Europe.",
      "On raconte que l'archange Michel serait apparu en songe à un évêque pour réclamer la construction de ce sanctuaire.",
      "Sa silhouette, entre Normandie et Bretagne, est l'un des monuments les plus photographiés de France."
    ] },
  { city: "Saint-Émilion", place: "L'église monolithe", category: "touristique", lat: 44.893306, lng: -0.156351,
    clues: [
      "Un moine ermite du 8e siècle a donné son nom à ce village entouré de vignes, près de Bordeaux.",
      "Son vignoble, l'un des plus prestigieux de France, est le premier au monde classé en totalité à l'UNESCO.",
      "Une immense église a été entièrement creusée dans la roche calcaire, sous le village lui-même."
    ] },
  { city: "Collioure", place: "Le château royal et le clocher", category: "touristique", lat: 42.526178, lng: 3.084842,
    clues: [
      "Un village catalan aux façades colorées, sur la Méditerranée, a inspiré tout un courant pictural fauviste.",
      "Matisse et Derain y peignirent, en 1905, des toiles aux couleurs si vives qu'on les qualifia de 'fauves'.",
      "Son clocher, ancien phare reconverti en église, s'avance directement dans la mer."
    ] },
  { city: "Étretat", place: "Les falaises et l'Aiguille", category: "touristique", lat: 49.7073, lng: 0.193582,
    clues: [
      "D'immenses falaises de craie blanche, percées d'une arche naturelle, bordent cette station normande.",
      "Maupassant, natif de la région, a souvent décrit ces falaises spectaculaires dans ses écrits.",
      "Un cambrioleur gentleman imaginé par Maurice Leblanc a établi son repaire secret sous ces mêmes falaises."
    ] },
  { city: "Honfleur", place: "Le Vieux-Bassin", category: "touristique", lat: 49.420192, lng: 0.233191,
    clues: [
      "Un vieux port normand aux hautes maisons d'ardoise a inspiré de nombreux peintres avant l'impressionnisme.",
      "Un explorateur français est parti de ce port en 1608 pour fonder une ville nommée Québec.",
      "Eugène Boudin, précurseur de l'impressionnisme, y est né et a peint son fameux ciel changeant."
    ] },
  { city: "Gordes", place: "Le village perché", category: "touristique", lat: 43.911315, lng: 5.200176,
    clues: [
      "Ce village du Luberon, aux maisons de pierre sèche empilées à flanc de colline, est classé parmi les plus beaux de France.",
      "Des cabanes rondes en pierre sans mortier, appelées bories, parsèment la campagne autour du village.",
      "Le peintre Victor Vasarely s'y est installé et y a créé un musée qui porte son nom."
    ] },
  { city: "Saint-Paul-de-Vence", place: "Les remparts et les ruelles", category: "touristique", lat: 43.699246, lng: 7.119171,
    clues: [
      "De nombreux peintres et acteurs, de Chagall à Yves Montand, ont fréquenté ce village fortifié près de Nice.",
      "Une fondation d'art moderne, nichée dans la pinède juste à côté, expose Miró, Braque et Giacometti.",
      "Ses ruelles pavées et ses remparts médiévaux en font l'un des villages les plus visités de la Côte d'Azur."
    ] },
  { city: "Annecy", place: "Le vieux canal et le Palais de l'Île", category: "touristique", lat: 45.898576, lng: 6.127085,
    clues: [
      "Un lac alpin, réputé pour être l'un des plus purs d'Europe, borde cette ville aux canaux surnommée 'la Venise des Alpes'.",
      "Un ancien palais de justice, construit directement sur une île au milieu d'un canal, est le symbole de la ville.",
      "Un grand festival international du film d'animation s'y déroule chaque année en juin."
    ] },

  // ===== VILLAGES (5) =====
  { city: "Èze", place: "Le village perché et le jardin exotique", category: "village", lat: 43.727786, lng: 7.361707,
    clues: [
      "Ce nid d'aigle de la Côte d'Azur surplombe la Méditerranée depuis un piton rocheux vertigineux.",
      "Friedrich Nietzsche aurait conçu une partie d'un de ses ouvrages philosophiques en arpentant le sentier qui y mène.",
      "Un jardin exotique, planté de cactus, occupe aujourd'hui l'emplacement de l'ancien château du village."
    ] },
  { city: "Conques", place: "L'abbatiale Sainte-Foy", category: "village", lat: 44.599257, lng: 2.397693,
    clues: [
      "Ce village de l'Aveyron, niché dans un vallon, est une étape historique du chemin de Compostelle.",
      "Son abbatiale romane conserve un trésor d'orfèvrerie médiévale d'une richesse exceptionnelle pour un si petit lieu.",
      "Une statue-reliquaire en or, représentant une jeune martyre, attire encore aujourd'hui pèlerins et curieux."
    ] },
  { city: "Riquewihr", place: "La rue du Général de Gaulle", category: "village", lat: 48.166201, lng: 7.299989,
    clues: [
      "Ce village alsacien, entouré de vignobles, a conservé presque intact son aspect du 16e siècle.",
      "Ses maisons à colombages colorées auraient inspiré, selon une rumeur populaire, le décor d'un célèbre dessin animé Disney.",
      "Épargné par les guerres et les bombardements, il est resté un véritable musée vivant à ciel ouvert."
    ] },
  { city: "Locronan", place: "La place de l'église", category: "village", lat: 48.098366, lng: -4.208333,
    clues: [
      "Ce village breton, célèbre pour ses tisserands de toile à voile, est resté figé dans son décor de granit.",
      "Son architecture si bien préservée en a fait un décor de cinéma prisé pour des films en costumes.",
      "Roman Polanski y a tourné une adaptation d'un roman de Thomas Hardy dans les années 1970."
    ] },
  { city: "Yvoire", place: "Le château et le jardin des Cinq Sens", category: "village", lat: 46.368336, lng: 6.325524,
    clues: [
      "Ce village médiéval fleuri s'avance sur les rives d'un grand lac alpin partagé avec la Suisse.",
      "Un jardin conçu pour éveiller tous les sens du visiteur s'étend au pied de son château fort.",
      "Le lac Léman borde ce village, offrant une vue dégagée jusqu'aux rives suisses opposées."
    ] }

];

// Pour utilisation Node/tests éventuels
if (typeof module !== "undefined" && module.exports) {
  module.exports = treasureBank;
}
