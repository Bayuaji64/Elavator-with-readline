const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Question = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

const delayTime = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const elavator = async () => {
  let nama = "";
  console.log("Selamat datang di Menara Sejati");
  while (nama.length < 5) {
    nama = await Question("Masukkan nama anda [minimal 5 karakter]: ");

    if (nama.length < 5) {
      console.log("Nama anda harus lebih dari 4 karakter!");
    }
  }

  console.log(`Hello ${nama}! Selamat datang!`);

  let startFloor = 0;
  while (startFloor < 1 || startFloor > 10) {
    startFloor = parseInt(
      await Question("Silahkan masukkan lantai penjemputan (1-10): ")
    );
    if (startFloor < 1 || startFloor > 10) {
      console.log("Lantai yang anda masukkan harus di antara rentang 1-10!");
    }
  }

  let destinationFloor = 0;
  while (destinationFloor < 1 || destinationFloor > 10) {
    destinationFloor = parseInt(
      await Question("Silahkan masukkan lantai tujuan (1-10): ")
    );
    if (destinationFloor < 1 || destinationFloor > 10) {
      console.log("Lantai yang anda masukkan harus di antara rentang 1-10!");
    }
  }

  const currentLift = Math.floor(Math.random() * 10) + 1;
  await delayTime(2000);
  console.log(`Saat ini Lift berada di lantai : ${currentLift}`);

  if (startFloor === destinationFloor) {
    await delayTime(2000);
    console.log("Anda sudah berada di lantai tujuan!");
    rl.close();
    return;
  }
  await delayTime(2000);
  console.log("Mohon menunggu, lift akan segera bergerak menjemput Anda");

  if (currentLift <= startFloor) {
    for (let i = currentLift+1; i <= startFloor; i++) {
      await delayTime(2000);
      console.log(`Lift naik ke lantai : ${i}`);
    }
  } else {
    for (let i = currentLift-1; i >= startFloor; i--) {
      await delayTime(2000);
      console.log(`Lift turun ke lantai : ${i}`);
    }
  }

  await delayTime(2000);

  console.log("Lift sudah sampai di lokasi penjemputan, pintu lift terbuka");

  if (startFloor <= destinationFloor) {
    for (let i = startFloor+1; i <= destinationFloor; i++) {
      await delayTime(2000);
      console.log(`Lift naik ke lantai: ${i}`);
    }
  } else {
    for (let i = startFloor-1; i >= destinationFloor; i--) {
      await delayTime(2000);
      console.log(`Lift turun ke lantai: ${i}`);
    }
  }
  await delayTime(2000);
  console.log("Lift sudah sampai di lokasi tujuan, pintu lift terbuka");
  await delayTime(2000);
  console.log("Terima kasih, anda sudah sampai di lantai tujuan");

  rl.close();
};

elavator();
