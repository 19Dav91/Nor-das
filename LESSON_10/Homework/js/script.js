'use strict'


/////tasks
// Առաջադրանք 1:Գրել հետեւյալ նկարագրությանը համապատասխանող ֆունկցիաները
// ★ gumar(x) - հաշվում եւ վերադարձնում է x զանգվածի տարրերի գումարը

// function gumar(x) {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         sum += x[i];
//     }
//     return sum
// }


// ★ Ֆունկցիան ստանում է զանգված և գտնում այդ զանգվածի մեծագույն և փոքրագույն
// տարրերի գումարը

// function maxAndMin(x) {
//     return Math.min(...x) + Math.max(...x)
// }

// ★ Ֆունկցիան ստանում է զանգված տեղերով փոխում է մեծագույն և փոքրագույն
// տարրերը և վերադարձնում ստացված զանգվածը

// function maxAndMin(x) {
//     let min = Math.min(...x)
//     let max = Math.max(...x)
//     let minIndex = x.indexOf(min)
//     let maxIndex = x.indexOf(max)
//     x[minIndex] = max
//     x[maxIndex] = min
//     return x
// }
// console.log(maxAndMin([1,2,3,4,5]));

// ★ Ֆունկցիան ստանում է տեքստ և հաշվում, թե քանի բառ կա այդ տեքստում

// function countWord(text) {
//     return text.split(' ').length;
// }

// ★ Ֆունկցիան ստանում է տեքստ և հաշվում, թե նրա բառերից քանիսն են սկսվում a
// տառով


// function countWordStartingWithA(text) {
//     let sum = 0;

//     let splited = text.split(' ')
//     for (let i = 0; i < splited.length; i++) {
//         if (splited[i][0] == 'a') {
//             sum += 1
//         }
//     }
//     return sum

// }

// ★ Ֆունկցիան ստանում է զանգված, խառնում զանգվածի տարրերը (shuffle) և
// վերադարձնում ստացվածը

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// return array
// }

// ★ sortA(x) - եթե x զանգվածի տարրերը աճման կարգով են դասավորված,
// վերադարձնում է true, հակառակ դեպքում false

// function isSorted(x) {
//     for (let i = 0; i < x.length - 1; i++) {
//         if (x[i] > x[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

// ★ toUpperCaseV3(x) - x տողի յուրաքանչյուր բառի առաջին տառը դարձնում է
// մեծատառ

// function toUpper(text) {
//     if (text.length > 0 && text[0] != ' ') {
//         text = text[0].toUpperCase() + text.substring(1, text.length)
//     }
//     for (let i = 1; i < text.length; i++) {
//         if (text[i] != ' ' && text[i - 1] == ' ') {
//             text = text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1, text.length)
//         }
//     }
//     return text
// }


// ★ removeArray(x, n) - x զանգվածից հեռացնում է նրա n-րդ տարրը եւ վերադարձնում
// ստացվածը
// ○ Օրինակ՝ var y = [2,3,4]; y = removeArray(y, 1) -ի դեպքում կստանանք y
// = [2,4]

// function removeArray(x, n) {
//     x.splice(x.indexOf(n), 1)
//     return x
// }

// ★ insertArray(x,k,n) - x զանգվածում ավելացնում է k տարրը n -րդ դիրքում
// ○ Օրինակ՝ var x= [4,1,2] զանգվածի դեպքում insertArray(x, 4,1) -ի դեպքում
// կստանանք հետեւյալ զանգվածը՝ [4,4,1,2]

// function insertArray(x, k, n) {
//     x.splice(n, 0, k)
//     return x
// }

// ★ isPrime(x) - ֆունկցիան վերադարձնում է true, եթե x թիվը պարզ է, եւ false`
// հակառակ դեպքում
// ○ Թիվը կոչվում է պարզ, եթե այն անմնացորդ բաժանվում է միայն իր եւ մեկի վրա
// ■ Օրինակ՝ 5,7,11 թվերը. 8 թիվը օրինակ պարզ չէ, քանի որ բաժանվում է
// նաեւ 2-ի եւ 4 -ի

// function isPrime(num) {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//         if (num % i === 0) return false;
//     }
//     return num > 1;
// }

// ★ Օգտագործելով isPrime ֆունկցիան գրել մեկ այլ ֆունկցիա countPrime(x) -ը որը
// վերադարձնում է x թվերի զանգվածում առկա պարզ թվերի քանակը

// function countPrime(x) {
//     let sum = 0
//     for (let i = 0; i < x.length; i++) {
//         if (isPrime(x[i])) {
//             sum++
//         }
//     }
//     return sum
// }


// ★ Գրել match(x) - ֆունկցիան, որը վերադարձնում է x զանգվածի կրկնվող տարրերը

// function match(array) {
//     const duplicates = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }
//     return duplicates
// }


// ★ Գրել IsPalindrom ֆունկցիան, որը ստանում է x տեքստը եւ ստուգում է արդյո՞ք այն
// պալինդրոմ է
// a. Այսինքն՝ աջից եւ ձախից կարդացվում է նույն կերպ

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

// ★ Գրել ConvertToBinary(x) ֆունկցիան, որը 10-ական համակարգի x թիվը ձևափոխում
// է 2-ական համակարգի
// ○ Օրինակ ConverToBinary(45) կստացվի 101101

// function intToBin(decimal) {
//     let binary = ''
//     while (decimal > 0) {
//         if (decimal & 1) {
//             binary = "1" + binary;
//         } else {
//             binary = "0" + binary;
//         }
//         decimal = decimal >> 1;
//     }
//     return binary
// }
//???????????????????????????????????????
// Առաջադրանք 2:JoinV2(x,y) - ֆունկցիան x զանգվածի տարրերը վերածում է տողի՝
// կապելով իրար ըստ y սիմվոլի
// ★ Օրինակ JoinV2([“armen”,”hayk”, “david”], “/”])
// ○ Կստանանք “armen/hayk/david” տեքստը

// function joinV2(x, y) {
//     return x.join(y)
// }

// Առաջադրանք 3:SplitV2(x,y) - ֆունկցիան x տողը տրոհում է զանգվածի՝ ըստ y սիմվոլի
// ★ Օրինակ՝ SplitV2(“gmail.@gmail.com”, “@”) կանչի դեպքում կստանանք հետեւյալ
// զանգվածը՝ [“gmail.”, “gmail.com”]

// function SplitV2(x, y) {
//     return x.split(y)
// }

// Առաջադրանք 4:replaceV2(s,x,y) ֆունկցիան s տողի մեջ փոխում է x ենթատեքստը y -ով
// եւ վերադարձնում ստացվածը
// ★ Օրինակ՝ replaceV2(“i hate javascript”, “hate”, “love”) արտահայտության դեպքում
// կստանանք՝ I love javascript տեքստը

// function replace(s, x, y) {
//     return s.replace(x, y)
// }

// Առաջադրանք 5:indexAll(x,k) - ֆունկցիան վերադարձնում է x տողի մեջ k տառի
// հանդիպման բոլոր ինդեքսները
// ★ Օրինակ՝ indexAll(“ararat”, “a”) -ի դեպքում կստանանք այսպիսի զանգված՝ [0,2,4],
// քանի որ a տառը “ararat” բառի մեջ հանդիպում է 0, 2, եւ 4 ինդեքսներում

// function indexAll(x, k) {
//     let ans = []
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == k) {
//             ans.push(i)
//         }
//     }
//     return ans
// }

// Առաջադրանք 6: getRandomNumber(a,b) ֆունկցիան վերադարձնում է պատահական թիվ
// a,b հատվածից
// ★ Օրինակ՝ getRandomNumber(0,10) -ի դեպքում կարող է ստացվել օրինակ 7

// function getRandomNumber(a, b) {
//     return Math.floor(Math.random() * (b - a + 1) + a)
// }

// ★ Եթե ֆունկցիան ստանում է նաեւ երրորդ պարամետր
// ○ Օրինակ getRandomNumber(0,10,5), ապա անհրաժեշտ է ստանալ զանգված,
// որն ունի 5 տարր եւ այդ տարրերը պատահական թվեր են 0-ից 10 հատվածից

// function getRandomNumber(a, b, c = 1) {
//     let ans = []
//     let randNum;
//     while (ans.length != c) {
//         ans.push(randNum)
//     }
//     return ans
// }

// ★ Ֆունկցիան կարող է ստանալ նաեւ 4-րդ պարամետր {true,false}
// ○ getRandomNumber(a,b,n,T)
// ■ Եթե t == true
// ● Ապա ստացվում է n տարր պարունակող, a,b հատվածից
// պատահական թվեր պարունակող զանգված, որտեղ տարրերը չեն
// կրկնվում
// ○ Վերադարձնել false, եթե այդպիսի զանգված անհնար է
// ստանալ

// ■ Եթե t == false, կամ բացակայում է այդ պարամետրը, ապա տարրերը
// կարող են կրկնվել

// function getRandomNumber(a, b, c = 1, unique = false) {
//     let ans = []
//     let randNum;
//     if (b - a + 1 < c && unique) {
//         return false
//     }
//     while (ans.length != c) {
//         randNum = Math.floor(Math.random() * (b - a + 1) + a)
//         if (ans.indexOf(randNum) == -1) {
//             ans.push(randNum)
//         }
//     }
//     return ans
// }

// Առաջադրանք 7:FilterF(x,y) - ֆունկցիան ստանում է x զանգված և y արտահայտություն և
// վերադարձնում է x զանգվածից այն տարրերը, որոնք պարունակում են y արտահայտություն
// ★ Օրինակ`FilterF([karine,nune,arman,sevak,mari],”ar”) -ի դեպքում կստանանք
// այսպիսի զանգված՝ [karine,arman,mari], քանի որ “ar” արտահայտությունը
// հանդիպում է միայն այս բառերում

// function Filter(x, y) {
//     let ans = []
//     for (let i = 0; i < x.length; i++) {
//         ans.push(x[i])
//     }
//     return ans
// }

// Առաջադրանք 8: makeUnique(x) - որպես արգումենտ ստանում է x զանգված և
// վերադարձնում է նոր զանգված որում առկա են x զանգվածի կրկնվող տարրերը
// ★ Օրինակ՝ makeUnique([‘c’, ‘a’, ’b’, ’c’,’d’, ‘a’, ‘c’]), այս դեպքում կվերադարձնի`
// [‘a’,’c’] զանգվածը

// function makeUnique(array) {
//     const duplicates = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }
//     return duplicates
// }

// Առաջադրանք 9: remake(x,y,z) այս ֆունկցիան ստանում է մեկ զանգված և երկու ինդեքս
// այսպիսով այն փոխում է այդ երկու ինդեքսներում գտնվող տարրերը տեղերով
// ★ Օրինակ՝ remake([“c”, ‘a’, ’b’],0,2) կվերադարձնի [“b”, ‘a’, ’c’]
// Առաջադրանք 10: validRange(x,y,z) ստանում է զանգված և երկու թիվ, այն վերադարձնում
// է true, եթե զանգվածի թվերը գտնվում են միայն այս միջակայքում: Եթե զանգվածում առկա է
// այնպիսի թիվ, որը նշված միջակայքում չի, ֆունկցիան վերադարձնում է false

// function remake(x, y, z) {
//     let temp = x[y]
//     x[y] = x[z]
//     x[z] = temp
//     return x
// }

// ★ Օրինակ՝ validRange([1,2,3,4,5],3,5) այս դեպքում կվերադարձնի false, քանի որ
// առկա են 3-ից փոքր թվեր ( 3 -ից 5 նշանակում է , որ 3ից փոքր չլինի և 5 ից մեծ )

// function validRange(x, min, max) {
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] < min || x[i] > max) return false
//     }
//     return true
// }


// Առաջադրանք 11:maskify(x) - ստանում է որպես պարամետր որևէ x տող, և եթե տողի
// երկարությունը մեծ է 4 ից, ապա վերադարձնում այն, բոլոր սիմվոլները փոխակերպված #
// -ով, բացի վերջին 4 սիմվոլները
// ★ օր․՝ maskify(“123456789”) պետք է վերադարձնի #####6789
// ○ սակայն եթե նշանների քանակը 4ից փոքր է ապա պետք է վերադարձնի նույն
// կերպ

// function maskify(x) {
//     if (x.length > 4) {
//         x = "#".repeat(x.length - 4) + x.substring(x.length - 4, x.length)
//     }
//     return x
// }

// Դաս 8: Ռեկուրսիա, ռեկուրսիվ ֆունկցիաներ
// Առաջադրանք 1: Qanak(x,k) - հաշվում է x զանգվածում k տարրերի քանակը

// function qanak(x, k) {
//     let ans = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == k) ans++
//     }
//     return ans
// }

// Առաջադրանք 2: Գրել ֆունկցիա, որը կստուգի փոխանցվող զանգվածի տարրերը աճման
// կարգով են դասավորված թե ոչ:Եթե աճման կարգով դասավորված չեն վերադարձնում է false

// function isSorted(x) {
//     for (let i = 0; i < x.length - 1; i++) {
//         if (x[i] > x[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

// Առաջադրանք 3: Գրել ֆունկցիա, որը որպես պարամետր ստանում է տող,և եթե տողում կան
// մեծատառով սկսվող բառեր, ապա առանձնացնում է բացատով
// ★ օրինակ՝ myFunction(“barevErevanJan”), պետք է վերադարձնի barev Erevan Jan
// տեքստը

// function splitWords(x) {
//     let words = []

//     let lastWord = 0

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == x[i].toUpperCase()) {
//             words.push(x.substring(lastWord, i))
//             lastWord = i
//         }
//     }

//     words.push(x.substring(lastWord, x.length))
//     return words.join(' ')
// }

// console.log(splitWords('barevErevanJan'))

// Առաջադրանք 4: indexF(x,k) - վերադարձնում է x զանգվածում k թվի ինդեքսը, իսկ եթե
// տվյալ թիվը չկա զանգվածում վերադարձնում է -1
// ★ Օրինակ indexF( [ 4,3,2,8,9 ], 3) -ի դեպքում կստանանք 1, քանի որ x[1] = 3

// function indexF(x, k) {
//     return x.indexOf(k)
// }

// Առաջադրանք 5: MaxF(x) - ֆունկցիա վերադարձնում է զանգվածի մաքսիմումը

// function maxF(x) {
//     return Math.max(x)
// }

// Առաջադրանք 6: evenSum(x) ֆունկցիան հաշվում է x զանգվածի զույգ տարրերի գումարը

// function evenSum(x) {
//     let ans = 0
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] % 2 == 0) {
//             ans += x[i]
//         }
//     }
//     return ans
// }

// Առաջադրանք 7: PowF(x,y) - ֆունկցիան հաշվում է x թվի y աստիճանը
// ★ Օրինակ` PowF(2,3) = 23
//  = 8, եթե y-ը նշված չի,ֆունկցիան վերադարձնում է x թվի
// քառակուսին

// function powF(x, y = 2) {
//     return Math.pow(x, y)
// }

// Առաջադրանք 8: fibonacci(x) - ֆունկցիան վերադարձնում է զանգված որի տարրերը
// Ֆիբոնաչիի հաջորդականության առաջին x թվերն են ։
// ★ Օրինակ`fibonacci(5) կվերադարձնի [1, 1, 2, 3, 5];

// uxxum: fibonacci tveri arajin tivy 1 chi, 0 e!

// function fibonacci(x) {
//     let ans = [0, 1]
//     while (ans.length != x) {
//         ans.push(ans[ans.length - 1] + ans[ans.length - 2])
//     }
//     return ans
// }

// Առաջադրանք 9: generalize(arr) - ֆունկցիան ստանում է որպես արգումենտ որևէ
// զանգված՝ բաղկացած բացառապես թվերից և վերադարձնում է այս զանգվածի թվերի
// ընդհանուր ամենամեծ բաժանարարը։
// ★ Օրինակ`generalize([20, 155, 30]) կվերադարձնի 5, քանի որ ամենամեծ բնական
// թիվը, որի վրա 20-ը 155-ը և 30 անմնացորդ բաժանվում են հենց 5-ն է։


// function gcd(a, b) {
//     if (a == 0)
//         return b;
//     return gcd(b % a, a);
// }


// function findGCD(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         result = gcd(arr[i], result);

//         if (result == 1) {
//             return 1;
//         }
//     }
//     return result;
// }

// Առաջադրանք 10: Գրել ֆունկցիա, որը որպես պարամետր ստանում է զանգված, և
// վերադարձնում է զանգվածի զույգ տարրերի միջին թվաբանականը
// ★ Օրինակ՝ avgF([2,4,5,3,7,8,4]), պետք է վերադարձնի 5, քանի որ (2+4+8+6)/4=5

// uxxum: 6 tivy chka zangvatsi mej

// function avgF(x) {
//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] % 2 == 0) {
//             sum += x[i]
//             count += 1
//         }
//     }
//     return sum / count
// }

