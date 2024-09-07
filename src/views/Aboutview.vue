<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="olympic-games">
    <h1 class="main-title">Introduction to the Olympic Games</h1>

    <!-- History Section -->
    <section class="history section-card">
      <h2 class="section-title">History</h2>
      <p>{{ history }}</p>
    </section>

    <!-- Structure Section -->
    <section class="structure section-card">
      <h2 class="section-title">Structure</h2>

      <div class="structure-grid">
        <div>
          <h3>Governance</h3>
          <p>{{ structure.governance }}</p>
        </div>

        <div>
          <h3>Frequency</h3>
          <p>{{ structure.frequency }}</p>
        </div>

        <div>
          <h3>Categories</h3>
          <ul>
            <li v-for="category in structure.categories" :key="category">{{ category }}</li>
          </ul>
        </div>

        <div>
          <h3>Summer Sports</h3>
          <ul>
            <li v-for="sport in structure.sports.Summer" :key="sport">{{ sport }}</li>
          </ul>
        </div>

        <div>
          <h3>Winter Sports</h3>
          <ul>
            <li v-for="sport in structure.sports.Winter" :key="sport">{{ sport }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values section-card">
      <h2 class="section-title">Olympic Values</h2>
      <div class="values-grid">
        <div v-for="(description, value) in values" :key="value" class="value-card">
          <strong>{{ value }}:</strong>
          <p>{{ description }}</p>
        </div>
      </div>
    </section>

    <!-- Symbols Section -->
    <section class="symbols section-card">
      <h2 class="section-title">Symbols and Traditions</h2>
      <div class="symbols-grid">
        <div v-for="(description, symbol) in symbols" :key="symbol" class="symbol-card">
          <strong>{{ symbol }}:</strong>
          <p>{{ description }}</p>
        </div>
      </div>
    </section>

    <!-- Notable Moments Section -->
    <section class="moments section-card">
      <h2 class="section-title">Notable Moments</h2>
      <ul class="moments-list">
        <li v-for="moment in notableMoments" :key="moment">{{ moment }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import '@/assets/about.css';  // Adjust the path based on your project structure

export default {
  data() {
    return {
      history: `
        The Olympic Games trace their origins to ancient Greece, where the first recorded Games took place in 776 BC. 
        They were revived in 1896 by Pierre de Coubertin, aiming to promote international peace and understanding through sports.
      `,
      structure: {
        governance: "International Olympic Committee (IOC)",
        frequency: "Every four years",
        categories: ["Summer Olympics", "Winter Olympics"],
        sports: {
          Summer: ["Athletics", "Swimming", "Gymnastics", "Basketball", "Soccer"],
          Winter: ["Skiing", "Snowboarding", "Ice Hockey", "Figure Skating"]
        }
      },
      values: {
        Excellence: "Pushing human limits in sports",
        Friendship: "Building bonds between athletes and nations",
        Respect: "Promoting fair play and mutual understanding"
      },
      symbols: {
        "Olympic Rings": "Represents the union of five continents",
        "Olympic Flame": "Symbolizes continuity between ancient and modern Games",
        "Olympic Motto": "Citius, Altius, Fortius (Faster, Higher, Stronger)"
      },
      notableMoments: [
        "Jesse Owens' victories at the 1936 Berlin Olympics",
        "The Miracle on Ice in 1980",
        "Usain Bolt's sprint dominance from 2008 to 2016"
      ]
    };
  }
};
</script>
