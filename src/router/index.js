import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/Connexion'
import MembreCreation from '@/components/MembreCreation'
import ConversationListe from '@/components/ConversationListe'
import ConversationCreation from "@/components/ConversationCreation";
import ConversationModification from "@/components/ConversationModification";
import ConversationAfficher from "@/components/ConversationAfficher";
import MembreListe from "@/components/MembreListe";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: Connexion
    },
    {
    	path: '/membre-creation',
    	component: MembreCreation
    },
    {
    	path: '/conversations',
    	component: ConversationListe
    },
    {
      path: '/conversation-creation',
      component: ConversationCreation
    },
    {
      name: 'conversation-modification',
      path: '/conversation-modification/:id',
      component: ConversationModification
    },
    {
      name: 'conversation-suppression',
      path: '/conversation-suppression/:id',
      component: ConversationListe
    },
    {
      name: 'conversation',
      path: '/conversation/:id',
      component: ConversationAfficher
    },
    {
      path: '/membres',
      component: MembreListe
    }
  ]
})
