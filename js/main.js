
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 2000);
	
});

const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
// Functions
const activateTab = tabnum => {
    
    tabs.forEach( tab => {
    tab.classList.remove('active')
    })
    
    tabContents.forEach( tabContent => {
        tabContent.classList.remove('active')
    })
    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
}

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    });
})



function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}
function on1() {
    document.getElementById("overlay1").style.display = "block";
}
function off1() {
    document.getElementById("overlay1").style.display = "none";
}
function on2() {
    document.getElementById("overlay2").style.display = "block";
}
function off2() {
    document.getElementById("overlay2").style.display = "none";
}
function on3() {
    document.getElementById("overlay3").style.display = "block";
}
function off3() {
    document.getElementById("overlay3").style.display = "none";
}
function on4() {
    document.getElementById("overlay4").style.display = "block";
}
function off4() {
    document.getElementById("overlay4").style.display = "none";
}
function on5() {
    document.getElementById("overlay5").style.display = "block";
}
function off5() {
    document.getElementById("overlay5").style.display = "none";
}
function on6() {
    document.getElementById("overlay6").style.display = "block";
}
function off6() {
    document.getElementById("overlay6").style.display = "none";
}
function on7() {
    document.getElementById("overlay7").style.display = "block";
}
function off7() {
    document.getElementById("overlay7").style.display = "none";
}
function on8() {
    document.getElementById("overlay8").style.display = "block";
}
function off8() {
    document.getElementById("overlay8").style.display = "none";
}
function on9() {
    document.getElementById("overlay9").style.display = "block";
}
function off9() {
    document.getElementById("overlay9").style.display = "none";
}
function on10() {
    document.getElementById("overlay10").style.display = "block";
}
function off10() {
    document.getElementById("overlay10").style.display = "none";
}
function on11() {
    document.getElementById("overlay11").style.display = "block";
}
function off11() {
    document.getElementById("overlay11").style.display = "none";
}

// filter-search

$(function () {
    var words = [
        {label: "Shop",url: "http://127.0.0.1:5500/category.html"},
        {label: "Category wear",url: "http://127.0.0.1:5500/category.html"},
        {label: "Shop Category",url: "http://127.0.0.1:5500/category.html"},
        {label: "Rucksack ",url: "http://127.0.0.1:5500/category.html"},
        {label: "Men's Denim Jeans Shorts",url: "http://127.0.0.1:5500/category.html"},
        {label: "T-shirt for Men Pale Blue",url: "http://127.0.0.1:5500/category.html"},
        { label: "Product Details", url: "http://127.0.0.1:5500/details.html" },
        { label: "Product Checkout", url: "http://127.0.0.1:5500/check.html" },
        { label: "Shopping Cart", url: "http://127.0.0.1:5500/shopping%20cart.html" },
        { label: "pages", url: "http://127.0.0.1:5500/Traching.html" },
        { label: "Traching", url: "http://127.0.0.1:5500/Traching.html" },
        { label: "Contact", url: "http://127.0.0.1:5500/contact.html" },
        { label: "login", url: "http://127.0.0.1:5500/LOGIN.html" },
        { label: "Signup", url: "http://127.0.0.1:5500/SIGNUP.html" },
        { label: "Blog", url: "http://127.0.0.1:5500/blog.html" },
        { label: "Blog Details", url: "http://127.0.0.1:5500/blog%20details.html" },
        { label: "Feature Product",  url: "http://127.0.0.1:5500/index.html"}

    ];
    $("#keyword").autocomplete({
        source: function (request, response) {
        var list = [];
        list = words.filter(function (word) {
            return (
            word.label.indexOf(request.term) === 0 ||
            word.label.toLowerCase().indexOf(request.term) === 0
            );
        });
        response(list);
        },
        select: function(event, ui) {
        location.href = ui.item.url;
        return false;
        },
    });
});