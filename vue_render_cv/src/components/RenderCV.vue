<template>
    <div class="container-fluid">
        <div class="row">

            <cv_1 :dataCv="dataCv"></cv_1>

            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <h3 class="input-title">Your Profile</h3>
                <div class="input-area" id="accordion" :class="{ inputAreaFixed: fixedOrderPanel}">
                    <div class="card">
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse" href="#profile">
                                Your Profile
                            </a>
                        </div>
                        <div id="profile" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <div class="input-area-ele input-ava-name">
                                    <span>Name:</span>
                                    <input type="text" v-model="dataCv.avaName">
                                </div>
                                <div class="input-area-ele input-ava-pos">
                                    <span>Position:</span>
                                    <input type="text" v-model="dataCv.avaPosition">
                                </div>
                                <div class="input-area-ele input-cs-desc">
                                    <span>Description:</span>
                                    <textarea v-model="dataCv.cvDesc">{{dataCv.cvDesc}}</textarea>
                                </div>
                                <div class="input-area-ele input-cv-contact">
                                    <div class="input-cv-ele">
                                        <span>Your Email: </span>
                                        <input type="text" v-model="dataCv.cvMail">
                                    </div>
                                    <div class="input-cv-ele">
                                        <span>Your Address: </span>
                                        <input type="text" v-model="dataCv.cvAddress">
                                    </div>
                                    <div class="input-cv-ele">
                                        <span>Your Phone Number: </span>
                                        <input type="text" v-model="dataCv.cvPhone">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                Your Academic Level
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <div class="count-place-area">
                                    <span class="count-place-title">Your Number of working place</span>
                                    <button v-on:click="removeCountPlace()" class="count-place">-</button>
                                    <span>{{dataCv.arrWorkPlace.length}}</span>
                                    <button v-on:click="addCountPlace()" class="count-place">+</button>
                                </div>
                                <ul class="work-place-list">
                                    <li v-for="(value, index) in dataCv.arrWorkPlace">
                                        <p>Place {{index + 1}}</p>
                                        <div>
                                            <span>Year: </span>
                                            <input type="text" v-model="value.year">
                                        </div>
                                        <div>
                                            <span>School: </span>
                                            <input type="text" v-model="value.title">
                                        </div>
                                        <div>
                                            <span>Description: </span>
                                            <input type="text" v-model="value.description">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                Your Experiences
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <div class="count-place-area">
                                    <span class="count-place-title">Your Number of working place</span>
                                    <button v-on:click="removeCountExp()" class="count-place">-</button>
                                    <span>{{dataCv.arrExp.length}}</span>
                                    <button v-on:click="addCountExp()" class="count-place">+</button>
                                </div>
                                <ul class="work-place-list">
                                    <li v-for="(value, index) in dataCv.arrExp">
                                        <p>Place {{index + 1}}</p>
                                        <div>
                                            <span>Year: </span>
                                            <input type="text" v-model="value.year">
                                        </div>
                                        <div>
                                            <span>School: </span>
                                            <input type="text" v-model="value.title">
                                        </div>
                                        <div>
                                            <span>Description: </span>
                                            <input type="text" v-model="value.description">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                Your Skills
                            </a>
                        </div>
                        <div id="collapseFour" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                                <div class="count-place-area">
                                    <span class="count-place-title">Your Number of Skills</span>
                                    <button v-on:click="removeCountSkill()" class="count-place">-</button>
                                    <span>{{dataCv.arrSkill.length}}</span>
                                    <button v-on:click="addCountSkill()" class="count-place">+</button>
                                </div>
                                <ul class="work-place-list">
                                    <li v-for="(value, index) in dataCv.arrSkill">
                                        <div>
                                            <input type="text" v-model="value.name" class="input-skill-name">
                                            <input type="number" v-model="value.value" min="1" max="100" class="input-skill-value">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import cv_1 from './../components/render_cv/cv_1'
    export default {
        name: "RenderCV",
        components: {
          cv_1,
        },
        data() {
            return{
                dataCv: {
                    avaName: 'Pall Smith',
                    avaPosition: 'Creative Director',
                    cvDesc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    cvMail: 'email@hotmail.com',
                    cvAddress: 'New York 297 APO AP 96206',
                    cvPhone: '012345678910',
                    arrWorkPlace: [
                        {'year': '2013-2019', 'title':'National Economic University', 'description':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {'year': '2013-2019', 'title':'NUCE', 'description':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    ],
                    arrExp: [
                        {'year': '2013-2019', 'title':'National Economic University', 'description':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {'year': '2013-2019', 'title':'NUCE', 'description':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    ],
                    arrSkill: [
                        {name: 'Window', value: 70},
                        {name: 'MC Office', value: 40},
                        {name: 'MAC OSX', value: 60},
                    ]
                },
                fixedOrderPanel: false,
            };
        },
        mounted() {
            window.addEventListener('scroll',() => this.handleScroll());
        },
        methods: {
            removeCountPlace: function () {
                this.dataCv.arrWorkPlace.pop();
            },
            addCountPlace: function () {
                this.dataCv.arrWorkPlace.push({
                    'year': '1998-2019',
                    'title': 'National Economic University',
                    'description': '...'
                });
            },
            removeCountExp: function () {
                this.dataCv.arrExp.pop();
            },
            addCountExp: function () {
                this.dataCv.arrExp.push({
                    'year': '1998-2019',
                    'title': 'National Economic University',
                    'description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                });
            },
            removeCountSkill: function () {
                this.dataCv.arrSkill.pop();
            },
            addCountSkill: function () {
                this.dataCv.arrSkill.push({
                    name: 'Office 365',
                    value: 50,
                })
            },
            handleScroll: function () {
                if (window.scrollY > 74) {
                    this.fixedOrderPanel = true
                } else {
                    this.fixedOrderPanel = false
                }
            },
        }
    }
</script>

<style scoped>
    .inputAreaFixed {
        position: fixed;
        top: 10px;
    }

    .card {
        margin-bottom: 20px;
    }
    .card-header {
        padding: 3px 10px;
    }
    .card-header a {
        color: #333;
    }
    .card-body {
        padding: 20px 0px 20px 10px;
    }
    .input-area {
        width: 540px;
        padding-left: 100px;
        text-align: left;
        color: #737373;
    }
    .input-area-ele, .input-cv-ele {
        margin-bottom: 20px;
    }
    .input-area-ele span {
        display: inline-block;
        width: 100px;
        float: left;
    }
    .input-area input {
        outline: none;
        width: 300px;
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        padding: 3px 10px;
        color: #737373;
    }
    .input-area textarea {
        width: 300px;
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        padding: 3px 10px;
        height: 200px;
        color: #737373;
    }
    .input-title {
        margin-bottom: 20px;
        text-align: center;
    }
    .count-place-area .count-place {
        font-size: 17px;
        padding: 0px 8px;
        border-radius: 50%;
        border: none;
    }
    .count-place-area .count-place-title {
        display: inline-block;
        width: 250px;
        margin-bottom: 20px;
    }
    .work-place-list {
        list-style-type: none;
    }
    .work-place-list li {
        margin-bottom: 25px;
    }
    .work-place-list li div {
        margin-bottom: 10px;
    }
    .work-place-list li div span {
        display: inline-block;
        width: 100px;
    }
    .input-skill-name {
        width: 25% !important;
    }
    .input-skill-value {
        width: 72% !important;
    }
    /*# sourceMappingURL=style.css.map */
</style>