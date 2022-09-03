let click = "O";
let numbers = Array(9).fill(null);

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

for (let i = 0; i < 9; i++) {
  const tile = $.parseHTML(`<div class="tile" id="tile_${i}"></div>`);
  $(tile).on("click", async (e) => {
    if (numbers[i]) return;
    click = click == "O" ? "X" : "O";
    numbers[i] = click;
    console.log(numbers);
    $(tile).text(click);
    await sleep(100);
    if (checkWinner()) {
      numbers = Array(9).fill(null);
      $(".tile").text("");
    } else if (numbers.every((e) => e)) {
      alert("Draw");
      numbers = Array(9).fill(null);
      $(".tile").text("");
    }
  });
  $(".container").append(tile);
}

const checkWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (
      numbers[i * 3] == numbers[i * 3 + 1] &&
      numbers[i * 3] == numbers[i * 3 + 2] &&
      numbers[i * 3]
    ) {
      alert(`${numbers[i * 3]} wins!`);
      return true;
    }
    if (
      numbers[i] == numbers[i + 3] &&
      numbers[i] == numbers[i + 6] &&
      numbers[i]
    ) {
      alert(`${numbers[i]} wins!`);
      return true;
    }
  }

  if (numbers[0] == numbers[4] && numbers[0] == numbers[8] && numbers[0]) {
    alert(`${numbers[0]} wins!`);
    return true;
  }

  if (numbers[2] == numbers[4] && numbers[2] == numbers[6] && numbers[2]) {
    alert(`${numbers[2]} wins!`);
    return true;
  }

  return false;

  // if (numbers.slice(0, 3).every((e) => e == "X")) {
  //   alert("X wins");
  // }
};
