
const state = {
    tickets: [  {
        id: "0",
        assignee: "Klaus Kleber",
        created: new Date(),
        updated: null,
        label: "TODO",
        title: "Test tickets",
        description: "We need to test the tickets ASAP!",
        lifecycle: "new"
    }]

};

const getters = {
    allTickets: (state) => state.tickets

};

const actions = {
    async fetchTickets({ commit }) {
        //let tickets = new TicketMockApi().readAll();
        console.log("fetchTickets");
        commit('setTickets', state.tickets);
    },

    async addTicket({ commit }, ticket){
        ticket.lifecycle = "new";
        ticket.label = "TODO";

        ticket.created = new Date(),
        commit('addTicket', ticket);
    }
};

const mutations = {
    setTickets: (state, tickets) => state.tickets = tickets,
    addTicket: (state, ticket) => state.tickets.unshift(ticket)
};

export default {
    state,
    getters,
    actions,
    mutations
}