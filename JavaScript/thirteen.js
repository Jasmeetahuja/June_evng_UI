document.getElementsByTagName('h1)
VM1432:1 Uncaught SyntaxError: Invalid or unexpected token
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('div')
HTMLCollection(70) [div#home.banner, div.banner-info, div.container, div.col-md-4.header-left, div.col-md-8.header-right, div.clearfix, div.top-nav.wow, div.container, div.navbar-header.logo, div#bs-example-navbar-collapse-1.collapse.navbar-collapse, div.menu, div.clearfix, div#about.about, div.container, div.col-md-8.about-left, div.col-md-4.about-right, div.clearfix, div.clearfix, div#skills.skills, div.container, div.skills-info, div.col-md-6.bar-grids, div.progress, div.progress-bar.progress-bar-striped.active, div.progress, div.progress-bar.progress-bar-striped.active, div.progress, div.progress-bar.progress-bar-striped.active, div.progress, div.progress-bar.progress-bar-striped.active, div.col-md-6.bar-grids, div.progress, div.progress-bar.progress-bar-striped.active, div.progress, div.progress-bar.progress-bar-striped.active, div.clearfix, div#work.education, div.container, div.work-info, div.col-md-6.work-right.work-right2, div.col-md-6.work-left.work-left2, div.clearfix, div.work-info, div.col-md-6.work-right.work-right2, div.col-md-6.work-left.work-left2, div.clearfix, div#education.work, div.container, div.work-info, div.col-md-6.work-right.work-right2, div.col-md-6.work-left.work-left2, div.clearfix, div.work-info, div.col-md-6.work-right.work-right2, div.col-md-6.work-left.work-left2, div.clearfix, div#contact.welcome.contact, div.container, div.contact-row, div.col-md-6.contact-left, div.col-md-6.contact-right, div.address-left, div.address-right, div.clearfix, div.contact-form, div.clearfix, div.footer, div.container, div.col-md-6.bar-grids, div.col-md-6.bar-grids, home: div#home.banner, bs-example-navbar-collapse-1: div#bs-example-navbar-collapse-1.collapse.navbar-collapse, about: div#about.about, skills: div#skills.skills, work: div#work.education, …]
document.getElementsByTagName('h1')[0]
<h1>​I'm Akkas Singh​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm Akkas Singh"
document.getElementsByTagName('h1')[0].innerText="I am Jasmeet Ahuja"
"I am Jasmeet Ahuja"

document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[1]
<a href=​"#work" class=​"scroll">​Experience​</a>​
document.getElementsByClassName('scroll')[1].innerText
"Experience"
document.getElementsByClassName('scroll')[1].innerText="Profile"
"Profile"
document.getElementsByClassName('scroll')[1].style.color="red"
"red"

document.getElementById('work')
<div id=​"work" class=​"education">​…​</div>​
document.getElementById('work').style.background="yellow"
"yellow"