<template>
	<div>
		<div>
			<ul class="list-group">
				<li class="list-group-item"><center>Conversations<button type="button" class="btn btn-outline-success float-right" @click="conversationCreer">Créer conversation</button></center></li>
    			<li class="list-group-item" v-for="channel of channels">
    				<span><router-link :to="{ name: 'conversation', params: {id:channel._id}}"><strong>{{channel.label}}</strong></router-link></span>
      				<span class="badge badge-primary badge-pill">{{channel.topic}}</span>
      				<span><div class="btn-group float-right" role="group" aria-label="Basic example">
  						<button type="button" class="btn btn-outline-warning" @click="listeModifier(channel._id)">Modifier</button>
  						<button type="button" class="btn btn-outline-danger" @click="listeSuppression(channel._id)">Supprimer</button>
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
			this.chargerListe()
		},
		methods: {
			chargerListe(){
				window.axios.get('channels')
				.then(response => {
      				this.channels = response.data
				})
    			.catch(e => {
      				this.errors.push(e)
    			})
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