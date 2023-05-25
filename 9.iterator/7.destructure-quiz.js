// Quiz

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

// 전달받은 오브텍트에 styles라는 이름의 key 가 있는데 color라는 이름을 가진 애를 구조분해 할당 할거야.

changeColor(prop);
