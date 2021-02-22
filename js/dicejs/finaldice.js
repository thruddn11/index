var diceNum = 1; //1번 주사위
var diceNum2 = 6; //2번 주사위
var diceNum3 = 6; //3번 주사위

var count = 51; //주사위 굴리는 애니메이션 횟수
var time = 0;
var enable = true //주사위 여러번 광클하면 돌아가는 횟수 방지 위해 새로 작성

$('#page2').css('display', 'none')

$('.diceCtnSelectBtn.onee').on('click', function () {
	enable = true

	$('#page1').css('display', 'block')
	$('#page2').css('display', 'none')
	$('.totalNo').text(1)

	$('.diceImg.zero').css('display', 'block')
	$('.diceImg.zero').css('background-position-x', '0')
})

$('.diceCtnSelectBtn.two').on('click', function () {
	enable = true

	$('#page1').css('display', 'none')
	$('#page2').css('display', 'block')

	$('.diceImg.one').css('display', 'block')
	$('.diceImg.two').css('display', 'block')

	$('.diceImg.one').css('background-position-x', '0')

	$('.diceImg.two').css('background-position-x', '0')
	$('.totalNo').text(2)
})


function clear() {
	$('.diceAni').css('display', 'block')
	$('.diceImg').css('display', 'none')

}


function throwDice(page) {
	clear()

	count = count - 1; // 타이머 선택 숫자에서 -1씩 감산

	var imgsrc = document.getElementsByTagName("img")[0];  //주사위1번
	var imgsrc2 = document.getElementsByTagName("img")[1]; //주사위2번
	var imgsrc3 = document.getElementsByTagName("img")[2]; //주사위3번




	if (count != 0) {
		// 주사위 그림 <1>
		diceNum = diceNum + 1;
		if (diceNum == 51) {
			diceNum = 1;
		}

		var str = "images/DicePlay/0" + diceNum + ".png";
		imgsrc.src = str;

		if (page == 2) {
			// 주사위 그림 <2>
			diceNum2 = diceNum2 - 1;  //2개동시에 있는 주사위에서 (1번) 주사위
			if (diceNum2 == 0) {
				diceNum2 = 50;
			}
			var str2 = "images/DicePlay/0" + diceNum2 + ".png";
			imgsrc2.src = str2;

			diceNum3 = diceNum3 - 1;  //2개동시에 있는 주사위에서 (2번) 주사위
			if (diceNum3 == 0) {
				diceNum3 = 50;
			}
			var str3 = "images/DicePlay/0" + diceNum3 + ".png";
			imgsrc3.src = str3;

		}
	}
	else if (count == 0) {
		clearInterval(time);

		enable = true

		var random1 = Math.floor(Math.random() * 6);  //주사위 1번
		var random2 = Math.floor(Math.random() * 6);  //주사위 2번
		var random3 = Math.floor(Math.random() * 6);  //주사위 3번

		var size = 246
		var x1 = size * random1  //주사위1번 1개만 있을 때  - 주사위 1번
		var x2 = size * random2  //주사위 2번 2개 동시에 있을때 왼쪽 주사위 - 주사위 2번
		var x3 = size * random3  //주사위 2번 2개 동시에 있을때 오른쪽 주사위 - 주사위 3번

		var sum = 0

		//주사위 돌릴 때 다른것도 같이 돌려지고 안돌려지는지에 대한 설정 관련 부분
		//이내용 구조파악하기!!!
		$('.diceAni').css('display', 'none')
		$('.diceImg.zero').css('display', 'block')
		$('.diceImg.zero').css('background-position-x', '-' + x1 + 'px')

		if (page == 2) {

			$('.diceImg.one').css('display', 'block')
			$('.diceImg.one').css('background-position-x', '-' + x2 + 'px')

			sum += random2 + 1

			$('.diceImg.two').css('display', 'block')
			$('.diceImg.two').css('background-position-x', '-' + x3 + 'px')

			sum += random3 + 1
		} else {
			sum += random1 + 1
		}

		$('.totalNo').text(sum)

	}
}

// function randomDice(page) {
// 	count = 50;
// 	clearInterval(time);
// 	time = setInterval("throwDice(" + page + ")", 30);

// 	var audio = new Audio()
// 	audio.src = '../ddice/sound/dice_ef.mp3'
// 	audio.play()
// }


$('.rollingDiceBtn').on('click', function () {
	if (!enable)
		return
	
	enable = false

	var getElementId = $(this).parent().attr('id')

	count = 50;
	clearInterval(time);
	time = setInterval("throwDice(" + (getElementId == "page1" ? 1 : 2) + ")", 30);

	var audio = new Audio()
	audio.src = './sound/dice_ef.mp3'
	audio.play()

	
})

//주사위 광클해도 1번 클릭한 것처럼 회전
