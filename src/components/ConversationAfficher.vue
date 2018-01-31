<template>
	<div class="mar-top">
		<ul class="list-group">
			<li class="list-group-item"><center>{{this.channel.label}} <span class="badge badge-dark">{{this.channel.topic}}</span><button type="button" class="btn btn-outline-success float-right" @click="chargerMessage">Rafraichir</button></center></li>
			<conversationMessage v-for="message of messages" :key="message._id" :message="message"></conversationMessage>
			<li class="list-group-item">
				<center>
					<form @submit="posterMessage">
						<input type="text" v-model="message" placeholder="Message">
						<input type="submit" class="btn btn-outline-success" value="Envoyer">
					</form>
				</center>
			</li>
		</ul>
	</div>
</template>

<script>

import ConversationMessage from './ConversationMessage.vue'

export default {
	name: 'ConversationAfficher',
	components: {ConversationMessage},
	data(){
		return {
			channel: [],
			messages: [],
			message: '',
			timer: ''
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
		this.chargerMessage()
		this.timer = setInterval(this.chargerMessage, 10000)
		window.bus.$on("rechargerMessage", function(id){
			this.chargerMessage
		});
	},
	beforeDestroy(){
		clearInterval(this.timer)
	},
	methods: {
		posterMessage(){
			window.axios.post('channels/'+this.$route.params.id+"/posts", {
				message: this.message
			}).then((response) => {
				this.message=""
				this.chargerMessage()
			})
		},
		chargerMessage(){
			window.axios.get('channels/'+this.$route.params.id+"/posts")
			.then(response => {
				this.messages = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
		}
	}
}
</script>

<style scoped>
.mar-top{
	margin-top: 3.5rem;
}
</style>