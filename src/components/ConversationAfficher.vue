<template>
	<div>
		<div>
			<ul class="list-group">
				<li class="list-group-item"><center>{{this.channel.label}} <span class="badge badge-primary badge-pill">{{this.channel.topic}}</span></center></li>
    			<conversationMessage v-for="message of messages" :message="message"></conversationMessage>
    			<center><li class="list-group-item">
    				<form @submit="posterMessage">
						<input type="text" v-model="message" placeholder="Message">
						<input type="submit" class="btn btn-outline-success" value="Envoyer">
					</form>
				</li></center>
			</ul>
  		</div>
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
				message: ''
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
		},
		methods: {
			posterMessage(){
				window.axios.post('channels/'+this.$route.params.id+"/posts", {
        			message: this.message
      			}).then((response) => {
      				this.message=""
      			})
      			this.chargerMessage()
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