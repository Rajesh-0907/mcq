var question = document.getElementById('questions');
var answers = document.getElementById('answers');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var onee = document.getElementById('onee');
var twoo = document.getElementById('twoo');
var threee = document.getElementById('threee');
var fourr = document.getElementById('fourr');
var cont = document.getElementById('container');
var res = document.getElementById('res');
var feed = document.getElementById('feedback');
var nam = document.getElementById('nam');
var sub = document.getElementById('sub');
var Next = document.getElementById('next');
var Previous = document.getElementById('previous');
var subm = document.getElementById('submit');
var i = 0;
var j;
var sum = 0;
sum1 = 0;

var na;

function result() {
	++sum1;
	if (sum1 == 1) {
		sub.style.display = 'none';
		question.style.display = 'none';
		answers.style.display = 'none';
		cont.style.border = 'none';
		Next.style.display = 'none';
		Previous.style.display = 'none';
		subm.style.display = 'none';

		for (j = 0; j < 10; j++) {
			sum = sum + lists[j].score;
		}
		res.innerHTML = 'your score: ' + sum.toString();
		if (sum == 10) feed.innerHTML = 'Excellent!!';
		else if (sum > 6 && sum < 10) feed.innerHTML = 'good';
		else if (sum == 5) feed.innerHTML = 'you can do better!!';
		else feed.innerHTML = 'Need to Prepare';
	}
}
function update(id) {
	if (lists[i].check != 1) {
		window.alert('Give a response');
	} else if (lists[i].check2 != 0) {
		window.alert('responded already');
		lists[i].select.checked = false;
	} else {
		switch (id) {
			case 1:
				if (lists[i].select.value == '2020') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 2:
				if (lists[i].select.value == 'America') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 3:
				if (lists[i].select.value == 'Wuhan') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 4:
				if (lists[i].select.value == 'shortness of breath') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 5:
				if (lists[i].select.value == 'kiribati') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 6:
				if (lists[i].select.value == 'MSME') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 7:
				if (lists[i].select.value == 'Thailand') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 8:
				if (lists[i].select.value == '14') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 9:
				if (lists[i].select.value == '>60') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 += 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
				}
				break;
			case 10:
				if (lists[i].select.value == 'Libya') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 += 1;
					lists[i].check2 += 1;
				}
				break;
		}
	}
}
function next() {
	if (i < 9) {
		i = i + 1;
		question.innerHTML = lists[i].question;
		one.innerHTML = lists[i].one;
		two.innerHTML = lists[i].two;
		three.innerHTML = lists[i].three;
		four.innerHTML = lists[i].four;
		onee.value = lists[i].one;
		twoo.value = lists[i].two;
		threee.value = lists[i].three;
		fourr.value = lists[i].four;

		if (lists[i].check == 1) {
			lists[i].select.checked = true;
		} else {
			onee.checked = false;
			twoo.checked = false;
			threee.checked = false;
			fourr.checked = false;
		}
		if (lists[i].check1 == 1) {
			cont.style.border = lists[i].bor;
			question.style.backgroundColor = lists[i].col;
		} else {
			cont.style.border = '4px solid gray';
			question.style.backgroundColor = 'azure';
		}
	}
}

function previous() {
	if (lists[i].check1 == 1) {
		cont.style.border = lists[i].bor;
		question.style.backgroundColor = lists[i].col;
	} else {
		cont.style.border = '4px solid gray';
		question.style.backgroundColor = 'azure';
	}
	if (i > 0) {
		i = i - 1;
		question.innerHTML = lists[i].question;
		one.innerHTML = lists[i].one;
		two.innerHTML = lists[i].two;
		three.innerHTML = lists[i].three;
		four.innerHTML = lists[i].four;
		onee.value = lists[i].one;
		twoo.value = lists[i].two;
		threee.value = lists[i].three;
		fourr.value = lists[i].four;
		if (lists[i].check == 1) {
			lists[i].select.checked = true;
		} else {
			onee.checked = false;
			twoo.checked = false;
			threee.checked = false;
			fourr.checked = false;
		}
		if (lists[i].check1 == 1) {
			cont.style.border = lists[i].bor;
			question.style.backgroundColor = lists[i].col;
		} else {
			cont.style.border = '4px solid gray';
			question.style.backgroundColor = 'azure';
		}
	}
}
function check(sel) {
	lists[i].check = 1;
	lists[i].select = sel;
}

var lists = [
	{
		question: 'In which year covid-19 became a  global pandemic?',
		one: '2018',
		two: '2019',
		three: '2020',
		four: '2021',
		check: 0,
		select: '',
		id: 1,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which country has the most number of cases?',
		one: 'America',
		two: 'Italy',
		three: 'India',
		four: 'Australia',
		check: 0,
		select: '',
		id: 2,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Where was the virus originated?',
		one: 'NewYork',
		two: 'Delhi',
		three: 'Wuhan',
		four: 'Beijing',
		check: 0,
		select: '',
		id: 3,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which one is a symptom of covid19?',
		one: 'facia palsy',
		two: 'shortness of breath',
		three: 'fatigue',
		four: 'joint inflammation',
		check: 0,
		select: '',
		id: 4,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which country has no cases?',
		one: 'kiribati',
		two: 'America',
		three: 'Peru',
		four: 'Chile',
		check: 0,
		select: '',
		id: 5,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which sector is the most affected in India?',
		one: 'Agricultural Sector',
		two: 'Telecom',
		three: 'Insurance',
		four: 'MSME',
		check: 0,
		select: '',
		id: 6,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Where was the first case found outside china',
		one: 'Thailand',
		two: 'India',
		three: 'Italy',
		four: 'Russia',
		check: 0,
		select: '',
		id: 7,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'How long is the Incubation period?',
		one: '14',
		two: '10',
		three: '6',
		four: '12',
		check: 0,
		select: '',
		id: 8,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which age groups are most likely to die?',
		one: '>60',
		two: '>40 and <60',
		three: '>20 and <40',
		four: '>0 and <20',
		check: 0,
		select: '',
		id: 9,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Choose the country in which a Leader died due to covid 19?',
		one: 'Phillipines',
		two: 'South Korea',
		three: 'Libya',
		four: 'Mexico',
		check: 0,
		select: '',
		id: 10,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	}
];

question.innerHTML = lists[0].question;
one.innerHTML = lists[0].one;
two.innerHTML = lists[0].two;
three.innerHTML = lists[0].three;
four.innerHTML = lists[0].four;
onee.value = lists[0].one;
twoo.value = lists[0].two;
threee.value = lists[0].three;
fourr.value = lists[0].four;
number = 0;
console.log(lists[0].three);
