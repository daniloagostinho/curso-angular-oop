import { Animal } from "./animal";

export class Gato extends Animal {
    override barulho(): string {
        return 'Miau!!'
    }
}