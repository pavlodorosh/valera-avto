<template>
    <v-app id="auth">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-alert v-if="error" type="error">
                            Пользователь не найден
                        </v-alert>
                        <v-card class="elevation-12">
                            <v-toolbar color="brown" dark flat>
                                <v-toolbar-title>Форма входа</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="E-mail"
                                        name="email"
                                        prepend-icon="mdi-email"
                                        type="text"
                                        :rules="rules"
										v-model="form.email"
                                        required
									    :disabled="loading"
                                        color="brown"
                                    ></v-text-field>

                                    <v-text-field
                                        id="password"
                                        label="Пароль"
                                        name="password"
                                        color="brown"
                                        :rules="rules"
										v-model="form.password"
                                        required
									    :disabled="loading"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="brown"
                                    block
                                    dark
									:loading="loading"
                                    @click="login"
                                    >Продолжить</v-btn
                                >
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        form: {
			email: null,
			password: null,
        },
        loading: false,
        error: false,
        rules: [value => !!value || "Поле не должно быть пустым"]
    }),
    methods: {
        login: function (e) {
			if(!this.loading){
				this.loading = true
				axios
					.post("/api/login", this.form)
					.then(res => {
						this.loading = false
                        this.error = false
						console.log(res.data)
					})
					.catch(error => {
                        this.loading = false
                        this.error = true
						console.log(error.response.data)
					});
			}
        }
    }
};
</script>

<style></style>
