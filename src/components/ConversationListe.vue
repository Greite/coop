<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
    	  			<li class="nav-item">
    	    			<a class="nav-link active" href="#/conversations">Convesation</a>
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
			<hr>
			<ul class="list-group">
				<li class="list-group-item">Conversations <button type="button" class="btn btn-success float-right" @click="conversationCreer">Créer conversation</button></li>
    			<li class="list-group-item" v-for="channel of channels">
    				<span><router-link :to="{ name: 'conversation', params: {id:channel._id}}"><strong>{{channel.label}}</strong></router-link></span>
      				<span class="badge badge-primary badge-pill">{{channel.topic}}</span>
      				<span><div class="btn-group float-right" role="group" aria-label="Basic example">
  						<button type="button" class="btn btn-warning" @click="listeModifier(channel._id)">Modifier</button>
  						<button type="button" class="btn btn-danger" @click="listeSuppression(channel._id)">Supprimer</button>
					</div></span>
    			</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'ConversationListe',
		data(){
			return {
				channels: [],
				id: ""
			}
		},
		mounted(){
			window.axios.get('channels')
			.then(response => {
      			this.channels = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
		},
		updated(){
			window.axios.get('channels')
			.then(response => {
      			this.channels = response.data
			})
    		.catch(e => {
      			this.errors.push(e)
    		})
		},
		methods: {
			logOut(){
				window.axios.delete('members/signout');
				this.$router.push({path: '/connexion'});
			},
			listeModifier(channelid){
				this.$router.push({name: 'conversation-modification', params: {id: channelid}});
			},
			listeSuppression(id){
				window.axios.delete('channels/'+id);
			},
			conversationCreer(){
				this.$router.push({path: '/conversation-creation'});
			}
		}
	}
</script>