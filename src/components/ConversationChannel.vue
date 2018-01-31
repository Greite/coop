<template>
	<li class="list-group-item">
    	<span><router-link :to="{ name: 'conversation', params: {id:channel._id}}"><strong>{{channel.label}}</strong></router-link></span>
    	<span class="badge badge-primary badge-pill">{{channel.topic}}</span>
    	<span><div class="btn-group float-right" role="group" aria-label="Basic example">
  		<button type="button" class="btn btn-outline-warning" @click="listeModifier(channel._id)">Modifier</button>
  		<button type="button" class="btn btn-outline-danger" @click="listeSuppression(channel._id)">Supprimer</button>
		</div></span>
    </li>
</template>

<script>
	export default {
		name: 'ConversationChannel',
		props: ['channel'],
		data(){
			return {
			}
		},
		methods: {
			listeModifier(channelid){
				this.$router.push({name: 'conversation-modification', params: {id: channelid}});
			},
			listeSuppression(id){
				window.axios.delete('channels/'+id);
			}
		}
	}
</script>