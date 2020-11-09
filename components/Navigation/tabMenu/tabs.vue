<template>
  <div>
    <nav class="tabs grid">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'is-active': tab.isActive }"
        class="tab-link four"
        @click="selectTab(tab)"
      >
        {{ tab.name }}
      </button>
    </nav>
    <div class="tab-content"><slot></slot></div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.tab-link {
  background-color: #cccccc;
  color: #7c7676;
  border: none;
  outline: none;
  padding: 5px 5px;
  cursor: pointer;
  transition: 0.5s;
}

.is-active {
  background-color: $primary-color;
  color: #ffffff;
}
</style>
