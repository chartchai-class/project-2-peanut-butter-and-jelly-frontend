<template>
  <div class="olympic-games">
    <h1>Introduction to the Olympic Games</h1>

    <!-- History Section -->
    <section>
      <h2>History</h2>
      <p>{{ history }}</p>
    </section>

    <!-- Structure Section -->
    <section>
      <h2>Structure</h2>
      <h3>Governance</h3>
      <p>{{ structure.governance }}</p>

      <h3>Frequency</h3>
      <p>{{ structure.frequency }}</p>

      <h3>Categories</h3>
      <ul>
        <li v-for="category in structure.categories" :key="category">{{ category }}</li>
      </ul>

      <h3>Sports</h3>
      <div v-for="(sports, season) in structure.sports" :key="season">
        <h4>{{ season }} Sports</h4>
        <ul>
          <li v-for="sport in sports" :key="sport">{{ sport }}</li>
        </ul>
      </div>
    </section>

    <!-- Values Section -->
    <section>
      <h2>Olympic Values</h2>
      <ul>
        <li v-for="(description, value) in values" :key="value">
          <strong>{{ value }}:</strong> {{ description }}
        </li>
      </ul>
    </section>

    <!-- Symbols Section -->
    <section>
      <h2>Symbols and Traditions</h2>
      <ul>
        <li v-for="(description, symbol) in symbols" :key="symbol">
          <strong>{{ symbol }}:</strong> {{ description }}
        </li>
      </ul>
    </section>

    <!-- Notable Moments Section -->
    <section>
      <h2>Notable Moments</h2>
      <ul>
        <li v-for="moment in notableMoments" :key="moment">
          {{ moment }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
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

<style scoped>
.olympic-games {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
}

h1, h2, h3 {
  color: #004080;
}

section {
  margin-bottom: 30px;
}
</style>
