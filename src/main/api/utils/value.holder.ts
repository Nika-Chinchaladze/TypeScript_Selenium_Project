export class ValueHolder<T> {
  private value: T = null as T;

  getValua(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}
