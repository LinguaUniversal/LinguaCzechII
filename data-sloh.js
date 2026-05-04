/* ═══════════════════════════════════════════════════════════
   SLOHOVÉ ÚTVARY — DATOVÁ SADA
   5 podtémat · 75 karet · pro 6.-9. ročník ZŠ Lingua Universal
═══════════════════════════════════════════════════════════ */

const TOPICS = [

  /* ─────────────────────────────────────────────
     1. VYPRÁVĚNÍ
  ───────────────────────────────────────────── */
  {
    id: 'vypraveni',
    section: 'sloh',
    tag: 'Slohový útvar · Vyprávění',
    title: 'Vyprávění',
    desc: 'Slohový útvar líčící děj nebo příběh. Klíčové znaky, struktura, čas a postavy.',
    cards: [
      {q:'Co je vyprávění?', a:'Slohový útvar líčící děj nebo příběh', explain:'Hlavní rys: časová posloupnost, dějové sloveso, gradace. Příklady: pohádky, povídky, vzpomínky.'},
      {q:'Jaké jsou hlavní znaky vyprávění?', a:'Děj, čas, postavy, gradace, pointa', explain:'Vyprávění bez gradace a pointy je jen kronika událostí. Pointa = vrchol nebo překvapivý závěr.'},
      {q:'V jakém čase se obvykle vypráví?', a:'V minulém čase', explain:'Vyprávění zachycuje to, co se stalo. Občas se používá historický přítomný čas pro dramatičnost ("a najednou vchází…").'},
      {q:'Co je gradace ve vyprávění?', a:'Postupné stupňování napětí', explain:'Vyprávění postupuje od klidu k napětí, vrcholí v pointě. Bez gradace je vyprávění "ploché".'},
      {q:'Co je pointa?', a:'Vrcholný okamžik nebo překvapivý závěr příběhu', explain:'Pointa dává vyprávění smysl — to, kvůli čemu se vlastně vypráví.'},
      {q:'Jaká slovní druhy převažují ve vyprávění?', a:'Slovesa (dějová)', explain:'Vyprávění je dynamické — slovesa popisují děj. "Šel, viděl, otevřel, zaslechl…"'},
      {q:'Příklady literárních útvarů založených na vyprávění:', a:'Pohádka, povídka, román, novela, vzpomínka', explain:'Všechny mají společný děj a vyprávění příběhu.'},
      {q:'Jaký je rozdíl mezi vyprávěním a popisem?', a:'Vyprávění má děj, popis je statický', explain:'Vyprávění: "Šel domů, otevřel dveře…" — Popis: "Dveře byly hnědé, masivní…"'},
      {q:'Co je rámcové vyprávění?', a:'Vyprávění uvnitř jiného vyprávění', explain:'Postava A vypráví postavě B, ta si připomíná příběh… Příklad: Tisíc a jedna noc.'},
      {q:'Vyprávění v 1. osobě = ?', a:'Ich-forma (já forma)', explain:'Vypravěč mluví jako "já". Subjektivní pohled, bližší čtenáři. Často v dopisech, denících, vzpomínkách.'},
      {q:'Vyprávění ve 3. osobě = ?', a:'Er-forma (on/ona forma)', explain:'Vypravěč popisuje, co dělá hrdina. Objektivnější, často všeznalý vypravěč.'},
      {q:'Co je přímá řeč?', a:'Doslovné slova postavy v uvozovkách', explain:'Píše se v uvozovkách: "Dnes nemůžu," řekl Petr. Oživuje vyprávění.'},
      {q:'Co je nepřímá řeč?', a:'Tlumočení slov postavy bez uvozovek', explain:'Petr řekl, že dnes nemůže. (Bez uvozovek, sloveso uvozovací + spojka že.)'},
      {q:'Struktura vyprávění:', a:'Úvod → zápletka → vyvrcholení (pointa) → závěr', explain:'Klasický oblouk příběhu. Někdy se začíná uprostřed děje (in medias res).'},
      {q:'Co je expozice ve vyprávění?', a:'Úvodní seznámení s postavami a prostředím', explain:'Čtenář se dozví kdo je hrdina, kde a kdy se příběh odehrává.'}
    ],
    quiz: [
      {q:'"Bylo nebylo, za sedmero horami…" — to je jaký útvar?', options:['Popis','Vyprávění','Charakteristika','Referát'], correct:1, explain:'Klasický začátek pohádky = vyprávění (děj, postavy, čas).'},
      {q:'Co NEPATŘÍ mezi znaky vyprávění?', options:['Gradace','Časová posloupnost','Statický popis','Pointa'], correct:2, explain:'Statický popis je naopak charakteristický pro útvar popis, ne vyprávění.'},
      {q:'V jaké osobě je toto vyprávění? "Vstal jsem brzy ráno a šel jsem do parku."', options:['1. osoba (ich-forma)','2. osoba','3. osoba (er-forma)','Žádná z nich'], correct:0, explain:'"Vstal jsem" — 1. osoba jednotného čísla.'},
      {q:'Co je pointa?', options:['Začátek vyprávění','Hlavní postava','Vrcholný okamžik nebo překvapivý závěr','Vypravěč'], correct:2, explain:'Pointa je vrchol vyprávění — to, kvůli čemu se vypráví.'},
      {q:'Jaký slovní druh převažuje ve vyprávění?', options:['Podstatná jména','Přídavná jména','Slovesa','Příslovce'], correct:2, explain:'Vyprávění popisuje děj — proto jsou klíčová slovesa.'}
    ]
  },

  /* ─────────────────────────────────────────────
     2. POPIS
  ───────────────────────────────────────────── */
  {
    id: 'popis',
    section: 'sloh',
    tag: 'Slohový útvar · Popis',
    title: 'Popis',
    desc: 'Slohový útvar zachycující vlastnosti osoby, věci, místa nebo postupu. Druhy popisu a jejich pravidla.',
    cards: [
      {q:'Co je popis?', a:'Slohový útvar zachycující vlastnosti osoby, věci, místa nebo postupu', explain:'Popis je statický — nemá děj. Zachycuje "co je", ne "co se děje".'},
      {q:'Hlavní znaky popisu:', a:'Systematičnost, věcnost, statika', explain:'Popis se nepouští do děje — je v něm "snímek" reality. Postupujeme systematicky.'},
      {q:'Jaký slovní druh převažuje v popisu?', a:'Přídavná jména', explain:'Přídavná jména popisují vlastnosti: hnědý, kulatý, vysoký, tlustý…'},
      {q:'Druhy popisu:', a:'Prostý popis, popis pracovního postupu, odborný popis, líčení', explain:'Každý má své pravidla. Líčení je popis subjektivní (umělecký).'},
      {q:'Co je prostý popis?', a:'Věcný popis předmětu, osoby nebo místa', explain:'Příklad: popis aktovky, kamarádky, třídy. Neutrální tón.'},
      {q:'Co je popis pracovního postupu?', a:'Návod, jak něco udělat krok za krokem', explain:'Recept, instrukce, manuál. Užívá rozkazovací způsob nebo trpný rod.'},
      {q:'Co je odborný popis?', a:'Popis používaný v odborných textech', explain:'Přesný, terminologicky bohatý. Příklad: popis stroje v učebnici techniky.'},
      {q:'Co je líčení?', a:'Subjektivní (umělecký) popis se zapojením emocí', explain:'Líčení používá metafory, přirovnání, smyslové vjemy. "Měsíc tiše plul po stříbrné obloze."'},
      {q:'Jak postupovat v popisu osoby?', a:'Od celkového vzhledu k detailům (vnější i vnitřní)', explain:'Nejprve postava, věk, oblečení; pak obličej, vlasy, oči; pak povahové rysy.'},
      {q:'Jak postupovat v popisu místnosti?', a:'Systematicky — po směru pohledu', explain:'Např. ode dveří k oknu, zleva doprava. Bez "skákání" mezi částmi.'},
      {q:'Co je důležité v popisu pracovního postupu?', a:'Posloupnost kroků, přesnost, jasnost', explain:'Krok 1, krok 2… Bez vynechávání. Přesné množství, časy, teploty.'},
      {q:'Jaké slovesné způsoby se používají v popisu pracovního postupu?', a:'Rozkazovací nebo trpný rod', explain:'Např: "Smícháme mouku a cukr." NEBO "Mouka se smíchá s cukrem."'},
      {q:'Příklady prostého popisu z literatury:', a:'Popis vsi v Babičce, popis třídy ve Foglarovi', explain:'Realistická literatura má často podrobné popisy prostředí.'},
      {q:'Co popisem NEDĚLÁME?', a:'Nehodnotíme, neradíme, nevyprávíme děj', explain:'Popis je objektivní snímek. Hodnocení patří do úvahy, rady do návodu, děj do vyprávění.'},
      {q:'Rozdíl mezi popisem a charakteristikou?', a:'Popis je vnější, charakteristika hlubší (povaha)', explain:'Popis: "Petr má modré oči." Charakteristika: "Petr je laskavý a obětavý."'}
    ],
    quiz: [
      {q:'Slohový útvar, kde popisujeme krok za krokem, jak něco vytvořit:', options:['Charakteristika','Popis pracovního postupu','Vyprávění','Úvaha'], correct:1, explain:'Recept, návod = popis pracovního postupu.'},
      {q:'Jaký slovní druh převažuje v popisu?', options:['Slovesa','Podstatná jména','Přídavná jména','Citoslovce'], correct:2, explain:'Přídavná jména popisují vlastnosti — proto jsou klíčová.'},
      {q:'Co NENÍ druh popisu?', options:['Prostý popis','Líčení','Popis pracovního postupu','Vzpomínka'], correct:3, explain:'Vzpomínka je vyprávění, ne popis.'},
      {q:'Co je líčení?', options:['Věcný popis','Subjektivní umělecký popis','Návod','Charakteristika'], correct:1, explain:'Líčení = subjektivní popis s metaforami a emocemi.'},
      {q:'V receptu se nejčastěji používá:', options:['Minulý čas','Rozkazovací způsob nebo trpný rod','Budoucí čas','Přechodník'], correct:1, explain:'"Smícháme…" (rozkaz) nebo "Mouka se smíchá…" (trpný rod).'}
    ]
  },

  /* ─────────────────────────────────────────────
     3. CHARAKTERISTIKA
  ───────────────────────────────────────────── */
  {
    id: 'charakteristika',
    section: 'sloh',
    tag: 'Slohový útvar · Charakteristika',
    title: 'Charakteristika',
    desc: 'Hlubší popis osoby — vzhled, povaha, způsob života. Charakteristika přímá a nepřímá.',
    cards: [
      {q:'Co je charakteristika?', a:'Hlubší popis vlastností osoby — vzhled, povaha, způsob života', explain:'Liší se od popisu hloubkou. Hodnotí, srovnává, vysvětluje. Zaměřuje se na vnitřní stránku člověka.'},
      {q:'Co je charakteristika přímá?', a:'Vlastnosti se popisují přímo slovy', explain:'"Petr je laskavý a obětavý." — vlastnost je řečena explicitně.'},
      {q:'Co je charakteristika nepřímá?', a:'Vlastnosti se vyvodí z chování postavy', explain:'"Petr přinesl babičce každý den oběd, aniž ho prosila." — z chování poznáme, že je obětavý.'},
      {q:'Co je vnější charakteristika?', a:'Popis vzhledu osoby', explain:'Postava, věk, oblečení, obličej, vlasy. Co vidíme.'},
      {q:'Co je vnitřní charakteristika?', a:'Popis povahy, charakteru, myšlení', explain:'Co cítí, jak myslí, jaké má hodnoty, vlastnosti, ideály.'},
      {q:'Jaké jazykové prostředky se používají v charakteristice?', a:'Hodnotící přídavná jména, přirovnání, metafory', explain:'"Statečný jako lev", "tvrdý jako kámen". Subjektivně hodnotí.'},
      {q:'Jak postupovat při psaní charakteristiky?', a:'Od vnějšího k vnitřnímu, od obecného k detailu', explain:'Nejprve celkový dojem a vzhled, pak konkrétní povahové rysy.'},
      {q:'Příklady literárních charakteristik:', a:'Babička v "Babičce", Don Quijote, Saturnin', explain:'Klasické literární postavy mají detailní charakteristiku — vnější i vnitřní.'},
      {q:'Co je autocharakteristika?', a:'Charakteristika sebe sama', explain:'"Já jsem…" — popisuji sám sebe. Často součástí životopisů a esejů.'},
      {q:'Rozdíl mezi popisem osoby a charakteristikou?', a:'Charakteristika jde hlouběji do povahy', explain:'Popis: "Má modré oči." Charakteristika: "Vždy mu z očí vyzařovala dobrota."'},
      {q:'Co znamená komplexní charakteristika?', a:'Spojení přímé a nepřímé charakteristiky', explain:'Nejlepší charakteristiky kombinují obě metody — i přímé hodnocení i důkazy z chování.'},
      {q:'Co je idealizovaná charakteristika?', a:'Charakteristika zveličující kladné vlastnosti', explain:'Často v hagiografiích (životy svatých) nebo nekrolozích.'},
      {q:'Co je karikatura?', a:'Charakteristika zveličující záporné nebo směšné vlastnosti', explain:'Často v satirické literatuře. Cíl: zesměšnit nebo kritizovat.'},
      {q:'Hlavní cíl charakteristiky?', a:'Vystihnout typické vlastnosti osoby', explain:'Co je pro tu osobu jedinečné. Ne jen jak vypadá, ale kým doopravdy je.'},
      {q:'Příklad přímé charakteristiky:', a:'"Marie byla laskavá a štědrá."', explain:'Vlastnost je vyjádřena přímo přídavnými jmény.'}
    ],
    quiz: [
      {q:'Která charakteristika je nepřímá?', options:['Marie byla štědrá.','Marie přinesla babičce každý den oběd.','Marie měla modré oči.','Marie byla vysoká a štíhlá.'], correct:1, explain:'Vlastnost (štědrost) je vyvozena z chování — nepřímá charakteristika.'},
      {q:'Co JE charakteristika?', options:['Popis vzhledu','Hlubší popis osoby — vzhled i povaha','Vyprávění o osobě','Životopis'], correct:1, explain:'Charakteristika jde hlouběji než popis — zachycuje povahu a způsob života.'},
      {q:'Která věta je PŘÍMÁ charakteristika?', options:['Petr má rád zvířata.','Petr je laskavý a obětavý.','Petr každý den krmí kočky před domem.','Petr studuje v Praze.'], correct:1, explain:'Přímá charakteristika vyslovuje vlastnost přímo.'},
      {q:'Co se NEZABÝVÁ charakteristikou?', options:['Vzhled','Povaha','Způsob života','Recept na koláč'], correct:3, explain:'Charakteristika popisuje osobu, ne věci nebo postupy.'},
      {q:'Karikatura je charakteristika:', options:['Idealizovaná','Realistická','Zveličující záporné rysy','Stručná'], correct:2, explain:'Karikatura zveličuje směšné nebo záporné vlastnosti — typická pro satiru.'}
    ]
  },

  /* ─────────────────────────────────────────────
     4. ÚVAHA
  ───────────────────────────────────────────── */
  {
    id: 'uvaha',
    section: 'sloh',
    tag: 'Slohový útvar · Úvaha',
    title: 'Úvaha',
    desc: 'Slohový útvar vyjadřující osobní zamyšlení nad otázkou. Argumentace, subjektivita, závěr.',
    cards: [
      {q:'Co je úvaha?', a:'Slohový útvar vyjadřující osobní zamyšlení nad otázkou', explain:'Subjektivní pohled, argumenty pro a proti, závěr. Časté ve filozofii a esejích.'},
      {q:'Hlavní znaky úvahy:', a:'Subjektivita, argumentace, otázky a odpovědi, závěr', explain:'Autor vyjadřuje vlastní názor, opírá ho o argumenty.'},
      {q:'Struktura úvahy:', a:'Úvod (vymezení problému) → argumentace → závěr (řešení nebo otevřený konec)', explain:'Klasický oblouk: problém → diskuse → odpověď.'},
      {q:'Co převažuje v úvaze — fakta, nebo názory?', a:'Názory autora opřené o argumenty', explain:'Úvaha je subjektivní — autor zaujímá stanovisko a obhajuje ho.'},
      {q:'Jaké jazykové prostředky se používají v úvaze?', a:'Řečnické otázky, hodnotící slova, podmiňovací způsob', explain:'"Měli bychom… ", "Co kdyby…?", "Domnívám se, že…"'},
      {q:'Co je teze v úvaze?', a:'Hlavní myšlenka nebo tvrzení autora', explain:'To, co autor chce dokázat. Např. "Sociální sítě nás odcizují."'},
      {q:'Co je argument?', a:'Důvod podporující tvrzení', explain:'Příklad, fakt, citát, srovnání. Vědecké úvahy mají více argumentů.'},
      {q:'Co je protiargument?', a:'Argument proti hlavnímu tvrzení', explain:'Dobrý autor se s ním vypořádá, ne ho ignoruje.'},
      {q:'Příklady témat pro úvahu:', a:'"Co znamená přátelství?", "Je dobré říkat pravdu?"', explain:'Filozofická, etická, společenská témata. Otevřená, bez jednoznačné odpovědi.'},
      {q:'Liší se úvaha od názoru?', a:'Úvaha je rozsáhlejší, opřená o argumenty', explain:'Názor: "Myslím, že ano." Úvaha: rozsáhlý text obhajující, proč si to myslím.'},
      {q:'Jakou roli hraje řečnická otázka v úvaze?', a:'Vyzývá čtenáře k zamyšlení', explain:'"A co my, co jsme udělali pro budoucnost?" — autor neočekává odpověď, ale aktivuje čtenáře.'},
      {q:'Co je esej?', a:'Delší literární úvaha s uměleckými prvky', explain:'Esej spojuje úvahu s krásnou literaturou. Známé eseje: Karel Čapek, M. Šimečka, J. Patočka.'},
      {q:'Hlavní rozdíl mezi úvahou a referátem?', a:'Úvaha je subjektivní, referát objektivní', explain:'Referát informuje o tématu věcně, úvaha vyjadřuje osobní postoj.'},
      {q:'Závěr úvahy by měl:', a:'Shrnout, dovést k závěru nebo nechat otevřené', explain:'Buď autor řekne "tedy si myslím, že…" nebo nechá čtenáře, aby si udělal vlastní závěr.'},
      {q:'Co je polemika?', a:'Vášnivá úvaha vyvracející cizí názor', explain:'"Někdo tvrdí X, ale to je špatně, protože…" Konfrontační forma úvahy.'}
    ],
    quiz: [
      {q:'Útvar, který vyjadřuje osobní názor s argumenty:', options:['Referát','Popis','Charakteristika','Úvaha'], correct:3, explain:'Úvaha = osobní zamyšlení s argumenty pro a proti.'},
      {q:'Co JE typické pro úvahu?', options:['Děj a postavy','Subjektivní názor s argumenty','Statický popis','Návod krok za krokem'], correct:1, explain:'Úvaha je subjektivní, autor vyjadřuje a obhajuje vlastní názor.'},
      {q:'Co je teze v úvaze?', options:['Závěr','Hlavní myšlenka, kterou chce autor dokázat','Otázka','Citát'], correct:1, explain:'Teze = tvrzení, kolem kterého se argumentace točí.'},
      {q:'Esej je:', options:['Krátký popis','Delší literární úvaha','Drama','Báseň'], correct:1, explain:'Esej spojuje úvahu s uměleckými prvky.'},
      {q:'Která věta NEPATŘÍ do úvahy?', options:['Domnívám se, že…','Bylo nebylo, za sedmero horami…','Měli bychom přemýšlet…','Co kdyby…'], correct:1, explain:'"Bylo nebylo" je úvodní formule pohádky (vyprávění), ne úvahy.'}
    ]
  },

  /* ─────────────────────────────────────────────
     5. FUNKČNÍ STYLY (přehled)
  ───────────────────────────────────────────── */
  {
    id: 'funkcni-styly',
    section: 'sloh',
    tag: 'Slohové útvary · Funkční styly',
    title: 'Funkční styly — přehled',
    desc: 'Pět hlavních funkčních stylů češtiny: prostěsdělovací, odborný, publicistický, administrativní, umělecký.',
    cards: [
      {q:'Pět funkčních stylů češtiny:', a:'Prostěsdělovací, odborný, publicistický, administrativní, umělecký', explain:'Každý styl má svůj účel, prostředí a typické útvary.'},
      {q:'Co je prostěsdělovací styl?', a:'Styl běžné každodenní komunikace', explain:'Doma, ve škole, na ulici. Jednoduchá slova, krátké věty, hovorové výrazy.'},
      {q:'Útvary prostěsdělovacího stylu:', a:'Rozhovor, dopis, vzkaz, oznámení, blahopřání', explain:'Vše, co používáme v běžném životě.'},
      {q:'Co je odborný styl?', a:'Funkční styl odborných textů — věcný, přesný, terminologický', explain:'Vědecké práce, učebnice, přednášky. Obsahuje termíny.'},
      {q:'Útvary odborného stylu:', a:'Odborný článek, přednáška, učebnice, vědecká studie, referát', explain:'Cíl: poučit, sdělit fakta.'},
      {q:'Co je publicistický styl?', a:'Funkční styl novin, magazínů a televize', explain:'Cíl: informovat veřejnost. Atraktivní, čtenář se nesmí nudit.'},
      {q:'Útvary publicistického stylu:', a:'Zpráva, oznámení, reportáž, recenze, sloupek, fejeton, interview', explain:'Liší se od zprávy (faktická) až po fejeton (umělecký).'},
      {q:'Co je administrativní styl?', a:'Funkční styl úředních dokumentů — formální, ustálený', explain:'Pevná struktura, neutrální tón, žádné emoce.'},
      {q:'Útvary administrativního stylu:', a:'Žádost, životopis, zpráva, smlouva, zápis z porady', explain:'Standardní formuláře, předvídatelné formulace.'},
      {q:'Co je umělecký styl?', a:'Funkční styl literárních děl', explain:'Cíl: estetický zážitek. Bohatý jazyk, metafory, rytmus.'},
      {q:'Útvary uměleckého stylu:', a:'Báseň, povídka, román, drama, balada', explain:'Vše, co je krásná literatura.'},
      {q:'Jaké jazykové prostředky jsou typické pro publicistický styl?', a:'Aktuálnost, expresivita, atraktivní titulky', explain:'"Šok!", "Senzace!" Cíl: udržet čtenáře.'},
      {q:'Co je fejeton?', a:'Krátký útvar publicistického stylu na okraj denního dění', explain:'Lehký, vtipný, často ironický. Mistři fejetonu: K. Čapek, J. Werich.'},
      {q:'Reportáž je:', a:'Útvar publicistiky popisující událost na místě', explain:'Reportér je svědkem události, popisuje ji čtenáři.'},
      {q:'Co je hlavní rys odborného stylu?', a:'Přesnost, objektivita, terminologie', explain:'V odborném textu nejsou emoce ani osobní názor — jen fakta a argumenty.'}
    ],
    quiz: [
      {q:'Životopis je útvar:', options:['Publicistického stylu','Uměleckého stylu','Administrativního stylu','Odborného stylu'], correct:2, explain:'Životopis je formální dokument administrativního stylu.'},
      {q:'Reportáž patří k stylu:', options:['Odbornému','Publicistickému','Uměleckému','Administrativnímu'], correct:1, explain:'Reportáž je typický útvar publicistiky.'},
      {q:'Která dvojice patří k sobě?', options:['Báseň — odborný styl','Učebnice — administrativní styl','Zpráva — publicistický styl','Fejeton — administrativní styl'], correct:2, explain:'Zpráva (faktické info pro veřejnost) = publicistický styl.'},
      {q:'Co NENÍ funkční styl?', options:['Umělecký','Sportovní','Odborný','Administrativní'], correct:1, explain:'Pět funkčních stylů: prostěsdělovací, odborný, publicistický, administrativní, umělecký.'},
      {q:'Smlouva je typický útvar:', options:['Uměleckého stylu','Publicistického stylu','Odborného stylu','Administrativního stylu'], correct:3, explain:'Smlouva = úřední dokument = administrativní styl.'}
    ]
  }

];
