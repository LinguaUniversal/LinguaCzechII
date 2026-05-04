/* ═══════════════════════════════════════════════════════════
   LITERÁRNÍ DRUHY A ŽÁNRY — DATOVÁ SADA
   6 podtémat · 90 karet · pro 6.-9. ročník ZŠ Lingua Universal
═══════════════════════════════════════════════════════════ */

const TOPICS = [

  /* ─────────────────────────────────────────────
     1. ZÁKLADNÍ LITERÁRNÍ DRUHY
  ───────────────────────────────────────────── */
  {
    id: 'druhy',
    section: 'lit',
    tag: 'Literární teorie · Druhy',
    title: 'Tři základní literární druhy',
    desc: 'Lyrika, epika, drama. Jak je rozeznat a charakterizovat.',
    cards: [
      {q:'Tři základní literární druhy', a:'Lyrika, epika, drama', explain:'Lyrika = pocity, epika = vyprávění, drama = jednání postav.'},
      {q:'Co je lyrika?', a:'Literární druh vyjadřující pocity, nálady a myšlenky autora', explain:'Často veršovaná, subjektivní. Příklady: óda, elegie, sonet.'},
      {q:'Co je epika?', a:'Literární druh vyprávějící příběh', explain:'Má děj, postavy, místo. Velká (román), střední (novela), malá (povídka, pohádka).'},
      {q:'Co je drama?', a:'Literární druh určený k jevištnímu provedení', explain:'Postavy jednají v dialogu. Druhy: tragédie, komedie, činohra.'},
      {q:'Hlavní rozdíl mezi epikou a lyrikou:', a:'Epika má děj, lyrika pocity', explain:'Epika vypráví "co se stalo", lyrika vyjadřuje "co cítím".'},
      {q:'Co je lyricko-epické?', a:'Spojení lyriky a epiky (děj + pocity)', explain:'Příklad: balada — má děj (epika), ale i atmosféru a pocity (lyrika).'},
      {q:'Příklady lyrickoepických žánrů:', a:'Balada, romance, epos, poema', explain:'Spojují prvky lyriky (pocity) a epiky (děj).'},
      {q:'Drama je psáno v?', a:'Dialozích a monolozích', explain:'Postavy mluví — minimálně se používá vypravěč. To je hlavní rys dramatu.'},
      {q:'Lyrika je obvykle psána v?', a:'Verších', explain:'Většina lyriky je veršovaná. Existuje i prozaická lyrika (lyrická próza).'},
      {q:'Epika je obvykle psána v?', a:'Próze (občas i verších)', explain:'Moderní epika je převážně prozaická. Starší epika (Homér, středověk) byla často veršovaná.'},
      {q:'Co je vypravěč?', a:'Hlas, který v epickém díle vypráví příběh', explain:'Může být v 1. osobě (já), 3. osobě (on/ona), všeznalý nebo omezený.'},
      {q:'Co je lyrický subjekt?', a:'"Já", které v lyrické básni vyjadřuje pocity', explain:'Není to nutně sám autor — může být postava nebo fiktivní mluvčí.'}
    ],
    quiz: [
      {q:'Mezi tři základní literární druhy NEPATŘÍ:', options:['Lyrika','Epika','Drama','Balada'], correct:3, explain:'Balada je žánr, ne druh. Druhy jsou jen 3: lyrika, epika, drama.'},
      {q:'Které dílo je dramatem?', options:['Babička (Němcová)','Kytice (Erben)','Romeo a Julie (Shakespeare)','Máj (Mácha)'], correct:2, explain:'Drama je psáno pro divadlo (dialogy postav). Romeo a Julie je tragédie.'},
      {q:'Lyrika vyjadřuje především:', options:['Děj','Pocity, nálady','Dialogy','Historické události'], correct:1, explain:'Lyrika je o vnitřním světě, pocitech a náladách.'},
      {q:'Co je lyricko-epické?', options:['Drama s monology','Spojení lyriky a epiky','Komedie','Krátká básnička'], correct:1, explain:'Lyricko-epické dílo má děj (epika) i pocity (lyrika). Příklad: balada.'},
      {q:'Co je vypravěč?', options:['Hlavní postava','Hlas vyprávějící příběh v epice','Autor knihy','Postava v dramatu'], correct:1, explain:'Vypravěč je hlas, který sděluje příběh v epickém díle.'}
    ]
  },

  /* ─────────────────────────────────────────────
     2. EPICKÉ ŽÁNRY
  ───────────────────────────────────────────── */
  {
    id: 'epicke-zanry',
    section: 'lit',
    tag: 'Literární žánry · Epika',
    title: 'Epické žánry',
    desc: 'Román, novela, povídka, pohádka, pověst, mýtus, epos. Velká, střední a malá epika.',
    cards: [
      {q:'Co je román?', a:'Velký epický žánr s rozsáhlým dějem', explain:'Více postav, dějových linií, často několik let děje. Příklad: "Babička", "Saturnin".'},
      {q:'Co je novela?', a:'Středně dlouhý epický žánr s jedním dějem', explain:'Kratší než román, soustředěná na jedno hlavní téma. Často s nečekaným zvratem.'},
      {q:'Co je povídka?', a:'Krátký prozaický útvar s jednoduchým dějem', explain:'Méně postav, jeden hlavní motiv. Příklady: K. Čapek "Povídky z jedné kapsy".'},
      {q:'Co je pohádka?', a:'Lidový epický žánr s nadpřirozenými prvky', explain:'Boj dobra a zla, ustálené motivy (princezna, drak), obvyklý šťastný konec.'},
      {q:'Co je pověst?', a:'Vyprávění s historickým nebo místním základem', explain:'Pověst má reálný základ (osoba, místo), ale pravdivá je jen částečně. Např. pověst o Libuši.'},
      {q:'Co je mýtus?', a:'Vyprávění o vzniku světa, bozích a hrdinech', explain:'Antické mýty (Zeus, Prometheus), severské, slovanské. Vysvětluje svět.'},
      {q:'Co je epos?', a:'Velká epická báseň o hrdinských činech', explain:'Příklady: Homér "Ilias" a "Odyssea", Vergilius "Aeneis".'},
      {q:'Co je legenda?', a:'Vyprávění o životě a zázracích světce', explain:'Středověký žánr. Často spojené s nadpřirozenem. Např. legendy o sv. Václavovi.'},
      {q:'Co je bajka?', a:'Krátké vyprávění s ponaučením, postavami jsou zvířata', explain:'Zvířata jednají jako lidé — symbolizují vlastnosti. Klasici: Ezop, La Fontaine, Krylov.'},
      {q:'Co je sci-fi (vědeckofantastická literatura)?', a:'Žánr o budoucnosti, vědě, vesmíru', explain:'Karel Čapek (RUR), Jules Verne, Ray Bradbury, Stanisław Lem.'},
      {q:'Co je fantasy?', a:'Žánr o kouzelných světech', explain:'Tolkien (Pán prstenů), C.S. Lewis (Narnie), Rowling (Harry Potter).'},
      {q:'Co je detektivka?', a:'Žánr o vyšetřování zločinu', explain:'Conan Doyle (Sherlock Holmes), Agatha Christie, K. Čapek.'},
      {q:'Co je dobrodružný román?', a:'Román o dobrodružstvích hrdinů', explain:'Verne, Stevenson, Foglar (Rychlé šípy).'},
      {q:'Co je historický román?', a:'Román zasazený do minulých dob', explain:'Jirásek (Staré pověsti české), W. Scott (Ivanhoe), Vančura.'},
      {q:'Co je autobiografie?', a:'Vyprávění o vlastním životě', explain:'Autor píše o sobě. Příklad: Jirásek "F.L. Věk", autobiografické romány.'}
    ],
    quiz: [
      {q:'"Babička" Boženy Němcové je:', options:['Sbírka povídek','Román','Drama','Sbírka básní'], correct:1, explain:'"Babička" je epický román — rozsáhlý prozaický útvar s mnoha postavami.'},
      {q:'V bajkách hlavní postavou bývají:', options:['Princezny','Děti','Zvířata','Vojáci'], correct:2, explain:'Bajka má zvířata, která se chovají jako lidé. Symbolizují vlastnosti.'},
      {q:'Pohádka má obvykle:', options:['Smutný konec','Šťastný konec','Žádný konec','Otevřený konec'], correct:1, explain:'Klasická pohádka má šťastný konec — dobro vítězí nad zlem.'},
      {q:'Co je epos?', options:['Krátká báseň','Velká epická báseň o hrdinech','Drama','Pohádka'], correct:1, explain:'Epos = velká epická báseň. Příklad: Homérovy Ilias a Odyssea.'},
      {q:'"Pán prstenů" patří k žánru:', options:['Sci-fi','Fantasy','Detektivka','Pověst'], correct:1, explain:'Tolkien = klasik fantasy literatury (kouzelné světy).'}
    ]
  },

  /* ─────────────────────────────────────────────
     3. LYRICKÉ ŽÁNRY
  ───────────────────────────────────────────── */
  {
    id: 'lyricke-zanry',
    section: 'lit',
    tag: 'Literární žánry · Lyrika',
    title: 'Lyrické žánry',
    desc: 'Sonet, óda, elegie, hymnus, epigram, píseň. Veršované formy a jejich rysy.',
    cards: [
      {q:'Co je sonet?', a:'Lyrická báseň o 14 verších (4+4+3+3)', explain:'Italský původ. Petrarca, Shakespeare. V češtině např. Mácha, Hrubín.'},
      {q:'Co je óda?', a:'Slavnostní oslavná lyrická báseň', explain:'Vznešený tón, oslavuje osobu, ideál nebo hodnotu. Např. Schiller "Óda na radost".'},
      {q:'Co je elegie?', a:'Smutná, žalozpěvná báseň', explain:'Vyjadřuje stesk, lítost, melancholii. Např. nad ztrátou domova nebo blízké osoby.'},
      {q:'Co je hymnus?', a:'Slavnostní zpěv chvály — k bohu, vlasti, ideálu', explain:'Náboženský nebo státní (státní hymna). Vysoký, slavnostní jazyk.'},
      {q:'Co je epigram?', a:'Krátká, vtipná, často satirická báseň', explain:'Mistr českého epigramu: K. H. Borovský. Pointa vtipu na konci.'},
      {q:'Co je píseň?', a:'Krátká lyrická báseň určená ke zpívání', explain:'Lidová píseň, umělá píseň. Často refrén, jednoduchý rytmus.'},
      {q:'Co je milostná lyrika?', a:'Lyrika vyjadřující city lásky', explain:'Petrarca, Shakespearovy sonety, Mácha (Máj — milostná lyrika).'},
      {q:'Co je přírodní lyrika?', a:'Lyrika oslavující přírodu', explain:'Neruda, Sládek, Bezruč. Příroda jako zrcadlo nálad.'},
      {q:'Co je vlastenecká lyrika?', a:'Lyrika o lásce k vlasti', explain:'Často během národního obrození. Např. Tyl "Kde domov můj".'},
      {q:'Co je reflexivní (úvahová) lyrika?', a:'Lyrika vyjadřující úvahy a myšlenky', explain:'Filozofické zamyšlení. Např. Březina, Holan.'},
      {q:'Co je intimní lyrika?', a:'Lyrika osobních pocitů a vnitřního světa', explain:'Soukromé, niterné. Většinou milostná nebo melancholická.'},
      {q:'Co je sociální lyrika?', a:'Lyrika o sociálních otázkách a chudobě', explain:'Petr Bezruč "Slezské písně" — utrpení Slezanů.'},
      {q:'Hlavní rys lyriky:', a:'Subjektivita a city', explain:'Lyrika vyjadřuje to, co cítíme — ne to, co se děje (jako epika).'},
      {q:'Co je lyrický subjekt?', a:'"Já", které v básni mluví', explain:'Nemusí to být sám autor — může to být postava nebo fiktivní mluvčí.'},
      {q:'Co je strofa?', a:'Skupina veršů tvořící celek (jako odstavec)', explain:'Sonet má 4 strofy (4-4-3-3 verše). V poezii oddělují obsahové celky.'}
    ],
    quiz: [
      {q:'Sonet má počet veršů:', options:['10','12','14','16'], correct:2, explain:'Klasický sonet = 14 veršů (2 kvarteta + 2 terceta).'},
      {q:'Smutná žalozpěvná báseň se nazývá:', options:['Óda','Elegie','Hymnus','Epigram'], correct:1, explain:'Elegie vyjadřuje smutek, stesk, melancholii.'},
      {q:'"Slezské písně" Petra Bezruče jsou příkladem:', options:['Vlastenecké lyriky','Sociální lyriky','Milostné lyriky','Přírodní lyriky'], correct:1, explain:'Bezruč popisoval utrpení slezských horníků — sociální lyrika.'},
      {q:'Co je epigram?', options:['Dlouhá báseň','Krátká vtipná báseň s pointou','Sbírka básní','Drama'], correct:1, explain:'Epigram = krátká, vtipná báseň, často satirická.'},
      {q:'Píseň se vyznačuje:', options:['Dlouhými verši','Tím, že se zpívá','Filozofickým obsahem','Tragickým koncem'], correct:1, explain:'Píseň je lyrická báseň určená ke zpívání.'}
    ]
  },

  /* ─────────────────────────────────────────────
     4. DRAMATICKÉ ŽÁNRY
  ───────────────────────────────────────────── */
  {
    id: 'drama-zanry',
    section: 'lit',
    tag: 'Literární žánry · Drama',
    title: 'Dramatické žánry',
    desc: 'Tragédie, komedie, činohra, tragikomedie. Stavba dramatu a hlavní žánry.',
    cards: [
      {q:'Co je tragédie?', a:'Drama se smutným koncem hlavního hrdiny', explain:'Hrdina umírá nebo prohrává. Příklady: Shakespeare "Romeo a Julie", "Hamlet".'},
      {q:'Co je komedie?', a:'Drama se šťastným koncem a humorem', explain:'Příklady: Shakespeare "Sen noci svatojánské", Molière "Lakomec".'},
      {q:'Co je činohra?', a:'Drama mezi tragédií a komedií, vážné téma bez tragického konce', explain:'Realistické zobrazení skutečnosti. V. Havel, M. Horníček.'},
      {q:'Co je tragikomedie?', a:'Drama spojující tragické a komické prvky', explain:'V. Havel "Žebrácká opera", Shakespearovy "problémové hry".'},
      {q:'Co je opera?', a:'Hudebně-dramatický žánr', explain:'Postavy zpívají, ne mluví. Příklady: B. Smetana "Prodaná nevěsta".'},
      {q:'Co je libreto?', a:'Text k opeře (slova k hudbě)', explain:'Bez libreta není opera — text je psaný k hudbě.'},
      {q:'Stavba klasického dramatu:', a:'Expozice → kolize → krize → peripetie → katastrofa', explain:'Klasická 5-aktová struktura. Krize = vrchol, peripetie = obrat.'},
      {q:'Co je dialog?', a:'Rozhovor mezi dvěma nebo více postavami', explain:'Hlavní stavební prvek dramatu — postavy spolu mluví.'},
      {q:'Co je monolog?', a:'Samostatná řeč jedné postavy', explain:'Hamletův "Být či nebýt" je nejslavnější monolog světové literatury.'},
      {q:'Co je dějství (akt)?', a:'Hlavní část dramatu, oddělená přestávkou', explain:'Klasické drama mělo 5 dějství. Moderní drama může mít 1-3.'},
      {q:'Co je výstup (scéna)?', a:'Část dějství s konstantním obsazením postav', explain:'Mění se výstup, když přijde nebo odejde postava.'},
      {q:'Co jsou jevištní pokyny?', a:'Pokyny pro herce a režiséra v textu hry', explain:'Píší se kurzivou. Popisují, co postavy dělají, jak vypadá scéna.'},
      {q:'Hlavní rys dramatu:', a:'Postavy jednají v dialogu, určeno k jevištnímu provedení', explain:'Drama je text k provedení, ne ke čtení. I když ho můžeme číst.'},
      {q:'Co je dramatický konflikt?', a:'Střet zájmů, charakterů nebo idejí v dramatu', explain:'Bez konfliktu není drama. Hrdina × protihrdina, dobro × zlo, povinnost × láska.'},
      {q:'Příklady českých dramatiků:', a:'Karel Čapek, V. Havel, F. Langer, J.K. Tyl, K. Steigerwald', explain:'Čapek (RUR), Havel (Vyrozumění, Audience), Tyl (Strakonický dudák).'}
    ],
    quiz: [
      {q:'"Romeo a Julie" Shakespeara je:', options:['Komedie','Tragédie','Sonet','Epos'], correct:1, explain:'Hlavní hrdinové umírají = tragédie.'},
      {q:'Co je činohra?', options:['Drama se šťastným koncem','Drama mezi tragédií a komedií','Hudební drama','Krátká hra'], correct:1, explain:'Činohra je realistické drama bez tragického konce, ale ne komedie.'},
      {q:'Hlavní stavební prvek dramatu je:', options:['Vyprávění','Dialog','Popis','Verš'], correct:1, explain:'Postavy v dramatu mluví — dialog je základ.'},
      {q:'V opeře postavy:', options:['Mluví','Zpívají','Tančí','Jen hrají pantomimu'], correct:1, explain:'Opera = hudebně-dramatické dílo, postavy zpívají.'},
      {q:'Slavný monolog "Být či nebýt" je z díla:', options:['Romeo a Julie','Hamlet','Othello','Macbeth'], correct:1, explain:'Hamletův monolog "Být či nebýt" je nejslavnější monolog světové literatury.'}
    ]
  },

  /* ─────────────────────────────────────────────
     5. LYRICKO-EPICKÉ ŽÁNRY
  ───────────────────────────────────────────── */
  {
    id: 'lyric-epic',
    section: 'lit',
    tag: 'Literární žánry · Lyricko-epické',
    title: 'Lyricko-epické žánry',
    desc: 'Balada, romance, epos, poema. Žánry spojující děj s pocity.',
    cards: [
      {q:'Co je balada?', a:'Lyricko-epická báseň s pochmurným dějem', explain:'Obvykle smutný konec. Příklady: Erben "Kytice", Bezruč "Maryčka Magdónova".'},
      {q:'Co je sociální balada?', a:'Balada o sociálních problémech a utrpení', explain:'Bezruč "Maryčka Magdónova" — chudoba a smrt mladé dívky.'},
      {q:'Co je romance?', a:'Lyricko-epická báseň s veselejším dějem (než balada)', explain:'Šťastnější varianta balady. K.J. Erben, J. Neruda "Romance o Karlu IV.".'},
      {q:'Charakteristické rysy balady:', a:'Krátká, dramatická, s nadpřirozenem, často smutný konec', explain:'Balada má atmosféru hrůzy, tajemství, často mýtické postavy.'},
      {q:'Erbenova "Kytice" obsahuje:', a:'13 balad', explain:'"Kytice z pověstí národních" — sbírka balad inspirovaná lidovou slovesností.'},
      {q:'Slavné balady z Kytice:', a:'Polednice, Vodník, Svatební košile, Štědrý den', explain:'Patří k nejznámějším českým baladám. Téma: nadpřirozené síly trestají hrdiny.'},
      {q:'Co je hrdinský epos?', a:'Velký epos o hrdinských činech', explain:'Příklady: Homér (Ilias, Odyssea), Vergilius (Aeneis), Píseň o Rolandovi.'},
      {q:'Co je národní epos?', a:'Epos vyjadřující národní mýty a hrdinství', explain:'Český národní epos: Rukopis královédvorský (později se ukázal jako padělek).'},
      {q:'Co je poema?', a:'Veršovaná epická skladba menšího rozsahu než epos', explain:'Mickiewicz "Pan Tadeusz", Mácha "Máj" (lyricko-epická poema).'},
      {q:'Mácha "Máj" je:', a:'Lyricko-epická skladba', explain:'Má děj (Vilém zabíjí otce), ale i silnou lyrickou složku (přírodní popisy, melancholie).'},
      {q:'Charakteristika balady — atmosféra:', a:'Tajemná, hrozivá, dramatická', explain:'Balada působí strašidelně, často se v ní objevují přízraky, smrt, prokletí.'},
      {q:'Příklad zahraniční balady:', a:'Goethe "Král duchů", Schiller "Rukavice"', explain:'Něměcká romantická balada — silně inspirovala české autory (Erben).'},
      {q:'Rozdíl mezi baladou a romancí:', a:'Balada — pochmurný konec, romance — veselejší', explain:'Forma stejná (lyricko-epické), ale balada je tragická, romance ne tolik.'},
      {q:'Z literárního hlediska — co spojuje baladu, epos, poemu?', a:'Vyprávějí příběh ve verších', explain:'Všechny mají děj (epika) i veršovanou formu (typickou pro lyriku).'},
      {q:'Co je rapsodie?', a:'Volně komponovaná lyricko-epická skladba', explain:'V hudbě i literatuře. Volná forma, časté tempo a nálada se mění.'}
    ],
    quiz: [
      {q:'"Kytice" K. J. Erbena je sbírka:', options:['Pohádek','Balad','Sonetů','Povídek'], correct:1, explain:'"Kytice" obsahuje 13 balad — lyricko-epické básně s pochmurným dějem.'},
      {q:'Mácha "Máj" je:', options:['Drama','Sbírka povídek','Lyricko-epická skladba','Sonet'], correct:2, explain:'Máj má děj (Vilém) i lyrické pasáže (popisy přírody) — lyricko-epická poema.'},
      {q:'Které dílo je národní epos?', options:['Babička','Rukopis královédvorský','Maryčka Magdónova','Slezské písně'], correct:1, explain:'Rukopis královédvorský byl prezentován jako národní epos (později ukázán jako padělek).'},
      {q:'Hlavní rys balady:', options:['Veselý konec','Pochmurný děj a smutný konec','Pouze popis přírody','Žádný děj'], correct:1, explain:'Balada je dramatická, často s nadpřirozenými prvky a tragickým koncem.'},
      {q:'Která je sociální balada?', options:['Polednice','Vodník','Maryčka Magdónova','Svatební košile'], correct:2, explain:'Bezručova Maryčka Magdónova zachycuje sociální problémy slezských horníků.'}
    ]
  },

  /* ─────────────────────────────────────────────
     6. PRVKY LITERÁRNÍHO DÍLA
  ───────────────────────────────────────────── */
  {
    id: 'prvky',
    section: 'lit',
    tag: 'Literární teorie · Prvky díla',
    title: 'Prvky literárního díla',
    desc: 'Téma, námět, postava, vypravěč, motiv, kompozice. Z čeho se literární dílo skládá.',
    cards: [
      {q:'Co je téma literárního díla?', a:'Hlavní myšlenka, o čem dílo je', explain:'Téma "Romeo a Julie" — láska bránená společností.'},
      {q:'Co je námět?', a:'Konkrétní příběh, který autor zpracovává', explain:'Námět "Babičky" — vzpomínky na babičku v Ratibořickém údolí.'},
      {q:'Rozdíl mezi tématem a námětem?', a:'Téma — obecné, námět — konkrétní', explain:'Téma: láska. Námět: příběh dvou milenců z Veronu.'},
      {q:'Co je motiv?', a:'Drobnější tematický prvek, opakující se v díle', explain:'Motiv prstenu, motiv smrti, motiv jara. Skládají téma.'},
      {q:'Co je hlavní postava (protagonista)?', a:'Postava, kolem které se točí děj', explain:'Hlavní hrdina/hrdinka. Babička v "Babičce", Hamlet v "Hamletovi".'},
      {q:'Co je vedlejší postava?', a:'Postava, která doplňuje hlavní hrdiny', explain:'Pomáhá rozvíjet děj, charakterizuje hlavní postavu kontrastem.'},
      {q:'Co je antagonista?', a:'Postava, která stojí proti hlavnímu hrdinovi', explain:'Jago v "Othellovi", macecha v pohádkách.'},
      {q:'Co je vypravěč v 1. osobě (ich-forma)?', a:'Vypravěč mluví jako "já"', explain:'Subjektivní pohled. Příklad: "Jdu domů, vidím…" Časté v denících.'},
      {q:'Co je vypravěč ve 3. osobě (er-forma)?', a:'Vypravěč mluví o postavách jako "on/ona"', explain:'Objektivnější, často všeznalý. "Šel domů, viděl…"'},
      {q:'Co je všeznalý vypravěč?', a:'Vypravěč, který ví všechno o všech postavách', explain:'Vidí do duše každé postavy, zná minulost i budoucnost. Časté ve 19. století.'},
      {q:'Co je kompozice díla?', a:'Stavba a uspořádání literárního díla', explain:'Jak je dílo členěno (kapitoly, verše, dějství), v jakém pořadí jsou události.'},
      {q:'Co je chronologická kompozice?', a:'Události se odvíjejí v časovém pořadí', explain:'Nejstarší → nejnovější. Přirozený způsob vyprávění.'},
      {q:'Co je retrospektivní kompozice?', a:'Vyprávění postupuje zpět v čase', explain:'Začíná se v přítomnosti, postupně se vrací do minulosti. Časté v moderní próze.'},
      {q:'Co je rámcová kompozice?', a:'Příběh uvnitř jiného příběhu', explain:'Postava A vypráví postavě B příběh… Klasický příklad: Tisíc a jedna noc.'},
      {q:'Co je pointa?', a:'Vrcholný okamžik nebo překvapivý závěr díla', explain:'V krátkých povídkách často pointa rozhoduje o úspěchu — překvapení, zvrat.'}
    ],
    quiz: [
      {q:'Co je téma díla?', options:['Hlavní postava','Místo děje','Hlavní myšlenka, o čem dílo je','Žánr díla'], correct:2, explain:'Téma = hlavní myšlenka. Romeo a Julie — láska a její překážky.'},
      {q:'Co je vypravěč?', options:['Hlavní postava','Hlas vyprávějící příběh','Autor','Antagonista'], correct:1, explain:'Vypravěč je hlas, který sděluje příběh. Není totéž co autor!'},
      {q:'Antagonista je:', options:['Hlavní hrdina','Postava proti hlavnímu hrdinovi','Vypravěč','Vedlejší postava'], correct:1, explain:'Antagonista stojí proti protagonistovi (hlavnímu hrdinovi).'},
      {q:'Vyprávění "Vstal jsem brzy a šel jsem ven" je v:', options:['Ich-formě','Er-formě','Vy-formě','My-formě'], correct:0, explain:'1. osoba ("já") = ich-forma.'},
      {q:'Co je rámcová kompozice?', options:['Kapitoly v rámečku','Vyprávění v chronologickém pořadí','Příběh uvnitř jiného příběhu','Drama'], correct:2, explain:'Rámcová kompozice — příběh A obsahuje příběh B (např. Tisíc a jedna noc).'}
    ]
  }

];
