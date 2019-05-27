<template>
  <div>
    <div id="top">
      
<nav>
  <div> 
    <img src="static/images/logo.png" class="logo">
  </div>
  <div class="f">
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.to}`">{{routes.name}}</router-link>
  </div>
</nav>

      <!-- <div id="top-menu">                                              /////Will make responsive in next commit
        <div class="menu-icon fas fa-bars" v-on:click="showMenu"></div>
        <ul class="menu" v-if="allowMenu">
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.to"><div>{{ link.name }}</div></router-link>
          </li>
        </ul>
      </div> -->

    </div>

    <!-- <main>
      <router-view/>
      <Navigation />
      <router-link />
    </main> -->

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
