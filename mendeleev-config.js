

var quizJSON = {
    "info": {
        "name":    "Cunoști toate elementele tabelului periodic?",
        "main":    "<p>Încearcă să asociezi toate denumirile elementelor chimice din tabelul periodic al lui Mendeleev cu simbolurile date. Alege TOATE variantele corecte în cazul denumirilor multiple. Succes! :)</p>",
        "results": "<h5>Learn More</h5><p>Elementul meu preferat? Surpriza. - <i>Dmitri Ivanovici Mendeleev</i></p>",
        "level1":  "Chemistry Wizard",
        "level2":  "AmAtEuR<del>e</del>",
        "level3":  "AmAtEuR<del>e</del>",
        "level4":  "Stay in school, kid...",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "N",
            "a": [
                {"option": "Argon",      "correct": false},
                {"option": "Azot",     "correct": true},
                {"option": "Natriu",      "correct": false},
                {"option": "Nitrogen",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Azotul (sau nitrogenul) este elementul chimic din tabelul periodic care are simbolul N și numărul atomic 7. Este un gaz incolor, inodor, insipid, de obicei inert, diatomic și nemetalic, constitutie 78% din atmosfera Pământului și este o parte componentă a tuturor țesuturilor vii.</p>",
            "incorrect": "<p><span>Umm...nu</span> Azotul (sau nitrogenul) este elementul chimic din tabelul periodic care are simbolul N și numărul atomic 7. Este un gaz incolor, inodor, insipid, de obicei inert, diatomic și nemetalic, constitutie 78% din atmosfera Pământului și este o parte componentă a tuturor țesuturilor vii.</p>" // no comma here
        },
        { // Question 2
            "q": "H",
            "a": [
                {"option": "Hidrogen",               "correct": true},
                {"option": "Heliu",   "correct": false},
                {"option": "Apă",               "correct": false},
                {"option": "Holmiu",   "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Corect!</span> Hidrogenul este elementul chimic în tabelul periodic al elementelor cu simbolul H și numărul atomic 1. Este un gaz ușor inflamabil, incolor, insipid, inodor, iar în natură se întâlnește mai ales sub formă de moleculă diatomică, H2. Având masa atomică egală cu 1,00794 u.a.m. , hidrogenul este cel mai ușor element chimic.</p>",
            "incorrect": "<p><span>Umm...nu</span>Hidrogenul este elementul chimic în tabelul periodic al elementelor cu simbolul H și numărul atomic 1. Este un gaz ușor inflamabil, incolor, insipid, inodor, iar în natură se întâlnește mai ales sub formă de moleculă diatomică, H2. Având masa atomică egală cu 1,00794 u.a.m. , hidrogenul este cel mai ușor element chimic.</p>" // no comma here
        },
        { // Question 3
            "q": "Au",
            "a": [
                {"option": "Argint",           "correct": false},
                {"option": "Aur",                  "correct": true},
                {"option": "Arsen",  "correct": false},
                {"option": "Argon",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Aurul este elementul chimic din tabelul periodic care are simbolul Au și numărul atomic 79. Se utilizează aliat cu cuprul sau argintul, pentru fabricarea de podoabe, obiecte de artă, monede etc.</p>",
            "incorrect": "<p><span>Umm...nu</span>Aurul este elementul chimic din tabelul periodic care are simbolul Au și numărul atomic 79. Se utilizează aliat cu cuprul sau argintul, pentru fabricarea de podoabe, obiecte de artă, monede etc.</p>" // no comma here
        },
        { // Question 4
            "q": "K",
            "a": [
                {"option": "Potasiu",    "correct": true},
                {"option": "Plumb",     "correct": false},
                {"option": "Kaliu",      "correct": true},
                {"option": "Kripton",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span>Potasiul este elementul chimic cu numărul atomic 19. Are masa atomică de 39,0983 u.a.m.</p>",
            "incorrect": "<p><span>Umm...nu</span> Potasiul este elementul chimic cu numărul atomic 19. Are masa atomică de 39,0983 u.a.m.</p>" // no comma here
        },
        { // Question 5
            "q": "Na",
            "a": [
                {"option": "Natriu",    "correct": true},
                {"option": "Nobeliu",     "correct": false},
                {"option": "Sodiu",     "correct": true},
                {"option": "Siliciu",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Sodiul (sau Natriu) este un element din sistemul periodic având simbolul Na și numărul atomic 11. Este un metal alcalin, argintiu, cu o reactivitate ridicată.</p>",
            "incorrect": "<p><span>Umm...nu</span> Sodiul (sau Natriu) este un element din sistemul periodic având simbolul Na și numărul atomic 11. Este un metal alcalin, argintiu, cu o reactivitate ridicată.</p>" // no comma here
        },
        { // Question 6
            "q": "Mn",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Mangan",     "correct": true},
                {"option": "Telur",      "correct": false},
                {"option": "Mercur",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Manganul este un element chimic cu simbolul Mn și numărul atomic 25. Este un metal alb-argintiu, asemănător fierului, care se găsește în stare liberă în natură (deseori în combinație cu fierul) și în mai multe minerale.</p>",
            "incorrect": "<p><span>Umm...nu</span> Manganul este un element chimic cu simbolul Mn și numărul atomic 25. Este un metal alb-argintiu, asemănător fierului, care se găsește în stare liberă în natură (deseori în combinație cu fierul) și în mai multe minerale.</p>" // no comma here
        },
        { // Question 7
            "q": "O",
            "a": [
                {"option": "Apă",    "correct": false},
                {"option": "Apă oxigenată",     "correct": false},
                {"option": "Osmiu",      "correct": false},
                {"option": "Oxigen",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Oxigenul este un element chimic cu simbolul O și numărul atomic 8. Face parte din grupa calcogenilor și este un element nemetalic foarte reactiv și un agent oxidant care formează foarte ușor compuși (în special oxizi) cu majoritatea elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Oxigenul este un element chimic cu simbolul O și numărul atomic 8. Face parte din grupa calcogenilor și este un element nemetalic foarte reactiv și un agent oxidant care formează foarte ușor compuși (în special oxizi) cu majoritatea elementelor.</p>" // no comma here
        },
        { // Question 8
            "q": "He",
            "a": [
                {"option": "Hidrogen",    "correct": false},
                {"option": "Holmiu",     "correct": false},
                {"option": "Heliu",      "correct": true},
                {"option": "Hassiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span>Heliul este elementul chimic cu numărul atomic 2 și este reprezentat prin simbolul He. Este un gaz monoatomic inert, incolor, inodor, insipid, ce este primul în grupa sa în tabelul periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span>Heliul este elementul chimic cu numărul atomic 2 și este reprezentat prin simbolul He. Este un gaz monoatomic inert, incolor, inodor, insipid, ce este primul în grupa sa în tabelul periodic al elementelor.</p>" // no comma here
        },
        { // Question 9
            "q": "Ho",
            "a": [
                {"option": "Holmiu",    "correct": true},
                {"option": "Hidrogen",     "correct": false},
                {"option": "Hassiu",      "correct": false},
                {"option": "Heliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Holmiu (simbol Ho) este elementul chimic cu numărul atomic 67. A fost descoperit de Soret în 1878 .</p>",
            "incorrect": "<p><span>Umm...nu</span> Holmiu (simbol Ho) este elementul chimic cu numărul atomic 67. A fost descoperit de Soret în 1878 .</p>" // no comma here
        },
        { // Question 10
            "q": "Ta",
            "a": [
                {"option": "Taliu",    "correct": false},
                {"option": "Tantal",     "correct": true},
                {"option": "Telur",      "correct": false},
                {"option": "Neodim",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Tantalul este elementul cu numărul 73 în Tabelul periodic al elementelor si se notează Ta. El este folosit la greutăți pentru cântare și filamente pentru tuburi vidate. Apare sub formă de compuși si la temperatura camerei este solid.</p>",
            "incorrect": "<p><span>Umm...nu</span> Tantalul este elementul cu numărul 73 în Tabelul periodic al elementelor si se notează Ta. El este folosit la greutăți pentru cântare și filamente pentru tuburi vidate. Apare sub formă de compuși si la temperatura camerei este solid.</p>" // no comma here
        },
        { // Question 11
            "q": "Zn",
            "a": [
                {"option": "Xenon",    "correct": false},
                {"option": "Zinc",     "correct": true},
                {"option": "Natriu",      "correct": false},
                {"option": "Zirconiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Zincul este un element chimic care are simbolul Zn și numărul atomic 30. Zincul este un metal de culoare albăstruie spre alb, care devine maleabil în jurul a 100°-150 °C. Se obține din minereuri și din compuși, fiind folosit în aliaje cu alte metale pentru protejarea acestora împotriva oxidării (ruginirii).</p>",
            "incorrect": "<p><span>Umm...nu</span> Zincul este un element chimic care are simbolul Zn și numărul atomic 30. Zincul este un metal de culoare albăstruie spre alb, care devine maleabil în jurul a 100°-150 °C. Se obține din minereuri și din compuși, fiind folosit în aliaje cu alte metale pentru protejarea acestora împotriva oxidării (ruginirii).</p>" // no comma here
        },
        { // Question 12
            "q": "U",
            "a": [
                {"option": "Uraniu",    "correct": true},
                {"option": "Neptuniu",     "correct": false},
                {"option": "Vanadiu",      "correct": false},
                {"option": "Ytriu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Uraniul este un element chimic, un metal, din seria actinidelor a sistemului periodic al elementelor care are simbolul chimic U și numărul atomic 92.</p>",
            "incorrect": "<p><span>Umm...nu</span> Uraniul este un element chimic, un metal, din seria actinidelor a sistemului periodic al elementelor care are simbolul chimic U și numărul atomic 92.</p>" // no comma here
        },
        { // Question 13
            "q": "Ac",
            "a": [
                {"option": "Americiu",    "correct": false},
                {"option": "Arsen",     "correct": false},
                {"option": "Cadmiu",      "correct": false},
                {"option": "Actiniu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Actiniul este un element chimic radioactiv, notat cu simbolul Ac, descoperit în anul 1899 de către chimistul André-Louis Debierne având numărul atomic 89, iar masa atomică este de 227,0278 uam.</p>",
            "incorrect": "<p><span>Umm...nu</span> Actiniul este un element chimic radioactiv, notat cu simbolul Ac, descoperit în anul 1899 de către chimistul André-Louis Debierne având numărul atomic 89, iar masa atomică este de 227,0278 uam.</p>" // no comma here
        },
        { // Question 14
            "q": "Ru",
            "a": [
                {"option": "Reniu",    "correct": false},
                {"option": "Rubidiu",     "correct": false},
                {"option": "Ruteniu",      "correct": true},
                {"option": "Radiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Rutheniu sau ruthenium este un element chimic care are simbolul Ru și numărul de ordine 44 în sistemul periodic al elementelor, fiind o formă de tranziție la metalele din grupa platinei.</p>",
            "incorrect": "<p><span>Umm...nu</span> Rutheniu sau ruthenium este un element chimic care are simbolul Ru și numărul de ordine 44 în sistemul periodic al elementelor, fiind o formă de tranziție la metalele din grupa platinei.</p>" // no comma here
        },
        { // Question 15
            "q": "Re",
            "a": [
                {"option": "Reniu",    "correct": true},
                {"option": "Roentegeniu",     "correct": false},
                {"option": "Ruteniu",      "correct": false},
                {"option": "Rutherfordiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span>Reniu (simbol Re) este elementul chimic cu numărul atomic 75. Este un metal foarte rar și a fost descoperit de Noddack, Tacke și Berg în 1925.</p>",
            "incorrect": "<p><span>Umm...nu</span> Reniu (simbol Re) este elementul chimic cu numărul atomic 75. Este un metal foarte rar și a fost descoperit de Noddack, Tacke și Berg în 1925.</p>" // no comma here
        },
        { // Question 16
            "q": "Sn",
            "a": [
                {"option": "Stronțiu",    "correct": false},
                {"option": "Staniu",     "correct": true},
                {"option": "Seleniu",      "correct": false},
                {"option": "Scandiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Staniul sau cositorul este un element chimic din grupa a IV-a a tabelului periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span>Staniul sau cositorul este un element chimic din grupa a IV-a a tabelului periodic al elementelor.</p>" // no comma here
        },
        { // Question 17
            "q": "I",
            "a": [
                {"option": "Indiu",    "correct": false},
                {"option": "Iod",     "correct": true},
                {"option": "Iridiu",      "correct": false},
                {"option": "Heliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Iodul este un element chimic, notat cu simbolul I, cu numărul atomic 53. Are un singur izotop natural stabil, cu masa atomică relativă 127, al cărui nucleu conține 74 de neutroni.</p>",
            "incorrect": "<p><span>Umm...nu</span> Iodul este un element chimic, notat cu simbolul I, cu numărul atomic 53. Are un singur izotop natural stabil, cu masa atomică relativă 127, al cărui nucleu conține 74 de neutroni.</p>" // no comma here
        },
        { // Question 18
            "q": "B",
            "a": [
                {"option": "Brom",    "correct": false},
                {"option": "Bariu",     "correct": false},
                {"option": "Berkeliu",      "correct": false},
                {"option": "Bor",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Borul este un element chimic care ocupă poziția a 5-a în tabelul periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Borul este un element chimic care ocupă poziția a 5-a în tabelul periodic al elementelor.</p>" // no comma here
        },
        { // Question 19
            "q": "At",
            "a": [
                {"option": "Argon",    "correct": false},
                {"option": "Astatin",     "correct": true},
                {"option": "Azot",      "correct": false},
                {"option": "Sodiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Astatinul este un element chimic radioactiv din grupul halogenilor, produs al unor reacții nucleare. Fiind obținut, până în prezent, numai în cantități foarte mici, proprietățile sale nu sunt încă bine cunoscute. Se știe că se aseamănă mai mult cu iodul. Este cel mai rar element de pe Terra.</p>",
            "incorrect": "<p><span>Umm...nu</span> Astatinul este un element chimic radioactiv din grupul halogenilor, produs al unor reacții nucleare. Fiind obținut, până în prezent, numai în cantități foarte mici, proprietățile sale nu sunt încă bine cunoscute. Se știe că se aseamănă mai mult cu iodul. Este cel mai rar element de pe Terra.</p>" // no comma here
        },
        { // Question 20
            "q": "Ga",
            "a": [
                {"option": "Galiu",    "correct": true},
                {"option": "Gadoliniu",     "correct": false},
                {"option": "Lantan",      "correct": false},
                {"option": "Kripton",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Galiul este elementul chimic care are simbol chimic Ga și numărul atomic 31. Galiul nu se găsește, în natură, în forma sa elementară, dar se găsește, sub formă de sare de galiu (III), în minereurile de bauxită sau în cele de zinc.</p>",
            "incorrect": "<p><span>Umm...nu</span> Galiul este elementul chimic care are simbol chimic Ga și numărul atomic 31. Galiul nu se găsește, în natură, în forma sa elementară, dar se găsește, sub formă de sare de galiu (III), în minereurile de bauxită sau în cele de zinc.</p>" // no comma here
        },
        { // Question 21
            "q": "V",
            "a": [
                {"option": "Wolfram",    "correct": false},
                {"option": "Tungsten",     "correct": false},
                {"option": "Vanadiu",      "correct": true},
                {"option": "Tuliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Vanadiul' este un element chimic cu simbolul V și numărul atomic 23. Este un metal tranzițional moale, ductil, de culoare cenușiu-argintie. Formarea unui strat protector de oxid stabilizează metalul față de oxidare. Vanadiul se găsește în natură numai sub formă de combinații.</p>",
            "incorrect": "<p><span>Umm...nu</span> Vanadiul' este un element chimic cu simbolul V și numărul atomic 23. Este un metal tranzițional moale, ductil, de culoare cenușiu-argintie. Formarea unui strat protector de oxid stabilizează metalul față de oxidare. Vanadiul se găsește în natură numai sub formă de combinații.</p>" // no comma here
        },
        { // Question 22
            "q": "Rg",
            "a": [
                {"option": "Reniu",    "correct": false},
                {"option": "Wolfram",     "correct": false},
                {"option": "Rubidiu",      "correct": false},
                {"option": "Roentegeniu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Roentgeniul (Röntgenium) a fost descoperit în 1994 de către Gesellschaft für Schwerionenforschung (GSI) în Darmstadt, Germania, când a bombardat bismut-209 cu nichel-60 si a fost numit dupa savantul care a descoperit radiatia X.</p>",
            "incorrect": "<p><span>Umm...nu</span> Roentgeniul (Röntgenium) a fost descoperit în 1994 de către Gesellschaft für Schwerionenforschung (GSI) în Darmstadt, Germania, când a bombardat bismut-209 cu nichel-60 si a fost numit dupa savantul care a descoperit radiatia X.</p>" // no comma here
        },
        { // Question 23
            "q": "Pa",
            "a": [
                {"option": "Proactiniu",    "correct": true},
                {"option": "Platină",     "correct": false},
                {"option": "Paladiu",      "correct": false},
                {"option": "Plumb",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Protactiniu este un element chimic cu simbolul Pa. Are numărul atomic 91. Protactiniul a fost identificat pentru prima dată de Kasimir Fajans și de Oswald Helmuth Göhring în 1913. Aceștia îl numesc brevium.</p>",
            "incorrect": "<p><span>Umm...nu</span> Protactiniu este un element chimic cu simbolul Pa. Are numărul atomic 91. Protactiniul a fost identificat pentru prima dată de Kasimir Fajans și de Oswald Helmuth Göhring în 1913. Aceștia îl numesc brevium.</p>" // no comma here
        },
        { // Question 24
            "q": "Fm",
            "a": [
                {"option": "Franciu",    "correct": false},
                {"option": "Fermiu",     "correct": true},
                {"option": "Hafniu",      "correct": false},
                {"option": "Fosfor",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Fermiul este un element chimic sintetic din categoria actinidelor, care are numărul atomic 100 și simbolul chimic Fm. Este cel mai greu element ce se poate obține prin bombardarea cu neutroni ai elementelor ușoare și ultimul element ce se poate obține în cantități macroscopice, dar nu s-a reușit încă obținerea de fermiu metalic pur.</p>",
            "incorrect": "<p><span>Umm...nu</span>Fermiul este un element chimic sintetic din categoria actinidelor, care are numărul atomic 100 și simbolul chimic Fm. Este cel mai greu element ce se poate obține prin bombardarea cu neutroni ai elementelor ușoare și ultimul element ce se poate obține în cantități macroscopice, dar nu s-a reușit încă obținerea de fermiu metalic pur.</p>" // no comma here
        },
        { // Question 25
            "q": "Hs",
            "a": [
                {"option": "Hassiu",    "correct": true},
                {"option": "Hafniu",     "correct": false},
                {"option": "Siliciu",      "correct": false},
                {"option": "Germaniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Hassiu este un element chimic cu numărul atomic 108 și simbol chimic Hs. Numele de hassiu provine de la landul german Hessa. A fost descoperit în Germania la ”Societatea pentru Cercetarea Ionilor Grei” (Gesellschaft für Schwerionenforschung sau GSI) în 1984.</p>",
            "incorrect": "<p><span>Umm...nu</span> Hassiu este un element chimic cu numărul atomic 108 și simbol chimic Hs. Numele de hassiu provine de la landul german Hessa. A fost descoperit în Germania la ”Societatea pentru Cercetarea Ionilor Grei” (Gesellschaft für Schwerionenforschung sau GSI) în 1984.</p>" // no comma here
        },
        { // Question 26
            "q": "Pm",
            "a": [
                {"option": "Praseodim",    "correct": false},
                {"option": "Samariu",     "correct": false},
                {"option": "Promețiu",      "correct": true},
                {"option": "Proactiniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Promețiu (simbol Pm) este elementul chimic cu numărul atomic 61. A fost descoperit de Marinsky și Glendenin în 1945 .</p>",
            "incorrect": "<p><span>Umm...nu</span> Promețiu (simbol Pm) este elementul chimic cu numărul atomic 61. A fost descoperit de Marinsky și Glendenin în 1945 .</p>" // no comma here
        },
        { // Question 27
            "q": "Ag",
            "a": [
                {"option": "Argon",    "correct": false},
                {"option": "Argint",     "correct": true},
                {"option": "Aur",      "correct": false},
                {"option": "Arsen",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Argintul este elementul chimic cu numărul atomic 47. Este un metal prețios, care a folosit în cursul istoriei la baterea monedelor și pentru crearea de bijuterii. În prezent, argintul are și o gamă largă de întrebuințări industriale.</p>",
            "incorrect": "<p><span>Umm...nu</span> Argintul este elementul chimic cu numărul atomic 47. Este un metal prețios, care a folosit în cursul istoriei la baterea monedelor și pentru crearea de bijuterii. În prezent, argintul are și o gamă largă de întrebuințări industriale.</p>" // no comma here
        },
        { // Question 28
            "q": "Cs",
            "a": [
                {"option": "Cobalt",    "correct": false},
                {"option": "Cesiu",     "correct": true},
                {"option": "Siliciu",      "correct": false},
                {"option": "Potasiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Cesiul este un element chimic din grupa metalelor alcaline cu simbolul Cs și cu numărul atomic 55. Din punct de vedere fizic, metalul este moale, de culoare argintie-aurie, cu un punct de topire de 28 °C (82 °F), aceasta făcându-l unul dintre singurele cinci metale care se pot afla în stare lichidă sau într-o stare de trecere dintre starea lichidă și cea solidă la temperatura camerei. </p>",
            "incorrect": "<p><span>Umm...nu</span> Cesiul este un element chimic din grupa metalelor alcaline cu simbolul Cs și cu numărul atomic 55. Din punct de vedere fizic, metalul este moale, de culoare argintie-aurie, cu un punct de topire de 28 °C (82 °F), aceasta făcându-l unul dintre singurele cinci metale care se pot afla în stare lichidă sau într-o stare de trecere dintre starea lichidă și cea solidă la temperatura camerei. </p>" // no comma here
        },
        { // Question 29
            "q": "Tm",
            "a": [
                {"option": "Terbiu",    "correct": false},
                {"option": "Tuliu",     "correct": true},
                {"option": "Toriu",      "correct": false},
                {"option": "Titan",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Tuliu (simbol Tm) este elementul chimic cu numărul atomic 69. A fost descoperit de Cleve în 1879 .</p>",
            "incorrect": "<p><span>Umm...nu</span> Tuliu (simbol Tm) este elementul chimic cu numărul atomic 69. A fost descoperit de Cleve în 1879 .</p>" // no comma here
        },
        { // Question 30
            "q": "Y",
            "a": [
                {"option": "Ytriu",    "correct": true},
                {"option": "Yterbiu",     "correct": false},
                {"option": "Wolfram",      "correct": false},
                {"option": "Darmstadtiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Ytriul este un element chimic notat cu simbolul Y și care are numărul atomic 39. Primul element al blocul d în a 5-a perioadă, ytriul este un metal de tranziție de culoare metalic-argintie, care prezintă caracteristici chimice similare lantanidelor, fiind astfel des clasificat ca un pământ rar.</p>",
            "incorrect": "<p><span>Umm...nu</span> Ytriul este un element chimic notat cu simbolul Y și care are numărul atomic 39. Primul element al blocul d în a 5-a perioadă, ytriul este un metal de tranziție de culoare metalic-argintie, care prezintă caracteristici chimice similare lantanidelor, fiind astfel des clasificat ca un pământ rar.</p>" // no comma here
        },
        { // Question 31
            "q": "Zr",
            "a": [
                {"option": "Zinc",    "correct": false},
                {"option": "Thor",     "correct": false},
                {"option": "Zirconiu",      "correct": true},
                {"option": "Tungsten",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Zirconiul este un element chimic din grupa metalelor, care are numărul atomic 40. Simbolul chimic este Zr.</p>",
            "incorrect": "<p><span>Umm...nu</span> Zirconiul este un element chimic din grupa metalelor, care are numărul atomic 40. Simbolul chimic este Zr.</p>" // no comma here
        },
        { // Question 32
            "q": "Pd",
            "a": [
                {"option": "Plumb",    "correct": false},
                {"option": "Potasiu",     "correct": false},
                {"option": "Praseodim",      "correct": false},
                {"option": "Paladiu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Paladiul este un element chimic cu simbolul Pd și cu numărul atomic 46. Paladiul este un metal rar, strălucitor, de culoare alb-argintiu, descoperit în 1803 de William Hyde Wollaston. Elementul este numit după asteroidul Pallas, care a fost denumit după epitetul zeiței grecești Atena, obținut de aceasta când l-a omorât pe Pallas.</p>",
            "incorrect": "<p><span>Umm...nu</span> Paladiul este un element chimic cu simbolul Pd și cu numărul atomic 46. Paladiul este un metal rar, strălucitor, de culoare alb-argintiu, descoperit în 1803 de William Hyde Wollaston. Elementul este numit după asteroidul Pallas, care a fost denumit după epitetul zeiței grecești Atena, obținut de aceasta când l-a omorât pe Pallas.</p>" // no comma here
        },
        { // Question 33
            "q": "Os",
            "a": [
                {"option": "Oxigen",    "correct": false},
                {"option": "Nobeliu",     "correct": false},
                {"option": "Osmiu",      "correct": true},
                {"option": "Lawrențiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Osmiu(Os)element chimic cu caracter metalic din grupa a VIII-a, număr atomic 76, masa atomică 190,2; structura straturilor electronice exterioare 5d66s2, valența II,III,IV,VI,VIII. În natură se găsește aliat cu iridiul. Metal alb-argintiu, d 22,70, punct de topire 2727 °C, punct de fierbere 4230 °C, duritate 7. Prezintă o activitate chimică redusă. Sub forma de pulbere se oxidează lent la aer, la temperatură obișnuită cu formare de OsO4. Nu este atacat de nici un acid (nici chiar de apa regală). Intră în compoziția unor aliaje alături de alte Metale Platinice.</p>",
            "incorrect": "<p><span>Umm...nu</span> Osmiu(Os)element chimic cu caracter metalic din grupa a VIII-a, număr atomic 76, masa atomică 190,2; structura straturilor electronice exterioare 5d66s2, valența II,III,IV,VI,VIII. În natură se găsește aliat cu iridiul. Metal alb-argintiu, d 22,70, punct de topire 2727 °C, punct de fierbere 4230 °C, duritate 7. Prezintă o activitate chimică redusă. Sub forma de pulbere se oxidează lent la aer, la temperatură obișnuită cu formare de OsO4. Nu este atacat de nici un acid (nici chiar de apa regală). Intră în compoziția unor aliaje alături de alte Metale Platinice.</p>" // no comma here
        },
        { // Question 34
            "q": "C",
            "a": [
                {"option": "Cobalt",    "correct": false},
                {"option": "Clor",     "correct": false},
                {"option": "Carbon",      "correct": true},
                {"option": "Cadmiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Carbonul este un element chimic cu simbolul C și numărul atomic 6. Este un element nemetalic tetravalent, ceea ce înseamnă că poate forma legături covalente prin punerea în comun a patru electroni. În natură sunt răspândiți trei izotopi, 12C și 13C fiind stabili, iar 14C este un izotop radioactiv cu un timp de înjumătățire de aproximativ 5.730 de ani.[1] Carbonul este unul dintre puținele elemente cunoscute din antichitate.</p>",
            "incorrect": "<p><span>Umm...nu</span> Carbonul este un element chimic cu simbolul C și numărul atomic 6. Este un element nemetalic tetravalent, ceea ce înseamnă că poate forma legături covalente prin punerea în comun a patru electroni. În natură sunt răspândiți trei izotopi, 12C și 13C fiind stabili, iar 14C este un izotop radioactiv cu un timp de înjumătățire de aproximativ 5.730 de ani.[1] Carbonul este unul dintre puținele elemente cunoscute din antichitate.</p>" // no comma here
        },
        { // Question 35
            "q": "Np",
            "a": [
                {"option": "Niobiu",    "correct": false},
                {"option": "Neptuniu",     "correct": true},
                {"option": "Lawrențiu",      "correct": false},
                {"option": "Nobeliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Neptuniul este un element chimic aflat pe poziția 93 în tabelul periodic al elementelor. Element cu caracter metalic radioactiv, neptuniul este primul element transuranic și aparține seriei actinidelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Neptuniul este un element chimic aflat pe poziția 93 în tabelul periodic al elementelor. Element cu caracter metalic radioactiv, neptuniul este primul element transuranic și aparține seriei actinidelor.</p>" // no comma here
        },
        { // Question 36
            "q": "Md",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Meitneriu",     "correct": false},
                {"option": "Mendeleeviu",      "correct": true},
                {"option": "Molibden",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Mendeleviu (denumire alternativă în română mendeleeviu) este elementul chimic cu număr atomic 101 și simbol Md.</p>",
            "incorrect": "<p><span>Umm...nu</span> Mendeleviu (denumire alternativă în română mendeleeviu) este elementul chimic cu număr atomic 101 și simbol Md.</p>" // no comma here
        },
        { // Question 37
            "q": "Bh",
            "a": [
                {"option": "Bohriu",    "correct": true},
                {"option": "Bor",     "correct": false},
                {"option": "Bismut",      "correct": false},
                {"option": "Berkeliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Bohriu este elementul chimic cu numărul atomic 107 și simbol chimic Bh. Este un element chimic radioactiv și este artificial. A fost descoperit de o echipă de cercetători din Germania, condusă de Peter Armbruster și Gottfried Münzenberg în 1981. El a fost denumit în cinstea fizicianului danez Niels Bohr.</p>",
            "incorrect": "<p><span>Umm...nu</span> Bohriu este elementul chimic cu numărul atomic 107 și simbol chimic Bh. Este un element chimic radioactiv și este artificial. A fost descoperit de o echipă de cercetători din Germania, condusă de Peter Armbruster și Gottfried Münzenberg în 1981. El a fost denumit în cinstea fizicianului danez Niels Bohr.</p>" // no comma here
        },
        { // Question 38
            "q": "Cm",
            "a": [
                {"option": "Cadmiu",    "correct": false},
                {"option": "Cesiu",     "correct": false},
                {"option": "Crom",      "correct": false},
                {"option": "Curiu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Curiul este un element chimic sintetic din sistemul periodic al elementelor cu simbolul Cm și numărul atomic 96. Este un metal radioactiv transuranic din seria actinidelor ce a fost obținut prin bombardarea unor atomi de plutoniu cu particule alfa (ioni de heliu). Numele a fost dat în onoarea savanților Marie și Pierre Curie.</p>",
            "incorrect": "<p><span>Umm...nu</span> Curiul este un element chimic sintetic din sistemul periodic al elementelor cu simbolul Cm și numărul atomic 96. Este un metal radioactiv transuranic din seria actinidelor ce a fost obținut prin bombardarea unor atomi de plutoniu cu particule alfa (ioni de heliu). Numele a fost dat în onoarea savanților Marie și Pierre Curie.</p>" // no comma here
        },
        { // Question 39
            "q": "Tc",
            "a": [
                {"option": "Tehnețiu",    "correct": true},
                {"option": "Terbiu",     "correct": false},
                {"option": "Cobalt",      "correct": false},
                {"option": "Coperniciu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Technețiul (pronunțat tehnețiu[1][2] și uneori scris astfel) este elementul chimic cu numărul atomic 43 și simbolul Tc. Este un metal de tranziție radioactiv, cel mai ușor element fără izotopi stabili. Pe Pămînt se găsește în cantități extrem de mici, în zăcămintele de uraniu sau molibden; pentru aplicații medicale și științifice technețiul este produs pe cale artificială. </p>",
            "incorrect": "<p><span>Umm...nu</span> Technețiul (pronunțat tehnețiu[1][2] și uneori scris astfel) este elementul chimic cu numărul atomic 43 și simbolul Tc. Este un metal de tranziție radioactiv, cel mai ușor element fără izotopi stabili. Pe Pămînt se găsește în cantități extrem de mici, în zăcămintele de uraniu sau molibden; pentru aplicații medicale și științifice technețiul este produs pe cale artificială. </p>" // no comma here
        },
        { // Question 40
            "q": "Cu",
            "a": [
                {"option": "Crom",    "correct": false},
                {"option": "Cupru",     "correct": true},
                {"option": "Carbon",      "correct": false},
                {"option": "Curiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Cuprul (numit și aramă) este un element din tabelul periodic având simbolul Cu și numărul atomic 29. Acesta este un metal de culoare roșcată, foarte bun conducător de electricitate și căldură. Cuprul a fost folosit de oameni din cele mai vechi timpuri, arheologii descoperind obiecte din acest metal datând din 8700 î.Hr. </p>",
            "incorrect": "<p><span>Umm...nu</span> Cuprul (numit și aramă) este un element din tabelul periodic având simbolul Cu și numărul atomic 29. Acesta este un metal de culoare roșcată, foarte bun conducător de electricitate și căldură. Cuprul a fost folosit de oameni din cele mai vechi timpuri, arheologii descoperind obiecte din acest metal datând din 8700 î.Hr. </p>" // no comma here
        },
        { // Question 41
            "q": "Te",
            "a": [
                {"option": "Tuliu",    "correct": false},
                {"option": "Tehnețiu",     "correct": false},
                {"option": "Telur",      "correct": true},
                {"option": "Taliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Telurul este un element chimic cu simbolul Te și numărul atomic 52.</p>",
            "incorrect": "<p><span>Umm...nu</span> Telurul este un element chimic cu simbolul Te și numărul atomic 52.</p>" // no comma here
        },
        { // Question 42
            "q": "Si",
            "a": [
                {"option": "Seleniu",    "correct": false},
                {"option": "Siliciu",     "correct": true},
                {"option": "Seaborgiu",      "correct": false},
                {"option": "Antimoniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Siliciul este un element chimic din grupa a IV-a a tabelului periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Siliciul este un element chimic din grupa a IV-a a tabelului periodic al elementelor.</p>" // no comma here
        },
        { // Question 43
            "q": "Sr",
            "a": [
                {"option": "Scandiu",    "correct": false},
                {"option": "Antimoniu",     "correct": false},
                {"option": "Stronțiu",      "correct": true},
                {"option": "Sulf",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Stronțiul este un element chimic din categoria metalelor alcalino-pămîntoase, care are numărul atomic 38. Simbolul chimic este Sr.</p>",
            "incorrect": "<p><span>Umm...nu</span> Stronțiul este un element chimic din categoria metalelor alcalino-pămîntoase, care are numărul atomic 38. Simbolul chimic este Sr.</p>" // no comma here
        },
        { // Question 44
            "q": "Cl",
            "a": [
                {"option": "Clor",    "correct": true},
                {"option": "Natriu",     "correct": false},
                {"option": "Sodiu",      "correct": false},
                {"option": "Carbon",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Clorul este elementul chimic cu numărul atomic 17, fiind notat cu simbolul Cl.</p>",
            "incorrect": "<p><span>Umm...nu</span> Clorul este elementul chimic cu numărul atomic 17, fiind notat cu simbolul Cl.</p>" // no comma here
        },
        { // Question 45
            "q": "Eu",
            "a": [
                {"option": "Einsteiniu",    "correct": false},
                {"option": "Europiu",     "correct": true},
                {"option": "Erbiu",      "correct": false},
                {"option": "Hafniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Europiu (simbol Eu) este elementul chimic cu numărul atomic 63. A fost descoperit de Eugène-Anatole Demarçay în 1901.</p>",
            "incorrect": "<p><span>Umm...nu</span> Europiu (simbol Eu) este elementul chimic cu numărul atomic 63. A fost descoperit de Eugène-Anatole Demarçay în 1901.</p>" // no comma here
        },
        { // Question 46
            "q": "Cn",
            "a": [
                {"option": "Lutețiu",    "correct": false},
                {"option": "Meitneriu",     "correct": false},
                {"option": "Coperniciu",      "correct": true},
                {"option": "Mercur",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Coperniciu este un element chimic cu simbolul Cn și numărul atomic 112. Este un element chimic sintetic și extrem de radioactiv, ce poate fi creat doar în laboratoare specializate în reacții nucleare. Cel mai stabil izotop, coperniciu-285, are un timp de injumatatire de doar 29 sec., dar este posibil ca acest izotop de coperniciu să aibă un izomer cu timp de înjumătățire mai lung, 8,9 min.</p>",
            "incorrect": "<p><span>Umm...nu</span> Coperniciu este un element chimic cu simbolul Cn și numărul atomic 112. Este un element chimic sintetic și extrem de radioactiv, ce poate fi creat doar în laboratoare specializate în reacții nucleare. Cel mai stabil izotop, coperniciu-285, are un timp de injumatatire de doar 29 sec., dar este posibil ca acest izotop de coperniciu să aibă un izomer cu timp de înjumătățire mai lung, 8,9 min.</p>" // no comma here
        },
        { // Question 47
            "q": "F",
            "a": [
                {"option": "Fosfor",    "correct": false},
                {"option": "Fluor",     "correct": true},
                {"option": "Franciu",      "correct": false},
                {"option": "Fier",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Fluorul este un element chimic din grupa 17 a sistemului periodic (după stilul vechi grupa a-VII-a principală sau VIIA), grupa halogenilor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Fluorul este un element chimic din grupa 17 a sistemului periodic (după stilul vechi grupa a-VII-a principală sau VIIA), grupa halogenilor.</p>" // no comma here
        },
        { // Question 48
            "q": "Fe",
            "a": [
                {"option": "Fermiu",    "correct": false},
                {"option": "Fier",     "correct": true},
                {"option": "Franciu",      "correct": false},
                {"option": "Potasiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Fierul este un element chimic metalic, notat cu simbolul Fe, ce are numărul atomic 26 și masa atomică 56. Este un metal aflat în prima grupă a metalelor tranziționale. Este elementul chimic cel mai întâlnit pe Terra, formând cea mai mare parte a nucleului acestei planete și este al patrulea element ca abundență în scoarța terestră.</p>",
            "incorrect": "<p><span>Umm...nu</span> Fierul este un element chimic metalic, notat cu simbolul Fe, ce are numărul atomic 26 și masa atomică 56. Este un metal aflat în prima grupă a metalelor tranziționale. Este elementul chimic cel mai întâlnit pe Terra, formând cea mai mare parte a nucleului acestei planete și este al patrulea element ca abundență în scoarța terestră.</p>" // no comma here
        },
        { // Question 49
            "q": "Er",
            "a": [
                {"option": "Erbiu",    "correct": true},
                {"option": "Europiu",     "correct": false},
                {"option": "Heliu",      "correct": false},
                {"option": "Einsteiniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Erbiu (simbol Er) este elementul chimic cu numărul atomic 68. A fost descoperit de Mosander în 1842. Când a fost izolat pentru prima dată, erbiul părea a fi un metal solid de culoare alb-argintie; el apare în combinații chimice cu alte elemente de pe Pământ. Însă, el este un element chimic rar, ce poate fi găsit în asociație cu alte elemente în mineralul numit gadolinit, mai ales din cel care provine din zona Ytterby, din Suedia.</p>",
            "incorrect": "<p><span>Umm...nu</span> Erbiu (simbol Er) este elementul chimic cu numărul atomic 68. A fost descoperit de Mosander în 1842. Când a fost izolat pentru prima dată, erbiul părea a fi un metal solid de culoare alb-argintie; el apare în combinații chimice cu alte elemente de pe Pământ. Însă, el este un element chimic rar, ce poate fi găsit în asociație cu alte elemente în mineralul numit gadolinit, mai ales din cel care provine din zona Ytterby, din Suedia.</p>" // no comma here
        },
       { // Question 50
            "q": "Co",
            "a": [
                {"option": "Cupru",    "correct": false},
                {"option": "Astatin",     "correct": false},
                {"option": "Crom",      "correct": false},
                {"option": "Cobalt",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Cobaltul este un element chimic, metal, cu numărul atomic 27 și simbolul Co. Acest metal a fost izolat pentru prima oară în 1730 de către chimistul suedez George Brandt.</p>",
            "incorrect": "<p><span>Umm...nu</span> Cobaltul este un element chimic, metal, cu numărul atomic 27 și simbolul Co. Acest metal a fost izolat pentru prima oară în 1730 de către chimistul suedez George Brandt.</p>" // no comma here
        },
        { // Question 51
            "q": "Pb",
            "a": [
                {"option": "Potasiu",    "correct": false},
                {"option": "Rubidiu",     "correct": false},
                {"option": "Plumb",      "correct": true},
                {"option": "Plutoniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Plumbul este elementul chimic cu numărul 82 în tabelul periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Plumbul este elementul chimic cu numărul 82 în tabelul periodic al elementelor.</p>" // no comma here
        },
        { // Question 52
            "q": "Nd",
            "a": [
                {"option": "Neon",    "correct": false},
                {"option": "Kaliu",     "correct": false},
                {"option": "Neodim",      "correct": true},
                {"option": "Dubniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Neodim (simbol Nd) este elementul chimic cu numărul atomic 60. A fost descoperit de chimistul austriac Carl Auer von Welsbach[1] în 1895.</p>",
            "incorrect": "<p><span>Umm...nu</span> Neodim (simbol Nd) este elementul chimic cu numărul atomic 60. A fost descoperit de chimistul austriac Carl Auer von Welsbach[1] în 1895.</p>" // no comma here
        },
        { // Question 53
            "q": "Mo",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Molibden",     "correct": true},
                {"option": "Osmiu",      "correct": false},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Molibdenul este un metal tranzițional din grupa 6 aflat în poziția 42 în tabelul periodic al elementelor. Simbolul chimic este Mo. </p>",
            "incorrect": "<p><span>Umm...nu</span> Molibdenul este un metal tranzițional din grupa 6 aflat în poziția 42 în tabelul periodic al elementelor. Simbolul chimic este Mo. </p>" // no comma here
        },
        { // Question 54
            "q": "Al",
            "a": [
                {"option": "Aluminiu",    "correct": true},
                {"option": "Argint",     "correct": false},
                {"option": "Aur",      "correct": false},
                {"option": "Actiniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Aluminiul este un element chimic, notat cu simbolul Al. Numărul atomic al aluminiului are valoarea 13, iar masa atomică este 26.97. Este un element chimic comun, ocupând poziția a treia, după oxigen și siliciu, ca răspândire terestră, existând în procent de 7.4%.</p>",
            "incorrect": "<p><span>Umm...nu</span> Aluminiul este un element chimic, notat cu simbolul Al. Numărul atomic al aluminiului are valoarea 13, iar masa atomică este 26.97. Este un element chimic comun, ocupând poziția a treia, după oxigen și siliciu, ca răspândire terestră, existând în procent de 7.4%.</p>" // no comma here
        },
        { // Question 55
            "q": "Ca",
            "a": [
                {"option": "Cupru",    "correct": false},
                {"option": "Cadmiu",     "correct": false},
                {"option": "Carbon",      "correct": false},
                {"option": "Calciu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Calciul este elementul chimic cu numărul 20 în tabelul periodic al elementelor. Este un metal alcalino-pământos . Calciul este un metal alcalino-pământos de culoare gri,cel de-al cincea element din punct de vedere al răspândirii în scoarța terestră.</p>",
            "incorrect": "<p><span>Umm...nu</span> Calciul este elementul chimic cu numărul 20 în tabelul periodic al elementelor. Este un metal alcalino-pământos . Calciul este un metal alcalino-pământos de culoare gri,cel de-al cincea element din punct de vedere al răspândirii în scoarța terestră.</p>" // no comma here
        },
        { // Question 56
            "q": "Es",
            "a": [
                {"option": "Erbiu",    "correct": false},
                {"option": "Seaborgiu",     "correct": false},
                {"option": "Einsteiniu",      "correct": true},
                {"option": "Europiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Einsteiniu este un element sintetic din sistemul periodic al elementelor care are ca simbol Es și un număr atomic egal cu 99.Einsteiniu, un element transuranic, metallic și extrem de radioactiv (al-7-lea in seria actinidelor) , este obținut prin bombardarea plutoniului cu neutroni și a fost descoperit în deșeurile primului test al unei bombe cu hidrogen . A fost numit după Albert Einstein și nu are nici un folos cunoscut.</p>",
            "incorrect": "<p><span>Umm...nu</span> Einsteiniu este un element sintetic din sistemul periodic al elementelor care are ca simbol Es și un număr atomic egal cu 99.Einsteiniu, un element transuranic, metallic și extrem de radioactiv (al-7-lea in seria actinidelor) , este obținut prin bombardarea plutoniului cu neutroni și a fost descoperit în deșeurile primului test al unei bombe cu hidrogen . A fost numit după Albert Einstein și nu are nici un folos cunoscut.</p>" // no comma here
        },
        { // Question 57
            "q": "W",
            "a": [
                {"option": "Toriu",    "correct": false},
                {"option": "Wolfram",     "correct": true},
                {"option": "Tungsten",      "correct": true},
                {"option": "Yterbiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Wolframul (numit și tungsten) este un element chimic din grupa metalelor situat în poziția 74 în tabelul periodic al elementelor. Simbolul chimic este W. Wolframul este un metal cu luciu alb-argintiu, ce cristalizează în sistemul cubic cu volum centrat fără a mai avea și alte forme alotropice.</p>",
            "incorrect": "<p><span>Umm...nu</span> Wolframul (numit și tungsten) este un element chimic din grupa metalelor situat în poziția 74 în tabelul periodic al elementelor. Simbolul chimic este W. Wolframul este un metal cu luciu alb-argintiu, ce cristalizează în sistemul cubic cu volum centrat fără a mai avea și alte forme alotropice.</p>" // no comma here
        },
        { // Question 58
            "q": "Ba",
            "a": [
                {"option": "Beriliu",    "correct": false},
                {"option": "Bariu",     "correct": true},
                {"option": "Bor",      "correct": false},
                {"option": "Mismut",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Bariul este un element chimic cu simbolul Ba și numărul atomic 56. În tabelul periodic al elementelor se găsește în perioada a șasea și grupa a II-a principală, fiind astfel un metal alcalino-pământos.</p>",
            "incorrect": "<p><span>Umm...nu</span> Bariul este un element chimic cu simbolul Ba și numărul atomic 56. În tabelul periodic al elementelor se găsește în perioada a șasea și grupa a II-a principală, fiind astfel un metal alcalino-pământos.</p>" // no comma here
        },
        { // Question 59
            "q": "As",
            "a": [
                {"option": "Arsen",    "correct": true},
                {"option": "Sodiu",     "correct": false},
                {"option": "Americiu",      "correct": false},
                {"option": "Astatin",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Arsenul este un element chimic semi-metalic, care are simbolul As și numărul atomic 33. El se afla in grupa a V-A principala(15) si perioada a 4-a.</p>",
            "incorrect": "<p><span>Umm...nu</span> Arsenul este un element chimic semi-metalic, care are simbolul As și numărul atomic 33. El se afla in grupa a V-A principala(15) si perioada a 4-a.</p>" // no comma here
        },
        { // Question 60
            "q": "Mt",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Molibden",     "correct": false},
                {"option": "Meitneriu",      "correct": true},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Meitneriu este element chimic cu numărul atomic 109 și simbol Mt. Este un metal tranzițional artificial, puternic radioactiv.</p>",
            "incorrect": "<p><span>Umm...nu</span> Meitneriu este element chimic cu numărul atomic 109 și simbol Mt. Este un metal tranzițional artificial, puternic radioactiv.</p>" // no comma here
        },
        { // Question 61
            "q": "Kr",
            "a": [
                {"option": "Toriu",    "correct": false},
                {"option": "Potasiu",     "correct": false},
                {"option": "Kripton",      "correct": true},
                {"option": "Uraniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Kriptonul (simbol - Kr) este un element chimic monoatomic din grupa gazelor nobile, perioada a 4-a, care ocupă poziția 36 în tabelul periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Kriptonul (simbol - Kr) este un element chimic monoatomic din grupa gazelor nobile, perioada a 4-a, care ocupă poziția 36 în tabelul periodic al elementelor.</p>" // no comma here
        },
        { // Question 62
            "q": "Am",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Astatin",     "correct": false},
                {"option": "Americiu",      "correct": true},
                {"option": "Aluminiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Americiul este un element chimic sintetic din sistemul periodic al elementelor cu simbolul Am și numărul atomic 95. Este un metal radioactiv din seria actinidelor. </p>",
            "incorrect": "<p><span>Umm...nu</span> Americiul este un element chimic sintetic din sistemul periodic al elementelor cu simbolul Am și numărul atomic 95. Este un metal radioactiv din seria actinidelor. </p>" // no comma here
        },
        { // Question 63
            "q": "Cf",
            "a": [
                {"option": "Californiu",    "correct": true},
                {"option": "Ceriu",     "correct": false},
                {"option": "Curiu",      "correct": false},
                {"option": "Coperniciu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Californiul este un element chimic sintetic din sistemul periodic al elementelor cu simbolul Cf și numărul atomic 98. Este un metal radioactiv din seria actinidelor care a fost obținut în 1950 prin bombardarea unor atomi de curiu cu particule alfa (ioni de heliu).</p>",
            "incorrect": "<p><span>Umm...nu</span> Californiul este un element chimic sintetic din sistemul periodic al elementelor cu simbolul Cf și numărul atomic 98. Este un metal radioactiv din seria actinidelor care a fost obținut în 1950 prin bombardarea unor atomi de curiu cu particule alfa (ioni de heliu).</p>" // no comma here
        },
        { // Question 64
            "q": "Ds",
            "a": [
                {"option": "Disprosiu",    "correct": false},
                {"option": "Darmstadtiu",     "correct": true},
                {"option": "Scandiu",      "correct": false},
                {"option": "Dubmiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Darmstadtiul (simbol Ds), cunoscut anterior sub numele de ununnilium, este un element chimic cu numărul atomic 110, descoperit de Societatea pentru Cercetarea Ionilor Grei în 1994 (elementul e numit după orașul în care își are sediul această societate).</p>",
            "incorrect": "<p><span>Umm...nu</span> Darmstadtiul (simbol Ds), cunoscut anterior sub numele de ununnilium, este un element chimic cu numărul atomic 110, descoperit de Societatea pentru Cercetarea Ionilor Grei în 1994 (elementul e numit după orașul în care își are sediul această societate).</p>" // no comma here
        },
        { // Question 65
            "q": "La",
            "a": [
                {"option": "Lawrențiu",    "correct": false},
                {"option": "Litiu",     "correct": false},
                {"option": "Lutețiu",      "correct": false},
                {"option": "Lantan",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Lantanul este un element chimic din tabelul periodic, notat cu simbolul La, care are numărul atomic 57.</p>",
            "incorrect": "<p><span>Umm...nu</span> Lantanul este un element chimic din tabelul periodic, notat cu simbolul La, care are numărul atomic 57.</p>" // no comma here
        },
        { // Question 66
            "q": "Gd",
            "a": [
                {"option": "Galiu",    "correct": false},
                {"option": "Germaniu",     "correct": false},
                {"option": "Osmiu",      "correct": false},
                {"option": "Gadoliniu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Gadoliniu (simbol Gd) este elementul chimic cu numărul atomic 64. A fost descoperit de Marignac în 1880 .</p>",
            "incorrect": "<p><span>Umm...nu</span> Gadoliniu (simbol Gd) este elementul chimic cu numărul atomic 64. A fost descoperit de Marignac în 1880 .</p>" // no comma here
        },
        { // Question 67
            "q": "Hg",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Mercur",     "correct": true},
                {"option": "Hidrogen",      "correct": false},
                {"option": "Mangan",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Mercurul este un element chimic reprezentat prin simbolul Hg și care are numărul atomic 80.</p>",
            "incorrect": "<p><span>Umm...nu</span> Mercurul este un element chimic reprezentat prin simbolul Hg și care are numărul atomic 80.</p>" // no comma here
        },
        { // Question 68
            "q": "Ar",
            "a": [
                {"option": "Argon",    "correct": true},
                {"option": "Americiu",     "correct": false},
                {"option": "Arsen",      "correct": false},
                {"option": "Aur",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Argonul este un element chimic aflat pe poziția a 18-a în tabelul periodic al elementelor. Se găsește sub formă gazoasă, reprezentând 0,94% din atmosfera terestră. Pe Pământ este cel mai des întâlnit și folosit gaz nobil.</p>",
            "incorrect": "<p><span>Umm...nu</span> Argonul este un element chimic aflat pe poziția a 18-a în tabelul periodic al elementelor. Se găsește sub formă gazoasă, reprezentând 0,94% din atmosfera terestră. Pe Pământ este cel mai des întâlnit și folosit gaz nobil.</p>" // no comma here
        },
        { // Question 69
            "q": "No",
            "a": [
                {"option": "Lantan",    "correct": false},
                {"option": "Xenon",     "correct": false},
                {"option": "Seleniu",      "correct": false},
                {"option": "Nobeliu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Nobeliul este un element sintetic în tabelul periodic al elementelor care are simbolul No și numărul atomic 102. Un element metalic radioactiv transuranic în seria actinidelor, nobeliul este sintetizat prin bombardarea curiului cu ioni de carbon.</p>",
            "incorrect": "<p><span>Umm...nu</span> Nobeliul este un element sintetic în tabelul periodic al elementelor care are simbolul No și numărul atomic 102. Un element metalic radioactiv transuranic în seria actinidelor, nobeliul este sintetizat prin bombardarea curiului cu ioni de carbon.</p>" // no comma here
        },
        { // Question 70
            "q": "Ge",
            "a": [
                {"option": "Galiu",    "correct": false},
                {"option": "Germaniu",     "correct": true},
                {"option": "Rodiu",      "correct": false},
                {"option": "Osmiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Germaniul este un element chimic, notat cu simbolul Ge, al cărui număr atomic este 32. Este un metaloid lucios, dens, de culoare gri, ce posedă proprietăți chimice similare cu staniul și siliciul.</p>",
            "incorrect": "<p><span>Umm...nu</span> Germaniul este un element chimic, notat cu simbolul Ge, al cărui număr atomic este 32. Este un metaloid lucios, dens, de culoare gri, ce posedă proprietăți chimice similare cu staniul și siliciul.</p>" // no comma here
        },
        { // Question 71
            "q": "Be",
            "a": [
                {"option": "Bor",    "correct": false},
                {"option": "Bariu",     "correct": false},
                {"option": "Beriliu",      "correct": true},
                {"option": "Berkeliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Beriliul este un element chimic notat cu simbolul Be și care are numărul atomic 4. Este un element produs prin intermediul nucleosintezei stelare și este un element relativ rar în Univers.</p>",
            "incorrect": "<p><span>Umm...nu</span> Beriliul este un element chimic notat cu simbolul Be și care are numărul atomic 4. Este un element produs prin intermediul nucleosintezei stelare și este un element relativ rar în Univers.</p>" // no comma here
        },
        { // Question 72
            "q": "Pt",
            "a": [
                {"option": "Platină",    "correct": true},
                {"option": "Plumb",     "correct": false},
                {"option": "Paladiu",      "correct": false},
                {"option": "Fosfor",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Platina este un element chimic din grupa metalelor platinice, aflat în poziția 78 în tabelul periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Platina este un element chimic din grupa metalelor platinice, aflat în poziția 78 în tabelul periodic al elementelor.</p>" // no comma here
        },
        { // Question 73
            "q": "Yb",
            "a": [
                {"option": "Yterbiu",    "correct": true},
                {"option": "Berkeli",     "correct": false},
                {"option": "Ytriu",      "correct": false},
                {"option": "Vanadiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Yterbiul este un element chimic din tabelul periodic care are simbolul Yb și numărul atomic 70. Din punct de vedere fizic este o substață metalică moale, de culoare argintie; yterbiul este un pământ rar din seria lantanidelor și în natură este răspândit sub forma unor compuși în compoziția unor minerale ca: gadolinita, monazita și xenotimul.</p>",
            "incorrect": "<p><span>Umm...nu</span> Yterbiul este un element chimic din tabelul periodic care are simbolul Yb și numărul atomic 70. Din punct de vedere fizic este o substață metalică moale, de culoare argintie; yterbiul este un pământ rar din seria lantanidelor și în natură este răspândit sub forma unor compuși în compoziția unor minerale ca: gadolinita, monazita și xenotimul.</p>" // no comma here
        },
        { // Question 74
            "q": "Ni",
            "a": [
                {"option": "Natriu",    "correct": false},
                {"option": "Sodiu",     "correct": false},
                {"option": "Nichel",      "correct": true},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Nichelul (simbol: Ni, număr atomic: 28) este un metal răspândit în diverse produse chimice și aliaje, constituind circa 0,008 % din scoarța Pământului. Acest lucru face ca omul să fie încontinuu expus la acest metal.</p>",
            "incorrect": "<p><span>Umm...nu</span> Nichelul (simbol: Ni, număr atomic: 28) este un metal răspândit în diverse produse chimice și aliaje, constituind circa 0,008 % din scoarța Pământului. Acest lucru face ca omul să fie încontinuu expus la acest metal.</p>" // no comma here
        },
        { // Question 75
            "q": "Nb",
            "a": [
                {"option": "Neodim",    "correct": false},
                {"option": "Nobeliu",     "correct": true},
                {"option": "Neon",      "correct": false},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Niobiul (cunoscut și sub precedenta denumire de columbiu, notat cu Cb) este un element chimic notat cu simbolul Nb,care prezintă numărul atomic 41. Este un metal de tranziție moale, de culoare gri, ductil, fiind găsit des în mineralul piroclor (principala sursă comercială de niobiu) și în columbită.</p>",
            "incorrect": "<p><span>Umm...nu</span> Niobiul (cunoscut și sub precedenta denumire de columbiu, notat cu Cb) este un element chimic notat cu simbolul Nb,care prezintă numărul atomic 41. Este un metal de tranziție moale, de culoare gri, ductil, fiind găsit des în mineralul piroclor (principala sursă comercială de niobiu) și în columbită.</p>" // no comma here
        },
        { // Question 76
            "q": "Ce",
            "a": [
                {"option": "Crom",    "correct": false},
                {"option": "Cesiu",     "correct": false},
                {"option": "Ceriu",      "correct": true},
                {"option": "Clor",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Ceriul este un element chimic din tabelul periodic care are simbolul Ce și numărul atomic 58.</p>",
            "incorrect": "<p><span>Umm...nu</span> Ceriul este un element chimic din tabelul periodic care are simbolul Ce și numărul atomic 58.</p>" // no comma here
        },
        { // Question 77
            "q": "Fr",
            "a": [
                {"option": "Magneziu",    "correct": false},
                {"option": "Molibden",     "correct": false},
                {"option": "Franciu",      "correct": true},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Franciul este un element chimic cu simbolul Fr și numărul atomic 87. În trecut era cunoscut ca eka-cesiu și actiniu K. E unul din cele două elemente cel mai puțin electronegative, celălalt fiind cesiul. Franciul este un metal foarte radioactiv ce se descompune în astatiniu, radiu și radon. Fiind un metal alcalin, are valența unu.</p>",
            "incorrect": "<p><span>Umm...nu</span> Franciul este un element chimic cu simbolul Fr și numărul atomic 87. În trecut era cunoscut ca eka-cesiu și actiniu K. E unul din cele două elemente cel mai puțin electronegative, celălalt fiind cesiul. Franciul este un metal foarte radioactiv ce se descompune în astatiniu, radiu și radon. Fiind un metal alcalin, are valența unu.</p>" // no comma here
        },
        { // Question 78
            "q": "Bk",
            "a": [
                {"option": "Berkeliu",    "correct": true},
                {"option": "Kripton",     "correct": false},
                {"option": "Osmiu",      "correct": false},
                {"option": "Bor",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Berkeliul este un element chimic, transuranic și radioactiv cu simbolul Bk și numărul atomic 97, făcând totodată parte și din seria actinidelor. A fost numit după orașul Berkeley, din California, locul unde se află University of California Radiation Laboratory și unde acesta a fost descoperit în luna decembrie a anului 1949. Berkeliul a fost a cincilea element transuranian descoperit, după neptuniu, plutoniu, curiu și americiu.</p>",
            "incorrect": "<p><span>Umm...nu</span> Berkeliul este un element chimic, transuranic și radioactiv cu simbolul Bk și numărul atomic 97, făcând totodată parte și din seria actinidelor. A fost numit după orașul Berkeley, din California, locul unde se află University of California Radiation Laboratory și unde acesta a fost descoperit în luna decembrie a anului 1949. Berkeliul a fost a cincilea element transuranian descoperit, după neptuniu, plutoniu, curiu și americiu.</p>" // no comma here
        },
        { // Question 79
            "q": "Xe",
            "a": [
                {"option": "Xenon",    "correct": true},
                {"option": "Oxigen",     "correct": false},
                {"option": "Roentegeniu",      "correct": false},
                {"option": "Apă oxigenată",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Xenonul este un element chimic cu simbolul chimic Xe și cu numărul atomic egal cu 54. Este un gaz nobil, incolor, greu, fiind găsit în atmosfera Terrei în cantități mici.</p>",
            "incorrect": "<p><span>Umm...nu</span> Xenonul este un element chimic cu simbolul chimic Xe și cu numărul atomic egal cu 54. Este un gaz nobil, incolor, greu, fiind găsit în atmosfera Terrei în cantități mici.</p>" // no comma here
        },
        { // Question 80
            "q": "Th",
            "a": [
                {"option": "Telur",    "correct": false},
                {"option": "Toriu",     "correct": true},
                {"option": "Tehnețiu",      "correct": false},
                {"option": "Tantal",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Thoriul este un element chimic natural radioactiv cu numărul atomic 90 și simbol chimic Th, ce se găsește în natură (izotopul său cel mai stabil 232Th, care are un timp de înjumătățire de peste 14 milioane de ani).</p>",
            "incorrect": "<p><span>Umm...nu</span> Thoriul este un element chimic natural radioactiv cu numărul atomic 90 și simbol chimic Th, ce se găsește în natură (izotopul său cel mai stabil 232Th, care are un timp de înjumătățire de peste 14 milioane de ani).</p>" // no comma here
        },
        { // Question 81
            "q": "Kr",
            "a": [
                {"option": "Potasiu",    "correct": false},
                {"option": "Kripton",     "correct": true},
                {"option": "Osmiu",      "correct": false},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Kriptonul (simbol - Kr) este un element chimic monoatomic din grupa gazelor nobile, perioada a 4-a, care ocupă poziția 36 în tabelul periodic al elementelor. Este un element nereactiv, ca și celelalte gaze nobile, formând un singur compus cunoscut, Fluorura de kripton (KrF2).</p>",
            "incorrect": "<p><span>Umm...nu</span> Kriptonul (simbol - Kr) este un element chimic monoatomic din grupa gazelor nobile, perioada a 4-a, care ocupă poziția 36 în tabelul periodic al elementelor. Este un element nereactiv, ca și celelalte gaze nobile, formând un singur compus cunoscut, Fluorura de kripton (KrF2).</p>" // no comma here
        },
        { // Question 82
            "q": "Dy",
            "a": [
                {"option": "Dubniu",    "correct": false},
                {"option": "Darmstadtiu",     "correct": false},
                {"option": "Disprosiu",      "correct": true},
                {"option": "Yterbiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Disprosiu (simbol Dy) este elementul chimic cu numărul atomic 66. A fost descoperit de Paul Emile Lecoq de Boisbaudran în 1886.</p>",
            "incorrect": "<p><span>Umm...nu</span> Disprosiu (simbol Dy) este elementul chimic cu numărul atomic 66. A fost descoperit de Paul Emile Lecoq de Boisbaudran în 1886.</p>" // no comma here
        },
        { // Question 83
            "q": "Pr",
            "a": [
                {"option": "Praseodim",    "correct": true},
                {"option": "Reniu",     "correct": false},
                {"option": "Promețiu",      "correct": false},
                {"option": "Proactiniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Praseodim (simbol Pr) este elementul chimic, din familia pământurilor rare, cu numărul atomic 59. A fost descoperit de Carl Auer von Welsbach în 1895 . Cei mai răspândiți compuși sunt sulfatul și clorura de praseodim.</p>",
            "incorrect": "<p><span>Umm...nu</span> Praseodim (simbol Pr) este elementul chimic, din familia pământurilor rare, cu numărul atomic 59. A fost descoperit de Carl Auer von Welsbach în 1895 . Cei mai răspândiți compuși sunt sulfatul și clorura de praseodim.</p>" // no comma here
        },
        { // Question 84
            "q": "Sm",
            "a": [
                {"option": "Stibiu",    "correct": false},
                {"option": "Antimoniu",     "correct": false},
                {"option": "Samariu",      "correct": true},
                {"option": "Seaborgiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Samariu (simbol Sm) este elementul chimic cu numărul atomic 62. Este un metal destul de tare și argintiu care se oxidează rapid în aer.</p>",
            "incorrect": "<p><span>Umm...nu</span> Samariu (simbol Sm) este elementul chimic cu numărul atomic 62. Este un metal destul de tare și argintiu care se oxidează rapid în aer.</p>" // no comma here
        },
        { // Question 85
            "q": "Db",
            "a": [
                {"option": "Dubniu",    "correct": true},
                {"option": "Bor",     "correct": false},
                {"option": "Cadmiu",      "correct": false},
                {"option": "Darmstadtiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Dubniu este elementul chimic cu numărul atomic 105 și simbol chimic Db. Acest element chimic a fost denumit după orașul Dubna, Rusia, locul unde a fost produs prima oară. Este un element chimic sintetic și radioactiv; cel mai stabil izotop al său (268Db) are timp de înjumătățire de aproximativ 28 ore.</p>",
            "incorrect": "<p><span>Umm...nu</span> Dubniu este elementul chimic cu numărul atomic 105 și simbol chimic Db. Acest element chimic a fost denumit după orașul Dubna, Rusia, locul unde a fost produs prima oară. Este un element chimic sintetic și radioactiv; cel mai stabil izotop al său (268Db) are timp de înjumătățire de aproximativ 28 ore.</p>" // no comma here
        },
        { // Question 86
            "q": "P",
            "a": [
                {"option": "Potasiu",    "correct": false},
                {"option": "Fosfor",     "correct": true},
                {"option": "Kaliu",      "correct": false},
                {"option": "Fluor",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Fosforul este un element din tabelul periodic având simbolul P și numărul atomic 15.</p>",
            "incorrect": "<p><span>Umm...nu</span> Fosforul este un element din tabelul periodic având simbolul P și numărul atomic 15.</p>" // no comma here
        },

        { // Question 87
            "q": "Bi",
            "a": [
                {"option": "Bariu",    "correct": false},
                {"option": "Bismut",     "correct": true},
                {"option": "Beriliu",      "correct": false},
                {"option": "Bohriu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Bismutul este un element chimic aflat în poziția 83 din tabelul periodic al elementelor. SImbolul chimic este Bi.</p>",
            "incorrect": "<p><span>Umm...nu</span> Bismutul este un element chimic aflat în poziția 83 din tabelul periodic al elementelor. SImbolul chimic este Bi.</p>" // no comma here
        },
        { // Question 88
            "q": "Lu",
            "a": [
                {"option": "Lutețiu",    "correct": true},
                {"option": "Molibden",     "correct": false},
                {"option": "Lawrențiu",      "correct": false},
                {"option": "Litiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Lutețiul este un element chimic cu simbolul Lu și cu numărul atomic 71. Este ultimul element din seria lantanidelor, care, împreună cu contracția lantanidelor, explică câteva proprietăți importante ale lutețiului, astfel el este cel mai dur și mai dens lantanid.</p>",
            "incorrect": "<p><span>Umm...nu</span> Lutețiul este un element chimic cu simbolul Lu și cu numărul atomic 71. Este ultimul element din seria lantanidelor, care, împreună cu contracția lantanidelor, explică câteva proprietăți importante ale lutețiului, astfel el este cel mai dur și mai dens lantanid.</p>" // no comma here
        },
        { // Question 89
            "q": "Hf",
            "a": [
                {"option": "Mercur",    "correct": false},
                {"option": "Heliu",     "correct": false},
                {"option": "Hidrogen",      "correct": false},
                {"option": "Hafniu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Hafniul este un element chimic din categoria metalelor. Are numărul atomic 72 și simbolul chimic Hf. Este un metal alb-argintiu similar titaniului, cu o mare capacitate de a absorbi neutroni.</p>",
            "incorrect": "<p><span>Umm...nu</span> Hafniul este un element chimic din categoria metalelor. Are numărul atomic 72 și simbolul chimic Hf. Este un metal alb-argintiu similar titaniului, cu o mare capacitate de a absorbi neutroni.</p>" // no comma here
        },
        { // Question 90
            "q": "Pu",
            "a": [
                {"option": "Plumb",    "correct": false},
                {"option": "Molibden",     "correct": false},
                {"option": "Osmiu",      "correct": false},
                {"option": "Plutoniu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Plutoniul este un element chimic din grupa actinidelor având numărul atomic 94 și simbolul chimic Pu.</p>",
            "incorrect": "<p><span>Umm...nu</span> Plutoniul este un element chimic din grupa actinidelor având numărul atomic 94 și simbolul chimic Pu.</p>" // no comma here
        },
        { // Question 91
            "q": "S",
            "a": [
                {"option": "Sodiu",    "correct": false},
                {"option": "Siliciu",     "correct": false},
                {"option": "Sulf",      "correct": true},
                {"option": "Samariu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Sulful (numit și pucioasă) este elementul chimic cu simbolul S și cu numărul atomic 16. Este un nemetal polivalent abundent în natură. În condiții standard de temperatură și presiune, moleculele de sulf prezintă o aranjare octatomică, având formula S8. </p>",
            "incorrect": "<p><span>Umm...nu</span> Sulful (numit și pucioasă) este elementul chimic cu simbolul S și cu numărul atomic 16. Este un nemetal polivalent abundent în natură. În condiții standard de temperatură și presiune, moleculele de sulf prezintă o aranjare octatomică, având formula S8. </p>" // no comma here
        },
        { // Question 92
            "q": "Ti",
            "a": [
                {"option": "Telur",    "correct": false},
                {"option": "Titan",     "correct": true},
                {"option": "Toriu",      "correct": false},
                {"option": "Terbiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Titanul este un element chimic cu simbolul Ti și numărul atomic 22. Are o densitate mică și este un metal de tranziție dur, lucios și rezistent la coroziune (inclusiv față de apa de mare, apa regală și clor), cu o culoare argintie.</p>",
            "incorrect": "<p><span>Umm...nu</span> Titanul este un element chimic cu simbolul Ti și numărul atomic 22. Are o densitate mică și este un metal de tranziție dur, lucios și rezistent la coroziune (inclusiv față de apa de mare, apa regală și clor), cu o culoare argintie..</p>" // no comma here
        },
        { // Question 93
            "q": "In",
            "a": [
                {"option": "Indiu",    "correct": true},
                {"option": "Iod",     "correct": false},
                {"option": "Iridiu",      "correct": false},
                {"option": "Heliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Indiul este un element chimic din categoria metalelor, avînd numărul atomic 49. Simbolul chimic este In.</p>",
            "incorrect": "<p><span>Umm...nu</span> Indiul este un element chimic din categoria metalelor, avînd numărul atomic 49. Simbolul chimic este In.</p>" // no comma here
        },
        { // Question 94
            "q": "Lr",
            "a": [
                {"option": "Lawrențiu",    "correct": true},
                {"option": "Lantan",     "correct": false},
                {"option": "Lutețiu",      "correct": false},
                {"option": "Litiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Lawrenciu este un element chimic artificial și radioactiv, aparținând actinidelor, și având ca simbol chimic Lr. Lawrenciul a fost sintetizat pentru prima dată la 14 februarie 1961, de o echipă de fizicieni, condusă de Albert Ghiorso, experți în fizică nucleară de la Laboratorul Național Lawrence Berkeley, din cadrul Universității California.</p>",
            "incorrect": "<p><span>Umm...nu</span> Lawrenciu este un element chimic artificial și radioactiv, aparținând actinidelor, și având ca simbol chimic Lr. Lawrenciul a fost sintetizat pentru prima dată la 14 februarie 1961, de o echipă de fizicieni, condusă de Albert Ghiorso, experți în fizică nucleară de la Laboratorul Național Lawrence Berkeley, din cadrul Universității California.</p>" // no comma here
        },
        { // Question 95
            "q": "Br",
            "a": [
                {"option": "Bariu",    "correct": false},
                {"option": "Bor",     "correct": false},
                {"option": "Brom",      "correct": true},
                {"option": "Beriliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Bromul este un element chimic notat cu simbolul chimic Br. Numărul său atomic este 35 iar masa sa atomică este de 79,909 u.a.m.. Bromul face parte din grupa halogenilor (grupa a VII-a principală), împreună cu fluorul, clorul, iodul și astatinul.</p>",
            "incorrect": "<p><span>Umm...nu</span> Bromul este un element chimic notat cu simbolul chimic Br. Numărul său atomic este 35 iar masa sa atomică este de 79,909 u.a.m.. Bromul face parte din grupa halogenilor (grupa a VII-a principală), împreună cu fluorul, clorul, iodul și astatinul.</p>" // no comma here
        },
        { // Question 96
            "q": "Ne",
            "a": [
                {"option": "Sodiu",    "correct": false},
                {"option": "Neon",     "correct": true},
                {"option": "Natriu",      "correct": false},
                {"option": "Niobiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Neonul un element chimic cu simbolul Ne și numărul atomic 10. Este un gaz nobil, situat în grupa a 18 a tabelului periodic.</p>",
            "incorrect": "<p><span>Umm...nu</span> Neonul un element chimic cu simbolul Ne și numărul atomic 10. Este un gaz nobil, situat în grupa a 18 a tabelului periodic.</p>" // no comma here
        },
        { // Question 97
            "q": "Po",
            "a": [
                {"option": "Poloniu",    "correct": true},
                {"option": "Proactiniu",     "correct": false},
                {"option": "Promețiu",      "correct": false},
                {"option": "Platină",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Poloniul este elementul chimic cu numărul atomic 84 în tabelul periodic al elementelor. Simbolul chimic este Po. Este un element radioactiv, emițând radiații alfa.</p>",
            "incorrect": "<p><span>Umm...nu</span> Poloniul este elementul chimic cu numărul atomic 84 în tabelul periodic al elementelor. Simbolul chimic este Po. Este un element radioactiv, emițând radiații alfa.</p>" // no comma here
        },
        { // Question 98
            "q": "Cd",
            "a": [
                {"option": "Cadmiu",    "correct": true},
                {"option": "Californiu",     "correct": false},
                {"option": "Calciu",      "correct": false},
                {"option": "Carbon",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Cadmiul este elementul chimic cu simbolul Cd și numărul atomic 48. Acest metal alb-strălucitor este asemănător din punct de vedere chimic cu alte două elemente chimice din grupa 12, zincul și mercurul.</p>",
            "incorrect": "<p><span>Umm...nu</span> Cadmiul este elementul chimic cu simbolul Cd și numărul atomic 48. Acest metal alb-strălucitor este asemănător din punct de vedere chimic cu alte două elemente chimice din grupa 12, zincul și mercurul.</p>" // no comma here
        },
        { // Question 99
            "q": "Se",
            "a": [
                {"option": "Seaborgiu",    "correct": false},
                {"option": "Scandiu",     "correct": false},
                {"option": "Samariu",      "correct": false},
                {"option": "Seleniu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Seleniul a fost descoperit de către Berzelius în 1817, și studiat mai departe de către alți cercetători ce-l găsesc în roci, seleniul în timp devine unul din importantele minerale care sunt răspunzătoare de o bună funcționalitate a organismului uman, respectiv animal.</p>",
            "incorrect": "<p><span>Umm...nu</span> Seleniul a fost descoperit de către Berzelius în 1817, și studiat mai departe de către alți cercetători ce-l găsesc în roci, seleniul în timp devine unul din importantele minerale care sunt răspunzătoare de o bună funcționalitate a organismului uman, respectiv animal.</p>" // no comma here
        },
        { // Question 100
            "q": "Ir",
            "a": [
                {"option": "Iod",    "correct": false},
                {"option": "Uraniu",     "correct": false},
                {"option": "Iridiu",      "correct": true},
                {"option": "Indiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Iridiul(Ir), element chimic cu caracter metalic, din grupa a VIII-a, număr atomic 77, masă atomică 192,2; configurația învelișului electronic exterior 5d76s2, valența, II, III, IV, VI.</p>",
            "incorrect": "<p><span>Umm...nu</span> Iridiul(Ir), element chimic cu caracter metalic, din grupa a VIII-a, număr atomic 77, masă atomică 192,2; configurația învelișului electronic exterior 5d76s2, valența, II, III, IV, VI.</p>" // no comma here
        },
        { // Question 101
            "q": "Tb",
            "a": [
                {"option": "Terbiu",    "correct": true},
                {"option": "Telur",     "correct": false},
                {"option": "Tehnețiu",      "correct": false},
                {"option": "Taliu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Terbiu (simbol Tb) este elementul chimic cu numărul atomic 65. A fost descoperit de Mosander în 1843.</p>",
            "incorrect": "<p><span>Umm...nu</span> Terbiu (simbol Tb) este elementul chimic cu numărul atomic 65. A fost descoperit de Mosander în 1843.</p>" // no comma here
        },
        { // Question 102
            "q": "Li",
            "a": [
                {"option": "Lantan",    "correct": false},
                {"option": "Litiu",     "correct": true},
                {"option": "Lawrențiu",      "correct": false},
                {"option": "Lutețiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Litiul este un element chimic având simbolul chimic Li și numărul atomic 3. Este un metal alcalin de culoare alb-argintie, iar în condiții normale, este cel mai ușor metal și cel mai puțin dens solid.</p>",
            "incorrect": "<p><span>Umm...nu</span> Litiul este un element chimic având simbolul chimic Li și numărul atomic 3. Este un metal alcalin de culoare alb-argintie, iar în condiții normale, este cel mai ușor metal și cel mai puțin dens solid.</p>" // no comma here
        },
        { // Question 103
            "q": "Sg",
            "a": [
                {"option": "Stronțiu",    "correct": false},
                {"option": "Stibiu",     "correct": false},
                {"option": "Scandiu",      "correct": false},
                {"option": "Seaborgiu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Seaborgiu este un elementul chimic cu numărul atomic 106 și simbol chimic Sg. Este un metal radioactiv și artificial. Cel mai stabil izotop (269Sg) al său are timp de înjumătățire de 2,1 minute. Este elementul omolog wolframului, molibdenului și cromului și aparținând astfel grupei a 6-a a sistemului periodic al elementelor.</p>",
            "incorrect": "<p><span>Umm...nu</span> Seaborgiu este un elementul chimic cu numărul atomic 106 și simbol chimic Sg. Este un metal radioactiv și artificial. Cel mai stabil izotop (269Sg) al său are timp de înjumătățire de 2,1 minute. Este elementul omolog wolframului, molibdenului și cromului și aparținând astfel grupei a 6-a a sistemului periodic al elementelor.</p>" // no comma here
        },
        { // Question 104
            "q": "Rf",
            "a": [
                {"option": "Radon",    "correct": false},
                {"option": "Rutherfordiu",     "correct": true},
                {"option": "Ruteniu",      "correct": false},
                {"option": "Rodiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Rutherfordiu este elementul chimic cu numărul atomic 104 și simbol chimic Rf. Prima oară rutherfordiul a fost obținut la Institutul Unificat pentru Cercetări Nucleare de la Dubna, U.R.S.S..</p>",
            "incorrect": "<p><span>Umm...nu</span> Rutherfordiu este elementul chimic cu numărul atomic 104 și simbol chimic Rf. Prima oară rutherfordiul a fost obținut la Institutul Unificat pentru Cercetări Nucleare de la Dubna, U.R.S.S..</p>" // no comma here
        },
        { // Question 105
            "q": "Rh",
            "a": [
                {"option": "Roentegeniu",    "correct": false},
                {"option": "Radiu",     "correct": false},
                {"option": "Reniu",      "correct": false},
                {"option": "Rodiu",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Rodiul este un element chimic cu simbolul Rh și numărul atomic 45. Este un metal de tranziție rar, din grupa platinei, de culoare alb-argintie și cu o duritate ridicată.</p>",
            "incorrect": "<p><span>Umm...nu</span> Rodiul este un element chimic cu simbolul Rh și numărul atomic 45. Este un metal de tranziție rar, din grupa platinei, de culoare alb-argintie și cu o duritate ridicată.</p>" // no comma here
        },
        { // Question 106
            "q": "Tl",
            "a": [
                {"option": "Tantal",    "correct": false},
                {"option": "Taliu",     "correct": true},
                {"option": "Terbiu",      "correct": false},
                {"option": "Telur",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Taliul este un metal moale, alb-albăstrui, cu diferite întrebuințări. Numele vine de la grecescul thallein care însemană verde, pentru că spectrul său are o linie alb-verzuie. A fost descoperit în 1861. Este folosit ca sulfat de taliu - o otravă mortală pentru șobolani. Nu are miros și gust, este mixat cu amidon, zahăr, glicerină și apă și pus la locuri potrivite.</p>",
            "incorrect": "<p><span>Umm...nu</span> Taliul este un metal moale, alb-albăstrui, cu diferite întrebuințări. Numele vine de la grecescul thallein care însemană verde, pentru că spectrul său are o linie alb-verzuie. A fost descoperit în 1861. Este folosit ca sulfat de taliu - o otravă mortală pentru șobolani. Nu are miros și gust, este mixat cu amidon, zahăr, glicerină și apă și pus la locuri potrivite.</p>" // no comma here
        },
        { // Question 107
            "q": "Ra",
            "a": [
                {"option": "Radiu",    "correct": true},
                {"option": "Radon",     "correct": false},
                {"option": "Rodiu",      "correct": false},
                {"option": "Rutherfordiu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Radiul este al 88-lea element din sistemul periodic al elementelor, având simbol chimic Ra. Radiul în stare pură este alb argintiu, dar datorită reactivității sale ridicate, se oxidează rapid devenind negru cu irizații colorate.</p>",
            "incorrect": "<p><span>Umm...nu</span> Radiul este al 88-lea element din sistemul periodic al elementelor, având simbol chimic Ra. Radiul în stare pură este alb argintiu, dar datorită reactivității sale ridicate, se oxidează rapid devenind negru cu irizații colorate.</p>" // no comma here
        },
        { // Question 108
            "q": "Rn",
            "a": [
                {"option": "Radon",    "correct": true},
                {"option": "Radiu",     "correct": false},
                {"option": "Reniu",      "correct": false},
                {"option": "Ruteniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Radonul este un gaz radioactiv provenit din dezintegrarea radiului, cel din urmă provenind din dezintegrarea uraniului. Este prezent în anumite soluri și poate fi transportat prin intermediul mediilor poroase, în special prin fenomenul de convecție.</p>",
            "incorrect": "<p><span>Umm...nu</span> Radonul este un gaz radioactiv provenit din dezintegrarea radiului, cel din urmă provenind din dezintegrarea uraniului. Este prezent în anumite soluri și poate fi transportat prin intermediul mediilor poroase, în special prin fenomenul de convecție.</p>" // no comma here
        },
        { // Question 109
            "q": "Mg",
            "a": [
                {"option": "Magneziu",    "correct": true},
                {"option": "Molibden",     "correct": false},
                {"option": "Mangan",      "correct": false},
                {"option": "Meitneriu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Magneziul este elementul chimic din tabelul periodic al elementelor care are simbolul Mg și numărul atomic 12. Magneziul este al optulea element și al treilea metal după aluminiu și fier ca abundență în scoarța solidă terestră, formând aproximativ 2% din masa acesteia. Magneziul este al treilea ca și componență în sărurile dizolvate în apa mării.</p>",
            "incorrect": "<p><span>Umm...nu</span> Magneziul este elementul chimic din tabelul periodic al elementelor care are simbolul Mg și numărul atomic 12. Magneziul este al optulea element și al treilea metal după aluminiu și fier ca abundență în scoarța solidă terestră, formând aproximativ 2% din masa acesteia. Magneziul este al treilea ca și componență în sărurile dizolvate în apa mării.</p>" // no comma here
        },
        { // Question 110
            "q": "Sb",
            "a": [
                {"option": "Seaborgiu",    "correct": false},
                {"option": "Seleniu",     "correct": false},
                {"option": "Stibiu",      "correct": true},
                {"option": "Staniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Stibiul (antimoniul) este un metaloid alb-argintiu, cu numărul atomic 51, având simbolul Sb. Metaloidul este întrebuințat pentru realizarea unor aliaje în poligrafie, în industria cauciucului și în tehnică. Alături de zăcămintele de mercur, în mod frecvent, se găsește stibina din care se extrage stibiul sau antimoniul.</p>",
            "incorrect": "<p><span>Umm...nu</span> Stibiul (antimoniul) este un metaloid alb-argintiu, cu numărul atomic 51, având simbolul Sb. Metaloidul este întrebuințat pentru realizarea unor aliaje în poligrafie, în industria cauciucului și în tehnică. Alături de zăcămintele de mercur, în mod frecvent, se găsește stibina din care se extrage stibiul sau antimoniul.</p>" // no comma here
        },
        { // Question 111
            "q": "Rb",
            "a": [
                {"option": "Rutherfordiu",    "correct": false},
                {"option": "Ruteniu",     "correct": false},
                {"option": "Rubidiu",      "correct": true},
                {"option": "Roentegeniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Rubidiul este un element chimic notat cu simbolul Rb și care are numărul atomic 37. Rubidiul este un metal alcalin moale, de culoare alb-argintie; în stare elementară este foarte reactiv, cu proprietăți similare altor metale alcaline, precum oxidarea rapidă în aer. Rubidiul natural este un amestec izotopic: 85Rb, singurul izotop stabil, cu o concentrație de 72%.</p>",
            "incorrect": "<p><span>Umm...nu</span> Rubidiul este un element chimic notat cu simbolul Rb și care are numărul atomic 37. Rubidiul este un metal alcalin moale, de culoare alb-argintie; în stare elementară este foarte reactiv, cu proprietăți similare altor metale alcaline, precum oxidarea rapidă în aer. Rubidiul natural este un amestec izotopic: 85Rb, singurul izotop stabil, cu o concentrație de 72%.</p>" // no comma here
        },
        { // Question 112
            "q": "Sc",
            "a": [
                {"option": "Cesiu",    "correct": false},
                {"option": "Scandiu",     "correct": true},
                {"option": "Siliciu",      "correct": false},
                {"option": "Seleniu",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Corect!</span> Scandiul (simbol Sc) este primul metal tranzițional din sistemul periodic de culoare alb-gălbuie ce formează o multitudine de culori în timp ce se oxidează. A fost descoperit de către Lars Nilson(1840-1899), student al lui Berzelius, în 1876.</p>",
            "incorrect": "<p><span>Umm...nu</span> Scandiul (simbol Sc) este primul metal tranzițional din sistemul periodic de culoare alb-gălbuie ce formează o multitudine de culori în timp ce se oxidează. A fost descoperit de către Lars Nilson(1840-1899), student al lui Berzelius, în 1876.</p>" // no comma here
        } //no comma here*/
    ]
};
