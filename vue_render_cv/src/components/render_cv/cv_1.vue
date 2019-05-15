<template>
    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div class="cv-content">
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cv-left">
                        <div class="ava-block">
                            <img src="../../assets/images/ava_1.jpg">
                            <p class="ava-name" v-model="dataCv.avaName">
                                {{dataCv.avaName}}
                            </p>
                            <p class="ava-pos" v-model="dataCv.avaPosition">
                                {{dataCv.avaPosition}}
                            </p>
                        </div>
                        <div class="cv-desc-wrap">
                            <p class="cv-desc" v-model="dataCv.cvDesc">
                                {{dataCv.cvDesc}}
                            </p>
                        </div>
                        <div class="cv-contact">
                            <div class="cv-contact-ele">
                                <i class="sprite sprite-mail"></i>
                                <p>{{dataCv.cvMail}}</p>
                            </div>
                            <div class="cv-contact-ele">
                                <i class="sprite sprite-map"></i>
                                <p>{{dataCv.cvAddress}}</p>
                            </div>
                            <div class="cv-contact-ele">
                                <i class="sprite sprite-phone"></i>
                                <p>{{dataCv.cvPhone}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="cv-right">
                        <div class="chapter education">
                            <div class="title">
                                <h4>Education</h4>
                            </div>
                            <ul>
                                <li v-for="(value, index) in dataCv.arrWorkPlace">
                                    <p class="timeline">
                                        {{value.year}} / <span>{{value.title}}</span>
                                    </p>
                                    <p class="desc">
                                        {{value.description}}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="chapter experience">
                            <div class="title">
                                <h4>Experience</h4>
                            </div>
                            <ul>
                                <li v-for="(value, index) in dataCv.arrExp">
                                    <p class="timeline">
                                        {{value.year}} / <span>{{value.title}}</span>
                                    </p>
                                    <p class="desc">
                                        {{value.description}}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="chapter skills">
                            <div class="title">
                                <h4>Skills</h4>
                            </div>
                            <div class="skill-bar-block">
                                <div class="skill-bar" v-for="(value, index) in dataCv.arrSkill">
                                    <div class="skill-name">
                                        {{value.name}}
                                    </div>
                                    <div class="skill-progress progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: value.value+'%'}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            dataCv: {
                type: Object,
                default: {},
            }
        },
        mounted() {
            console.log(typeof this.dataCv)
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


    @font-face {
        font-family: 'Caviar-Dreams';
        src: url("./../../assets/fonts/font_Caviar_Dreams/Caviar-Dreams.ttf.woff") format("woff"), url("./../../assets/fonts/font_Caviar_Dreams/Caviar-Dreams.ttf.svg#Caviar-Dreams") format("svg"), url("./../../assets/fonts/font_Caviar_Dreams/Caviar-Dreams.ttf.eot"), url("./../../assets/fonts/font_Caviar_Dreams/Caviar-Dreams.ttf.eot?#iefix") format("embedded-opentype");
        font-weight: normal;
        font-style: normal; }
    @font-face {
        font-family: 'Harabara';
        src: url("./../../assets/fonts/font_Harabara/Harabara.ttf.woff") format("woff"), url("./../../assets/fonts/font_Harabara/Harabara.ttf.svg#Harabara") format("svg"), url("./../../assets/fonts/font_Harabara/Harabara.ttf.eot"), url("./../../assets/fonts/font_Harabara/Harabara.ttf.eot?#iefix") format("embedded-opentype");
        font-weight: normal;
        font-style: normal; }
    * {
        margin: 0px;
        padding: 0px; }

    .sprite {
        background-image: url(../../assets/images/icon.png);
        background-repeat: no-repeat;
        display: block;
        margin: auto;
        margin-bottom: 10px; }

    .sprite-mail {
        width: 40px;
        height: 29px;
        background-position: -5px -5px; }

    .sprite-map {
        width: 40px;
        height: 66px;
        background-position: -55px -5px;
        transform: scale(0.7); }

    .sprite-phone {
        width: 40px;
        height: 33px;
        background-position: -105px -5px; }

    .cv-content {
        width: 800px;
        margin: auto;
        background-color: #E4E4E3; }
    .cv-content .cv-right {
        box-shadow: -17px -3px 15px -11px #928787;
        padding-left: 20px;
        padding-top: 100px;
        background-color: #fff; }
    .cv-content .cv-right .chapter .title {
        position: relative; }
    .cv-content .cv-right .chapter .title:before {
        content: '';
        background-color: #EFA92E;
        position: absolute;
        top: 0px;
        left: -40px;
        height: 38px;
        width: 50%;
        z-index: 1; }
    .cv-content .cv-right .chapter .title:after {
        content: '';
        border-left: 20px solid transparent;
        border-right: 0px;
        border-top: 20px solid #E84E0F;
        position: absolute;
        top: 38px;
        left: -40px; }
    .cv-content .cv-right .chapter .title h4 {
        font-size: 35px;
        font-family: 'Harabara';
        margin: 0px;
        color: #fff;
        position: absolute;
        z-index: 2; }
    .cv-content .cv-right .chapter ul {
        font-family: 'Caviar-Dreams';
        list-style-type: none;
        padding-top: 70px; }
    .cv-content .cv-right .chapter ul li {
        margin-bottom: 30px; }
    .cv-content .cv-right .chapter ul li .timeline {
        font-size: 18px;
        margin-bottom: 10px; }
    .cv-content .cv-right .chapter ul li .timeline span {
        color: #E84E0F;
        font-weight: 700; }
    .cv-content .cv-right .chapter ul li .desc {
        font-size: 14px;
        font-style: italic;
        margin: 0px; }
    .cv-content .cv-right .chapter .skill-bar-block {
        padding-top: 70px;
        padding-bottom: 30px;
        font-family: 'Caviar-Dreams'; }
    .cv-content .cv-right .chapter .skill-bar-block .skill-bar {
        margin-bottom: 20px; }
    .cv-content .cv-right .chapter .skill-bar-block .skill-bar .skill-name {
        font-size: 14px;
        text-transform: uppercase;
        width: 35%;
        float: left;
        display: inline-block; }
    .cv-content .cv-right .chapter .skill-bar-block .skill-bar .skill-progress {
        height: 12px;
        width: 55%;
        margin: 0px;
        border: 1px solid #E84E0F;
        display: inline-block;
        border-radius: 3px;
        box-shadow: none;
        background-color: transparent; }
    .cv-content .cv-right .chapter .skill-bar-block .skill-bar .skill-progress .progress-bar {
        height: 100%;
        background-image: linear-gradient(to right, #EFA92E, yellow, #FCFCC4); }
    .cv-content .cv-left {
        padding-top: 80px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center; }
    .cv-content .cv-left .ava-block img {
        width: 80%;
        border-radius: 50%;
        margin-bottom: 20px; }
    .cv-content .cv-left .ava-block .ava-name {
        color: #EFA92E;
        font-family: 'Harabara';
        font-size: 35px; }
    .cv-content .cv-left .ava-block .ava-pos {
        font-family: 'Caviar-Dreams';
        font-size: 22px;
        font-weight: 700; }
    .cv-content .cv-left .cv-desc-wrap {
        margin: 50px 0px 70px; }
    .cv-content .cv-left .cv-desc-wrap .cv-desc {
        font-family: 'Caviar-Dreams';
        font-style: italic;
        font-size: 14px;
        margin-bottom: 20px; }
    .cv-content .cv-left .cv-contact .cv-contact-ele {
        margin-bottom: 20px; }
    .cv-content .cv-left .cv-contact .cv-contact-ele p {
        font-family: 'Caviar-Dreams';
        font-weight: 700;
        font-size: 13px;
        margin: 0px; }

    /*# sourceMappingURL=style.css.map */

</style>