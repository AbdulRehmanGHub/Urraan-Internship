const topText = Vue.createApp({
    data() {
        return {
            toptext: "My Portfolio Website"
        }
    }
});

const skillsName = Vue.createApp({
    data() {
        return {
            mySkills: ["HTML5", "CSS3", "BOOTSTRAP", "TAILWIND", "JAVASCRIPT", "VUE JS", "REACT JS", "PHP", "MYSQL", "GIT and GITHUB"]
        }
    }
});

const langImages = Vue.createApp({
    data() {
        return {
            learningLang: ["img/html.png", "img/css.png", "img/bootstrap.png", "img/tailwind.png", "img/js.png", "img/vuejs.png", "img/react.png", "img/php.png", "img/mysql.png", "img/git.png", "img/github.png",],
        }
    }
});

const myProjects = Vue.createApp({
    data() {
        return {
            myProjects: [
                { name: 'HTML Template', url: '../Project_Screenshots/html_template.jpg' },
                { name: 'Catchub', url: '../Project_Screenshots/catchub.jpg' },
                { name: 'Submission', url: '../Project_Screenshots/submission.jpg' },
                { name: 'RedCard', url: '../Project_Screenshots/redcard.jpg' },
                { name: 'Keefer', url: '../Project_Screenshots/keefer.jpg' },
                { name: 'Age to Days', url: '../Project_Screenshots/age2days.jpg' },
                { name: 'Hours to Seconds', url: '../Project_Screenshots/hours2seconds.jpg' },
                { name: 'Find Next Number', url: '../Project_Screenshots/findnextnum.jpg' },
                { name: 'First Letter Capital', url: '../Project_Screenshots/firstlettercapital.jpg' },
                { name: 'BMI Calculator', url: '../Project_Screenshots/bmi_calc.jpg' },
                { name: 'Array First Last Letter', url: '../Project_Screenshots/array_first_last_number.jpg' },
                { name: 'Addition JS', url: '../Project_Screenshots/addition.jpg' },
                { name: 'Toggle Buttons', url: '../Project_Screenshots/toggler.jpg' },
                { name: 'TO DO List', url: '../Project_Screenshots/todo.jpg' },
                { name: 'Image Slider', url: '../Project_Screenshots/imageslider.jpg' },
                { name: 'Circles Animation', url: '../Project_Screenshots/circleanimation.jpg' },
            ]
        }
    }
});

const aboutMe = Vue.createApp({
    data(){
        return{
            paras: [
                'I am a Full Stack Web Developer with 2+ Years of experience in building websites and web applications using Modern Technologies. I have a strong foundation in web development and programming. I am passionate about learning new technologies and implementing them in real-world projects. I have a strong understanding of web development concepts and a keen interest in working on challenging projects. I am a quick learner and a team player who can work efficiently in a fast-paced environment.',
                
                'I have hands-on experience in Frontend Technologies like HTML5, CSS3, JavaScript, React, and more. I have also worked on Backend Technologies like PHP, Node JS, and MySQL. I have worked on various projects and developed a strong understanding of the software development life cycle. I have a strong understanding of version control systems like Git and GitHub. I have also worked on various projects using different APIs and libraries.'
            ]
        }
    }
})

topText.mount('#top-text')
skillsName.mount('#container')
langImages.mount('#img-container')
myProjects.mount('#img-with-text')
aboutMe.mount('#aboutMe')