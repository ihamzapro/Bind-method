const youtuber = {
  name: "PCB",
  Content: "About cricket",
  feature: function () {
    console.log(
      `My favourite youtube channel name is ${this.name}. They make video ${this.Content}`
    );
  },
};
youtuber.feature();

const youtube1 = youtuber.feature.bind(youtuber);
youtube1();

const youtube2 = {
  name: "PCB",
  Content: "About criket",
};
const youtube3 = {
  name: "PCB",
  Content: "About cricket Player",
};

function work() {
  console.log(
    `My favourite youtube channel name is ${this.name}. They make vidoe ${this.Content}`
  );
}

const you1 = work.bind(youtube3);
you1();
