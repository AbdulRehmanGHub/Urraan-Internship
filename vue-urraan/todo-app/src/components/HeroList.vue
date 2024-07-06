<template>
    <div>
        <h1>HERO LIST APP</h1>
        <ul class="hero-list">
            <li v-for="(hero, index) in heroes" :key="index" class="hero-item">
                {{ hero }}
                <span class="remove-button" @click="removeHero(index)">x</span>
            </li>
        </ul>
        <div class="add-hero-container">
            <input v-model="newHero" placeholder="Type Hero Name Here" />
            <button @click="addHero">Add Hero</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            heroes: [],
            newHero: ''
        };
    },
    methods: {
        addHero() {
            if (this.newHero.trim() !== '') {
                this.heroes.push(this.newHero.trim());
                this.newHero = '';
            }
        },
        removeHero(index) {
            this.heroes.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.hero-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 360px;
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.hero-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
.hero-item:last-child {
    border-bottom: none;
}
.remove-button {
    cursor: pointer;
}
.remove-button:hover {
    color: red;
}
.add-hero-container {
    display: flex;
    justify-content: center;
}
.add-hero-container input {
    padding: 10px 36px;
    border: 1px solid #ddd;
    border-radius: 10px;
    outline: none;
    margin-right: 10px;
}
.add-hero-container button {
    padding: 6px 18px;
    font-size: 14px;
    border: none;
    background-image: radial-gradient(circle 916px at 8.2% 2.5%, rgb(223, 41, 80)0%, rgb(255, 128, 204) 17%, rgba(255, 119, 183, 0.86) 47.2%, rgba(247,246,246,1) 100.2%, rgba(247,246,246,1) 100.2%);
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
button:hover {
    background-color: #d81b60;
}
</style>
