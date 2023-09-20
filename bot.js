const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Haiii... Perkenalkan nama Aku Bot NT. Nama Kamu siapa ya?",
    "Halloo " + data?.nama + " salam kenal yaaa, umur Kamu berapa?",
    "OOOOOO " + data?.umur + ", hobi kamu apa yaa?",
    "WewWew kok bisa sama si, hobi aku juga " + data?.hobi + ", btw kmu punya pacar ga??",
    "Owhhhhhh " + data?.pacar + ", yaudah deg kalo gitu. Makasih yaaaa...",
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init == 1) {
    botDelay({ nama: jawaban.value });
  } else if (init == 2) {
    botDelay({ umur: jawaban.value });
  } else if (init == 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init == 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init == 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1200]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = "Makasih yak " + userData[0] + " udah mau main sama Bot NT :), tar kapan-kapan " + userData[2] + " bareng kali yee";
  jawaban.value = "Iye makasih juga!!";
}

function botEnd() {
  window.location.reload();
}
