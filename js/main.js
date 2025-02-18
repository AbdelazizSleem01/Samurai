
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
        {label: "Shop",url: "https://samurai-mu.vercel.app/category.html" ,src : "imgs\back-bag-black.jpeg"},
        {label: "Category wear",url: "https://samurai-mu.vercel.app/category.html"},
        {label: "Shop Category",url: "https://samurai-mu.vercel.app/category.html"},
        {label: "Rucksack ",url: "https://samurai-mu.vercel.app/category.html"},
        {label: "Men's Denim Jeans Shorts",url: "https://samurai-mu.vercel.app/category.html"},
        {label: "T-shirt for Men Pale Blue",url: "https://samurai-mu.vercel.app/category.html"},
        { label: "Product Details", url: "https://samurai-mu.vercel.app/details.html" },
        { label: "Product Checkout", url: "https://samurai-mu.vercel.app/check.html" },
        { label: "Shopping Cart", url: "https://samurai-mu.vercel.app/shopping%20cart.html" },
        { label: "pages", url: "https://samurai-mu.vercel.app/Traching.html" },
        { label: "Traching", url: "https://samurai-mu.vercel.app/Traching.html" },
        { label: "Contact", url: "https://samurai-mu.vercel.app/contact.html" },
        { label: "login", url: "https://samurai-mu.vercel.app/LOGIN.html" },
        { label: "Signup", url: "https://samurai-mu.vercel.app/SIGNUP.html" },
        { label: "Blog", url: "https://samurai-mu.vercel.app/blog.html" },
        { label: "Blog Details", url: "https://samurai-mu.vercel.app/blog%20details.html" },
        { label: "Feature Product",  url: "https://samurai-mu.vercel.app/index.html"}

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
app.use(express.static(__dirname + "/public/"));



