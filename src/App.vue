<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    padding: 5px 15px 5px 0;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li a:hover {
    color: #404040;
  }
</style>


<script>
export default {
  data: () => ({
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