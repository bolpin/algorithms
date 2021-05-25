#include <iostream>
#include <string>

using namespace std;

template <class Item>
class List {
  struct Node
  {
    Item item;
    Node* next;
  };

  Node *head;
  int length;

  public:
  List();
  ~List(){}
  void push(Item item);
  Item pop();
  bool isEmpty() { return length == 0; }

  string to_s();
};

template <class Item>
List<Item>::List(){
  head = NULL;
  length = 0;
}

template <class Item>
string List<Item>::to_s() {
  string str = "";

  Node* iterator = head;
  while(iterator != NULL) {
    str.push_back(iterator->item);
    str.push_back(' ');
    iterator = iterator->next;
  }
  return str;
}

template <class Item>
void List<Item>::push(Item item) {
  cout << "pushing " << item << "\n";
  Node* newNode = new Node;
  newNode->item = item;
  newNode->next = head;
  head = newNode;
  ++length;
}

template <class Item>
Item List<Item>::pop() {
  if (length == 0) {
    cout << "underflow error!\n";
    exit(EXIT_FAILURE);
  } 

  Node* poppedNode = head;
  Item item = poppedNode->item;
  head = poppedNode->next;
  --length;
  cout << "popping " << item << "\n";
  delete poppedNode;
  return item;
}

void printInstructions() {
  cout << "Type some chars to add to the list. '-' pops from the list and 'q' ends input\n";
  cout << "Example: a b c - d e - q\n";
}

int main(int argc, char** argv)
{
  List<char> myList;
  char newItem;

  printInstructions();

  while(cin >> newItem) {
    if (newItem == 'q' || newItem == 'Q') {
      break;
    } else if (newItem == '-') {
      myList.pop();
    } else {
      myList.push(newItem);
    }
  }

  cout << "The LIFO list now contains: " << myList.to_s() << "\n";

  return 0;
}

