<template>
<div>
    <header class="header">
        <!-- <a href="" class="logo"> -->
            <!-- <img src="../static/images/logo.png"> -->
        <!-- </a> -->
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon">
            </span></label>
        <ul class="menu">
            <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.to">{{link.name}}</router-link>
            </li>
        </ul>
    </header> 

    <main>
        <router-view/>
    </main>

    <footer class="footer-distributed-bottom">
        <p class="footer-bottom-text">
            <i class="far fa-copyright"></i> PyData Delhi 2019
        </p>
        <div class="footer-icons">
            <a v-for="(link, index) in social" :key="index" :href="link.link">
                <i :class="link.icon"></i>
            </a>
        </div>
    </footer>
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
      /*{
        id: 2,
        name: 'Archive',
        to: '/archive'
      },
      {
        id: 3,
          name: 'Blog',
          to: '/blog'
      },*/
      {
        id: 4,
          name: 'Sponsors',
          to: '/sponsors'
      },/*
      {
        id: 5,
          name: 'Volunteer',
          to: '/volunteer'
      },
      {
        id: 6,
          name: 'Team',
          to: '/team'
      },*/
      {
        id: 7,
          name: 'Contact',
          to: '/contact'
      }
    ],
    social: [
      {
        id: 0,
        name: 'Twitter',
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/PyDataDelhi'
      },
      {
        id: 1,
        name: 'Github',
        icon: 'fab fa-github',
        link: 'https://github.com/pydatadelhi'
      },
      {
        id: 2,
        name: 'Meetup',
        icon: 'fab fa-meetup',
        link: 'https://www.meetup.com/PyDataDelhi/'
      },
      {
        id: 3,
        name: 'Facebook',
        icon: 'fab fa-facebook-f',
        link: 'http://facebook.com/pydatadelhi'
      },
      {
        id: 4,
        name: 'Telegram',
        icon: 'fab fa-telegram',
        link: 'https://bit.do/joinpydd'
      },
      {
        id: 5,
        name: 'Youtube',
        icon: 'fab fa-youtube',
        link: 'https://www.youtube.com/channel/UCz_xSLNdtnkDsVTuYuLprMg'
      }
    ]
  })
}
</script>

<style scope>

</style>
