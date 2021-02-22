//JSON 이용
//이파일에는 items 라는 배열의 데이터가 들어있고
//items 안에는 여러개의 item들이 들어있음
//그리고 이 item들은 data폴더안에 data.json안에~~

//json 파일로부터 item을 받아와야 함 - fecth 사용
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())

     // .then(json => console.log(json));
    .then(json => json.items);
}

//main 아이템을 동적으로 받아와서 promis가 리턴이 되면
//전달받은 items를 이용해서 ~ ~ ~
//Update the list with the given items

function displayItems(items) {
  const container = document.querySelector('.items');

  //이해 안되면 이코드 출력해서확인해보기
//   const html = items.map(item => createHTMLString(item)).join('');
//   console.log(html);


  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.name}, ${item.size}</span>
    </li>
    `;
}


//마지막 이벤트 작성
function onButtonClick(event, items) {
    //다른곳 클릭해도 콘솔에 출력이되므로-밑의 3줄 코드를 작성하고
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;


   //아무것도 해당하지않으면 빨리 함수를 끝내기 
  if (key == null || value == null) {
    return;
  }

  //이코드를 작성 - 이코드가 이해가안된다면 바로위의 2줄 작성하고확인해보기!!
  displayItems(items.filter(item => item[key] === value));


   // console.log(event.target.dataset.key);
    // console.log(event.target.dataset.value);
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    // console.log(items);

    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
