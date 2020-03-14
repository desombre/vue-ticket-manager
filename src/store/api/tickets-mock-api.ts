import { API } from './api';
import { Ticket } from '../data/ticket';
import { Label } from '../data/label';
import { LifecycleStates } from '../data/lifecycle-states-enum';

export default class TicketMockApi extends API<Ticket>{

    private _tickets: Array<Ticket>

    constructor() {
        super();
        this._tickets = [
            {
                id: "0",
                assignee: "Klaus Kleber",
                created: new Date(),
                updated: null,
                label: new Label("TODO", "#654321"),
                title: "Test tickets",
                description: "We need to test the tickets ASAP!",
                lifecycle: LifecycleStates.New
            }
        ];
    }


    readAll(): Promise<Ticket[]> {
        return new Promise((resolve, reject) => {
            resolve(this._tickets);
        })
    }

    readSingle(id: string): Promise<Ticket> {
        return new Promise((resolve, reject) => {
            resolve(this._tickets.find(ticket => ticket.id === id));
        })
    }

    update(id: string, obj: Ticket): Promise<Ticket> {
        return new Promise((resolve, reject) => {
            let index = this._tickets.findIndex(ticket => ticket.id === id);
            this._tickets[index] = obj;
            resolve(obj);
        })
    }

    delete(id: string): Promise<Ticket> {
        return new Promise((resolve, reject) => {
        let index = this._tickets.findIndex(ticket => ticket.id === id);
            let removedTicket = this._tickets.splice(index, 1);
            resolve(removedTicket[0]);
        }
    }

    create(obj: Ticket): Promise<Ticket> {
        return new Promise((resolve, reject) => {
            this._tickets.push(obj);
            resolve(obj);
        }
    }


}