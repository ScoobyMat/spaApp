<template>
    <div class="container">
        Spa component<br>
        <Navigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
    components: {
        Navigation
    }
};
</script>
