<template>
  <div>
    <div class="flash-message">{{ flashMessage }}</div>
    <input
      v-model="searchInput"
      type="text"
      class="autocomplete"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul v-show="isOpen" class="autocomplete-results">
      <li
        v-for="(result, index) in results"
        :key="index"
        class="autocomplete-result"
        :class="{ 'is-active': index === arrowCounter }"
        @click="setResult(result)"
      >
        {{ result.properties.city }}, {{ result.properties.context }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GeoSearch',
  data() {
    return {
      arrowCounter: -1,
      isOpen: false,
      flashMessage: '',
      searchInput: '',
      results: []
    };
  },
  methods: {
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > -1) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      // Set result if request match any location.
      if (this.results[this.arrowCounter]) {
        this.setResult(this.results[this.arrowCounter]);
        this.arrowCounter = -1;
      } else {
        this.flashMessage = `Veuillez saisir et sélectionner une ville valide.`;
      }
    },
    setResult(result) {
      this.flashMessage = '';
      this.$emit('submit', result.geometry.coordinates);
      this.isOpen = false;
    },
    async onChange() {
      if (this.searchInput) {
        this.isOpen = true;
        const { features } = await this.$axios.$get(
          `https://api-adresse.data.gouv.fr/search/?q=${this.searchInput}`
        );
        this.results = features;
      }
    }
  }
};
</script>
<style scoped>
.autocomplete {
  position: relative;
  width: 500px;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
}

.autocomplete-result {
  width: 500px;
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
