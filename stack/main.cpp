#include <iostream>
#include <string>

using namespace std;

template <class Item>
class Stack {
  int size;
  int capacity;
  Item* arr;

  public:
  Stack();
  ~Stack() { delete[] arr; }
  void push(Item);
  Item pop();
  bool isEmpty() { return size == 0; }
  string to_s();
  void print();

  private:
  void resize(int newCapacity);
};

template <class Item>
Stack<Item>::Stack() {
  capacity = 1;
  arr = new Item[capacity];
  size = 0;
}

template <class Item>
void Stack<Item>::push(Item item) {
  if (size == capacity) {
    resize(capacity*2);
  }
  arr[size] = item;
  size += 1;
}

template <class Item>
Item Stack<Item>::pop() {
  if (isEmpty()) { throw "popping from empty Stack"; }
  if (size == capacity/4 && capacity > 1) {
    resize(capacity/2);
  }
  Item top = arr[size];
  size -= 1;
  return top;
}

template <class Item>
string Stack<Item>::to_s() {
  string str = "";
  for (int i = 0; i < size; i++) {
    str.push_back(arr[i]);
  }
  return str;
}

template <class Item>
void Stack<Item>::print() {
  cout << to_s();
}

void printInstructions() {
  cout << "Enter some values for a Stack.  '-' pops from the Stack.  Enter 'q' to quit.\n";
  cout << "For example: a b c - d - - e f q\n";
}

template <class Item>
void Stack<Item>::resize(int newCapacity) {
  cout << "Resizing to " << newCapacity << '\n';

  Item *newArr = new Item[newCapacity];
  for (int i = 0; i < size; i++) {
    newArr[i] = arr[i];
  }
  delete[] arr;
  capacity = newCapacity;
  arr = newArr;
}

int main(int argc, char** argv)
{
  Stack<char> myStack;
  char newItem;

  printInstructions();

  while(cin >> newItem) {
    if (newItem == 'q' || newItem == 'Q') {
      break;
    }
    if (newItem == '-') {
      myStack.pop();
    } else {
      myStack.push(newItem);
    }
  }

  myStack.print();

  cout << "\ndone\n";
  return 0;
}


