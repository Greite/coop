<template>
	<div class="card" style="width: 18rem;">
		<form @submit="seConnecter">
			<div class="form-group">
				<label for="email">Adresse email</label>
				<input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
			</div>
			<div class="form-group">
				<label for="password">Mot de passe</label>
				<input type="password" v-model="password" class="form-control" id="password" placeholder="Mot de passe">
			</div>
			<center><button type="submit" class="btn btn-outline-primary">Connexion</button></center>
			<center><router-link to="/membre-creation">Créer un compte</router-link></center>
		</form>
	</div>
</template>

<script>

export default {
	name: 'Connexion',
	data () {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		seConnecter(){
			window.axios.post('members/signin', {
				email: this.email,
				password: this.password,
			}).then((response) => {
				this.$store.commit('setMember', response.data);
				this.$store.commit('setToken', response.data.token);
				window.axios.defaults.params.token = response.data.token;
				this.$router.push({path: '/conversations'});
			}).catch((error) => {
				console.log(error)
			})
		}
	}
}
</script>

<style scoped>
.card {
	top: 30vh;
	padding: 10px;
	margin: 0 auto;
	float: none;
	margin-bottom: 10px;
}
</style>