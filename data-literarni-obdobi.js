/* ═══════════════════════════════════════════════════════════
   LITERÁRNÍ OBDOBÍ — KOMPLETNÍ DATOVÁ SADA
   Podle sylabu Literatura pro 2. stupeň ZŠ
   Každé období: charakteristika + autoři + díla
═══════════════════════════════════════════════════════════ */

const TOPICS = [

  /* ─────────────────────────────────────────────
     1. STAROVĚKÉ PÍSEMNICTVÍ
  ───────────────────────────────────────────── */
  {
    id: 'starovek',
    section: 'lit',
    tag: 'Literární období · Starověk',
    title: 'Starověké písemnictví',
    desc: 'Mimoevropské literatury, antická literatura (Řecko, Řím), bible. Nejstarší literární památky lidstva.',
    cards: [
      {q:'Co je nejstarší literární památka lidstva?', a:'Epos o Gilgamešovi (Mezopotámie)', explain:'Sumerský hrdinský epos, ~2000 př. n. l. O hledání nesmrtelnosti.'},
      {q:'Co je Bible?', a:'Posvátná kniha křesťanství — Starý a Nový zákon', explain:'Starý zákon (židovský původ) — Genesis, Exodus. Nový zákon — 4 evangelia, listy apoštolů.'},
      {q:'Hlavní představitelé řecké antiky:', a:'Homér, Sofokles, Aischylos, Euripides, Sapfó', explain:'Homér — eposy, Sofokles + Euripides — tragédie, Sapfó — lyrika.'},
      {q:'Kdo byl Homér? Co napsal?', a:'Řecký básník, autor eposů Ilias a Odyssea', explain:'Asi 8. st. př. n. l. Ilias = trojská válka. Odyssea = návrat Odyssea z války.'},
      {q:'Hlavní řecké tragédie:', a:'Sofokles "Antigona", Aischylos "Oresteia", Euripides "Médea"', explain:'Antické tragédie zkoumají osud, vinu, povinnost vůči bohům.'},
      {q:'Hlavní představitelé římské antiky:', a:'Vergilius, Ovidius, Horatius, Cicero, Caesar', explain:'Vergilius — epos Aeneis. Ovidius — Proměny. Cicero — řečnictví.'},
      {q:'Kdo napsal Aeneis?', a:'Vergilius (římský básník)', explain:'Národní epos Říma — putování trojského hrdiny Aenea, založení Říma.'},
      {q:'Kdo napsal Proměny (Metamorfózy)?', a:'Ovidius', explain:'Mytologické vyprávění o proměnách (lidé v rostliny, zvířata). Klasika světové literatury.'},
      {q:'Co je epos?', a:'Velká epická báseň o hrdinských činech', explain:'Příklady: Ilias, Odyssea, Aeneis, Gilgameš.'},
      {q:'Hlavní žánry starověké literatury:', a:'Epos, mýtus, drama (tragédie, komedie), lyrika, bajka', explain:'Drama vzniklo v Řecku — Dionýsovy slavnosti.'},
      {q:'Co jsou mýty?', a:'Vyprávění o vzniku světa, bozích a hrdinech', explain:'Antické mýty (Zeus, Prometheus, Herkules), severské, slovanské, indické.'},
      {q:'Kdo byl Ezop?', a:'Řecký autor bajek (asi 6. st. př. n. l.)', explain:'Bajky se zvířaty s ponaučením. Inspiroval pozdější autory (La Fontaine, Krylov).'},
      {q:'Indická posvátná kniha (epos):', a:'Mahábhárata a Rámájana', explain:'Sanskrtské eposy. Mahábhárata obsahuje slavnou Bhagavadgítu.'},
      {q:'Co je drama? Kdy vzniklo?', a:'Drama vzniklo v antickém Řecku (5. st. př. n. l.)', explain:'Z Dionýsových slavností. Komedie + tragédie.'},
      {q:'Slavná řecká filozofická díla:', a:'Platón "Ústava", Aristoteles "Etika"', explain:'I když to nejsou literární díla, formovaly literaturu (poetika).'}
    ],
    quiz: [
      {q:'Kdo je autorem Iliady a Odyssey?', options:['Sofokles','Vergilius','Homér','Ovidius'], correct:2, explain:'Homér — řecký básník (8. st. př. n. l.), autor obou klasických eposů.'},
      {q:'Aeneis napsal:', options:['Homér','Vergilius','Ovidius','Horatius'], correct:1, explain:'Vergilius — římský básník, autor národního eposu Aeneis.'},
      {q:'Nejstarší literární památka lidstva:', options:['Bible','Ilias','Epos o Gilgamešovi','Mahábhárata'], correct:2, explain:'Sumerský epos o Gilgamešovi (~2000 př. n. l.) je nejstarším známým literárním dílem.'},
      {q:'Bajky napsal:', options:['Homér','Ezop','Sofokles','Vergilius'], correct:1, explain:'Ezop — řecký autor bajek (6. st. př. n. l.). Bajka má zvířata + ponaučení.'},
      {q:'"Antigona" je tragédie od:', options:['Aischyla','Sofokla','Euripida','Aristofana'], correct:1, explain:'Sofokles napsal Antigonu — klasickou řeckou tragédii o střetu zákona a svědomí.'}
    ]
  },

  /* ─────────────────────────────────────────────
     2. STŘEDOVĚKÁ LITERATURA
  ───────────────────────────────────────────── */
  {
    id: 'stredovek',
    section: 'lit',
    tag: 'Literární období · Středověk',
    title: 'Středověká literatura',
    desc: 'Staroslověnské a latinské písemnictví, česky psaná literatura, husitství. Konstantin a Metoděj, Hus.',
    cards: [
      {q:'Časové vymezení středověku:', a:'Od pádu Říma (5. stol.) do 15. století', explain:'V literatuře se dělí na raný, vrcholný a pozdní středověk.'},
      {q:'Co je staroslověnština? Kdo ji vytvořil?', a:'První spisovný jazyk Slovanů, vytvořili ji Konstantin a Metoděj (863)', explain:'Velká Morava. Vytvořili hlaholici, později vznikla cyrilice (základ azbuky).'},
      {q:'Kdo napsal Život sv. Konstantina a Život sv. Metoděje?', a:'Klement (žák Konstantina a Metoděje)', explain:'Staroslověnské hagiografie (legendy o životě světců). Nejstarší slovanské literární památky u nás.'},
      {q:'Co je legenda?', a:'Vyprávění o životě a zázracích světce', explain:'Středověký žánr. Příklad: Legenda o sv. Václavovi.'},
      {q:'Slavná česká středověká kronika:', a:'Kosmova kronika česká (latinsky, ~1119)', explain:'Kosmas, kanovník Pražského hradu. První velká česká dějepisná kniha.'},
      {q:'Český středověký epos:', a:'Alexandreis (~1300)', explain:'Veršovaný epos o Alexandru Velikém. Anonymní český autor podle latinské předlohy.'},
      {q:'První česky psaná duchovní píseň:', a:'Hospodine, pomiluj ny (10.-11. století)', explain:'Nejstarší česká duchovní píseň. Zpívala se i při korunovacích.'},
      {q:'Kdo byl Jan Hus?', a:'Český kněz, kazatel, reformátor (1370-1415)', explain:'Kritizoval prodávání odpustků. Upálen v Kostnici. Inspirace husitských válek.'},
      {q:'Hlavní díla Jana Husa:', a:'Knihy o svatokupectví, Postila, O církvi', explain:'Husovy spisy položily základy reformace. Kritika církve.'},
      {q:'Husitské zpěvy:', a:'Ktož jsú boží bojovníci', explain:'Bojová husitská píseň. Stala se symbolem husitského hnutí.'},
      {q:'Slavné církevní drama:', a:'Mastičkář (~1300)', explain:'Český středověký drama-fraška o trhu s mastmi (mast = lék). Jeden z nejstarších českých dramat.'},
      {q:'Hlavní žánry středověké literatury:', a:'Legenda, kronika, duchovní píseň, satira, žaltář', explain:'Středověk byl nábožensky orientovaný — hodně duchovní literatury.'},
      {q:'Co byly satiry Hradeckého rukopisu?', a:'Soubor středověkých satir', explain:'Např. "Desatero kázanie božie", "Satiry o řemeslnících a konšelích".'},
      {q:'Slavná latinská středověká dílo:', a:'Dante "Božská komedie", Boccaccio "Dekameron"', explain:'Pozdní středověk — italská renesance se rodí z gotiky.'},
      {q:'Karel IV. byl literárně činný — co napsal?', a:'Vita Caroli (vlastní životopis)', explain:'Karel IV. psal latinsky. Vita Caroli = první autobiografie ve střední Evropě.'},
      {q:'Co byly žaltáře?', a:'Knihy s žalmy (biblické písně)', explain:'Středověký žánr. Klementinský, Glosovaný, Kapitulní žaltář.'},
      {q:'Hlavní představitel rytířského eposu:', a:'Wolfram von Eschenbach "Parsifal"', explain:'Středověký rytířský epos. Hledání svatého grálu.'},
      {q:'Husitský duchovní vůdce po Husově smrti:', a:'Petr Chelčický', explain:'Spis "Sieť viery pravé" — kritika středověké společnosti.'}
    ],
    quiz: [
      {q:'Konstantin a Metoděj přišli na Velkou Moravu v roce:', options:['723','863','1234','1415'], correct:1, explain:'V roce 863 — vytvořili hlaholici a přeložili Bibli do staroslověnštiny.'},
      {q:'Kdo napsal Kosmovu kroniku?', options:['Hus','Kosmas','Metoděj','Karel IV.'], correct:1, explain:'Kosmas, kanovník Pražského hradu, napsal kroniku česky kolem roku 1119.'},
      {q:'Jan Hus byl upálen v roce:', options:['1402','1415','1422','1492'], correct:1, explain:'V roce 1415 v Kostnici. Tato událost vyvolala husitské války.'},
      {q:'"Ktož jsú boží bojovníci" je:', options:['Středověká kronika','Husitská bojová píseň','Latinský epos','Legenda'], correct:1, explain:'Slavná husitská píseň — symbol husitského hnutí.'},
      {q:'Vita Caroli napsal:', options:['Kosmas','Karel IV.','Hus','Chelčický'], correct:1, explain:'Vlastní životopis Karla IV. — psal latinsky.'}
    ]
  },

  /* ─────────────────────────────────────────────
     3. RENESANCE A HUMANISMUS
  ───────────────────────────────────────────── */
  {
    id: 'renesance',
    section: 'lit',
    tag: 'Literární období · Renesance',
    title: 'Renesance a humanismus',
    desc: '14.-16. stol. Návrat k antickým ideálům, oslava člověka. Petrarca, Boccaccio, Shakespeare.',
    cards: [
      {q:'Časové vymezení renesance:', a:'14.-16. století (v Itálii dříve, severněji později)', explain:'Renesance = "znovuzrození" antických ideálů. Vznikla v Itálii.'},
      {q:'Hlavní znaky renesance:', a:'Návrat k antice, humanismus, oslava člověka, racionalismus', explain:'Místo Boha — člověk ve středu. Smyslové radosti, krása, věda.'},
      {q:'Co je humanismus?', a:'Filozofický směr renesance — důraz na člověka, jeho hodnotu', explain:'Studium antických textů, klasických jazyků (latina, řečtina).'},
      {q:'Hlavní italští renesanční autoři:', a:'Dante, Petrarca, Boccaccio', explain:'Trojice "tří korun" italské literatury. Dante — Božská komedie, Petrarca — sonety, Boccaccio — Dekameron.'},
      {q:'Co napsal Dante?', a:'Božská komedie (~1320)', explain:'Veršovaný epos. Cesta peklem, očistcem a rájem. Vrcholné dílo italské literatury.'},
      {q:'Co napsal Boccaccio?', a:'Dekameron', explain:'100 povídek vyprávěných během 10 dní. Realistický pohled na společnost.'},
      {q:'Petrarca byl mistrem žánru:', a:'Sonet (Sonety Lauře)', explain:'Petrarca dal sonetu klasickou formu. Inspiroval celou Evropu.'},
      {q:'Hlavní anglický renesanční autor:', a:'William Shakespeare (1564-1616)', explain:'Mistr dramatu. 37 her: tragédie, komedie, historické hry.'},
      {q:'Hlavní Shakespearovy tragédie:', a:'Hamlet, Romeo a Julie, Othello, Macbeth, Král Lear', explain:'Tragédie = hlavní hrdina umírá. Témata: pomsta, žárlivost, ambice, věrnost.'},
      {q:'Hlavní Shakespearovy komedie:', a:'Sen noci svatojánské, Mnoho povyku pro nic, Zkrocení zlé ženy', explain:'Komedie končí svatbami a smírem. Lehký tón, slovní humor.'},
      {q:'Co je španělská renesance?', a:'Cervantes — Don Quijote (1605)', explain:'Don Quijote — první moderní román. Parodie na rytířské eposy.'},
      {q:'Český humanismus — hlavní představitelé:', a:'Bohuslav Hasištejnský z Lobkovic, Daniel Adam z Veleslavína', explain:'Veleslavín = doba "veleslavínská" = zlatý věk české literatury.'},
      {q:'Co je Bible kralická?', a:'Český překlad Bible (1579-1593)', explain:'Vrcholné dílo Jednoty bratrské. Jazykově dokonalá. Předloha pro spisovnou češtinu.'},
      {q:'Kdo byl Jan Blahoslav?', a:'Český humanista, biskup Jednoty bratrské', explain:'"Gramatika česká" — první systematická česká gramatika.'},
      {q:'Co je sonet (z renesance)?', a:'Lyrická báseň o 14 verších (4+4+3+3)', explain:'Vznikl v italské renesanci. Petrarca a Shakespeare jeho mistři.'}
    ],
    quiz: [
      {q:'Hlavní italský renesanční básník — sonety:', options:['Dante','Petrarca','Boccaccio','Cervantes'], correct:1, explain:'Petrarca napsal "Sonety Lauře" — vzor pro celou evropskou poezii.'},
      {q:'Don Quijote napsal:', options:['Shakespeare','Cervantes','Boccaccio','Dante'], correct:1, explain:'Miguel de Cervantes — španělský autor. Don Quijote = první moderní román.'},
      {q:'Hamlet, Romeo a Julie napsal:', options:['Petrarca','Boccaccio','Shakespeare','Dante'], correct:2, explain:'William Shakespeare — anglický dramatik renesance.'},
      {q:'"Božská komedie" je dílo:', options:['Petrarcy','Danta','Boccaccia','Shakespearea'], correct:1, explain:'Dante Alighieri napsal Božskou komedii kolem roku 1320.'},
      {q:'Bible kralická vznikla:', options:['Ve středověku','V renesanci (1579-1593)','V baroku','V národním obrození'], correct:1, explain:'Bible kralická — vrcholné dílo Jednoty bratrské, českého humanismu.'}
    ]
  },

  /* ─────────────────────────────────────────────
     4. BAROKO
  ───────────────────────────────────────────── */
  {
    id: 'baroko',
    section: 'lit',
    tag: 'Literární období · Baroko',
    title: 'Baroko',
    desc: '17.-18. stol. Po třicetileté válce. Komenský, citovost, religiozita, kontrasty.',
    cards: [
      {q:'Časové vymezení baroka:', a:'17.-18. století', explain:'V Čechách po Bílé hoře (1620). Doba pobělohorská, protireformace.'},
      {q:'Hlavní znaky baroka:', a:'Religiozita, citovost, kontrasty, pohyb, dramatičnost', explain:'Po válkách lidé hledají duchovní jistotu. Bohatá symbolika, mystika.'},
      {q:'Hlavní český barokní autor:', a:'Jan Amos Komenský (1592-1670)', explain:'"Učitel národů". Pedagog, filozof, biskup Jednoty bratrské. Žil v exilu.'},
      {q:'Hlavní díla Komenského:', a:'Labyrint světa a ráj srdce, Velká didaktika, Orbis pictus', explain:'Labyrint = alegorický román. Didaktika = teorie vyučování. Orbis = první obrazová učebnice.'},
      {q:'O čem je Labyrint světa?', a:'Alegorická cesta poutníka po světě, kde hledá smysl', explain:'Poutník bloudí labyrintem světa, končí v ráji svého srdce (Bohu).'},
      {q:'Komenský založil moderní pedagogiku — co dal?', a:'Princip "škola hrou", systematické vyučování, učebnice s obrázky', explain:'Velká didaktika = první systematická pedagogika. Inspiroval celou Evropu.'},
      {q:'Co je tzv. pobělohorská doba?', a:'Po porážce stavů na Bílé hoře (1620) — protireformace', explain:'České země pod Habsburky. Násilná katolizace. Mnoho protestantů emigrovalo (Komenský).'},
      {q:'Hlavní český barokní básník:', a:'Adam Michna z Otradovic', explain:'"Česká mariánská muzika" — duchovní písně. Některé se zpívají dodnes (Vánoce).'},
      {q:'Český barokní kazatel:', a:'Bohuslav Balbín', explain:'"Rozprava na obranu jazyka slovanského, zvláště českého" — vlastenecká obrana češtiny.'},
      {q:'Co je kazatelská literatura?', a:'Žánr barokní literatury — kázání, výklady Bible', explain:'Velmi populární v baroku. Strhující rétorika, příklady ze života.'},
      {q:'Kdo byl Bedřich Bridel?', a:'Český barokní básník, jezuita', explain:'"Co Bůh? Člověk?" — kontemplativní báseň o vztahu člověka k Bohu.'},
      {q:'Hlavní zahraniční barokní autoři:', a:'Molière, Milton, Cervantes (přechod z renesance)', explain:'Milton "Ztracený ráj". Molière — francouzské komedie (Lakomec, Tartuffe).'},
      {q:'Co je tzv. tajná literatura v baroku?', a:'Zakázané knihy nekatolíků, vydávané v exilu', explain:'Exulantská literatura. Komenský psal v Polsku, Holandsku, Anglii.'},
      {q:'Hlavní žánry baroka:', a:'Duchovní píseň, kazatelství, alegorický román, drama', explain:'Náboženská tematika. Boj duše. Často s mystickými prvky.'},
      {q:'Co znamená "barokní kontrast"?', a:'Spojení protikladů — Bůh × ďábel, život × smrt, krása × hrůza', explain:'Baroko miluje protiklady. Ve výtvarném umění to vidíme jako světlo × tma.'}
    ],
    quiz: [
      {q:'"Učitel národů" — Jan Amos Komenský — žil v období:', options:['Středověk','Renesance','Baroko','Romantismus'], correct:2, explain:'Komenský byl barokní autor (1592-1670), žil v pobělohorské době.'},
      {q:'Co napsal Komenský?', options:['Babičku','Labyrint světa a ráj srdce','Máj','Kytice'], correct:1, explain:'Labyrint světa a ráj srdce — alegorický román Komenského.'},
      {q:'První obrazová učebnice nese jméno:', options:['Velká didaktika','Orbis pictus','Komenský','Brána jazyků'], correct:1, explain:'Orbis pictus (Svět v obrazech) — Komenského revoluční učebnice.'},
      {q:'Bílá hora — poražení Čechů — rok:', options:['1415','1526','1620','1789'], correct:2, explain:'Bitva na Bílé hoře 1620 — začátek pobělohorské doby a baroka v Čechách.'},
      {q:'Adam Michna z Otradovic je hlavně:', options:['Filozof','Barokní básník (duchovní písně)','Dramatik','Kronikář'], correct:1, explain:'Michna napsal "Českou mariánskou muziku" — duchovní písně, některé se zpívají dodnes.'}
    ]
  },

  /* ─────────────────────────────────────────────
     5. KLASICISMUS, OSVÍCENSTVÍ
  ───────────────────────────────────────────── */
  {
    id: 'klasicismus',
    section: 'lit',
    tag: 'Literární období · Klasicismus',
    title: 'Klasicismus a osvícenství',
    desc: '17.-18. stol. Rozum, řád, antické vzory. Molière, Voltaire, La Fontaine.',
    cards: [
      {q:'Časové vymezení klasicismu:', a:'17.-18. století', explain:'Vrchol za Ludvíka XIV. ve Francii. Doba absolutistických králů.'},
      {q:'Hlavní znaky klasicismu:', a:'Rozum, řád, jasnost, antické vzory, pravidla', explain:'Opak baroka. Místo emocí — rozum. Striktní pravidla pro každý žánr.'},
      {q:'Co je osvícenství?', a:'Filozofický směr 18. stol. — důraz na rozum, vědu, vzdělání', explain:'Voltaire, Rousseau. Heslo: "Mějte odvahu používat svůj rozum!"'},
      {q:'Hlavní francouzský dramatik klasicismu:', a:'Molière (1622-1673)', explain:'Mistr komedií. Vlastním jménem Jean-Baptiste Poquelin.'},
      {q:'Slavné Molièrovy hry:', a:'Lakomec, Tartuffe, Misantrop, Zdravý nemocný', explain:'Komedie kritizující lidské nešvary — chamtivost, pokrytectví, mizantropii.'},
      {q:'O čem je Lakomec?', a:'Komedie o lakotě — Harpagon miluje peníze víc než rodinu', explain:'Klasická Molièrova komedie. Lakomectví = jeden ze sedmi smrtelných hříchů.'},
      {q:'Klasicistní pravidlo "trojí jednoty":', a:'Jednota času, místa a děje', explain:'Drama se odehrává během jednoho dne, na jednom místě, s jedním hlavním dějem.'},
      {q:'Hlavní francouzský klasicistní bajkář:', a:'Jean de La Fontaine', explain:'Bajky. Inspirace u Ezopa. Zvířata jako symboly lidských vlastností.'},
      {q:'Hlavní osvícenští spisovatelé:', a:'Voltaire, Rousseau, Diderot', explain:'Filozofové i spisovatelé. Bojovali proti pověrám, za rozum a svobodu.'},
      {q:'Co napsal Voltaire?', a:'Candide (filozofický román)', explain:'Satirický román. Hrdina cestuje světem a poznává, že "tento svět není nejlepší ze všech možných".'},
      {q:'Daniel Defoe napsal:', a:'Robinson Crusoe (1719)', explain:'Anglický románopisec. Robinson na pustém ostrově — symbol člověka rozumu.'},
      {q:'Jonathan Swift napsal:', a:'Gulliverovy cesty (1726)', explain:'Satirický román. Gulliver mezi trpaslíky, obry, létajícími ostrovy. Kritika společnosti.'},
      {q:'V Čechách v té době:', a:'Pobělohorská doba, doznívá baroko, blíží se národní obrození', explain:'Český klasicismus byl slabý — vrchol české literatury bude až v obrození.'},
      {q:'Hlavní žánry klasicismu:', a:'Drama (tragédie, komedie), bajka, satira, oda, esej', explain:'Striktně dělené žánry. "Vyšší" (tragédie, óda) × "nižší" (komedie, bajka).'},
      {q:'Co je satira?', a:'Útvar zesměšňující lidské nešvary', explain:'Klasicismus a osvícenství si satiru milovali — kritika přes zesměšnění.'}
    ],
    quiz: [
      {q:'Hlavní žánr klasicismu — Molière byl mistr:', options:['Tragédie','Komedie','Eposu','Sonetu'], correct:1, explain:'Molière byl francouzský komediograf — Lakomec, Tartuffe, Misantrop.'},
      {q:'Robinson Crusoe napsal:', options:['Voltaire','Defoe','Swift','Molière'], correct:1, explain:'Daniel Defoe — anglický spisovatel osvícenství (1719).'},
      {q:'Co je "trojí jednota" v klasicismu?', options:['Bůh, král, lid','Jednota času, místa a děje','Otec, syn, duch svatý','Žánr, autor, dílo'], correct:1, explain:'Klasicistní pravidlo pro drama — jednota času, místa a děje.'},
      {q:'Voltaire je hlavně:', options:['Romantik','Osvícenský filozof a spisovatel','Klasický kazatel','Středověký autor'], correct:1, explain:'Voltaire — francouzský osvícenec. Bojoval za rozum, toleranci, svobodu.'},
      {q:'Gulliverovy cesty napsal:', options:['Defoe','Swift','Voltaire','La Fontaine'], correct:1, explain:'Jonathan Swift — anglický satirik (1726).'}
    ]
  },

  /* ─────────────────────────────────────────────
     6. NÁRODNÍ OBROZENÍ
  ───────────────────────────────────────────── */
  {
    id: 'obrozeni',
    section: 'lit',
    tag: 'Literární období · Obrození',
    title: 'Národní obrození',
    desc: 'Konec 18. - 19. stol. Obnova češtiny a české kultury. Dobrovský, Jungmann, Mácha, Erben, Němcová.',
    cards: [
      {q:'Co je národní obrození?', a:'Hnutí 18.-19. stol. za obnovu české kultury a jazyka', explain:'Po pobělohorské době téměř zaniklý český jazyk se obrodil. Tři fáze (defenzivní, ofenzivní, vrcholná).'},
      {q:'Časové vymezení národního obrození:', a:'Konec 18. - polovina 19. století', explain:'Začátek za Marie Terezie a Josefa II. Vrchol kolem roku 1848.'},
      {q:'Hlavní představitelé 1. fáze obrození (defenzivní):', a:'Josef Dobrovský, Václav Matěj Kramerius', explain:'Dobrovský — gramatika češtiny. Kramerius — vydávání knih a novin.'},
      {q:'Co napsal Josef Dobrovský?', a:'Zevrubná mluvnice jazyka českého', explain:'Vědecky popsal češtinu. Často se nazývá "patriarcha národního obrození".'},
      {q:'Hlavní představitelé 2. fáze (ofenzivní):', a:'Josef Jungmann, Pavel Josef Šafařík, František Palacký', explain:'Jungmann — slovník. Palacký — Dějiny národa českého. Buduje se vědecká čeština.'},
      {q:'Co napsal Josef Jungmann?', a:'Slovník česko-německý (5 dílů)', explain:'Obrovský slovník — důkaz, že čeština je plnohodnotný jazyk pro vědu.'},
      {q:'Co napsal František Palacký?', a:'Dějiny národa českého v Čechách a v Moravě', explain:'"Otec národa". Vědecky podložené dějiny — důkaz svébytnosti českého národa.'},
      {q:'Hlavní představitelé 3. fáze (vrcholná):', a:'Mácha, Erben, Tyl, Němcová, Borovský', explain:'Generace umělců. Vrchol národního obrození.'},
      {q:'Kdo byl Karel Hynek Mácha (1810-1836)?', a:'Český romantik, autor poemy Máj', explain:'Romantický básník. Žil krátce (26 let). Máj = vrchol české romantické poezie.'},
      {q:'O čem je Máj?', a:'Lyricko-epická poema o lásce, smrti a samotě', explain:'Vilém zabíjí svého otce, svůdce své milé Jarmily. Vilém je popraven. Slavný začátek "Byl pozdní večer..."'},
      {q:'Kdo byl Karel Jaromír Erben (1811-1870)?', a:'Český sběratel lidové slovesnosti, autor Kytice', explain:'Pohádky, balady. Z lidových motivů vytvořil umělecké dílo.'},
      {q:'O čem je Kytice?', a:'Sbírka 13 balad inspirovaných lidovou slovesností', explain:'Polednice, Vodník, Svatební košile, Štědrý den. Téma: nadpřirozené síly trestají lidi.'},
      {q:'Kdo byla Božena Němcová (1820-1862)?', a:'Česká spisovatelka, autorka Babičky', explain:'Pohádky, povídky, romány. Snažila se zachytit lidový jazyk a tradice.'},
      {q:'O čem je Babička?', a:'Idealizovaný portrét babičky a života na venkově', explain:'Z Ratibořického údolí. Babička jako morální vzor. Klasika české literatury.'},
      {q:'Kdo byl Karel Havlíček Borovský (1821-1856)?', a:'Český novinář, satirik, vlastenec', explain:'Bojoval proti rakouské cenzuře. Byl internován v Brixenu, kde napsal své nejlepší dílo.'},
      {q:'Co napsal Borovský v exilu?', a:'Tyrolské elegie, Král Lávra, Křest sv. Vladimíra', explain:'Satira na Rakousko. "Tyrolské elegie" = stesk po vlasti, kritika státu.'},
      {q:'Kdo byl Josef Kajetán Tyl (1808-1856)?', a:'Český dramatik, autor písně "Kde domov můj"', explain:'Hra "Fidlovačka" obsahuje píseň, která se stala českou hymnou.'},
      {q:'Slavná díla J. K. Tyla:', a:'Strakonický dudák, Fidlovačka, Jan Hus', explain:'Strakonický dudák — pohádkové drama. Jan Hus — historické drama.'},
      {q:'František Ladislav Čelakovský — co napsal?', a:'Ohlas písní ruských, Ohlas písní českých', explain:'Snažil se napsat poezii v duchu lidové slovesnosti — ale uměle.'},
      {q:'Hlavní žánry obrození:', a:'Pohádka, balada, historická próza, drama, satira', explain:'Návrat k lidové slovesnosti. Hledání kořenů národa.'}
    ],
    quiz: [
      {q:'Karel Hynek Mácha napsal:', options:['Babičku','Kytici','Máj','Slezské písně'], correct:2, explain:'Mácha — lyricko-epická poema Máj (1836). Vrchol českého romantismu.'},
      {q:'Babičku napsala:', options:['Karolína Světlá','Božena Němcová','Eliška Krásnohorská','Marie Pujmanová'], correct:1, explain:'Božena Němcová napsala Babičku (1855) — klasiku české literatury.'},
      {q:'Kytice je sbírka:', options:['Pohádek','Balad','Sonetů','Dramat'], correct:1, explain:'13 balad K. J. Erbena. Polednice, Vodník, Svatební košile...'},
      {q:'Slovník česko-německý napsal:', options:['Dobrovský','Jungmann','Palacký','Šafařík'], correct:1, explain:'Josef Jungmann — důkaz, že čeština je plnohodnotný vědecký jazyk.'},
      {q:'"Kde domov můj" je píseň z hry:', options:['Babička','Strakonický dudák','Fidlovačka','Máj'], correct:2, explain:'J. K. Tyl — Fidlovačka (1834). Píseň se stala českou hymnou.'},
      {q:'"Otec národa" je přezdívka:', options:['Dobrovského','Palackého','Macháe','Husa'], correct:1, explain:'František Palacký — autor Dějin národa českého.'}
    ]
  },

  /* ─────────────────────────────────────────────
     7. ROMANTISMUS
  ───────────────────────────────────────────── */
  {
    id: 'romantismus',
    section: 'lit',
    tag: 'Literární období · Romantismus',
    title: 'Romantismus',
    desc: '1. polovina 19. stol. Cit, vášeň, individualismus, příroda, exotika. Mácha, Hugo, Byron, Puškin.',
    cards: [
      {q:'Časové vymezení romantismu:', a:'Konec 18. - polovina 19. století', explain:'Reakce na klasicismus a osvícenství. Místo rozumu — cit. Místo řádu — vášeň.'},
      {q:'Hlavní znaky romantismu:', a:'Cit, vášeň, individualismus, příroda, exotika, fantazie, smrt', explain:'Romantik miluje silné emoce, je vyloučen ze společnosti, nešťastně miluje.'},
      {q:'Romantický hrdina je:', a:'Osamělý, vyloučený, nepochopený, často umírá', explain:'Bojuje sám proti světu. Často je to umělec, vyhnanec, zločinec, šílenec.'},
      {q:'Hlavní český romantik:', a:'Karel Hynek Mácha (Máj)', explain:'První český romantik. Mladý, melancholický, krátký život.'},
      {q:'Slavný anglický romantik:', a:'Lord Byron (1788-1824)', explain:'Anglický básník, dobrodruh. Vzor evropského romantika. Zemřel mladý v Řecku.'},
      {q:'Co napsal Byron?', a:'Childe Haroldova pouť, Don Juan', explain:'Childe Harold — putování romantického hrdiny po Evropě.'},
      {q:'Slavný francouzský romantik:', a:'Victor Hugo (1802-1885)', explain:'Romanopisec, básník, dramatik. Politický exulant.'},
      {q:'Co napsal Victor Hugo?', a:'Bídníci, Chrám Matky Boží v Paříži, Hernani', explain:'Bídníci (Les Misérables) — román o francouzské revoluci. Sociální román.'},
      {q:'Slavný ruský romantik:', a:'Alexandr Sergejevič Puškin (1799-1837)', explain:'Otec moderní ruské literatury. Zemřel v souboji.'},
      {q:'Co napsal Puškin?', a:'Evžen Oněgin (veršovaný román), Boris Godunov', explain:'Evžen Oněgin — psychologický román ve verších. Vzor pro další ruskou literaturu.'},
      {q:'Slavný německý romantik:', a:'Heinrich Heine, J. W. Goethe (přechodový)', explain:'Heine — lyrik. Goethe — Faust (vrcholné drama, romantické i klasické prvky).'},
      {q:'Co napsal Goethe?', a:'Faust, Utrpení mladého Werthera', explain:'Faust — drama o učenci, který se zaprodává ďáblu. Werther — sebevražedná láska.'},
      {q:'Polský romantik:', a:'Adam Mickiewicz', explain:'"Pan Tadeusz" — národní polský epos.'},
      {q:'Slavný americký romantik:', a:'Edgar Allan Poe (1809-1849)', explain:'Mistr hororu a detektivky. Báseň "Havran". Povídky o psychologickém teroru.'},
      {q:'Co je hlavní téma romantismu?', a:'Cit, příroda, smrt, láska, vlastenectví', explain:'Romantik utíká od reality — do přírody, do snů, do exotických zemí, do minulosti.'},
      {q:'Romantická příroda je:', a:'Divoká, drsná, tajemná (skály, bouře, noc)', explain:'Klasicismus — uspořádaná zahrada. Romantismus — divoká příroda, ruiny, hory.'},
      {q:'Hlavní žánry romantismu:', a:'Lyrika, balada, poema, historický román', explain:'Veršované formy. Romantismus miluje balady (lidové motivy + nadpřirozeno).'}
    ],
    quiz: [
      {q:'Český romantik — autor Máje:', options:['Erben','Mácha','Němcová','Tyl'], correct:1, explain:'Karel Hynek Mácha (1810-1836) — vrcholný český romantik.'},
      {q:'Bídníci napsal:', options:['Byron','Hugo','Puškin','Goethe'], correct:1, explain:'Victor Hugo — francouzský romantik. Bídníci (Les Misérables, 1862).'},
      {q:'Evžen Oněgin je dílo:', options:['Heineho','Hugoa','Puškina','Mácha'], correct:2, explain:'A. S. Puškin — ruský romantik. Evžen Oněgin — veršovaný román.'},
      {q:'Faust napsal:', options:['Goethe','Hugo','Byron','Puškin'], correct:0, explain:'J. W. Goethe — německý spisovatel, drama Faust.'},
      {q:'Romantický hrdina je:', options:['Šťastný a integrovaný','Osamělý a nepochopený','Bohatý šlechtic','Spokojený měšťan'], correct:1, explain:'Romantický hrdina je vyloučený ze společnosti, často umírá tragicky.'},
      {q:'"Havran" napsal:', options:['Hugo','Poe','Byron','Heine'], correct:1, explain:'Edgar Allan Poe — americký romantik. Báseň Havran (The Raven).'}
    ]
  },

  /* ─────────────────────────────────────────────
     8. REALISMUS
  ───────────────────────────────────────────── */
  {
    id: 'realismus',
    section: 'lit',
    tag: 'Literární období · Realismus',
    title: 'Realismus',
    desc: '2. polovina 19. stol. Věrné zobrazení skutečnosti, kritika společnosti. Balzac, Dickens, Tolstoj, Dostojevskij.',
    cards: [
      {q:'Časové vymezení realismu:', a:'2. polovina 19. století', explain:'Reakce na romantismus. Místo emocí — věrný popis reality.'},
      {q:'Hlavní znaky realismu:', a:'Věrné zobrazení skutečnosti, sociální kritika, typické postavy, próza', explain:'Realisté chtěli "obraz doby". Studovali společnost vědecky.'},
      {q:'Slavný francouzský realista:', a:'Honoré de Balzac (1799-1850)', explain:'Cyklus 90 románů "Lidská komedie" — obraz francouzské společnosti.'},
      {q:'Co napsal Balzac?', a:'Otec Goriot, Evženie Grandetová, Lidská komedie', explain:'Otec Goriot — tragédie otcovské lásky. Realistický psychologický román.'},
      {q:'Další francouzský realista:', a:'Gustave Flaubert', explain:'"Paní Bovaryová" — psychologický realismus. Žena, která hledá lásku v cizoložství.'},
      {q:'Slavný anglický realista:', a:'Charles Dickens (1812-1870)', explain:'Romanopisec. Sociální kritika. Děti v chudobě, zlí dospělí.'},
      {q:'Co napsal Dickens?', a:'Oliver Twist, David Copperfield, Vánoční koleda', explain:'Oliver Twist — sirotek v londýnském podsvětí. Klasika anglické literatury.'},
      {q:'Slavný ruský realista:', a:'Lev Nikolajevič Tolstoj (1828-1910)', explain:'Mistr velkého románu. Vojna a mír — epický román o napoleonských válkách.'},
      {q:'Co napsal Tolstoj?', a:'Vojna a mír, Anna Kareninová, Vzkříšení', explain:'Vojna a mír — 4 svazky, stovky postav. Anna Kareninová — psychologie nevěry.'},
      {q:'Další ruský realista:', a:'Fjodor Michajlovič Dostojevskij (1821-1881)', explain:'Psychologický realismus. Zkoumá temné stránky lidské duše.'},
      {q:'Co napsal Dostojevskij?', a:'Zločin a trest, Bratři Karamazovi, Idiot', explain:'Zločin a trest — student Raskolnikov vraždí starou lichvářku, sleduje se jeho psychika.'},
      {q:'Český realismus — hlavní představitelé:', a:'Alois Jirásek, Karel Václav Rais, Vítězslav Hálek', explain:'Jirásek — historické romány. Rais — venkovská próza.'},
      {q:'Co napsal Alois Jirásek?', a:'Staré pověsti české, F. L. Věk, Temno, Psohlavci', explain:'Mistr historického románu. Staré pověsti = Libuše, Bivoj... F. L. Věk = národní obrození.'},
      {q:'Co je realistické drama v Čechách?', a:'Bratři Mrštíkové "Maryša"', explain:'Tragédie venkovské ženy nucené do nešťastného sňatku.'},
      {q:'Český realismus v poezii:', a:'Jan Neruda, Svatopluk Čech', explain:'Neruda — Povídky malostranské, Písně kosmické. Čech — vlastenecké eposy.'},
      {q:'Co napsal Jan Neruda?', a:'Povídky malostranské, Hřbitovní kvítí, Písně kosmické', explain:'Povídky malostranské = realistický obraz Prahy 19. století. Pražské atmosféra.'},
      {q:'Co je naturalismus?', a:'Krajní forma realismu — drsné zobrazení reality, biologie', explain:'Émile Zola — "Germinal" (havíři). Lidé jsou určováni dědičností a prostředím.'},
      {q:'Hlavní žánry realismu:', a:'Velký román, novela, povídka, drama', explain:'Próza vítězí nad poezií. Realistické romány bývají rozsáhlé (cykly).'},
      {q:'Co napsal Mark Twain?', a:'Dobrodružství Toma Sawyera, Huckleberry Finn', explain:'Americký realista. Život na řece Mississippi. Děti, přátelství, dobrodružství.'},
      {q:'Co je sociální román?', a:'Román zaměřený na společenské problémy', explain:'Dickens, Hugo, Zola. Chudoba, vykořisťování, sociální nespravedlnost.'}
    ],
    quiz: [
      {q:'Vojnu a mír napsal:', options:['Dostojevskij','Tolstoj','Puškin','Čechov'], correct:1, explain:'L. N. Tolstoj — ruský realista. Vojna a mír (1869).'},
      {q:'Oliver Twist napsal:', options:['Hugo','Dickens','Balzac','Tolstoj'], correct:1, explain:'Charles Dickens — anglický realista. Sociální román o sirotku.'},
      {q:'Staré pověsti české napsal:', options:['Erben','Jirásek','Němcová','Neruda'], correct:1, explain:'Alois Jirásek — český realista, mistr historického románu.'},
      {q:'Zločin a trest napsal:', options:['Tolstoj','Dostojevskij','Puškin','Čechov'], correct:1, explain:'F. M. Dostojevskij — psychologický realismus. Raskolnikov.'},
      {q:'Povídky malostranské jsou od:', options:['Hálka','Nerudy','Macháe','Erbena'], correct:1, explain:'Jan Neruda — realistický obraz Prahy. Povídky malostranské (1878).'},
      {q:'Maryša je drama bratří:', options:['Čapků','Mrštíků','Capeků','Wernerů'], correct:1, explain:'Bratři Mrštíkové (Vilém a Alois) napsali Maryšu — tragédii o nucení do sňatku.'}
    ]
  },

  /* ─────────────────────────────────────────────
     9. ČESKÁ LITERATURA 2. POL. 19. STOLETÍ
  ───────────────────────────────────────────── */
  {
    id: 'cesk-19',
    section: 'lit',
    tag: 'Literární období · 2. pol. 19. st.',
    title: 'Česká literatura 2. pol. 19. století',
    desc: 'Generace májovců, ruchovců, lumírovců. Neruda, Hálek, Vrchlický, Sládek, Sova.',
    cards: [
      {q:'Hlavní generace 2. poloviny 19. století:', a:'Májovci, Ruchovci, Lumírovci', explain:'Tři po sobě jdoucí generace básníků. Každá s jiným programem.'},
      {q:'Co byli májovci?', a:'Skupina mladých autorů kolem almanachu Máj (1858)', explain:'Navazovali na Mácha. Hlavní: Neruda, Hálek, Karolína Světlá.'},
      {q:'Kdo byl Jan Neruda (1834-1891)?', a:'Český novinář a spisovatel — májovec', explain:'Sbírka "Hřbitovní kvítí", "Písně kosmické", "Povídky malostranské".'},
      {q:'Hlavní díla Jana Nerudy:', a:'Povídky malostranské, Hřbitovní kvítí, Knihy veršů, Písně kosmické', explain:'Povídky = obraz Malé Strany. Kosmické písně = básně o vesmíru.'},
      {q:'Co napsala Karolína Světlá?', a:'Vesnický román, Frantina, Křížek u potoka', explain:'Český realismus. Silné ženské hrdinky z venkova (Ještědsko).'},
      {q:'Kdo byl Vítězslav Hálek (1835-1874)?', a:'Český básník — májovec', explain:'"Večerní písně", "V přírodě". Lyrické básně o přírodě a lásce.'},
      {q:'Co byli ruchovci?', a:'Generace 70. let — vlastenecká poezie', explain:'Almanach "Ruch" (1868). Hlavní: Svatopluk Čech, Eliška Krásnohorská.'},
      {q:'Kdo byl Svatopluk Čech (1846-1908)?', a:'Český básník a prozaik — ruchovec', explain:'Národní eposy: "Slavie", "Husita na Baltu". Satira: "Pravý výlet pana Broučka do Měsíce".'},
      {q:'Slavná díla Svatopluka Čecha:', a:'Pan Brouček (3 cesty), Slavie, Pravý výlet pana Broučka do Měsíce', explain:'Pan Brouček = satirická postava — pražský kořala, kritika maloměšťáctví.'},
      {q:'Co byli lumírovci?', a:'Generace 80. let — kosmopolitní poezie', explain:'Časopis "Lumír". Hlavní: Vrchlický, Sládek, Zeyer. Otevřeli českou poezii světu.'},
      {q:'Kdo byl Jaroslav Vrchlický (1853-1912)?', a:'Český básník a překladatel — lumírovec', explain:'Vlastním jménem Emil Frída. Napsal přes 80 sbírek. Překladatel z mnoha jazyků.'},
      {q:'Slavná díla Jaroslava Vrchlického:', a:'Zlomky epopeje, Selské balady, Noc na Karlštejně', explain:'Selské balady = zachycení vesnice. Noc na Karlštejně = lehká divadelní hra.'},
      {q:'Kdo byl Josef Václav Sládek (1845-1912)?', a:'Český básník — lumírovec', explain:'Tvořil pro děti i dospělé. "Zlatý máj", "Skřivánčí písně", "Selské písně".'},
      {q:'Kdo byl Julius Zeyer (1841-1901)?', a:'Český spisovatel — lumírovec, dekadent', explain:'Exotická a historická tematika. Mystika, středověk, antika.'},
      {q:'Realistická generace 90. let:', a:'Ladislav Stroupežnický, Bratři Mrštíkové, Alois Jirásek', explain:'Návrat k realismu. Venkovské drama, historický román.'},
      {q:'Co napsal Stroupežnický?', a:'Naši furianti', explain:'Realistická venkovská komedie. Zachycuje typické postavy z vesnice.'},
      {q:'Kdo byla Eliška Krásnohorská?', a:'Česká spisovatelka, libretistka, překladatelka', explain:'Libreta pro Smetanu (Hubička, Tajemství). Časopis Ženské listy.'}
    ],
    quiz: [
      {q:'Almanach Máj (1858) inicioval generaci:', options:['Lumírovců','Ruchovců','Májovců','Buřičů'], correct:2, explain:'Májovci — kolem almanachu Máj. Hlavní: Neruda, Hálek.'},
      {q:'"Pravý výlet pana Broučka do Měsíce" napsal:', options:['Neruda','Vrchlický','S. Čech','Jirásek'], correct:2, explain:'Svatopluk Čech — ruchovec. Satira na pražského maloměšťáka.'},
      {q:'Český lumírovský básník — překladatel:', options:['Neruda','Vrchlický','Hálek','Tyl'], correct:1, explain:'Jaroslav Vrchlický — přes 80 sbírek, mnoho překladů.'},
      {q:'Která generace byla "kosmopolitní"?', options:['Májovci','Ruchovci','Lumírovci','Buřiči'], correct:2, explain:'Lumírovci otevřeli českou poezii světu — překladali, importovali.'},
      {q:'Kdo psal libreta Smetanovi?', options:['Krásnohorská','Světlá','Němcová','Krasnohorská'], correct:0, explain:'Eliška Krásnohorská — Hubička, Tajemství. Vrchlický taky (Čertova stěna).'}
    ]
  },

  /* ─────────────────────────────────────────────
     10. PŘELOM 19./20. STOLETÍ
  ───────────────────────────────────────────── */
  {
    id: 'prelom',
    section: 'lit',
    tag: 'Literární období · Přelom století',
    title: 'Přelom 19. a 20. století',
    desc: 'Symbolismus, dekadence, impresionismus, secese. Březina, Sova, Bezruč, anarchističtí buřiči.',
    cards: [
      {q:'Časové vymezení přelomu století:', a:'Konec 19. - začátek 20. stol. (~1890-1914)', explain:'Doba "fin de siècle" (konec století). Mnoho moderních směrů.'},
      {q:'Hlavní směry přelomu století:', a:'Symbolismus, dekadence, impresionismus, secese', explain:'Reakce na realismus. Hledá se nové, moderní vyjádření.'},
      {q:'Co je symbolismus?', a:'Směr používající symboly k vyjádření vnitřních pravd', explain:'Místo přímého popisu — náznak, symbol. Vícevýznamovost. Stéphane Mallarmé, Otokar Březina.'},
      {q:'Co je dekadence?', a:'Směr zdůrazňující úpadek, rozklad, smrt, exotiku', explain:'Z fr. "décadence" = úpadek. Nálada konce století. Charles Baudelaire — "Květy zla".'},
      {q:'Co je impresionismus v literatuře?', a:'Zachycení okamžitých pocitů a nálad', explain:'Inspirace impresionismem v malířství (Monet). Atmosféra, barvy, světlo.'},
      {q:'Manifest české moderny (1895):', a:'Vystoupení proti tradici, požadavek individuálního umění', explain:'Sepsali F. X. Šalda, J. S. Machar a další. Začátek české moderny.'},
      {q:'Hlavní český symbolista:', a:'Otokar Březina (1868-1929)', explain:'Mystik, filozofická poezie. Sbírka "Tajemné dálky", "Stavitelé chrámu".'},
      {q:'Co napsal Otokar Březina?', a:'Tajemné dálky, Svítání na západě, Stavitelé chrámu', explain:'Hluboké, mystické básně. Hledání smyslu. Ovlivněn novoplatonismem.'},
      {q:'Hlavní český impresionista:', a:'Antonín Sova (1864-1928)', explain:'Lyrika přírody a měst. "Květy intimních nálad", "Z mého kraje".'},
      {q:'Hlavní český sociální básník přelomu století:', a:'Petr Bezruč (1867-1958)', explain:'"Slezské písně" — utrpení slezských horníků. Sociální balady.'},
      {q:'Hlavní díla Petra Bezruče:', a:'Slezské písně (Maryčka Magdónova, Kantor Halfar)', explain:'Bojovná, sociální poezie. Maryčka Magdónova — chudá dívka, která se utopila.'},
      {q:'Anarchističtí buřiči — generace:', a:'Generace ~1907 — Viktor Dyk, S. K. Neumann, F. Šrámek, F. Gellner', explain:'Bouřili se proti starší generaci. Anarchismus, individualismus, expresivita.'},
      {q:'Kdo byl Viktor Dyk (1877-1931)?', a:'Český básník, prozaik — anarchistický buřič', explain:'"Krysař" (novela), "Země mluví" (vlastenecká báseň).'},
      {q:'Co napsal F. X. Šalda?', a:'Boje o zítřek (eseje), kritika', explain:'Hlavní český literární kritik. Otec moderní české literární kritiky.'},
      {q:'Stanislav Kostka Neumann — co napsal?', a:'Kniha lesů, vod a strání (sbírka)', explain:'Z anarchisty se stal komunista. "Kniha lesů" — civilizační poezie.'},
      {q:'Hlavní zahraniční symbolisté:', a:'Charles Baudelaire, Paul Verlaine, Arthur Rimbaud', explain:'Francouzští "prokletí básníci". Květy zla — Baudelaire — pesimismus.'},
      {q:'Co napsal Charles Baudelaire?', a:'Květy zla (1857)', explain:'Sbírka, která šokovala — sex, smrt, drogy, město. Začátek moderní poezie.'}
    ],
    quiz: [
      {q:'"Slezské písně" napsal:', options:['Březina','Bezruč','Sova','Dyk'], correct:1, explain:'Petr Bezruč (1867-1958) — sociální balady o slezských hornících.'},
      {q:'Hlavní český symbolista:', options:['Březina','Sova','Šrámek','Šalda'], correct:0, explain:'Otokar Březina — mystická symbolistická poezie.'},
      {q:'"Krysař" napsal:', options:['Březina','Sova','Dyk','Neumann'], correct:2, explain:'Viktor Dyk — novela Krysař (1915).'},
      {q:'"Květy zla" napsal:', options:['Verlaine','Rimbaud','Baudelaire','Mallarmé'], correct:2, explain:'Charles Baudelaire — francouzský prokletý básník (1857).'},
      {q:'Manifest české moderny vyšel v roce:', options:['1848','1895','1918','1945'], correct:1, explain:'Manifest české moderny — 1895. F. X. Šalda, J. S. Machar a další.'},
      {q:'Maryčka Magdónova je:', options:['Hrdinka pohádky','Sociální balada P. Bezruče','Postava B. Němcové','Hra K. Čapka'], correct:1, explain:'Sociální balada ze Slezských písní — chudá slezská dívka, která se utopila.'}
    ]
  },

  /* ─────────────────────────────────────────────
     11. LITERATURA 1. POL. 20. STOLETÍ
  ───────────────────────────────────────────── */
  {
    id: 'lit-20a',
    section: 'lit',
    tag: 'Literární období · 20. století (1.)',
    title: 'Literatura 1. pol. 20. století',
    desc: 'Mezi válkami. Čapek, Hašek, Vančura, Wolker, Nezval, Seifert, Hemingway, Kafka.',
    cards: [
      {q:'Časové vymezení 1. pol. 20. století:', a:'~1900-1945 (dvě světové války mezi nimi)', explain:'Mezi 1. a 2. sv. válkou ("meziválečné období") = vrchol české literatury.'},
      {q:'Hlavní směry 1. pol. 20. století:', a:'Avantgarda, expresionismus, surrealismus, proletářská poezie, civilismus', explain:'Mnoho experimentů. Reakce na hrůzy 1. světové války.'},
      {q:'Hlavní český spisovatel mezi válkami:', a:'Karel Čapek (1890-1938)', explain:'Romanopisec, dramatik, novinář. Demokrat, přítel T. G. Masaryka.'},
      {q:'Hlavní díla Karla Čapka:', a:'RUR, Bílá nemoc, Válka s mloky, Krakatit, Hovory s TGM, Povídky z jedné kapsy', explain:'RUR — robot. Bílá nemoc — varování před nacismem.'},
      {q:'O čem je RUR?', a:'Drama o robotech, kteří se vzbouří lidem', explain:'1920. Čapek vytvořil slovo "robot" (od bratra Josefa). Mezinárodní úspěch.'},
      {q:'O čem je Válka s mloky?', a:'Satirická sci-fi o mlocích, kteří ovládnou svět', explain:'1936. Alegorie na fašismus a nacismus. Varování před zkázou civilizace.'},
      {q:'Kdo byl Jaroslav Hašek (1883-1923)?', a:'Český humorista, autor Švejka', explain:'Bohémský život. Anarchista. "Osudy dobrého vojáka Švejka" — světová klasika.'},
      {q:'O čem je Švejk?', a:'Humorný román o "blbém" vojákovi v 1. světové válce', explain:'Švejk se chová jako idiot — možná naoko, možná opravdu. Satira na monarchii.'},
      {q:'Kdo byl Vladislav Vančura (1891-1942)?', a:'Český spisovatel, popraven nacisty', explain:'"Rozmarné léto", "Markéta Lazarová", "Pekař Jan Marhoul". Květnatý jazyk.'},
      {q:'Hlavní česká poezie mezi válkami — proletářská:', a:'Jiří Wolker (1900-1924)', explain:'"Host do domu", "Těžká hodina". Sociální poezie. Zemřel mladý na tuberkulózu.'},
      {q:'Co byl poetismus?', a:'Český avantgardní směr 20. let — radost, hra, exotika', explain:'Vítězslav Nezval, Jaroslav Seifert. Pestré, hravé básně.'},
      {q:'Hlavní český poetista:', a:'Vítězslav Nezval (1900-1958)', explain:'Mistr veršů. "Edison", "Manifest poetismu". Pak surrealista.'},
      {q:'Co napsal Nezval?', a:'Edison, Pantomima, Praha s prsty deště, Manon Lescaut', explain:'Edison — báseň-óda na Edisonovou geniálnost a moderní svět.'},
      {q:'Kdo byl Jaroslav Seifert (1901-1986)?', a:'Český básník, Nobelova cena za literaturu (1984)', explain:'Začínal jako proletářský básník, pak poetista, lyrik. Jediný český laureát Nobelovy ceny za literaturu.'},
      {q:'Co napsal Seifert?', a:'Na vlnách TSF, Slavík zpívá špatně, Maminka', explain:'Lyrické sbírky. "Maminka" — vzpomínky na dětství.'},
      {q:'Co je Devětsil?', a:'Česká avantgardní skupina (1920-1931)', explain:'Spojovala literáty, výtvarníky, architekty. Karel Teige (teoretik), Nezval, Seifert.'},
      {q:'Slavné meziválečné drama:', a:'Voskovec a Werich — "Osvobozené divadlo"', explain:'V&W — pražské meziválečné divadlo. Vest pocket revue, Caesar, Osel a stín.'},
      {q:'Hlavní zahraniční autoři 1. pol. 20. stol.:', a:'Hemingway, Kafka, Joyce, Proust, Faulkner', explain:'Modernismus. Stream of consciousness. Krize hodnot po 1. světové válce.'},
      {q:'Kdo byl Ernest Hemingway (1899-1961)?', a:'Americký spisovatel, Nobelova cena (1954)', explain:'"Stařec a moře", "Komu zvoní hrana", "Sbohem armádo". Strohý styl.'},
      {q:'Kdo byl Franz Kafka (1883-1924)?', a:'Pražský německy píšící spisovatel', explain:'"Proces", "Zámek", "Proměna". Existenciální absurdita. Jeho jméno se stalo přídavným jménem (kafkovský).'}
    ],
    quiz: [
      {q:'RUR — drama o robotech — napsal:', options:['Hašek','K. Čapek','Vančura','Nezval'], correct:1, explain:'Karel Čapek (1920) — vytvořil i slovo "robot".'},
      {q:'Osudy dobrého vojáka Švejka napsal:', options:['Čapek','Hašek','Vančura','Hemingway'], correct:1, explain:'Jaroslav Hašek — humorný román o 1. světové válce.'},
      {q:'Český laureát Nobelovy ceny za literaturu:', options:['Karel Čapek','Vladislav Vančura','Jaroslav Seifert','Bohumil Hrabal'], correct:2, explain:'Jaroslav Seifert — Nobelova cena 1984. Jediný český laureát.'},
      {q:'Proměnu napsal:', options:['Hemingway','Kafka','Joyce','Proust'], correct:1, explain:'Franz Kafka — pražský německy píšící spisovatel.'},
      {q:'Stařec a moře napsal:', options:['Faulkner','Hemingway','Steinbeck','Fitzgerald'], correct:1, explain:'Ernest Hemingway — americký spisovatel, Nobelova cena (1954).'},
      {q:'Markétu Lazarovou napsal:', options:['Čapek','Vančura','Hašek','Hrabal'], correct:1, explain:'Vladislav Vančura — Markéta Lazarová (1931). Květnatý jazyk.'}
    ]
  },

  /* ─────────────────────────────────────────────
     12. LITERATURA 2. POL. 20. STOLETÍ
  ───────────────────────────────────────────── */
  {
    id: 'lit-20b',
    section: 'lit',
    tag: 'Literární období · 20. století (2.)',
    title: 'Literatura 2. pol. 20. století',
    desc: 'Po 2. světové válce. Hrabal, Kundera, Škvorecký, Havel, Pavel. Beat generation, existencialismus.',
    cards: [
      {q:'Časové vymezení 2. pol. 20. století:', a:'1945-2000', explain:'Po 2. světové válce. Studená válka. V Československu komunismus do 1989.'},
      {q:'Hlavní česká témata po válce:', a:'Holocaust, válka, totalita, normalizace', explain:'Reflexe protektorátu, koncentráků, komunistických represí.'},
      {q:'Kdo byl Bohumil Hrabal (1914-1997)?', a:'Český spisovatel, mistr lidové řeči', explain:'"Ostře sledované vlaky", "Postřižiny", "Obsluhoval jsem anglického krále".'},
      {q:'Co napsal Hrabal?', a:'Ostře sledované vlaky, Postřižiny, Obsluhoval jsem anglického krále', explain:'Specifický styl — proud řeči, lidové výrazy, "pábitelé".'},
      {q:'Kdo byl Milan Kundera (1929-2023)?', a:'Český spisovatel, od 1975 v exilu ve Francii', explain:'"Žert", "Nesnesitelná lehkost bytí", "Kniha smíchu a zapomnění". Filozofická próza.'},
      {q:'Co napsal Kundera?', a:'Žert, Nesnesitelná lehkost bytí, Směšné lásky', explain:'Nesnesitelná lehkost bytí — pražské jaro 1968 + filozofie. Mezinárodní úspěch.'},
      {q:'Kdo byl Josef Škvorecký (1924-2012)?', a:'Český spisovatel, od 1968 v exilu v Kanadě', explain:'"Zbabělci", "Tankový prapor", "Prima sezóna". Postava Dannyho Smiřického.'},
      {q:'Co napsal Škvorecký?', a:'Zbabělci, Tankový prapor, Prima sezóna', explain:'Zbabělci — kniha o konci války, dlouho zakazovaná. Postava Danny Smiřický se vrací v dalších románech.'},
      {q:'Kdo byl Václav Havel (1936-2011)?', a:'Český dramatik, disident, prezident (1989-2003)', explain:'Hry: "Vyrozumění", "Audience". Disident, signatář Charty 77. První demokratický prezident.'},
      {q:'Hlavní hry Václava Havla:', a:'Vyrozumění, Audience, Žebrácká opera, Largo desolato', explain:'Absurdní drama. Kritika totality. Po 1989 — politik.'},
      {q:'Kdo byl Ota Pavel (1930-1973)?', a:'Český novinář a spisovatel', explain:'"Smrt krásných srnců", "Jak jsem potkal ryby". Vzpomínky na dětství.'},
      {q:'Co napsal Ota Pavel?', a:'Smrt krásných srnců, Jak jsem potkal ryby', explain:'Lyrická vzpomínková próza. O rybaření, otci, válce, židovství.'},
      {q:'Kdo byl Arnošt Lustig (1926-2011)?', a:'Český spisovatel, autor próz o holokaustu', explain:'"Modlitba pro Kateřinu Horovitzovou", "Démanty noci". Osobní zkušenost s koncentráky.'},
      {q:'Kdo byl Jan Werich (1905-1980)?', a:'Český herec, dramatik, spisovatel', explain:'Po válce psal pro děti i dospělé. "Fimfárum" — pohádky.'},
      {q:'Co je samizdat?', a:'Neoficiální vydávání zakázaných knih (od ~1970)', explain:'Po sovětské okupaci 1968 spousta autorů zakázána. Vydávali knihy ručně, opisováním.'},
      {q:'Co je Charta 77?', a:'Občanská iniciativa za lidská práva v ČSSR (1977)', explain:'Mluvčí: Havel, Patočka, Hájek. Signatáři pronásledováni.'},
      {q:'Hlavní zahraniční autoři 2. pol. 20. století:', a:'Salinger, Camus, Sartre, García Márquez, Orwell', explain:'Existencialismus, beat generation, magický realismus, dystopie.'},
      {q:'Co napsal George Orwell?', a:'1984, Farma zvířat', explain:'Dystopické romány varující před totalitou. Big Brother, doublethink.'},
      {q:'Co napsal J. D. Salinger?', a:'Kdo chytá v žitě (1951)', explain:'Holden Caulfield — podstata mladistvé revolty. Klasika americké literatury.'},
      {q:'Kdo je Gabriel García Márquez?', a:'Kolumbijský spisovatel — magický realismus', explain:'"Sto roků samoty" (1967). Nobelova cena 1982.'}
    ],
    quiz: [
      {q:'Ostře sledované vlaky napsal:', options:['Kundera','Hrabal','Škvorecký','Pavel'], correct:1, explain:'Bohumil Hrabal — novela o protektorátu. Filmová adaptace získala Oscara.'},
      {q:'Nesnesitelnou lehkost bytí napsal:', options:['Kundera','Hrabal','Škvorecký','Vaculík'], correct:0, explain:'Milan Kundera — román o pražském jaru a osudech postav.'},
      {q:'První demokratický prezident ČR — také dramatik:', options:['Havel','Klaus','Zeman','Masaryk'], correct:0, explain:'Václav Havel — disident, dramatik, prezident (1989-2003).'},
      {q:'Smrt krásných srnců napsal:', options:['Hrabal','Pavel','Lustig','Werich'], correct:1, explain:'Ota Pavel — vzpomínkové prózy o rybaření a dětství.'},
      {q:'1984 a Farmu zvířat napsal:', options:['Orwell','Huxley','Salinger','Bradbury'], correct:0, explain:'George Orwell — dystopické romány varující před totalitou.'},
      {q:'Kdo chytá v žitě napsal:', options:['Hemingway','Salinger','Bradbury','Faulkner'], correct:1, explain:'J. D. Salinger (1951) — Holden Caulfield, mladistvá revolta.'}
    ]
  },

  /* ─────────────────────────────────────────────
     13. SOUČASNÁ LITERATURA
  ───────────────────────────────────────────── */
  {
    id: 'soucasna',
    section: 'lit',
    tag: 'Literární období · Současnost',
    title: 'Současná literatura',
    desc: 'Konec 20. - 21. století. Viewegh, Topol, Hůlová, Rowlingová, Tolkien, Murakami.',
    cards: [
      {q:'Časové vymezení současné literatury:', a:'Po roce 1989 — 21. století', explain:'V Česku — po pádu komunismu. Svoboda projevu, mnoho směrů.'},
      {q:'Český bestseller 90. let:', a:'Michal Viewegh', explain:'"Báječná léta pod psa" — humorný román o životě v 70. letech.'},
      {q:'Co napsal Michal Viewegh?', a:'Báječná léta pod psa, Výchova dívek v Čechách, Andělé všedního dne', explain:'Lehký, humorný styl. Často kontroverzní. Mezi nejprodávanějšími.'},
      {q:'Kdo je Jáchym Topol (1962)?', a:'Český spisovatel a novinář', explain:'"Sestra", "Noční práce", "Citlivý člověk". Originální, experimentální próza.'},
      {q:'Kdo je Petra Hůlová (1979)?', a:'Současná česká spisovatelka', explain:'"Paměť mojí babičce" (Mongolsko), "Stručné dějiny Hnutí" (feminismus).'},
      {q:'Současná česká poezie:', a:'Petr Borkovec, Pavel Kolmačka, Tomáš Reichel', explain:'Velmi rozmanitá scéna. Reflexe doby, intimní lyrika, experimenty.'},
      {q:'Kdo je J. K. Rowlingová?', a:'Britská spisovatelka — Harry Potter (od 1997)', explain:'Sedmidílná sága o čaroději. Globální fenomén. Dětská i dospělá četba.'},
      {q:'Kdo byl J. R. R. Tolkien (1892-1973)?', a:'Britský spisovatel — Pán prstenů, Hobit', explain:'Klasik fantasy. Vytvořil celý svět Středozemě s vlastními jazyky.'},
      {q:'Co napsal Tolkien?', a:'Hobit, Pán prstenů (3 díly), Silmarillion', explain:'Pán prstenů — klasika fantasy. Vyšel 1954. Filmová trilogie získala 17 Oscarů.'},
      {q:'Kdo je Haruki Murakami?', a:'Japonský spisovatel', explain:'"Norské dřevo", "Kafka na pobřeží", "1Q84". Magický realismus, popkultura.'},
      {q:'Co je magický realismus?', a:'Směr — magické prvky v reálném světě', explain:'García Márquez, Allende, Murakami. Realita + zázraky jakoby normální.'},
      {q:'Kdo je Cormac McCarthy?', a:'Americký spisovatel', explain:'"Cesta", "Tahle země není pro starý" — temné, postapokalyptické.'},
      {q:'Hlavní současné žánry:', a:'Fantasy, sci-fi, dystopie, krimi, young adult', explain:'Žánrová literatura kvete. Fantasy (Game of Thrones), dystopie (Hunger Games).'},
      {q:'Kdo napsal Hru o trůny?', a:'George R. R. Martin', explain:'"Píseň ledu a ohně" — fantasy sága (od 1996). Adaptace HBO.'},
      {q:'Co je young adult literatura?', a:'Literatura pro mladé dospělé (~15-25 let)', explain:'Hunger Games (Collinsová), Divergence (Rothová), Vina je na hvězdách (Green).'},
      {q:'Kdo je Margaret Atwoodová?', a:'Kanadská spisovatelka', explain:'"Příběh služebnice" — feministická dystopie. "Oryx a Crake".'},
      {q:'Český současný drama:', a:'David Drábek, Lenka Lagronová, Petr Kolečko', explain:'Mladá generace. Originalita, společenská kritika, humor.'},
      {q:'Hlavní české nakladatelství současné literatury:', a:'Argo, Host, Paseka, Plus', explain:'Vydávají českou i překládanou literaturu. Vysoký standard.'}
    ],
    quiz: [
      {q:'Báječná léta pod psa napsal:', options:['Viewegh','Topol','Hůlová','Kundera'], correct:0, explain:'Michal Viewegh — humorný román (1992) o životě v 70. letech.'},
      {q:'Pán prstenů napsal:', options:['Rowlingová','Tolkien','Martin','Lewis'], correct:1, explain:'J. R. R. Tolkien (1954) — vrcholné fantasy dílo.'},
      {q:'Harry Potter napsala:', options:['Rowlingová','Atwoodová','Collinsová','Meyerová'], correct:0, explain:'J. K. Rowlingová — Harry Potter (od 1997). 7 dílů.'},
      {q:'Magický realismus reprezentuje:', options:['Hemingway','García Márquez','Orwell','Camus'], correct:1, explain:'Gabriel García Márquez — Sto roků samoty. Magie + realita.'},
      {q:'Příběh služebnice napsala:', options:['Atwoodová','Rowlingová','Hůlová','Allende'], correct:0, explain:'Margaret Atwoodová — kanadská spisovatelka, feministická dystopie.'},
      {q:'1Q84 napsal:', options:['Murakami','Kundera','Houellebecq','Coetzee'], correct:0, explain:'Haruki Murakami — japonský spisovatel, magický realismus.'}
    ]
  }

];
