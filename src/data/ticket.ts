import { Label } from "./label";
import { LifecycleState } from './lifecycle-state';

export interface Ticket{
    id: string;
    assignee: string;
    created: Date;
    updated: Array<Date>;
    label: Label;
    title: string;
    description: string;
    lifecycle: LifecycleState;
}