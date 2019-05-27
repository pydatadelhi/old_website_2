<template>
<div>
    <div>
        <div id="top">
            <div id="top-logo">
                <img src="../static/images/icons/mipmap-xxxhdpi.png">
            </div>
            <div id="top-menu">
                <div class="menu-icon fas fa-bars" v-on:click="showMenu"></div>
                <ul class="menu" v-if="allowMenu">
                    <li v-for="(link, index) in links" :key="index">
                        <router-link :to="link.to">
                            <div>{{ link.name }}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <main>
            <router-view/>
        </main>
    </div>
    <div>
        <footer class="footer-distributed">
            <div class="footer-left">
                <img src="static/images/logo.png" class="logo">
                <p class="footer-organization-about">
                    PyData Delhi brings together both users and developers of data analysis tools to share ideas and learn from each other. The goals are to provide data science enthusiasts, across various domains, a place to discuss how best to apply languages and tools to the challenges of data management, processing, analytics, and visualization.
                </p>
                    mail: <a href="mailto:pydatadelhi@gmail.com" target="_top">pydatadelhi@gmail.com</a>
                <br>
            </div>
            <div class="footer-center">
                <ul class="footer-center-links">
                    <li v-for="(link, index) in links" :key="index">
                        <router-link :to="link.to">
                            <div>
                                <p>{{ link.name }}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-right">
                <p class="footer-organization-about">
                    <span>Important Links</span>
                </p>
                <div class="footer-icons">
                    <a href="http://facebook.com/pydatadelhi"><i class="fab fa-facebook-f"></i></a> <!--facebook-->
                    <a href="https://twitter.com/PyDataDelhi"><i class="fab fa-twitter"></i></a> <!--twitter-->
                    <a href="https://www.meetup.com/PyDataDelhi/"><i class="fab fa-meetup"></i></a> <!--Meetup-->
                    <a href="https://github.com/pydatadelhi"><i class="fab fa-github"></i></a> <!--github-->
                    <a href="https://www.youtube.com/channel/UCz_xSLNdtnkDsVTuYuLprMg"><i class="fab fa-youtube"></i></a> <!--youtube-->
                    <a href="https://bit.do/joinpydd"><i class="fab fa-telegram"></i></a> <!--telegram-->
                </div> 
                <br>
                <p class="footer-organization-about">
                    <span>Credits</span>
                </p>
                <div class="footer-icons">
                    <a href="https://github.com/MSanKeys963"><img class="credit" src="https://avatars3.githubusercontent.com/u/20305658?s=460&v=4"></a><!--Sanket Verma-->
                    <a href="https://github.com/Arsh23"><img class="credit" src="https://avatars2.githubusercontent.com/u/15089721?s=460&v=4"></a><!--Arsh -->
                    <a href="https://github.com/ramantehlan"><img class="credit" src="https://avatars0.githubusercontent.com/u/29037312?s=460&v=4"></a><!--Raman Tehlan-->
                    <a href="https://github.com/code-monk08"><img class="credit" src="https://avatars0.githubusercontent.com/u/19390263?s=460&v=4"></a><!--Mayank Singh-->
                    <a href="https://github.com/codekhal"><img class="credit" src="https://avatars0.githubusercontent.com/u/32578541?s=460&v=4"></a><!--Khushal Vyas-->
                    <a href="https://github.com/neerajp99"><img class="credit" src="https://avatars1.githubusercontent.com/u/12716517?s=460&v=4"></a><!--Neeraj Pandey-->
                </div>
                <br>
                <p class="footer-organization-about">
                    <span>Contribute</span>
                </p>
                <div class="footer-icons">
                    <a href="https://github.com/pydatadelhi/pydatadelhi.github.io"><i class="fas fa-code-branch"></i></a>
                </div>
            </div>
        </footer>
        <div class="footer-distributed-bottom">
            <br>
            <p class="footer-bottom-text">2019 | PyData Delhi | All Rights Reserved</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    showMenu: function() {
      if(this.allowMenu){
        this.allowMenu = false
      }else{
        this.allowMenu = true
      }
    }
  },
  data: () => ({
    allowMenu: false,
     links: [
      {
        id: 0,
        name: 'Home',
        to: '/'
      },
      {
        id: 1,
        name: 'Conference',
        to: '/conference'
      },
      {
        id: 2,
        name: 'Archive',
        to: '/archive'
      },
      {
        id: 3,
          name: 'Blog',
          to: '/blog'
      },
      {
        id: 4,
          name: 'Sponsors',
          to: '/sponsors'
      },
      {
        id: 5,
          name: 'Volunteer',
          to: '/volunteer'
      },
      {
        id: 6,
          name: 'Team',
          to: '/team'
      },
      {
        id: 7,
          name: 'Contact',
          to: '/contact'
      }
    ]
  })
}
</script>

<style scope>

.credit
{
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
}


.footer-distributed 
 { 
    background-color: #161822;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    left: 0;
    bottom: 0;
    text-align: left;
    padding: 55px 50px;

}

.footer-distributed-bottom 
 { 
    color: white;
    background-color: #111216;
    width: 100%;
    height: 45px;
    position: relative;
    bottom: 0;
}

.footer-bottom-text 
 { 
    text-align: center;
    text-justify: center;
    vertical-align: bottom;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right 
 { 
    display: inline-block;
    vertical-align: top;
}

.footer-distributed .footer-left 
 { 
    width: 45%;
    color: #ffffff;
}

.footer-distributed .logo 
 { 
    width: 150px;
}


/* Footer Center */
.footer-distributed .footer-center 
 { 
    width: 30%;
    text-align: justify;
    text-justify: justify;
}

.footer-distributed .footer-center p 
 { 
    display: block;
    color: #ffffff;
    vertical-align: middle;
    margin: 0;
}


/* Footer Right */
.footer-distributed .footer-right 
 { 
    width: 20%;
}

.footer-distributed .footer-organization-about 
 { 
    line-height: 20px;
    color: #ffffff;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
    text-align: left;
}


/*Right Main Text*/
.footer-distributed .footer-organization-about span 
 { 
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons 
 { 
    margin-top: 25px;
}

.footer-distributed .footer-icons a 
 { 
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */
@media (max-width: 880px) 
 { 
    .footer-distributed 
    { 
        font: bold 14px sans-serif;
    }
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right 
    { 
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }
}
</style>
