<template>
  <nav class="nav">
    <div class="nav__brand">
      Breengrow<img src="~assets/images/shopping-basket.png" />
    </div>
    {{ loggedUserState }}
    {{ isLogged }}
    <ul class="nav__links">
      <li class="nav__item">
        <nuxt-link to="register">Ouvrir une ruche</nuxt-link>
      </li>
      <!-- NAVGUARD -->
      <li class="nav__item">
        <nuxt-link :to="route">{{ linkToDisplay }}</nuxt-link>
      </li>

      <!-- NAVGUARD -->

      <li class="nav__item">
        <nuxt-link to="/">Comment ça fonctionne</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  data() {
    return {
      route: '/login',
      linkToDisplay: 'Se connecter'
    };
  },
  computed: {
    ...mapGetters(['loggedUserState', 'isLogged'])
  },
  mounted() {
    this.accessGuard();
  },
  methods: {
    accessGuard() {
      if (this.isLogged && this.loggedUserState.roles[0] === 'ROLE_GROWER') {
        this.route = '/growerProfile';
        this.linkToDisplay = 'accéder à ma ruche';
      }
    }
  }
};
</script>
