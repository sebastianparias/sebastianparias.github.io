

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    mounted() {
        this.$vuetify.theme.dark = true;

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


        gsap.from(".bounce", {
            scrollTrigger: {
                trigger: ".bounce",
            },
            ease: Bounce.easeOut,
            scale: 0.5,
            duration: 1,
        });

        gsap.to("#introduction", {
            scrollTrigger: {
                trigger: "#introduction",
                start: "top center",
            },
            opacity: 1,
            duration: 2
        });

        gsap.from("#skills", {
            scrollTrigger: {
                trigger: "#skills",
                start: "top bottom",
            },
            x: -400,
            duration: 2
        });

        gsap.from("#timeline", {
            scrollTrigger: {
                trigger: "#timeline",
                start: "top bottom",
            },
            x: 400,
            duration: 2
        });

        gsap.from("#portfolio", {
            scrollTrigger: {
                trigger: "#portfolio",
                start: "top bottom",
            },
            x: -400,
            duration: 2
        });


        gsap.from("#contact", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            x: 400,
            duration: 2
        });

    },

    data: {
        english: 1,
        darkTheme: true,
        dialog: false,
        indicatorsApp: [
            './img/1.png',
            './img/2.png',
            './img/3.png',
            './img/4.png',
            './img/5.png',
            './img/6.png',
            './img/7.png'
        ],

        goalsApp: { title: 'Laravel + Vue Indicators/Indicadores app', path: './img/1.png' },
        todoApp: { title: 'Laravel to-do app', path: './img/todo.png' },
        pokeApp: {title: 'Vue pokedex app', path: './img/poke.png'},

        skills: [
            { name: 'HTML', stars: 5 },
            { name: 'CSS', stars: 4 },
            { name: 'JavaScript', stars: 4 },
            { name: 'Vue.js', stars: 4 },
            { name: 'Laravel', stars: 3 },
            { name: 'MySQL', stars: 3 },
            { name: 'PHP', stars: 3 },
            { name: 'Git', stars: 4 },
            { name: 'English', stars: 4 },
        ],

        eng: {
            timeline: [
                { period: 'April 2020 - December 2021', icon: 'mdi-school-outline', title: 'Education', text: 'I studied a software development degree at Servicio Nacional de Aprendizaje (SENA).' },
                { period: 'January 2022 - June 2022', icon: 'mdi-coffee-outline', title: 'Career break', text: 'I focused on learning tools like Git, Vue.js, and Laravel, and I also improved my English as the second language.' },
                { period: 'July 2022 - December 2022', icon: 'mdi-account-hard-hat-outline', title: 'Experience', text: "I'm doing an internship at Tecnoparque (Medellín), giving maintenance to SENNOVA apps, an institutional program that helps universities and companies to develop innovative projects. Those apps are developed using Vue and Laravel frameworks." }
            ],


            titles: {
                welcome: 'Welcome'
            },

            intro: {
                description: "I'm a Bilingual web developer, currently I'm doing an internship at Tecnoparque. I'm passionate about technology and learning!",
                location: 'From:',
                age: 'Age:'
            },

            navbar: [
                { label: 'about', scrollTo: '#' },
                { label: 'skills', scrollTo: '#skills' },
                { label: 'education and experience', scrollTo: '#timeline' },
                { label: 'see my work', scrollTo: '#portfolio' },
                { label: 'contact', scrollTo: '#contact' },

            ]
        },

        spa: {
            timeline: [
                { period: 'Abril 2020 - Diciembre 2021', icon: 'mdi-school-outline', title: 'Educación', text: 'Estudié un pregrado en desarrollo de software en el Servicio Nacional De Aprendizaje (SENA).' },
                { period: 'Enero 2022 - Junio 2022', icon: 'mdi-coffee-outline', title: 'Descanso profesional', text: 'Me enfoqué en aprender herramientas como Git, Vue.js y Laravel, también mejoré mi inglés como segunda lengua.' },
                { period: 'Julio 2022 - Diciembre 2022', icon: 'mdi-account-hard-hat-outline', title: 'Experiencia', text: 'Me encuentro realizando prácticas en Tecnoparque (Medellín), estoy a cargo del mantenimiento de las aplicaciones de SENNOVA, un programa institucional que ayuda a otras entidades a desarrollar proyectos innovadores. Estas aplicaciones son desarrolladas usando los frameworks Laravel y Vue.' },

            ],
            apps: [
                { title: 'Aplicación de indicadores SENNOVA', path: './img/1.png' },
            ],
            titles: [
                ''
            ],
            intro: {
                description: "Soy un desarrollador web bilingüe, actualmente me encuentro realizando prácticas en Tecnoparque. ¡Soy un apasionado por la tecnología y por aprender!",
                location: 'De:',
                age: 'Edad:'
            },
            navbar: [
                { label: 'Sobre mí', scrollTo: '#' },
                { label: 'Habilidades', scrollTo: '#skills' },
                { label: 'Educación y experiencia', scrollTo: '#timeline' },
                { label: 'Mira mi trabajo', scrollTo: '#portfolio' },
                { label: 'Contacto', scrollTo: '#contact' },
            ]
        },

    },
    methods: {
        openLink(url) {
            window.open(url);
        },
        scrollTo(element) {
            gsap.to(window, { duration: 2, scrollTo: { y: element, offsetY: 200 } });
        },

        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        changeLanguage() {
            this.english = !this.english
        },
    },
    computed: {
        age() {
            const bornYear = 2000
            const currentYear = new Date().getFullYear()
            return currentYear - bornYear
        },
        currentYear() {
            const currentYear = new Date().getFullYear()
            return currentYear
        },
        timeline() {
            if (this.english) {
                return this.eng.timeline
            } else {
                return this.spa.timeline
            }
        },
        apps() {
            if (this.english) {
                return this.eng.apps
            } else {
                return this.spa.apps
            }
        },
        intro() {
            if (this.english) {
                return this.eng.intro.description
            } else {
                return this.spa.intro.description
            }

        },
        location() {
            if (this.english) {
                return this.eng.intro.location
            } else {
                return this.spa.intro.location
            }

        },
        ageString() {
            if (this.english) {
                return this.eng.intro.age
            } else {
                return this.spa.intro.age
            }
        },
        nameLabel() {
            if (this.english) {
                return "Name"
            } else {
                return "Nombre"
            }
        },
        subjectLabel() {
            if (this.english) {
                return "Subject"
            } else {
                return "Asunto"
            }
        },
        messageLabel() {
            if (this.english) {
                return "Message"
            } else {
                return "Mensaje"
            }
        },
        buttonText() {
            if (this.english) {
                return "Submit"
            } else {
                return "Enviar"
            }
        },
        navbar() {
            if (this.english) {
                return this.eng.navbar
            } else {
                return this.spa.navbar
            }
        }
    }
})
