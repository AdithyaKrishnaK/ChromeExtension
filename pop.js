document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("1").addEventListener("click", openIndex(1));
  document.getElementById("2").addEventListener("click", openIndex(2));
    document.getElementById("3").addEventListener("click", openIndex(3));
  document.getElementById("4").addEventListener("click", openIndex(4));
   document.getElementById("5").addEventListener("click", openIndex(5));
  document.getElementById("6").addEventListener("click", openIndex(6));
    document.getElementById("7").addEventListener("click", openIndex(7));
  document.getElementById("8").addEventListener("click", openIndex(8));
});

function openIndex(i) {
    switch (i) {
        case 1:
            chrome.tabs.create({active: true, url: "https://www.google.co.in/?gfe_rd=cr&ei=IATFWLqUKO7x8Aeg_46wBg"});
            break;
        case 2:
            chrome.tabs.create({active: true, url: "https://www.khanacademy.org/"});
            break;
        case 3:
            chrome.tabs.create({active: true, url: "http://www.amazon.in/"});
            break;
        case 4:
            chrome.tabs.create({active: true, url: "https://en.oxforddictionaries.com/"});
            break;  
        case 5:
            chrome.tabs.create({active: true, url: "https://www.google.co.in/keep/"});
            break;
        case 6:
            chrome.tabs.create({active: true, url: "https://www.codecademy.com/"});
            break;
        case 7:
            chrome.tabs.create({active: true, url: "https://www.codechef.com/"});
            break;
        case 8:
            chrome.tabs.create({active: true, url: "https://www.cnet.com/"});
            break;                       
    }
 
}