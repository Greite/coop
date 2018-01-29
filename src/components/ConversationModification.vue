<template>
	<div>
		<div class="card" style="width: 18rem;">
			<form @submit="modifierConversation">
				<div class="form-group">
    				<label for="label">Label</label>
    				<input type="text" v-model="label" class="form-control" id="label" placeholder="Label">
  				</div>
  				<div class="form-group">
    				<label for="topic">Topic</label>
    				<input type="text" v-model="topic" class="form-control" id="topic" placeholder="Topic">
  				</div>
				<center><input type="submit" class="btn btn-outline-primary" value="Modifier la conversation"></center>
				<center><router-link to="/conversations">Retour</router-link></center>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ConversationModification',
		data(){
			return {
				label: '',
				topic: ''
			}
		},
		mounted(){
			window.axios.get('channels/'+this.$route.params.id)
				.then((response) => {
        			this.label=response.data.label
        			this.topic=response.data.topic
      			})
		},
		methods: {
			modifierConversation(){
				window.axios.put('channels/'+this.$route.params.id, {
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
</style>