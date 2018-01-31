<template>
	<div class="mar-top">
		<div class="card" style="width: 18rem;">
			<form @submit="creerConversation">
				<div class="form-group">
					<label for="label">Label</label>
					<input type="text" v-model="label" class="form-control" id="label" placeholder="Label">
				</div>
				<div class="form-group">
					<label for="topic">Topic</label>
					<input type="text" v-model="topic" class="form-control" id="topic" placeholder="Topic">
				</div>
				<center><input type="submit" class="btn btn-outline-primary" value="Créer la conversation"></center>
				<center><router-link to="/conversations">Retour</router-link></center>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConversationCreation',
	data(){
		return {
			label: '',
			topic: ''
		}
	},
	methods: {
		creerConversation(){
			window.axios.post('channels', {
				label: this.label,
				topic: this.topic
			}).then((response) => {
				this.$router.push({path: '/conversations'});
			})
		}
	}
}
</script>

<style scoped>
.card {
	padding: 10px;
	margin: 0 auto;
	float: none;
	margin-bottom: 10px;
}
.mar-top{
	margin-top: 3.5rem;
}
</style>