let message = "Proin sociis natoque et magnis parturient montes mus";
let pricePerWord = 10;
const calculateEngravingPrice = function (message, pricePerWord) {
  let word = message.split(" ");
  let count = word.length;
  let price = count * pricePerWord;
  console.log(`Загальна вартість гравіювання ${price}`);
};

calculateEngravingPrice(message, pricePerWord);
message = "Proin sociis natoque et magnis parturient montes mus";
pricePerWord = 20;
calculateEngravingPrice(message, pricePerWord);
message = "Donec orci lectus aliquam est magnis";
pricePerWord = 40;
calculateEngravingPrice(message, pricePerWord);
message = "Donec orci lectus aliquam est magnis";
pricePerWord = 20;
calculateEngravingPrice(message, pricePerWord);
