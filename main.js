

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    mounted() {
        this.$vuetify.theme.dark = true;

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        

        gsap.from(".bounce", {
            scrollTrigger: {
                trigger: ".bounce",
                // toggleActions: "restart"

            },
            ease: Bounce.easeOut,
            scale: 0.5,
            // x: 400,
            duration: 1
        });

        gsap.from(".fromX", {
            scrollTrigger: {
                trigger: ".fromX",
                // toggleActions: "restart"

            },
            x: 400,
            duration: 1
        });        
        
        gsap.from(".from-X", {
            scrollTrigger: {
                trigger: ".from-X",
                // toggleActions: "restart"

            },
            x: -400,
            duration: 1
        });        
        
        gsap.from(".fromY", {
            scrollTrigger: {
                trigger: ".fromY",
                // toggleActions: "restart"
            },
            y: 400,
            duration: 1
        });



    },

    data: {
        language: 1,
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
        skills: [
            { name: 'HTML', stars: 5 },
            { name: 'CSS', stars: 4 },
            { name: 'JavaScript', stars: 4 },
            { name: 'Vue.js', stars: 4 },
            { name: 'Vuetify', stars: 3 },
            { name: 'Vuex', stars: 4 },
            { name: 'Bootstrap', stars: 5 },
            { name: 'Git', stars: 4 },
            { name: 'English', stars: 4 },
        ],

        eng: {
            timeline: [
                { period: 'April 2020 - December 2021', icon: 'mdi-school-outline', title: 'Education', text: 'I studied a software development degree at Servicio Nacional de Aprendizaje (SENA).' },
                { period: 'January 2022 - June 2022', icon: 'mdi-coffee-outline', title: 'Career break', text: 'I focused on learning tools like Git, Vue.js, and Vuetify, and I also improved my English as the second language.' },
                { period: 'July 2022 - December 2022', icon: 'mdi-account-hard-hat-outline', title: 'Experience', text: "I'm doing an internship at Tecnoparque (Medellín), giving maintenance to SENNOVA apps, an institutional program that helps universities and companies to develop innovative projects." }
            ],
            apps: [
                { title: 'Goal indicators app', path: './img/1.png' },
            ],
            titles: {
                welcome: 'Welcome'
            },


            intro: {
                description: "I'm a Bilingual front-end developer, currently I'm doing an internship at Tecnoparque. I'm passionate about technology and learning!",
                location: 'From:',
                age: 'Age:'
            }


        },

        spa: {
            timeline: [
                { period: 'Abril 2020 - Diciembre 2021', icon: 'mdi-school-outline', title: 'Educación', text: 'Estudié un pregrado en desarrollo de software en el Servicio Nacional De Aprendizaje (SENA).' },
                { period: 'Enero 2022 - Junio 2022', icon: 'mdi-coffee-outline', title: 'Descanso profesional', text: 'Me enfoqué en aprender herramientas como Git, Vue.js y Vuetify, también mejoré mi inglés como segunda lengua.' },
                { period: 'Julio 2022 - Diciembre 2022', icon: 'mdi-account-hard-hat-outline', title: 'Experiencia', text: 'Me encuentro realizando prácticas en Tecnoparque (Medellín), estoy a cargo del mantenimiento de las aplicaciones de SENNOVA, un programa institucional que ayuda a otras entidades a desarrollar proyectos innovadores.' },

            ],
            apps: [
                { title: 'Aplicación de indicadores SENNOVA', path: './img/1.png' },
            ],
            titles: [
                ''
            ],
            intro: {
                description: "Soy un desarrollador front-end bilingüe, actualmente me encuentro realizando prácticas en Tecnoparque. ¡Soy un apasionado por la tecnología y por aprender!",
                location: 'De:',
                age: 'Edad:'
            }
        },

    },
    methods: {
        test(){
            // gsap.to(window, {duration: 0.2, scrollTo:"#test"});
            gsap.to(window, {duration: 2, scrollTo: {y: "#test", offsetY: 100}});

        },

        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        changeLanguage() {
            this.language = !this.language
        },
    },
    computed: {
        age: function () {
            const bornYear = 2000
            const currentYear = new Date().getFullYear()
            return currentYear - bornYear
        },
        currentYear() {
            const currentYear = new Date().getFullYear()
            return currentYear
        },
        timeline() {
            if (this.language) {
                return this.eng.timeline
            } else {
                return this.spa.timeline
            }
        },
        apps() {
            if (this.language) {
                return this.eng.apps
            } else {
                return this.spa.apps
            }
        },
        intro() {
            if (this.language) {
                return this.eng.intro.description
            } else {
                return this.spa.intro.description
            }

        },
        location() {
            if (this.language) {
                return this.eng.intro.location
            } else {
                return this.spa.intro.location
            }

        },
        ageString() {
            if (this.language) {
                return this.eng.intro.age
            } else {
                return this.spa.intro.age
            }
        },
        nameLabel() {
            if (this.language) {
                return "Name"
            } else {
                return "Nombre"
            }
        },
        subjectLabel() {
            if (this.language) {
                return "Subject"
            } else {
                return "Asunto"
            }
        },
        messageLabel() {
            if (this.language) {
                return "Message"
            } else {
                return "Mensaje"
            }
        },
        buttonText() {
            if (this.language) {
                return "Submit"
            } else {
                return "Enviar"
            }
        },
    }
})