const nameA = 95;
const nameB = 105;
const nameC = 85;

const nameD = 84;
const nameE = 90;
const nameF = 110;

const dol=(nameA + nameB + nameC)/3;
const kol=(nameD + nameE + nameF)/3;
console.log('dolphins Avg' ,dol );
console.log('koalas Avg' ,kol);

if(dol>kol){
    console.log("Dolphin's are the winner !");
}
else if(dol==kol){
    console.log("match drawn!");
}
else{
    console.log("kolas are the winner");
}

const dolB=(97+112+101)/3;
const kolB=(109+95+123)/3;

console.log("bonus test1---->" , dolB , kolB);

if (dolB>kolB && dolB>=100){
    console.log("Dolphins are the winner");
}
else if (kolB>dolB && kolB>=100) {
    console.log("kolas are the winner");
}else if(kolB==dolB && kolB >=100 && dolB>=100){
    console.log("match drawn");
}

const dolA=(97+112+101)/3;
const kolA=(109+95+106)/3;

console.log("bonus test2---->" , "avg of Dolphins" ,dolA ,"avg of kolas" ,kolA);

/*if (dolA>kolA && dolA>=100) {
    console.log("Dolphins are the winner");
}
else if (kolA>dolB && kolA>=100) {
    console.log("kolas are the winner");
}*/ if(kolA===dolA && kolA>=100 && dolA>=100) {
    console.log("match Drawn");
}
else{
    console.log("no one wins");
}