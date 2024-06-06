var slider_img = document.querySelector('.slider-img');
var images1 = ['Baybayin.png', 'Gold.png', 'Jar.png', 'Tabon.png', 'Textile.png'];
var images2 = ['Builders.png', 'Ermita.png', 'Market.png', 'Parisian.png', 'Spolarium.png'];
var images3 = ['Akbil.png', 'Coffin.png', 'Lolong.png', 'Pouches.png', 'Tree of Life.png'];
var images4 = [];



document.addEventListener("DOMContentLoaded", function() {
    const imgContainers = document.querySelectorAll('.img-con');

    imgContainers.forEach(function(container) {
        const img = container.querySelector('img');
        
        container.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
        });

        container.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
});

function aboutUs() {
	window.location.href = "file:///D:/Final%20output%20IPT/AboutUs.html";
}

function btnHomepage() {
    window.location.href = "file:///D:/Final%20output%20IPT/mainPage.html";
}
/*ANTHROPOLOGY CAROUSEL*/
var a = 0;

function back1() {
	if(a <= 0) a = images1.length;	
	a--;
	return setImg1();			 
}

function next1() {
	if(a >= images1.length-1) a = -1;
	a++;
	return setImg1();			 
}

function setImg1() {
	return slider_img.setAttribute('src', "anthroimg/"+images1[a]);
	
}

/*FINE ARTS CAROUSEL*/

var b = 0;

function back2() {
	if(b <= 0) b = images2.length;	
	b--;
	return setImg2();			 
}

function next2() {
	if(b >= images2.length-1) b = -1;
	b++;
	return setImg2();			 
}

function setImg2() {
	return slider_img.setAttribute('src', "artsimg/"+images2[b]);
	
}

/*NATURAL HISTORY CAROUSEL*/

var c = 0;

function back3() {
	if(c <= 0) c = images3.length;	
	c--;
	return setImg3();			 
}

function next3() {
	if(c >= images3.length-1) c = -1;
	c++;
	return setImg3();			 
}

function setImg3() {
	return slider_img.setAttribute('src', "naturalhistoimg/"+images3[c]);
	
}

/*PLANETARIUM CAROUSEL*/

var d = 0;

function back4() {
	if(d <= 0) d = images4.length;	
	d--;
	return setImg4();			 
}

function next4() {
	if(d >= images4.length-1) d = -1;
	d++;
	return setImg4();			 
}

function setImg4() {
	return slider_img.setAttribute('src', "planetariumimg/"+images4[d]);
	
}
