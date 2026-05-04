# Lingua · Pravopis pro 2. stupeň ZŠ

Studijní webová aplikace pro 6.-9. ročník ZŠ Lingua Universal.

## Obsah

- **10 témat** z pravopisu
- **227 flashcards** (karet s otázkou + odpovědí + vysvětlením)
- **68 kvízových otázek** (4 možnosti, vysvětlení správné odpovědi)
- **Leitnerův systém** (5 boxů, intervaly opakování 1/3/7/14/30 dní)
- **Streak** (počítání dní v řadě)
- **Trvalé ukládání** (localStorage v prohlížeči)

## Témata

1. **Vyjmenovaná slova** (47 karet) — po B, L, M, P, S, V, Z
2. **Shoda přísudku s podmětem** (25 karet) — koncovky -i/-y/-a
3. **Velká písmena** (30 karet) — vlastní jména, instituce, svátky
4. **Psaní mě / mně** (20 karet) — pomocí náhrady tebe/tobě
5. **Předpony s-, z-, vz-** (20 karet) — podle významu
6. **Předložky s/se × z/ze** (15 karet) — pádové rozlišení
7. **Spřežky × dvě slova** (20 karet) — nahoru × na horu
8. **Koncovky -ovi/-ovy** (20 karet) — přivlastňovací přídavná jména
9. **Čárky ve větě jednoduché** (15 karet) — výčet, oslovení, vsuvka
10. **Čárky v souvětí** (15 karet) — vedlejší věty, spojky

## Soubory

- `index.html` — hlavní aplikace
- `data-pravopis.js` — kompletní datová sada (lze samostatně rozšiřovat)
- `logo.png` — školní logo

## Nasazení

### GitHub Pages (samostatná stránka)

1. Vytvoř nový repozitář (např. `lingua-pravopis`)
2. Nahraj všechny 3 soubory (`index.html`, `data-pravopis.js`, `logo.png`)
3. V Settings → Pages aktivuj GitHub Pages
4. Web bude dostupný na `https://uzivatel.github.io/lingua-pravopis/`

### Vlastní doména (např. pravopis.linguauniversal.cz)

1. Hostuj soubory na webovém serveru
2. V DNS nastav A záznam nebo CNAME na server
3. Aplikace je čistě statická — funguje kdekoli

## Rozšiřování obsahu

Přidání nového tématu = úprava `data-pravopis.js`:

```javascript
{
  id: 'unique-id',
  section: 'pravopis',
  tag: 'Pravopis · Kategorie',
  title: 'Název tématu',
  desc: 'Krátký popis pro rozcestník.',
  cards: [
    {q:'Otázka?', a:'Odpověď', explain:'Vysvětlení.'},
    // ...
  ],
  quiz: [
    {q:'Otázka?', options:['A','B','C','D'], correct:1, explain:'Proč B.'}
  ]
}
```

V otázkách lze používat jednoduché HTML (`<em>`, `<b>`, `<i>`).

## Technické detaily

- Žádné dependencies, žádný build proces
- Funguje offline (po prvním načtení)
- localStorage zachovává stav mezi návštěvami
- Mobile-first responsivní design
- Tmavý režim — připraveno pro budoucí přidání

## Pedagogická koncepce

**Leitnerův systém** je vědecky ověřená metoda opakování. Karty se přesouvají mezi 5 boxy:
- Box 1: opakuj denně (nově nebo špatně odpovězené)
- Box 2: za 1 den
- Box 3: za 3 dny
- Box 4: za 1 týden
- Box 5: za 14 dní (zvládnuto)

Žák odhadne sám: "Vím / Trochu / Nevím" — a karta se přesune dál nebo zpět. Tím se učí rychle to, co neumí, a neztrácí čas s tím, co už ovládá.

## Licence

Materiál pro vzdělávací účely ZŠ Lingua Universal Litoměřice.
