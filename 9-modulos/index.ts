import Operator from "./modulo";
export  class Add implements Operator {
    eval(x: number, y: number): number {
        return x + y;
    }
}
