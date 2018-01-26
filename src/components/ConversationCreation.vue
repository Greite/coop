<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
    	  			<li class="nav-item">
    	    			<a class="nav-link" href="#/conversations">Convesation</a>
    	  			</li>
    	  			<li class="nav-item">
    	   				<a class="nav-link" href="#/membres">Membres</a>
    	  			</li>
    	  			<form class="form-inline" @submit="logOut">
    					<button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Se déconnecter</button>
  					</form>
    			</ul>
			</div>
		</nav>
		<hr>
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
				<center><input type="submit" value="Créer la conversation"></center>
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
        			console.log('La conversation '+response.data.label+' a été créé.')
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