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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing s	
                </p>
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
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
                <br>
                <p class="footer-organization-about">
                    <span>Credits</span>
                </p>
                <div class="footer-icons">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
                <br>
                <p class="footer-organization-about">
                    <span>Contribute</span>
                </p>
                <div class="footer-icons">
                    <a href="#"></a>
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
        name: 'Home',
        to: '/'
      },
      {
        name: 'Conference',
        to: '/conference'
      },
      {
        name: 'Archive',
        to: '/archive'
      },
      {
        name: 'Blog',
        to: '/blog'
      },
      {
        name: 'Sponsors',
        to: '/sponsors'
      },
      {
        name: 'Volunteer',
        to: '/volunteer'
      },
      {
        name: 'News',
        to: '/news'
      },
      {
        name: 'Team',
        to: '/team'
      },
      {
        name: 'Contact',
        to: '/contact'
      }
    ]
  })
}
</script>

<style scope>

.footer-distributed 
 { 
    background-color: #161822;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
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
    position: fixed;
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
    color: #92999f;
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
