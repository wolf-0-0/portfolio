const arrowSmall = document.querySelector("#big-arrow-small");
const minPosition = -1;
const maxPosition = 4;
let currentPosition = 0;
let arrowSpeed = 0.1;

const skillBoxes = document.querySelectorAll(".main-skills")

const sectionList = document.querySelectorAll("section")
const sectionSkills = sectionList[2]

const mediaWidth = window.matchMedia("(max-width: 1080px)")

const projectContent = document.querySelectorAll(".project-content")
const hidden = document.querySelector(".hidden")

const navigationList = document.querySelectorAll(".list")
const educationContent = document.querySelectorAll(".contents")

function arrowAnimation() {
    currentPosition = currentPosition + arrowSpeed;
    if (currentPosition > maxPosition || currentPosition < minPosition) {
        arrowSpeed = arrowSpeed * (-1)
    } else {
        arrowSmall.style.transform = "translate(-0.5px, " + currentPosition + "px)"
    }
    window.requestAnimationFrame(arrowAnimation);
}


function activeLink(currentSection) {
    navigationList.forEach((item) => {
        item.classList.remove("active")
        if (item.classList.contains(currentSection)) {
            item.classList.add("active");
            //console.log(item);
        }
    })
}

window.requestAnimationFrame(arrowAnimation);

window.addEventListener("scroll", function (e) {
    //console.log(scrollY);
    sectionList.forEach((sectionItem) => {
        if (scrollY >= Math.round(sectionItem.offsetTop - (sectionItem.clientHeight / 2))) {
            var currentClassName = sectionItem.className + "-nav"
            activeLink(currentClassName);
        }
    })
    const sectionSkills = sectionList[2]
    console.log(sectionSkills);

    if (mediaWidth.matches && (sectionSkills.offsetTop - sectionSkills.clientHeight) < scrollY && scrollY < (sectionSkills.offsetTop + sectionSkills.clientHeight)) {
        var pos = (scrollY - sectionSkills.offsetTop)
        //console.log(pos)
        skillBoxes[0].style.transform = "translateX(" + pos + "px)"
        skillBoxes[1].style.transform = "translateX(" + -pos + "px)"
        skillBoxes[2].style.transform = "translateX(" + pos + "px)"
    } else {
        if ((sectionSkills.offsetTop - sectionSkills.clientHeight / 2) < scrollY && scrollY < sectionSkills.offsetTop) {
            var pos = (scrollY - sectionSkills.offsetTop)
            //console.log(pos)
            skillBoxes[0].style.transform = "translateX(" + pos + "px)"
            skillBoxes[1].style.transform = "translateY(" + -pos + "px)"
            skillBoxes[2].style.transform = "translateX(" + -pos + "px)"
        }
        if (sectionSkills.offsetTop < scrollY && scrollY < (sectionSkills.offsetTop + sectionSkills.clientHeight)) {
            var pos = (scrollY - sectionSkills.offsetTop)
            //console.log(pos)
            skillBoxes[0].style.transform = "translateX(" + -pos + "px)"
            skillBoxes[1].style.transform = "translateY(" + -pos + "px)"
            skillBoxes[2].style.transform = "translateX(" + pos + "px)"
        }
    }
    //Projects Animation
    if (scrollY >= sectionList[3].offsetTop - (sectionList[3].clientHeight / 2)) {
        projectContent.forEach(function (item, index) {
            let delay = 1.5 + (index / 1.5);
            item.style.transition += "all " + delay + "s"
            //console.log(item);
            item.classList.remove("hidden")
        })
    }
})

function activeContent() {
    educationContent.forEach((content) =>
        content.classList.remove("active")
    )
    this.classList.add("active")
}

educationContent.forEach((content) =>
    content.addEventListener("click", activeContent))


