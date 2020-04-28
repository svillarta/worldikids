// バーガー
function burgpop() {
	if (document.getElementById('burg').className == 'burg1') {
		document.getElementById('main').style.display = 'none';
		document.getElementById('burg').className = 'burg2';
	} else {
		document.getElementById('main').style.display = 'block';
		document.getElementById('burg').className = 'burg1';
	}
}

// 上へ
function up() {
	window,scroll(0,0);
}

// タブ（3つまで）
var url = location.href;

function tab() {
	if (url.indexOf('#2') != -1) {
		document.getElementById('tab2').className = 'activated';
		document.getElementById('category2').className = 'tabcontent activated';
	} else if (url.indexOf('#3') != -1) {
		document.getElementById('tab3').className = 'activated';
		document.getElementById('category3').className = 'tabcontent activated';
	} else if (url.indexOf('#4') != -1) {
		document.getElementById('tab4').className = 'activated';
		document.getElementById('category4').className = 'tabcontent activated';
	} else {
		document.getElementById('tab1').className = 'activated';
		document.getElementById('category1').className = 'tabcontent activated';
	}
}
function tabactivate() {
	this.className = 'activated';
	
	url = url.replace('abroad','');
	url = url.replace('skype','');

	if (this.id == 'tab1') {
		document.getElementById('tab2').className = '';
		if (document.getElementById('category3')) { // 3がない場合もある
			document.getElementById('tab3').className = '';
		}
		if (document.getElementById('category4')) { // 4がない場合もある
			document.getElementById('tab4').className = '';
		}
		document.getElementById('category1').className = 'tabcontent activated';
		document.getElementById('category2').className = 'tabcontent';
		if (document.getElementById('category3')) { // 3がない場合もある
			document.getElementById('category3').className = 'tabcontent';
		}
		if (document.getElementById('category4')) { // 4がない場合もある
			document.getElementById('category4').className = 'tabcontent';
		}
		url = url.replace('#2','');
		url = url.replace('#3','');
		url = url.replace('#4','');
		location.href = url + '#1';
	} else if (this.id == 'tab2') {
		document.getElementById('tab1').className = '';
		if (document.getElementById('category3')) {
			document.getElementById('tab3').className = '';
		}
		if (document.getElementById('category4')) {
			document.getElementById('tab4').className = '';
		}
		document.getElementById('category2').className = 'tabcontent activated';
		document.getElementById('category1').className = 'tabcontent';
		if (document.getElementById('category3')) {
			document.getElementById('category3').className = 'tabcontent';
		}
		if (document.getElementById('category4')) {
			document.getElementById('category4').className = 'tabcontent';
		}
		url = url.replace('#1','');
		url = url.replace('#3','');
		url = url.replace('#4','');
		location.href = url + '#2';
	} else if (this.id == 'tab3') {
		document.getElementById('tab1').className = '';
		document.getElementById('tab2').className = '';
		if (document.getElementById('category4')) {
			document.getElementById('tab4').className = '';
		}
		if (document.getElementById('category3')) {
			document.getElementById('category3').className = 'tabcontent activated';
		}
		document.getElementById('category1').className = 'tabcontent';
		document.getElementById('category2').className = 'tabcontent';
		if (document.getElementById('category4')) {
			document.getElementById('category4').className = 'tabcontent';
		}
		url = url.replace('#1','');
		url = url.replace('#2','');
		url = url.replace('#4','');
		location.href = url + '#3';
	} else {
		document.getElementById('tab1').className = '';
		document.getElementById('tab2').className = '';
		document.getElementById('tab3').className = '';
		document.getElementById('category4').className = 'tabcontent activated';
		document.getElementById('category1').className = 'tabcontent';
		document.getElementById('category2').className = 'tabcontent';
		document.getElementById('category3').className = 'tabcontent';
		url = url.replace('#1','');
		url = url.replace('#2','');
		url = url.replace('#3','');
		location.href = url + '#4';
	}
}

// アコーディオン
function opener() {
	this.nextElementSibling.className = 'open';
	this.className = 'open';
}
function closer() {
	this.parentNode.className = '';
	this.parentNode.previousElementSibling.className = '';
}

// 講師紹介
function opener2() {
	this.parentNode.nextElementSibling.className = 'addition expand';
	this.parentNode.className = 'prof expand';
}
function closer2() {
	this.parentNode.className = 'addition';
	this.parentNode.previousElementSibling.className = 'prof';
}

// 検索
function searcher() {
	if (document.getElementById('search').style.display == 'none') {
		document.getElementById('search').style.display = 'block';
	} else {
		document.getElementById('search').style.display = 'none';
	}
}



function setOnload(func) {
	(window.addEventListener)? window.addEventListener('load', func, false):
	(window.attachEvent)? window.attachEvent('onload', func):
	window.onload = func;
}
function startWorks() {
	if (document.getElementById('burg')) {
		document.getElementById('burg').onclick = burgpop;
	}
	if (document.getElementById('upper')) {
		document.getElementById('upper').onclick = up;
	}
	if (document.getElementById('tab')) {
		tab();

		var everytab = document.getElementById('tab').children;
		for (var i=0;i<4;i++) { // タブは4つまで
			if (everytab[i]) everytab[i].onclick = tabactivate;
		}
	}
	if (document.getElementById('acc1')) {
		var quest = document.getElementById('tabset').children[2].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[0].onclick = opener;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer;
				quest[i].children[1].appendChild(neObj);
			}
		}
	}
	if (document.getElementById('acc2')) {
		var quest = document.getElementById('tabset').children[3].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[0].onclick = opener;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer;
				quest[i].children[1].appendChild(neObj);
			}
		}
	}
	if (document.getElementById('acc3')) {
		var quest = document.getElementById('tabset').children[4].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[0].onclick = opener;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer;
				quest[i].children[1].appendChild(neObj);
			}
		}
	}
	if (document.getElementById('acc4')) {
		var quest = document.getElementById('tabset').children[5].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[0].onclick = opener;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer;
				quest[i].children[1].appendChild(neObj);
			}
		}
	}

	if (document.getElementById('category1')) {
		var quest = document.getElementById('tabset').children[2].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV' && quest[i].children[2]) {
				quest[i].children[2].getElementsByTagName('a')[0].onclick = opener2;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer2;
				quest[i].children[3].appendChild(neObj);
			}
		}
	}
	if (document.getElementById('category2')) {
		var quest = document.getElementById('tabset').children[3].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[2].getElementsByTagName('a')[0].onclick = opener2;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer2;
				quest[i].children[3].appendChild(neObj);
			}
		}
	}
	if (document.getElementById('category3')) {
		var quest = document.getElementById('tabset').children[4].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[2].getElementsByTagName('a')[0].onclick = opener2;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer2;
				quest[i].children[3].appendChild(neObj);
			}
		}
	}
	if (document.getElementById('category4')) {
		var quest = document.getElementById('tabset').children[5].children;
		for (var i=0;i<quest.length;i++) {
			if (quest[i].nodeName === 'DIV') {
				quest[i].children[2].getElementsByTagName('a')[0].onclick = opener2;
				
				var neObj = document.createElement('span');
				neObj.innerHTML = '×';
				neObj.className = 'cbtn';
				neObj.onclick = closer2;
				quest[i].children[3].appendChild(neObj);
			}
		}
	}

//	if (document.getElementById('searchbtn')) {
//		document.getElementById('searchbtn').onclick = searcher;
//		document.getElementById('search').style.display = 'none';
//	}
}
setOnload(startWorks);
