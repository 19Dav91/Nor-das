// Առաջադրանք 1: Ունենք Erankyun և Uxxankyun կլասները★ Եռանկյունը բնութագրվում է a,b,c կողմերով (ուղղանկյան դեպքում այն կունենա միայն
//     a և b) եւ երեք մեթոդներով○ Paragic - հաշվում է տվյալ պատկերի պարագիծը
//     ○ Makeres -հաշվում է տվյալ պատկերի մակերեսը○ Յուրաքանչյուրի մեջ ունենալ draw() մեթոդը
//     ■ Uxxankyun - կլասում, Draw() մեթոդը նկարում է ուղղանկյանպատկեր աստղանիշներով,
//     ● Եթե մեթոդը ստանում է որևէ պարամետր○ Օրինակ՝ Draw(true) ապա ուղղանկյունը
//     պետք է լինի դատարկ■ Erankyun - կլասում
//     ● Draw մեթոդը նկարում է ուղղանկյուն եռանկյուն○ Draw(true) կանչի դեպքում անհրաժեշտ է
//     նկարել հավասարասրուն եռանկյունԱռաջադրանք 2:Ստեղծել Timer կլասը
//     a. var t = new Timer(x); t.start()i. Դինամիկ կերպով էջին կավելացնի հետհաշվարկ կատարող timer
//     b. var t2 = new Timer(5); t.start(t2) կաշխատի t -ն, անմիջապես ավարտին կաշխատիt2 -ը


// let pr1 = prompt("Գրեք ուղղանկյան լայնւթյունը");
// let pr2 = prompt("Գրեք ուղղանկյան երկարությունը")
// let inp1 = document.createElement('input');
// let inp2 = document.createElement('input');
// let btn = document.createElement('button');
// document.body.appendChild(inp1);
// document.body.appendChild(inp2)
// document.body.appendChild(btn)
// btn.textContent = 'OK'

// class Uxxankyun {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     makeres() {
//         return (this.a * this.b);

//     };
//     paragic() {
//         return (2 * (this.a + this.b))
//     }
// };
// // let uxx1 = new Uxxankyun(+pr1, +pr2);
// // console.log(uxx1.makeres());
// // let par1 = new Uxxankyun(+pr1, +pr2);
// // console.log(par1.paragic());
// btn.addEventListener('click', () => {
//     let uxx1 = new Uxxankyun(+inp1.value, +inp2.value);
//     console.log(uxx1.makeres());
//     let par1 = new Uxxankyun(+inp1.value, +inp1.value);
//     console.log(par1.paragic());
// })

//     Առաջադրանք 2: Ունենք Project կլասը, որը բնութագրում է պրոյեկտին:Կլասի դաշտերն են.
//     ● name - պրոյեկտի անվանումը● languages - օգտագրոծված ծրագրավորման լեզուների զանգվածը:
//     Օրինակ՝ let p1 = new Project("Marketing Site", ["JS", "Angular","CSS"]);



class Project {
    name;
    languages;
    constructor(name, languages) {
        this.name = name;
        this.languages = languages;
    }
}
let p1 = new Project("Marketing Site", ['JS', "Angular", "CSS"]);
let par = document.createElement('h1');
document.body.appendChild(par);
par.textContent = p1.name
let ul1 = document.createElement('ul');
document.body.appendChild(ul1);
for (let i = 0; i < p1.languages.length; i++) {
    let li1 = document.createElement('li')
    li1.textContent = p1.languages[i]
    ul1.appendChild(li1)
    li1.style.listStyle = 'none'
}
// Ունենք նաև Developer կլասը, որը ինֆորմացիա է պարունակում ծրագրավորողի մասին:
// Կլասի դաշտրեն են.● name - Անուն ● surname - ազգանուն● projects - զանգված, որի մեջ կպահպանվեն 
//նրա կատարած պրոյեկտները (օբյեկտնե Project կլասից)● photo - նկարը Developer կլասի մեթոդներն են1. 
// addProject(x) - projects զանգվածին ավելացնում է x project -ի տվյալը
// 2. toString - էկրանին տպում է տվյալ ծրագրավորողի տվյալը և նրա կատարածպրոյեկտների տվյալները
// Օրինակ՝let p = new Developer("Hayk", "Davtyan", "1.jpg");
// p.addProject(new Project("Basic Store", ["AngularJS", "PHP"]));p.addProject(new Project("Social Network", ["Node.js", "React.js"]));
// p.addProject(new Project("3D Snake Game", ["JS", "Canvas","CSS3"]));p.toString() ֆունկցիան կանչելու դեպքւոմ էկրանին կհայտնվի ծրագրավորողի տվյալը
// և նրա կատարած պրոյեկտների տվյալները գեղեցիկ դիզայնովԱռաջադրանք 3: Մշակել Calendar համակարգը
// ★ Այն իրենից ներկայացնում է մեկ ընդհանուր կլաս, որը ունի ամիս , տարի դաշտերը ևget_days, create մեթոդները ։
// ★ Get_days - ֆունկցիան կանչելիս, այն վերադարձնում է տվյալ ամսվա բոլոր օրերըզանգվածի տեսքով ։ Յուրաքանչյուր օր իրենից ներկայացնում է օբյեկտ, որը ունի
// ամսաթիվ [1-31] և օր [0-6 (ուրբաթ, շաբաթ․․․)] դաշտերը։★ Create մեթոդը կանչելիս՝ պետք է ցուցադրվի աղյուսակ, որը պատկերում է տվյալ
// ամսվա բոլոր օրերը օրացույցի տեսքով ։★ Էջում կունենանք նաև 2 հավելյալ կոճակներ (next, prev) ։
// ○ Next -ին սեղմելիս կպատկերվի հաջորդ ամսվա օրացույցը○ Prev -ին սեղմելիս կպատկերվի նախորդ ամսվա օրացույցը
// ★ Օրացույցը պատկերելիս, եթե տվյալ ամսվա մեջ առկա է ներկա պահի ամսաթիվը,ապա վերջինս ներկել կանաչ գույնով ։

class Developer {
  name;
  surname;
  projects;
  photo;

  constructor(name, surname, photo) {
    this.name = name;
    this.surname = surname;
    this.projects = [];
    this.photo = photo;
  }

  addProject(project) {
    this.projects.push(project);
  }

  toString() {
    let output = [`Developer: ${this.name} ${this.surname} Projects:`];
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      output.push(`Name: ${project.name} Languages: ${project.languages.join(", ")}`);
    }
    return output;
  }
}

let p = new Developer("Hayk", "Davtyan", "1.jpg");
p.addProject(new Project("Basic Store", ["AngularJS", "PHP"]));
p.addProject(new Project("Social Network", ["Node.js", "React.js"]));
p.addProject(new Project("3D Snake Game", ["JS", "Canvas", "CSS3"]));
let count = 0;
for (const elem of p.toString()) {
    count++
    let p1 = document.createElement('p');
    document.body.appendChild(p1);
    p1.textContent = elem;
    if (elem.startsWith('Developer')) {
        p1.style.fontSize = '20px';
    } else {
        if(count === 2) {
        p1.style.color = 'red';
      } else if(count === 3) {
        p1.style.color = 'blue';
      } else {
        p1.style.color = 'orange';
      }
    }
}
