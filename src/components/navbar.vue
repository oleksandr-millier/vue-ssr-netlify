<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/">Home</router-link>
      </li>
      
      <li class="nav__item">
        <router-link class="nav__link" to="/about">About</router-link>
      </li>

      <li v-if="!$auth.isAuthenticated && !$auth.loading" class="nav__item">
        <a href="#" class="nav__link" @click.prevent="login">Login</a>
      </li>

      <li v-if="$auth.isAuthenticated" class="nav__item">
        <img
            :src="$auth.user.picture"
            alt="User's profile picture"
            width="50" />
        <div>{{ $auth.user.name }}</div>
        <a href="#" class="nav__link" @click.prevent="logout">Log out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
}
</script>

<style lang="scss">
.nav {
  padding: 20px;
  background: #36c;
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  &__item {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  &__item {
    &:first-child {
      margin-left: 0;
    }
  }
  &__link {
    color: #fff;
  }
}
</style>