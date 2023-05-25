function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => friedegg`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가져올 수 없음!"));
  return Promise.resolve(`정원 => 치킨`);
}

getChicken()
  .catch((error) => {
    console.log(error.name);
    return "chickkkkken";
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

//   getChicken()
//   .catch(()=> 'chickkkkken')
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log)