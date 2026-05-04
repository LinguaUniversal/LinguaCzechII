/* ═══════════════════════════════════════════════════════════
   PRAVOPIS — KOMPLETNÍ DATOVÁ SADA
   10 podtémat · 200+ karet · pro 6.-9. ročník ZŠ Lingua Universal
═══════════════════════════════════════════════════════════ */

const TOPICS = [

  /* ─────────────────────────────────────────────
     1. VYJMENOVANÁ SLOVA — rozšíření po obojetných
  ───────────────────────────────────────────── */
  {
    id: 'vyjm',
    section: 'pravopis',
    tag: 'Pravopis · Vyjmenovaná slova',
    title: 'Vyjmenovaná slova',
    desc: 'Po obojetných souhláskách B, F, L, M, P, S, V, Z. Klasická řada plus odvozená a příbuzná slova.',
    cards: [
      // === PO B ===
      {q:'Vyjmenovaná slova po B', a:'být, bydlit, obyvatel, byt, příbytek, nábytek, dobytek, obyčej, bystrý, bylina, kobyla, býk, Přibyslav', explain:'Pamatuj si je v této řadě. Pozor: BÝT (existovat) × BÍT (mlátit).'},
      {q:'b<em>__</em>strý chlapec (rychle myslí)', a:'bystrý', explain:'Vyjmenované slovo po B → tvrdé Y.'},
      {q:'b<em>__</em>linkový čaj', a:'bylinkový', explain:'Odvozeno od slova "bylina" — vyjmenované slovo po B.'},
      {q:'pob<em>__</em>tovat někde', a:'pobývat', explain:'Příbuzné se slovem "být" — vyjmenované slovo po B.'},
      {q:'B<em>__</em>l doma. (minulý čas slovesa "být")', a:'Byl', explain:'Sloveso "být" → vyjmenované slovo po B.'},
      {q:'B<em>__</em>l žáka přes ruku. (mlátil)', a:'Bil', explain:'"Bít" (mlátit) NENÍ vyjmenované slovo — měkké I.'},
      {q:'náb<em>__</em>tek v obýváku', a:'nábytek', explain:'Vyjmenované slovo po B.'},

      // === PO L ===
      {q:'Vyjmenovaná slova po L', a:'slyšet, mlýn, blýskat se, polykat, plynout, plýtvat, vzlykat, lysý, lýko, lýtko, lyže, pelyněk, plyš', explain:'Pozor: LÝKO (vnitřní vrstva stromu) × LIKVIDOVAT.'},
      {q:'sl<em>__</em>šet hudbu', a:'slyšet', explain:'Vyjmenované slovo po L.'},
      {q:'starý ml<em>__</em>n', a:'mlýn', explain:'Vyjmenované slovo po L s dlouhým ý.'},
      {q:'l<em>__</em>že na sníh', a:'lyže', explain:'Vyjmenované slovo po L.'},
      {q:'pol<em>__</em>kat sousto', a:'polykat', explain:'Vyjmenované slovo po L.'},
      {q:'odl<em>__</em>vat kovy (v hutě)', a:'odlévat', explain:'NENÍ vyjmenované slovo — od "lít" → měkké I.'},
      {q:'pl<em>__</em>tvat penězi', a:'plýtvat', explain:'Vyjmenované slovo po L.'},
      {q:'l<em>__</em>tko bolí (část nohy)', a:'lýtko', explain:'Vyjmenované slovo po L.'},

      // === PO M ===
      {q:'Vyjmenovaná slova po M', a:'my, mýt, myslit, mýlit se, hmyz, myš, hlemýžď, mýtit, zamykat, smýkat, dmýchat, chmýří, nachomýtnout se, Litomyšl', explain:'MY = zájmeno × MI = mně. MÝT = umývat × MÍT = vlastnit.'},
      {q:'M<em>__</em> jdeme domů. (zájmeno)', a:'My', explain:'Zájmeno "my" → vyjmenované slovo po M.'},
      {q:'M<em>__</em>t okna', a:'Mýt', explain:'"Mýt" (umývat) je vyjmenované slovo po M.'},
      {q:'M<em>__</em>t rád zvířata', a:'Mít', explain:'"Mít" (vlastnit) NENÍ vyjmenované slovo — měkké I.'},
      {q:'spadla mu m<em>__</em>š', a:'myš', explain:'Vyjmenované slovo po M.'},
      {q:'m<em>__</em>slet na úkol', a:'myslet', explain:'Příbuzné se slovem "myslit" — vyjmenované slovo po M.'},
      {q:'mám zam<em>__</em>káno (nemůžu se dostat ven)', a:'zamykáno', explain:'Příbuzné se slovem "zamykat" — vyjmenované slovo po M.'},
      {q:'m<em>__</em>lit se (chybovat)', a:'mýlit', explain:'Vyjmenované slovo po M.'},

      // === PO P ===
      {q:'Vyjmenovaná slova po P', a:'pýcha, pytel, pysk, netopýr, slepýš, pyl, kopyto, klopýtat, třpytit se, zpytovat, pykat, pýr, pýřit se, čepýřit se', explain:'PYL (květový) × PIL (sloveso pít).'},
      {q:'p<em>__</em>cha předchází pád', a:'pýcha', explain:'Vyjmenované slovo po P.'},
      {q:'p<em>__</em>tel brambor', a:'pytel', explain:'Vyjmenované slovo po P.'},
      {q:'netop<em>__</em>r (létající savec)', a:'netopýr', explain:'Vyjmenované slovo po P.'},
      {q:'P<em>__</em>l z květu obtěžuje alergiky.', a:'Pyl', explain:'"Pyl" (květový) je vyjmenované slovo po P.'},
      {q:'P<em>__</em>l limonádu. (sloveso pít)', a:'Pil', explain:'"Pít" NENÍ vyjmenované slovo — měkké I.'},
      {q:'kop<em>__</em>to koně', a:'kopyto', explain:'Vyjmenované slovo po P.'},

      // === PO S ===
      {q:'Vyjmenovaná slova po S', a:'syn, sytý, sýr, syrový, sychravý, usychat, sýkora, sýček, sysel, syčet, sypat', explain:'SYN, SYTÝ, SÝR... SIRUP se píše s I (přejaté slovo).'},
      {q:'mladý s<em>__</em>n', a:'syn', explain:'Vyjmenované slovo po S.'},
      {q:'s<em>__</em>chravé počasí', a:'sychravé', explain:'Vyjmenované slovo po S.'},
      {q:'s<em>__</em>kora modřinka', a:'sýkora', explain:'Vyjmenované slovo po S.'},
      {q:'s<em>__</em>rové maso', a:'syrové', explain:'Vyjmenované slovo po S.'},
      {q:'s<em>__</em>rup proti kašli', a:'sirup', explain:'NENÍ vyjmenované slovo (přejaté z arabštiny) — měkké I.'},

      // === PO V ===
      {q:'Vyjmenovaná slova po V', a:'vy, vysoký, výt, výskat, zvykat, žvýkat, vydra, výr, vyžle, povyk, výheň, Vyšehrad', explain:'VY = zájmeno (oslovení).'},
      {q:'V<em>__</em>soká věž', a:'Vysoká', explain:'Vyjmenované slovo po V.'},
      {q:'v<em>__</em>dra v řece', a:'vydra', explain:'Vyjmenované slovo po V.'},
      {q:'žv<em>__</em>kat žvýkačku', a:'žvýkat', explain:'Vyjmenované slovo po V.'},
      {q:'V<em>__</em>šehrad (pražská čtvrť)', a:'Vyšehrad', explain:'Vlastní jméno z vyjmenovaných slov po V.'},
      {q:'zv<em>__</em>kat na novou školu', a:'zvykat', explain:'Vyjmenované slovo po V.'},

      // === PO Z ===
      {q:'Vyjmenovaná slova po Z', a:'brzy, jazyk, nazývat (se), Ruzyně', explain:'Velmi krátká řada — jen 4 hlavní slova.'},
      {q:'br<em>__</em> ráno', a:'brzy', explain:'Vyjmenované slovo po Z.'},
      {q:'mateřský jaz<em>__</em>k', a:'jazyk', explain:'Vyjmenované slovo po Z.'},
      {q:'naz<em>__</em>vat věci pravými jmény', a:'nazývat', explain:'Vyjmenované slovo po Z.'},

      // === PO F ===
      {q:'Po F je v češtině jen jedno vyjmenované slovo:', a:'(zfalšovat — odvozené)', explain:'V základní řadě po F nejsou žádná česká vyjmenovaná slova. F je v češtině zřídka.'}
    ],
    quiz: [
      {q:'Která dvojice je správně?', options:['mýt nádobí — mít rád','mít nádobí — mýt rád','mít nádobí — mít rád','mýt nádobí — mýt rád'], correct:0, explain:'MÝT (umývat) — vyjmenované po M, tvrdé Y. MÍT (vlastnit) — měkké I.'},
      {q:'Doplň: "Pyl ze stromů padá na __." Která věta je správně?', options:['na zem, kterou v<u>í</u>dáme.','na zem, kterou v<u>y</u>nášíme.','na zem, kterou v<u>y</u>dáváme.','na zem, kterou v<u>í</u>dáme jen občas.'], correct:1, explain:'Slovo "vynášet" má y po V (vyjm.: vy-, vynášet je odvozeno od vy-).'},
      {q:'V které možnosti jsou všechna slova vyjmenovaná po B?', options:['být, bydlit, biskup','být, bydlit, byt','byt, bod, bydlit','být, bít, byt'], correct:1, explain:'BISKUP a BIT (jen jedno T) nejsou vyjmenovaná. BÍT (mlátit) také ne.'},
      {q:'"Otec měl __ jako rys." Doplň:', options:['by<u>s</u>trý zrak','bi<u>s</u>trý zrak','by<u>z</u>trý zrak','bi<u>z</u>trý zrak'], correct:0, explain:'BYSTRÝ — vyjmenované po B, tvrdé Y.'},
      {q:'Po kterém písmenu jsou jen 4 vyjmenovaná slova?', options:['B','M','V','Z'], correct:3, explain:'Po Z: brzy, jazyk, nazývat, Ruzyně. Velmi krátká řada.'},
      {q:'Která věta obsahuje CHYBU?', options:['Babička pije bylinkový čaj.','Mlýn u řeky byl starý.','Sysel pojídá zrní.','Sirup je v lekárně.'], correct:3, explain:'"Lekárně" má být "lékárně" — to ale není vyjm. slovo. Otázka chytá: všechny varianty jsou bez vyjmenovaných chyb. SIRUP (s I) je správně.', tricky:true},
      {q:'"Kočka __ a vrtí ocasem." Doplň:', options:['lyže si','lízá si','lyzí si','líže si'], correct:3, explain:'LÍŽE — sloveso "lízat" není vyjm. slovo, píše se s měkkým I.'},
      {q:'Které slovo NENÍ vyjmenované?', options:['polykat','plýtvat','lyže','lipový'], correct:3, explain:'LIPOVÝ — od slova lípa (strom), není vyjmenované, píše se s I.'}
    ]
  },

  /* ─────────────────────────────────────────────
     2. SHODA PŘÍSUDKU S PODMĚTEM
  ───────────────────────────────────────────── */
  {
    id: 'shoda',
    section: 'pravopis',
    tag: 'Pravopis · Shoda',
    title: 'Shoda přísudku s podmětem',
    desc: 'Klasický český problém: "děti hrály" × "chlapci hráli". Jak rozhodnout, kdy I a kdy Y v koncovce slovesa v minulém čase.',
    cards: [
      {q:'Pravidlo: Co rozhoduje o koncovce slovesa v minulém čase?', a:'Rod a životnost podmětu', explain:'Je to gramatická shoda — sloveso se přizpůsobí podmětu.'},
      {q:'Jaká koncovka je u rodu mužského ŽIVOTNÉHO?', a:'-i (měkké)', explain:'Např.: chlapci běželi, učitelé opravovali, psi štěkali.'},
      {q:'Jaká koncovka je u rodu mužského NEŽIVOTNÉHO?', a:'-y (tvrdé)', explain:'Např.: stromy spadly, hrady stály, počítače fungovaly.'},
      {q:'Jaká koncovka je u rodu ŽENSKÉHO?', a:'-y (tvrdé)', explain:'Např.: ženy uvařily, dívky zpívaly, knihy ležely.'},
      {q:'Jaká koncovka je u rodu STŘEDNÍHO?', a:'-a', explain:'Např.: kuřata seděla, auta jezdila, slunce svítila.'},
      {q:'Co s podmětem "DĚTI"?', a:'-y (jako rod ženský)', explain:'Slovo "děti" je rod ženský, pomnožné. Děti hrály, děti pily, děti zpívaly.'},
      {q:'Co s podmětem "OČI" / "UŠI"?', a:'-y (rod ženský)', explain:'Pomnožná podstatná jména rodu ženského. Oči zářily, uši slyšely.'},
      {q:'Smíšený podmět: chlapci a dívky šli? šly? šla?', a:'šli (-i)', explain:'Pokud je v podmětu rod mužský životný, vyhrává nad ostatními → měkké I.'},
      {q:'Smíšený podmět: knihy a sešity ležely? ležely? leželi?', a:'ležely (-y)', explain:'Žádný mužský životný v podmětu → tvrdé Y.'},
      {q:'Smíšený podmět: muži, ženy a děti pracovali? pracovaly?', a:'pracovali (-i)', explain:'"Muži" je rod mužský životný → vyhrává nad ostatními.'},
      {q:'Děti si <em>hrál_</em> na zahradě.', a:'hrály (-y)', explain:'"Děti" je rod ženský pomnožný — koncovka -y.'},
      {q:'Chlapci <em>běžel_</em> domů.', a:'běželi (-i)', explain:'"Chlapci" je rod mužský životný — měkké I.'},
      {q:'Stromy <em>spadl_</em> do potoka.', a:'spadly (-y)', explain:'"Stromy" je rod mužský neživotný — tvrdé Y.'},
      {q:'Ženy <em>uvařil_</em> oběd.', a:'uvařily (-y)', explain:'Rod ženský — tvrdé Y.'},
      {q:'Kuřata <em>seděl_</em> v hnízdě.', a:'seděla (-a)', explain:'Rod střední — koncovka -a.'},
      {q:'Učitelé <em>opravoval_</em> testy.', a:'opravovali (-i)', explain:'Mužský životný — měkké I.'},
      {q:'Auta <em>jezdil_</em> rychle.', a:'jezdila (-a)', explain:'Rod střední — koncovka -a.'},
      {q:'Ptáci <em>zpíval_</em> v lese.', a:'zpívali (-i)', explain:'Mužský životný — měkké I.'},
      {q:'Listy <em>padal_</em> ze stromů.', a:'padaly (-y)', explain:'"Listy" rod mužský neživotný — tvrdé Y.'},
      {q:'Dívky <em>zpíval_</em> písničku.', a:'zpívaly (-y)', explain:'Rod ženský — tvrdé Y.'},
      {q:'Kočky a psi <em>spal_</em> v boudě.', a:'spali (-i)', explain:'Smíšený podmět s mužským životným (psi) → měkké I.'},
      {q:'Růže <em>kvetl_</em> v zahradě.', a:'kvetly (-y)', explain:'Rod ženský — tvrdé Y.'},
      {q:'Dveře <em>vrzal_</em>.', a:'vrzaly (-y)', explain:'Pomnožné slovo rodu ženského — tvrdé Y.'},
      {q:'Kuřata a slepice <em>hrabal_</em> ve dvoře.', a:'hrabaly (-y)', explain:'Smíšený podmět rod střední + ženský, žádný mužský životný → -y.'},
      {q:'Obyvatelé města <em>protestoval_</em>.', a:'protestovali (-i)', explain:'"Obyvatelé" rod mužský životný — měkké I.'}
    ],
    quiz: [
      {q:'Která věta je správně?', options:['Děti si hráli na zahradě.','Děti si hrály na zahradě.','Děti si hraly na zahradě.','Děti si hrály na zahrádě.'], correct:1, explain:'Děti = rod ženský pomnožný → -y. Volby 3 a 4 mají i další chyby.'},
      {q:'Doplň: "Stromy v sadu už ___."', options:['kvetli','kvetly','kvetla','kvetlí'], correct:1, explain:'Stromy = mužský neživotný → -y.'},
      {q:'Která věta je SPRÁVNĚ?', options:['Pejsci a kočky běhali zahradou.','Pejsci a kočky běhaly zahradou.','Pejsci a kočky běháli zahradou.','Pejsci a kočky běhály zahradou.'], correct:0, explain:'Smíšený podmět s mužským životným (pejsci) → -i.'},
      {q:'Doplň: "Kuřata ___ ve dvoře."', options:['piply','piplý','pípala','pipli'], correct:2, explain:'Kuřata = rod střední → -a.'},
      {q:'Která věta NENÍ správně?', options:['Učitelé opravovali testy.','Knihy ležely na stole.','Děti pily čaj.','Auta zastavili u semaforu.'], correct:3, explain:'Auta = rod střední → "zastavila", ne "zastavili".'},
      {q:'"Okna ___ na sluníčku." Doplň:', options:['svítily','svítila','svítili','svítí'], correct:1, explain:'Okna = rod střední → -a (svítila).'},
      {q:'Která koncovka patří k rodu ŽENSKÉMU?', options:['-i','-y','-a','všechny'], correct:1, explain:'Rod ženský má koncovku -y. Např. ženy zpívaly.'},
      {q:'"Slunce a hvězdy nám ___" — co tam patří?', options:['svítily','svítila','svítili','svítil'], correct:1, explain:'Slunce + hvězdy = rod střední + ženský, žádný mužský životný. Při pomnožných pravidlech vyhrává mužský životný; pokud chybí, vyhrává neutrální. POZOR: tato věta je nejednoznačná, ale standardně se píše -a (slunce + hvězdy → "svítila"). Volba se může lišit učebnice od učebnice.', tricky:true},
      {q:'"Kluci a holky se ___ ze třídy." Co je správně?', options:['vrátili','vrátily','vrátila','vrátilo'], correct:0, explain:'Smíšený podmět s mužským životným (kluci) → -i.'},
      {q:'"Děvčata ___ na schůzku včas." Doplň:', options:['přišli','přišly','přišla','přišlo'], correct:2, explain:'Děvčata = rod střední → -a (přišla).'}
    ]
  },

  /* ─────────────────────────────────────────────
     3. VELKÁ PÍSMENA
  ───────────────────────────────────────────── */
  {
    id: 'velka',
    section: 'pravopis',
    tag: 'Pravopis · Velká písmena',
    title: 'Velká písmena',
    desc: 'Vlastní jména osob, místní názvy, instituce, dny v týdnu, tituly. Když psát s velkým a kdy s malým.',
    cards: [
      {q:'Píšeme jména osob s velkým, nebo malým písmenem?', a:'S velkým', explain:'Křestní jména i příjmení: Karel Čapek, Marie Curie. Také přezdívky: Hrabě Drákula.'},
      {q:'A jména obyvatelská (Čech, Slovák)?', a:'S velkým', explain:'Příslušnost k národu/zemi: Čech, Slovák, Američan, Pražák. Ale "český jazyk" s malým.'},
      {q:'Přídavná jména odvozená od národnosti (český, anglický)?', a:'S malým', explain:'"Český jazyk", "anglická literatura". POZOR: pokud je to součást vlastního jména, pak velké: "Český Krumlov".'},
      {q:'Jména států a měst?', a:'S velkým', explain:'Česká republika, Praha, Brno, Lipsko. U víceslovných: každé plnovýznamové slovo s velkým: Spojené státy americké.'},
      {q:'Hory, řeky, moře?', a:'S velkým prvního slova', explain:'Krkonoše, Sněžka, Vltava, Severní moře, Tichý oceán. Pozor: "moře" a "oceán" v názvech s malým, pokud nejsou na začátku.'},
      {q:'Dny v týdnu?', a:'S malým', explain:'pondělí, úterý, neděle. POZOR! Toto je častá chyba — mnoho lidí píše s velkým podle angličtiny.'},
      {q:'Měsíce v roce?', a:'S malým', explain:'leden, únor, prosinec. Stejně jako dny — píšeme s malým, ne podle angličtiny.'},
      {q:'Svátky a významné dny?', a:'S velkým', explain:'Vánoce, Velikonoce, Štědrý den, Nový rok. Ale "vánoční stromek" s malým.'},
      {q:'Instituce a organizace?', a:'S velkým prvního slova', explain:'Karlova univerzita, Národní divadlo, Český rozhlas. Některé další: Ministerstvo školství, Akademie věd.'},
      {q:'Tituly před jménem (pan, paní, doktor)?', a:'S malým', explain:'pan Novák, paní učitelka, doktor Černý. Ale POZOR: "pan ředitel" × "pan Ředitel" (zdvořilostní).'},
      {q:'Slovo "Bůh" / "bůh"?', a:'Záleží na kontextu', explain:'Když mluvíme o křesťanském Bohu — velké B (vlastní jméno). Obecně o bohu — malé b: "řecký bůh Zeus".'},
      {q:'Slovo "ty/Ty" v dopise?', a:'Velké Ty (zdvořilostní)', explain:'V dopise z úcty: "Děkuji Ti za dárek." V běžné řeči "ty" malé.'},
      {q:'Vy/vy v úředním dopise?', a:'Velké Vy (zdvořilostní)', explain:'"Vážená paní, posílám Vám…" — vždy s velkým V. V přímé řeči pak malé.'},
      {q:'Země nebe — geografický pojem?', a:'Země s velkým (planeta)', explain:'"Země obíhá kolem Slunce." × "úrodná země" (půda) — malé.'},
      {q:'Slunce, Měsíc — vesmír?', a:'S velkým (kosmická tělesa)', explain:'"Slunce" naše hvězda, "Měsíc" družice Země — vlastní jména. "měsíc" jako časové období — malé.'},
      {q:'Křest<em>__</em>nské svátky', a:'křesťanské', explain:'Přídavné jméno odvozené — malé. Velké by bylo jen ve vlastním jméně instituce.'},
      {q:'pan<em>__</em> doktor Novák', a:'pan', explain:'Zdvořilostní oslovení — malé.'},
      {q:'jaro<em>__</em>í prázdniny', a:'jarní', explain:'Přídavné jméno — malé. Není to vlastní jméno svátku.'},
      {q:'V Praze stojí <em>__</em>árodní divadlo.', a:'Národní', explain:'Vlastní jméno instituce — velké.'},
      {q:'V neděli <em>__</em>elikonoce končí.', a:'Velikonoce', explain:'Svátek — velké V.'},
      {q:'Sluníčko vyšlo nad <em>__</em>nězí horami.', a:'Sněžnými', explain:'Pokud je toto vlastní jméno hor — velké S. Jinak (obecné) malé.'},
      {q:'Studuje na <em>__</em>arlově univerzitě.', a:'Karlově', explain:'Část vlastního jména instituce.'},
      {q:'Přijela do <em>__</em>panělska.', a:'Španělska', explain:'Stát — velké.'},
      {q:'Mluví <em>__</em>panělsky.', a:'španělsky', explain:'Příslovce odvozené — malé.'},
      {q:'Připadá na <em>__</em>tědrý den.', a:'Štědrý', explain:'Svátek — velké.'},
      {q:'Spojené státy <em>__</em>merické', a:'americké', explain:'POZOR — u "Spojené státy americké" se "americké" píše s MALÝM (přívlastek, ne vlastní jméno).'},
      {q:'<em>__</em>vatý Václav', a:'Svatý', explain:'V češtině se "Svatý" píše s velkým ve významu titulu před jménem světce.'},
      {q:'Jdeme do kina v <em>__</em>terý.', a:'úterý', explain:'Den v týdnu — malé.'},
      {q:'Bydlí v <em>__</em>echách.', a:'Čechách', explain:'Geografický celek — velké.'},
      {q:'Mluví <em>__</em>esky.', a:'česky', explain:'Příslovce — malé.'}
    ],
    quiz: [
      {q:'Která věta je SPRÁVNĚ?', options:['Slavíme Vánoce každý Prosinec.','Slavíme vánoce každý prosinec.','Slavíme Vánoce každý prosinec.','Slavíme vánoce každý Prosinec.'], correct:2, explain:'Vánoce (svátek) → velké V. Prosinec (měsíc) → malé p.'},
      {q:'Která věta je správně?', options:['V Pondělí jdeme do Kina.','V pondělí jdeme do kina.','V pondělí jdeme do Kina.','V Pondělí jdeme do kina.'], correct:1, explain:'Dny v týdnu i obecné podstatné jméno "kino" — malé písmeno.'},
      {q:'"Karel Čapek napsal _" — která možnost?', options:['Bílou Nemoc','bílou nemoc','Bílou nemoc','bílou Nemoc'], correct:2, explain:'"Bílá nemoc" — název díla, velké jen první slovo.'},
      {q:'Která věta obsahuje CHYBU?', options:['Bydlí ve Spojených státech amerických.','Bydlí v České republice.','Bydlí v Velké Británii.','Bydlí v Severní Americe.'], correct:2, explain:'"Velká Británie" — Velká s velkým V. Ale ve větě "v Velké" má být "ve Velké" — fonetická chyba.', tricky:true},
      {q:'Doplň správně: "Letošní _ stromeček je krásný."', options:['Vánoční','vánoční','Vánoce','vánoce'], correct:1, explain:'"Vánoční" je přídavné jméno odvozené — malé v.'},
      {q:'Která věta je správně?', options:['Studuji Český jazyk.','Studuji český jazyk.','Studuji Češtinu.','Studuji ČEský jazyk.'], correct:1, explain:'"Český" jako přídavné jméno → malé.'},
      {q:'"Slunce vychází nad _" — co tam doplnit?', options:['Sněžkou','sněžkou','SNĚŽKOU','Sněžkou (vrchol Krkonoš)'], correct:0, explain:'Sněžka = vlastní jméno hory → velké S.'},
      {q:'Které slovo se píše SPRÁVNĚ s malým?', options:['Vánoce','Pondělí','Slovák','čeština'], correct:3, explain:'"Čeština" je obecné jméno jazyka — malé. Ostatní jsou vlastní jména.'},
      {q:'V dopise napíšeš tetě:', options:['"Děkuji Ti, drahá teto."','"Děkuji ti, drahá Teto."','"Děkuji Ti, drahá Teto."','"děkuji ti, drahá teto."'], correct:0, explain:'Zdvořilostní "Ti" velké, "teto" malé (oslovení).'},
      {q:'Která věta JE správně?', options:['Mluví anglicky a Francouzsky.','Mluví Anglicky a francouzsky.','Mluví anglicky a francouzsky.','Mluví Anglicky a Francouzsky.'], correct:2, explain:'Příslovce odvozená od názvu jazyka — vždy malá.'}
    ]
  },

  /* ─────────────────────────────────────────────
     4. PSANÍ MĚ / MNĚ
  ───────────────────────────────────────────── */
  {
    id: 'me-mne',
    section: 'pravopis',
    tag: 'Pravopis · Tvarosloví',
    title: 'Psaní mě / mně',
    desc: 'Klasický oříšek: kdy psát "mě" a kdy "mně". Návod pomocí náhrady tebe/tobě.',
    cards: [
      {q:'Pravidlo na MĚ vs. MNĚ', a:'Nahraď slovem "tebe" nebo "tobě"', explain:'Pokud sedí "tebe" → píše se MĚ. Pokud sedí "tobě" → píše se MNĚ. Triky pro děti, ale funguje.'},
      {q:'"___ to nezajímá." (zájmeno mne)', a:'Mě', explain:'Nahradit: "Tebe to nezajímá." → "tebe" sedí → MĚ.'},
      {q:'"Pověz to ___" (zájmeno mně)', a:'mně', explain:'Nahradit: "Pověz to tobě" → "tobě" sedí → MNĚ.'},
      {q:'"Ke ___" (4. pád × 3. pád)', a:'mně', explain:'"Ke komu?" — 3. pád → MNĚ. (Ke tobě, ke mně.)'},
      {q:'"Pro ___" (předložka pro + 4. pád)', a:'mě', explain:'"Pro koho?" — 4. pád → MĚ. (Pro tebe, pro mě.)'},
      {q:'"O ___" (předložka o + 6. pád)', a:'mně', explain:'"O kom?" — 6. pád → MNĚ. (O tobě, o mně.)'},
      {q:'"Vidíš ___?" (4. pád)', a:'mě', explain:'"Vidíš tebe?" → MĚ.'},
      {q:'"Pomoz ___!" (3. pád)', a:'mně', explain:'"Pomoz tobě?" → MNĚ.'},
      {q:'"Bez ___" (předložka bez + 2. pád)', a:'mě', explain:'"Bez tebe" → MĚ. POZOR: 2. pád u "mě" — tohle vás může zmást.'},
      {q:'"Beze ___" (varianta s pohyblivým e)', a:'mě', explain:'Stejné jako "bez mě" — 2. pád → MĚ.'},
      {q:'Tvar "mě" patří k pádům:', a:'2., 4. (mne, beze mě, vidím mě)', explain:'2. pád: bez mě/mne. 4. pád: vidí mě/mne.'},
      {q:'Tvar "mně" patří k pádům:', a:'3., 6. (komu? o kom?)', explain:'3. pád: ke mně, dej mně. 6. pád: o mně, ve mně.'},
      {q:'V<em>___</em>jdi tam.', a:'V<em>e</em>jdi (Vejdi)', explain:'Toto NENÍ otázka mě/mně — je to "vejdi" (sloveso). Pozor na podobné podobné slova.'},
      {q:'Bez<em>___</em> to nezvládneš.', a:'Beze mě', explain:'Bez tebe? → MĚ.'},
      {q:'Ve<em>___</em> je síla.', a:'Ve mně', explain:'V tobě? → MNĚ.'},
      {q:'Dejte tu věc <em>__</em>.', a:'mně', explain:'Dej tobě? → MNĚ. (3. pád)'},
      {q:'Učitel <em>___</em> chválil.', a:'mě', explain:'Učitel tebe chválil? → MĚ. (4. pád)'},
      {q:'Ke <em>___</em> přišel kamarád.', a:'mně', explain:'Ke tobě? → MNĚ.'},
      {q:'O <em>___</em> nikdo neví.', a:'mně', explain:'O tobě? → MNĚ. (6. pád)'},
      {q:'Pro <em>___</em> je to těžké.', a:'mě', explain:'Pro tebe? → MĚ. (4. pád)'}
    ],
    quiz: [
      {q:'Která věta je správně?', options:['Pověz to mě.','Pověz to mně.','Povíš to mě?','Pověš to mě.'], correct:1, explain:'"Pověz to tobě" — sedí TOBĚ → MNĚ. (3. pád)'},
      {q:'"___ to nezajímá." Doplň:', options:['Mě','Mně','Mneě','Mně mě'], correct:0, explain:'"Tebe to nezajímá" — sedí TEBE → MĚ.'},
      {q:'"Pojď ke ___" — co je správně?', options:['mě','mně','mně i mě jsou OK','mněš'], correct:1, explain:'"Pojď ke tobě" → MNĚ.'},
      {q:'Která věta je SPRÁVNĚ?', options:['Líbíš se mě.','Líbíš se mně.','Líbíš se mneě.','Líbím se mně.'], correct:1, explain:'"Líbíš se tobě" → MNĚ.'},
      {q:'Doplň správně: "Vzpomněl si na ___."', options:['mě','mně','mě i mně','mneš'], correct:0, explain:'"Vzpomněl si na tebe" → MĚ. (4. pád)'},
      {q:'Která věta je SPRÁVNĚ?', options:['O mě se mluví.','O mně se mluví.','O mě se mluvý.','O mně se mluvý.'], correct:1, explain:'"O tobě" → MNĚ. (6. pád)'},
      {q:'"Bez ___ to nezvládneš." Co tam patří?', options:['mě','mně','mě i mně','mou'], correct:0, explain:'"Bez tebe" → MĚ. (2. pád)'},
      {q:'Která věta obsahuje CHYBU?', options:['Pomoz mně!','Vidíš mě?','Bez mně to nedokážu.','O mně se nemluví.'], correct:2, explain:'"Bez tebe" → MĚ, ne "bez mně".'}
    ]
  },

  /* ─────────────────────────────────────────────
     5. PŘEDPONY S/SE, Z/ZE, VZ/VZE
  ───────────────────────────────────────────── */
  {
    id: 'predpony',
    section: 'pravopis',
    tag: 'Pravopis · Předpony',
    title: 'Předpony s-, z-, vz-',
    desc: 'Kdy psát SHORA × ZHORA, SBÍRAT × ZBÍRAT. Pravidlo podle významu.',
    cards: [
      {q:'Pravidlo: Co znamená předpona S-?', a:'Pohyb dolů, dohromady, z povrchu pryč', explain:'Příklady: SLézt (dolů), SEjít (dohromady), SETŘÍT (z povrchu).'},
      {q:'Pravidlo: Co znamená předpona Z-?', a:'Změna stavu, dokončenost', explain:'Příklady: ZBOHATNOUT, ZLEPŠIT, ZESLÁBNOUT (změna stavu).'},
      {q:'Pravidlo: Co znamená předpona VZ-?', a:'Pohyb vzhůru', explain:'Příklady: VZLÉTNOUT, VZRŮST (růst nahoru), VZNIKNOUT.'},
      {q:'<em>__</em>lézt po žebříku dolů', a:'Slézt', explain:'Pohyb DOLŮ → S-.'},
      {q:'<em>__</em>lézt na vrchol hory', a:'Vylézt', explain:'POZOR! Tady NENÍ ani S- ani Z-, je to VY- (vystoupat). VZLÉZT (méně časté) by také šlo.'},
      {q:'<em>__</em>letět z hnízda nahoru', a:'Vzletět', explain:'Pohyb NAHORU → VZ-.'},
      {q:'<em>__</em>letět na zem', a:'Sletět', explain:'Pohyb DOLŮ → S-.'},
      {q:'<em>__</em>bírat všechny věci na hromadu', a:'Sbírat', explain:'DOHROMADY → S-.'},
      {q:'<em>__</em>bourat starý dům', a:'Zbourat', explain:'ZMĚNA STAVU (z domu se stane ruina) → Z-.'},
      {q:'<em>__</em>kazit oslavu', a:'Zkazit', explain:'ZMĚNA STAVU (oslava byla pokažená) → Z-.'},
      {q:'<em>__</em>tříhnout vlasy', a:'Stříhnout', explain:'PRYČ Z POVRCHU → S-. POZOR: psaní -ž- ve "stříhnout" je správné (zní jako š, ale pochází z "stříž").'},
      {q:'<em>__</em>brat kufr a odejít', a:'Sbalit', explain:'DOHROMADY (sbalit věci) → S-.'},
      {q:'<em>__</em>chodit dolů ze schodů', a:'Schodit / sejít', explain:'Pohyb DOLŮ → S-. (Sejít ze schodů.)'},
      {q:'<em>__</em>jít z cesty (zabloudit)', a:'Sejít / Zejít', explain:'POZOR! "Sejít z cesty" = uhnout z cesty (S-, dolů, pryč). Obojí se ale píše s S- ve standardním významu.'},
      {q:'<em>__</em>zelenat', a:'Zezelenat', explain:'ZMĚNA STAVU (stal se zeleným) → Z-.'},
      {q:'<em>__</em>chudnout', a:'Zchudnout', explain:'ZMĚNA STAVU → Z-.'},
      {q:'<em>__</em>blednout (zbledli leknutím)', a:'Zblednout', explain:'ZMĚNA STAVU → Z-.'},
      {q:'<em>__</em>tahat se s něčím (boj)', a:'Stahat / pohádat', explain:'POZOR! "Stahat se" = svléknout. Pohádka × pohádat se. Pro pohádat se je obvykle pohádat.'},
      {q:'<em>__</em>tělit se (hubený)', a:'Ztělit (zhubnout)', explain:'ZMĚNA STAVU → Z-. POZOR: zde "ztělit" je archaické. Běžně řekneme "zhubnout".'},
      {q:'<em>__</em>plánovat výlet', a:'Naplánovat', explain:'TRIK! Toto NENÍ S/Z předpona, je to NA-.'}
    ],
    quiz: [
      {q:'Která věta je SPRÁVNĚ?', options:['Slézt ze schodů.','Zlézt ze schodů.','Slézt nahoru.','Zlézt nahoru.'], correct:0, explain:'SLÉZT = dolů (S-, pohyb dolů).'},
      {q:'Doplň: "Mě skvěle ___ koláč."', options:['supekl','zpekl','spekl','vzpekl'], correct:2, explain:'SPÉCT = dokončit pečení. Zde S- (pohyb dohromady? + dokončenost). U "spéct/zpéct" akceptují obě varianty.'},
      {q:'Která věta obsahuje CHYBU?', options:['Zbohatl rychle.','Zbledl strachem.','Sbalil si věci.','Zlezl ze schodů.'], correct:3, explain:'"Zlezl ze schodů" — má být SLEZL (pohyb dolů → S-).'},
      {q:'"___ se na strom" — co je správně?', options:['Slézt','Vyletět','Vzlézt','Slétnout'], correct:2, explain:'Pohyb NAHORU (na strom) → VZ-.'},
      {q:'Která věta je správně?', options:['Strom zvadl.','Strom svadl.','Strom vzvadl.','Strom uschl.'], correct:0, explain:'ZVADL = ZMĚNA STAVU → Z-. (Strom je nyní vadlý.)'}
    ]
  },

  /* ─────────────────────────────────────────────
     6. PŘEDLOŽKY S / SE × Z / ZE
  ───────────────────────────────────────────── */
  {
    id: 'predlozky',
    section: 'pravopis',
    tag: 'Pravopis · Předložky',
    title: 'Předložky s/se × z/ze',
    desc: 'Pozor na rozdíl: "vstal se židle" × "vstal ze židle". Pádová pravidla.',
    cards: [
      {q:'Pravidlo: Předložka S/SE se pojí s kterým pádem?', a:'7. pád (s kým, s čím)', explain:'Význam: doprovod, společnost. "S kamarádem", "se psem".'},
      {q:'Pravidlo: Předložka Z/ZE se pojí s kterým pádem?', a:'2. pád (z koho, z čeho)', explain:'Význam: odkud, původ. "Z domu", "ze třídy".'},
      {q:'"Vstal ___ židle." (odkud) — S nebo Z?', a:'ze židle', explain:'ZE = z místa (2. pád). Odkud vstává? Ze židle.'},
      {q:'"Šla ___ kamarádem." (s kým) — S nebo Z?', a:'s kamarádem', explain:'S = společnost (7. pád). S kým? S kamarádem.'},
      {q:'"Vyšel ___ školy." — S nebo Z?', a:'ze školy', explain:'ZE = odkud (2. pád). Vyšel odkud? Ze školy.'},
      {q:'"Mluvili ___ matkou." — S nebo Z?', a:'s matkou', explain:'S = s kým (7. pád).'},
      {q:'"Vrátili se ___ výletu." — S nebo Z?', a:'z výletu', explain:'Z = odkud, 2. pád.'},
      {q:'"Posbíral věci ___ země." — S nebo Z?', a:'ze země', explain:'ZE = odkud (z povrchu).'},
      {q:'"Dohodli se ___ rodiči." — S nebo Z?', a:'s rodiči', explain:'S = společnost, 7. pád.'},
      {q:'"Zmizel ___ obzoru." — S nebo Z?', a:'z obzoru', explain:'Z = odkud, 2. pád.'},
      {q:'"Bavil jsem se ___ Petrem." — S nebo Z?', a:'s Petrem', explain:'S = společnost, 7. pád.'},
      {q:'"Vystoupila ___ vlaku." — S nebo Z?', a:'z vlaku', explain:'Z = odkud, 2. pád.'},
      {q:'"Sešel ___ kopce dolů." — Která varianta?', a:'s kopce', explain:'POZOR! Toto je výjimka — "S kopce" (z povrchu, z vrcholu dolů). Také se setkáš s "z kopce" v jižní češtině.'},
      {q:'"Vrátil se ___ hor." — S nebo Z?', a:'z hor', explain:'Z = odkud, 2. pád.'},
      {q:'"Spadl ___ stromu." — S nebo Z?', a:'ze stromu / se stromu', explain:'POZOR! Obě varianty jsou možné. "Ze stromu" = odkud (z koruny). "Se stromu" = z povrchu (jako z židle).'}
    ],
    quiz: [
      {q:'Která věta je SPRÁVNĚ?', options:['Vstal se židle.','Vstal ze židle.','Vstal s židle.','Vstal z židle.'], correct:1, explain:'ZE = odkud (2. pád). Vstal odkud? Ze židle.'},
      {q:'Doplň: "Šel jsem ___ kamarádem do kina."', options:['s','se','z','ze'], correct:0, explain:'S = s kým (7. pád, společnost).'},
      {q:'"Vyběhli ___ školy" — co je správně?', options:['s','se','z','ze'], correct:3, explain:'ZE = odkud (2. pád). ZE před S na začátku slova.'},
      {q:'Která věta obsahuje CHYBU?', options:['Mluví se sestrou.','Vrátil se z výletu.','Vstal se postele.','Posbíral věci ze země.'], correct:2, explain:'"Vstal se postele" → "Vstal Z postele" (odkud, 2. pád).'},
      {q:'"Sundali knihu ___ poličky." Co tam patří?', options:['s','se','z','ze','ze'], correct:3, explain:'ZE = odkud (z povrchu poličky, 2. pád).'}
    ]
  },

  /* ─────────────────────────────────────────────
     7. SPŘEŽKY (NAHORU vs NA HORU)
  ───────────────────────────────────────────── */
  {
    id: 'sprezky',
    section: 'pravopis',
    tag: 'Pravopis · Spřežky',
    title: 'Spřežky × dvě slova',
    desc: 'Kdy psát NAHORU × NA HORU, NAVÍC × NA VÍC. Záleží na významu — příslovce vs. předložka + jméno.',
    cards: [
      {q:'Pravidlo: Spřežka se píše DOHROMADY, když...', a:'Je to příslovce (otázka jak? kam? kdy?)', explain:'"Vyšli NAHORU" (kam? = příslovce → dohromady).'},
      {q:'Pravidlo: Píše se ZVLÁŠŤ, když...', a:'Je to předložka + podstatné jméno', explain:'"Vyšli NA HORU Sněžku" (na horu = na vrchol konkrétní hory → odděleně).'},
      {q:'"Vyšli ___ na nebe." (vzhůru)', a:'nahoru', explain:'Příslovce (kam?) → dohromady.'},
      {q:'"Vystoupili ___ Sněžku." (na konkrétní horu)', a:'na horu', explain:'Předložka NA + podstatné jméno HORU → odděleně.'},
      {q:'"Měl ___ peněz." (mnoho)', a:'navíc', explain:'Příslovce → dohromady.'},
      {q:'"Spotřeboval ___ peněz." (na další věci)', a:'na víc', explain:'Předložka NA + příslovce VÍC → odděleně. POZOR — záleží na kontextu!'},
      {q:'"Šel ___" (do dálky)', a:'daleko', explain:'Tady se nelze splést — je to jedno slovo.'},
      {q:'"Šel ___" (kupředu)', a:'dopředu / kupředu', explain:'DOPŘEDU = dohromady (příslovce). KUPŘEDU = také dohromady.'},
      {q:'"Sešel se ___ s kamarádem." (kde?)', a:'venku', explain:'Příslovce → dohromady.'},
      {q:'"Vyšel ven ___ domu." (předl. + podst. jméno)', a:'z domu', explain:'Z = předložka, DOMU = podstatné jméno → odděleně.'},
      {q:'"Bydlí ___ Praze." (kde?)', a:'v Praze', explain:'Předložka V + vlastní jméno → vždy odděleně.'},
      {q:'"Něco ___" (mimořádně)', a:'navíc', explain:'NAVÍC (kromě obvyklého) → dohromady.'},
      {q:'"Tato hra je ___" (zdarma)', a:'naprázdno / nadarmo', explain:'NADARMO = bez výsledku (příslovce). Pozor na "zdarma" (jiné slovo).'},
      {q:'"Pracuje ___" (bez peněz)', a:'naprázdno', explain:'Příslovce → dohromady. "Naprázdno" = bez efektu, bez peněz.'},
      {q:'"Na prázdno" se píše odděleně, když...', a:'NA = předložka, PRÁZDNO = podst. jméno', explain:'"Hrál na prázdno [nádobí]" = bez čeho? Předložka. Tato kombinace je vzácná.'},
      {q:'"Šel ___ když, ne odpoledne." (časové)', a:'dopoledne', explain:'Příslovce → dohromady.'},
      {q:'"Pochopil ___" (poprvé)', a:'napoprvé', explain:'NAPOPRVÉ → dohromady (příslovce).'},
      {q:'"Mluví ___" (rychle)', a:'narychlo', explain:'NARYCHLO = příslovce → dohromady.'},
      {q:'"Skutečnost ___" (poprvé)', a:'poprvé', explain:'POPRVÉ → dohromady (příslovce).'},
      {q:'"Snědl to ___ minut" (za pár)', a:'za pár', explain:'POZOR — toto se píše ODDĚLENĚ (předložka + podst. jméno).'}
    ],
    quiz: [
      {q:'Která věta je správně?', options:['Vyšli na horu.','Vyšli nahoru.','Vyšli na horu Sněžku.','Všechny varianty jsou správné v různém kontextu.'], correct:3, explain:'Záleží na kontextu! "Nahoru" = vzhůru. "Na horu" = na konkrétní horu.'},
      {q:'Doplň správně: "Měl tam ještě ___ peněz."', options:['navíc','na víc','na vic','navic'], correct:0, explain:'NAVÍC = navrch, kromě obvyklého → dohromady.'},
      {q:'Která věta obsahuje CHYBU?', options:['Šel dopředu.','Bydlí v Praze.','Pracuje na prázdno celý den.','Učil se napoprvé.'], correct:2, explain:'"Pracuje naprázdno" (bez výsledku) → dohromady.'},
      {q:'"Vystoupili ___ Sněžku" — co tam patří?', options:['nahoru','na horu','nahoru na horu','vzhůru'], correct:1, explain:'Sněžka je konkrétní hora → "na horu Sněžku" odděleně.'},
      {q:'Která varianta je správně pro "vzhůru"?', options:['na horu','nahoru','na horé','nahor'], correct:1, explain:'NAHORU (kam?) = příslovce → dohromady.'}
    ]
  },

  /* ─────────────────────────────────────────────
     8. PŘÍDAVNÁ JMÉNA — koncovky
  ───────────────────────────────────────────── */
  {
    id: 'koncovky',
    section: 'pravopis',
    tag: 'Pravopis · Tvarosloví',
    title: 'Koncovky -ovi / -ovy',
    desc: 'Petrovi přátelé × Petrovy ruce. Přivlastňovací přídavná jména a životnost.',
    cards: [
      {q:'Pravidlo: Kdy psát -OVI?', a:'U životných (1. pád, mužský životný)', explain:'Petrovi (kamarádi přišli) — kdo? co? mužský životný 1. pád množné číslo.'},
      {q:'Pravidlo: Kdy psát -OVY?', a:'U neživotných (1. pád, mužský neživotný; 4. pád)', explain:'Petrovy ruce / Petrovy boty — neživotné věci.'},
      {q:'Pravidlo: Kdy psát -OVÝM?', a:'7. pád (s kým, s čím)', explain:'S Petrovým kamarádem. S Petrovými boty.'},
      {q:'"Petr<em>__</em> kamarádi přišli." (mužský životný)', a:'Petrovi', explain:'Mužský životný v 1. pádu množ. čísla → -OVI.'},
      {q:'"Petr<em>__</em> ruce jsou špinavé." (neživotné, ženský rod plurál - ruce)', a:'Petrovy', explain:'POZOR — "ruce" jsou rod ženský, koncovka by měla být -ovy.'},
      {q:'"Petr<em>__</em> psi štěkají." (mužský životný)', a:'Petrovi', explain:'Psi = mužský životný → -OVI.'},
      {q:'"Petr<em>__</em> boty jsou nové." (rod ženský — boty)', a:'Petrovy', explain:'Boty = rod ženský pomnožný → -OVY (jako rod ženský).'},
      {q:'"Petr<em>__</em> auto nejede." (rod střední)', a:'Petrovo', explain:'Auto = rod střední → -OVO.'},
      {q:'"Daroval Petr<em>__</em> kamarádovi knihu." (3. pád)', a:'Petrovu / Petrově', explain:'POZOR — koncovka -OVU/-OVĚ ve 3. pádu. Tato otázka je trošku chyták.'},
      {q:'"Strýc<em>__</em> dům" (přivlastňovací — komu patří dům)', a:'Strýcův', explain:'V 1. pádu se píše -ŮV (krátký).'},
      {q:'"Strýc<em>__</em> děti přijely." (1. pád, mužský životný plurál)', a:'Strýcovi', explain:'Děti = obojetné. Pokud myslíme děti = mužský životný (chlapci), -OVI. Pokud rod ženský/smíšený, -OVY.'},
      {q:'"Karl<em>__</em> Hrad — Karlův hrad?" (správné psaní vlastního jména hradu)', a:'Karlštejn', explain:'Karlštejn je VLASTNÍ JMÉNO HRADU — píšeme jako jedno slovo.'},
      {q:'"otc<em>__</em> přátelé" (1. pád, mužský životný)', a:'otcovi', explain:'Otcovi přátelé (přijeli) → mužský životný → -OVI.'},
      {q:'"otc<em>__</em> peníze" (rod ženský/neživotný)', a:'otcovy', explain:'Peníze = rod mužský neživotný v plurálu → -OVY.'},
      {q:'"otc<em>__</em> auto" (rod střední)', a:'otcovo', explain:'Rod střední → -OVO.'},
      {q:'"sousedov<em>__</em> psi" (1. pád životný)', a:'sousedovi', explain:'Psi = životní → -OVI.'},
      {q:'"sousedov<em>__</em> stromy" (1. pád neživotný)', a:'sousedovy', explain:'Stromy = mužský neživotný → -OVY.'},
      {q:'"sousedov<em>__</em> zahrady" (1. pád ženský)', a:'sousedovy', explain:'Zahrady = ženský rod → -OVY.'},
      {q:'"sousedov<em>__</em> kotě" (rod střední)', a:'sousedovo', explain:'Kotě = střední rod → -OVO.'},
      {q:'"přijde s Petrov<em>__</em> kamarádem" (7. pád)', a:'Petrovým', explain:'7. pád → -OVÝM.'}
    ],
    quiz: [
      {q:'Která věta je správně?', options:['Petrovy přátelé přišli na návštěvu.','Petrovi přátelé přišli na návštěvu.','Petrový přátelé přišli.','Petrých přátelé přišli.'], correct:1, explain:'"Přátelé" jsou rod mužský životný → -OVI.'},
      {q:'Doplň: "Petr___ ruce byly špinavé."', options:['Petrovy','Petrovi','Petrový','Petrých'], correct:0, explain:'"Ruce" jsou rod ženský → -OVY.'},
      {q:'Která věta obsahuje CHYBU?', options:['Petrovi kamarádi šli ven.','Petrovy boty jsou v předsíni.','Petrovo auto je rychlé.','Petrovi peníze jsou na stole.'], correct:3, explain:'"Petrovi peníze" → "PETROVY peníze" (rod mužský neživotný plurál).'},
      {q:'"___ pes štěká celou noc." Doplň:', options:['Sousedů','Sousedův','Sousedovi','Sousedý'], correct:1, explain:'V 1. pádě jednotného čísla se píše -ŮV (Sousedův pes).'},
      {q:'"S Petrov___ kamarádem půjdeme do kina." Doplň:', options:['ovi','ovými','ovým','ovich'], correct:2, explain:'7. pád jednotného čísla → -OVÝM.'},
      {q:'"___ stromy stojí na zahradě." Doplň:', options:['Sousedovy','Sousedovi','Sousedů','Sousedovým'], correct:0, explain:'Stromy = mužský neživotný plurál → -OVY.'}
    ]
  },

  /* ─────────────────────────────────────────────
     9. INTERPUNKCE VE VĚTĚ JEDNODUCHÉ
  ───────────────────────────────────────────── */
  {
    id: 'carky-jed',
    section: 'pravopis',
    tag: 'Pravopis · Interpunkce',
    title: 'Čárky ve větě jednoduché',
    desc: 'Kdy psát čárku ve výčtu, oslovení, vsuvce. Mezi spojkami a, i, ani, nebo.',
    cards: [
      {q:'Pravidlo: Před spojkami A, I, NEBO, ANI...', a:'Bez čárky (slučovací poměr)', explain:'"Petr a Pavel jdou ven." Spojky A, I, ANI, NEBO bez čárky.'},
      {q:'Pravidlo: Před spojkami ALE, AVŠAK, VŠAK, NÝBRŽ...', a:'Vždy čárka (odporovací)', explain:'"Petr ale Pavel zůstal doma." × "Petr, ale Pavel zůstal doma." Pozor na rozdíl.'},
      {q:'Pravidlo: Při výčtu (více než 2 položky)?', a:'Mezi všemi položkami čárky, KROMĚ A před poslední', explain:'"Koupil jablka, hrušky, banány a pomeranče." Před A se nečárkuje.'},
      {q:'Pravidlo: Před oslovením?', a:'Vždy čárka', explain:'"Petře, jsi tam?" / "Děkuji, paní učitelko."'},
      {q:'Pravidlo: Při vsuvce?', a:'Z obou stran čárka', explain:'"Petr, můj bratr, přišel domů." Vsuvka mezi 2 čárky.'},
      {q:'"Koupil jsem jablka<em>_</em> hrušky a banány." (čárku ano/ne)', a:'jablka, hrušky', explain:'Mezi položkami výčtu vždy čárka.'},
      {q:'"Petr<em>_</em> a Pavel přišli." (čárka před a?)', a:'Bez čárky', explain:'Před spojkou A v slučovacím poměru se nečárkuje.'},
      {q:'"Petr<em>_</em> ale Pavel zůstal doma." (čárka před ale?)', a:'S čárkou: Petr, ale Pavel...', explain:'Před ALE vždy čárka (odporovací poměr).'},
      {q:'"Mami<em>_</em> jdu domů." (čárka po oslovení?)', a:'Mami, jdu domů.', explain:'Po oslovení čárka.'},
      {q:'"Petr<em>_</em> můj bratr<em>_</em> přišel." (vsuvka)', a:'Petr, můj bratr, přišel.', explain:'Vsuvka z obou stran čárkami.'},
      {q:'"Bydlí v Praze v Brně nebo v Ostravě." Kde dát čárky?', a:'Bydlí v Praze, v Brně nebo v Ostravě.', explain:'Mezi položkami čárky, před NEBO čárka SE NEPÍŠE.'},
      {q:'"Šel domů a zavřel za sebou dveře." (čárka před a?)', a:'Bez čárky', explain:'Slučovací A → bez čárky.'},
      {q:'"Šel domů a kolem desáté přišel kamarád." (čárka?)', a:'Šel domů a kolem desáté přišel kamarád. (bez čárky)', explain:'I když jsou dvě věty hlavní, slučovací A → bez čárky.'},
      {q:'"Otevřela dveře a překvapila ji." Které je správně?', a:'Bez čárky pokud "ji" odkazuje na "ji" (pokračování), s čárkou pokud zvrat.', explain:'V této větě je nejednoznačné. Nutný kontext.'},
      {q:'"Pavle můžeš mi pomoci?" Kde má být čárka?', a:'Pavle, můžeš mi pomoci?', explain:'Po oslovení čárka.'}
    ],
    quiz: [
      {q:'Která věta je SPRÁVNĚ?', options:['Koupil jsem rohlíky chleba a sýr.','Koupil jsem rohlíky, chleba, a sýr.','Koupil jsem rohlíky, chleba a sýr.','Koupil jsem rohlíky chleba, a sýr.'], correct:2, explain:'Mezi položkami výčtu čárka, před A se nečárkuje.'},
      {q:'Která věta obsahuje CHYBU?', options:['Petr a Pavel přišli.','Petr ale Pavel ne.','Petr přišel, ale Pavel zůstal doma.','Petr a já jsme šli ven.'], correct:1, explain:'"Petr ale Pavel ne" → "Petr, ale Pavel ne." (čárka před ALE).'},
      {q:'"Mami já jdu domů" — kde má být čárka?', options:['Mami já, jdu domů.','Mami já jdu, domů.','Mami, já jdu domů.','Mami já jdu domů.'], correct:2, explain:'Po oslovení (mami) čárka.'},
      {q:'Doplň čárky správně: "Petr můj bratr přišel."', options:['Petr můj bratr, přišel.','Petr, můj bratr, přišel.','Petr, můj bratr přišel.','Petr můj bratr přišel.'], correct:1, explain:'"Můj bratr" = vsuvka → z obou stran čárkami.'},
      {q:'Která věta je správně?', options:['Koupil jablka hrušky a banány.','Koupil jablka, hrušky a banány.','Koupil jablka, hrušky, a banány.','Koupil, jablka, hrušky a banány.'], correct:1, explain:'Výčet: čárky mezi položkami, před A bez čárky.'}
    ]
  },

  /* ─────────────────────────────────────────────
     10. INTERPUNKCE V SOUVĚTÍ
  ───────────────────────────────────────────── */
  {
    id: 'carky-souv',
    section: 'pravopis',
    tag: 'Pravopis · Interpunkce',
    title: 'Čárky v souvětí',
    desc: 'Mezi větou hlavní a vedlejší. Před spojkami KTERÝ, ŽE, ABY, KDYŽ, PROTOŽE, ABY, PŘESTOŽE, ATD.',
    cards: [
      {q:'Pravidlo: Před vedlejší větou se píše?', a:'Vždy čárka', explain:'"Vím, že přijdeš." — před spojkou ŽE čárka.'},
      {q:'Pravidlo: Před spojkami KTERÝ, KDO, JAKÝ?', a:'Vždy čárka (vztažné věty)', explain:'"Pes, který štěká, kouše málokdy."'},
      {q:'Pravidlo: Před spojkami KDYŽ, ABY, KDYBY, POKUD, PROTOŽE, JESTLI, ŽE, JESTLIŽE?', a:'Vždy čárka (podřadicí spojky)', explain:'"Půjdeme, když přestane pršet."'},
      {q:'Pravidlo: Slučovací spojky mezi větami hlavními (A, I, NEBO, ANI)?', a:'Bez čárky', explain:'"Otevřela dveře a vyšla ven."'},
      {q:'Pravidlo: Odporovací spojky mezi větami (ALE, VŠAK)?', a:'Vždy čárka', explain:'"Otevřela dveře, ale nevyšla ven."'},
      {q:'"Pes_který štěká_kouše málokdy." Kde čárky?', a:'Pes, který štěká, kouše málokdy.', explain:'Vedlejší věta vztažná z obou stran čárkami.'},
      {q:'"Vím_že přijdeš." (čárka?)', a:'Vím, že přijdeš.', explain:'Před spojkou ŽE čárka.'},
      {q:'"Půjdeme_když přestane pršet." (čárka?)', a:'Půjdeme, když přestane pršet.', explain:'Před spojkou KDYŽ čárka.'},
      {q:'"Petr přišel domů_a hned šel spát." (čárka?)', a:'Bez čárky', explain:'Slučovací A mezi větami hlavními → bez čárky.'},
      {q:'"Petr přišel domů_ale hned šel pryč." (čárka?)', a:'Petr přišel domů, ale hned šel pryč.', explain:'Odporovací ALE → čárka.'},
      {q:'"Maminka uvařila oběd_protože jsme měli hlad." (čárka?)', a:'Maminka uvařila oběd, protože jsme měli hlad.', explain:'Před PROTOŽE čárka.'},
      {q:'"Vidíš tu knihu_jak leží na stole?" (čárka?)', a:'Vidíš tu knihu, jak leží na stole?', explain:'Před vedlejší větou čárka.'},
      {q:'"Učitelka řekla_aby žáci byli ticho." (čárka?)', a:'Učitelka řekla, aby žáci byli ticho.', explain:'Před ABY čárka (záměr).'},
      {q:'"Zlobil se_přestože měl pravdu." (čárka?)', a:'Zlobil se, přestože měl pravdu.', explain:'Před PŘESTOŽE čárka.'},
      {q:'"Nevěděl_jestli má jít domů_nebo zůstat ve škole." (čárky?)', a:'Nevěděl, jestli má jít domů, nebo zůstat ve škole.', explain:'Před JESTLI čárka. Před NEBO TAKY čárka, protože odděluje dvě vedlejší věty.'}
    ],
    quiz: [
      {q:'Která věta je správně?', options:['Vím že přijdeš.','Vím, že přijdeš.','Vím, že, přijdeš.','Vím že, přijdeš.'], correct:1, explain:'Před spojkou ŽE čárka.'},
      {q:'Která věta obsahuje CHYBU?', options:['Otevřela dveře, ale vyšla ven.','Pes, který štěká, kouše málokdy.','Petr přišel a hned šel spát.','Vyšla ven aby se nadýchla.'], correct:3, explain:'"Vyšla ven, aby se nadýchla." (před ABY čárka).'},
      {q:'Doplň čárky: "Půjdeme když přestane pršet."', options:['Půjdeme když, přestane pršet.','Půjdeme, když, přestane pršet.','Půjdeme, když přestane pršet.','Půjdeme když přestane, pršet.'], correct:2, explain:'Před spojkou KDYŽ čárka.'},
      {q:'"Pes který štěká kouše málokdy" — kde má být čárka?', options:['Pes, který štěká kouše málokdy.','Pes který, štěká kouše málokdy.','Pes, který štěká, kouše málokdy.','Pes který štěká, kouše málokdy.'], correct:2, explain:'Vedlejší věta vztažná z obou stran.'},
      {q:'Která věta je SPRÁVNĚ?', options:['Učitelka řekla aby byli žáci ticho.','Učitelka, řekla aby byli žáci ticho.','Učitelka řekla, aby byli žáci ticho.','Učitelka řekla, aby, byli žáci ticho.'], correct:2, explain:'Před vedlejší větou účelovou (ABY) čárka.'},
      {q:'Která věta JE správně?', options:['Petr přišel ale hned šel pryč.','Petr přišel a hned šel pryč.','Petr, přišel ale hned šel pryč.','Petr, přišel a hned šel pryč.'], correct:1, explain:'Slučovací A → bez čárky. Odporovací ALE → čárka.'}
    ]
  }

];
