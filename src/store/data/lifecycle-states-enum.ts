import { LifecycleState } from './lifecycle-state';
export class LifecycleStates {
    public static Completed: LifecycleState= new LifecycleState("Completed", "#20bf6b");
    public static Reviewing: LifecycleState = new LifecycleState("Reviewing", "#a55eea", [LifecycleStates.Completed] ); //can not go back to LifecycleStates.Processing

    public static Processing: LifecycleState = new LifecycleState("Processing", "#0fb9b1", [LifecycleStates.Reviewing] );

    public static New: LifecycleState = new LifecycleState("New", "#f7b731", [LifecycleStates.Processing]);

  }
