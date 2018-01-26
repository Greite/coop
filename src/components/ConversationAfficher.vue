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
		<div>
			<ul class="list-group">
				<li class="list-group-item">{{this.channel.label}} <span class="badge badge-primary badge-pill">{{this.channel.topic}}</span></li>
    			<li class="list-group-item" v-for="message of messages">
    				<span>{{message.message}}</span>
    				<span><div class="btn-group float-right" role="group" aria-label="Basic example">
  						<button type="button" class="btn btn-warning" @click="modifierMessage">Modifier</button>
  						<button type="button" class="btn btn-danger" @click="messageSuppression(message._id)">Supprimer</button>
					</div></span>
    			</li>
    			<center><li class="list-group-item">
    				<form @submit="posterMessage">
						<input type="text" v-model="message" placeholder="Message">
						<input type="submit" value="Envoyer">
					</form>
				</li></center>
			</ul>
  		</div>
	</div>
</template>

<script>
	export default {
		name: 'ConversationAfficher',
		data(){
			return {
				channel: [],
				messages: []
			}
		},
		mounted(){
			window.axios.get('channels/'+this.$route.params.id)
			.then(response => {
      			this.channel = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
    		window.axios.get('channels/'+this.$route.params.id+"/posts")
			.then(response => {
      			this.messages = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
		},
		updated(){
			window.axios.get('channels/'+this.$route.params.id+"/posts")
			.then(response => {
      			this.messages = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
		},
		methods: {
			posterMessage(){
				window.axios.post('channels/'+this.$route.params.id+"/posts", {
        			message: this.message
      			}).then((response) => {
      				this.message=""
        			console.log('Le message "'+response.data.message+'" a été créé.')
      			})
			},
			messageSuppression(id){
				window.axios.delete('channels/'+this.$route.params.id+"/posts/"+id);
			},
			modifierMessage(){

			},
			logOut(){
				window.axios.delete('members/signout');
				this.$router.push({path: '/connexion'});
			}
		}
	}
</script>