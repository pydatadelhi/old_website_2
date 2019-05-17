<template>
  <div>

    <div id="top">

      <div id="top-logo">
        <img src="../static/images/icons/mipmap-xxxhdpi.png">
      </div>

      <div id="top-menu">
        <div class="menu-icon fas fa-bars" v-on:click="showMenu"></div>
        <ul class="menu" v-if="allowMenu">
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.to"><div>{{ link.name }}</div></router-link>
          </li>
        </ul>
      </div>

    </div>

    <main>
      <router-view/>
    </main>

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
