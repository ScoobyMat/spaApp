<template>
    <div class="m-3">
        Login component<br />
        <form>
            <div>
                <label for="email">Email:</label>
                <input v-model="form.email" type="email" id="email" />
            </div>
            <div>
                <label for="password">Hasło:</label>
                <input v-model="form.password" type="password" id="password" />
            </div>
            <button @click.prevent="login">Zaloguj się</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'; // Importujemy axios tutaj

export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        async login() {
            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/api/login", {
                    email: this.form.email,
                    password: this.form.password
                });
                this.$router.push({ name: "dashboard" });
            } catch (err) {
                console.log(err);
                this.form.email = "";
                this.form.password = "";
            }
        }
    }
};
</script>
