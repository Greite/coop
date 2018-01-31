<template>
	<div class="mar-top">
		<ul class="list-group">
			<li class="list-group-item"><center>Conversations<button type="button" class="btn btn-outline-success float-right" @click="conversationCreer">Créer conversation</button></center></li>
			<conversationChannel v-for="channel of channels" :key="channel._id" :channel="channel"></conversationChannel>
		</ul>
	</div>
	
</template>

<script>

import ConversationChannel from './ConversationChannel.vue'

export default {
	name: 'ConversationListe',
	components: {ConversationChannel},
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
		conversationCreer(){
			this.$router.push({path: '/conversation-creation'});
		}
	}
}
</script>

<style scoped>
.mar-top{
	margin-top: 3.5rem;
}
</style>