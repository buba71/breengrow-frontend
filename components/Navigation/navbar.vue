<template>
  <nav class="nav">
    <div class="nav__brand">
      Breengrow<img src="~assets/images/shopping-basket.png" />
    </div>
    {{ loggedUserState }}
    {{ isLogged }}
    <ul class="nav__links">
      <li class="nav__item">
        <nuxt-link to="/create-grower">Ouvrir une ruche</nuxt-link>
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
      route: '/security/login',
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
      if (this.isLogged) {
        const userRole = this.loggedUserState.roles[0];
        switch (userRole) {
          case 'ROLE_GROWER':
            this.route = `/accounts/growerProfile/${this.loggedUserState.parentId}`;
            this.linkToDisplay = 'accéder à ma ruche';
            break;
          case 'ROLE_CONSUMER':
            this.route = '/accounts/consumerProfile';
            this.linkToDisplay = 'accéder à mon compte';
            break;
          case 'ROLE_DELIVERER':
            this.route = '/accounts/delivererProfile';
            this.linkToDisplay = 'accéder à mon compte';
            break;
          default:
            this.route = '/security/login';
            this.linkToDisplay = 'Se connecter';
        }
      }
    }
  }
};
</script>
